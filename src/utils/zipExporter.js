/**
 * ZIP exporter — generates a downloadable project ZIP containing:
 *   • index.html  — clean standalone page (Bootstrap CDN + theme link + custom JS)
 *   • styles.css  — compiled theme CSS (:root vars + extraCss)
 *   • scripts.js  — all block <script> tags extracted and wrapped in DOMContentLoaded
 *
 * Usage:
 *   import { exportZip } from '@/utils/zipExporter.js'
 *   await exportZip(canvasBlocks, themeStore)
 */
import JSZip from 'jszip'

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Strips builder-specific attributes/classes from an HTML string.
 * (Mirrors cleanHtml in htmlExporter.js but also removes <script> tags
 *  since those go into scripts.js for the ZIP.)
 */
function cleanBlockHtml(html, { extractScripts = false } = {}) {
  const parser = new DOMParser()
  const doc    = parser.parseFromString(`<div>${html}</div>`, 'text/html')
  const root   = doc.body.firstChild

  // Remove contenteditable attributes
  root.querySelectorAll('[contenteditable]').forEach(el => el.removeAttribute('contenteditable'))

  // Remove builder-injected CSS classes
  const builderClasses = ['editable-active', 'is-selected']
  root.querySelectorAll('[class]').forEach(el => {
    builderClasses.forEach(cls => el.classList.remove(cls))
  })

  // Remove ALL data-builder-* attributes
  root.querySelectorAll('*').forEach(el => {
    Array.from(el.attributes)
      .filter(a => a.name.startsWith('data-builder'))
      .forEach(a => el.removeAttribute(a.name))
  })

  let scriptContent = ''

  if (extractScripts) {
    // Collect script contents then remove script tags from the HTML
    const scripts = Array.from(root.querySelectorAll('script'))
    scriptContent = scripts.map(s => s.textContent.trim()).filter(Boolean).join('\n\n')
    scripts.forEach(s => s.remove())
  }

  return { html: root.innerHTML, scriptContent }
}

/**
 * Build a Google Fonts @import URL from an array of font names.
 * Returns empty string if no fonts are provided.
 */
function buildGoogleFontsUrl(fontNames) {
  const clean = fontNames.filter(Boolean)
  if (!clean.length) return ''
  const families = clean
    .map(n => `family=${encodeURIComponent(n)}:wght@300;400;500;600;700;800`)
    .join('&')
  return `https://fonts.googleapis.com/css2?${families}&display=swap`
}

/**
 * Build the :root { ... } CSS block from a vars object.
 */
function buildRootCss(vars) {
  const lines = Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n')
  return `:root {\n${lines}\n}`
}

// ─── Main export function ────────────────────────────────────────────────────

/**
 * @param {Array}  canvasBlocks  - blocks from builder store
 * @param {Object} themeStore    - useThemeStore() instance (or null for no theme)
 * @param {string} [filename]    - output filename (default: 'my-page.zip')
 */
export async function exportZip(canvasBlocks, themeStore = null, filename = 'my-page.zip') {
  const zip = new JSZip()

  // ── 1. Process blocks ──────────────────────────────────────
  const allScripts  = []
  const htmlParts   = []

  for (const block of canvasBlocks) {
    const raw = block.editedHtml || block.html
    const { html, scriptContent } = cleanBlockHtml(raw, { extractScripts: true })
    htmlParts.push(html)
    if (scriptContent) allScripts.push(scriptContent)
  }

  // ── 2. Build styles.css ────────────────────────────────────
  let themeRootCss = ''
  let themeExtraCss = ''
  let googleFontNames = []

  if (themeStore?.activeTheme) {
    const theme = themeStore.activeTheme
    const vars  = themeStore.mergedVars  // already includes branding overrides

    themeRootCss  = buildRootCss(vars)
    themeExtraCss = theme.extraCss || ''
    googleFontNames = theme.googleFonts || []

    // Include any font family override from customizations or branding
    const fontVar = vars['--bs-font-sans-serif']
    if (fontVar) {
      const m = fontVar.match(/["']([^"']+)["']/)
      if (m && m[1]) googleFontNames = [...new Set([...googleFontNames, m[1]])]
    }
    // Remove non-Google-Font sentinels
    googleFontNames = googleFontNames.filter(n => n && n !== 'System Default' && n !== '-apple-system')
  }

  const googleFontsUrl = buildGoogleFontsUrl(googleFontNames)

  // styles.css content
  const stylesCss = [
    googleFontsUrl ? `@import url('${googleFontsUrl}');\n` : '',
    themeRootCss,
    themeExtraCss,
  ].filter(Boolean).join('\n')

  zip.file('styles.css', stylesCss || '/* No theme applied */')

  // ── 3. Build scripts.js ────────────────────────────────────
  const scriptsCombined = allScripts.join('\n\n/* ── next block ── */\n\n')
  const scriptsJs = allScripts.length
    ? `document.addEventListener('DOMContentLoaded', function () {\n\n${scriptsCombined}\n\n});\n`
    : '/* No custom scripts in this page */\n'

  zip.file('scripts.js', scriptsJs)

  // ── 4. Build index.html ────────────────────────────────────
  const bodyContent = htmlParts.join('\n\n')

  // Page title: branding name > theme name > default
  const brandName   = themeStore?.brandingSettings?.brandName?.trim()
  const pageTitle   = brandName || (themeStore?.activeTheme ? `${themeStore.activeTheme.name} — My Page` : 'My Page')

  const themeNameComment = themeStore?.activeTheme
    ? `<!-- Theme: ${themeStore.activeTheme.name}${brandName ? ` | Brand: ${brandName}` : ''} -->\n  `
    : ''

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${pageTitle}</title>

  <!-- Bootstrap 5.3 CSS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous"
  />
  <!-- Bootstrap Icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />

  ${themeNameComment}<!-- Custom theme + styles -->
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

${bodyContent}

  <!-- Bootstrap 5.3 JS Bundle -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"
  ><\/script>
  <!-- Custom block scripts -->
  <script src="scripts.js"><\/script>
</body>
</html>`

  zip.file('index.html', indexHtml)

  // ── 5. Generate and trigger download ──────────────────────
  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
