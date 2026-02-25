export default {
  id: 'agency',
  name: 'Agency',
  description: 'Bold black & electric yellow — zero compromises. Maximum impact, maximum attitude.',
  thumbnail: ['#facc15', '#ffffff', '#09090b', '#fafafa'],
  googleFonts: ['Space Grotesk'],
  vars: {
    '--bs-primary':            '#facc15',
    '--bs-primary-rgb':        '250, 204, 21',
    '--bs-secondary':          '#ffffff',
    '--bs-secondary-rgb':      '255, 255, 255',
    '--bs-success':            '#4ade80',
    '--bs-success-rgb':        '74, 222, 128',
    '--bs-danger':             '#f87171',
    '--bs-danger-rgb':         '248, 113, 113',
    '--bs-body-bg':            '#09090b',
    '--bs-body-bg-rgb':        '9, 9, 11',
    '--bs-body-color':         '#fafafa',
    '--bs-heading-color':      '#ffffff',
    '--bs-link-color':         '#facc15',
    '--bs-link-hover-color':   '#fde047',
    '--bs-border-color':       '#27272a',
    '--bs-font-sans-serif':    '"Space Grotesk", sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.5',
    '--bs-border-radius':      '0',
    '--bs-border-radius-sm':   '0',
    '--bs-border-radius-lg':   '0',
    '--bs-border-radius-pill': '0',
  },
  extraCss: `
/* ── Agency Theme ── */
body { background: #09090b !important; color: #fafafa !important; }
section, .section { background-color: #09090b !important; }
.bg-light { background-color: #18181b !important; color: #fafafa !important; }
.bg-white { background-color: #18181b !important; color: #fafafa !important; }

h1, h2, h3, h4, h5, h6 {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.btn-primary {
  background: #facc15;
  border: 2px solid #facc15;
  color: #09090b;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 0 !important;
  box-shadow: 4px 4px 0 #fde047;
  transition: all 0.15s ease;
}
.btn-primary:hover {
  background: #fde047;
  border-color: #fde047;
  color: #09090b;
  box-shadow: 6px 6px 0 #facc15;
  transform: translate(-1px, -1px);
}
.btn-outline-primary {
  border: 2px solid #facc15;
  color: #facc15;
  border-radius: 0 !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.btn-outline-primary:hover { background: #facc15; color: #09090b; }
.btn-secondary {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  border-radius: 0 !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.btn-secondary:hover { background: #ffffff; color: #09090b; }
.btn-light {
  background: transparent;
  border: 2px solid rgba(255,255,255,0.3);
  color: #fafafa;
  border-radius: 0 !important;
}
.btn-light:hover { background: rgba(255,255,255,0.1); border-color: #ffffff; }
.btn-outline-light {
  border: 2px solid rgba(255,255,255,0.4);
  color: #fafafa;
  border-radius: 0 !important;
  font-weight: 700;
  text-transform: uppercase;
}
.btn-outline-light:hover { background: #ffffff; color: #09090b; }

/* Every element: sharp edges */
.card, .card-body, input, select, textarea, .form-control, .modal-content {
  border-radius: 0 !important;
}
.card {
  background: #18181b;
  border: 1px solid #27272a;
  color: #fafafa;
}
.card:hover { border-color: #facc15; box-shadow: 4px 4px 0 #facc15; }

.navbar {
  background: #09090b !important;
  border-bottom: 2px solid #facc15;
}
.navbar-light .navbar-brand,
.navbar-light .nav-link { color: #fafafa !important; }
.navbar-light .nav-link:hover { color: #facc15 !important; }

p, .lead { color: #a1a1aa; }
.text-muted { color: #71717a !important; }
.badge.bg-primary { background: #facc15 !important; color: #09090b !important; }

/* Accent lines */
h2::after {
  content: '';
  display: block;
  width: 3rem;
  height: 3px;
  background: #facc15;
  margin-top: 0.5rem;
}

.border-primary { border-color: #facc15 !important; }
.text-primary { color: #facc15 !important; }
`,
}
