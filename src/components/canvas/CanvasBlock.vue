<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import BlockControls from './BlockControls.vue'

const props = defineProps({
  block: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  totalBlocks: {
    type: Number,
    required: true
  }
})

const store = useBuilderStore()
const blockRef = ref(null)

// Whether this specific block is currently selected
const isSelected = computed(() => store.selectedBlockId === props.block.instanceId)

// Track active editable elements so we can clean up
let editableElements = []
let saveDebounce = null
let isEditingInternally = false

// ─── Inline Editing ──────────────────────────────────────

const EDITABLE_SELECTOR = 'h1, h2, h3, h4, h5, h6, p, a, span, li, button, label, small, blockquote, td, th, caption'

// Elements we want to exclude from contenteditable
const EXCLUDE_SELECTOR = 'i, svg, img, [data-no-edit]'

function getEditableElements() {
  if (!blockRef.value) return []
  return Array.from(blockRef.value.querySelectorAll(EDITABLE_SELECTOR)).filter(el => {
    // Skip elements that contain only icon children or are excluded
    if (el.closest(EXCLUDE_SELECTOR)) return false
    // Skip if this element is a child of another editable element we already target
    // (e.g. a <span> inside a <p>) — we only want the outermost editable
    return true
  })
}

function activateEditing() {
  if (!blockRef.value) return
  editableElements = getEditableElements()
  editableElements.forEach(el => {
    el.contentEditable = 'true'
    el.spellcheck = false
    el.classList.add('editable-active')

    // Prevent Enter creating new block-level elements in headings/buttons
    const tag = el.tagName.toLowerCase()
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button'].includes(tag)) {
      el.addEventListener('keydown', preventEnterKey)
    }
  })
  blockRef.value.addEventListener('input', onBlockInput)
}

function deactivateEditing() {
  editableElements.forEach(el => {
    el.contentEditable = 'false'
    el.classList.remove('editable-active')
    el.removeEventListener('keydown', preventEnterKey)
  })
  if (blockRef.value) {
    blockRef.value.removeEventListener('input', onBlockInput)
  }
  // Flush any pending save
  if (saveDebounce) {
    clearTimeout(saveDebounce)
    saveDebounce = null
    flushSave()
  }
  editableElements = []
}

function preventEnterKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
}

function onBlockInput() {
  isEditingInternally = true
  clearTimeout(saveDebounce)
  saveDebounce = setTimeout(() => {
    flushSave()
  }, 300)
}

function flushSave() {
  if (blockRef.value) {
    store.updateBlockHtml(props.block.instanceId, blockRef.value.innerHTML)
  }
  isEditingInternally = false
}

// Watch selection state to toggle editing
watch(isSelected, async (selected) => {
  await nextTick()
  if (selected) {
    activateEditing()
  } else {
    deactivateEditing()
  }
})

// ─── Bootstrap JS Re-initialization ──────────────────────
function initBootstrapComponents() {
  if (!window.bootstrap || !blockRef.value) return
  try {
    const dropdowns = blockRef.value.querySelectorAll('[data-bs-toggle="dropdown"]')
    dropdowns.forEach(el => {
      if (!bootstrap.Dropdown.getInstance(el)) {
        new bootstrap.Dropdown(el)
      }
    })
    const collapses = blockRef.value.querySelectorAll('[data-bs-toggle="collapse"]')
    collapses.forEach(el => {
      if (!bootstrap.Collapse.getInstance(el)) {
        new bootstrap.Collapse(el, { toggle: false })
      }
    })
  } catch (e) {
    // Silently ignore Bootstrap init errors
  }
}

onMounted(async () => {
  await nextTick()
  initBootstrapComponents()
  if (isSelected.value) {
    activateEditing()
  }
})

onUnmounted(() => {
  deactivateEditing()
})

// ─── Click handling ──────────────────────────────────────
function onWrapperClick(e) {
  // Don't intercept clicks on the block controls toolbar
  if (e.target.closest('.block-controls')) return
  store.selectBlock(props.block.instanceId)
}
</script>

<template>
  <div
    class="canvas-block-wrapper"
    :class="{ 'is-selected': isSelected }"
    @click="onWrapperClick"
  >
    <!-- Drag handle: the ONLY element SortableJS uses to initiate a reorder drag -->
    <div class="block-reorder-handle" title="Drag to reorder">
      <i class="bi bi-grip-horizontal"></i>
    </div>

    <!-- Controls toolbar (visible when selected) -->
    <BlockControls
      v-if="isSelected"
      :instance-id="block.instanceId"
      :block-index="index"
      :total-blocks="totalBlocks"
      :block-label="block.label"
    />

    <!-- The actual block HTML -->
    <div
      ref="blockRef"
      v-html="block.editedHtml || block.html"
    />
  </div>
</template>
