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
  },
  extraCss: `
/* ── Dark Theme ── */
body { background-color: #1a1d23 !important; color: #e2e8f0 !important; }
section, .section { background-color: #1a1d23 !important; }
.bg-light { background-color: #232730 !important; color: #e2e8f0 !important; }
.bg-white { background-color: #232730 !important; }
.card { background-color: #232730; border-color: #2d3748; color: #e2e8f0; }
.navbar { background-color: #13161c !important; border-bottom: 1px solid #2d3748; }
.navbar-light .navbar-brand, .navbar-light .nav-link { color: #e2e8f0 !important; }
.btn-primary { background-color: #6ea8fe; border-color: #6ea8fe; color: #0f172a; font-weight: 600; }
.btn-primary:hover { background-color: #93c5fd; border-color: #93c5fd; color: #0f172a; }
.btn-outline-primary { border-color: #6ea8fe; color: #6ea8fe; }
.btn-outline-primary:hover { background-color: #6ea8fe; color: #0f172a; }
.btn-light { background-color: #374151; border-color: #4b5563; color: #f9fafb; }
h1, h2, h3, h4, h5, h6 { color: #f8fafc; }
p, .text-muted { color: #94a3b8 !important; }
.input-group, .form-control, .form-select { background-color: #2d3748; border-color: #4a5568; color: #e2e8f0; }
`,
}
