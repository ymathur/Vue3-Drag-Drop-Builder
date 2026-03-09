/**
 * Lightweight HTML sanitizer for the builder.
 * Strips <script> tags, on* event handlers, and javascript: URLs
 * to prevent XSS when setting innerHTML from user-edited content
 * or loaded project files.
 */
export function sanitizeHtml(html) {
  if (!html) return ''

  const doc = new DOMParser().parseFromString(html, 'text/html')

  // Remove all <script>, <iframe>, <object>, <embed> elements
  doc.querySelectorAll('script, iframe, object, embed').forEach(el => el.remove())

  // Remove dangerous attributes from all elements
  doc.querySelectorAll('*').forEach(el => {
    for (const attr of [...el.attributes]) {
      // Remove on* event handlers (onclick, onerror, onload, etc.)
      if (attr.name.toLowerCase().startsWith('on')) {
        el.removeAttribute(attr.name)
      }
      // Remove javascript: URLs from link/src attributes
      if (['href', 'src', 'action', 'formaction', 'xlink:href'].includes(attr.name.toLowerCase())) {
        if (attr.value.trim().toLowerCase().startsWith('javascript:')) {
          el.removeAttribute(attr.name)
        }
      }
    }
  })

  return doc.body.innerHTML
}

/**
 * Sanitize a URL for safe use in CSS url() context.
 * Prevents CSS injection by validating protocol and stripping
 * characters that could break out of url("...").
 */
export function sanitizeCssUrl(src) {
  if (!src) return ''
  const trimmed = src.trim()
  // Only allow http(s), data:image, and blob: URLs
  if (!/^(https?:\/\/|data:image\/|blob:)/i.test(trimmed)) return ''
  // Strip characters that could break out of CSS url("...") context
  return trimmed.replace(/["'()\\]/g, encodeURIComponent)
}
