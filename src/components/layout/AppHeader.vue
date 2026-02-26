<script setup>
import { ref } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { useThemeStore }   from '@/stores/theme.js'
import { exportZip }       from '@/utils/zipExporter.js'

const store      = useBuilderStore()
const themeStore = useThemeStore()

const fileInputRef = ref(null)

function onClear() {
  if (store.blockCount === 0) return
  if (confirm('Clear this page? All blocks on the current page will be removed.')) {
    store.clearCanvas()
  }
}

async function onExportZip() {
  await exportZip(store.pages, themeStore)
}

// ─── Save project (download JSON) — v2.0 format ───────────
function saveProject() {
  const payload = {
    version:        '2.0',
    savedAt:        new Date().toISOString(),
    pages:          JSON.parse(JSON.stringify(store.pages)),
    activePageId:   store.activePageId,
    activeCategory: store.activeCategory,
    theme: {
      activeThemeId:  themeStore.activeThemeId,
      customizations: JSON.parse(JSON.stringify(themeStore.customizations)),
    },
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = 'page-builder-project.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ─── Load project (pick JSON file) ────────────────────────
function loadProject() {
  fileInputRef.value?.click()
}

function onFileSelected(event) {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result)

      // Detect format version
      const isV2 = data.version === '2.0' && Array.isArray(data.pages) && data.pages.length > 0
      const isV1 = !isV2 && Array.isArray(data?.canvas?.blocks)

      if (!isV2 && !isV1) {
        alert('Invalid project file: unrecognised format.')
        fileInputRef.value.value = ''
        return
      }

      // Confirm before overwriting an existing project
      if (store.anyPageHasBlocks && !confirm('Load project? Your current pages will be replaced.')) {
        fileInputRef.value.value = ''
        return
      }

      if (isV2) {
        // v2.0 — multi-page
        store.loadPagesData({
          pages:          data.pages,
          activePageId:   data.activePageId,
          activeCategory: data.activeCategory,
        })
      } else {
        // v1.0 — single-page backward compat
        store.loadCanvasData({
          blocks:         data.canvas.blocks  ?? [],
          activeCategory: data.canvas.activeCategory ?? 'navigation',
        })
      }

      // Restore theme (if saved)
      if (data.theme?.activeThemeId) {
        themeStore.selectTheme(data.theme.activeThemeId, { keepCustomizations: false })
        const cust = data.theme.customizations ?? {}
        Object.entries(cust).forEach(([k, v]) => themeStore.updateVar(k, v))
      }

    } catch (_) {
      alert('Could not read project file. Make sure it is a valid .json project export.')
    }

    // Reset input so the same file can be loaded again if needed
    fileInputRef.value.value = ''
  }

  reader.readAsText(file)
}
</script>

<template>
  <header class="app-header">
    <!-- Brand -->
    <span class="app-title">
      <i class="bi bi-columns-gap"></i>
      Bootstrap <span>Page Builder</span>
    </span>

    <!-- Block count indicator (active page) -->
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

    <!-- Save / Load project -->
    <button
      class="btn btn-sm btn-outline-light"
      :disabled="!store.anyPageHasBlocks"
      title="Save project as JSON"
      @click="saveProject"
    >
      <i class="bi bi-floppy me-1"></i>Save
    </button>

    <button
      class="btn btn-sm btn-outline-light"
      title="Load a saved project JSON"
      @click="loadProject"
    >
      <i class="bi bi-folder2-open me-1"></i>Load
    </button>

    <button
      class="btn btn-sm btn-primary"
      :disabled="!store.anyPageHasBlocks"
      title="Export all pages as ZIP (HTML + CSS + JS)"
      @click="onExportZip"
    >
      <i class="bi bi-file-zip me-1"></i>Export ZIP
    </button>

    <div class="header-divider"></div>

    <button
      class="btn btn-sm btn-outline-danger"
      :disabled="store.blockCount === 0"
      title="Clear current page"
      @click="onClear"
    >
      <i class="bi bi-trash3 me-1"></i>Clear
    </button>

    <!-- Hidden file input for loading JSON -->
    <input
      ref="fileInputRef"
      type="file"
      accept=".json,application/json"
      style="display:none"
      @change="onFileSelected"
    />
  </header>
</template>
