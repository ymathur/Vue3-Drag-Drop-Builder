<script setup>
/**
 * ProfilePage — user settings, usage stats, subscription management,
 * and account deletion.
 */
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore }    from '@/stores/auth.js'
import { useProjectStore } from '@/stores/project.js'
import { getUserDoc, deleteUserAccount } from '@/services/userService.js'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'

const router       = useRouter()
const authStore    = useAuthStore()
const projectStore = useProjectStore()

const userDoc  = ref(null)
const loading  = ref(true)
const deleting = ref(false)

const memberSince = computed(() => {
  const d = userDoc.value?.createdAt?.toDate?.()
  if (!d) return '—'
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})

const totalBlocks = computed(() => {
  return projectStore.projects.reduce((sum, p) => {
    const pages = p.data?.pages ?? []
    return sum + pages.reduce((s2, pg) => s2 + (pg.blocks?.length ?? 0), 0)
  }, 0)
})

const tierLabel = computed(() => {
  const tier = userDoc.value?.subscription?.tier
  return tier === 'pro' ? 'Pro' : 'Free'
})

onMounted(async () => {
  if (authStore.isAuthenticated) {
    const [doc] = await Promise.all([
      getUserDoc(authStore.user.uid),
      projectStore.loadUserProjects(authStore.user.uid),
    ])
    userDoc.value = doc
  }
  loading.value = false
})

async function handleDeleteAccount() {
  const confirmed = confirm(
    'Are you sure you want to delete your account?\n\n' +
    'This will permanently delete:\n' +
    `• Your ${projectStore.projectCount} project(s)\n` +
    '• All saved data\n' +
    '• Your account\n\n' +
    'This action cannot be undone.'
  )
  if (!confirmed) return

  const doubleConfirm = confirm(
    'This is your last chance. Type OK to delete your account permanently.'
  )
  if (!doubleConfirm) return

  deleting.value = true
  try {
    await deleteUserAccount(authStore.user.uid)
    router.push('/builder')
  } catch (err) {
    alert('Failed to delete account. You may need to sign in again recently. Error: ' + err.message)
    deleting.value = false
  }
}
</script>

<template>
  <div class="profile-page">
    <DashboardHeader />

    <div class="container py-4" style="max-width: 720px;">
      <button class="btn btn-outline-secondary btn-sm mb-4" @click="router.push('/')">
        <i class="bi bi-arrow-left me-1"></i>Back to Dashboard
      </button>

      <h3 class="mb-4"><i class="bi bi-person-circle me-2"></i>Profile & Settings</h3>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
      </div>

      <template v-else>
        <!-- Profile Card -->
        <div class="card mb-4" v-if="authStore.user">
          <div class="card-body d-flex align-items-center gap-3">
            <img
              v-if="authStore.user.photoURL"
              :src="authStore.user.photoURL"
              :alt="authStore.user.displayName"
              class="rounded-circle"
              width="64"
              height="64"
              referrerpolicy="no-referrer"
            />
            <div>
              <h5 class="mb-1">{{ authStore.user.displayName }}</h5>
              <p class="text-muted mb-0">{{ authStore.user.email }}</p>
              <small class="text-muted">Member since {{ memberSince }}</small>
            </div>
          </div>
        </div>

        <!-- Usage Stats -->
        <div class="card mb-4">
          <div class="card-header bg-transparent">
            <h6 class="mb-0"><i class="bi bi-bar-chart me-2"></i>Usage</h6>
          </div>
          <div class="card-body">
            <div class="row text-center">
              <div class="col-4">
                <div class="stat-value">{{ projectStore.projectCount }}</div>
                <div class="stat-label">Projects</div>
              </div>
              <div class="col-4">
                <div class="stat-value">{{ totalBlocks }}</div>
                <div class="stat-label">Total Blocks</div>
              </div>
              <div class="col-4">
                <div class="stat-value">{{ projectStore.projects.reduce((s,p) => s + (p.data?.pages?.length ?? 0), 0) }}</div>
                <div class="stat-label">Total Pages</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Subscription -->
        <div class="card mb-4">
          <div class="card-header bg-transparent">
            <h6 class="mb-0"><i class="bi bi-credit-card me-2"></i>Subscription</h6>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="badge" :class="tierLabel === 'Pro' ? 'bg-primary' : 'bg-secondary'">
                  {{ tierLabel }}
                </span>
                <span class="ms-2 text-muted">
                  {{ tierLabel === 'Pro' ? 'Unlimited projects' : `${projectStore.appConfig?.freeTierMaxProjects ?? 3} projects max` }}
                </span>
              </div>
              <button
                v-if="tierLabel === 'Free'"
                class="btn btn-sm btn-primary"
                disabled
                title="Coming soon — Stripe integration"
              >
                <i class="bi bi-stars me-1"></i>Upgrade to Pro
              </button>
              <button
                v-else
                class="btn btn-sm btn-outline-secondary"
                disabled
                title="Coming soon — Stripe portal"
              >
                Manage Subscription
              </button>
            </div>
          </div>
        </div>

        <!-- Danger Zone -->
        <div class="card border-danger">
          <div class="card-header bg-danger bg-opacity-10 text-danger">
            <h6 class="mb-0"><i class="bi bi-exclamation-triangle me-2"></i>Danger Zone</h6>
          </div>
          <div class="card-body">
            <p class="text-muted mb-3">
              Once you delete your account, all your projects and data will be permanently removed.
              This action cannot be undone.
            </p>
            <button
              class="btn btn-outline-danger"
              :disabled="deleting"
              @click="handleDeleteAccount"
            >
              <span v-if="deleting" class="spinner-border spinner-border-sm me-1"></span>
              <i v-else class="bi bi-trash3 me-1"></i>
              {{ deleting ? 'Deleting...' : 'Delete Account' }}
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #f8f9fa;
}
.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
}
.stat-label {
  font-size: 0.8rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
