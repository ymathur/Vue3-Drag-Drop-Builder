<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import BlockControls from './BlockControls.vue'
import { detectRepeatableItems } from '@/utils/repeatableDetector.js'

// ─── Props ──────────────────────────────────────────────────
const props = defineProps({
  block:       { type: Object, required: true },
  index:       { type: Number, required: true },
  totalBlocks: { type: Number, required: true },
})

const store     = useBuilderStore()
const blockRef  = ref(null)
const isSelected = computed(() => store.selectedBlockId === props.block.instanceId)

// ─── HTML Management ─────────────────────────────────────────
// We manage innerHTML manually (no v-html) so Vue never re-renders
// the block DOM while the user is actively typing — this is what
// prevented the cursor from jumping in the old implementation.

function setBlockHtml(html) {
  if (!blockRef.value) return
  blockRef.value.innerHTML = html
  nextTick(() => {
    initBootstrapComponents()
    // ── Order matters ──────────────────────────────────────────────────────
    // 1. cleanupBgListeners first so old DOM listeners are removed before we
    //    throw away the old element references in scanBgImages.
    // 2. scanBgImages re-populates bgImageEls with fresh DOM elements.
    // 3. Only THEN attach hover listeners and repeatable listeners so they
    //    reference the current DOM (not stale elements from previous renders).
    //
    // Bug this fixes: bg-image blocks weren't editable because scanBgImages
    // was called but setupBgListeners was never called afterwards — the hover
    // listeners were only attached inside watch(isSelected), which doesn't
    // re-fire when the block HTML is re-rendered.
    cleanupBgListeners()
    scanBgImages()
    scanIframes()
    if (isSelected.value) {
      setupRepeatableListeners()
      setupBgListeners()
    }
  })
}

onMounted(async () => {
  await nextTick()
  setBlockHtml(props.block.editedHtml || props.block.html)
})

// Only sync from store when NOT actively editing (e.g. after undo, duplicate, etc.)
watch(
  () => props.block.editedHtml || props.block.html,
  (newHtml) => {
    if (!currentlyEditingEl.value) setBlockHtml(newHtml)
  }
)

// ─── Bootstrap JS re-init ────────────────────────────────────
function initBootstrapComponents() {
  if (!window.bootstrap || !blockRef.value) return
  try {
    blockRef.value.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
      if (!bootstrap.Dropdown.getInstance(el)) new bootstrap.Dropdown(el)
    })
    blockRef.value.querySelectorAll('[data-bs-toggle="collapse"]').forEach(el => {
      if (!bootstrap.Collapse.getInstance(el)) new bootstrap.Collapse(el, { toggle: false })
    })
  } catch (_) { /* silently ignore */ }
}

// ─── Inline Text Editing ─────────────────────────────────────
const EDITABLE_SELECTOR = 'h1,h2,h3,h4,h5,h6,p,a,span,li,button,label,small,blockquote,td,th,caption'
const SKIP_SELECTOR     = 'i,svg,img,[data-no-edit]'

const currentlyEditingEl = ref(null)
let   originalContent    = ''   // saved on edit start (for Escape cancel)

function startEditing(el, clickEvent) {
  if (!el || el === currentlyEditingEl.value) return

  // Save previous element first (without re-render)
  if (currentlyEditingEl.value) {
    commitEdit(currentlyEditingEl.value, { syncStore: false })
  }

  originalContent = el.innerHTML

  el.contentEditable = 'true'
  el.spellcheck      = false
  el.classList.add('editable-active')
  currentlyEditingEl.value = el

  el.addEventListener('keydown', onEditKeydown)
  // Blur fires after a small delay so Rich Text Toolbar button clicks
  // don't accidentally close the edit session.
  el.addEventListener('blur', onEditBlur)

  // Place caret exactly at the click point
  el.focus()
  if (clickEvent) {
    try {
      const range = document.caretRangeFromPoint
        ? document.caretRangeFromPoint(clickEvent.clientX, clickEvent.clientY)
        : null
      if (range) {
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      }
    } catch (_) { /* ignore in non-Chrome browsers */ }
  }
}

/**
 * Stop editing an element.
 * @param {HTMLElement} el
 * @param {Object} opts
 *   save       — persist content (default true); false = restore original
 *   syncStore  — call store.updateBlockHtml (default true)
 */
