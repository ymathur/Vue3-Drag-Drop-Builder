<script setup>
import { useBuilderStore } from '@/stores/builder.js'

const props = defineProps({
  instanceId: {
    type: String,
    required: true
  },
  blockIndex: {
    type: Number,
    required: true
  },
  totalBlocks: {
    type: Number,
    required: true
  },
  blockLabel: {
    type: String,
    default: 'Block'
  }
})

const store = useBuilderStore()

function onDelete() {
  if (confirm(`Delete this "${props.blockLabel}" block?`)) {
    store.removeBlock(props.instanceId)
  }
}
</script>

<template>
  <div class="block-controls" @click.stop>
    <!-- Move Up -->
    <button
      title="Move Up"
      :disabled="blockIndex === 0"
      @click="store.moveBlock(instanceId, 'up')"
    >
      <i class="bi bi-arrow-up"></i>
    </button>

    <!-- Move Down -->
    <button
      title="Move Down"
      :disabled="blockIndex === totalBlocks - 1"
      @click="store.moveBlock(instanceId, 'down')"
    >
      <i class="bi bi-arrow-down"></i>
    </button>

    <div class="block-controls-divider"></div>

    <!-- Duplicate -->
    <button title="Duplicate" @click="store.duplicateBlock(instanceId)">
      <i class="bi bi-copy"></i>
    </button>

    <div class="block-controls-divider"></div>

    <!-- Delete -->
    <button class="btn-delete" title="Delete" @click="onDelete">
      <i class="bi bi-trash3"></i>
    </button>
  </div>

  <!-- Block label chip at bottom-left -->
  <div class="block-label-chip">{{ blockLabel }}</div>
</template>
