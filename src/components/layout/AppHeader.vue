<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBuilderStore }  from '@/stores/builder.js'
import { useThemeStore }    from '@/stores/theme.js'
import { useAuthStore }     from '@/stores/auth.js'
import { useProjectStore }  from '@/stores/project.js'
import { exportZip }        from '@/utils/zipExporter.js'

const router       = useRouter()
const store        = useBuilderStore()
const themeStore   = useThemeStore()
const authStore    = useAuthStore()
const projectStore = useProjectStore()

const projectName = computed(() => projectStore.activeProject?.name ?? 'Untitled')

const fileInputRef = ref(null)

function switchProject(projectId) {
  if (projectId === projectStore.activeProjectId) return
  router.push({ name: 'builder', params: { projectId } })
}

function onClear() {
  if (store.blockCount === 0) return
  if (confirm('Clear this page? All blocks on the current page will be removed.')) {
    store.clearCanvas()
  }
}

async function onExportZip() {
  await exportZip(store.pages, themeStore)
}

// ─── Save project (download JSON) — v2.0 format ───────────
function saveProject() {
  const payload = {
    version:        '2.0',
    savedAt:        new Date().toISOString(),
    pages:          JSON.parse(JSON.stringify(store.pages)),
    activePageId:   store.activePageId,
    activeCategory: store.activeCategory,
    theme: {
      activeThemeId:  themeStore.activeThemeId,
      customizations: JSON.parse(JSON.stringify(themeStore.customizations)),
    },
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = 'page-builder-project.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ─── Load project (pick JSON file) ────────────────────────
function loadProject() {
  fileInputRef.value?.click()
}

function onFileSelected(event) {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result)

      // Detect format version
      const isV2 = data.version === '2.0' && Array.isArray(data.pages) && data.pages.length > 0
      const isV1 = !isV2 && Array.isArray(data?.canvas?.blocks)

      if (!isV2 && !isV1) {
        alert('Invalid project file: unrecognised format.')
        fileInputRef.value.value = ''
        return
      }

      // Confirm before overwriting an existing project
      if (store.anyPageHasBlocks && !confirm('Load project? Your current pages will be replaced.')) {
        fileInputRef.value.value = ''
        return
      }

      if (isV2) {
        // v2.0 — multi-page
        store.loadPagesData({
          pages:          data.pages,
          activePageId:   data.activePageId,
          activeCategory: data.activeCategory,
        })
      } else {
        // v1.0 — single-page backward compat
        store.loadCanvasData({
          blocks:         data.canvas.blocks  ?? [],
          activeCategory: data.canvas.activeCategory ?? 'navigation',
        })
      }

      // Restore theme (if saved)
      if (data.theme?.activeThemeId) {
        themeStore.selectTheme(data.theme.activeThemeId, { keepCustomizations: false })
        const cust = data.theme.customizations ?? {}
        Object.entries(cust).forEach(([k, v]) => themeStore.updateVar(k, v))
      }

    } catch (_) {
      alert('Could not read project file. Make sure it is a valid .json project export.')
    }

    // Reset input so the same file can be loaded again if needed
    if (fileInputRef.value) fileInputRef.value.value = ''
  }

  reader.readAsText(file)
}
</script>

