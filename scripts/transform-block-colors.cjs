/**
 * transform-block-colors.cjs
 *
 * Replaces hardcoded palette hex colors in industry block definition files
 * with CSS variable references. This makes blocks immediately theme-responsive
 * when added to the canvas, without requiring the runtime normalizer.
 *
 * Run with:  node scripts/transform-block-colors.cjs
 */

const fs   = require('fs')
const path = require('path')

// ──────────────────────────────────────────────────────────────────────────────
// Per-theme palette → CSS var mappings
// Order matters: longer / more specific strings first to avoid partial matches.
// ──────────────────────────────────────────────────────────────────────────────
const THEME_MAPS = {

  'jewellery.js': [
    // Heading / bright cream
    ['#f5e6d3', 'var(--bs-heading-color)'],
    // Body text / warm ivory
    ['#d8c4a8', 'var(--bs-body-color)'],
    // Primary gold
    ['#c9a96e', 'var(--bs-primary)'],
    ['#e0c88a', 'var(--bs-primary)'],
    // Secondary / warm brown
    ['#a89070', 'var(--bs-secondary)'],
    ['#8b7355', 'var(--bs-secondary)'],
    ['#6a5840', 'var(--bs-secondary)'],
    // Border
    ['#2a2218', 'var(--bs-border-color)'],
    // Dark surfaces
    ['#0f0c08', 'var(--bs-dark)'],
    ['#1a1612', 'var(--bs-dark)'],
    ['#1c1510', 'var(--bs-dark)'],
    ['#050302', 'var(--bs-dark)'],
    // Body bg / near-black
    ['#0a0a0a', 'var(--bs-body-bg)'],
  ],

  'furniture.js': [
    // Light surfaces
    ['#fdf0e0', 'var(--bs-light)'],
    ['#f5e8d5', 'var(--bs-light)'],
    // Body bg / warm linen
    ['#fef6ec', 'var(--bs-body-bg)'],
    // Border
    ['#e8d5c0', 'var(--bs-border-color)'],
    // Primary / terracotta
    ['#c27a56', 'var(--bs-primary)'],
    ['#9c5c38', 'var(--bs-link-hover-color)'],
    // Secondary / walnut
    ['#7a5035', 'var(--bs-secondary)'],
    ['#6b4a30', 'var(--bs-secondary)'],
    ['#9a7a60', 'var(--bs-secondary)'],
    // Heading / deep walnut
    ['#2a1a0f', 'var(--bs-heading-color)'],
    // Body color & dark surface share this walnut tone
    ['#3d2b1f', 'var(--bs-dark)'],
  ],

  'handicraft.js': [
    // Light bg variants
    ['#fffdf5', 'var(--bs-body-bg)'],
    ['#fffbf3', 'var(--bs-light)'],
    // Body bg / parchment
    ['#fdf8f0', 'var(--bs-body-bg)'],
    // Light surface
    ['#f5ead5', 'var(--bs-light)'],
    // Border
    ['#e5d8c0', 'var(--bs-border-color)'],
    // Primary / saffron
    ['#f0a500', 'var(--bs-primary)'],
    ['#d48c00', 'var(--bs-link-hover-color)'],
    ['#c07800', 'var(--bs-link-color)'],
    ['#b87800', 'var(--bs-secondary)'],
    // Secondary / muted warm
    ['#5a4020', 'var(--bs-secondary)'],
    ['#9a7850', 'var(--bs-secondary)'],
    // Dark surface / deep indigo shades
    ['#1a1c45', 'var(--bs-dark)'],
    ['#1e2050', 'var(--bs-dark)'],
    ['#0f1030', 'var(--bs-dark)'],
    ['#2d2f6b', 'var(--bs-dark)'],
    // Heading
    ['#1a1200', 'var(--bs-heading-color)'],
    // Body color / dark brown
    ['#2d2010', 'var(--bs-body-color)'],
    // Nav link color
    ['#c8b888', 'var(--bs-body-color)'],
  ],

  'trailer.js': [
    // Border
    ['#253525', 'var(--bs-border-color)'],
    // Heading / bright sage
    ['#e8f4e8', 'var(--bs-heading-color)'],
    // Body color / sage
    ['#c8dcc8', 'var(--bs-body-color)'],
    // Secondary colors / forest green
    ['#8ab08a', 'var(--bs-secondary)'],
    ['#6a9a6a', 'var(--bs-secondary)'],
    ['#5a805a', 'var(--bs-secondary)'],
    ['#4a8a4a', 'var(--bs-secondary)'],
    ['#356835', 'var(--bs-secondary)'],
    // Primary / hi-vis orange
    ['#ff7a22', 'var(--bs-link-hover-color)'],
    ['#c85208', 'var(--bs-link-hover-color)'],
    ['#e8630a', 'var(--bs-primary)'],
    // Light surface
    ['#1a2a1a', 'var(--bs-light)'],
    // Dark surface / near-black forest
    ['#111a11', 'var(--bs-dark)'],
    ['#0a100a', 'var(--bs-dark)'],
    // Body bg / forest dark
    ['#141e14', 'var(--bs-body-bg)'],
  ],
}

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

function replaceColors(content, map) {
  let result = content
  for (const [hex, cssVar] of map) {
    // Escape special regex chars in hex (# is not special but just to be safe)
    const escaped = hex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Only replace a 6-char hex NOT followed by more hex chars (avoids 8-digit hex e.g. #141e14cc)
    const re = new RegExp(escaped + '(?![0-9a-fA-F])', 'gi')
    result = result.replace(re, cssVar)
  }
  return result
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

const baseDir = path.join(__dirname, '..', 'src', 'blocks', 'definitions')

let totalChanged = 0

for (const [filename, map] of Object.entries(THEME_MAPS)) {
  const filepath = path.join(baseDir, filename)

  if (!fs.existsSync(filepath)) {
    console.warn(`⚠  ${filename}: file not found — skipping`)
    continue
  }

  const original    = fs.readFileSync(filepath, 'utf8')
  const transformed = replaceColors(original, map)

  if (transformed !== original) {
    fs.writeFileSync(filepath, transformed, 'utf8')
    // Count approximate number of replacements
    const diff = (original.match(/#[0-9a-fA-F]{6}/g) || []).length -
                 (transformed.match(/#[0-9a-fA-F]{6}/g) || []).length
    console.log(`✓  ${filename}: ~${diff} hex occurrences replaced`)
    totalChanged++
  } else {
    console.log(`–  ${filename}: no changes`)
  }
}

console.log(`\nDone. ${totalChanged} file(s) modified.`)
