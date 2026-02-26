/**
 * transform-block-colors-2.cjs
 *
 * Phase 2 pass: converts rgba() palette values, remaining hardcoded hex,
 * 8-digit hex (alpha), and hardcoded font-family references to CSS vars.
 *
 * Run with:  node scripts/transform-block-colors-2.cjs
 */

const fs   = require('fs')
const path = require('path')

// ──────────────────────────────────────────────────────────────────────────────
// Shared font replacements (applied to ALL block files)
// ──────────────────────────────────────────────────────────────────────────────
const FONT_MAP = [
  // jewellery - Jost
  ["font-family:'Jost',sans-serif",           "font-family:var(--bs-font-sans-serif)"],
  ["font-family:'Jost', sans-serif",           "font-family:var(--bs-font-sans-serif)"],
  ['font-family:"Jost",sans-serif',            "font-family:var(--bs-font-sans-serif)"],
  ['font-family:"Jost", sans-serif',           "font-family:var(--bs-font-sans-serif)"],
  // furniture - Cormorant Garamond
  ["font-family:'Cormorant Garamond',serif",   "font-family:var(--bs-font-sans-serif)"],
  ["font-family:'Cormorant Garamond', serif",  "font-family:var(--bs-font-sans-serif)"],
  ['font-family:"Cormorant Garamond",serif',   "font-family:var(--bs-font-sans-serif)"],
  ['font-family:"Cormorant Garamond", serif',  "font-family:var(--bs-font-sans-serif)"],
  // handicraft - Poppins
  ["font-family:'Poppins',sans-serif",         "font-family:var(--bs-font-sans-serif)"],
  ["font-family:'Poppins', sans-serif",        "font-family:var(--bs-font-sans-serif)"],
  // trailer - Roboto/Oswald
  ["font-family:'Oswald',sans-serif",          "font-family:var(--bs-font-sans-serif)"],
  ["font-family:'Oswald', sans-serif",         "font-family:var(--bs-font-sans-serif)"],
  ["font-family:'Roboto',sans-serif",          "font-family:var(--bs-font-sans-serif)"],
  ["font-family:'Roboto', sans-serif",         "font-family:var(--bs-font-sans-serif)"],
]

