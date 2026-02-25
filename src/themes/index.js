/**
 * Theme registry — all available preset themes.
 * Import this wherever you need the full list.
 *
 * group: 'core'     — General-purpose themes (Light, Dark, SaaS, E-Commerce, Agency)
 * group: 'industry' — Vertical-specific themes (Jewellery, Furniture, Handicraft, Trailer)
 */
import light      from './presets/light.js'
import dark       from './presets/dark.js'
import saas       from './presets/saas.js'
import ecommerce  from './presets/ecommerce.js'
import agency     from './presets/agency.js'

// Industry themes
import jewellery  from './presets/jewellery.js'
import furniture  from './presets/furniture.js'
import handicraft from './presets/handicraft.js'
import trailer    from './presets/trailer.js'

/** Ordered list of all theme presets. */
export const THEMES = [
  // Core
  light, dark, saas, ecommerce, agency,
  // Industry
  jewellery, furniture, handicraft, trailer,
]

/** Look up a theme by its id. Returns undefined if not found. */
export function getThemeById(id) {
  return THEMES.find(t => t.id === id)
}
