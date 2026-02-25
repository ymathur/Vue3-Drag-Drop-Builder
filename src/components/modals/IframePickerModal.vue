<script setup>
import { ref, watch, computed, nextTick } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'

const store = useBuilderStore()

const urlInput    = ref('')
const urlError    = ref('')
const urlInputRef = ref(null)

// ─── Detect platform from URL ─────────────────────────────────
const platform = computed(() => {
  const u = urlInput.value.trim()
  if (/youtube\.com|youtu\.be/.test(u)) return 'youtube'
  if (/vimeo\.com/.test(u))             return 'vimeo'
  if (u.startsWith('http'))             return 'generic'
  return null
})

// Returns the embed URL if auto-conversion is possible, else null
const convertedUrl = computed(() => {
  const u = urlInput.value.trim()

  const ytWatch = u.match(/youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]+)/)
  if (ytWatch) return `https://www.youtube.com/embed/${ytWatch[1]}`

  const ytShort = u.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`

  const vimeo = u.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

  return null
})

const needsConversion = computed(() => {
  const u = urlInput.value.trim()
  if (!u) return false
  return convertedUrl.value !== null && convertedUrl.value !== u
})

function applyConversion() {
  if (convertedUrl.value) urlInput.value = convertedUrl.value
}

// ─── Sync with store when bar opens ──────────────────────────
watch(
  () => store.iframePickerOpen,
  (open) => {
    if (open) {
      urlInput.value = store.iframePickerContext?.currentSrc || ''
      urlError.value = ''
      // Focus the input — small delay to guarantee the DOM is ready
      nextTick(() => {
        setTimeout(() => {
          urlInputRef.value?.focus()
          urlInputRef.value?.select()
        }, 50)
      })
    }
  }
)

// ─── Actions ──────────────────────────────────────────────────
function apply() {
  let src = urlInput.value.trim()
  if (!src) { urlError.value = 'Please enter a video URL.'; return }

  // Auto-convert watch/short URLs to embed URLs
  if (convertedUrl.value) src = convertedUrl.value

  if (!src.startsWith('http')) {
    urlError.value = 'Enter a valid URL starting with https://'
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
  <!--
    Non-blocking bottom bar — appears at the bottom of the viewport
    WITHOUT a backdrop overlay, so it never hides the canvas content.
    The user can see the iframe they're editing while typing the URL.
  -->
  <Teleport to="body">
    <div v-if="store.iframePickerOpen" class="ifp-bar">
      <div class="ifp-bar-inner">

        <!-- Icon -->
        <i class="bi bi-play-circle-fill text-danger flex-shrink-0" style="font-size:1.1rem;"></i>

        <!-- Label -->
        <span class="ifp-bar-label">Video URL</span>

        <!-- URL input -->
        <input
          ref="urlInputRef"
          v-model="urlInput"
          type="text"
          class="ifp-bar-input"
          placeholder="Paste a YouTube or Vimeo URL here…"
          autocomplete="off"
          spellcheck="false"
          @keydown.enter.prevent="apply"
          @keydown.escape.prevent="cancel"
          @input="urlError = ''"
        />

        <!-- Conversion notice -->
        <template v-if="needsConversion">
          <span class="ifp-bar-convert">
            <i :class="platform === 'youtube' ? 'bi bi-youtube' : 'bi bi-vimeo'"></i>
            Will auto-convert to embed
          </span>
          <button class="ifp-convert-btn" @click="applyConversion">Use embed URL</button>
        </template>

        <!-- Platform-ready badge -->
        <span v-else-if="platform && urlInput.trim() && !urlError" class="ifp-bar-ready">
          <i class="bi bi-check-circle-fill"></i> Ready
        </span>

        <!-- Error -->
        <span v-if="urlError" class="ifp-bar-error">
          <i class="bi bi-exclamation-circle-fill"></i> {{ urlError }}
        </span>

        <!-- Actions -->
        <button class="btn btn-primary btn-sm px-3 flex-shrink-0" @click="apply">Apply</button>
        <button class="btn btn-outline-light btn-sm flex-shrink-0" @click="cancel" title="Cancel (Esc)">
          <i class="bi bi-x-lg"></i>
        </button>

      </div>
    </div>
  </Teleport>
</template>
