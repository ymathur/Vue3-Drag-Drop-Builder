<script setup>
/**
 * LoginModal — Google Sign-In overlay.
 * Shown when authStore.loginModalOpen is true.
 */
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
const router    = useRouter()
const signing   = ref(false)
const error     = ref(null)

async function handleGoogleSignIn() {
  error.value   = null
  signing.value = true
  try {
    await authStore.signInWithGoogle()
    // Redirect to dashboard after successful sign-in
    router.push({ name: 'dashboard' })
  } catch (err) {
    if (err.code !== 'auth/popup-closed-by-user') {
      error.value = 'Sign-in failed. Please try again.'
    }
  } finally {
    signing.value = false
  }
}

function continueAsGuest() {
  authStore.closeLoginModal()
  router.push({ name: 'builder' })
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="authStore.loginModalOpen"
      class="login-overlay"
      @click.self="authStore.closeLoginModal()"
    >
      <div class="login-card">
        <!-- Logo / Title -->
        <div class="login-header">
          <i class="bi bi-columns-gap login-icon"></i>
          <h4 class="login-title">Bootstrap Page Builder</h4>
          <p class="login-subtitle">Sign in to save your projects to the cloud</p>
        </div>

        <!-- Error message -->
        <div v-if="error" class="alert alert-danger py-2 mb-3" role="alert">
          <i class="bi bi-exclamation-circle me-1"></i>{{ error }}
        </div>

        <!-- Google Sign-In button -->
        <button
          class="btn btn-google w-100"
          :disabled="signing"
          @click="handleGoogleSignIn"
        >
          <svg v-if="!signing" class="google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span v-if="signing" class="spinner-border spinner-border-sm me-2" role="status"></span>
          {{ signing ? 'Signing in...' : 'Sign in with Google' }}
        </button>

        <!-- Divider -->
        <div class="login-divider">
          <span>or</span>
        </div>

        <!-- Guest mode -->
        <button class="btn btn-outline-secondary w-100" @click="continueAsGuest">
          <i class="bi bi-person me-1"></i>Continue as Guest
        </button>
        <p class="guest-note">
          Guest mode lets you build freely. Sign in later to save your work.
        </p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.login-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.login-card {
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: loginSlideIn 0.25s ease-out;
}

@keyframes loginSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.login-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.login-icon {
  font-size: 2.5rem;
  color: var(--bs-primary, #0d6efd);
  display: block;
  margin-bottom: 0.75rem;
}

.login-title {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.login-subtitle {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 0;
}

/* Google branded button */
.btn-google {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #fff;
  border: 2px solid #dadce0;
  color: #3c4043;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  transition: all 0.15s ease;
}

.btn-google:hover:not(:disabled) {
  background: #f7f8f8;
  border-color: #c6c8ca;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-google:disabled {
  opacity: 0.7;
}

.google-icon {
  flex-shrink: 0;
}

/* Divider */
.login-divider {
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  color: #adb5bd;
  font-size: 0.85rem;
}

.login-divider::before,
.login-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #dee2e6;
}

.login-divider span {
  padding: 0 0.75rem;
}

.guest-note {
  text-align: center;
  color: #adb5bd;
  font-size: 0.8rem;
  margin-top: 0.75rem;
  margin-bottom: 0;
}
</style>