// ──────────────────────────────────────────────────────────────────────────────
// Per-theme literal string replacements (exact match, case-sensitive)
// ──────────────────────────────────────────────────────────────────────────────
const THEME_LITERAL_MAPS = {

  'jewellery.js': [
    // ── Gold rgba() → color-mix with primary ──────────────────────────────────
    ['rgba(201,169,110,0.05)', 'color-mix(in srgb, var(--bs-primary)  5%, transparent)'],
    ['rgba(201,169,110,0.08)', 'color-mix(in srgb, var(--bs-primary)  8%, transparent)'],
    ['rgba(201,169,110,0.1)',  'color-mix(in srgb, var(--bs-primary) 10%, transparent)'],
    ['rgba(201,169,110,0.12)', 'color-mix(in srgb, var(--bs-primary) 12%, transparent)'],
    ['rgba(201,169,110,0.15)', 'color-mix(in srgb, var(--bs-primary) 15%, transparent)'],
    ['rgba(201,169,110,0.18)', 'color-mix(in srgb, var(--bs-primary) 18%, transparent)'],
    ['rgba(201,169,110,0.2)',  'color-mix(in srgb, var(--bs-primary) 20%, transparent)'],
    ['rgba(201,169,110,0.3)',  'color-mix(in srgb, var(--bs-primary) 30%, transparent)'],
    ['rgba(201,169,110,0.4)',  'color-mix(in srgb, var(--bs-primary) 40%, transparent)'],
    ['rgba(201,169,110,0.5)',  'color-mix(in srgb, var(--bs-primary) 50%, transparent)'],
    ['rgba(201,169,110,0.7)',  'color-mix(in srgb, var(--bs-primary) 70%, transparent)'],
    // ── White rgba() on dark surfaces → dark-text based ──────────────────────
    ['rgba(255,255,255,0.05)', 'color-mix(in srgb, var(--bs-dark-text)  5%, transparent)'],
    ['rgba(255,255,255,0.08)', 'color-mix(in srgb, var(--bs-dark-text)  8%, transparent)'],
    ['rgba(255,255,255,0.1)',  'color-mix(in srgb, var(--bs-dark-text) 10%, transparent)'],
    ['rgba(255,255,255,0.12)', 'color-mix(in srgb, var(--bs-dark-text) 12%, transparent)'],
    ['rgba(255,255,255,0.15)', 'color-mix(in srgb, var(--bs-dark-text) 15%, transparent)'],
    ['rgba(255,255,255,0.2)',  'color-mix(in srgb, var(--bs-dark-text) 20%, transparent)'],
    ['rgba(255,255,255,0.25)', 'color-mix(in srgb, var(--bs-dark-text) 25%, transparent)'],
    ['rgba(255,255,255,0.3)',  'color-mix(in srgb, var(--bs-dark-text) 30%, transparent)'],
    ['rgba(255,255,255,0.35)', 'color-mix(in srgb, var(--bs-dark-text) 35%, transparent)'],
    ['rgba(255,255,255,0.4)',  'color-mix(in srgb, var(--bs-dark-text) 40%, transparent)'],
    ['rgba(255,255,255,0.45)', 'color-mix(in srgb, var(--bs-dark-text) 45%, transparent)'],
    ['rgba(255,255,255,0.5)',  'color-mix(in srgb, var(--bs-dark-text) 50%, transparent)'],
    ['rgba(255,255,255,0.55)', 'color-mix(in srgb, var(--bs-dark-text) 55%, transparent)'],
    ['rgba(255,255,255,0.6)',  'color-mix(in srgb, var(--bs-dark-text) 60%, transparent)'],
    ['rgba(255,255,255,0.65)', 'color-mix(in srgb, var(--bs-dark-text) 65%, transparent)'],
    ['rgba(255,255,255,0.7)',  'color-mix(in srgb, var(--bs-dark-text) 70%, transparent)'],
    // ── Very dark overlay rgba() ──────────────────────────────────────────────
    ['rgba(10,10,10,0.62)',  'color-mix(in srgb, var(--bs-dark) 62%, transparent)'],
    ['rgba(10,10,10,0.7)',   'color-mix(in srgb, var(--bs-dark) 70%, transparent)'],
    ['rgba(10,10,10,0.8)',   'color-mix(in srgb, var(--bs-dark) 80%, transparent)'],
    // ── Remaining solid hex (missed in Phase 1) ───────────────────────────────
    ['#0f0d0b',  'var(--bs-dark)'],       // dark section backgrounds
    ['#151515',  'var(--bs-light)'],      // form inputs in dark theme (uses dark's light surface)
    ['#080808',  'var(--bs-dark)'],       // footer / extra-dark bg
  ],

  'furniture.js': [
    // ── Furniture-dark overlay rgba() ─────────────────────────────────────────
    ['rgba(61,43,31,0.52)',   'color-mix(in srgb, var(--bs-dark) 52%, transparent)'],
    ['rgba(61,43,31,0.6)',    'color-mix(in srgb, var(--bs-dark) 60%, transparent)'],
    ['rgba(61,43,31,0.7)',    'color-mix(in srgb, var(--bs-dark) 70%, transparent)'],
    ['rgba(61,43,31,0.8)',    'color-mix(in srgb, var(--bs-dark) 80%, transparent)'],
    // ── Primary/terracotta rgba() ─────────────────────────────────────────────
    ['rgba(194,122,86,0.1)',  'color-mix(in srgb, var(--bs-primary) 10%, transparent)'],
    ['rgba(194,122,86,0.2)',  'color-mix(in srgb, var(--bs-primary) 20%, transparent)'],
    ['rgba(194,122,86,0.3)',  'color-mix(in srgb, var(--bs-primary) 30%, transparent)'],
    // ── Body-bg (cream) with opacity ──────────────────────────────────────────
    ['rgba(254,246,236,0.75)', 'color-mix(in srgb, var(--bs-dark-text) 75%, transparent)'],
    ['rgba(254,246,236,0.6)',  'color-mix(in srgb, var(--bs-dark-text) 60%, transparent)'],
    ['rgba(254,246,236,0.5)',  'color-mix(in srgb, var(--bs-dark-text) 50%, transparent)'],
    // ── Remaining hardcoded hex (missed in Phase 1) ───────────────────────────
    ['#f5e6d8',  'var(--bs-light)'],      // slightly different beige variant
    ['#f5e6d0',  'var(--bs-light)'],      // another beige variant
    ['#4e3728',  'var(--bs-dark)'],       // dark walnut card bg (testimonials)
    ['#5a3e30',  'var(--bs-body-color)'], // body text on light bg
    ['#7a5c47',  'var(--bs-secondary)'],  // muted secondary brown text
    ['#a07860',  'var(--bs-secondary)'],  // lighter secondary/muted
    ['#d4b9a4',  'var(--bs-dark-text)'], // light tan footer text on dark bg
  ],

  'handicraft.js': [
    // ── Overlay rgba() ────────────────────────────────────────────────────────
    ['rgba(45,47,107,0.6)',   'color-mix(in srgb, var(--bs-dark) 60%, transparent)'],
    ['rgba(45,47,107,0.7)',   'color-mix(in srgb, var(--bs-dark) 70%, transparent)'],
    ['rgba(45,47,107,0.8)',   'color-mix(in srgb, var(--bs-dark) 80%, transparent)'],
    ['rgba(45,47,107,0.52)',  'color-mix(in srgb, var(--bs-dark) 52%, transparent)'],
    // ── Primary saffron rgba() ────────────────────────────────────────────────
    ['rgba(240,165,0,0.1)',   'color-mix(in srgb, var(--bs-primary) 10%, transparent)'],
    ['rgba(240,165,0,0.15)',  'color-mix(in srgb, var(--bs-primary) 15%, transparent)'],
    ['rgba(240,165,0,0.2)',   'color-mix(in srgb, var(--bs-primary) 20%, transparent)'],
    ['rgba(240,165,0,0.3)',   'color-mix(in srgb, var(--bs-primary) 30%, transparent)'],
    // ── White rgba on dark sections ───────────────────────────────────────────
    ['rgba(255,255,255,0.4)',  'color-mix(in srgb, var(--bs-dark-text) 40%, transparent)'],
    ['rgba(255,255,255,0.5)',  'color-mix(in srgb, var(--bs-dark-text) 50%, transparent)'],
    ['rgba(255,255,255,0.6)',  'color-mix(in srgb, var(--bs-dark-text) 60%, transparent)'],
    ['rgba(255,255,255,0.7)',  'color-mix(in srgb, var(--bs-dark-text) 70%, transparent)'],
    // ── Additional hex variants ───────────────────────────────────────────────
    ['#1a1c45',  'var(--bs-dark)'],
    ['#1e2050',  'var(--bs-dark)'],
  ],

  'trailer.js': [
    // ── Dark overlay rgba() ───────────────────────────────────────────────────
    ['rgba(20,30,20,0.5)',    'color-mix(in srgb, var(--bs-dark) 50%, transparent)'],
    ['rgba(20,30,20,0.6)',    'color-mix(in srgb, var(--bs-dark) 60%, transparent)'],
    ['rgba(20,30,20,0.72)',   'color-mix(in srgb, var(--bs-dark) 72%, transparent)'],
    ['rgba(20,30,20,0.8)',    'color-mix(in srgb, var(--bs-dark) 80%, transparent)'],
    ['rgba(20,30,20,0.82)',   'color-mix(in srgb, var(--bs-dark) 82%, transparent)'],
    ['rgba(20,30,20,0.9)',    'color-mix(in srgb, var(--bs-dark) 90%, transparent)'],
    // ── 8-digit hex: primary orange with alpha ────────────────────────────────
    //    0x10 = 6%,  0x20 = 12%,  0x30 = 19%,  0x40 = 25%
    ['#e8630a10',  'color-mix(in srgb, var(--bs-primary)  6%, transparent)'],
    ['#e8630a20',  'color-mix(in srgb, var(--bs-primary) 12%, transparent)'],
    ['#e8630a30',  'color-mix(in srgb, var(--bs-primary) 19%, transparent)'],
    ['#e8630a40',  'color-mix(in srgb, var(--bs-primary) 25%, transparent)'],
    // ── 8-digit hex: secondary green with alpha ───────────────────────────────
    //    0x20 = 12%,  0x30 = 19%,  0x50 = 31%,  0x60 = 38%
    ['#4a8a4a10',  'color-mix(in srgb, var(--bs-secondary)  6%, transparent)'],
    ['#4a8a4a20',  'color-mix(in srgb, var(--bs-secondary) 12%, transparent)'],
    ['#4a8a4a30',  'color-mix(in srgb, var(--bs-secondary) 19%, transparent)'],
    ['#4a8a4a50',  'color-mix(in srgb, var(--bs-secondary) 31%, transparent)'],
    ['#4a8a4a60',  'color-mix(in srgb, var(--bs-secondary) 38%, transparent)'],
    // ── 8-digit hex: body-bg dark green with alpha (overlays) ────────────────
    ['#141e14cc',  'color-mix(in srgb, var(--bs-dark) 80%, transparent)'],
    ['#141e14ee',  'color-mix(in srgb, var(--bs-dark) 93%, transparent)'],
    // ── Remaining solid hex ───────────────────────────────────────────────────
    ['#0e160e',  'var(--bs-dark)'],   // footer background
  ],
}

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

