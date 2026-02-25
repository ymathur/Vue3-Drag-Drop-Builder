<script setup>
import { ref } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import CategoryTabs  from '@/components/sidebar/CategoryTabs.vue'
import BlockPalette  from '@/components/sidebar/BlockPalette.vue'
import ThemePanel    from '@/components/sidebar/ThemePanel.vue'

const store     = useBuilderStore()
const activeTab = ref('blocks')  // 'blocks' | 'theme'
</script>

<template>
  <aside class="sidebar">

    <!-- 2-tab switcher: Blocks / Theme -->
    <div class="sidebar-tabs">
      <button
        class="sidebar-tab"
        :class="{ 'sidebar-tab--active': activeTab === 'blocks' }"
        @click="activeTab = 'blocks'"
      >
        <i class="bi bi-columns-gap me-1"></i>Blocks
      </button>
      <button
        class="sidebar-tab"
        :class="{ 'sidebar-tab--active': activeTab === 'theme' }"
        @click="activeTab = 'theme'"
      >
        <i class="bi bi-palette2 me-1"></i>Theme
      </button>
    </div>

    <!-- Panels -->
    <template v-if="activeTab === 'blocks'">
      <CategoryTabs />
      <BlockPalette :category-id="store.activeCategory" />
    </template>

    <ThemePanel v-else />

  </aside>
</template>
