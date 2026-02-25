<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme.js'
import { GOOGLE_FONTS } from '@/themes/variables.js'

const themeStore = useThemeStore()

// Accordion sections — Identity open by default
const openSections = ref(new Set(['identity']))

function toggleSection(id) {
  if (openSections.value.has(id)) {
    openSections.value.delete(id)
  } else {
    openSections.value.add(id)
  }
}

// ─── Helpers ────────────────────────────────────────────

/** Current branding value for a field. */
function getField(key) {
  return themeStore.brandingSettings[key] ?? ''
}

/** Update a branding field; empty string = "use theme value". */
function setField(key, value) {
  themeStore.updateBranding(key, value)
}

/** The current effective theme value for a CSS var (used as placeholder hint). */
function themeDefault(cssVar) {
  return themeStore.activeTheme?.vars?.[cssVar] ?? ''
}

// ─── Color fields: hex from branding or theme ────────────────

function colorValue(brandKey, cssVar) {
  const v = getField(brandKey)
  if (v && v.startsWith('#')) return v
  const t = themeDefault(cssVar)
  return t && t.startsWith('#') ? t : '#000000'
}

/**
 * When user interacts with a color picker, we store the value.
 * Clicking "×" (clearing) reverts to theme value.
 */
function onColorInput(brandKey, e) {
  setField(brandKey, e.target.value)
}

function clearField(brandKey) {
  setField(brandKey, '')
}

/** True if the branding field has an explicit value (overriding the theme). */
function hasOverride(brandKey) {
  return !!getField(brandKey)
}

// ─── Logo preview URL ────────────────────────────────────────
const logoPreviewSrc = computed(() => {
  const url = getField('logoUrl')
  return url || ''
})

const logoError = ref(false)

function onLogoInput(e) {
  logoError.value = false
  setField('logoUrl', e.target.value)
}

// ─── Font handling ───────────────────────────────────────────

const currentFontValue = computed(() => {
  const brand = getField('fontFamily')
  return brand || themeDefault('--bs-font-sans-serif')
})

const brandFontOverride = computed(() => getField('fontFamily'))

const isCustomFont = computed(() => {
  const v = getField('fontFamily')
  if (!v) return false
  return !GOOGLE_FONTS.some(f => f.value === v)
})

const customFontName = ref('')

function onFontSelect(e) {
  const val = e.target.value
  if (val === '__clear__') { clearField('fontFamily'); return }
  if (val === '__custom__') return
  setField('fontFamily', val)
}

function applyCustomFont() {
  const name = customFontName.value.trim()
  if (!name) return
  setField('fontFamily', `"${name}", sans-serif`)
}

// ─── Color sections ──────────────────────────────────────────
const COLOR_FIELDS = [
  { brandKey: 'primaryColor',  cssVar: '--bs-primary',       label: 'Primary'    },
  { brandKey: 'secondaryColor',cssVar: '--bs-secondary',     label: 'Secondary'  },
  { brandKey: 'bodyBg',        cssVar: '--bs-body-bg',       label: 'Background' },
  { brandKey: 'bodyColor',     cssVar: '--bs-body-color',    label: 'Body Text'  },
  { brandKey: 'headingColor',  cssVar: '--bs-heading-color', label: 'Headings'   },
  { brandKey: 'linkColor',     cssVar: '--bs-link-color',    label: 'Links'      },
  { brandKey: 'success',       cssVar: '--bs-success',       label: 'Success'    },
  { brandKey: 'danger',        cssVar: '--bs-danger',        label: 'Danger'     },
]

const RADIUS_FIELDS = [
  { brandKey: 'borderRadius',    cssVar: '--bs-border-radius',     label: 'Base Radius'  },
  { brandKey: 'borderRadiusLg',  cssVar: '--bs-border-radius-lg',  label: 'Large Radius' },
  { brandKey: 'borderRadiusPill',cssVar: '--bs-border-radius-pill',label: 'Pill Radius'  },
]
</script>

