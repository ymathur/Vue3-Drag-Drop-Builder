<script setup>
/**
 * DashboardHeader — top bar for the dashboard page.
 * Shows branding, user info, and navigation.
 */
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const router    = useRouter()
const authStore = useAuthStore()
</script>

<template>
  <header class="dashboard-header">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Brand -->
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-columns-gap dashboard-logo"></i>
        <h5 class="mb-0 fw-bold">Bootstrap Page Builder</h5>
      </div>

      <!-- User menu -->
      <div class="d-flex align-items-center gap-3" v-if="authStore.user">
        <div class="dropdown">
          <button
            class="btn btn-light d-flex align-items-center gap-2 px-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              v-if="authStore.user.photoURL"
              :src="authStore.user.photoURL"
              :alt="authStore.user.displayName"
              class="rounded-circle"
              width="28"
              height="28"
              referrerpolicy="no-referrer"
            />
            <span class="d-none d-md-inline">{{ authStore.user.displayName }}</span>
            <i class="bi bi-chevron-down" style="font-size:0.7rem;"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li class="dropdown-item-text small">
              <strong>{{ authStore.user.displayName }}</strong>
              <br /><span class="text-muted">{{ authStore.user.email }}</span>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <router-link class="dropdown-item" to="/profile">
                <i class="bi bi-person me-2"></i>Profile & Settings
              </router-link>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item text-danger" @click="authStore.signOut(); router.push('/builder')">
                <i class="bi bi-box-arrow-right me-2"></i>Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dashboard-header {
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.dashboard-logo {
  font-size: 1.5rem;
  color: var(--bs-primary, #3b82f6);
}
</style>
