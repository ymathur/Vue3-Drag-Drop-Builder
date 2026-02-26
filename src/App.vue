<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { useThemeStore }   from '@/stores/theme.js'
import AppHeader   from '@/components/layout/AppHeader.vue'
import PageTabs    from '@/components/layout/PageTabs.vue'
import Sidebar     from '@/components/layout/Sidebar.vue'
import Canvas      from '@/components/layout/Canvas.vue'
import PreviewModal         from '@/components/modals/PreviewModal.vue'
import ImagePickerModal     from '@/components/modals/ImagePickerModal.vue'
import ThemePickerModal     from '@/components/modals/ThemePickerModal.vue'
import FloatingRichTextToolbar from '@/components/canvas/FloatingRichTextToolbar.vue'
import '@/assets/styles/canvas.css'

const store      = useBuilderStore()
const themeStore = useThemeStore()

// ─── Auto-save (v2.0 — stores all pages) ──────────────────
const AUTO_SAVE_KEY = 'builder-project'
let _autoSaveTimer  = null

function doAutoSave() {
  try {
    const payload = {
      version:        '2.0',
      savedAt:        new Date().toISOString(),
      pages:          JSON.parse(JSON.stringify(store.pages)),
      activePageId:   store.activePageId,
      activeCategory: store.activeCategory,
    }
    localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(payload))
  } catch (_) { /* storage unavailable */ }
}

function scheduleAutoSave() {
  clearTimeout(_autoSaveTimer)
  _autoSaveTimer = setTimeout(doAutoSave, 1000)
}

// Watch all pages (deep) + active category for auto-save
watch(() => store.pages,          scheduleAutoSave, { deep: true })
watch(() => store.activeCategory, scheduleAutoSave)

// ─── Theme-change: normalize inline colors to CSS vars ───────
// When the active theme changes, scan all canvas pages and replace
// any hardcoded palette hex colors with CSS var() references so that
// subsequent theme tweaks (ThemePanel sliders, color pickers) update live.
watch(
  () => themeStore.activeThemeId,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      store.normalizeCanvasBlockColors()
    }
  }
)

// ─── Restore auto-save on startup ────────────────────────
function tryRestoreAutoSave() {
  try {
    const raw = localStorage.getItem(AUTO_SAVE_KEY)
    if (!raw) return
    const data = JSON.parse(raw)

    if (data.version === '2.0' && Array.isArray(data.pages) && data.pages.length > 0) {
      // v2.0 format — multi-page
      const hasAnyBlocks = data.pages.some(p => Array.isArray(p.blocks) && p.blocks.length > 0)
      if (!hasAnyBlocks) return
      store.loadPagesData({
        pages:          data.pages,
        activePageId:   data.activePageId,
        activeCategory: data.activeCategory,
      })
    } else if (Array.isArray(data?.blocks) && data.blocks.length > 0) {
      // v1.0 format — single page (backward compat)
      store.loadCanvasData({ blocks: data.blocks, activeCategory: data.activeCategory })
    }
  } catch (_) { /* corrupt storage — ignore */ }
}

// ─── Auto-open theme picker on first launch ───────────────
onMounted(() => {
  tryRestoreAutoSave()
  // Normalize any hardcoded palette hex colors in restored blocks so they
  // immediately respond to the active theme's CSS variables.
  store.normalizeCanvasBlockColors()
  // If no theme has ever been selected, open the picker immediately
  if (!themeStore.activeThemeId) {
    themeStore.openPicker()
  }
  document.addEventListener('paste', onPaste)
})

onUnmounted(() => document.removeEventListener('paste', onPaste))

// ─── Ctrl+V paste → open image picker pre-filled ─────────────
function onPaste(e) {
  if (!store.selectedBlockId) return
  if (store.imagePickerOpen)  return // picker already open

  const items = e.clipboardData?.items
  if (!items) return

  for (const item of items) {
    if (item.type.startsWith('image/')) {
      e.preventDefault()
      const file   = item.getAsFile()
      const reader = new FileReader()
      reader.onload = ev => {
        store.openImagePickerWithPreload({
          instanceId:  store.selectedBlockId,
          preloadedSrc: ev.target.result,
        })
      }
      reader.readAsDataURL(file)
      break
    }
  }
}
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <PageTabs />
    <div class="app-body">
      <Sidebar />
      <Canvas />
    </div>

    <!-- Global modals (teleported to <body> internally) -->
    <PreviewModal />
    <ImagePickerModal />
    <ThemePickerModal />

    <!-- Floating rich-text formatting toolbar -->
    <FloatingRichTextToolbar />
  </div>
</template>
