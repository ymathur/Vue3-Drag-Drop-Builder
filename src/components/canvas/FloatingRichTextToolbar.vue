<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

// ─── State ──────────────────────────────────────────────────
const show         = ref(false)
const style        = ref({})
const linkMode     = ref(false)
const linkUrl      = ref('')
const openInNewTab = ref(false)

const linkInputRef = ref(null)

let savedRange    = null  // saved selection range before link input steals focus
let savedEditable = null  // the contenteditable el that owns that selection

// ─── Link hover tooltip ──────────────────────────────────────
const tooltipVisible = ref(false)
const tooltipStyle   = ref({})
const tooltipHref    = ref('')
let   tooltipAnchor  = null
let   tooltipTimer   = null

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
  const rect      = range.getBoundingClientRect()
  const TOOLBAR_W = 280
  const TOOLBAR_H = 40

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
function execFormat(command) {
  document.execCommand(command, false, null)
}

function isActive(command) {
  try { return document.queryCommandState(command) } catch { return false }
}

// ─── Link mode ───────────────────────────────────────────────
function openLinkMode() {
  const sel = window.getSelection()
  if (sel && sel.rangeCount > 0) {
    savedRange = sel.getRangeAt(0).cloneRange()

    // Store the contenteditable element that owns this selection —
    // we need to focus it back before calling execCommand('createLink').
    const node    = savedRange.commonAncestorContainer
    const el      = node.nodeType === 3 ? node.parentElement : node
    savedEditable = el.closest('[contenteditable="true"]') || null

    // Pre-fill if the selection is (or is inside) an existing link
    const anchor = node.nodeType === 3
      ? node.parentElement?.closest('a')
      : (node.closest?.('a') ?? null)
    if (anchor) {
      linkUrl.value      = anchor.getAttribute('href') || ''
      openInNewTab.value = anchor.target === '_blank'
    } else {
      linkUrl.value      = ''
      openInNewTab.value = false
    }
  }
  linkMode.value = true
  nextTick(() => linkInputRef.value?.focus())
}

function applyLink() {
  const url = linkUrl.value.trim()
  if (!url) { cancelLink(); return }

  // Restore focus + selection before modifying DOM
  if (savedEditable) savedEditable.focus()

  if (savedRange) {
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(savedRange)
  }

  // Use Range API instead of deprecated execCommand('createLink')
  const sel = window.getSelection()
  if (sel && sel.rangeCount > 0) {
    const range = sel.getRangeAt(0)

    // Check if the selection is already inside an <a> — update it
    const existingAnchor = range.commonAncestorContainer.nodeType === 3
      ? range.commonAncestorContainer.parentElement?.closest('a')
      : range.commonAncestorContainer.closest?.('a') ?? null

    if (existingAnchor) {
      existingAnchor.href = url
      if (openInNewTab.value) {
        existingAnchor.target = '_blank'
        existingAnchor.rel    = 'noopener noreferrer'
      } else {
        existingAnchor.removeAttribute('target')
        existingAnchor.removeAttribute('rel')
      }
    } else {
      // Wrap selected text in a new <a>
      const anchor = document.createElement('a')
      anchor.href = url
      if (openInNewTab.value) {
        anchor.target = '_blank'
        anchor.rel    = 'noopener noreferrer'
      }
      try {
        range.surroundContents(anchor)
      } catch (_) {
        // surroundContents fails on partial element selections —
        // fall back to extracting and wrapping
        anchor.appendChild(range.extractContents())
        range.insertNode(anchor)
      }
    }
  }

  linkUrl.value      = ''
  linkMode.value     = false
  openInNewTab.value = false
  savedRange         = null
  savedEditable      = null
  show.value         = false
}

function cancelLink() {
  linkUrl.value      = ''
  linkMode.value     = false
  openInNewTab.value = false
  savedRange         = null
  savedEditable      = null
  const sel = window.getSelection()
  if (!sel || sel.isCollapsed) show.value = false
}

