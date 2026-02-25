<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()

// Locally track which card is hovered
const hoveredId = ref(null)

function pick(theme) {
  themeStore.selectTheme(theme.id)
  themeStore.closePicker()
}

function dismiss() {
  // Only allow dismissal if a theme is already chosen
  if (themeStore.activeThemeId) themeStore.closePicker()
}

// ── Group themes by their group field ──────────────────────
const GROUP_META = {
  core:     { label: 'Core Themes',     icon: 'bi-stars',      desc: 'General-purpose styles for any project' },
  industry: { label: 'Industry Themes', icon: 'bi-briefcase',  desc: 'Tailored for specific business verticals' },
}

const themeGroups = computed(() => {
  const map = new Map()
  for (const theme of themeStore.themes) {
    const key = theme.group || 'core'
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(theme)
  }
  return [...map.entries()].map(([key, themes]) => ({
    key,
    ...( GROUP_META[key] ?? { label: key, icon: 'bi-grid', desc: '' }),
    themes,
  }))
})
</script>

<template>
  <Teleport to="body">
    <Transition name="tp-fade">
      <div
        v-if="themeStore.pickerOpen"
        class="tp-backdrop"
        @click.self="dismiss"
      >
        <div class="tp-dialog" role="dialog" aria-modal="true" aria-label="Choose a theme">

          <!-- Header -->
          <div class="tp-header">
            <div class="tp-header-text">
              <i class="bi bi-palette2 tp-header-icon"></i>
              <div>
                <h2 class="tp-title">Choose Your Theme</h2>
                <p class="tp-subtitle">Pick a visual style to get started. You can customise every detail afterwards.</p>
              </div>
            </div>
            <button
              v-if="themeStore.activeThemeId"
              class="tp-close-btn"
              title="Close"
              @click="dismiss"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <!-- Grouped theme sections -->
          <div class="tp-body">
            <div
              v-for="group in themeGroups"
              :key="group.key"
              class="tp-section"
            >
              <!-- Group heading -->
              <div class="tp-group-header">
                <div class="tp-group-header-left">
                  <i :class="['bi', group.icon, 'tp-group-icon']"></i>
                  <span class="tp-group-label">{{ group.label }}</span>
                  <span class="tp-group-count">{{ group.themes.length }}</span>
                </div>
                <span class="tp-group-desc">{{ group.desc }}</span>
              </div>

              <!-- Theme cards grid -->
              <div class="tp-grid">
                <button
                  v-for="theme in group.themes"
                  :key="theme.id"
                  class="tp-card"
                  :class="{
                    'tp-card--active':  themeStore.activeThemeId === theme.id,
                    'tp-card--hovered': hoveredId === theme.id,
                  }"
                  @click="pick(theme)"
                  @mouseenter="hoveredId = theme.id"
                  @mouseleave="hoveredId = null"
                >
                  <!-- Swatch strip -->
                  <div class="tp-swatches">
                    <div
                      v-for="(color, i) in theme.thumbnail"
                      :key="i"
                      class="tp-swatch"
                      :style="{ background: color }"
                    />
                  </div>

                  <!-- Label -->
                  <div class="tp-card-body">
                    <div class="tp-card-name">
                      {{ theme.name }}
                      <i
                        v-if="themeStore.activeThemeId === theme.id"
                        class="bi bi-check-circle-fill tp-check"
                      ></i>
                    </div>
                    <p class="tp-card-desc">{{ theme.description }}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="tp-footer">
            <span class="tp-footer-hint">
              <i class="bi bi-info-circle me-1"></i>
              Theme styles are applied live to the canvas.
            </span>
            <button
              v-if="themeStore.activeThemeId"
              class="btn btn-primary btn-sm px-4"
              @click="dismiss"
            >
              Continue Editing
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
