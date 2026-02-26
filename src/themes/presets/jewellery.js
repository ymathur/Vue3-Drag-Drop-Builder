export default {
  id:          'jewellery',
  name:        'Jewellery',
  group:       'industry',
  description: 'Obsidian & liquid gold. Crafted for fine jewellery maisons that command reverence.',
  thumbnail:   ['#0a0a0a', '#c9a96e', '#1c1510', '#f5e6d3'],

  googleFonts: ['Cormorant Garamond', 'Jost'],

  vars: {
    '--bs-primary':            '#c9a96e',
    '--bs-primary-rgb':        '201, 169, 110',
    '--bs-secondary':          '#8b7355',
    '--bs-secondary-rgb':      '139, 115, 85',
    '--bs-success':            '#5a8a6a',
    '--bs-success-rgb':        '90, 138, 106',
    '--bs-danger':             '#a05050',
    '--bs-danger-rgb':         '160, 80, 80',
    '--bs-body-bg':            '#0a0a0a',
    '--bs-body-bg-rgb':        '10, 10, 10',
    '--bs-body-color':         '#d8c4a8',
    '--bs-heading-color':      '#f5e6d3',
    '--bs-link-color':         '#c9a96e',
    '--bs-link-hover-color':   '#e0c88a',
    '--bs-border-color':       '#2a2218',
    '--bs-font-sans-serif':    '"Jost", sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.75',
    '--bs-border-radius':      '2px',
    '--bs-border-radius-sm':   '1px',
    '--bs-border-radius-lg':   '4px',
    '--bs-border-radius-pill': '50rem',
    // Surface palette — consumed by buildComponentCss for .bg-dark / .bg-light
    '--bs-dark':       '#050302',
    '--bs-light':      '#111008',
    '--bs-dark-text':  '#f5e6d3',
    '--bs-light-text': '#d8c4a8',
  },

  extraCss: `
/* ══════════════════════════════════════════════
   Jewellery — Luxury Gold Theme
   Palette: Obsidian #0a0a0a · Gold #c9a96e
   Fonts: Cormorant Garamond (display) · Jost (body)
   ══════════════════════════════════════════════ */

body { background: #0a0a0a !important; color: #d8c4a8 !important; }
section:not([class*="bg-"]) { background-color: var(--bs-body-bg) !important; }
.bg-light  { background-color: var(--bs-light) !important; color: var(--bs-light-text) !important; }
.bg-white  { background-color: var(--bs-body-bg) !important; color: var(--bs-body-color) !important; }
.bg-dark   { background-color: var(--bs-dark)  !important; color: var(--bs-dark-text)  !important; }
.bg-primary { background-color: var(--bs-primary) !important; color: var(--bs-dark) !important; }

/* ── Typography ── */
h1, h2, h3, h4, h5, h6 {
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-weight: 500;
  color: #f5e6d3;
  letter-spacing: 0.06em;
}
.display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #f5e6d3;
}
.lead {
  font-family: "Jost", sans-serif;
  font-weight: 300;
  font-size: 1.05rem;
  letter-spacing: 0.05em;
  color: #a89070;
}
p, body { font-family: var(--bs-font-sans-serif); }
.text-muted { color: #6a5840 !important; }
.fw-bold, strong { font-weight: 600; color: #e0caa8; }

/* ── Elegant heading rule ── */
h2::after {
  content: '';
  display: block;
  width: 2.5rem;
  height: 1px;
  background: linear-gradient(90deg, #c9a96e 0%, transparent 100%);
  margin-top: 0.7rem;
}
.text-center h2::after { margin-left: auto; margin-right: auto; }

/* ── Buttons ── */
.btn-primary {
  background: transparent;
  border: 1px solid #c9a96e;
  color: #c9a96e;
  font-family: "Jost", sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding: 0.75rem 2.2rem;
  border-radius: 1px;
  transition: all 0.35s ease;
}
.btn-primary:hover, .btn-primary:focus {
  background: #c9a96e;
  border-color: #c9a96e;
  color: #0a0a0a;
  box-shadow: 0 0 28px rgba(201, 169, 110, 0.25);
}
.btn-outline-primary {
  border: 1px solid #c9a96e;
  color: #c9a96e;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  border-radius: 1px;
}
.btn-outline-primary:hover { background: #c9a96e; color: #0a0a0a; }
.btn-secondary {
  background: transparent;
  border: 1px solid rgba(216, 196, 168, 0.25);
  color: #d8c4a8;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 1px;
}
.btn-secondary:hover { background: rgba(216, 196, 168, 0.08); border-color: #d8c4a8; }
.btn-light, .btn-outline-light {
  background: transparent;
  border: 1px solid rgba(245, 230, 211, 0.2);
  color: #f5e6d3;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 1px;
}
.btn-light:hover, .btn-outline-light:hover {
  background: rgba(245, 230, 211, 0.08);
  border-color: rgba(245, 230, 211, 0.5);
  color: #f5e6d3;
}
.btn-dark {
  background: #f5e6d3;
  border-color: #f5e6d3;
  color: #0a0a0a;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 1px;
}
.btn-dark:hover { background: #c9a96e; border-color: #c9a96e; }

/* ── Cards ── */
.card {
  background: #0f0c08;
  border: 1px solid #2a2218;
  border-radius: 2px;
  color: #d8c4a8;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.card:hover {
  border-color: rgba(201, 169, 110, 0.5);
  box-shadow: 0 12px 40px rgba(201, 169, 110, 0.12);
}
.card-title { font-family: "Cormorant Garamond", serif; font-size: 1.25rem; letter-spacing: 0.05em; }
.card-img-top { filter: grayscale(20%) sepia(10%); transition: filter 0.4s ease; }
.card:hover .card-img-top { filter: grayscale(0%) sepia(0%); }

/* ── Navbar ── */
.navbar {
  background: rgba(10, 10, 10, 0.94) !important;
  border-bottom: 1px solid rgba(201, 169, 110, 0.2);
  backdrop-filter: blur(16px);
}
.navbar-brand {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #c9a96e !important;
}
.navbar .nav-link {
  font-family: "Jost", sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #a89070 !important;
  transition: color 0.3s ease;
}
.navbar .nav-link:hover { color: #c9a96e !important; }

/* ── Badges & accents ── */
.badge.bg-primary {
  background: transparent !important;
  border: 1px solid #c9a96e;
  color: #c9a96e !important;
  font-family: "Jost", sans-serif;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  border-radius: 1px;
}
.text-primary { color: #c9a96e !important; }
.border-primary { border-color: #c9a96e !important; }

/* ── List groups & dividers ── */
.list-group-item { background: #0f0c08; border-color: #2a2218; color: #d8c4a8; }
hr { border-color: rgba(201, 169, 110, 0.2); }

/* ── Forms ── */
.form-control {
  background: #0f0c08;
  border: 1px solid #2a2218;
  color: #d8c4a8;
  border-radius: 1px;
}
.form-control:focus {
  background: #0f0c08;
  border-color: #c9a96e;
  color: #f5e6d3;
  box-shadow: 0 0 0 2px rgba(201, 169, 110, 0.15);
}
.form-label { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: #8b7355; }
`,
}
