<script setup>
import { ref, watch, computed, nextTick } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'

const store = useBuilderStore()

const urlInput    = ref('')
const urlError    = ref('')
const urlInputRef = ref(null)  // template ref for programmatic focus

// ─── Detect platform from URL ─────────────────────────────────
const platform = computed(() => {
  const u = urlInput.value.trim()
  if (/youtube\.com|youtu\.be/.test(u)) return 'youtube'
  if (/vimeo\.com/.test(u))             return 'vimeo'
  if (u.startsWith('http'))             return 'generic'
  return null
})

// Returns the detected embed URL (if conversion needed) or null
const convertedUrl = computed(() => {
  const u = urlInput.value.trim()

  // YouTube watch: https://www.youtube.com/watch?v=ID
  const ytWatch = u.match(/youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]+)/)
  if (ytWatch) return `https://www.youtube.com/embed/${ytWatch[1]}`

  // YouTube short: https://youtu.be/ID
  const ytShort = u.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`

  // Vimeo: https://vimeo.com/ID
  const vimeo = u.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

  return null  // already an embed URL or unknown
})

const needsConversion = computed(() => {
  const u = urlInput.value.trim()
  if (!u) return false
  // It needs conversion if convertedUrl differs from current input
  return convertedUrl.value !== null && convertedUrl.value !== u
})

function applyConversion() {
  if (convertedUrl.value) urlInput.value = convertedUrl.value
}

// ─── Sync with store when modal opens ────────────────────────
watch(
  () => store.iframePickerOpen,
  (open) => {
    if (open) {
      urlInput.value = store.iframePickerContext?.currentSrc || ''
      urlError.value = ''
      // Auto-focus the input — use setTimeout to guarantee DOM is ready
      // after Vue flushes the v-if insertion (nextTick alone is insufficient
      // in some Chrome versions with Teleport).
      nextTick(() => {
        setTimeout(() => {
          urlInputRef.value?.focus()
          urlInputRef.value?.select()
        }, 30)
      })
    }
  }
)

// ─── Actions ─────────────────────────────────────────────────
function apply() {
  let src = urlInput.value.trim()
  if (!src) { urlError.value = 'Please enter a video URL.'; return }

  // Auto-convert if the user forgot to click Convert
  if (convertedUrl.value) src = convertedUrl.value

  if (!src.startsWith('http')) {
    urlError.value = 'Please enter a valid URL starting with https://'
    return
  }

  store.applyIframe({ src })
  urlError.value = ''
}

function cancel() {
  store.closeIframePicker()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="store.iframePickerOpen" class="ip-backdrop" @click.self="cancel">
      <div class="ip-modal" role="dialog" aria-modal="true" aria-label="Edit Video URL">

          <!-- Header -->
          <div class="ip-header">
            <i class="bi bi-play-circle-fill text-danger me-2"></i>
            <span class="ip-title">Edit Video Link</span>
            <button class="ip-close-btn" title="Close" @click="cancel">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <!-- Body -->
          <div class="ip-body">

            <!-- Platform hint -->
            <p class="text-muted small mb-3">
              Paste a YouTube or Vimeo URL. We'll automatically convert it to an embed link for you.
            </p>

            <!-- URL input -->
            <label class="ip-field-label" for="iframe-url-input">Video URL</label>
            <input
              id="iframe-url-input"
              ref="urlInputRef"
              v-model="urlInput"
              type="text"
              class="ip-url-input"
              placeholder="https://www.youtube.com/watch?v=..."
              autocomplete="off"
              spellcheck="false"
              @keydown.enter.prevent="apply"
              @keydown.escape.prevent="cancel"
              @input="urlError = ''"
            />

            <!-- Error -->
            <div v-if="urlError" class="ip-error mt-1">
              <i class="bi bi-exclamation-circle-fill"></i> {{ urlError }}
            </div>

            <!-- Conversion hint badge -->
            <Transition name="ip-fade">
              <div v-if="needsConversion" class="ifp-convert-hint mt-2">
                <div class="ifp-hint-text">
                  <i :class="platform === 'youtube' ? 'bi bi-youtube text-danger' : 'bi bi-vimeo text-info'"></i>
                  <span>Will be converted to embed URL:</span>
                  <code class="ifp-embed-preview">{{ convertedUrl }}</code>
                </div>
                <button class="btn btn-sm btn-outline-secondary ms-2" @click="applyConversion">
                  Use embed URL
                </button>
              </div>
            </Transition>

            <!-- Platform detected -->
            <div v-if="platform && !needsConversion && urlInput.trim()" class="ifp-platform-badge mt-2">
              <template v-if="platform === 'youtube'">
                <i class="bi bi-youtube text-danger"></i> YouTube embed — ready to apply
              </template>
              <template v-else-if="platform === 'vimeo'">
                <i class="bi bi-vimeo text-info"></i> Vimeo embed — ready to apply
              </template>
              <template v-else>
                <i class="bi bi-link-45deg"></i> Custom URL
              </template>
            </div>
          </div>

          <!-- Footer -->
          <div class="ip-footer">
            <button class="btn btn-secondary btn-sm" @click="cancel">Cancel</button>
            <button class="btn btn-primary btn-sm px-4" @click="apply">Apply</button>
          </div>
        </div>
      </div>
  </Teleport>
</template>