function commitEdit(el, { save = true, syncStore = true } = {}) {
  if (!el) return

  el.removeEventListener('keydown', onEditKeydown)
  el.removeEventListener('blur', onEditBlur)

  if (!save) {
    el.innerHTML = originalContent
  }

  el.removeAttribute('contenteditable')
  el.classList.remove('editable-active')

  if (currentlyEditingEl.value === el) currentlyEditingEl.value = null

  if (save && syncStore && blockRef.value) {
    store.updateBlockHtml(props.block.instanceId, blockRef.value.innerHTML)
    // Update local refs so the block-level watch doesn't overwrite on next tick
  }
}

function onEditBlur(e) {
  // Give Rich Text Toolbar / repeatable buttons 200 ms to receive their clicks
  // before we commit and blur away.
  setTimeout(() => {
    if (currentlyEditingEl.value !== e.target) return
    const active = document.activeElement
    if (active?.closest('.rich-text-toolbar')) return
    if (active?.closest('.repeatable-controls-overlay')) return
    commitEdit(e.target, { save: true })
  }, 200)
}

function onEditKeydown(e) {
  if (e.key === 'Escape') {
    e.preventDefault()
    commitEdit(currentlyEditingEl.value, { save: false, syncStore: false })
    return
  }
  if (e.key === 'Tab') {
    e.preventDefault()
    if (!blockRef.value) return
    const all = Array.from(blockRef.value.querySelectorAll(EDITABLE_SELECTOR))
      .filter(el => !el.closest(SKIP_SELECTOR))
    const idx  = all.indexOf(currentlyEditingEl.value)
    const next = e.shiftKey ? all[idx - 1] : all[idx + 1]
    if (next) {
      commitEdit(currentlyEditingEl.value, { save: true, syncStore: false })
      startEditing(next, null)
    }
    return
  }
  // Prevent Enter creating block-level elements in headings / buttons
  if (e.key === 'Enter') {
    const tag = e.target.tagName.toLowerCase()
    if (['h1','h2','h3','h4','h5','h6','button'].includes(tag)) {
      e.preventDefault()
    }
  }
}

// Stop editing (and save) when the block is deselected
watch(isSelected, (selected) => {
  if (!selected && currentlyEditingEl.value) {
    commitEdit(currentlyEditingEl.value, { save: true })
  }
})

// ─── Background-image element scanning ───────────────────────
const bgImageEls = ref([])  // DOM elements with inline background-image

function scanBgImages() {
  if (!blockRef.value) return
  bgImageEls.value = []
  blockRef.value.querySelectorAll('*').forEach(el => {
    const bgImg = el.style.backgroundImage
    const bgShorthand = el.style.background
    // Detect both background-image and background shorthand containing url()
    if ((bgImg && bgImg !== 'none' && bgImg.includes('url(')) ||
        (bgShorthand && bgShorthand.includes('url('))) {
      bgImageEls.value.push(el)
    }
  })
}

// Hovering over a bg-image element → show "Replace BG" overlay
const hoveredBgEl    = ref(null)
const hoveredBgRect  = ref(null)
let   bgLeaveTimer   = null

function setupBgListeners() {
  bgImageEls.value.forEach(el => {
    el.addEventListener('mouseenter', onBgEnter)
    el.addEventListener('mouseleave', onBgLeave)
  })
}

function cleanupBgListeners() {
  bgImageEls.value.forEach(el => {
    el.removeEventListener('mouseenter', onBgEnter)
    el.removeEventListener('mouseleave', onBgLeave)
  })
  hoveredBgEl.value = null
}

function onBgEnter(e) {
  if (!isSelected.value) return
  clearTimeout(bgLeaveTimer)
  hoveredBgEl.value   = e.currentTarget
  hoveredBgRect.value = e.currentTarget.getBoundingClientRect()
}
function onBgLeave() {
  bgLeaveTimer = setTimeout(() => { hoveredBgEl.value = null }, 100)
}
function keepBgOverlay() { clearTimeout(bgLeaveTimer) }
function hideBgOverlay() {
  bgLeaveTimer = setTimeout(() => { hoveredBgEl.value = null }, 100)
}

watch(isSelected, (selected) => {
  if (selected) setupBgListeners()
  else cleanupBgListeners()
})

// ─── Iframe scanning + click → URL editor ────────────────────
// Iframes capture all mouse events, so we add pointer-events:none via CSS
// and let the wrapper click bubble up to us instead.
const iframeEls = ref([])

