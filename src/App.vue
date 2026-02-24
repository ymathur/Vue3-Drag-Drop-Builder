<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Canvas from '@/components/layout/Canvas.vue'
import PreviewModal from '@/components/modals/PreviewModal.vue'
import '@/assets/styles/canvas.css'
</script>

<template>
  <div class="app-shell">
    <AppHeader />

    <div class="app-body">
      <Sidebar />
      <Canvas />
    </div>

    <!-- Preview modal rendered via Teleport to body -->
    <PreviewModal />
  </div>
</template>
