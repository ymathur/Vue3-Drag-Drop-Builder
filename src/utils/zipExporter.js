/**
 * ZIP exporter — generates a downloadable project ZIP containing:
 *   • index.html        — first page (Bootstrap CDN + theme link + custom JS)
 *   • {slug}.html       — additional pages (one file per page)
 *   • styles.css        — compiled theme CSS (:root vars + extraCss) — shared
 *   • {slug}-scripts.js — per-page block scripts (or shared scripts.js for 1-page)
 *
 * Usage:
 *   import { exportZip } from '@/utils/zipExporter.js'
 *   await exportZip(pages, themeStore)
 */
import JSZip from 'jszip'

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Strips builder-specific attributes/classes from an HTML string.
 * Optionally extracts <script> tags into a separate string.
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

/**
 * Convert a page name to a URL-safe filename slug.
 * e.g. "About Us" → "about-us"
 */
function slugify(name) {
  return (name || 'page')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    || 'page'
}

/**
 * Build the full HTML document for one page.
 */
function buildPageHtml({
  bodyContent,
  scriptFile,
  pageTitle,
  themeNameComment,
  googleFontNames,
}) {
  const googleFontsUrl = buildGoogleFontsUrl(googleFontNames)
  const fontsLink = googleFontsUrl
    ? `\n  <!-- Google Fonts -->\n  <link rel="stylesheet" href="${googleFontsUrl}" />`
    : ''

  return `<!DOCTYPE html>
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
  />${fontsLink}

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
  <script src="${scriptFile}"><\/script>
</body>
</html>`
}

// ─── Main export function ────────────────────────────────────────────────────

/**
 * @param {Array}  pages      - pages array from builder store  ({ id, name, blocks })
 * @param {Object} themeStore - useThemeStore() instance (or null for no theme)
 * @param {string} [filename] - output ZIP filename (default: 'my-page.zip')
 */
export async function exportZip(pages, themeStore = null, filename = 'my-page.zip') {
  const zip = new JSZip()

  // ── 1. Build shared styles.css ─────────────────────────────
  let themeRootCss    = ''
  let themeExtraCss   = ''
  let googleFontNames = []

  if (themeStore?.activeTheme) {
    const theme = themeStore.activeTheme
    const vars  = themeStore.mergedVars  // already includes branding overrides

    themeRootCss    = buildRootCss(vars)
    themeExtraCss   = theme.extraCss || ''
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

  const stylesCss = [
    themeRootCss,
    themeExtraCss,
  ].filter(Boolean).join('\n')

  zip.file('styles.css', stylesCss || '/* No theme applied */')

  // ── 2. Build brand/page metadata ───────────────────────────
  const brandName = themeStore?.brandingSettings?.brandName?.trim()
  const themeNameComment = themeStore?.activeTheme
    ? `<!-- Theme: ${themeStore.activeTheme.name}${brandName ? ` | Brand: ${brandName}` : ''} -->\n  `
    : ''

  // Track used slugs to avoid filename collisions
  const usedSlugs = new Map()  // slug → count

  // ── 3. Process each page ───────────────────────────────────
  pages.forEach((page, pageIndex) => {
    const allScripts = []
    const htmlParts  = []

    for (const block of page.blocks) {
      const raw = block.editedHtml || block.html
      const { html, scriptContent } = cleanBlockHtml(raw, { extractScripts: true })
      htmlParts.push(html)
      if (scriptContent) allScripts.push(scriptContent)
    }

    // Determine unique file slug for this page
    let baseSlug = pageIndex === 0 ? 'index' : slugify(page.name)
    if (baseSlug === 'index' && pageIndex !== 0) baseSlug = 'page'
    const slugCount = usedSlugs.get(baseSlug) ?? 0
    usedSlugs.set(baseSlug, slugCount + 1)
    const fileSlug = slugCount === 0 ? baseSlug : `${baseSlug}-${slugCount}`

    const htmlFile   = `${fileSlug}.html`
    const scriptFile = `${fileSlug}-scripts.js`

    // Build scripts file for this page
    const scriptsCombined = allScripts.join('\n\n/* ── next block ── */\n\n')
    const scriptsJs = allScripts.length
      ? `document.addEventListener('DOMContentLoaded', function () {\n\n${scriptsCombined}\n\n});\n`
      : '/* No custom scripts on this page */\n'

    zip.file(scriptFile, scriptsJs)

    // Build page title
    const pageTitle = pageIndex === 0 && brandName
      ? brandName
      : page.name
        ? `${page.name}${brandName ? ` — ${brandName}` : (themeStore?.activeTheme ? ` — ${themeStore.activeTheme.name}` : '')}`
        : (themeStore?.activeTheme ? `${themeStore.activeTheme.name} — My Page` : 'My Page')

    // Build and save HTML file
    const bodyContent = htmlParts.join('\n\n')
    const pageHtml = buildPageHtml({
      bodyContent,
      scriptFile,
      pageTitle,
      themeNameComment,
      googleFontNames,
    })

    zip.file(htmlFile, pageHtml)
  })

  // ── 4. Generate and trigger download ──────────────────────
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
