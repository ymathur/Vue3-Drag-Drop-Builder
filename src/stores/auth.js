/**
 * Auth store — manages Firebase Authentication state, Google SSO,
 * and guest → authenticated migration.
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from 'firebase/auth'
import { auth } from '@/firebase/config.js'

export const useAuthStore = defineStore('auth', () => {
  // ─── State ──────────────────────────────────────────────────
  const user           = ref(null)   // { uid, displayName, email, photoURL } | null
  const loading        = ref(true)   // true until first onAuthStateChanged fires
  const loginModalOpen = ref(false)

  // ─── Getters ────────────────────────────────────────────────
  const isAuthenticated = computed(() => !!user.value)
  const isGuest         = computed(() => !user.value)

  // ─── Auth Listener ──────────────────────────────────────────
  let _unsubscribe = null

  /**
   * Call once on app mount. Listens for Firebase auth state changes
   * and populates the `user` ref. Returns the unsubscribe function.
   */
  function initAuthListener() {
    if (_unsubscribe) return // already initialised

    _unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        user.value = {
          uid:         firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email:       firebaseUser.email,
          photoURL:    firebaseUser.photoURL,
        }
      } else {
        user.value = null
      }
      loading.value = false
    })
  }

  // ─── Actions ────────────────────────────────────────────────

  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider()
      const result   = await signInWithPopup(auth, provider)

      // Create / update the user document in Firestore
      try {
        const { getOrCreateUserDoc } = await import('@/services/userService.js')
        await getOrCreateUserDoc(result.user.uid, {
          displayName: result.user.displayName,
          email:       result.user.email,
          photoURL:    result.user.photoURL,
        })
      } catch (e) {
        console.error('Failed to create/update user doc:', e)
      }

      // Always attempt migration — if there's guest data in localStorage,
      // save it as a project regardless of whether this is a new or returning user.
      await _migrateGuestData(result.user.uid)

      loginModalOpen.value = false
      return result.user
    } catch (err) {
      // User closed popup or other error — don't crash
      if (err.code !== 'auth/popup-closed-by-user') {
        console.error('Google sign-in error:', err)
      }
      throw err
    }
  }

  async function signOut() {
    await firebaseSignOut(auth)
    user.value = null
  }

  function openLoginModal()  { loginModalOpen.value = true }
  function closeLoginModal() { loginModalOpen.value = false }

  // ─── Guest → User Migration ─────────────────────────────────
  /**
   * On sign-in, migrate any localStorage project data to Firestore
   * as the user's first project. Only migrates if there are actual blocks.
   */
  async function _migrateGuestData(uid) {
    const AUTO_SAVE_KEY = 'builder-project'
    try {
      const raw = localStorage.getItem(AUTO_SAVE_KEY)
      if (!raw) return

      const data = JSON.parse(raw)
      const hasBlocks = data.version === '2.0'
        && Array.isArray(data.pages)
        && data.pages.some(p => Array.isArray(p.blocks) && p.blocks.length > 0)

      if (hasBlocks) {
        // Lazily import to avoid circular deps
        const { createProject } = await import('@/services/projectService.js')
        await createProject(uid, 'My First Project', data)
        // Clear localStorage so it doesn't migrate again
        localStorage.removeItem(AUTO_SAVE_KEY)
      }
    } catch (err) {
      console.error('Guest data migration failed:', err)
    }
  }

  return {
    // State
    user,
    loading,
    loginModalOpen,
    // Getters
    isAuthenticated,
    isGuest,
    // Actions
    initAuthListener,
    signInWithGoogle,
    signOut,
    openLoginModal,
    closeLoginModal,
  }
})
