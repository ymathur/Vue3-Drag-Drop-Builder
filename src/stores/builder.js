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

  /**
   * Restore canvas state from a saved project payload.
   * Blocks are stored as full objects (including html + editedHtml),
   * so they can be assigned directly without re-cloning.
   */
  function loadCanvasData({ blocks, activeCategory: cat }) {
    canvasBlocks.value   = blocks ?? []
    activeCategory.value = cat   ?? 'navigation'
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
      // Collect elements that have a background-image OR a background
      // shorthand that contains url() — matching the detection in CanvasBlock.
      const bgEls = []
      div.querySelectorAll('*').forEach(el => {
        const bgImg       = el.style.backgroundImage
        const bgShorthand = el.style.background
        if (
          (bgImg && bgImg !== 'none' && bgImg.includes('url(')) ||
          (bgShorthand && bgShorthand.includes('url('))
        ) {
          bgEls.push(el)
        }
      })
      const bgEl = bgEls[ctx.elementIndex]
      if (bgEl) {
        const bgImg = bgEl.style.backgroundImage
        if (bgImg && bgImg !== 'none' && bgImg.includes('url(')) {
          // Property is background-image — update it directly
          bgEl.style.backgroundImage = `url("${src}")`
        } else if (bgEl.style.background && bgEl.style.background.includes('url(')) {
          // Property is the background shorthand — replace only the url() part,
          // preserving position, size, repeat, etc.
          bgEl.style.background = bgEl.style.background.replace(
            /url\(["']?[^"')]+["']?\)/,
            `url("${src}")`
          )
        } else {
          // Fallback
          bgEl.style.backgroundImage = `url("${src}")`
        }
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

  // ─── Palette Normalizer ────────────────────────────────────
  // Map of known hardcoded theme palette hex values → the CSS variable they
  // should map to. Ordered longest-first so partial overlaps don't bite.
  // Once converted, var() references update automatically when themes change,
  // making all further theme-switches and ThemePanel tweaks live instantly.
  const PALETTE_CSS_VAR_MAP = [
    // ── Jewellery (Obsidian #0a0a0a · Gold #c9a96e) ──────────
    ['#0f0d0b', 'var(--bs-body-bg)'],
    ['#080808', 'var(--bs-body-bg)'],
    ['#151515', 'var(--bs-body-bg)'],
    ['#0a0a0a', 'var(--bs-body-bg)'],
    ['#050302', 'var(--bs-dark)'],
    ['#1a1612', 'var(--bs-dark)'],
    ['#1c1510', 'var(--bs-dark)'],
    ['#c9a96e', 'var(--bs-primary)'],
    // ── Furniture (Linen #fef6ec · Terracotta #c27a56 · Walnut #3d2b1f) ──
    ['#f5e6d8', 'var(--bs-body-bg)'],
    ['#fef6ec', 'var(--bs-body-bg)'],
    ['#5a3e30', 'var(--bs-dark)'],
    ['#4e3728', 'var(--bs-dark)'],
    ['#3d2b1f', 'var(--bs-dark)'],
    ['#c27a56', 'var(--bs-primary)'],
    ['#7a5c47', 'var(--bs-secondary)'],
    ['#e8d5c0', 'var(--bs-border-color)'],
    // ── Handicraft (Parchment #fdf8f0 · Saffron #f0a500 · Indigo #2d2f6b) ──
    ['#fdf8f0', 'var(--bs-body-bg)'],
    ['#2d2f6b', 'var(--bs-dark)'],
    ['#f0a500', 'var(--bs-primary)'],
    ['#e5d8c0', 'var(--bs-border-color)'],
    // ── Trailer (Forest #141e14 · Orange #e8630a · Sage #4a8a4a) ──
    ['#0e160e', 'var(--bs-dark)'],
    ['#0a100a', 'var(--bs-dark)'],
    ['#1a2a1a', 'var(--bs-dark)'],
    ['#141e14', 'var(--bs-body-bg)'],
    ['#e8630a', 'var(--bs-primary)'],
    ['#4a8a4a', 'var(--bs-secondary)'],
    ['#c8dcc8', 'var(--bs-body-color)'],
  ]

  /**
   * Scan all canvas blocks and replace hardcoded theme-palette hex colors in
   * inline style attributes with CSS var() references.
   *
   * • Safe to call repeatedly — once a hex is replaced by a var(), subsequent
   *   calls are no-ops since the hex pattern no longer matches.
   * • Only 6-digit hex codes are replaced; 8-digit hex (e.g. #141e14cc) are
   *   intentionally left alone (they carry alpha that has no CSS-var equivalent).
   * • Populates editedHtml so the normalised HTML persists in auto-save.
   */
  function normalizeCanvasBlockColors() {
    canvasBlocks.value.forEach(block => {
      const src = block.editedHtml ?? block.html
      if (!src) return

      let html = src
      for (const [hex, cssVar] of PALETTE_CSS_VAR_MAP) {
        // Match only exact 6-char hex NOT followed by a 7th hex digit
        const escaped = hex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        html = html.replace(new RegExp(escaped + '(?![0-9a-fA-F])', 'gi'), cssVar)
      }

      if (html !== src) block.editedHtml = html
    })
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
    loadCanvasData,
    exportHTML,
    normalizeCanvasBlockColors,
    // image picker actions
    openImagePicker,
    openImagePickerWithPreload,
    closeImagePicker,
    applyImage,
  }
})
