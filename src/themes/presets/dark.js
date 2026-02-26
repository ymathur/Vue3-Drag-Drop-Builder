export default {
  id: 'dark',
  name: 'Dark',
  description: 'Sleek, modern dark mode. Built for developer tools and night-owl users.',
  group:       'core',
  thumbnail: ['#6ea8fe', '#adb5bd', '#1a1d23', '#e2e8f0'],
  googleFonts: ['Inter'],
  vars: {
    '--bs-primary':            '#6ea8fe',
    '--bs-primary-rgb':        '110, 168, 254',
    '--bs-secondary':          '#adb5bd',
    '--bs-secondary-rgb':      '173, 181, 189',
    '--bs-success':            '#75b798',
    '--bs-success-rgb':        '117, 183, 152',
    '--bs-danger':             '#ea868f',
    '--bs-danger-rgb':         '234, 134, 143',
    '--bs-body-bg':            '#1a1d23',
    '--bs-body-bg-rgb':        '26, 29, 35',
    '--bs-body-color':         '#e2e8f0',
    '--bs-heading-color':      '#f8fafc',
    '--bs-link-color':         '#90cdf4',
    '--bs-link-hover-color':   '#bee3f8',
    '--bs-border-color':       '#2d3748',
    '--bs-font-sans-serif':    '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.5',
    '--bs-border-radius':      '0.5rem',
    '--bs-border-radius-sm':   '0.3rem',
    '--bs-border-radius-lg':   '0.75rem',
    '--bs-border-radius-pill': '50rem',
    // Surface palette — consumed by buildComponentCss for .bg-dark / .bg-light
    '--bs-dark':       '#13161c',
    '--bs-light':      '#232730',
    '--bs-dark-text':  '#e2e8f0',
    '--bs-light-text': '#e2e8f0',
  },
  extraCss: `
/* ── Dark Theme ── */
body { background-color: var(--bs-body-bg) !important; color: var(--bs-body-color) !important; }
section:not([class*="bg-"]) { background-color: var(--bs-body-bg) !important; }
.bg-light  { background-color: var(--bs-light) !important; color: var(--bs-light-text) !important; }
.bg-white  { background-color: var(--bs-light) !important; color: var(--bs-light-text) !important; }
.bg-dark   { background-color: var(--bs-dark)  !important; color: var(--bs-dark-text)  !important; }
.bg-primary { background-color: var(--bs-primary) !important; color: #0f172a !important; }
.card { background-color: var(--bs-light); border-color: var(--bs-border-color); color: var(--bs-body-color); }
.navbar { background-color: var(--bs-dark) !important; border-bottom: 1px solid var(--bs-border-color); }
.navbar-light .navbar-brand, .navbar-light .nav-link { color: var(--bs-body-color) !important; }
.btn-primary { background-color: var(--bs-primary); border-color: var(--bs-primary); color: #0f172a; font-weight: 600; }
.btn-primary:hover { color: #0f172a; }
.btn-outline-primary { border-color: var(--bs-primary); color: var(--bs-primary); }
.btn-outline-primary:hover { background-color: var(--bs-primary); color: #0f172a; }
.btn-light { background-color: #374151; border-color: #4b5563; color: #f9fafb; }
h1, h2, h3, h4, h5, h6 { color: var(--bs-heading-color); }
p, body { font-family: var(--bs-font-sans-serif); }
.input-group, .form-control, .form-select { background-color: var(--bs-light); border-color: var(--bs-border-color); color: var(--bs-body-color); }
`,
}
