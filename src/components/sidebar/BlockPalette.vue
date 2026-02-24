<script setup>
import { computed } from 'vue'
import draggable from 'vuedraggable'
import BlockThumbnail from './BlockThumbnail.vue'
import { blocksByCategory } from '@/blocks/index.js'

const props = defineProps({
  categoryId: {
    type: String,
    required: true
  }
})

const blocks = computed(() => blocksByCategory[props.categoryId] || [])
</script>

<template>
  <div class="block-palette">
    <draggable
      class="palette-list"
      :list="blocks"
      :group="{ name: 'canvas-blocks', pull: 'clone', put: false }"
      :sort="false"
      :clone="(block) => ({ ...block })"
      item-key="id"
      ghost-class="drag-ghost"
      chosen-class="drag-chosen"
    >
      <template #item="{ element }">
        <BlockThumbnail :block="element" />
      </template>
    </draggable>

    <div v-if="blocks.length === 0" class="text-center text-muted py-4 small">
      No blocks in this category.
    </div>
  </div>
</template>
