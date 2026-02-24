<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import AppHeader   from '@/components/layout/AppHeader.vue'
import Sidebar     from '@/components/layout/Sidebar.vue'
import Canvas      from '@/components/layout/Canvas.vue'
import PreviewModal    from '@/components/modals/PreviewModal.vue'
import ImagePickerModal from '@/components/modals/ImagePickerModal.vue'
import FloatingRichTextToolbar from '@/components/canvas/FloatingRichTextToolbar.vue'
import '@/assets/styles/canvas.css'

const store = useBuilderStore()

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

onMounted(()  => document.addEventListener('paste', onPaste))
onUnmounted(() => document.removeEventListener('paste', onPaste))
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

    <!-- Floating rich-text formatting toolbar -->
    <FloatingRichTextToolbar />
  </div>
</template>
