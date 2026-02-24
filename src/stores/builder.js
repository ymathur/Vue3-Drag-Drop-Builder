import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { cloneBlock } from '@/utils/blockCloner.js'
import { generateFullHtml } from '@/utils/htmlExporter.js'

export const useBuilderStore = defineStore('builder', () => {
  // ─── Core State ────────────────────────────────────────────
  const activeCategory  = ref('navigation')
  const canvasBlocks    = ref([])
  const selectedBlockId = ref(null)
  const previewOpen     = ref(false)

  // ─── Image Picker State ────────────────────────────────────
  const imagePickerOpen    = ref(false)
  /**
   * imagePickerContext shape:
   * {
   *   instanceId:    string,
   *   type:          'img' | 'bg',
   *   elementIndex:  number,      // index among all img / bg-image elements
   *   currentSrc:    string,
   *   currentAlt:    string,
   *   preloadedSrc:  string|null, // set when opened via Ctrl+V paste
   * }
   */
  const imagePickerContext = ref(null)
  /**
   * After applyImage() completes, briefly holds the context so CanvasBlock
   * can show resize handles on the freshly applied image.
   */
  const lastAppliedImageContext = ref(null)

  // ─── Getters ───────────────────────────────────────────────
  const selectedBlock = computed(() =>
    canvasBlocks.value.find(b => b.instanceId === selectedBlockId.value) ?? null
  )
  const hasBlocks    = computed(() => canvasBlocks.value.length > 0)
  const previewHtml  = computed(() => generateFullHtml(canvasBlocks.value))
  const blockCount   = computed(() => canvasBlocks.value.length)

  // ─── Canvas Actions ────────────────────────────────────────
  function setActiveCategory(categoryId) {
    activeCategory.value = categoryId
  }

  function addBlock(blockDefinition) {
    const instance = cloneBlock(blockDefinition)
    canvasBlocks.value.push(instance)
    selectedBlockId.value = instance.instanceId
    return instance
  }

  function removeBlock(instanceId) {
    const index = canvasBlocks.value.findIndex(b => b.instanceId === instanceId)
    if (index !== -1) {
      canvasBlocks.value.splice(index, 1)
      if (selectedBlockId.value === instanceId) selectedBlockId.value = null
    }
  }

  function moveBlock(instanceId, direction) {
    const index = canvasBlocks.value.findIndex(b => b.instanceId === instanceId)
    if (index === -1) return
    const arr = canvasBlocks.value
    if (direction === 'up' && index > 0) {
      ;[arr[index - 1], arr[index]] = [arr[index], arr[index - 1]]
    } else if (direction === 'down' && index < arr.length - 1) {
      ;[arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
    }
  }

  function duplicateBlock(instanceId) {
    const block = canvasBlocks.value.find(b => b.instanceId === instanceId)
    if (!block) return
    const copy = cloneBlock(block)
    copy.editedHtml = block.editedHtml   // preserve edits
    const index = canvasBlocks.value.findIndex(b => b.instanceId === instanceId)
    canvasBlocks.value.splice(index + 1, 0, copy)
    selectedBlockId.value = copy.instanceId
  }

  function selectBlock(instanceId) {
    if (selectedBlockId.value === instanceId) return
    selectedBlockId.value = instanceId
  }

  function deselectAll() {
    selectedBlockId.value = null
  }

  function updateBlockHtml(instanceId, newHtml) {
    const block = canvasBlocks.value.find(b => b.instanceId === instanceId)
    if (block) block.editedHtml = newHtml
  }

  function reorderBlocks(newArray) {
    canvasBlocks.value = newArray
  }

  function clearCanvas() {
    canvasBlocks.value  = []
    selectedBlockId.value = null
  }

  function exportHTML() {
    const html = generateFullHtml(canvasBlocks.value)
    const blob = new Blob([html], { type: 'text/html' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'page.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // ─── Image Picker Actions ──────────────────────────────────
  function openImagePicker(context) {
    imagePickerContext.value = context
    imagePickerOpen.value    = true
  }

  /** Open the picker pre-filled with a pasted image (Ctrl+V) */
  function openImagePickerWithPreload({ instanceId, preloadedSrc }) {
    imagePickerContext.value = {
      instanceId,
      type:          'img',
      elementIndex:  0,
      currentSrc:    '',
      currentAlt:    '',
      preloadedSrc,
    }
    imagePickerOpen.value = true
  }

  function closeImagePicker() {
    imagePickerOpen.value    = false
    imagePickerContext.value = null
  }

  /**
   * Apply a chosen image (src + alt) to the target element in the block HTML.
   * Works for both <img> elements and background-image CSS.
   */
  function applyImage({ src, alt }) {
    const ctx = imagePickerContext.value
    if (!ctx) return

    const block = canvasBlocks.value.find(b => b.instanceId === ctx.instanceId)
    if (!block) return

    const div     = document.createElement('div')
    div.innerHTML = block.editedHtml || block.html

    if (ctx.type === 'img') {
      const imgs = div.querySelectorAll('img')
      const img  = imgs[ctx.elementIndex]
      if (img) {
        img.src = src
        img.alt = alt ?? ''
        // Remove any old dimension constraints from a previous resize so
        // the new image can be sized naturally first.
        img.style.removeProperty('width')
        img.style.removeProperty('height')
      }
    } else if (ctx.type === 'bg') {
      const bgEls = []
      div.querySelectorAll('*').forEach(el => {
        if (el.style.backgroundImage && el.style.backgroundImage !== 'none') {
          bgEls.push(el)
        }
      })
      const bgEl = bgEls[ctx.elementIndex]
      if (bgEl) {
        bgEl.style.backgroundImage = `url("${src}")`
      }
    }

    block.editedHtml = div.innerHTML

    // Save context before closing so CanvasBlock can react
    const appliedCtx = { ...ctx }
    closeImagePicker()

    // Signal CanvasBlock to show resize handles on the freshly updated image
    lastAppliedImageContext.value = appliedCtx
    setTimeout(() => { lastAppliedImageContext.value = null }, 300)
  }

  // ─── Exports ───────────────────────────────────────────────
  return {
    // state
    activeCategory,
    canvasBlocks,
    selectedBlockId,
    previewOpen,
    imagePickerOpen,
    imagePickerContext,
    lastAppliedImageContext,
    // getters
    selectedBlock,
    hasBlocks,
    previewHtml,
    blockCount,
    // canvas actions
    setActiveCategory,
    addBlock,
    removeBlock,
    moveBlock,
    duplicateBlock,
    selectBlock,
    deselectAll,
    updateBlockHtml,
    reorderBlocks,
    clearCanvas,
    exportHTML,
    // image picker actions
    openImagePicker,
    openImagePickerWithPreload,
    closeImagePicker,
    applyImage,
  }
})
