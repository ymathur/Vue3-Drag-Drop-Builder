<script setup>
import { useBuilderStore } from '@/stores/builder.js'
import { categories } from '@/blocks/index.js'

const store = useBuilderStore()
</script>

<template>
  <div class="category-tabs">
    <button
      v-for="cat in categories"
      :key="cat.id"
      class="category-tab-btn"
      :class="{ active: store.activeCategory === cat.id }"
      @click="store.setActiveCategory(cat.id)"
    >
      <i :class="cat.icon"></i>
      {{ cat.label }}
    </button>
  </div>
</template>
