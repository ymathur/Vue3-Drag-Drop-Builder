<script setup>
import { useBuilderStore } from '@/stores/builder.js'
import CategoryTabs from '@/components/sidebar/CategoryTabs.vue'
import BlockPalette from '@/components/sidebar/BlockPalette.vue'

const store = useBuilderStore()
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h6>Blocks</h6>
    </div>

    <!-- Category navigation -->
    <CategoryTabs />

    <!-- Block palette for the active category -->
    <BlockPalette :category-id="store.activeCategory" />
  </aside>
</template>
