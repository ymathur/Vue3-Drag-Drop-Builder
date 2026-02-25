export default {
  id:          'furniture',
  name:        'Furniture',
  group:       'industry',
  description: 'Warm terracotta & aged linen. Boutique interior design with timeless Earthy Luxe warmth.',
  thumbnail:   ['#fef6ec', '#c27a56', '#3d2b1f', '#e8d5c0'],

  googleFonts: ['Playfair Display', 'Lato'],

  vars: {
    '--bs-primary':            '#c27a56',
    '--bs-primary-rgb':        '194, 122, 86',
    '--bs-secondary':          '#7a5035',
    '--bs-secondary-rgb':      '122, 80, 53',
    '--bs-success':            '#6b8f6b',
    '--bs-success-rgb':        '107, 143, 107',
    '--bs-danger':             '#b85450',
    '--bs-danger-rgb':         '184, 84, 80',
    '--bs-body-bg':            '#fef6ec',
    '--bs-body-bg-rgb':        '254, 246, 236',
    '--bs-body-color':         '#3d2b1f',
    '--bs-heading-color':      '#2a1a0f',
    '--bs-link-color':         '#c27a56',
    '--bs-link-hover-color':   '#9c5c38',
    '--bs-border-color':       '#e8d5c0',
    '--bs-font-sans-serif':    '"Lato", sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.72',
    '--bs-border-radius':      '6px',
    '--bs-border-radius-sm':   '4px',
    '--bs-border-radius-lg':   '10px',
    '--bs-border-radius-pill': '50rem',
  },

  extraCss: `
/* ══════════════════════════════════════════════
   Furniture — Earthy Luxe Theme
   Palette: Linen #fef6ec · Terracotta #c27a56 · Walnut #3d2b1f
   Fonts: Playfair Display (headings) · Lato (body)
   ══════════════════════════════════════════════ */

body { background: #fef6ec !important; color: #3d2b1f !important; }
section:not([class*="bg-"]) { background-color: #fef6ec !important; }
.bg-light  { background-color: #f5e8d5 !important; color: #3d2b1f !important; }
.bg-white  { background-color: #ffffff !important; color: #3d2b1f !important; }
.bg-dark   { background-color: #3d2b1f !important; color: #fef6ec !important; }
.bg-primary { background-color: #c27a56 !important; color: #fff !important; }

/* ── Typography ── */
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", "Georgia", serif;
  font-weight: 700;
  color: #2a1a0f;
  letter-spacing: -0.01em;
  line-height: 1.2;
}
.display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  color: #2a1a0f;
  letter-spacing: -0.02em;
}
.lead {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 1.12rem;
  color: #6b4a30;
  line-height: 1.8;
}
p, body { font-family: "Lato", sans-serif; }
.text-muted { color: #9a7a60 !important; }
.text-white { color: #fef6ec !important; }

/* ── Heading flourish ── */
h2::after {
  content: '';
  display: block;
  width: 3rem;
  height: 2px;
  background: linear-gradient(90deg, #c27a56, rgba(194,122,86,0));
  margin-top: 0.6rem;
  border-radius: 2px;
}
.text-center h2::after { margin-left: auto; margin-right: auto; }

/* ── Buttons ── */
.btn-primary {
  background: #c27a56;
  border: 2px solid #c27a56;
  color: #ffffff;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.65rem 1.8rem;
  border-radius: 4px;
  transition: all 0.28s ease;
}
.btn-primary:hover, .btn-primary:focus {
  background: #9c5c38;
  border-color: #9c5c38;
  color: #fff;
  box-shadow: 0 6px 20px rgba(194, 122, 86, 0.3);
  transform: translateY(-1px);
}
.btn-outline-primary {
  border: 2px solid #c27a56;
  color: #c27a56;
  background: transparent;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
}
.btn-outline-primary:hover { background: #c27a56; color: #fff; border-color: #c27a56; }
.btn-secondary {
  background: #7a5035;
  border-color: #7a5035;
  color: #fef6ec;
  font-weight: 700;
}
.btn-secondary:hover { background: #5e3820; border-color: #5e3820; }
.btn-outline-secondary { border: 2px solid #7a5035; color: #7a5035; font-weight: 700; }
.btn-outline-secondary:hover { background: #7a5035; color: #fef6ec; }
.btn-light {
  background: #fff;
  border: 2px solid #e8d5c0;
  color: #3d2b1f;
  font-weight: 600;
  transition: all 0.2s ease;
}
.btn-light:hover { background: #f5e8d5; border-color: #c27a56; color: #2a1a0f; }
.btn-dark {
  background: #3d2b1f;
  border-color: #3d2b1f;
  color: #fef6ec;
  font-weight: 700;
}
.btn-dark:hover { background: #2a1a0f; border-color: #2a1a0f; }
.btn-outline-light {
  border: 2px solid rgba(254, 246, 236, 0.5);
  color: #fef6ec;
  font-weight: 600;
}
.btn-outline-light:hover { background: rgba(254, 246, 236, 0.12); border-color: #fef6ec; color: #fef6ec; }

/* ── Cards ── */
.card {
  background: #ffffff;
  border: 1px solid #e8d5c0;
  border-radius: 8px;
  color: #3d2b1f;
  box-shadow: 0 2px 16px rgba(61, 43, 31, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;
}
.card:hover {
  box-shadow: 0 10px 40px rgba(194, 122, 86, 0.18);
  transform: translateY(-4px);
}
.card-title { font-family: "Playfair Display", serif; font-weight: 700; font-size: 1.2rem; }
.card-subtitle { font-weight: 300; color: #9a7a60; letter-spacing: 0.04em; }
.card-footer { background: #fdf0e0; border-top-color: #e8d5c0; }
.card-body { padding: 1.4rem; }
.card-img-top { object-fit: cover; aspect-ratio: 4/3; }

/* ── Navbar ── */
.navbar {
  background: #fef6ec !important;
  border-bottom: 1px solid #e8d5c0;
  box-shadow: 0 2px 12px rgba(61, 43, 31, 0.06);
}
.navbar-brand {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: 0.02em;
  color: #2a1a0f !important;
}
.navbar .nav-link {
  font-family: "Lato", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #5a3a20 !important;
  transition: color 0.2s ease;
}
.navbar .nav-link:hover { color: #c27a56 !important; }
.navbar-dark { background: #3d2b1f !important; border-bottom-color: #2a1a0f !important; }
.navbar-dark .navbar-brand { color: #fef6ec !important; }
.navbar-dark .nav-link { color: #d4b898 !important; }
.navbar-dark .nav-link:hover { color: #c27a56 !important; }

/* ── Badges & accents ── */
.badge.bg-primary { background: #c27a56 !important; color: #fff !important; font-weight: 700; }
.badge.bg-secondary { background: #7a5035 !important; color: #fef6ec !important; }
.text-primary { color: #c27a56 !important; }
.border-primary { border-color: #c27a56 !important; }

/* ── Lists & forms ── */
.list-group-item { background: #fff; border-color: #e8d5c0; color: #3d2b1f; }
hr { border-color: #e8d5c0; opacity: 1; }
.form-control {
  background: #fff;
  border: 1px solid #e8d5c0;
  color: #3d2b1f;
  border-radius: 4px;
}
.form-control:focus {
  border-color: #c27a56;
  box-shadow: 0 0 0 3px rgba(194, 122, 86, 0.15);
}

/* ── Section alternation ── */
.bg-light .card { background: #fff; }
`,
}
