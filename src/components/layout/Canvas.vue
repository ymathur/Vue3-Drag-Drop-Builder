<script setup>
import { useBuilderStore } from '@/stores/builder.js'
import DropZone from '@/components/canvas/DropZone.vue'

const store = useBuilderStore()

// Click on the canvas background deselects all blocks
function onCanvasClick(e) {
  // Only deselect if clicking the canvas background, not a block
  if (e.target === e.currentTarget || e.target.classList.contains('canvas-area') || e.target.classList.contains('canvas-inner')) {
    store.deselectAll()
  }
}
</script>

<template>
  <main class="canvas-area" @click="onCanvasClick">
    <div class="canvas-inner">
      <!-- DropZone renders the empty state internally via its #footer slot -->
      <DropZone />
    </div>
  </main>
</template>
