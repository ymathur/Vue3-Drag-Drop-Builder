<script setup>
import { useBuilderStore } from '@/stores/builder.js'

const store = useBuilderStore()

function onClear() {
  if (store.blockCount === 0) return
  if (confirm('Clear the canvas? All blocks will be removed.')) {
    store.clearCanvas()
  }
}
</script>

<template>
  <header class="app-header">
    <!-- Brand -->
    <span class="app-title">
      <i class="bi bi-columns-gap"></i>
      Bootstrap <span>Page Builder</span>
    </span>

    <!-- Block count indicator -->
    <span v-if="store.blockCount > 0" class="block-count-badge">
      {{ store.blockCount }} block{{ store.blockCount !== 1 ? 's' : '' }}
    </span>

    <div class="header-divider"></div>

    <!-- Actions -->
    <button
      class="btn btn-sm btn-outline-light"
      :disabled="!store.hasBlocks"
      @click="store.previewOpen = true"
    >
      <i class="bi bi-eye me-1"></i>Preview
    </button>

    <button
      class="btn btn-sm btn-primary"
      :disabled="!store.hasBlocks"
      @click="store.exportHTML()"
    >
      <i class="bi bi-download me-1"></i>Export HTML
    </button>

    <div class="header-divider"></div>

    <button
      class="btn btn-sm btn-outline-danger"
      :disabled="!store.hasBlocks"
      @click="onClear"
    >
      <i class="bi bi-trash3 me-1"></i>Clear
    </button>
  </header>
</template>
