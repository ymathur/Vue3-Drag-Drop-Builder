<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'

const store   = useBuilderStore()
const blobUrl = ref(null)

// ─── Blob URL lifecycle ───────────────────────────────────────
// Using a blob URL instead of srcdoc lets Bootstrap's JS bundle load from
// the CDN without any sandbox restrictions, so accordions, dropdowns, and
// carousels all work correctly in the preview iframe.
watch(
  () => store.previewOpen,
  (open) => {
    // Revoke any previous URL first to free memory
    if (blobUrl.value) {
      URL.revokeObjectURL(blobUrl.value)
      blobUrl.value = null
    }
    if (open) {
      const blob = new Blob([store.previewHtml], { type: 'text/html' })
      blobUrl.value = URL.createObjectURL(blob)
    }
  }
)

onUnmounted(() => {
  if (blobUrl.value) URL.revokeObjectURL(blobUrl.value)
})

// ─── Actions ─────────────────────────────────────────────────
function openInNewTab() {
  const html = store.previewHtml
  const blob = new Blob([html], { type: 'text/html' })
  const url  = URL.createObjectURL(blob)
  window.open(url, '_blank')
  setTimeout(() => URL.revokeObjectURL(url), 10000)
}

function close() {
  store.previewOpen = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="store.previewOpen" class="preview-overlay">

      <!-- Toolbar -->
      <div class="preview-toolbar">
        <span class="preview-title">
          <i class="bi bi-eye me-2"></i>Page Preview
        </span>

        <button class="btn btn-sm btn-outline-light" @click="openInNewTab">
          <i class="bi bi-box-arrow-up-right me-1"></i>Open in New Tab
        </button>

        <button class="btn btn-sm btn-primary" @click="store.exportHTML()">
          <i class="bi bi-download me-1"></i>Export HTML
        </button>

        <button class="btn btn-sm btn-outline-light" @click="close">
          <i class="bi bi-x-lg me-1"></i>Close
        </button>
      </div>

      <!-- Preview Iframe — blob URL for unrestricted Bootstrap JS execution -->
      <iframe
        v-if="blobUrl"
        class="preview-iframe"
        :src="blobUrl"
        title="Page Preview"
      />

    </div>
  </Teleport>
</template>
