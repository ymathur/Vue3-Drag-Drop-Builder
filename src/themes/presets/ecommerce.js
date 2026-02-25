export default {
  id: 'ecommerce',
  name: 'E-Commerce',
  description: 'Warm oranges & amber — built to convert. Friendly, trustworthy, action-driving.',
  thumbnail: ['#ea580c', '#f59e0b', '#fffbf5', '#1c1917'],
  googleFonts: ['DM Sans', 'Playfair Display'],
  vars: {
    '--bs-primary':            '#ea580c',
    '--bs-primary-rgb':        '234, 88, 12',
    '--bs-secondary':          '#f59e0b',
    '--bs-secondary-rgb':      '245, 158, 11',
    '--bs-success':            '#16a34a',
    '--bs-success-rgb':        '22, 163, 74',
    '--bs-danger':             '#dc2626',
    '--bs-danger-rgb':         '220, 38, 38',
    '--bs-body-bg':            '#fffbf5',
    '--bs-body-bg-rgb':        '255, 251, 245',
    '--bs-body-color':         '#1c1917',
    '--bs-heading-color':      '#0c0a09',
    '--bs-link-color':         '#ea580c',
    '--bs-link-hover-color':   '#c2410c',
    '--bs-border-color':       '#fed7aa',
    '--bs-font-sans-serif':    '"DM Sans", sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.6',
    '--bs-border-radius':      '0.5rem',
    '--bs-border-radius-sm':   '0.35rem',
    '--bs-border-radius-lg':   '0.75rem',
    '--bs-border-radius-pill': '50rem',
  },
  extraCss: `
/* ── E-Commerce Theme ── */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');

body { background: #fffbf5 !important; color: #1c1917 !important; }
section, .section { background-color: #fffbf5 !important; }
.bg-light { background-color: #fff7ed !important; }
.bg-white { background-color: #ffffff !important; }

h1, h2, h3 {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  color: #0c0a09;
}
h4, h5, h6 {
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  color: #0c0a09;
}

.btn-primary {
  background: linear-gradient(135deg, #ea580c, #f59e0b);
  border: none;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(234,88,12,0.35);
}
.btn-primary:hover {
  background: linear-gradient(135deg, #c2410c, #d97706);
  border: none;
  box-shadow: 0 4px 20px rgba(234,88,12,0.45);
}
.btn-outline-primary { border-color: #ea580c; color: #ea580c; }
.btn-outline-primary:hover { background: #ea580c; color: #fff; }
.btn-secondary { background-color: #f59e0b; border-color: #f59e0b; color: #1c1917; font-weight: 600; }
.btn-secondary:hover { background-color: #d97706; border-color: #d97706; color: #1c1917; }

.card {
  background: #ffffff;
  border: 1px solid #fed7aa;
  box-shadow: 0 2px 8px rgba(234,88,12,0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(234,88,12,0.12);
  transform: translateY(-2px);
}

.navbar { background: #ffffff !important; border-bottom: 2px solid #fed7aa; box-shadow: 0 1px 6px rgba(234,88,12,0.08); }
.navbar-light .navbar-brand { color: #ea580c !important; font-weight: 700; }
.navbar-light .nav-link { color: #1c1917 !important; font-weight: 500; }
.navbar-light .nav-link:hover { color: #ea580c !important; }

p, .lead { color: #44403c; }
.text-muted { color: #78716c !important; }
.badge.bg-primary { background: #ea580c !important; }
.badge.bg-secondary { background: #f59e0b !important; color: #1c1917 !important; }

/* Trust signals */
.text-success { color: #16a34a !important; }
.border-primary { border-color: #ea580c !important; }
`,
}
