export default {
  id: 'saas',
  name: 'SaaS',
  description: 'Vibrant violet & cyan gradients. Built for modern SaaS products that demand attention.',
  group:       'core',
  thumbnail: ['#7c3aed', '#06b6d4', '#0a0a0f', '#e2e8f0'],
  googleFonts: ['Inter', 'Poppins'],
  vars: {
    '--bs-primary':            '#7c3aed',
    '--bs-primary-rgb':        '124, 58, 237',
    '--bs-secondary':          '#06b6d4',
    '--bs-secondary-rgb':      '6, 182, 212',
    '--bs-success':            '#10b981',
    '--bs-success-rgb':        '16, 185, 129',
    '--bs-danger':             '#f43f5e',
    '--bs-danger-rgb':         '244, 63, 94',
    '--bs-body-bg':            '#0a0a0f',
    '--bs-body-bg-rgb':        '10, 10, 15',
    '--bs-body-color':         '#e2e8f0',
    '--bs-heading-color':      '#f1f5f9',
    '--bs-link-color':         '#a78bfa',
    '--bs-link-hover-color':   '#c4b5fd',
    '--bs-border-color':       '#1e1b4b',
    '--bs-font-sans-serif':    '"Inter", sans-serif',
    '--bs-body-font-size':     '1rem',
    '--bs-body-line-height':   '1.6',
    '--bs-border-radius':      '0.5rem',
    '--bs-border-radius-sm':   '0.35rem',
    '--bs-border-radius-lg':   '0.75rem',
    '--bs-border-radius-pill': '50rem',
  },
  extraCss: `
/* ── SaaS Theme ── */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap');

body { background: #0a0a0f !important; color: #e2e8f0 !important; }
section, .section { background-color: #0a0a0f !important; }
.bg-light { background-color: #13131f !important; color: #e2e8f0 !important; }
.bg-white { background-color: #13131f !important; }

h1, h2, h3, h4, h5, h6 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #f1f5f9;
}

.btn-primary {
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  border: none;
  font-weight: 600;
}
.btn-primary:hover {
  background: linear-gradient(135deg, #6d28d9, #0891b2);
  border: none;
}
.btn-outline-primary { border-color: #7c3aed; color: #a78bfa; }
.btn-outline-primary:hover { background: #7c3aed; color: #fff; }
.btn-light { background-color: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.12); color: #f1f5f9; }
.btn-light:hover { background-color: rgba(255,255,255,0.15); }
.btn-outline-light { border-color: rgba(255,255,255,0.3); color: #f1f5f9; }

.card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #e2e8f0;
  backdrop-filter: blur(10px);
}
.navbar { background: rgba(10,10,15,0.85) !important; backdrop-filter: blur(10px); border-bottom: 1px solid rgba(124,58,237,0.3); }
.navbar-light .navbar-brand, .navbar-light .nav-link { color: #e2e8f0 !important; }

p, .lead { color: #94a3b8; }
.text-muted { color: #64748b !important; }

.badge.bg-primary { background: linear-gradient(135deg, #7c3aed, #06b6d4) !important; }
`,
}
