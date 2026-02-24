<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

// ─── State ──────────────────────────────────────────────────
const show     = ref(false)
const style    = ref({})
const linkMode = ref(false)
const linkUrl  = ref('')
const linkInputRef = ref(null)

let savedRange = null // save the selection before switching to link input

// ─── Selection listener ─────────────────────────────────────
function onSelectionChange() {
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
    if (!linkMode.value) hide()
    return
  }

  const range = sel.getRangeAt(0)
  const node  = range.commonAncestorContainer
  const el    = node.nodeType === 3 ? node.parentElement : node

  // Must be inside a real contenteditable (not contenteditable="false")
  const editable = el.closest('[contenteditable="true"]')
  if (!editable) { if (!linkMode.value) hide(); return }

  // Must be inside a canvas block wrapper
  if (!el.closest('.canvas-block-wrapper')) { if (!linkMode.value) hide(); return }

  position(range)
  show.value = true
}

function position(range) {
  const rect        = range.getBoundingClientRect()
  const TOOLBAR_W   = 220
  const TOOLBAR_H   = 40

  if (rect.width === 0 && rect.height === 0) return

  const top  = rect.top - TOOLBAR_H - 8
  const left = Math.max(8, Math.min(
    rect.left + rect.width / 2 - TOOLBAR_W / 2,
    window.innerWidth - TOOLBAR_W - 8
  ))

  style.value = {
    top:  `${Math.max(8, top)}px`,
    left: `${left}px`,
  }
}

function hide() {
  if (!linkMode.value) show.value = false
}

// ─── Formatting commands ─────────────────────────────────────
function execFormat(command, value = null) {
  document.execCommand(command, false, value)
}

function isActive(command) {
  try { return document.queryCommandState(command) } catch { return false }
}

// ─── Link mode ───────────────────────────────────────────────
function openLinkMode() {
  // Save the current selection before focus shifts to the input
  const sel = window.getSelection()
  if (sel && sel.rangeCount > 0) {
    savedRange = sel.getRangeAt(0).cloneRange()
    // Pre-fill if selection is already a link
    const anchor = sel.getRangeAt(0).commonAncestorContainer
      .parentElement?.closest('a')
    linkUrl.value = anchor ? anchor.href : ''
  }
  linkMode.value = true
  nextTick(() => linkInputRef.value?.focus())
}

function applyLink() {
  const url = linkUrl.value.trim()
  if (!url) { cancelLink(); return }

  // Restore the saved selection
  if (savedRange) {
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(savedRange)
  }
  document.execCommand('createLink', false, url)
  linkUrl.value = ''
  linkMode.value = false
  savedRange = null
  show.value  = false
}

function cancelLink() {
  linkUrl.value  = ''
  linkMode.value = false
  savedRange = null
  // Check if there's still a selection
  const sel = window.getSelection()
  if (!sel || sel.isCollapsed) show.value = false
}

// ─── Lifecycle ───────────────────────────────────────────────
onMounted(() => document.addEventListener('selectionchange', onSelectionChange))
onUnmounted(() => document.removeEventListener('selectionchange', onSelectionChange))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="rich-text-toolbar"
      :style="style"
      @mousedown.prevent
    >
      <!-- Normal mode -->
      <template v-if="!linkMode">
        <button
          :class="{ active: isActive('bold') }"
          title="Bold (Ctrl+B)"
          @click="execFormat('bold')"
        >
          <i class="bi bi-type-bold"></i>
        </button>
        <button
          :class="{ active: isActive('italic') }"
          title="Italic (Ctrl+I)"
          @click="execFormat('italic')"
        >
          <i class="bi bi-type-italic"></i>
        </button>
        <button
          :class="{ active: isActive('underline') }"
          title="Underline (Ctrl+U)"
          @click="execFormat('underline')"
        >
          <i class="bi bi-type-underline"></i>
        </button>
        <div class="rt-divider"></div>
        <button title="Insert / edit link" @click="openLinkMode">
          <i class="bi bi-link-45deg"></i>
        </button>
      </template>

      <!-- Link input mode -->
      <template v-else>
        <input
          ref="linkInputRef"
          v-model="linkUrl"
          type="url"
          class="rt-link-input"
          placeholder="https://..."
          @keydown.enter.prevent="applyLink"
          @keydown.escape.prevent="cancelLink"
        />
        <button class="rt-apply" title="Apply link" @click="applyLink">
          <i class="bi bi-check-lg"></i>
        </button>
        <button title="Cancel" @click="cancelLink">
          <i class="bi bi-x-lg"></i>
        </button>
      </template>
    </div>
  </Teleport>
</template>
