<script setup>
const props = defineProps({
  block: {
    type: Object,
    required: true
  }
})

// Map category IDs to icon + color for the thumbnail badge
const categoryMeta = {
  navigation:   { icon: 'bi-layout-navbar',        bg: '#dbeafe', color: '#1d4ed8' },
  heroes:       { icon: 'bi-image',                 bg: '#fce7f3', color: '#be185d' },
  features:     { icon: 'bi-grid-3x3-gap',          bg: '#dcfce7', color: '#15803d' },
  content:      { icon: 'bi-file-text',             bg: '#fef9c3', color: '#a16207' },
  cards:        { icon: 'bi-card-text',             bg: '#ede9fe', color: '#6d28d9' },
  testimonials: { icon: 'bi-chat-quote',            bg: '#ffedd5', color: '#c2410c' },
  cta:          { icon: 'bi-megaphone',             bg: '#fee2e2', color: '#b91c1c' },
  forms:        { icon: 'bi-ui-checks',             bg: '#e0f2fe', color: '#0369a1' },
  pricing:      { icon: 'bi-tag',                   bg: '#f0fdf4', color: '#15803d' },
  footers:      { icon: 'bi-layout-sidebar-reverse', bg: '#f1f5f9', color: '#475569' },
}

const meta = categoryMeta[props.block.categoryId] || { icon: 'bi-puzzle', bg: '#f1f5f9', color: '#475569' }
</script>

<template>
  <div class="block-thumbnail">
    <div
      class="block-thumbnail-icon"
      :style="{ background: meta.bg, color: meta.color }"
    >
      <i :class="meta.icon"></i>
    </div>
    <span class="block-thumbnail-label">{{ block.label }}</span>
    <i class="bi bi-grip-vertical block-drag-handle"></i>
  </div>
</template>
