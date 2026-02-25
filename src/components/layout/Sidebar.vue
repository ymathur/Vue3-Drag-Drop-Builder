<script setup>
import { ref } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import CategoryTabs  from '@/components/sidebar/CategoryTabs.vue'
import BlockPalette  from '@/components/sidebar/BlockPalette.vue'
import ThemePanel    from '@/components/sidebar/ThemePanel.vue'
import BrandingPanel from '@/components/sidebar/BrandingPanel.vue'

const store     = useBuilderStore()
const activeTab = ref('blocks')  // 'blocks' | 'theme' | 'brand'
</script>

<template>
  <aside class="sidebar">

    <!-- 3-tab switcher: Blocks / Theme / Brand -->
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
      <button
        class="sidebar-tab"
        :class="{ 'sidebar-tab--active': activeTab === 'brand' }"
        @click="activeTab = 'brand'"
      >
        <i class="bi bi-building me-1"></i>Brand
      </button>
    </div>

    <!-- Panels -->
    <template v-if="activeTab === 'blocks'">
      <CategoryTabs />
      <BlockPalette :category-id="store.activeCategory" />
    </template>

    <ThemePanel    v-else-if="activeTab === 'theme'" />
    <BrandingPanel v-else />

  </aside>
</template>
