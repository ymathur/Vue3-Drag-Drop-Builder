/**
 * Theme store — manages active theme, per-variable overrides, and live CSS injection.
 *
 * Architecture:
 *  • A preset defines base vars + extraCss.
 *  • customizations stores user-tweaked var values on top of the preset.
 *  • applyToCanvas() builds the full CSS and injects it into <style id="theme-styles">.
 *  • Google Fonts are loaded via <link id="theme-fonts">.
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { THEMES, getThemeById } from '@/themes/index.js'
import { extractFontName, hexToRgb, RGB_COMPANIONS } from '@/themes/variables.js'

const STYLE_TAG_ID = 'theme-styles'
const FONTS_TAG_ID = 'theme-fonts'
const STORAGE_KEY  = 'builder-theme'

export const useThemeStore = defineStore('theme', () => {

  // ─── State ──────────────────────────────────────────────────
  /** ID of the currently selected preset (null = no theme applied yet). */
  const activeThemeId   = ref(null)

  /** User overrides: { '--bs-primary': '#ff0000', ... }  */
  const customizations  = ref({})

  /** Whether the launch / onboarding modal is showing. */
  const pickerOpen      = ref(false)

  // ─── Derived ────────────────────────────────────────────────
  /** The full active preset object. */
  const activeTheme = computed(() =>
    activeThemeId.value ? getThemeById(activeThemeId.value) : null
  )

  /** Merged vars: preset defaults + user overrides. */
  const mergedVars = computed(() => {
    if (!activeTheme.value) return {}
    return { ...activeTheme.value.vars, ...customizations.value }
  })

  // ─── Actions ────────────────────────────────────────────────

  /** Open the theme picker modal. */
  function openPicker()  { pickerOpen.value = true  }
  /** Close the theme picker modal. */
  function closePicker() { pickerOpen.value = false }

  /**
   * Select a preset (and optionally wipe customizations).
   * Immediately applies the theme to the canvas.
   */
  function selectTheme(id, { keepCustomizations = false } = {}) {
    const theme = getThemeById(id)
    if (!theme) return
    activeThemeId.value = id
    if (!keepCustomizations) customizations.value = {}
    applyToCanvas()
    persistState()
  }

  /**
   * Update a single CSS variable override.
   * Automatically keeps RGB companion variables in sync.
   */
  function updateVar(key, value) {
    customizations.value = { ...customizations.value, [key]: value }

    // Keep RGB companion in sync (e.g. --bs-primary → --bs-primary-rgb)
    const rgbKey = RGB_COMPANIONS[key]
    if (rgbKey && value.startsWith('#')) {
      const rgb = hexToRgb(value)
      if (rgb) customizations.value = { ...customizations.value, [rgbKey]: rgb }
    }

    applyToCanvas()
    persistState()
  }

  /** Reset all customizations back to the preset defaults and re-apply. */
  function resetToPreset() {
    customizations.value = {}
    applyToCanvas()
    persistState()
  }

  /**
   * Inject theme styles into the document <head>.
   * Creates / updates <style id="theme-styles"> and <link id="theme-fonts">.
   */
  function applyToCanvas() {
    if (!activeTheme.value) return

    // 1. Build :root { … } block from merged vars
    const rootBlock = buildRootBlock(mergedVars.value)

    // 2. Collect the extra CSS from the preset
    const extra = activeTheme.value.extraCss || ''

    // 3. Combine into one style tag
    const css = `/* Theme: ${activeTheme.value.name} — applied by builder */\n${rootBlock}\n${extra}`
    injectStyleTag(STYLE_TAG_ID, css)

    // 4. Inject Google Fonts link
    injectFonts(activeTheme.value.googleFonts ?? [], mergedVars.value)
  }

  /** Remove the injected theme styles (reset to Bootstrap defaults). */
  function removeFromCanvas() {
    const el = document.getElementById(STYLE_TAG_ID)
    if (el) el.remove()
    const fl = document.getElementById(FONTS_TAG_ID)
    if (fl) fl.remove()
  }

  // ─── Persistence ────────────────────────────────────────────

  function persistState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        activeThemeId: activeThemeId.value,
        customizations: customizations.value,
      }))
    } catch (_) { /* storage not available */ }
  }

  function loadPersistedState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const { activeThemeId: id, customizations: cust } = JSON.parse(raw)
      if (id && getThemeById(id)) {
        activeThemeId.value  = id
        customizations.value = cust ?? {}
        applyToCanvas()
      }
    } catch (_) { /* ignore corrupt storage */ }
  }

  // ─── Helpers ────────────────────────────────────────────────

  function buildRootBlock(vars) {
    const lines = Object.entries(vars)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n')
    return `:root {\n${lines}\n}`
  }

  function injectStyleTag(id, css) {
    let el = document.getElementById(id)
    if (!el) {
      el = document.createElement('style')
      el.id = id
      document.head.appendChild(el)
    }
    el.textContent = css
  }

  function injectFonts(googleFontNames, vars) {
    // Collect unique Google Font names: from preset list + any font override in vars
    const names = new Set(googleFontNames)

    const fontVar = vars['--bs-font-sans-serif']
    if (fontVar) {
      const extracted = extractFontName(fontVar)
      if (extracted) names.add(extracted)
    }

    // Remove "System Default" sentinel
    names.delete('System Default')

    if (names.size === 0) {
      const fl = document.getElementById(FONTS_TAG_ID)
      if (fl) fl.remove()
      return
    }

    // Build Google Fonts URL
    const families = [...names]
      .map(n => `family=${encodeURIComponent(n)}:wght@300;400;500;600;700;800`)
      .join('&')
    const href = `https://fonts.googleapis.com/css2?${families}&display=swap`

    let el = document.getElementById(FONTS_TAG_ID)
    if (!el) {
      el = document.createElement('link')
      el.id  = FONTS_TAG_ID
      el.rel = 'stylesheet'
      document.head.appendChild(el)
    }
    el.href = href
  }

  // ─── Init ───────────────────────────────────────────────────
  loadPersistedState()

  return {
    // state
    activeThemeId,
    customizations,
    pickerOpen,
    // computed
    activeTheme,
    mergedVars,
    // actions
    openPicker,
    closePicker,
    selectTheme,
    updateVar,
    resetToPreset,
    applyToCanvas,
    removeFromCanvas,
    // data
    themes: THEMES,
  }
})
