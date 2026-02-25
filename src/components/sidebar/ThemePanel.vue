<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme.js'
import { VARIABLE_GROUPS, GOOGLE_FONTS, extractFontName } from '@/themes/variables.js'

const themeStore = useThemeStore()

// Expanded accordion sections
const openSections = ref(new Set(['colors']))

function toggleSection(id) {
  if (openSections.value.has(id)) {
    openSections.value.delete(id)
  } else {
    openSections.value.add(id)
  }
}

// ─── Var helpers ────────────────────────────────────────────

function getVar(key) {
  return themeStore.mergedVars[key] ?? ''
}

function setVar(key, value) {
  themeStore.updateVar(key, value)
}

// ─── Font handling ──────────────────────────────────────────

const currentFontValue = computed(() => getVar('--bs-font-sans-serif'))

const isCustomFont = computed(() => {
  return !GOOGLE_FONTS.some(f => f.value === currentFontValue.value)
})

const customFontName = ref('')

function onFontSelect(e) {
  const val = e.target.value
  if (val === '__custom__') return // handled by text input
  setVar('--bs-font-sans-serif', val)
}

function applyCustomFont() {
  const name = customFontName.value.trim()
  if (!name) return
  setVar('--bs-font-sans-serif', `"${name}", sans-serif`)
}

// ─── Color: strip hex from CSS var value ────────────────────

function colorValue(key) {
  const v = getVar(key)
  // Return hex directly; if not hex, fall back to white/black
  return v.startsWith('#') ? v : '#000000'
}

function onColorInput(key, e) {
  setVar(key, e.target.value)
}

// ─── Radius: extract numeric value from rem/px ───────────────

function radiusLabel(key) {
  return getVar(key) || '0.5rem'
}

// ─── Reset ──────────────────────────────────────────────────

function onReset() {
  if (confirm('Reset all customisations to the preset defaults?')) {
    themeStore.resetToPreset()
  }
}
</script>

<template>
  <div class="theme-panel">

    <!-- No theme selected yet -->
    <div v-if="!themeStore.activeTheme" class="theme-panel-empty">
      <i class="bi bi-palette2 mb-3"></i>
      <p>No theme selected yet.</p>
      <button class="btn btn-primary btn-sm" @click="themeStore.openPicker()">
        Choose a Theme
      </button>
    </div>

    <!-- Theme panel content -->
    <template v-else>

      <!-- Active theme header -->
      <div class="tp-active-header">
        <div class="tp-active-swatches">
          <div
            v-for="(color, i) in themeStore.activeTheme.thumbnail"
            :key="i"
            class="tp-active-swatch"
            :style="{ background: color }"
          />
        </div>
        <div class="tp-active-info">
          <span class="tp-active-name">{{ themeStore.activeTheme.name }}</span>
          <span class="tp-active-desc">{{ themeStore.activeTheme.description }}</span>
        </div>
        <button
          class="btn btn-outline-secondary btn-xs"
          title="Switch theme"
          @click="themeStore.openPicker()"
        >
          <i class="bi bi-arrow-repeat"></i>
        </button>
      </div>

      <!-- Variable groups -->
      <div class="tp-groups">
        <div
          v-for="group in VARIABLE_GROUPS"
          :key="group.id"
          class="tp-group"
        >
          <!-- Accordion header -->
          <button
            class="tp-group-header"
            :class="{ 'tp-group-header--open': openSections.has(group.id) }"
            @click="toggleSection(group.id)"
          >
            <i :class="`bi ${group.icon}`"></i>
            {{ group.label }}
            <i
              class="bi bi-chevron-right tp-chevron"
              :class="{ 'tp-chevron--open': openSections.has(group.id) }"
            ></i>
          </button>

          <!-- Accordion body -->
          <Transition name="tp-slide">
            <div v-if="openSections.has(group.id)" class="tp-group-body">

              <template v-for="v in group.vars" :key="v.key">

                <!-- Color picker -->
                <div v-if="v.type === 'color'" class="tp-row">
                  <label class="tp-label">{{ v.label }}</label>
                  <div class="tp-color-wrap">
                    <input
                      type="color"
                      class="tp-color-input"
                      :value="colorValue(v.key)"
                      @input="onColorInput(v.key, $event)"
                    />
                    <span class="tp-color-hex">{{ colorValue(v.key) }}</span>
                  </div>
                </div>

                <!-- Font family selector -->
                <div v-else-if="v.type === 'font'" class="tp-row tp-row--col">
                  <label class="tp-label">{{ v.label }}</label>
                  <select
                    class="tp-select"
                    :value="isCustomFont ? '__custom__' : currentFontValue"
                    @change="onFontSelect"
                  >
                    <option
                      v-for="font in GOOGLE_FONTS"
                      :key="font.value"
                      :value="font.value"
                      :style="{ fontFamily: font.value }"
                    >
                      {{ font.label }}
                    </option>
                    <option value="__custom__">Custom font…</option>
                  </select>
                  <!-- Custom font input -->
                  <Transition name="tp-slide">
                    <div v-if="isCustomFont" class="tp-custom-font-row">
                      <input
                        v-model="customFontName"
                        class="tp-text-input"
                        placeholder="e.g. Josefin Sans"
                        @keydown.enter.prevent="applyCustomFont"
                      />
                      <button class="btn btn-xs btn-primary" @click="applyCustomFont">Apply</button>
                    </div>
                  </Transition>
                </div>

                <!-- Select -->
                <div v-else-if="v.type === 'select'" class="tp-row">
                  <label class="tp-label">{{ v.label }}</label>
                  <select
                    class="tp-select tp-select--inline"
                    :value="getVar(v.key)"
                    @change="setVar(v.key, $event.target.value)"
                  >
                    <option v-for="opt in v.options" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>

                <!-- Radius (display + text edit) -->
                <div v-else-if="v.type === 'radius'" class="tp-row">
                  <label class="tp-label">{{ v.label }}</label>
                  <input
                    class="tp-text-input tp-text-input--sm"
                    :value="radiusLabel(v.key)"
                    @change="setVar(v.key, $event.target.value)"
                  />
                </div>

              </template>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Reset button -->
      <div class="tp-footer-actions">
        <button class="btn btn-outline-secondary btn-xs w-100" @click="onReset">
          <i class="bi bi-arrow-counterclockwise me-1"></i>Reset to Preset Defaults
        </button>
      </div>

    </template>
  </div>
</template>
