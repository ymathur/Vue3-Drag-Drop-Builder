<script setup>
import { useBuilderStore } from '@/stores/builder.js'
import { useThemeStore }   from '@/stores/theme.js'
import { exportZip }       from '@/utils/zipExporter.js'

const store      = useBuilderStore()
const themeStore = useThemeStore()

function onClear() {
  if (store.blockCount === 0) return
  if (confirm('Clear the canvas? All blocks will be removed.')) {
    store.clearCanvas()
  }
}

async function onExportZip() {
  await exportZip(store.canvasBlocks, themeStore)
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

    <!-- Theme chooser button -->
    <button
      class="btn btn-sm btn-outline-light theme-btn"
      :class="{ 'theme-btn--active': themeStore.activeThemeId }"
      :title="themeStore.activeTheme ? `Theme: ${themeStore.activeTheme.name}` : 'Choose a theme'"
      @click="themeStore.openPicker()"
    >
      <i class="bi bi-palette2 me-1"></i>
      <span v-if="themeStore.activeTheme">{{ themeStore.activeTheme.name }}</span>
      <span v-else>Theme</span>
    </button>

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
      title="Export project as ZIP (index.html + styles.css + scripts.js)"
      @click="onExportZip"
    >
      <i class="bi bi-file-zip me-1"></i>Export ZIP
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
