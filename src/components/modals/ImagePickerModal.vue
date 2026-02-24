<script setup>
import { ref, watch, computed, nextTick } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'

const store = useBuilderStore()

// ─── Local state ─────────────────────────────────────────────
const activeTab    = ref('upload')
const fileInputRef = ref(null)
const pasteUrl     = ref('')
const previewSrc   = ref('')
const altText      = ref('')
const sizeWarning  = ref('')
const isDragging   = ref(false)
const applying     = ref(false)
const urlError     = ref('')

// ─── Reset when picker opens ─────────────────────────────────
watch(() => store.imagePickerOpen, (open) => {
  if (!open) return

  applying.value  = false
  sizeWarning.value = ''
  urlError.value  = ''
  isDragging.value = false

  const ctx = store.imagePickerContext

  // Preloaded from Ctrl+V paste
  if (ctx?.preloadedSrc) {
    previewSrc.value = ctx.preloadedSrc
    altText.value    = ''
    activeTab.value  = 'upload'
    return
  }

  // Existing URL image — show in URL tab
  const src = ctx?.currentSrc || ''
  if (src && !src.startsWith('data:')) {
    pasteUrl.value   = src
    previewSrc.value = src
    altText.value    = ctx?.currentAlt || ''
    activeTab.value  = 'url'
  } else {
    pasteUrl.value   = ''
    previewSrc.value = src
    altText.value    = ctx?.currentAlt || ''
    activeTab.value  = 'upload'
  }
})

// ─── Computed ────────────────────────────────────────────────
const isBackgroundMode = computed(() => store.imagePickerContext?.type === 'bg')
const canApply = computed(() => previewSrc.value.length > 0 && !applying.value)

const modalTitle = computed(() =>
  isBackgroundMode.value ? 'Replace Background Image' : 'Replace Image'
)

// ─── File upload ─────────────────────────────────────────────
function handleFileDrop(e) {
  e.preventDefault()
  isDragging.value = false
  const file = e.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) processFile(file)
}

function handleFileSelect(e) {
  const file = e.target.files?.[0]
  if (file) processFile(file)
  // Reset file input so same file can be re-selected
  e.target.value = ''
}

function processFile(file) {
  sizeWarning.value = ''
  if (file.size > 1_000_000) {
    sizeWarning.value = `Large image (${(file.size / 1_000_000).toFixed(1)} MB) — consider compressing before export.`
  }
  const reader = new FileReader()
  reader.onload = ev => { previewSrc.value = ev.target.result }
  reader.readAsDataURL(file)
}

// ─── URL tab ─────────────────────────────────────────────────
function onUrlChange() {
  urlError.value = ''
  const url = pasteUrl.value.trim()
  if (!url) { previewSrc.value = ''; return }
  if (!url.match(/^https?:\/\/.+/)) {
    urlError.value = 'Please enter a valid http/https URL'
    previewSrc.value = ''
    return
  }
  previewSrc.value = url
}

function onPreviewError() {
  if (activeTab.value === 'url') {
    urlError.value = 'Could not load image from this URL'
  }
}

// ─── Apply / Close ───────────────────────────────────────────
function apply() {
  if (!canApply.value) return
  applying.value = true
  store.applyImage({ src: previewSrc.value, alt: altText.value })
}

function close() {
  store.closeImagePicker()
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.imagePickerOpen"
      class="ip-backdrop"
      @click.self="close"
    >
      <div class="ip-modal" role="dialog" aria-modal="true">

        <!-- Header -->
        <div class="ip-header">
          <span class="ip-title">
            <i class="bi bi-image me-2"></i>{{ modalTitle }}
          </span>
          <button class="ip-close-btn" @click="close">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <!-- Tabs -->
        <div class="ip-tabs">
          <button
            :class="{ active: activeTab === 'upload' }"
            @click="activeTab = 'upload'"
          >
            <i class="bi bi-upload me-1"></i>Upload File
          </button>
          <button
            :class="{ active: activeTab === 'url' }"
            @click="activeTab = 'url'"
          >
            <i class="bi bi-link-45deg me-1"></i>Paste URL
          </button>
        </div>

        <!-- Upload tab body -->
        <div v-if="activeTab === 'upload'" class="ip-body">
          <div
            class="ip-dropzone"
            :class="{ 'is-dragging': isDragging }"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop="handleFileDrop"
            @click="fileInputRef?.click()"
          >
            <i class="bi bi-cloud-upload ip-upload-icon"></i>
            <p class="ip-drop-label mb-1">
              Drop an image here or <strong>click to browse</strong>
            </p>
            <small class="text-muted">JPEG, PNG, GIF, WebP, SVG</small>
            <input
              ref="fileInputRef"
              type="file"
              accept="image/*"
              class="d-none"
              @change="handleFileSelect"
            />
          </div>

          <div v-if="sizeWarning" class="ip-warning">
            <i class="bi bi-exclamation-triangle-fill me-1"></i>{{ sizeWarning }}
          </div>
        </div>

        <!-- URL tab body -->
        <div v-if="activeTab === 'url'" class="ip-body">
          <label class="ip-field-label">Image URL</label>
          <input
            v-model="pasteUrl"
            type="url"
            class="ip-url-input"
            placeholder="https://example.com/photo.jpg"
            @input="onUrlChange"
          />
          <div v-if="urlError" class="ip-error">
            <i class="bi bi-exclamation-circle me-1"></i>{{ urlError }}
          </div>
          <small v-else class="text-muted d-block mt-1">
            Image links to the external URL — make sure it stays accessible.
          </small>
        </div>

        <!-- Preview -->
        <div v-if="previewSrc" class="ip-preview-area">
          <img
            :src="previewSrc"
            class="ip-preview-img"
            alt="Preview"
            @error="onPreviewError"
          />
        </div>

        <!-- Alt text -->
        <div v-if="!isBackgroundMode" class="ip-body ip-alt-row">
          <label class="ip-field-label">
            Alt text <span class="text-muted fw-normal">(accessibility)</span>
          </label>
          <input
            v-model="altText"
            type="text"
            class="ip-url-input"
            placeholder="A short description of this image…"
          />
        </div>

        <!-- Footer -->
        <div class="ip-footer">
          <button class="btn btn-sm btn-outline-secondary" @click="close">
            Cancel
          </button>
          <button
            class="btn btn-sm btn-primary"
            :disabled="!canApply"
            @click="apply"
          >
            <i class="bi bi-check-lg me-1"></i>Apply
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>
