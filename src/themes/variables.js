/**
 * Theme variable schema — drives the ThemePanel editor UI.
 * Each var maps a user-friendly label to a Bootstrap CSS custom property.
 */

export const VARIABLE_GROUPS = [
  {
    id: 'colors',
    label: 'Colors',
    icon: 'bi-palette',
    vars: [
      { key: '--bs-primary',     label: 'Primary',    type: 'color' },
      { key: '--bs-secondary',   label: 'Secondary',  type: 'color' },
      { key: '--bs-body-bg',     label: 'Background', type: 'color' },
      { key: '--bs-body-color',  label: 'Body Text',  type: 'color' },
      { key: '--bs-heading-color', label: 'Headings', type: 'color' },
      { key: '--bs-link-color',  label: 'Links',      type: 'color' },
      { key: '--bs-success',     label: 'Success',    type: 'color' },
      { key: '--bs-danger',      label: 'Danger',     type: 'color' },
    ],
  },
  {
    id: 'typography',
    label: 'Typography',
    icon: 'bi-type',
    vars: [
      { key: '--bs-font-sans-serif', label: 'Font Family', type: 'font' },
      {
        key: '--bs-body-font-size',
        label: 'Base Font Size',
        type: 'select',
        options: ['0.875rem', '0.9375rem', '1rem', '1.0625rem', '1.125rem'],
      },
      {
        key: '--bs-body-line-height',
        label: 'Line Height',
        type: 'select',
        options: ['1.4', '1.5', '1.6', '1.75'],
      },
    ],
  },
  {
    id: 'shape',
    label: 'Shape & Radius',
    icon: 'bi-square-half',
    vars: [
      { key: '--bs-border-radius',    label: 'Base Radius',    type: 'radius' },
      { key: '--bs-border-radius-lg', label: 'Large Radius',   type: 'radius' },
      { key: '--bs-border-radius-pill', label: 'Pill Radius',  type: 'radius', max: 100 },
    ],
  },
]

/** Curated Google Fonts shown in the font dropdown. */
export const GOOGLE_FONTS = [
  { label: 'Inter',           value: '"Inter", sans-serif',           googleName: 'Inter' },
  { label: 'Roboto',          value: '"Roboto", sans-serif',          googleName: 'Roboto' },
  { label: 'Poppins',         value: '"Poppins", sans-serif',         googleName: 'Poppins' },
  { label: 'Lato',            value: '"Lato", sans-serif',            googleName: 'Lato' },
  { label: 'Open Sans',       value: '"Open Sans", sans-serif',       googleName: 'Open Sans' },
  { label: 'Montserrat',      value: '"Montserrat", sans-serif',      googleName: 'Montserrat' },
  { label: 'Nunito',          value: '"Nunito", sans-serif',          googleName: 'Nunito' },
  { label: 'DM Sans',         value: '"DM Sans", sans-serif',         googleName: 'DM Sans' },
  { label: 'Space Grotesk',   value: '"Space Grotesk", sans-serif',   googleName: 'Space Grotesk' },
  { label: 'Raleway',         value: '"Raleway", sans-serif',         googleName: 'Raleway' },
  { label: 'Playfair Display',value: '"Playfair Display", serif',     googleName: 'Playfair Display' },
  { label: 'System Default',  value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', googleName: null },
]

/** Extract the Google Font name from a CSS font-family value. */
export function extractFontName(fontValue) {
  const m = fontValue?.match(/["']([^"']+)["']/)
  return m ? m[1] : null
}

/** Convert a hex color to "r, g, b" string for Bootstrap RGB companions. */
export function hexToRgb(hex) {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return null
  const r = parseInt(clean.slice(0, 2), 16)
  const g = parseInt(clean.slice(2, 4), 16)
  const b = parseInt(clean.slice(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

/** Map of primary CSS var keys to their RGB companion keys. */
export const RGB_COMPANIONS = {
  '--bs-primary':   '--bs-primary-rgb',
  '--bs-secondary': '--bs-secondary-rgb',
  '--bs-success':   '--bs-success-rgb',
  '--bs-info':      '--bs-info-rgb',
  '--bs-warning':   '--bs-warning-rgb',
  '--bs-danger':    '--bs-danger-rgb',
  '--bs-body-bg':   '--bs-body-bg-rgb',
}
