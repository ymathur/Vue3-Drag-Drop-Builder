/**
 * Theme store — manages active theme, per-variable overrides, branding settings,
 * and live CSS injection.
 *
 * CSS injection priority (low → high):
 *   1. :root { preset vars }
 *   2. :root { user customizations (via ThemePanel) }
 *   3. :root { branding overrides (via BrandingPanel) }   ← highest
 *   4. Dynamic Bootstrap component overrides (buttons, badges, etc.)
 *   5. Preset extraCss (brand-specific decorative styles)
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { THEMES, getThemeById } from '@/themes/index.js'
import { extractFontName, hexToRgb, RGB_COMPANIONS } from '@/themes/variables.js'

const STYLE_TAG_ID = 'theme-styles'
const FONTS_TAG_ID = 'theme-fonts'
const STORAGE_KEY  = 'builder-theme'

// ─── Branding field → CSS variable mapping ───────────────────────────────────
const BRANDING_MAP = {
  primaryColor:    ['--bs-primary'],
  secondaryColor:  ['--bs-secondary'],
  bodyBg:          ['--bs-body-bg'],
  bodyColor:       ['--bs-body-color'],
  headingColor:    ['--bs-heading-color'],
  linkColor:       ['--bs-link-color'],
  success:         ['--bs-success'],
  danger:          ['--bs-danger'],
  fontFamily:      ['--bs-font-sans-serif'],
  borderRadius:    ['--bs-border-radius', '--bs-border-radius-sm'],
  borderRadiusLg:  ['--bs-border-radius-lg'],
  borderRadiusPill:['--bs-border-radius-pill'],
}

const EMPTY_BRANDING = {
  brandName:        '',
  logoUrl:          '',
  primaryColor:     '',
  secondaryColor:   '',
  bodyBg:           '',
  bodyColor:        '',
  headingColor:     '',
  linkColor:        '',
  success:          '',
  danger:           '',
  fontFamily:       '',
  borderRadius:     '',
  borderRadiusLg:   '',
  borderRadiusPill: '',
}

export const useThemeStore = defineStore('theme', () => {

  // ─── State ──────────────────────────────────────────────────
  /** ID of the currently selected preset (null = no theme applied yet). */
  const activeThemeId   = ref(null)

  /** User overrides via ThemePanel: { '--bs-primary': '#ff0000', ... }  */
  const customizations  = ref({})

  /** Client branding overrides — highest priority. Empty string = "use theme value". */
  const brandingSettings = ref({ ...EMPTY_BRANDING })

  /** Whether the launch / onboarding picker modal is showing. */
  const pickerOpen = ref(false)

  // ─── Derived ────────────────────────────────────────────────

  /** The full active preset object. */
  const activeTheme = computed(() =>
    activeThemeId.value ? getThemeById(activeThemeId.value) : null
  )

  /**
   * Merged vars — three-layer priority:
   *   preset.vars  →  customizations  →  branding overrides
   */
  const mergedVars = computed(() => {
    if (!activeTheme.value) return {}

    // Layer 1 + 2: preset base + user customizations
    const base = { ...activeTheme.value.vars, ...customizations.value }

    // Layer 3: branding overrides (only when field is non-empty)
    const b = brandingSettings.value
    for (const [brandKey, cssKeys] of Object.entries(BRANDING_MAP)) {
      const v = b[brandKey]
      if (v) cssKeys.forEach(k => { base[k] = v })
    }

    // Keep RGB companions in sync for branding colors
    if (b.primaryColor) {
      const rgb = hexToRgb(b.primaryColor)
      if (rgb) base['--bs-primary-rgb'] = rgb
    }
    if (b.secondaryColor) {
      const rgb = hexToRgb(b.secondaryColor)
      if (rgb) base['--bs-secondary-rgb'] = rgb
    }

    return base
  })

  /** True if any branding field has a non-empty value. */
  const hasBranding = computed(() =>
    Object.values(brandingSettings.value).some(v => v !== '')
  )

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
   * Update a single branding field.
   * When value is non-empty it overrides the corresponding theme CSS variable(s).
   * When value is empty-string the theme value takes over again.
   */
  function updateBranding(key, value) {
    brandingSettings.value = { ...brandingSettings.value, [key]: value }
    applyToCanvas()
    persistState()
  }

  /** Clear ALL branding fields — theme values take full effect again. */
  function clearBranding() {
    brandingSettings.value = { ...EMPTY_BRANDING }
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
        activeThemeId:    activeThemeId.value,
        customizations:   customizations.value,
        brandingSettings: brandingSettings.value,
      }))
    } catch (_) { /* storage not available */ }
  }

  function loadPersistedState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      const { activeThemeId: id, customizations: cust, brandingSettings: branding } = parsed
      if (id && getThemeById(id)) {
        activeThemeId.value    = id
        customizations.value   = cust ?? {}
        brandingSettings.value = { ...EMPTY_BRANDING, ...(branding ?? {}) }
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

    return `/* ── Dynamic Bootstrap component overrides ── */
body { background-color: ${bodyBg} !important; color: ${bodyColor} !important; font-family: ${font}; }
h1,h2,h3,h4,h5,h6 { color: ${heading}; font-family: ${font}; }
a { color: ${link}; }
a:hover { color: ${linkHover}; }

/* Buttons — primary */
.btn-primary {
  --bs-btn-bg: ${primary};
  --bs-btn-border-color: ${primary};
  --bs-btn-hover-bg: ${primaryDark};
  --bs-btn-hover-border-color: ${primaryDark};
  --bs-btn-active-bg: ${primaryDark};
  --bs-btn-active-border-color: ${primaryDark};
  --bs-btn-color: #fff;
  --bs-btn-hover-color: #fff;
  border-radius: ${radius};
}
.btn-outline-primary {
  --bs-btn-color: ${primary};
  --bs-btn-border-color: ${primary};
  --bs-btn-hover-bg: ${primary};
  --bs-btn-hover-border-color: ${primary};
  --bs-btn-active-bg: ${primary};
  --bs-btn-active-border-color: ${primary};
  border-radius: ${radius};
}

/* Buttons — secondary */
.btn-secondary {
  --bs-btn-bg: ${secondary};
  --bs-btn-border-color: ${secondary};
  --bs-btn-hover-bg: ${secondaryDark};
  --bs-btn-hover-border-color: ${secondaryDark};
  border-radius: ${radius};
}
.btn-outline-secondary {
  --bs-btn-color: ${secondary};
  --bs-btn-border-color: ${secondary};
  --bs-btn-hover-bg: ${secondary};
  --bs-btn-hover-border-color: ${secondary};
  border-radius: ${radius};
}

/* Buttons — semantic */
.btn-success { --bs-btn-bg: ${success}; --bs-btn-border-color: ${success}; --bs-btn-hover-bg: ${darken(success)}; border-radius: ${radius}; }
.btn-danger  { --bs-btn-bg: ${danger};  --bs-btn-border-color: ${danger};  --bs-btn-hover-bg: ${darken(danger)};  border-radius: ${radius}; }
.btn-light, .btn-outline-light { border-radius: ${radius}; }

/* Badges */
.badge.bg-primary   { background-color: ${primary}   !important; }
.badge.bg-secondary { background-color: ${secondary} !important; }
.badge.bg-success   { background-color: ${success}   !important; }
.badge.bg-danger    { background-color: ${danger}     !important; }

/* Nav + links */
.nav-link { color: ${link}; }
.nav-link:hover { color: ${linkHover}; }
.navbar-light .navbar-nav .nav-link { color: ${bodyColor}; }
.navbar-light .navbar-nav .nav-link:hover { color: ${primary}; }
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .show > .nav-link { color: ${primary}; }

/* Form controls */
.form-control:focus, .form-select:focus { border-color: ${primary}; box-shadow: 0 0 0 0.25rem color-mix(in srgb, ${primary} 25%, transparent); }
.form-check-input:checked { background-color: ${primary}; border-color: ${primary}; }

/* Progress & misc */
.progress-bar { background-color: ${primary}; }
.bg-primary   { background-color: ${primary}   !important; }
.bg-secondary { background-color: ${secondary} !important; }
.text-primary { color: ${primary}   !important; }
.text-secondary { color: ${secondary} !important; }
.border-primary { border-color: ${primary} !important; }

/* Card & layout radius */
.card, .modal-content, .dropdown-menu { border-radius: ${radiusLg}; }
section { background-color: ${bodyBg}; }
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

    // Include font from vars (ThemePanel or BrandingPanel override)
    const fontVar = vars['--bs-font-sans-serif']
    if (fontVar) {
      const extracted = extractFontName(fontVar)
      if (extracted) names.add(extracted)
    }

    // Include branding font if set
    const brandFont = brandingSettings.value.fontFamily
    if (brandFont) {
      const extracted = extractFontName(brandFont)
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
    brandingSettings,
    pickerOpen,
    // computed
    activeTheme,
    mergedVars,
    hasBranding,
    // actions
    openPicker,
    closePicker,
    selectTheme,
    updateVar,
    resetToPreset,
    updateBranding,
    clearBranding,
    applyToCanvas,
    removeFromCanvas,
    // data
    themes: THEMES,
  }
})
