/**
 * Theme registry — all available preset themes.
 * Import this wherever you need the full list.
 */
import light     from './presets/light.js'
import dark      from './presets/dark.js'
import saas      from './presets/saas.js'
import ecommerce from './presets/ecommerce.js'
import agency    from './presets/agency.js'

/** Ordered list of theme presets. */
export const THEMES = [light, dark, saas, ecommerce, agency]

/** Look up a theme by its id. Returns undefined if not found. */
export function getThemeById(id) {
  return THEMES.find(t => t.id === id)
}