function scanIframes() {
  if (!blockRef.value) return
  iframeEls.value = Array.from(blockRef.value.querySelectorAll('iframe'))
}

function handleIframeClick(iframeEl, e) {
  e.stopPropagation()
  store.selectBlock(props.block.instanceId)

  const idx = iframeEls.value.indexOf(iframeEl)
  store.openIframePicker({
    instanceId:   props.block.instanceId,
    elementIndex: idx >= 0 ? idx : 0,
    currentSrc:   iframeEl.getAttribute('src') || '',
  })
}

// ─── Image click → picker ────────────────────────────────────
function handleImgClick(imgEl, e) {
  e.stopPropagation()
  store.selectBlock(props.block.instanceId)

  const allImgs = Array.from(blockRef.value.querySelectorAll('img'))
  const idx     = allImgs.indexOf(imgEl)

  store.openImagePicker({
    instanceId:   props.block.instanceId,
    type:         'img',
    elementIndex: idx,
    currentSrc:   imgEl.getAttribute('src') || '',
    currentAlt:   imgEl.getAttribute('alt') || '',
  })
}

function handleBgClick(bgEl, e) {
  e.stopPropagation()
  store.selectBlock(props.block.instanceId)

  const idx   = bgImageEls.value.indexOf(bgEl)
  // Extract URL from background-image or background shorthand
  const bgRaw = bgEl.style.backgroundImage || bgEl.style.background || ''
  const urlMatch = bgRaw.match(/url\(["']?([^"')]+)["']?\)/)
  const bgUrl = urlMatch ? urlMatch[1] : ''

  store.openImagePicker({
    instanceId:   props.block.instanceId,
    type:         'bg',
    elementIndex: idx,
    currentSrc:   bgUrl,
    currentAlt:   '',
  })
}

// ─── Image resize handles ────────────────────────────────────
const selectedImgEl = ref(null)
const imgResizeRect = ref(null)

// After applyImage() completes, find the updated img and show resize handles
watch(
  () => store.lastAppliedImageContext,
  async (ctx) => {
    if (!ctx || ctx.instanceId !== props.block.instanceId || ctx.type !== 'img') return
    // The store already committed new editedHtml; wait for our watch on
    // props.block.editedHtml to update the DOM (happens next tick since
    // currentlyEditingEl is null at this point)
    await nextTick()
    await nextTick() // double-tick: setBlockHtml uses its own nextTick
    const imgs = blockRef.value?.querySelectorAll('img')
    if (imgs?.[ctx.elementIndex]) selectImgForResize(imgs[ctx.elementIndex])
  }
)

function selectImgForResize(img) {
  selectedImgEl.value = img
  updateImgRect()
}

function updateImgRect() {
  if (selectedImgEl.value) {
    imgResizeRect.value = selectedImgEl.value.getBoundingClientRect()
  }
}

// Drag-to-resize (bottom-right corner handle)
let dragStartX = 0, dragStartY = 0, dragStartW = 0, dragStartH = 0, aspectRatio = 1

function onResizeMousedown(e) {
  if (!selectedImgEl.value) return
  e.preventDefault()
  e.stopPropagation()
  dragStartX  = e.clientX
  dragStartY  = e.clientY
  dragStartW  = selectedImgEl.value.offsetWidth  || selectedImgEl.value.naturalWidth  || 200
  dragStartH  = selectedImgEl.value.offsetHeight || selectedImgEl.value.naturalHeight || 200
  aspectRatio = dragStartW > 0 ? dragStartH / dragStartW : 1
  document.addEventListener('mousemove', onResizeMousemove)
  document.addEventListener('mouseup',   onResizeMouseup)
}

function onResizeMousemove(e) {
  if (!selectedImgEl.value) return
  const dx   = e.clientX - dragStartX
  const dy   = e.clientY - dragStartY
  const newW = Math.max(20, dragStartW + dx)
  // Hold Shift for free (unconstrained) resize; default = lock aspect ratio
  const newH = e.shiftKey
    ? Math.max(20, dragStartH + dy)
    : Math.round(newW * aspectRatio)
  selectedImgEl.value.style.width  = newW + 'px'
  selectedImgEl.value.style.height = newH + 'px'
  updateImgRect()
}

function onResizeMouseup() {
  document.removeEventListener('mousemove', onResizeMousemove)
  document.removeEventListener('mouseup',   onResizeMouseup)
  if (blockRef.value) {
    store.updateBlockHtml(props.block.instanceId, blockRef.value.innerHTML)
  }
}