function replaceAll(content, pairs) {
  let result = content
  for (const [find, replace] of pairs) {
    // Simple global string replacement (no regex, safe for parens/dots in rgba)
    while (result.includes(find)) {
      result = result.split(find).join(replace)
    }
  }
  return result
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

const baseDir = path.join(__dirname, '..', 'src', 'blocks', 'definitions')

// All definition files — fonts are replaced globally
const ALL_FILES = [
  'jewellery.js', 'furniture.js', 'handicraft.js', 'trailer.js',
  'navigation.js', 'heroes.js', 'features.js', 'content.js',
  'cards.js', 'testimonials.js', 'cta.js', 'forms.js',
  'pricing.js', 'footers.js', 'gallery.js', 'social-proof.js',
  'process.js', 'products.js',
]

let totalChanged = 0

for (const filename of ALL_FILES) {
  const filepath = path.join(baseDir, filename)
  if (!fs.existsSync(filepath)) continue

  let content = fs.readFileSync(filepath, 'utf8')
  const original = content

  // 1. Global font replacements
  content = replaceAll(content, FONT_MAP)

  // 2. Per-theme literal replacements
  if (THEME_LITERAL_MAPS[filename]) {
    content = replaceAll(content, THEME_LITERAL_MAPS[filename])
  }

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8')
    console.log(`✓  ${filename}: updated`)
    totalChanged++
  } else {
    console.log(`–  ${filename}: no changes`)
  }
}

console.log(`\nDone. ${totalChanged} file(s) modified.`)
