<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { useThemeStore }   from '@/stores/theme.js'
import AppHeader   from '@/components/layout/AppHeader.vue'
import Sidebar     from '@/components/layout/Sidebar.vue'
import Canvas      from '@/components/layout/Canvas.vue'
import PreviewModal         from '@/components/modals/PreviewModal.vue'
import ImagePickerModal     from '@/components/modals/ImagePickerModal.vue'
import IframePickerModal    from '@/components/modals/IframePickerModal.vue'
import ThemePickerModal     from '@/components/modals/ThemePickerModal.vue'
import FloatingRichTextToolbar from '@/components/canvas/FloatingRichTextToolbar.vue'
import '@/assets/styles/canvas.css'

const store      = useBuilderStore()
const themeStore = useThemeStore()

// ─── Auto-save ────────────────────────────────────────────
const AUTO_SAVE_KEY = 'builder-project'
let _autoSaveTimer  = null

function doAutoSave() {
  try {
    const payload = {
      version:        '1.0',
      savedAt:        new Date().toISOString(),
      blocks:         JSON.parse(JSON.stringify(store.canvasBlocks)),
      activeCategory: store.activeCategory,
    }
    localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(payload))
  } catch (_) { /* storage unavailable */ }
}

function scheduleAutoSave() {
  clearTimeout(_autoSaveTimer)
  _autoSaveTimer = setTimeout(doAutoSave, 1000)
}

watch(() => store.canvasBlocks,    scheduleAutoSave, { deep: true })
watch(() => store.activeCategory,  scheduleAutoSave)

// ─── Restore auto-save on startup ────────────────────────
function tryRestoreAutoSave() {
  try {
    const raw = localStorage.getItem(AUTO_SAVE_KEY)
    if (!raw) return
    const data = JSON.parse(raw)
    if (!Array.isArray(data?.blocks) || data.blocks.length === 0) return
    store.loadCanvasData({ blocks: data.blocks, activeCategory: data.activeCategory })
  } catch (_) { /* corrupt storage — ignore */ }
}

// ─── Auto-open theme picker on first launch ───────────────
onMounted(() => {
  tryRestoreAutoSave()
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
    <div class="app-body">
      <Sidebar />
      <Canvas />
    </div>

    <!-- Global modals (teleported to <body> internally) -->
    <PreviewModal />
    <ImagePickerModal />
    <IframePickerModal />
    <ThemePickerModal />

    <!-- Floating rich-text formatting toolbar -->
    <FloatingRichTextToolbar />
  </div>
</template>