// ─── Repeatable item controls ─────────────────────────────────
const hoveredRepEl      = ref(null)
const repeatableRect    = ref(null)
let   repeatableItems   = []
let   repLeaveTimer     = null

function setupRepeatableListeners() {
  cleanupRepeatableListeners()
  if (!blockRef.value) return
  repeatableItems = detectRepeatableItems(blockRef.value)
  repeatableItems.forEach(el => {
    el.addEventListener('mouseenter', onRepEnter)
    el.addEventListener('mouseleave', onRepLeave)
    // NOTE: no mousemove listener — updating the rect on every move
    // causes the overlay to chase the cursor, making it unclickable.
  })
}

function cleanupRepeatableListeners() {
  repeatableItems.forEach(el => {
    el.removeEventListener('mouseenter', onRepEnter)
    el.removeEventListener('mouseleave', onRepLeave)
  })
  repeatableItems  = []
  hoveredRepEl.value = null
}

function onRepEnter(e) {
  if (!isSelected.value) return
  clearTimeout(repLeaveTimer)
  hoveredRepEl.value   = e.currentTarget
  // Capture position ONCE on enter — never update on mousemove so the
  // overlay stays stable and the user can reach it without it jumping.
  repeatableRect.value = e.currentTarget.getBoundingClientRect()
}
function onRepLeave() {
  repLeaveTimer = setTimeout(() => { hoveredRepEl.value = null }, 120)
}
function keepRepOverlay() { clearTimeout(repLeaveTimer) }
function hideRepOverlay() {
  repLeaveTimer = setTimeout(() => { hoveredRepEl.value = null }, 100)
}

watch(isSelected, async (selected) => {
  await nextTick()
  if (selected) setupRepeatableListeners()
  else cleanupRepeatableListeners()
})

function duplicateRepItem() {
  const el = hoveredRepEl.value
  if (!el || !blockRef.value) return

  const clone = el.cloneNode(true)
  // De-duplicate Bootstrap IDs so accordions / dropdowns don't conflict
  const suffix = '-dup-' + Date.now()
  clone.querySelectorAll('[id]').forEach(c => { c.id = c.id + suffix })
  clone.removeAttribute('id')

  hoveredRepEl.value = null
  el.parentElement.insertBefore(clone, el.nextSibling)
  store.updateBlockHtml(props.block.instanceId, blockRef.value.innerHTML)
  nextTick(setupRepeatableListeners)
}

function removeRepItem() {
  const el = hoveredRepEl.value
  if (!el || !blockRef.value) return
  hoveredRepEl.value = null
  el.remove()
  store.updateBlockHtml(props.block.instanceId, blockRef.value.innerHTML)
  nextTick(setupRepeatableListeners)
}

// Re-setup repeatable listeners after block HTML changes externally
watch(() => props.block.editedHtml, async () => {
  if (isSelected.value) { await nextTick(); setupRepeatableListeners() }
})

// ─── Main click dispatcher ────────────────────────────────────
function onWrapperClick(e) {
  // Never intercept clicks inside the block-level controls toolbar
  if (e.target.closest('.block-controls')) return
  // Never intercept the floating overlays
  if (e.target.closest('.repeatable-controls-overlay')) return
  if (e.target.closest('.bg-replace-overlay')) return

  // Always select the block on any click
  store.selectBlock(props.block.instanceId)

  // 1a. <iframe> click → video URL editor
  // (iframes have pointer-events:none in canvas so clicks bubble up here)
  const iframeEl = e.target.closest('iframe')
  if (iframeEl && blockRef.value?.contains(iframeEl)) {
    handleIframeClick(iframeEl, e)
    return
  }

  // 1b. <img> click → image picker
  const imgEl = e.target.closest('img')
  if (imgEl && blockRef.value?.contains(imgEl)) {
    handleImgClick(imgEl, e)
    return
  }

  // 2. Text element click → inline editing
  const textEl = e.target.closest(EDITABLE_SELECTOR)
  if (textEl && blockRef.value?.contains(textEl) && !textEl.closest(SKIP_SELECTOR)) {
    // Don't start editing if the user is dragging/resizing
    startEditing(textEl, e)
    return
  }

  // 3. Clicking non-editable area while in edit mode → commit
  if (currentlyEditingEl.value) {
    commitEdit(currentlyEditingEl.value, { save: true })
  }

  // 4. Clicking non-img deselects resize handles
  if (!e.target.closest('.img-resize-overlay')) {
    selectedImgEl.value = null
  }
}