<template>
  <div class="brand-panel">

    <!-- No theme → prompt -->
    <div v-if="!themeStore.activeTheme" class="brand-panel-empty">
      <i class="bi bi-palette2 mb-2"></i>
      <p>Select a theme first,<br>then set your brand overrides.</p>
      <button class="btn btn-primary btn-sm" @click="themeStore.openPicker()">
        Choose a Theme
      </button>
    </div>

    <template v-else>

      <!-- Branding status indicator -->
      <div class="brand-status" :class="{ 'brand-status--active': themeStore.hasBranding }">
        <i :class="themeStore.hasBranding ? 'bi bi-check-circle-fill' : 'bi bi-circle'"></i>
        <span v-if="themeStore.hasBranding">Brand overrides active</span>
        <span v-else>No overrides — theme values in use</span>
        <button
          v-if="themeStore.hasBranding"
          class="brand-clear-all"
          title="Clear all branding overrides"
          @click="themeStore.clearBranding()"
        >
          Clear all
        </button>
      </div>

      <!-- ── Identity ──────────────────────────────────────── -->
      <div class="brand-group">
        <button
          class="brand-group-header"
          :class="{ 'brand-group-header--open': openSections.has('identity') }"
          @click="toggleSection('identity')"
        >
          <i class="bi bi-building"></i>
          Identity
          <i
            class="bi bi-chevron-right tp-chevron"
            :class="{ 'tp-chevron--open': openSections.has('identity') }"
          ></i>
        </button>

        <Transition name="tp-slide">
          <div v-if="openSections.has('identity')" class="brand-group-body">

            <!-- Brand Name -->
            <div class="tp-row--col">
              <label class="tp-label">Brand / Company Name
                <span class="brand-hint">(used as page title in ZIP export)</span>
              </label>
              <input
                class="tp-text-input"
                :value="getField('brandName')"
                placeholder="e.g. Acme Corp"
                @input="setField('brandName', $event.target.value)"
              />
            </div>

            <!-- Logo URL -->
            <div class="tp-row--col">
              <label class="tp-label">Logo URL</label>
              <input
                class="tp-text-input"
                :value="getField('logoUrl')"
                placeholder="https://example.com/logo.png"
                @input="onLogoInput"
              />
              <!-- Preview -->
              <div v-if="logoPreviewSrc && !logoError" class="brand-logo-preview">
                <img
                  :src="logoPreviewSrc"
                  alt="Brand logo preview"
                  @error="logoError = true"
                />
              </div>
              <span v-if="logoError" class="brand-logo-error">
                <i class="bi bi-exclamation-triangle"></i> Could not load image
              </span>
            </div>

          </div>
        </Transition>
      </div>

      <!-- ── Colors ────────────────────────────────────────── -->
      <div class="brand-group">
        <button
          class="brand-group-header"
          :class="{ 'brand-group-header--open': openSections.has('colors') }"
          @click="toggleSection('colors')"
        >
          <i class="bi bi-palette"></i>
          Brand Colors
          <span v-if="COLOR_FIELDS.some(f => hasOverride(f.brandKey))" class="brand-badge">
            {{ COLOR_FIELDS.filter(f => hasOverride(f.brandKey)).length }} overridden
          </span>
          <i
            class="bi bi-chevron-right tp-chevron"
            :class="{ 'tp-chevron--open': openSections.has('colors') }"
          ></i>
        </button>

        <Transition name="tp-slide">
          <div v-if="openSections.has('colors')" class="brand-group-body">
            <div
              v-for="field in COLOR_FIELDS"
              :key="field.brandKey"
              class="tp-row brand-color-row"
            >
              <label class="tp-label">
                {{ field.label }}
                <span v-if="hasOverride(field.brandKey)" class="brand-override-dot" title="Brand override active"></span>
              </label>
              <div class="tp-color-wrap">
                <input
                  type="color"
                  class="tp-color-input"
                  :value="colorValue(field.brandKey, field.cssVar)"
                  @input="onColorInput(field.brandKey, $event)"
                />
                <span class="tp-color-hex">
                  {{ hasOverride(field.brandKey) ? getField(field.brandKey) : themeDefault(field.cssVar) }}
                </span>
                <!-- Clear override button — only shown when override is active -->
                <button
                  v-if="hasOverride(field.brandKey)"
                  class="brand-clear-btn"
                  title="Remove brand override"
                  @click="clearField(field.brandKey)"
                >
                  <i class="bi bi-x"></i>
                </button>
                <span v-else class="brand-from-theme">theme</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- ── Typography ────────────────────────────────────── -->
      <div class="brand-group">
        <button
          class="brand-group-header"
          :class="{ 'brand-group-header--open': openSections.has('typography') }"
          @click="toggleSection('typography')"
        >
          <i class="bi bi-type"></i>
          Brand Font
          <span v-if="hasOverride('fontFamily')" class="brand-badge">overridden</span>
          <i
            class="bi bi-chevron-right tp-chevron"
            :class="{ 'tp-chevron--open': openSections.has('typography') }"
          ></i>
        </button>

        <Transition name="tp-slide">
          <div v-if="openSections.has('typography')" class="brand-group-body">
            <div class="tp-row--col">
              <label class="tp-label">
                Font Family
                <span v-if="hasOverride('fontFamily')" class="brand-override-dot" title="Brand override active"></span>
              </label>
              <select
                class="tp-select"
                :value="brandFontOverride || '__clear__'"
                @change="onFontSelect"
              >
                <option value="__clear__">(Use theme font)</option>
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
              <p class="brand-hint mt-1">
                Theme font: <code>{{ themeDefault('--bs-font-sans-serif')?.split(',')[0] || 'default' }}</code>
              </p>
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
          </div>
        </Transition>
      </div>

      <!-- ── Shape & Radius ────────────────────────────────── -->
      <div class="brand-group">
        <button
          class="brand-group-header"
          :class="{ 'brand-group-header--open': openSections.has('shape') }"
          @click="toggleSection('shape')"
        >
          <i class="bi bi-square-half"></i>
          Brand Shape
          <span v-if="RADIUS_FIELDS.some(f => hasOverride(f.brandKey))" class="brand-badge">overridden</span>
          <i
            class="bi bi-chevron-right tp-chevron"
            :class="{ 'tp-chevron--open': openSections.has('shape') }"
          ></i>
        </button>

        <Transition name="tp-slide">
          <div v-if="openSections.has('shape')" class="brand-group-body">
            <div
              v-for="field in RADIUS_FIELDS"
              :key="field.brandKey"
              class="tp-row"
            >
              <label class="tp-label">
                {{ field.label }}
                <span v-if="hasOverride(field.brandKey)" class="brand-override-dot" title="Brand override active"></span>
              </label>
              <div class="brand-radius-wrap">
                <input
                  class="tp-text-input tp-text-input--sm"
                  :value="getField(field.brandKey) || themeDefault(field.cssVar)"
                  :placeholder="themeDefault(field.cssVar)"
                  @change="setField(field.brandKey, $event.target.value)"
                />
                <button
                  v-if="hasOverride(field.brandKey)"
                  class="brand-clear-btn"
                  title="Remove brand override"
                  @click="clearField(field.brandKey)"
                >
                  <i class="bi bi-x"></i>
                </button>
              </div>
            </div>
            <p class="brand-hint mt-1">Leave empty to use the theme's radius values.</p>
          </div>
        </Transition>
      </div>

    </template>
  </div>
</template>
