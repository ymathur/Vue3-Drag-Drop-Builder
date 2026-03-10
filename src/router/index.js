/**
 * Vue Router configuration
 *
 * Routes:
 *   /                    → DashboardPage  (requires auth)
 *   /builder/:projectId? → BuilderPage    (guest OK, auth required to save)
 *   /profile             → ProfilePage    (requires auth)
 *   /share/:shareToken   → SharedPreviewPage (public)
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/DashboardPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/builder/:projectId?',
    name: 'builder',
    component: () => import('@/views/BuilderPage.vue'),
    meta: { requiresAuth: false }, // guest mode allowed
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/share/:shareToken',
    name: 'shared-preview',
    component: () => import('@/views/SharedPreviewPage.vue'),
    meta: { requiresAuth: false, isPublic: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/**
 * Navigation guard — redirects unauthenticated users to the builder
 * in guest mode when they try to access auth-required pages.
 *
 * We lazily import the auth store inside the guard to avoid circular
 * dependency issues (router ↔ store).
 */
router.beforeEach(async (to) => {
  const { useAuthStore } = await import('@/stores/auth.js')
  const authStore = useAuthStore()

  // While Firebase is still checking auth state, let the route through.
  // The component itself will handle the loading state.
  if (authStore.loading) return true

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // Redirect to builder in guest mode and show login modal
    setTimeout(() => authStore.openLoginModal(), 100)
    return { name: 'builder' }
  }

  return true
})

export default router
