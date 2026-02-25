/**
 * Strips builder-specific attributes and classes from an HTML string,
 * making it clean for export/preview.
 */
function cleanHtml(html) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html')
  const root = doc.body.firstChild

  // Remove contenteditable attributes
  root.querySelectorAll('[contenteditable]').forEach(el => {
    el.removeAttribute('contenteditable')
  })

  // Remove builder-injected CSS classes
  const builderClasses = ['editable-active', 'is-selected']
  root.querySelectorAll('[class]').forEach(el => {
    builderClasses.forEach(cls => el.classList.remove(cls))
  })

  // Remove ALL data-builder-* attributes the editor may have added
  root.querySelectorAll('*').forEach(el => {
    Array.from(el.attributes)
      .filter(a => a.name.startsWith('data-builder'))
      .forEach(a => el.removeAttribute(a.name))
  })

  // Belt-and-suspenders: strip any lingering contenteditable="false"
  root.querySelectorAll('[contenteditable]').forEach(el => {
    el.removeAttribute('contenteditable')
  })

  return root.innerHTML
}

/**
 * Reads the live theme CSS injected by the theme store (<style id="theme-styles">)
 * so the exported page inherits the current theme colours and typography.
 */
function getThemeCss() {
  if (typeof document === 'undefined') return ''
  const el = document.getElementById('theme-styles')
  return el ? el.textContent : ''
}

/**
 * Returns the Google Fonts href if one has been injected by the theme store
 * (<link id="theme-fonts">), so the exported page loads the same typefaces.
 */
function getGoogleFontsHref() {
  if (typeof document === 'undefined') return null
  const el = document.getElementById('theme-fonts')
  return (el && el.href) ? el.href : null
}

/**
 * Assembles a complete standalone HTML page from the array of canvas block instances.
 * Includes the active theme CSS and Google Fonts so the exported page matches the design.
 */
export function generateFullHtml(canvasBlocks) {
  const bodyContent = canvasBlocks
    .map(block => cleanHtml(block.editedHtml || block.html))
    .join('\n\n')

  const themeCss        = getThemeCss()
  const googleFontsHref = getGoogleFontsHref()

  const googleFontsTag = googleFontsHref
    ? `\n  <!-- Google Fonts -->\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link rel="stylesheet" href="${googleFontsHref}" />`
    : ''

  const themeStyleTag = themeCss
    ? `\n  <!-- Theme overrides (exported from builder) -->\n  <style>\n${themeCss}\n  </style>`
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Page</title>
  <!-- Bootstrap 5.3 CSS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    crossorigin="anonymous"
  />
  <!-- Bootstrap Icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />${googleFontsTag}${themeStyleTag}
</head>
<body>
${bodyContent}
  <!-- Bootstrap 5.3 JS Bundle -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    crossorigin="anonymous"
  ><\/script>
</body>
</html>`
}
