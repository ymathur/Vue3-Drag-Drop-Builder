<script setup>
/**
 * App shell — thin wrapper around router-view.
 * All builder logic has been moved to BuilderPage.vue.
 */
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import LoginModal from '@/components/modals/LoginModal.vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.initAuthListener()
})
</script>

<template>
  <router-view />
  <!-- Global login modal (available on every route) -->
  <LoginModal />
</template>
