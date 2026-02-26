export default {
  id:          'trailer',
  name:        'Trailer',
  group:       'industry',
  description: 'Forest dark & high-vis orange. Built for rugged adventure brands and outdoor lifestyles.',
  thumbnail:   ['#141e14', '#e8630a', '#1e3a1e', '#a8c8a8'],

  googleFonts: ['Oswald', 'Inter'],

  vars: {
    '--bs-primary':            '#e8630a',
    '--bs-primary-rgb':        '232, 99, 10',
    '--bs-secondary':          '#4a8a4a',
    '--bs-secondary-rgb':      '74, 138, 74',
    '--bs-success':            '#4caf50',
    '--bs-success-rgb':        '76, 175, 80',
    '--bs-danger':             '#e53935',
    '--bs-danger-rgb':         '229, 57, 53',
    '--bs-body-bg':            '#141e14',
    '--bs-body-bg-rgb':        '20, 30, 20',
    '--bs-body-color':         '#c8dcc8',
    '--bs-heading-color':      '#e8f4e8',
    '--bs-link-color':         '#e8630a',
    '--bs-link-hover-color':   '#ff7a22',
    '--bs-border-color':       '#253525',
    '--bs-font-sans-serif':    '"Inter", sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.62',
    '--bs-border-radius':      '3px',
    '--bs-border-radius-sm':   '2px',
    '--bs-border-radius-lg':   '5px',
    '--bs-border-radius-pill': '50rem',
    // Surface palette — consumed by buildComponentCss for .bg-dark / .bg-light
    '--bs-dark':       '#0a100a',
    '--bs-light':      '#1a2a1a',
    '--bs-dark-text':  '#e8f4e8',
    '--bs-light-text': '#c8dcc8',
  },

  extraCss: `
/* ══════════════════════════════════════════════
   Trailer — Adventure / Outdoor Theme
   Palette: Forest #141e14 · Hi-Vis Orange #e8630a · Sage #a8c8a8
   Fonts: Oswald (headings) · Inter (body)
   ══════════════════════════════════════════════ */

body { background: #141e14 !important; color: #c8dcc8 !important; }
section:not([class*="bg-"]) { background-color: #141e14 !important; }
.bg-light  { background-color: var(--bs-light) !important; color: var(--bs-light-text) !important; }
.bg-white  { background-color: var(--bs-body-bg) !important; color: var(--bs-body-color) !important; }
.bg-dark   { background-color: var(--bs-dark)  !important; color: var(--bs-dark-text)  !important; }
.bg-primary { background-color: var(--bs-primary) !important; color: #fff !important; }

/* ── Typography ── */
h1, h2, h3, h4, h5, h6 {
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #e8f4e8;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.15;
}
.display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  color: #e8f4e8;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.lead {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  color: #8ab08a;
  line-height: 1.7;
}
p, body { font-family: var(--bs-font-sans-serif); }
.text-muted { color: #5a805a !important; }

/* ── Heading indicator ── */
h2::after {
  content: '';
  display: block;
  width: 2.5rem;
  height: 3px;
  background: #e8630a;
  margin-top: 0.5rem;
  border-radius: 2px;
}
.text-center h2::after { margin-left: auto; margin-right: auto; }

/* ── Buttons ── */
.btn-primary {
  background: #e8630a;
  border: 2px solid #e8630a;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 0.88rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.65rem 1.8rem;
  border-radius: 2px;
  transition: all 0.22s ease;
}
.btn-primary:hover, .btn-primary:focus {
  background: #c85208;
  border-color: #c85208;
  color: #fff;
  box-shadow: 0 0 24px rgba(232, 99, 10, 0.45);
}
.btn-outline-primary {
  border: 2px solid #e8630a;
  color: #e8630a;
  background: transparent;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 0.88rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
}
.btn-outline-primary:hover { background: #e8630a; color: #fff; }
.btn-secondary {
  background: #4a8a4a;
  border: 2px solid #4a8a4a;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 0.88rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
}
.btn-secondary:hover { background: #356835; border-color: #356835; }
.btn-outline-secondary { border: 2px solid #4a8a4a; color: #4a8a4a; font-family: "Oswald", sans-serif; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; }
.btn-outline-secondary:hover { background: #4a8a4a; color: #fff; }
.btn-light, .btn-outline-light {
  background: transparent;
  border: 2px solid rgba(200, 220, 200, 0.35);
  color: #c8dcc8;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 0.88rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
}
.btn-light:hover, .btn-outline-light:hover {
  background: rgba(200, 220, 200, 0.1);
  border-color: #c8dcc8;
  color: #e8f4e8;
}
.btn-dark {
  background: #0a100a;
  border-color: #0a100a;
  color: #c8dcc8;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
}
.btn-dark:hover { background: #050805; }

/* ── Cards ── */
.card {
  background: #1a2a1a;
  border: 1px solid #253525;
  border-top: 3px solid #e8630a;
  border-radius: 3px;
  color: #c8dcc8;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.card:hover {
  box-shadow: 0 10px 40px rgba(232, 99, 10, 0.22), 0 2px 8px rgba(0,0,0,0.5);
  transform: translateY(-3px);
  border-top-color: #ff7a22;
}
.card-title {
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #e8f4e8;
}
.card-text { color: #8ab08a; }
.card-footer { background: #111a11; border-top-color: #253525; }
.card-img-top { filter: saturate(0.9) contrast(1.05); transition: filter 0.3s ease; }
.card:hover .card-img-top { filter: saturate(1.1) contrast(1.08); }

/* ── Navbar ── */
.navbar {
  background: #0a100a !important;
  border-bottom: 2px solid #e8630a;
}
.navbar-brand {
  font-family: "Oswald", sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #e8f4e8 !important;
}
.navbar .nav-link {
  font-family: "Oswald", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8ab08a !important;
  transition: color 0.2s ease;
}
.navbar .nav-link:hover { color: #e8630a !important; }

/* ── Badges & accents ── */
.badge.bg-primary { background: #e8630a !important; color: #fff !important; font-family: "Oswald", sans-serif; font-weight: 500; letter-spacing: 0.1em; }
.badge.bg-secondary { background: #4a8a4a !important; color: #fff !important; }
.text-primary { color: #e8630a !important; }
.border-primary { border-color: #e8630a !important; }

/* ── Forms & misc ── */
.form-control {
  background: #1a2a1a;
  border: 2px solid #253525;
  color: #c8dcc8;
  border-radius: 2px;
  font-family: "Inter", sans-serif;
}
.form-control:focus {
  background: #1a2a1a;
  border-color: #e8630a;
  color: #e8f4e8;
  box-shadow: 0 0 0 3px rgba(232, 99, 10, 0.2);
}
.form-label { font-family: "Oswald", sans-serif; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: #6a9a6a; }
hr { border-color: #253525; opacity: 1; }
.list-group-item { background: #1a2a1a; border-color: #253525; color: #c8dcc8; }
`,
}
