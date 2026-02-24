<script setup>
import { useBuilderStore } from '@/stores/builder.js'

const store = useBuilderStore()

function openInNewTab() {
  const html = store.previewHtml
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
  // Cleanup after a short delay
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

      <!-- Preview Iframe -->
      <iframe
        class="preview-iframe"
        :srcdoc="store.previewHtml"
        sandbox="allow-same-origin allow-scripts allow-forms"
        title="Page Preview"
      />
    </div>
  </Teleport>
</template>
