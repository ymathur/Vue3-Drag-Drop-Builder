<script setup>
/**
 * DashboardPage — project management home.
 * Shows all user projects in a card grid with create/open/rename/duplicate/delete.
 */
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore }    from '@/stores/auth.js'
import { useProjectStore } from '@/stores/project.js'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import ProjectCard     from '@/components/dashboard/ProjectCard.vue'

const router       = useRouter()
const authStore    = useAuthStore()
const projectStore = useProjectStore()

const loading = ref(true)

const maxProjects = computed(() => projectStore.appConfig?.freeTierMaxProjects ?? 3)
const tierLabel   = computed(() => 'Free') // Phase 9 will check subscription

onMounted(async () => {
  try {
    if (authStore.isAuthenticated) {
      await projectStore.loadUserProjects(authStore.user.uid)
    }
  } catch (err) {
    console.error('Dashboard: failed to load projects:', err)
  } finally {
    loading.value = false
  }
})

async function createProject() {
  if (!authStore.isAuthenticated) {
    authStore.openLoginModal()
    return
  }
  if (!projectStore.canCreateProject) {
    alert(`You've reached the limit of ${maxProjects.value} projects on the ${tierLabel.value} plan. Upgrade to Pro for unlimited projects.`)
    return
  }
  const projectId = await projectStore.createNewProject(authStore.user.uid)
  router.push({ name: 'builder', params: { projectId } })
}

function openProject(projectId) {
  router.push({ name: 'builder', params: { projectId } })
}

async function renameProject(projectId, newName) {
  await projectStore.renameProject(newName)
}

async function duplicateProject(projectId) {
  if (!projectStore.canCreateProject) {
    alert(`You've reached the limit of ${maxProjects.value} projects. Upgrade to Pro for unlimited projects.`)
    return
  }
  await projectStore.duplicateProject(authStore.user.uid, projectId)
}

async function deleteProject(projectId, projectName) {
  if (!confirm(`Delete "${projectName}"? This cannot be undone.`)) return
  await projectStore.removeProject(projectId)
}
</script>

<template>
  <div class="dashboard-page">
    <DashboardHeader />

    <div class="container py-4" style="max-width: 1000px;">
      <!-- Loading spinner -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <template v-else>
        <!-- Section heading + New Project button -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 class="mb-1">My Projects</h4>
            <p class="text-muted mb-0 small" v-if="authStore.isAuthenticated">
              {{ projectStore.projectCount }} of {{ maxProjects }} projects
              <span class="badge bg-light text-dark ms-1">{{ tierLabel }}</span>
            </p>
          </div>
          <button class="btn btn-primary" @click="createProject">
            <i class="bi bi-plus-lg me-1"></i>New Project
          </button>
        </div>

        <!-- Project grid -->
        <div
          v-if="projectStore.projects.length > 0"
          class="project-grid"
        >
          <ProjectCard
            v-for="project in projectStore.projects"
            :key="project.id"
            :project="project"
            @open="openProject"
            @rename="renameProject"
            @duplicate="duplicateProject"
            @delete="deleteProject"
          />

          <!-- "New project" placeholder card (if under limit) -->
          <div
            v-if="projectStore.canCreateProject"
            class="new-project-card"
            @click="createProject"
          >
            <i class="bi bi-plus-lg"></i>
            <span>New Project</span>
          </div>
        </div>

        <!-- Empty state -->
        <div v-else class="empty-state">
          <div class="empty-state__icon">
            <i class="bi bi-folder2-open"></i>
          </div>
          <h5>No projects yet</h5>
          <p class="text-muted">Create your first project to get started building beautiful pages.</p>
          <button class="btn btn-primary btn-lg" @click="createProject">
            <i class="bi bi-plus-lg me-1"></i>Create Project
          </button>
        </div>

        <!-- Upgrade banner (at limit on free tier) -->
        <div
          v-if="!projectStore.canCreateProject && tierLabel === 'Free'"
          class="upgrade-banner mt-4"
        >
          <i class="bi bi-stars me-2"></i>
          You're using {{ projectStore.projectCount }} of {{ maxProjects }} projects on the Free plan.
          <strong>Upgrade to Pro</strong> for unlimited projects.
          <!-- Phase 9 will add the actual upgrade button -->
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

/* New project placeholder card */
.new-project-card {
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #94a3b8;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
}
.new-project-card:hover {
  border-color: #3b82f6;
  color: #3b82f6;
  background: #f0f7ff;
}
.new-project-card i {
  font-size: 1.5rem;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}
.empty-state__icon {
  width: 80px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}
.empty-state__icon i {
  font-size: 2rem;
  color: #94a3b8;
}

/* Upgrade banner */
.upgrade-banner {
  background: linear-gradient(135deg, #eff6ff, #f0fdf4);
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #475569;
}
</style>
