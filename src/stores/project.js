/**
 * Project store — manages the active project, project list,
 * cloud save status, and orchestrates Firestore ↔ builder/theme syncing.
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { useThemeStore }   from '@/stores/theme.js'
import {
  createProject,
  getProject,
  getUserProjects,
  updateProjectData,
  updateProjectName,
  deleteProject as deleteProjectDoc,
  getAppConfig,
} from '@/services/projectService.js'

export const useProjectStore = defineStore('project', () => {
  // ─── State ──────────────────────────────────────────────────
  const projects        = ref([])          // ProjectMeta[] — user's project list
  const activeProjectId = ref(null)        // string | null
  const saveStatus      = ref('saved')     // 'saved' | 'saving' | 'unsaved' | 'error'
  const lastSavedAt     = ref(null)        // Date | null
  const appConfig       = ref(null)        // { freeTierMaxProjects, ... }

  // ─── Getters ────────────────────────────────────────────────
  const activeProject = computed(() =>
    projects.value.find(p => p.id === activeProjectId.value) ?? null
  )

  const projectCount = computed(() => projects.value.length)

  const canCreateProject = computed(() => {
    if (!appConfig.value) return true
    // Pro users: unlimited (checked via subscription in Phase 9)
    return projects.value.length < appConfig.value.freeTierMaxProjects
  })

  // ─── Load Projects ─────────────────────────────────────────

  /**
   * Fetch all projects for the given user from Firestore.
   * Also fetches the app config for tier limits.
   */
  async function loadUserProjects(uid) {
    try {
      const [userProjects, config] = await Promise.all([
        getUserProjects(uid),
        getAppConfig(),
      ])
      projects.value  = userProjects
      appConfig.value = config
    } catch (err) {
      console.error('Failed to load user projects:', err)
      // Ensure we still have defaults so the UI doesn't break
      projects.value  = []
      appConfig.value = { freeTierMaxProjects: 3, proPriceMonthly: 500, stripePriceId: null }
    }
  }

  // ─── Open Project ──────────────────────────────────────────

  /**
   * Load a project from Firestore and hydrate the builder + theme stores.
   * @param {string} projectId
   * @returns {boolean} — true if successful
   */
  async function openProject(projectId) {
    const project = await getProject(projectId)
    if (!project || !project.data) return false

    const builderStore = useBuilderStore()
    const themeStore   = useThemeStore()
    const data = project.data

    // Hydrate builder state
    if (data.version === '2.0' && Array.isArray(data.pages)) {
      builderStore.loadPagesData({
        pages:          data.pages,
        activePageId:   data.activePageId,
        activeCategory: data.activeCategory,
      })
    }

    // Hydrate theme state
    if (data.theme?.activeThemeId) {
      themeStore.selectTheme(data.theme.activeThemeId, { keepCustomizations: false })
      const cust = data.theme.customizations ?? {}
      Object.entries(cust).forEach(([k, v]) => themeStore.updateVar(k, v))
    }

    activeProjectId.value = projectId
    saveStatus.value      = 'saved'
    lastSavedAt.value     = project.updatedAt?.toDate?.() ?? new Date()

    return true
  }

  // ─── Create New Project ────────────────────────────────────

  /**
   * Create a new empty project in Firestore and open it.
   * @param {string} uid  — owner's Firebase UID
   * @param {string} name — project name
   * @returns {string} projectId
   */
  async function createNewProject(uid, name = 'Untitled Project') {
    const builderStore = useBuilderStore()
    const themeStore   = useThemeStore()

    // Reset builder to fresh state
    builderStore.loadPagesData({
      pages:          [{ id: `p${Date.now().toString(36)}`, name: 'Page 1', blocks: [] }],
      activePageId:   null, // will default to first page
      activeCategory: 'navigation',
    })
    themeStore.selectTheme(null)

    const emptyData = _serializeCurrentState()
    const projectId = await createProject(uid, name, emptyData)

    // Add to local list + set active
    projects.value.unshift({
      id:        projectId,
      ownerId:   uid,
      name,
      data:      emptyData,
      createdAt: new Date(),
      updatedAt: new Date(),
      sharing:   { enabled: false, shareToken: null },
    })
    activeProjectId.value = projectId
    saveStatus.value      = 'saved'
    lastSavedAt.value     = new Date()

    return projectId
  }

  // ─── Save Current Project ──────────────────────────────────

  /**
   * Serialize the current builder + theme state and save to Firestore.
   * Called by the auto-save watcher in BuilderPage.vue.
   */
  async function saveCurrentProject() {
    if (!activeProjectId.value) return

    saveStatus.value = 'saving'
    try {
      const data = _serializeCurrentState()
      await updateProjectData(activeProjectId.value, data)
      saveStatus.value  = 'saved'
      lastSavedAt.value = new Date()

      // Update local list entry
      const idx = projects.value.findIndex(p => p.id === activeProjectId.value)
      if (idx !== -1) {
        projects.value[idx].data      = data
        projects.value[idx].updatedAt = new Date()
      }
    } catch (err) {
      console.error('Cloud save failed:', err)
      saveStatus.value = 'error'
    }
  }

  /**
   * Rename the active project.
   * @param {string} name
   */
  async function renameProject(name) {
    if (!activeProjectId.value) return
    await updateProjectName(activeProjectId.value, name)
    const idx = projects.value.findIndex(p => p.id === activeProjectId.value)
    if (idx !== -1) projects.value[idx].name = name
  }

  // ─── Delete Project ────────────────────────────────────────

  /**
   * Delete a project from Firestore and the local list.
   * @param {string} projectId
   */
  async function removeProject(projectId) {
    await deleteProjectDoc(projectId)
    projects.value = projects.value.filter(p => p.id !== projectId)
    if (activeProjectId.value === projectId) {
      activeProjectId.value = null
    }
  }

  // ─── Duplicate Project ─────────────────────────────────────

  /**
   * Duplicate a project (creates a new Firestore doc with copied data).
   * @param {string} uid       — owner uid
   * @param {string} projectId — source project
   * @returns {string} new project ID
   */
  async function duplicateProject(uid, projectId) {
    const source = await getProject(projectId)
    if (!source) return null

    const newName = `${source.name} (Copy)`
    const newId   = await createProject(uid, newName, source.data)

    projects.value.unshift({
      id:        newId,
      ownerId:   uid,
      name:      newName,
      data:      source.data,
      createdAt: new Date(),
      updatedAt: new Date(),
      sharing:   { enabled: false, shareToken: null },
    })

    return newId
  }

  // ─── Mark Unsaved ──────────────────────────────────────────

  function markUnsaved() {
    if (activeProjectId.value && saveStatus.value === 'saved') {
      saveStatus.value = 'unsaved'
    }
  }

  // ─── Internal Helpers ──────────────────────────────────────

  function _serializeCurrentState() {
    const builderStore = useBuilderStore()
    const themeStore   = useThemeStore()

    return {
      version:        '2.0',
      savedAt:        new Date().toISOString(),
      pages:          JSON.parse(JSON.stringify(builderStore.pages)),
      activePageId:   builderStore.activePageId,
      activeCategory: builderStore.activeCategory,
      theme: {
        activeThemeId:  themeStore.activeThemeId,
        customizations: JSON.parse(JSON.stringify(themeStore.customizations)),
      },
    }
  }

  // ─── Reset ─────────────────────────────────────────────────

  function $reset() {
    projects.value        = []
    activeProjectId.value = null
    saveStatus.value      = 'saved'
    lastSavedAt.value     = null
    appConfig.value       = null
  }

  return {
    // State
    projects,
    activeProjectId,
    saveStatus,
    lastSavedAt,
    appConfig,
    // Getters
    activeProject,
    projectCount,
    canCreateProject,
    // Actions
    loadUserProjects,
    openProject,
    createNewProject,
    saveCurrentProject,
    renameProject,
    removeProject,
    duplicateProject,
    markUnsaved,
    $reset,
  }
})
