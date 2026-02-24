import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { cloneBlock } from '@/utils/blockCloner.js'
import { generateFullHtml } from '@/utils/htmlExporter.js'

export const useBuilderStore = defineStore('builder', () => {
  // --- State ---
  const activeCategory = ref('navigation')
  const canvasBlocks = ref([])
  const selectedBlockId = ref(null)
  const previewOpen = ref(false)

  // --- Getters ---
  const selectedBlock = computed(() =>
    canvasBlocks.value.find(b => b.instanceId === selectedBlockId.value) ?? null
  )

  const hasBlocks = computed(() => canvasBlocks.value.length > 0)

  const previewHtml = computed(() => generateFullHtml(canvasBlocks.value))

  const blockCount = computed(() => canvasBlocks.value.length)

  // --- Actions ---

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
      if (selectedBlockId.value === instanceId) {
        selectedBlockId.value = null
      }
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
    copy.editedHtml = block.editedHtml  // preserve any edits
    const index = canvasBlocks.value.findIndex(b => b.instanceId === instanceId)
    canvasBlocks.value.splice(index + 1, 0, copy)
    selectedBlockId.value = copy.instanceId
  }

  function selectBlock(instanceId) {
    if (selectedBlockId.value === instanceId) {
      selectedBlockId.value = null
    } else {
      selectedBlockId.value = instanceId
    }
  }

  function deselectAll() {
    selectedBlockId.value = null
  }

  function updateBlockHtml(instanceId, newHtml) {
    const block = canvasBlocks.value.find(b => b.instanceId === instanceId)
    if (block) {
      block.editedHtml = newHtml
    }
  }

  function reorderBlocks(newArray) {
    canvasBlocks.value = newArray
  }

  function clearCanvas() {
    canvasBlocks.value = []
    selectedBlockId.value = null
  }

  function exportHTML() {
    const html = generateFullHtml(canvasBlocks.value)
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'page.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return {
    // state
    activeCategory,
    canvasBlocks,
    selectedBlockId,
    previewOpen,
    // getters
    selectedBlock,
    hasBlocks,
    previewHtml,
    blockCount,
    // actions
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
  }
})
