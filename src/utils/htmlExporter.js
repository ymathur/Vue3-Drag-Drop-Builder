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
 * Assembles a complete standalone HTML page from the array of canvas block instances.
 */
export function generateFullHtml(canvasBlocks) {
  const bodyContent = canvasBlocks
    .map(block => cleanHtml(block.editedHtml || block.html))
    .join('\n\n')

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
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous"
  />
  <!-- Bootstrap Icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
</head>
<body>
${bodyContent}
  <!-- Bootstrap 5.3 JS Bundle -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc4s9bIOgUxi8T/jzmia4i9B4BNKGH3G3lFaQgNNa8V"
    crossorigin="anonymous"
  ><\/script>
</body>
</html>`
}
