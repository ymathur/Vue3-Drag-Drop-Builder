/**
 * Theme store — manages active theme, per-variable overrides, and live CSS injection.
 *
 * CSS injection priority (low → high):
 *   1. :root { preset vars }
 *   2. :root { user customizations (via ThemePanel) }
 *   3. Dynamic Bootstrap component overrides (buttons, badges, etc.)
 *   4. Preset extraCss (brand-specific decorative styles)
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

  /** User overrides via ThemePanel: { '--bs-primary': '#ff0000', ... }  */
  const customizations  = ref({})

  /** Whether the launch / onboarding picker modal is showing. */
  const pickerOpen = ref(false)

  // ─── Derived ────────────────────────────────────────────────

  /** The full active preset object. */
  const activeTheme = computed(() =>
    activeThemeId.value ? getThemeById(activeThemeId.value) : null
  )

  /**
   * Merged vars — two-layer priority:
   *   preset.vars  →  customizations (ThemePanel overrides)
   */
  const mergedVars = computed(() => {
    if (!activeTheme.value) return {}
    return { ...activeTheme.value.vars, ...customizations.value }
  })

  // ─── Actions ────────────────────────────────────────────────

  /** Open / close the theme picker modal. */
  function openPicker()  { pickerOpen.value = true  }
  function closePicker() { pickerOpen.value = false }

  /** Select a preset and immediately apply it. Wipes user customizations (not branding). */
  function selectTheme(id, { keepCustomizations = false } = {}) {
    const theme = getThemeById(id)
    if (!theme) return
    activeThemeId.value = id
    if (!keepCustomizations) customizations.value = {}
    applyToCanvas()
    persistState()
  }

  /**
   * Update a single CSS variable override (ThemePanel).
   * Automatically keeps RGB companion variables in sync.
   */
  function updateVar(key, value) {
    customizations.value = { ...customizations.value, [key]: value }
    const rgbKey = RGB_COMPANIONS[key]
    if (rgbKey && value.startsWith('#')) {
      const rgb = hexToRgb(value)
      if (rgb) customizations.value = { ...customizations.value, [rgbKey]: rgb }
    }
    applyToCanvas()
    persistState()
  }

  /** Reset ThemePanel customizations back to preset defaults. */
  function resetToPreset() {
    customizations.value = {}
    applyToCanvas()
    persistState()
  }

  /**
   * Inject theme + component + branding styles into document <head>.
   * Creates / updates <style id="theme-styles"> and <link id="theme-fonts">.
   */
  function applyToCanvas() {
    if (!activeTheme.value) return

    const vars = mergedVars.value

    const css = [
      `/* Theme: ${activeTheme.value.name} — applied by builder */`,
      buildRootBlock(vars),         // 1. CSS custom properties
      buildComponentCss(vars),      // 2. Dynamic Bootstrap component overrides
      activeTheme.value.extraCss || '', // 3. Preset decorative extras
    ].join('\n')

    injectStyleTag(STYLE_TAG_ID, css)
    injectFonts(activeTheme.value.googleFonts ?? [], vars)
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
        activeThemeId:  activeThemeId.value,
        customizations: customizations.value,
      }))
    } catch (_) { /* storage not available */ }
  }

  function loadPersistedState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      const { activeThemeId: id, customizations: cust } = parsed
      if (id && getThemeById(id)) {
        activeThemeId.value  = id
        customizations.value = cust ?? {}
        applyToCanvas()
      }
    } catch (_) { /* ignore corrupt storage */ }
  }

  // ─── CSS Builders ────────────────────────────────────────────

  function buildRootBlock(vars) {
    const lines = Object.entries(vars)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n')
    return `:root {\n${lines}\n}`
  }

  /**
   * Generate Bootstrap component-level CSS variable overrides.
   *
   * Bootstrap 5.3 defines component-scoped vars (e.g. `.btn-primary { --bs-btn-bg: ... }`)
   * that SHADOW the :root vars, so changing :root alone doesn't update components.
   * This block explicitly overrides those component vars with our current values.
   */
  function buildComponentCss(vars) {
    const primary   = vars['--bs-primary']          || '#0d6efd'
    const secondary = vars['--bs-secondary']        || '#6c757d'
    const bodyBg    = vars['--bs-body-bg']          || '#ffffff'
    const bodyColor = vars['--bs-body-color']       || '#212529'
    const font      = vars['--bs-font-sans-serif']  || 'sans-serif'
    const radius    = vars['--bs-border-radius']    || '0.375rem'
    const radiusLg  = vars['--bs-border-radius-lg'] || '0.5rem'
    const success   = vars['--bs-success']          || '#198754'
    const danger    = vars['--bs-danger']           || '#dc3545'
    const heading   = vars['--bs-heading-color']    || bodyColor
    const link      = vars['--bs-link-color']       || primary
    const linkHover = vars['--bs-link-hover-color'] || darken(primary)

    const primaryDark   = darken(primary)
    const secondaryDark = darken(secondary)
    // Theme-aware dark/light surfaces — each preset declares --bs-dark / --bs-light
    // so .bg-dark and .bg-light follow the theme palette rather than Bootstrap defaults.
    const darkSurface  = vars['--bs-dark']  || '#212529'
    const lightSurface = vars['--bs-light'] || '#f8f9fa'
    const darkText     = vars['--bs-dark-text']  || '#ffffff'
    const lightText    = vars['--bs-light-text'] || bodyColor

    return `/* ── Dynamic Bootstrap component overrides ── */

/* ── Base typography & layout ── */
body { background-color: ${bodyBg} !important; color: ${bodyColor} !important; font-family: ${font}; }
body * { font-family: inherit; }
h1,h2,h3,h4,h5,h6 { color: ${heading}; }
p, span, li, label, td, th, caption, figcaption { font-family: ${font}; }
a { color: ${link}; }
a:hover { color: ${linkHover}; }
section:not([class*="bg-"]) { background-color: ${bodyBg} !important; }

/* ── Theme-aware surface utilities ── */
/* These override Bootstrap's fixed .bg-dark/#f8f9fa so each theme
   can define what "dark" and "light" mean for its own palette.    */
.bg-dark  { background-color: ${darkSurface}  !important; color: ${darkText}  !important; }
.bg-light { background-color: ${lightSurface} !important; color: ${lightText} !important; }
.bg-white { background-color: ${bodyBg}       !important; color: ${bodyColor} !important; }
.navbar-dark, nav.bg-dark    { background-color: ${darkSurface} !important; }
.navbar-light, nav.bg-light  { background-color: ${lightSurface} !important; }
.text-dark    { color: ${bodyColor} !important; }
.text-muted   { color: color-mix(in srgb, ${bodyColor} 55%, transparent) !important; }
.text-white   { color: ${darkText}  !important; }
.text-white-50 { color: color-mix(in srgb, ${heading} 65%, transparent) !important; }
.text-light   { color: color-mix(in srgb, ${bodyColor} 80%, transparent) !important; }

/* ── Context-aware text overrides — higher specificity (2 classes) beats Bootstrap ── */
/* Inside .bg-dark — every text utility snaps to dark-surface text colour */
.bg-dark h1,.bg-dark h2,.bg-dark h3,.bg-dark h4,.bg-dark h5,.bg-dark h6 { color: ${darkText} !important; }
.bg-dark p,.bg-dark li,.bg-dark span:not(.badge),.bg-dark label { color: inherit; }
.bg-dark .text-white,.bg-dark .text-light   { color: ${darkText} !important; }
.bg-dark .text-white-50                     { color: color-mix(in srgb, ${darkText} 60%, transparent) !important; }
.bg-dark .text-muted,.bg-dark .text-secondary { color: color-mix(in srgb, ${darkText} 58%, transparent) !important; }
.bg-dark .text-dark,.bg-dark .text-body     { color: ${darkText} !important; }
.bg-dark .nav-link                          { color: color-mix(in srgb, ${darkText} 75%, transparent); }
.bg-dark .nav-link:hover                    { color: ${darkText}; }
/* Inside .bg-light — text is always readable on the light surface */
.bg-light h1,.bg-light h2,.bg-light h3,.bg-light h4,.bg-light h5,.bg-light h6 { color: ${heading} !important; }
.bg-light .text-white,.bg-light .text-light { color: ${lightText} !important; }
.bg-light .text-white-50                    { color: color-mix(in srgb, ${bodyColor} 65%, transparent) !important; }
.bg-light .text-muted                       { color: color-mix(in srgb, ${bodyColor} 55%, transparent) !important; }
.bg-light .text-dark,.bg-light .text-body   { color: ${lightText} !important; }
/* Inside .bg-white — same as bg-light */
.bg-white h1,.bg-white h2,.bg-white h3,.bg-white h4,.bg-white h5,.bg-white h6 { color: ${heading} !important; }
.bg-white .text-white,.bg-white .text-light { color: ${bodyColor} !important; }
.bg-white .text-white-50                    { color: color-mix(in srgb, ${bodyColor} 65%, transparent) !important; }
.bg-white .text-muted                       { color: color-mix(in srgb, ${bodyColor} 55%, transparent) !important; }
/* Sections with no explicit bg-* class get bodyBg — text-white must still be readable */
section:not([class*="bg-"]) .text-white     { color: ${heading} !important; }
section:not([class*="bg-"]) .text-white-50  { color: color-mix(in srgb, ${bodyColor} 65%, transparent) !important; }
section:not([class*="bg-"]) .text-light     { color: color-mix(in srgb, ${bodyColor} 80%, transparent) !important; }
section:not([class*="bg-"]) .text-dark      { color: ${bodyColor} !important; }

/* ── Form controls — adapt to dark surfaces ── */
.bg-dark .form-control,.bg-dark .form-select {
  background-color: ${lightSurface} !important;
  border-color: color-mix(in srgb, ${darkText} 20%, transparent) !important;
  color: ${lightText} !important;
}

/* ── Buttons — primary ── */
.btn-primary {
  --bs-btn-bg: ${primary};
  --bs-btn-border-color: ${primary};
  --bs-btn-hover-bg: ${primaryDark};
  --bs-btn-hover-border-color: ${primaryDark};
  --bs-btn-active-bg: ${primaryDark};
  --bs-btn-active-border-color: ${primaryDark};
  --bs-btn-color: #fff;
  --bs-btn-hover-color: #fff;
  background-color: ${primary} !important;
  border-color: ${primary} !important;
  color: #fff !important;
  border-radius: ${radius};
}
.btn-primary:hover, .btn-primary:active, .btn-primary.active {
  background-color: ${primaryDark} !important;
  border-color: ${primaryDark} !important;
}
.btn-outline-primary {
  --bs-btn-color: ${primary};
  --bs-btn-border-color: ${primary};
  --bs-btn-hover-bg: ${primary};
  --bs-btn-hover-border-color: ${primary};
  --bs-btn-active-bg: ${primary};
  --bs-btn-active-border-color: ${primary};
  color: ${primary} !important;
  border-color: ${primary} !important;
  border-radius: ${radius};
}
.btn-outline-primary:hover, .btn-outline-primary:active {
  background-color: ${primary} !important;
  color: #fff !important;
}

/* ── Buttons — secondary ── */
.btn-secondary {
  --bs-btn-bg: ${secondary};
  --bs-btn-border-color: ${secondary};
  --bs-btn-hover-bg: ${secondaryDark};
  --bs-btn-hover-border-color: ${secondaryDark};
  background-color: ${secondary} !important;
  border-color: ${secondary} !important;
  border-radius: ${radius};
}
.btn-secondary:hover, .btn-secondary:active {
  background-color: ${secondaryDark} !important;
  border-color: ${secondaryDark} !important;
}
.btn-outline-secondary {
  --bs-btn-color: ${secondary};
  --bs-btn-border-color: ${secondary};
  --bs-btn-hover-bg: ${secondary};
  --bs-btn-hover-border-color: ${secondary};
  color: ${secondary} !important;
  border-color: ${secondary} !important;
  border-radius: ${radius};
}
.btn-outline-secondary:hover, .btn-outline-secondary:active {
  background-color: ${secondary} !important;
  color: #fff !important;
}

/* ── Buttons — semantic ── */
.btn-success { --bs-btn-bg: ${success}; --bs-btn-border-color: ${success}; background-color: ${success} !important; border-color: ${success} !important; border-radius: ${radius}; }
.btn-success:hover { background-color: ${darken(success)} !important; }
.btn-danger  { --bs-btn-bg: ${danger};  --bs-btn-border-color: ${danger};  background-color: ${danger}  !important; border-color: ${danger}  !important; border-radius: ${radius}; }
.btn-danger:hover  { background-color: ${darken(danger)}  !important; }
.btn-light, .btn-outline-light { border-radius: ${radius}; }
.btn { border-radius: ${radius}; font-family: ${font}; }

/* ── Badges ── */
.badge.bg-primary   { background-color: ${primary}   !important; }
.badge.bg-secondary { background-color: ${secondary} !important; }
.badge.bg-success   { background-color: ${success}   !important; }
.badge.bg-danger    { background-color: ${danger}     !important; }

/* ── Background utilities ── */
.bg-primary   { background-color: ${primary}   !important; }
.bg-secondary { background-color: ${secondary} !important; }
.bg-success   { background-color: ${success}   !important; }
.bg-danger    { background-color: ${danger}     !important; }

/* ── Text color utilities ── */
.text-primary   { color: ${primary}   !important; }
.text-secondary { color: ${secondary} !important; }
.text-success   { color: ${success}   !important; }
.text-danger    { color: ${danger}    !important; }
.text-body      { color: ${bodyColor} !important; }

/* ── Border utilities ── */
.border-primary   { border-color: ${primary}   !important; }
.border-secondary { border-color: ${secondary} !important; }

/* ── Nav + links ── */
.nav-link { color: ${link}; }
.nav-link:hover { color: ${linkHover}; }
.navbar-light .navbar-nav .nav-link { color: ${bodyColor}; }
.navbar-light .navbar-nav .nav-link:hover { color: ${primary}; }
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .show > .nav-link { color: ${primary}; }
.navbar-dark .navbar-nav .nav-link:hover { color: ${primary}; }
.navbar-dark .navbar-nav .nav-link.active { color: ${primary}; }

/* ── Form controls ── */
.form-control:focus, .form-select:focus {
  border-color: ${primary};
  box-shadow: 0 0 0 0.25rem color-mix(in srgb, ${primary} 25%, transparent);
}
.form-check-input:checked { background-color: ${primary}; border-color: ${primary}; }
input[type="range"]::-webkit-slider-thumb { background-color: ${primary}; }

/* ── Progress ── */
.progress-bar { background-color: ${primary}; }
.progress-bar.bg-primary { background-color: ${primary} !important; }

/* ── Cards & layout ── */
.card, .modal-content, .dropdown-menu { border-radius: ${radiusLg}; }

/* ── Global img fallback — shows themed colour when an image fails to load ── */
img { background-color: var(--bs-body-bg); }
img[src=""] { min-height: 120px; display: block; }

/* ── Ensure :root CSS vars are propagated for inline-style var() usage ── */
:root {
  --bs-dark:       ${darkSurface};
  --bs-light:      ${lightSurface};
  --bs-dark-text:  ${darkText};
  --bs-light-text: ${lightText};
}
`
  }

  /**
   * Return a hex color darkened by ~15% (used for hover states).
   * Falls back gracefully to the original if the input isn't a valid hex.
   */
  function darken(hex) {
    if (!hex || !hex.startsWith('#')) return hex
    const clean = hex.replace('#', '')
    if (clean.length !== 6) return hex
    const factor = 0.82  // darken by ~18%
    const r = Math.round(parseInt(clean.slice(0,2),16) * factor)
    const g = Math.round(parseInt(clean.slice(2,4),16) * factor)
    const b = Math.round(parseInt(clean.slice(4,6),16) * factor)
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
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
    const names = new Set(googleFontNames)

    // Include font from vars (ThemePanel override)
    const fontVar = vars['--bs-font-sans-serif']
    if (fontVar) {
      const extracted = extractFontName(fontVar)
      if (extracted) names.add(extracted)
    }

    // Remove system font sentinels
    names.delete('System Default')
    names.delete('-apple-system')

    if (names.size === 0) {
      const fl = document.getElementById(FONTS_TAG_ID)
      if (fl) fl.remove()
      return
    }

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
