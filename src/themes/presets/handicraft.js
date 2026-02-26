export default {
  id:          'handicraft',
  name:        'Handicraft',
  group:       'industry',
  description: 'Saffron & indigo folk heritage. Block-print tradition meets contemporary artisan craft.',
  thumbnail:   ['#fdf8f0', '#f0a500', '#2d2f6b', '#e8d5a8'],

  googleFonts: ['EB Garamond', 'Nunito'],

  vars: {
    '--bs-primary':            '#f0a500',
    '--bs-primary-rgb':        '240, 165, 0',
    '--bs-secondary':          '#2d2f6b',
    '--bs-secondary-rgb':      '45, 47, 107',
    '--bs-success':            '#5c8a5c',
    '--bs-success-rgb':        '92, 138, 92',
    '--bs-danger':             '#c0392b',
    '--bs-danger-rgb':         '192, 57, 43',
    '--bs-body-bg':            '#fdf8f0',
    '--bs-body-bg-rgb':        '253, 248, 240',
    '--bs-body-color':         '#2d2010',
    '--bs-heading-color':      '#1a1200',
    '--bs-link-color':         '#c07800',
    '--bs-link-hover-color':   '#9a6000',
    '--bs-border-color':       '#e5d8c0',
    '--bs-font-sans-serif':    '"Nunito", sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.75',
    '--bs-border-radius':      '4px',
    '--bs-border-radius-sm':   '2px',
    '--bs-border-radius-lg':   '8px',
    '--bs-border-radius-pill': '50rem',
    // Surface palette — consumed by buildComponentCss for .bg-dark / .bg-light
    '--bs-dark':       '#2d2f6b',
    '--bs-light':      '#f5ead5',
    '--bs-dark-text':  '#fdf8f0',
    '--bs-light-text': '#2d2010',
  },

  extraCss: `
/* ══════════════════════════════════════════════
   Handicraft — Folk Heritage Theme
   Palette: Parchment #fdf8f0 · Saffron #f0a500 · Indigo #2d2f6b
   Fonts: EB Garamond (headings) · Nunito (body)
   ══════════════════════════════════════════════ */

body { background: #fdf8f0 !important; color: #2d2010 !important; }
section:not([class*="bg-"]) { background-color: #fdf8f0 !important; }
.bg-light  { background-color: var(--bs-light) !important; color: var(--bs-light-text) !important; }
.bg-white  { background-color: var(--bs-body-bg) !important; color: var(--bs-body-color) !important; }
.bg-dark   { background-color: var(--bs-dark)  !important; color: var(--bs-dark-text)  !important; }
.bg-primary { background-color: var(--bs-primary) !important; color: #1a1200 !important; }

/* ── Typography ── */
h1, h2, h3, h4, h5, h6 {
  font-family: "EB Garamond", "Georgia", serif;
  font-weight: 600;
  color: #1a1200;
  letter-spacing: 0.02em;
  line-height: 1.25;
}
.display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {
  font-family: "EB Garamond", serif;
  font-weight: 500;
  color: #1a1200;
  letter-spacing: 0.03em;
}
.lead {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 1.08rem;
  color: #5a4020;
  line-height: 1.8;
}
p, body { font-family: var(--bs-font-sans-serif); }
.text-muted { color: #9a7850 !important; }

/* ── Folk-inspired heading ornament ── */
h2::before {
  content: '✦ ';
  color: #f0a500;
  font-size: 0.65em;
  vertical-align: middle;
  margin-right: 0.1em;
  opacity: 0.9;
}
h2::after {
  content: '';
  display: block;
  width: 4rem;
  height: 2px;
  background: repeating-linear-gradient(
    90deg, #f0a500 0px, #f0a500 6px, transparent 6px, transparent 10px
  );
  margin-top: 0.6rem;
}
.text-center h2::after { margin-left: auto; margin-right: auto; }

/* ── Buttons ── */
.btn-primary {
  background: #f0a500;
  border: none;
  color: #1a1200;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  padding: 0.65rem 1.8rem;
  border-radius: 3px;
  box-shadow: 3px 3px 0 #b87800;
  transition: all 0.2s ease;
}
.btn-primary:hover, .btn-primary:focus {
  background: #d48c00;
  color: #1a1200;
  box-shadow: 5px 5px 0 #9a6600;
  transform: translate(-1px, -1px);
}
.btn-outline-primary {
  border: 2px solid #f0a500;
  color: #b87800;
  background: transparent;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 3px;
}
.btn-outline-primary:hover { background: #f0a500; color: #1a1200; border-color: #f0a500; }
.btn-secondary {
  background: #2d2f6b;
  border: none;
  color: #fdf8f0;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 3px;
  box-shadow: 3px 3px 0 #1a1c45;
  transition: all 0.2s ease;
}
.btn-secondary:hover { background: #1e2050; box-shadow: 5px 5px 0 #0f1030; transform: translate(-1px,-1px); }
.btn-outline-secondary { border: 2px solid #2d2f6b; color: #2d2f6b; font-weight: 700; border-radius: 3px; }
.btn-outline-secondary:hover { background: #2d2f6b; color: #fdf8f0; }
.btn-light {
  background: #fffdf5;
  border: 2px solid #e5d8c0;
  color: #2d2010;
  font-weight: 700;
  border-radius: 3px;
}
.btn-light:hover { background: #f5ead5; border-color: #f0a500; }
.btn-dark {
  background: #2d2f6b;
  border-color: #2d2f6b;
  color: #fdf8f0;
  font-weight: 700;
  border-radius: 3px;
}
.btn-dark:hover { background: #1e2050; }
.btn-outline-light { border: 2px solid rgba(253,248,240,0.4); color: #fdf8f0; font-weight: 700; border-radius: 3px; }
.btn-outline-light:hover { background: rgba(253,248,240,0.1); border-color: #fdf8f0; }

/* ── Cards ── */
.card {
  background: #fffbf3;
  border: 1px solid #e5d8c0;
  border-top: 3px solid #f0a500;
  border-radius: 4px;
  color: #2d2010;
  box-shadow: 2px 2px 0 #e5d8c0;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.card:hover {
  box-shadow: 6px 6px 0 rgba(240, 165, 0, 0.25);
  transform: translate(-2px, -2px);
  border-top-color: #d48c00;
}
.card-title { font-family: "EB Garamond", serif; font-size: 1.3rem; font-weight: 600; }
.card-footer { background: #f5ead5; border-top-color: #e5d8c0; }

/* ── Navbar ── */
.navbar {
  background: #2d2f6b !important;
  border-bottom: 3px solid #f0a500;
}
.navbar-brand {
  font-family: "EB Garamond", serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #fdf8f0 !important;
}
.navbar .nav-link {
  font-family: "Nunito", sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #c8b888 !important;
  transition: color 0.2s ease;
}
.navbar .nav-link:hover { color: #f0a500 !important; }
.navbar-light { background: #fdf8f0 !important; border-bottom-color: #f0a500 !important; }
.navbar-light .navbar-brand { color: #2d2f6b !important; }
.navbar-light .nav-link { color: #2d2010 !important; }
.navbar-light .nav-link:hover { color: #c07800 !important; }

/* ── Badges & accents ── */
.badge.bg-primary {
  background: #f0a500 !important;
  color: #1a1200 !important;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
}
.badge.bg-secondary { background: #2d2f6b !important; color: #fdf8f0 !important; }
.text-primary { color: #c07800 !important; }
.border-primary { border-color: #f0a500 !important; }

/* ── Forms & misc ── */
.form-control {
  background: #fffdf5;
  border: 2px solid #e5d8c0;
  color: #2d2010;
  border-radius: 3px;
}
.form-control:focus {
  border-color: #f0a500;
  box-shadow: 0 0 0 3px rgba(240, 165, 0, 0.18);
}
hr { border-color: #e5d8c0; border-style: dashed; opacity: 1; }
.list-group-item { background: #fffbf3; border-color: #e5d8c0; color: #2d2010; }
`,
}
