<script setup>
import draggable from 'vuedraggable'
import { useBuilderStore } from '@/stores/builder.js'
import { cloneBlock } from '@/utils/blockCloner.js'
import CanvasBlock from './CanvasBlock.vue'

const store = useBuilderStore()

/**
 * Use :list (not v-model) so vuedraggable mutates store.canvasBlocks in-place
 * *before* @add fires. With v-model the setter runs after @add, so the dropped
 * item isn't in the array yet when onAdd reads it.
 */
function onAdd(event) {
  const raw = store.canvasBlocks[event.newIndex]
  const cloned = cloneBlock(raw)
  store.canvasBlocks.splice(event.newIndex, 1, cloned)
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