// ─── Cleanup ─────────────────────────────────────────────────
onUnmounted(() => {
  if (currentlyEditingEl.value) commitEdit(currentlyEditingEl.value, { save: true })
  cleanupRepeatableListeners()
  cleanupBgListeners()
  document.removeEventListener('mousemove', onResizeMousemove)
  document.removeEventListener('mouseup',   onResizeMouseup)
})

// ─── Repeatable overlay position helper ──────────────────────
function repOverlayStyle() {
  if (!repeatableRect.value) return {}
  const r = repeatableRect.value
  // Sit directly ON the element — top-right corner, 4px inset.
  // Mouse never has to leave the element to click the buttons.
  const OVERLAY_W = 64  // ≈ 2 × 26px buttons + gap + padding
  return {
    top:  `${r.top  + 4}px`,
    left: `${r.right - OVERLAY_W - 4}px`,
  }
}

function bgOverlayStyle() {
  if (!hoveredBgRect.value) return {}
  return {
    top:  `${hoveredBgRect.value.top + 8}px`,
    left: `${hoveredBgRect.value.left + 8}px`,
  }
}
</script>

<template>
  <div
    class="canvas-block-wrapper"
    :class="{ 'is-selected': isSelected }"
    @click="onWrapperClick"
  >
    <!-- Drag handle -->
    <div class="block-reorder-handle" title="Drag to reorder">
      <i class="bi bi-grip-horizontal"></i>
    </div>

    <!-- Block-level controls toolbar -->
    <BlockControls
      v-if="isSelected"
      :instance-id="block.instanceId"
      :block-index="index"
      :total-blocks="totalBlocks"
      :block-label="block.label"
    />

    <!-- Block HTML — managed manually; NO v-html to avoid cursor jump -->
    <div ref="blockRef" class="block-content" />

    <!-- ── Side reorder controls (always visible on hover) ── -->
    <div class="side-reorder-controls" @click.stop>
      <button
        title="Move block up"
        :disabled="index === 0"
        @click="store.moveBlock(block.instanceId, 'up')"
      >
        <i class="bi bi-chevron-up"></i>
      </button>
      <button
        title="Move block down"
        :disabled="index === totalBlocks - 1"
        @click="store.moveBlock(block.instanceId, 'down')"
      >
        <i class="bi bi-chevron-down"></i>
      </button>
    </div>

    <!--
      IMPORTANT: All Teleport elements are INSIDE the main wrapper div.
      Having them outside creates a Vue fragment (multiple root nodes),
      which breaks vuedraggable — it can't determine the single root DOM
      element for the list item and the drag handle stops working.
    -->
    <Teleport to="body">
      <!-- ── Repeatable-item +/× controls ── -->
      <div
        v-if="isSelected && hoveredRepEl && repeatableRect"
        class="repeatable-controls-overlay"
        :style="repOverlayStyle()"
        @mouseenter="keepRepOverlay"
        @mouseleave="hideRepOverlay"
      >
        <button title="Duplicate item" @click.stop="duplicateRepItem">
          <i class="bi bi-plus-lg"></i>
        </button>
        <button title="Remove item" class="rep-delete" @click.stop="removeRepItem">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <!-- ── BG-image "Replace Background" overlay ── -->
      <div
        v-if="isSelected && hoveredBgEl && hoveredBgRect"
        class="bg-replace-overlay"
        :style="bgOverlayStyle()"
        @mouseenter="keepBgOverlay"
        @mouseleave="hideBgOverlay"
        @click.stop="handleBgClick(hoveredBgEl, $event)"
      >
        <i class="bi bi-image me-1"></i>Replace BG
      </div>

      <!-- ── Image resize overlay ── -->
      <div
        v-if="isSelected && selectedImgEl && imgResizeRect"
        class="img-resize-overlay"
        :style="{
          top:    imgResizeRect.top    + 'px',
          left:   imgResizeRect.left   + 'px',
          width:  imgResizeRect.width  + 'px',
          height: imgResizeRect.height + 'px',
        }"
      >
        <div class="resize-handle resize-se" @mousedown="onResizeMousedown" />
      </div>
    </Teleport>
  </div>
</template>
