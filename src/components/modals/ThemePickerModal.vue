<script setup>
import { ref } from 'vue'
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

          <!-- Theme grid -->
          <div class="tp-grid">
            <button
              v-for="theme in themeStore.themes"
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
