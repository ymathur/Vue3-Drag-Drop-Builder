<script setup>
import draggable from 'vuedraggable'
import { useBuilderStore } from '@/stores/builder.js'
import { cloneBlock } from '@/utils/blockCloner.js'
import CanvasBlock from './CanvasBlock.vue'

const store = useBuilderStore()

/**
 * When a block is dragged from the sidebar (pull:'clone'), vuedraggable splices
 * the raw block definition (no instanceId) into store.canvasBlocks before @add
 * fires. We locate it by the absence of instanceId rather than trusting
 * event.newIndex, which can be unreliable when item-key="instanceId" and the
 * dropped item doesn't yet have one.
 */
function onAdd(event) {
  // Find the first entry that hasn't been turned into a canvas instance yet.
  // Raw sidebar definitions never have instanceId; canvas blocks always do.
  const idx = store.canvasBlocks.findIndex(b => !b.instanceId)
  if (idx === -1) return               // nothing to process (shouldn't happen)
  const raw = store.canvasBlocks[idx]
  if (!raw?.html) return               // guard against malformed definitions
  const cloned = cloneBlock(raw)
  store.canvasBlocks.splice(idx, 1, cloned)
  store.selectBlock(cloned.instanceId)
}
</script>

<template>
  <draggable
    :list="store.canvasBlocks"
    class="drop-zone"
    :class="{ 'is-empty': !store.hasBlocks }"
    :group="{ name: 'canvas-blocks', pull: false, put: true }"
    :animation="200"
    ghost-class="drag-ghost"
    chosen-class="drag-chosen"
    item-key="instanceId"
    handle=".block-reorder-handle"
    @add="onAdd"
  >
    <template #item="{ element, index }">
      <CanvasBlock
        :block="element"
        :index="index"
        :total-blocks="store.canvasBlocks.length"
      />
    </template>

    <!-- Empty state lives INSIDE the draggable container so the whole area is droppable -->
    <template #footer>
      <div v-if="!store.hasBlocks" class="canvas-empty-state">
        <i class="bi bi-columns-gap"></i>
        <h5>Your canvas is empty</h5>
        <p>Drag blocks from the left sidebar and drop them here.</p>
      </div>
    </template>
  </draggable>
</template>
