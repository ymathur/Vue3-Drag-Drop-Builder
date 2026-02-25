export default {
  id: 'light',
  name: 'Light',
  description: 'Clean, professional, and timeless. The classic look — refined.',
  group:       'core',
  thumbnail: ['#0d6efd', '#6c757d', '#ffffff', '#212529'],
  googleFonts: ['Inter'],
  vars: {
    '--bs-primary':            '#0d6efd',
    '--bs-primary-rgb':        '13, 110, 253',
    '--bs-secondary':          '#6c757d',
    '--bs-secondary-rgb':      '108, 117, 125',
    '--bs-success':            '#198754',
    '--bs-success-rgb':        '25, 135, 84',
    '--bs-danger':             '#dc3545',
    '--bs-danger-rgb':         '220, 53, 69',
    '--bs-body-bg':            '#ffffff',
    '--bs-body-bg-rgb':        '255, 255, 255',
    '--bs-body-color':         '#212529',
    '--bs-heading-color':      '#0f172a',
    '--bs-link-color':         '#0d6efd',
    '--bs-link-hover-color':   '#0a58ca',
    '--bs-border-color':       '#dee2e6',
    '--bs-font-sans-serif':    '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.5',
    '--bs-border-radius':      '0.375rem',
    '--bs-border-radius-sm':   '0.25rem',
    '--bs-border-radius-lg':   '0.5rem',
    '--bs-border-radius-pill': '50rem',
  },
  extraCss: `
/* ── Light Theme ── */
.navbar { box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
.card { box-shadow: 0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04); border-color: #f1f5f9; }
.btn-primary { background-color: #0d6efd; border-color: #0d6efd; }
.btn-primary:hover { background-color: #0a58ca; border-color: #0a53be; }
section { background-color: #ffffff; }
.bg-light { background-color: #f8fafc !important; }
`,
}