// ─── Link hover tooltip ───────────────────────────────────────
function onDocMouseover(e) {
  const anchor = e.target.closest('a')
  // Only show for anchors inside an active contenteditable inside the canvas
  if (
    !anchor ||
    !anchor.closest('[contenteditable="true"]') ||
    !anchor.closest('.canvas-block-wrapper')
  ) {
    scheduleHideTooltip()
    return
  }

  clearTimeout(tooltipTimer)
  tooltipAnchor      = anchor
  tooltipHref.value  = anchor.getAttribute('href') || ''

  const rect = anchor.getBoundingClientRect()
  tooltipStyle.value = {
    top:  `${rect.bottom + 6}px`,
    left: `${Math.max(8, Math.min(rect.left, window.innerWidth - 320))}px`,
  }
  tooltipVisible.value = true
}

function scheduleHideTooltip() {
  tooltipTimer = setTimeout(() => {
    tooltipVisible.value = false
    tooltipAnchor        = null
  }, 220)
}

function keepTooltip() { clearTimeout(tooltipTimer) }
function hideTooltip()  { scheduleHideTooltip() }

function editTooltipLink() {
  if (!tooltipAnchor) return
  tooltipVisible.value = false

  // Select the full anchor text so the toolbar shows with link pre-filled
  const range = document.createRange()
  range.selectNodeContents(tooltipAnchor)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)

  position(range)
  show.value = true
  nextTick(() => openLinkMode())
}

function removeTooltipLink() {
  if (!tooltipAnchor) return
  tooltipVisible.value = false

  const editable = tooltipAnchor.closest('[contenteditable="true"]')
  if (editable) editable.focus()

  // Use Range API instead of deprecated execCommand('unlink')
  // Replace the <a> element with its text content
  const parent = tooltipAnchor.parentNode
  if (parent) {
    while (tooltipAnchor.firstChild) {
      parent.insertBefore(tooltipAnchor.firstChild, tooltipAnchor)
    }
    parent.removeChild(tooltipAnchor)
    parent.normalize() // merge adjacent text nodes
  }
  tooltipAnchor = null
}

// ─── Lifecycle ───────────────────────────────────────────────
onMounted(() => {
  document.addEventListener('selectionchange', onSelectionChange)
  document.addEventListener('mouseover',       onDocMouseover)
})

onUnmounted(() => {
  document.removeEventListener('selectionchange', onSelectionChange)
  document.removeEventListener('mouseover',       onDocMouseover)
  clearTimeout(tooltipTimer)
})
</script>

<template>
  <Teleport to="body">
    <!-- ── Floating format / link toolbar ── -->
    <div
      v-if="show"
      class="rich-text-toolbar"
      :style="style"
      @mousedown.prevent
    >
      <!-- Normal mode: B / I / U / Link -->
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

      <!-- Link input mode: [URL input] [new-tab toggle] [✓] [✕] -->
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
        <!-- Open-in-new-tab toggle -->
        <button
          class="rt-newtab-toggle"
          :class="{ active: openInNewTab }"
          title="Open in new tab"
          @click="openInNewTab = !openInNewTab"
        >
          <i class="bi bi-box-arrow-up-right"></i>
        </button>
        <button class="rt-apply" title="Apply link" @click="applyLink">
          <i class="bi bi-check-lg"></i>
        </button>
        <button title="Cancel" @click="cancelLink">
          <i class="bi bi-x-lg"></i>
        </button>
      </template>
    </div>

    <!-- ── Link hover tooltip ── -->
    <div
      v-if="tooltipVisible && tooltipHref"
      class="rt-link-tooltip"
      :style="tooltipStyle"
      @mouseenter="keepTooltip"
      @mouseleave="hideTooltip"
    >
      <i class="bi bi-link-45deg rt-tooltip-icon"></i>
      <span class="rt-tooltip-href" :title="tooltipHref">{{ tooltipHref }}</span>
      <div class="rt-tooltip-actions">
        <button title="Edit link" @click="editTooltipLink">
          <i class="bi bi-pencil"></i>
        </button>
        <button title="Remove link" @click="removeTooltipLink">
          <i class="bi bi-scissors"></i>
        </button>
      </div>
    </div>
  </Teleport>
</template>
