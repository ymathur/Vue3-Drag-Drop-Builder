import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { cloneBlock } from '@/utils/blockCloner.js'
import { generateFullHtml } from '@/utils/htmlExporter.js'

export const useBuilderStore = defineStore('builder', () => {
  // ─── Page ID Generator ──────────────────────────────────────
  function _genPageId() {
    return `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`
  }

  // ─── Core State ────────────────────────────────────────────
  const activeCategory  = ref('navigation')
  const selectedBlockId = ref(null)
  const previewOpen     = ref(false)

  // ─── Pages State ───────────────────────────────────────────
  const pages        = ref([{ id: _genPageId(), name: 'Page 1', blocks: [] }])
  const activePageId = ref(pages.value[0].id)

  /**
   * Writable computed — proxies reads/writes to the active page's blocks array.
   * All existing canvas code (push, splice, find, assignment) continues to work
   * unchanged; it simply operates on the active page's blocks instead of a
   * standalone array.
   */
  const canvasBlocks = computed({
    get() {
      return pages.value.find(p => p.id === activePageId.value)?.blocks ?? []
    },
    set(newBlocks) {
      const page = pages.value.find(p => p.id === activePageId.value)
      if (page) page.blocks = newBlocks
    },
  })

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
  /** True when the active page has at least one block. */
  const hasBlocks    = computed(() => canvasBlocks.value.length > 0)
  /** True when ANY page has at least one block (used for Save/Export enable). */
  const anyPageHasBlocks = computed(() => pages.value.some(p => p.blocks.length > 0))
  const previewHtml  = computed(() => generateFullHtml(canvasBlocks.value))
  /** Block count for the active page. */
  const blockCount   = computed(() => canvasBlocks.value.length)

  // ─── Page Actions ──────────────────────────────────────────
  function setActivePage(pageId) {
    if (activePageId.value === pageId) return
    activePageId.value    = pageId
    selectedBlockId.value = null   // clear selection when switching pages
  }

  function addPage() {
    const newPage = {
      id:     _genPageId(),
      name:   `Page ${pages.value.length + 1}`,
      blocks: [],
    }
    pages.value.push(newPage)
    setActivePage(newPage.id)
    return newPage
  }

  function removePage(pageId) {
    if (pages.value.length <= 1) return   // can't remove the last page
    const index = pages.value.findIndex(p => p.id === pageId)
    if (index === -1) return
    // If removing the active page, switch to an adjacent page first
    if (activePageId.value === pageId) {
      const newIndex = index > 0 ? index - 1 : 1
      setActivePage(pages.value[newIndex].id)
    }
    pages.value.splice(index, 1)
  }

  function renamePage(pageId, newName) {
    const page    = pages.value.find(p => p.id === pageId)
    const trimmed = (newName ?? '').trim()
    if (page && trimmed) page.name = trimmed
  }

  function duplicatePage(pageId) {
    const page = pages.value.find(p => p.id === pageId)
    if (!page) return
    const copy = {
      id:     _genPageId(),
      name:   `${page.name} Copy`,
      blocks: JSON.parse(JSON.stringify(page.blocks)),  // deep-copy blocks
    }
    const index = pages.value.findIndex(p => p.id === pageId)
    pages.value.splice(index + 1, 0, copy)
    setActivePage(copy.id)
  }

  function reorderPages(newArray) {
    pages.value = newArray
  }

  /**
   * Restore multi-page state from a v2.0 project payload.
   */
  function loadPagesData({ pages: pagesData, activePageId: pageId, activeCategory: cat }) {
    pages.value          = pagesData ?? [{ id: _genPageId(), name: 'Page 1', blocks: [] }]
    activePageId.value   = pageId ?? pages.value[0]?.id ?? ''
    activeCategory.value = cat    ?? 'navigation'
    selectedBlockId.value = null
  }

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
    canvasBlocks.value = newArray   // calls setter → assigns to active page's blocks
  }

  /** Clear all blocks on the active page only. */
  function clearCanvas() {
    canvasBlocks.value    = []   // calls setter
    selectedBlockId.value = null
  }

  /**
   * v1.0 backward-compat: load a single-page project.
   * Replaces ALL pages with one page containing the provided blocks.
   */
  function loadCanvasData({ blocks, activeCategory: cat }) {
    const pageId = _genPageId()
    pages.value          = [{ id: pageId, name: 'Page 1', blocks: blocks ?? [] }]
    activePageId.value   = pageId
    activeCategory.value = cat ?? 'navigation'
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
    ['#0f0d0b', 'var(--bs-dark)'],
    ['#080808', 'var(--bs-dark)'],
    ['#151515', 'var(--bs-light)'],       // dark theme's "light" surface (form inputs)
    ['#0a0a0a', 'var(--bs-body-bg)'],
    ['#050302', 'var(--bs-dark)'],
    ['#1a1612', 'var(--bs-dark)'],
    ['#1c1510', 'var(--bs-dark)'],
    ['#c9a96e', 'var(--bs-primary)'],
    ['#e0c88a', 'var(--bs-primary)'],     // lighter gold variant
    ['#a89070', 'var(--bs-secondary)'],   // warm brown secondary
    ['#8b7355', 'var(--bs-secondary)'],
    ['#6a5840', 'var(--bs-secondary)'],
    ['#2a2218', 'var(--bs-border-color)'],
    ['#f5e6d3', 'var(--bs-heading-color)'],
    ['#d8c4a8', 'var(--bs-body-color)'],
    // ── Furniture (Linen #fef6ec · Terracotta #c27a56 · Walnut #3d2b1f) ──
    ['#f5e8d5', 'var(--bs-light)'],
    ['#f5e6d8', 'var(--bs-light)'],       // slightly different beige variant
    ['#fef6ec', 'var(--bs-body-bg)'],
    ['#5a3e30', 'var(--bs-body-color)'],  // body text on light bg
    ['#4e3728', 'var(--bs-dark)'],
    ['#3d2b1f', 'var(--bs-dark)'],
    ['#c27a56', 'var(--bs-primary)'],
    ['#7a5c47', 'var(--bs-secondary)'],
    ['#a07860', 'var(--bs-secondary)'],   // lighter secondary
    ['#d4b9a4', 'var(--bs-dark-text)'],   // footer light text on dark bg
    ['#e8d5c0', 'var(--bs-border-color)'],
    ['#2a1a0f', 'var(--bs-heading-color)'],
    // ── Handicraft (Parchment #fdf8f0 · Saffron #f0a500 · Indigo #2d2f6b) ──
    ['#fdf8f0', 'var(--bs-body-bg)'],
    ['#fffdf5', 'var(--bs-body-bg)'],
    ['#f5ead5', 'var(--bs-light)'],
    ['#2d2f6b', 'var(--bs-dark)'],
    ['#1a1c45', 'var(--bs-dark)'],
    ['#f0a500', 'var(--bs-primary)'],
    ['#e5d8c0', 'var(--bs-border-color)'],
    ['#2d2010', 'var(--bs-body-color)'],
    ['#1a1200', 'var(--bs-heading-color)'],
    // ── Trailer (Forest #141e14 · Orange #e8630a · Sage #4a8a4a) ──
    ['#0e160e', 'var(--bs-dark)'],
    ['#111a11', 'var(--bs-dark)'],
    ['#0a100a', 'var(--bs-dark)'],
    ['#1a2a1a', 'var(--bs-light)'],
    ['#141e14', 'var(--bs-body-bg)'],
    ['#e8630a', 'var(--bs-primary)'],
    ['#4a8a4a', 'var(--bs-secondary)'],
    ['#8ab08a', 'var(--bs-secondary)'],
    ['#c8dcc8', 'var(--bs-body-color)'],
    ['#e8f4e8', 'var(--bs-heading-color)'],
    ['#253525', 'var(--bs-border-color)'],
    // ── USA Trailer (Red #c8102e · Navy #0d1b2a) ────────────
    ['#c8102e', 'var(--bs-primary)'],
    ['#0d1b2a', 'var(--bs-dark)'],
    ['#1a2744', 'var(--bs-dark)'],          // darker navy variant
    ['#f5f7fa', 'var(--bs-light)'],
    ['#f0f4ff', 'var(--bs-light)'],         // pill / card light bg
    ['#dde3ec', 'var(--bs-light)'],         // image fallback bg
    ['#6b7280', 'var(--bs-body-color)'],    // muted gray text
    ['#d0d9f0', 'var(--bs-border-color)'],  // pill borders
  ]

  /**
   * Scan ALL canvas pages and replace hardcoded theme-palette hex colors in
   * inline style attributes with CSS var() references.
   *
   * • Safe to call repeatedly — once a hex is replaced by a var(), subsequent
   *   calls are no-ops since the hex pattern no longer matches.
   * • Only 6-digit hex codes are replaced; 8-digit hex (e.g. #141e14cc) are
   *   intentionally left alone (they carry alpha that has no CSS-var equivalent).
   * • Populates editedHtml so the normalised HTML persists in auto-save.
   */
  function normalizeCanvasBlockColors() {
    pages.value.forEach(page => {
      page.blocks.forEach(block => {
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
    // pages state
    pages,
    activePageId,
    // getters
    selectedBlock,
    hasBlocks,
    anyPageHasBlocks,
    previewHtml,
    blockCount,
    // page actions
    setActivePage,
    addPage,
    removePage,
    renamePage,
    duplicatePage,
    reorderPages,
    loadPagesData,
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