<template>
  <header class="app-header">
    <!-- Brand -->
    <span class="app-title" role="button" @click="authStore.isAuthenticated ? router.push('/') : null" :title="authStore.isAuthenticated ? 'Back to Dashboard' : ''">
      <i class="bi bi-columns-gap"></i>
      Bootstrap <span>Page Builder</span>
    </span>

    <!-- Project switcher dropdown (when authenticated) -->
    <div v-if="authStore.isAuthenticated && projectStore.activeProjectId" class="dropdown project-switcher">
      <button
        class="project-name-badge dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        :title="projectName"
      >
        {{ projectName }}
      </button>
      <ul class="dropdown-menu project-switcher__menu">
        <li class="dropdown-item-text small text-muted px-3 py-1">
          Switch project
        </li>
        <li v-for="p in projectStore.projects" :key="p.id">
          <button
            class="dropdown-item d-flex align-items-center gap-2"
            :class="{ 'active': p.id === projectStore.activeProjectId }"
            @click="switchProject(p.id)"
          >
            <i class="bi" :class="p.id === projectStore.activeProjectId ? 'bi-check-lg' : 'bi-file-earmark'"></i>
            <span class="text-truncate" style="max-width:180px;">{{ p.name }}</span>
          </button>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <button class="dropdown-item" @click="router.push('/')">
            <i class="bi bi-grid me-2"></i>All Projects
          </button>
        </li>
      </ul>
    </div>

    <!-- Cloud save status indicator -->
    <span v-if="authStore.isAuthenticated && projectStore.activeProjectId" class="save-status" :class="`save-status--${projectStore.saveStatus}`">
      <i v-if="projectStore.saveStatus === 'saved'" class="bi bi-cloud-check"></i>
      <span v-else-if="projectStore.saveStatus === 'saving'" class="spinner-border spinner-border-sm"></span>
      <i v-else-if="projectStore.saveStatus === 'unsaved'" class="bi bi-cloud-arrow-up"></i>
      <i v-else-if="projectStore.saveStatus === 'error'" class="bi bi-cloud-slash"></i>
      <small>{{ projectStore.saveStatus === 'saved' ? 'Saved' : projectStore.saveStatus === 'saving' ? 'Saving...' : projectStore.saveStatus === 'error' ? 'Error' : '' }}</small>
    </span>

    <!-- Block count indicator (active page) -->
    <span v-if="store.blockCount > 0" class="block-count-badge">
      {{ store.blockCount }} block{{ store.blockCount !== 1 ? 's' : '' }}
    </span>

    <div class="header-divider"></div>

    <!-- Theme chooser button -->
    <button
      class="btn btn-sm btn-outline-light theme-btn"
      :class="{ 'theme-btn--active': themeStore.activeThemeId }"
      :title="themeStore.activeTheme ? `Theme: ${themeStore.activeTheme.name}` : 'Choose a theme'"
      @click="themeStore.openPicker()"
    >
      <i class="bi bi-palette2 me-1"></i>
      <span v-if="themeStore.activeTheme">{{ themeStore.activeTheme.name }}</span>
      <span v-else>Theme</span>
    </button>

    <div class="header-divider"></div>

    <!-- Actions -->
    <button
      class="btn btn-sm btn-outline-light"
      :disabled="!store.hasBlocks"
      @click="store.previewOpen = true"
    >
      <i class="bi bi-eye me-1"></i>Preview
    </button>

    <!-- Save / Load project (JSON) -->
    <button
      class="btn btn-sm btn-outline-light"
      :disabled="!store.anyPageHasBlocks"
      title="Save project as JSON"
      @click="saveProject"
    >
      <i class="bi bi-floppy me-1"></i>Save
    </button>

    <button
      class="btn btn-sm btn-outline-light"
      title="Load a saved project JSON"
      @click="loadProject"
    >
      <i class="bi bi-folder2-open me-1"></i>Load
    </button>

    <button
      class="btn btn-sm btn-primary"
      :disabled="!store.anyPageHasBlocks"
      title="Export all pages as ZIP (HTML + CSS + JS)"
      @click="onExportZip"
    >
      <i class="bi bi-file-zip me-1"></i>Export ZIP
    </button>

    <div class="header-divider"></div>

    <button
      class="btn btn-sm btn-outline-danger"
      :disabled="store.blockCount === 0"
      title="Clear current page"
      @click="onClear"
    >
      <i class="bi bi-trash3 me-1"></i>Clear
    </button>

    <div class="header-divider"></div>

    <!-- Auth: Sign in / User menu -->
    <button
      v-if="authStore.isGuest"
      class="btn btn-sm btn-outline-light"
      @click="authStore.openLoginModal()"
    >
      <i class="bi bi-box-arrow-in-right me-1"></i>Sign In
    </button>

    <div v-else class="user-menu dropdown">
      <button
        class="btn btn-sm btn-outline-light dropdown-toggle user-menu-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          v-if="authStore.user?.photoURL"
          :src="authStore.user.photoURL"
          :alt="authStore.user.displayName"
          class="user-avatar"
          referrerpolicy="no-referrer"
        />
        <span v-else class="bi bi-person-circle"></span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li class="dropdown-item-text">
          <strong>{{ authStore.user?.displayName }}</strong>
          <br /><small class="text-muted">{{ authStore.user?.email }}</small>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <button class="dropdown-item" @click="router.push('/')">
            <i class="bi bi-grid me-2"></i>Dashboard
          </button>
        </li>
        <li>
          <button class="dropdown-item" @click="router.push('/profile')">
            <i class="bi bi-person me-2"></i>Profile
          </button>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <button class="dropdown-item text-danger" @click="authStore.signOut(); router.push('/builder')">
            <i class="bi bi-box-arrow-right me-2"></i>Sign Out
          </button>
        </li>
      </ul>
    </div>

    <!-- Hidden file input for loading JSON -->
    <input
      ref="fileInputRef"
      type="file"
      accept=".json,application/json"
      style="display:none"
      @change="onFileSelected"
    />
  </header>
</template>
