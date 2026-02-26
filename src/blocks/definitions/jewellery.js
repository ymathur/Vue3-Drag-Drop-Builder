export const jewelleryBlocks = [
  // ── NAVIGATION ────────────────────────────────────────────────────────────
  {
    id: 'jwl-nav-1',
    categoryId: 'navigation',
    label: 'Jewellery – Minimal Dark Nav',
    html: `<nav class="navbar navbar-dark bg-dark navbar-expand-lg py-3" style="background:var(--bs-body-bg)!important;border-bottom:1px solid color-mix(in srgb, var(--bs-primary) 18%, transparent);">
  <div class="container">
    <a class="navbar-brand fw-bold text-white ls-wide" href="#" style="letter-spacing:0.18em;font-size:1.15rem;">MAISON AUREL</a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#jwlNav1" aria-controls="jwlNav1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="jwlNav1">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">
        <li class="nav-item"><a class="nav-link text-white-50 px-3" style="letter-spacing:0.1em;font-size:0.82rem;text-transform:uppercase;" href="#">Collections</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 px-3" style="letter-spacing:0.1em;font-size:0.82rem;text-transform:uppercase;" href="#">Bespoke</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 px-3" style="letter-spacing:0.1em;font-size:0.82rem;text-transform:uppercase;" href="#">Heritage</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 px-3" style="letter-spacing:0.1em;font-size:0.82rem;text-transform:uppercase;" href="#">Atelier</a></li>
      </ul>
      <div class="d-flex align-items-center gap-3">
        <a href="#" class="text-white-50" style="font-size:0.82rem;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;">Search</a>
        <a href="#" class="btn btn-primary btn-sm px-4" style="letter-spacing:0.08em;font-size:0.78rem;">Book a Consultation</a>
      </div>
    </div>
  </div>
</nav>`
  },
  {
    id: 'jwl-nav-2',
    categoryId: 'navigation',
    label: 'Jewellery – Centered Logo Nav',
    html: `<nav class="navbar navbar-dark navbar-expand-lg py-4" style="background:var(--bs-body-bg);border-bottom:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);">
  <div class="container position-relative">
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#jwlNav2" aria-controls="jwlNav2" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="jwlNav2">
      <ul class="navbar-nav gap-lg-1">
        <li class="nav-item"><a class="nav-link text-white-50" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;" href="#">Rings</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;" href="#">Necklaces</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;" href="#">Bracelets</a></li>
      </ul>
      <a class="navbar-brand position-absolute start-50 translate-middle-x text-white fw-bold d-none d-lg-block" href="#" style="letter-spacing:0.25em;font-size:1rem;">AUREL</a>
      <ul class="navbar-nav gap-lg-1 align-items-lg-center">
        <li class="nav-item"><a class="nav-link text-white-50" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;" href="#">Earrings</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;" href="#">Watches</a></li>
        <li class="nav-item ms-2"><a href="#" class="text-primary" style="font-size:1.1rem;" title="Bag">&#9632;</a></li>
      </ul>
    </div>
    <a class="navbar-brand d-lg-none text-white fw-bold ms-auto" href="#" style="letter-spacing:0.25em;font-size:0.95rem;">AUREL</a>
  </div>
</nav>`
  },

  // ── HEROES ────────────────────────────────────────────────────────────────
  {
    id: 'jwl-hero-1',
    categoryId: 'heroes',
    label: 'Jewellery – Full-Bleed Dark Hero',
    html: `<section class="position-relative text-white text-center d-flex align-items-center" style="min-height:92vh;background:url('https://images.unsplash.com/photo-1573408301185-9521ef7dcdf4?w=1400&q=80') center/cover no-repeat;">
  <div class="position-absolute top-0 start-0 w-100 h-100" style="background:color-mix(in srgb, var(--bs-dark) 62%, transparent);"></div>
  <div class="container position-relative py-5">
    <p class="text-primary mb-4" style="letter-spacing:0.35em;font-size:0.75rem;text-transform:uppercase;">The Eternal Collection</p>
    <h1 class="display-2 fw-light mb-5 mx-auto" style="max-width:760px;line-height:1.1;letter-spacing:0.04em;">Crafted to Last<br>a Lifetime</h1>
    <p class="mb-5 mx-auto" style="max-width:520px;color:color-mix(in srgb, var(--bs-dark-text) 65%, transparent);font-size:1.05rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">Each piece from Maison Aurel is conceived in our Paris atelier and set by hand — a testament to five generations of savoir-faire.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-primary px-5 py-3" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;">Discover the Collection</a>
      <a href="#" class="btn btn-outline-light px-5 py-3" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;">Our Heritage</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-hero-2',
    categoryId: 'heroes',
    label: 'Jewellery – Split Editorial Hero',
    html: `<section style="background:var(--bs-body-bg);min-height:88vh;" class="d-flex align-items-center">
  <div class="container-fluid px-0">
    <div class="row g-0 align-items-stretch" style="min-height:88vh;">
      <div class="col-lg-6 d-flex align-items-center justify-content-center order-2 order-lg-1 px-5 py-5" style="background:var(--bs-body-bg);">
        <div style="max-width:480px;">
          <p class="text-primary mb-3" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">New Arrival — 2026</p>
          <h1 class="text-white fw-light mb-4" style="font-size:clamp(2.4rem,5vw,4rem);line-height:1.1;letter-spacing:0.02em;">The Soleil<br>Diamond Ring</h1>
          <p class="mb-5" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);line-height:1.9;font-family:var(--bs-font-sans-serif);">A radiant-cut diamond of exceptional clarity, cradled in 18-carat white gold. The Soleil is an heirloom made for this moment.</p>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <a href="#" class="btn btn-primary px-5 py-3" style="letter-spacing:0.1em;font-size:0.78rem;text-transform:uppercase;">View Ring</a>
            <a href="#" class="text-white-50" style="font-size:0.82rem;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid color-mix(in srgb, var(--bs-dark-text) 30%, transparent);padding-bottom:2px;">Book a Viewing &rarr;</a>
          </div>
          <p class="mt-4" style="color:color-mix(in srgb, var(--bs-primary) 70%, transparent);font-size:0.78rem;letter-spacing:0.08em;">From £4,800 · Complimentary engraving</p>
        </div>
      </div>
      <div class="col-lg-6 order-1 order-lg-2" style="min-height:55vw;max-height:92vh;">
        <img loading="lazy" src="https://images.unsplash.com/photo-1515562141155-7a31e9680ef7?w=800&q=80" alt="Diamond ring closeup" style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>
    </div>
  </div>
</section>`
  },

  // ── FEATURES ──────────────────────────────────────────────────────────────
  {
    id: 'jwl-feat-1',
    categoryId: 'features',
    label: 'Jewellery – 3-Column Icon Features',
    html: `<section class="py-6" style="background:var(--bs-body-bg);padding-top:5rem;padding-bottom:5rem;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">The Maison Promise</p>
      <h2 class="text-white fw-light" style="letter-spacing:0.04em;font-size:2.4rem;">Uncompromising Standards</h2>
    </div>
    <div class="row g-4 mt-2">
      <div class="col-md-4 text-center">
        <div class="mb-4" style="width:56px;height:1px;background:linear-gradient(90deg,transparent,var(--bs-primary),transparent);margin:0 auto 1.5rem;"></div>
        <p class="text-primary mb-2" style="letter-spacing:0.2em;font-size:0.7rem;text-transform:uppercase;">I.</p>
        <h5 class="text-white fw-light mb-3" style="letter-spacing:0.08em;">Ethically Sourced</h5>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.9rem;line-height:1.9;font-family:var(--bs-font-sans-serif);">Every stone is traceable to a conflict-free origin, certified by the Responsible Jewellery Council. We know the story of each gem.</p>
      </div>
      <div class="col-md-4 text-center">
        <div class="mb-4" style="width:56px;height:1px;background:linear-gradient(90deg,transparent,var(--bs-primary),transparent);margin:0 auto 1.5rem;"></div>
        <p class="text-primary mb-2" style="letter-spacing:0.2em;font-size:0.7rem;text-transform:uppercase;">II.</p>
        <h5 class="text-white fw-light mb-3" style="letter-spacing:0.08em;">Handset in Paris</h5>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.9rem;line-height:1.9;font-family:var(--bs-font-sans-serif);">Our master jewellers spend up to 40 hours on a single piece — the hands of artisans trained over decades in the Place Vendôme tradition.</p>
      </div>
      <div class="col-md-4 text-center">
        <div class="mb-4" style="width:56px;height:1px;background:linear-gradient(90deg,transparent,var(--bs-primary),transparent);margin:0 auto 1.5rem;"></div>
        <p class="text-primary mb-2" style="letter-spacing:0.2em;font-size:0.7rem;text-transform:uppercase;">III.</p>
        <h5 class="text-white fw-light mb-3" style="letter-spacing:0.08em;">Lifetime Guarantee</h5>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.9rem;line-height:1.9;font-family:var(--bs-font-sans-serif);">Every creation carries a lifetime craftsmanship guarantee. We will clean, polish and resize your piece for as long as you own it.</p>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-feat-2',
    categoryId: 'features',
    label: 'Jewellery – Split Image Feature',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-lg-5">
        <img loading="lazy" src="https://images.unsplash.com/photo-1567225557594-88887a55d097?w=800&q=80" alt="Jewellery craft" style="width:100%;aspect-ratio:4/5;object-fit:cover;display:block;">
      </div>
      <div class="col-lg-6 offset-lg-1">
        <p class="text-primary mb-3" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Artisan Excellence</p>
        <h2 class="text-white fw-light mb-4" style="font-size:2.6rem;line-height:1.15;letter-spacing:0.02em;">Where Tradition Meets Precision</h2>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);line-height:1.9;margin-bottom:2rem;font-family:var(--bs-font-sans-serif);">In our Lyon atelier, a team of twelve master jewellers — each with over two decades of experience — brings each design from sketch to reality using both ancestral techniques and modern CAD precision.</p>
        <div class="row g-4">
          <div class="col-6">
            <p class="text-primary fw-light mb-1" style="font-size:2rem;letter-spacing:0.02em;">142+</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-size:0.82rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Years of Heritage</p>
          </div>
          <div class="col-6">
            <p class="text-primary fw-light mb-1" style="font-size:2rem;letter-spacing:0.02em;">12k+</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-size:0.82rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Pieces Created</p>
          </div>
          <div class="col-6">
            <p class="text-primary fw-light mb-1" style="font-size:2rem;letter-spacing:0.02em;">40h</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-size:0.82rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Avg. Craft Hours</p>
          </div>
          <div class="col-6">
            <p class="text-primary fw-light mb-1" style="font-size:2rem;letter-spacing:0.02em;">18k</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-size:0.82rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Gold Standard</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ── CONTENT ───────────────────────────────────────────────────────────────
  {
    id: 'jwl-content-1',
    categoryId: 'content',
    label: 'Jewellery – Editorial Long-form Content',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7 text-center">
        <p class="text-primary mb-3" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Our Story</p>
        <h2 class="text-white fw-light mb-5" style="font-size:2.6rem;line-height:1.2;letter-spacing:0.02em;">A Maison Born of Devotion to Beauty</h2>
        <div style="width:40px;height:1px;background:var(--bs-primary);margin:0 auto 2.5rem;"></div>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);line-height:2;font-size:1.02rem;margin-bottom:1.8rem;font-family:var(--bs-font-sans-serif);">Founded in 1882 by Émile Aurel, a Lyonnais goldsmith who believed that jewellery should tell a story, Maison Aurel has dressed the wrists, necks and fingers of those who value the quietly extraordinary.</p>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);line-height:2;font-size:1.02rem;margin-bottom:2.5rem;font-family:var(--bs-font-sans-serif);">Today, under the stewardship of the fifth generation, the maison continues to honour its founding principle: that beauty made with intention endures forever.</p>
        <a href="#" class="btn btn-outline-light px-5 py-3" style="letter-spacing:0.12em;font-size:0.78rem;text-transform:uppercase;">Read Our History</a>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-content-2',
    categoryId: 'content',
    label: 'Jewellery – Alternating Text & Image',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="row g-5 align-items-center mb-6" style="margin-bottom:5rem;">
      <div class="col-lg-6">
        <img loading="lazy" src="https://images.unsplash.com/photo-1602751584552-8ba47a5b4024?w=800&q=80" alt="Gold necklace" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block;">
      </div>
      <div class="col-lg-5 offset-lg-1">
        <p class="text-primary mb-2" style="letter-spacing:0.25em;font-size:0.7rem;text-transform:uppercase;">The Lumière Necklace</p>
        <h3 class="text-white fw-light mb-3" style="font-size:2rem;letter-spacing:0.02em;">Light in Every Link</h3>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);line-height:1.9;font-family:var(--bs-font-sans-serif);">Each link of the Lumière is cast individually and finished by hand, achieving a liquid quality that catches light with every movement. Available in 18k yellow, rose and white gold.</p>
        <a href="#" class="btn btn-primary mt-4 px-4 py-2" style="font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;">Explore Necklaces</a>
      </div>
    </div>
    <div class="row g-5 align-items-center">
      <div class="col-lg-5 order-2 order-lg-1">
        <p class="text-primary mb-2" style="letter-spacing:0.25em;font-size:0.7rem;text-transform:uppercase;">The Éclat Earrings</p>
        <h3 class="text-white fw-light mb-3" style="font-size:2rem;letter-spacing:0.02em;">Effortless Radiance</h3>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);line-height:1.9;font-family:var(--bs-font-sans-serif);">The Éclat collection distills the essence of modern luxury into a single diamond drop — a study in restraint that lets the stone speak entirely for itself.</p>
        <a href="#" class="btn btn-primary mt-4 px-4 py-2" style="font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;">Explore Earrings</a>
      </div>
      <div class="col-lg-6 offset-lg-1 order-1 order-lg-2">
        <img loading="lazy" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" alt="Earrings editorial" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block;">
      </div>
    </div>
  </div>
</section>`
  },

  // ── CARDS ─────────────────────────────────────────────────────────────────
  {
    id: 'jwl-cards-1',
    categoryId: 'cards',
    label: 'Jewellery – Collection Cards',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Curated Selections</p>
      <h2 class="text-white fw-light" style="font-size:2.4rem;letter-spacing:0.03em;">Our Collections</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100" style="background:#111;border:none;border-top:1px solid var(--bs-primary);">
          <img loading="lazy" src="https://images.unsplash.com/photo-1515562141155-7a31e9680ef7?w=800&q=80" class="card-img-top" alt="Eternal Collection" style="height:280px;object-fit:cover;">
          <div class="card-body p-4">
            <p class="text-primary mb-1" style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;">Solitaires</p>
            <h5 class="text-white fw-light mb-2" style="letter-spacing:0.04em;">The Eternal Collection</h5>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-size:0.88rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">Diamond solitaires of supreme clarity, for moments that define a lifetime.</p>
            <a href="#" class="text-primary mt-3 d-block" style="font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">Explore &rarr;</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100" style="background:#111;border:none;border-top:1px solid var(--bs-primary);">
          <img loading="lazy" src="https://images.unsplash.com/photo-1602751584552-8ba47a5b4024?w=800&q=80" class="card-img-top" alt="Heritage Collection" style="height:280px;object-fit:cover;">
          <div class="card-body p-4">
            <p class="text-primary mb-1" style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;">Necklaces</p>
            <h5 class="text-white fw-light mb-2" style="letter-spacing:0.04em;">The Lumière Collection</h5>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-size:0.88rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">18-carat gold necklaces that move like water and shine like morning light.</p>
            <a href="#" class="text-primary mt-3 d-block" style="font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">Explore &rarr;</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100" style="background:#111;border:none;border-top:1px solid var(--bs-primary);">
          <img loading="lazy" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" class="card-img-top" alt="Éclat Collection" style="height:280px;object-fit:cover;">
          <div class="card-body p-4">
            <p class="text-primary mb-1" style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;">Earrings</p>
            <h5 class="text-white fw-light mb-2" style="letter-spacing:0.04em;">The Éclat Collection</h5>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-size:0.88rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">A study in restraint — each piece conceived so the diamond speaks on its own terms.</p>
            <a href="#" class="text-primary mt-3 d-block" style="font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">Explore &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-cards-2',
    categoryId: 'cards',
    label: 'Jewellery – Material & Gemstone Cards',
    html: `<section style="background:var(--bs-dark);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Materials</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">Stones of Distinction</h2>
    </div>
    <div class="row g-4">
      <div class="col-sm-6 col-lg-3">
        <div class="card text-center h-100 py-4" style="background:var(--bs-dark);border:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);border-radius:0;">
          <div class="card-body">
            <div class="mx-auto mb-4 rounded-circle" style="width:64px;height:64px;background:radial-gradient(circle at 35% 35%,#e8e8e8,#aaa);box-shadow:0 0 24px color-mix(in srgb, var(--bs-primary) 20%, transparent);"></div>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.12em;text-transform:uppercase;font-size:0.85rem;">Diamond</h6>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.82rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">D–F colour, VVS clarity. The apex of brilliance.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card text-center h-100 py-4" style="background:var(--bs-dark);border:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);border-radius:0;">
          <div class="card-body">
            <div class="mx-auto mb-4 rounded-circle" style="width:64px;height:64px;background:radial-gradient(circle at 35% 35%,#1a4fa8,#0d2866);box-shadow:0 0 24px rgba(26,79,168,0.3);"></div>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.12em;text-transform:uppercase;font-size:0.85rem;">Sapphire</h6>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.82rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">Kashmir origin. Royal blue of incomparable depth.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card text-center h-100 py-4" style="background:var(--bs-dark);border:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);border-radius:0;">
          <div class="card-body">
            <div class="mx-auto mb-4 rounded-circle" style="width:64px;height:64px;background:radial-gradient(circle at 35% 35%,#c0392b,#6b1a14);box-shadow:0 0 24px rgba(192,57,43,0.3);"></div>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.12em;text-transform:uppercase;font-size:0.85rem;">Ruby</h6>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.82rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">Burmese pigeon blood. Passion distilled into stone.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card text-center h-100 py-4" style="background:var(--bs-dark);border:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);border-radius:0;">
          <div class="card-body">
            <div class="mx-auto mb-4 rounded-circle" style="width:64px;height:64px;background:radial-gradient(circle at 35% 35%,#27ae60,#145a32);box-shadow:0 0 24px rgba(39,174,96,0.3);"></div>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.12em;text-transform:uppercase;font-size:0.85rem;">Emerald</h6>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.82rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">Colombian origin. Nature's most vivid treasure.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ── TESTIMONIALS ──────────────────────────────────────────────────────────
  {
    id: 'jwl-test-1',
    categoryId: 'testimonials',
    label: 'Jewellery – 3-Column Testimonials',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Client Stories</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">Words from Our Patrons</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:#111;border:none;border-top:1px solid var(--bs-primary);">
          <div class="card-body">
            <p class="text-primary mb-3" style="font-size:1.3rem;letter-spacing:0.15em;">"</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 60%, transparent);line-height:1.9;font-size:0.95rem;font-family:var(--bs-font-sans-serif);font-style:italic;">Maison Aurel created our engagement ring with such care and sensitivity. Every detail of the brief was honoured — and exceeded. It is the most beautiful thing I have ever owned.</p>
            <div class="d-flex align-items-center mt-4 gap-3">
              <img loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Isabelle M." style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:1px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);">
              <div>
                <p class="text-white mb-0" style="font-size:0.85rem;letter-spacing:0.06em;">Isabelle M.</p>
                <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.75rem;margin-bottom:0;font-family:var(--bs-font-sans-serif);">Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:#111;border:none;border-top:1px solid var(--bs-primary);">
          <div class="card-body">
            <p class="text-primary mb-3" style="font-size:1.3rem;letter-spacing:0.15em;">"</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 60%, transparent);line-height:1.9;font-size:0.95rem;font-family:var(--bs-font-sans-serif);font-style:italic;">I commissioned a bespoke bracelet for my wife's fortieth birthday. The team guided me through the entire process with extraordinary patience. The result moved her to tears.</p>
            <div class="d-flex align-items-center mt-4 gap-3">
              <img loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Thomas W." style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:1px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);">
              <div>
                <p class="text-white mb-0" style="font-size:0.85rem;letter-spacing:0.06em;">Thomas W.</p>
                <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.75rem;margin-bottom:0;font-family:var(--bs-font-sans-serif);">London, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:#111;border:none;border-top:1px solid var(--bs-primary);">
          <div class="card-body">
            <p class="text-primary mb-3" style="font-size:1.3rem;letter-spacing:0.15em;">"</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 60%, transparent);line-height:1.9;font-size:0.95rem;font-family:var(--bs-font-sans-serif);font-style:italic;">The sapphire ring I purchased is a work of art. Years later it still draws the most elegant compliments. Maison Aurel creates pieces that are truly timeless.</p>
            <div class="d-flex align-items-center mt-4 gap-3">
              <img loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Camille D." style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:1px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);">
              <div>
                <p class="text-white mb-0" style="font-size:0.85rem;letter-spacing:0.06em;">Camille D.</p>
                <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.75rem;margin-bottom:0;font-family:var(--bs-font-sans-serif);">Geneva, Switzerland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-test-2',
    categoryId: 'testimonials',
    label: 'Jewellery – Centered Feature Testimonial',
    html: `<section style="background:var(--bs-dark);padding:6rem 0;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <div style="width:1px;height:60px;background:linear-gradient(180deg,transparent,var(--bs-primary));margin:0 auto 2.5rem;"></div>
        <p class="text-primary mb-4" style="font-size:1.8rem;letter-spacing:0.12em;line-height:1;">"</p>
        <blockquote class="text-white fw-light mb-5" style="font-size:1.55rem;line-height:1.6;letter-spacing:0.02em;font-style:italic;">"Wearing Aurel is to carry a piece of history. The craftsmanship is extraordinary — every detail communicates decades of devotion."</blockquote>
        <div style="width:40px;height:1px;background:var(--bs-primary);margin:0 auto 2rem;"></div>
        <div class="d-flex align-items-center justify-content-center gap-3">
          <img loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Hélène V." style="width:52px;height:52px;border-radius:50%;object-fit:cover;border:1px solid color-mix(in srgb, var(--bs-primary) 50%, transparent);">
          <div class="text-start">
            <p class="text-white mb-0" style="letter-spacing:0.1em;font-size:0.88rem;">Hélène Vautrin</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.75rem;margin:0;font-family:var(--bs-font-sans-serif);letter-spacing:0.08em;text-transform:uppercase;">Art Director, Monaco</p>
          </div>
        </div>
        <div style="width:1px;height:60px;background:linear-gradient(180deg,var(--bs-primary),transparent);margin:2.5rem auto 0;"></div>
      </div>
    </div>
  </div>
</section>`
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  {
    id: 'jwl-cta-1',
    categoryId: 'cta',
    label: 'Jewellery – Dark Full-Width CTA',
    html: `<section class="text-center text-white position-relative" style="background:url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80') center/cover no-repeat;padding:7rem 0;">
  <div class="position-absolute top-0 start-0 w-100 h-100" style="background:rgba(10,10,10,0.78);"></div>
  <div class="container position-relative">
    <p class="text-primary mb-3" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Private Appointments Available</p>
    <h2 class="fw-light mb-4 mx-auto" style="font-size:clamp(2rem,5vw,3.2rem);max-width:700px;line-height:1.15;letter-spacing:0.03em;">Begin Your Bespoke Journey</h2>
    <p class="mb-5 mx-auto" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);max-width:520px;line-height:1.9;font-family:var(--bs-font-sans-serif);">Meet our creative director in our Paris or London atelier. Bring your inspiration, your story, your vision — we will bring it to life in precious metal and stone.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-primary px-5 py-3" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;">Request a Consultation</a>
      <a href="#" class="btn btn-outline-light px-5 py-3" style="letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;">View the Atelier</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-cta-2',
    categoryId: 'cta',
    label: 'Jewellery – Newsletter CTA Banner',
    html: `<section style="background:var(--bs-dark);padding:4rem 0;border-top:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);border-bottom:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-5">
        <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.7rem;text-transform:uppercase;">The Inner Circle</p>
        <h3 class="text-white fw-light mb-0" style="font-size:1.9rem;letter-spacing:0.03em;">First Access to New Collections</h3>
      </div>
      <div class="col-lg-6 offset-lg-1">
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);font-family:var(--bs-font-sans-serif);font-size:0.92rem;line-height:1.8;margin-bottom:1.5rem;">Join our private list for early previews, exclusive invitations to trunk shows, and stories from the atelier — delivered with discernment.</p>
        <form class="d-flex gap-2 flex-wrap">
          <input type="email" class="form-control flex-grow-1" placeholder="Your email address" style="background:rgba(255,255,255,0.06);border:1px solid color-mix(in srgb, var(--bs-primary) 30%, transparent);color:#fff;border-radius:0;font-family:var(--bs-font-sans-serif);font-size:0.88rem;" aria-label="Email address">
          <button type="submit" class="btn btn-primary px-4" style="letter-spacing:0.1em;font-size:0.78rem;text-transform:uppercase;border-radius:0;">Join</button>
        </form>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 25%, transparent);font-size:0.75rem;margin-top:0.75rem;font-family:var(--bs-font-sans-serif);">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  </div>
</section>`
  },

  // ── FORMS ─────────────────────────────────────────────────────────────────
  {
    id: 'jwl-form-1',
    categoryId: 'forms',
    label: 'Jewellery – Consultation Booking Form',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="text-center mb-5">
          <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Private Appointments</p>
          <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">Request a Consultation</h2>
          <div style="width:40px;height:1px;background:var(--bs-primary);margin:1.5rem auto 0;"></div>
        </div>
        <form style="font-family:var(--bs-font-sans-serif);">
          <div class="row g-3">
            <div class="col-sm-6">
              <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">First Name</label>
              <input type="text" class="form-control" placeholder="Isabelle" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-dark-text) 12%, transparent);color:#fff;border-radius:0;font-size:0.9rem;">
            </div>
            <div class="col-sm-6">
              <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Last Name</label>
              <input type="text" class="form-control" placeholder="Morel" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-dark-text) 12%, transparent);color:#fff;border-radius:0;font-size:0.9rem;">
            </div>
            <div class="col-sm-6">
              <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Email</label>
              <input type="email" class="form-control" placeholder="isabelle@example.com" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-dark-text) 12%, transparent);color:#fff;border-radius:0;font-size:0.9rem;">
            </div>
            <div class="col-sm-6">
              <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Preferred Atelier</label>
              <select class="form-select" style="background:var(--bs-light);border:1px solid color-mix(in srgb, var(--bs-dark-text) 12%, transparent);color:color-mix(in srgb, var(--bs-dark-text) 60%, transparent);border-radius:0;font-size:0.9rem;">
                <option>Paris — Place Vendôme</option>
                <option>London — Mayfair</option>
                <option>Geneva — Rue du Rhône</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Occasion &amp; Vision</label>
              <textarea class="form-control" rows="4" placeholder="Tell us about the piece you have in mind — the occasion, the recipient, the feeling you wish to evoke…" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-dark-text) 12%, transparent);color:#fff;border-radius:0;font-size:0.9rem;resize:none;"></textarea>
            </div>
            <div class="col-12 text-center mt-2">
              <button type="submit" class="btn btn-primary px-5 py-3" style="letter-spacing:0.14em;font-size:0.78rem;text-transform:uppercase;border-radius:0;">Send Request</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-form-2',
    categoryId: 'forms',
    label: 'Jewellery – Contact & Enquiry Form',
    html: `<section style="background:var(--bs-dark);padding:5rem 0;">
  <div class="container">
    <div class="row g-5 align-items-start">
      <div class="col-lg-5">
        <p class="text-primary mb-3" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Get in Touch</p>
        <h2 class="text-white fw-light mb-4" style="font-size:2.3rem;line-height:1.2;letter-spacing:0.02em;">We Would Love to Hear from You</h2>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 45%, transparent);line-height:1.9;font-family:var(--bs-font-sans-serif);margin-bottom:2rem;">Whether you seek a bespoke commission, wish to learn more about a specific piece, or simply want to visit our atelier, our team is at your service.</p>
        <div class="mb-3">
          <p class="text-primary mb-1" style="font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;">Paris</p>
          <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;font-family:var(--bs-font-sans-serif);margin:0;">12 Place Vendôme, 75001 Paris<br>+33 1 42 60 00 00</p>
        </div>
        <div>
          <p class="text-primary mb-1" style="font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;">London</p>
          <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;font-family:var(--bs-font-sans-serif);margin:0;">8 Carlos Place, Mayfair, W1K 2AL<br>+44 20 7629 0000</p>
        </div>
      </div>
      <div class="col-lg-6 offset-lg-1">
        <form style="font-family:var(--bs-font-sans-serif);">
          <div class="mb-3">
            <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Full Name</label>
            <input type="text" class="form-control" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-dark-text) 10%, transparent);color:#fff;border-radius:0;font-size:0.9rem;">
          </div>
          <div class="mb-3">
            <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Email Address</label>
            <input type="email" class="form-control" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-dark-text) 10%, transparent);color:#fff;border-radius:0;font-size:0.9rem;">
          </div>
          <div class="mb-3">
            <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Subject</label>
            <select class="form-select" style="background:var(--bs-light);border:1px solid color-mix(in srgb, var(--bs-dark-text) 10%, transparent);color:color-mix(in srgb, var(--bs-dark-text) 60%, transparent);border-radius:0;font-size:0.9rem;">
              <option>Bespoke Commission</option>
              <option>Product Enquiry</option>
              <option>After-Sales &amp; Repairs</option>
              <option>Press &amp; Partnerships</option>
              <option>Other</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="form-label text-white-50" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Message</label>
            <textarea class="form-control" rows="5" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-dark-text) 10%, transparent);color:#fff;border-radius:0;font-size:0.9rem;resize:none;"></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100 py-3" style="letter-spacing:0.14em;font-size:0.78rem;text-transform:uppercase;border-radius:0;">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>`
  },

  // ── PRICING ───────────────────────────────────────────────────────────────
  {
    id: 'jwl-price-1',
    categoryId: 'pricing',
    label: 'Jewellery – Bespoke Service Tiers',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Bespoke Services</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">Commission a Piece</h2>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:#111;border:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);border-radius:0;">
          <div class="card-body">
            <p class="text-primary mb-3" style="letter-spacing:0.2em;font-size:0.7rem;text-transform:uppercase;">Signature</p>
            <p class="text-white fw-light mb-1" style="font-size:2.2rem;letter-spacing:0.02em;">From £1,200</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.8rem;margin-bottom:1.5rem;font-family:var(--bs-font-sans-serif);">Select from our core designs with personalised engraving and metal choice.</p>
            <ul class="list-unstyled mb-4" style="font-family:var(--bs-font-sans-serif);">
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Choice of 18k gold alloy</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Complimentary engraving</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Certificate of authenticity</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> 6-week delivery</li>
            </ul>
            <a href="#" class="btn btn-outline-light w-100 py-2" style="border-radius:0;letter-spacing:0.1em;font-size:0.78rem;text-transform:uppercase;">Enquire</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:var(--bs-dark);border:1px solid var(--bs-primary);border-radius:0;position:relative;">
          <div style="position:absolute;top:-1px;left:50%;transform:translateX(-50%);background:var(--bs-primary);padding:3px 18px;">
            <span style="font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--bs-body-bg);">Preferred</span>
          </div>
          <div class="card-body pt-4">
            <p class="text-primary mb-3" style="letter-spacing:0.2em;font-size:0.7rem;text-transform:uppercase;">Atelier</p>
            <p class="text-white fw-light mb-1" style="font-size:2.2rem;letter-spacing:0.02em;">From £4,800</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.8rem;margin-bottom:1.5rem;font-family:var(--bs-font-sans-serif);">A fully bespoke design process with our studio jewellers.</p>
            <ul class="list-unstyled mb-4" style="font-family:var(--bs-font-sans-serif);">
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Dedicated design consultation</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> 3D wax model approval</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> GIA-certified stone selection</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Lifetime guarantee</li>
            </ul>
            <a href="#" class="btn btn-primary w-100 py-2" style="border-radius:0;letter-spacing:0.1em;font-size:0.78rem;text-transform:uppercase;">Begin Commission</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:#111;border:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);border-radius:0;">
          <div class="card-body">
            <p class="text-primary mb-3" style="letter-spacing:0.2em;font-size:0.7rem;text-transform:uppercase;">Haute Joaillerie</p>
            <p class="text-white fw-light mb-1" style="font-size:2.2rem;letter-spacing:0.02em;">By Quotation</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.8rem;margin-bottom:1.5rem;font-family:var(--bs-font-sans-serif);">An extraordinary one-of-a-kind creation with exceptional stones.</p>
            <ul class="list-unstyled mb-4" style="font-family:var(--bs-font-sans-serif);">
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Private creative director meeting</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Access to rare stone reserves</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> International courier delivery</li>
              <li class="mb-2 d-flex gap-2" style="color:color-mix(in srgb, var(--bs-dark-text) 55%, transparent);font-size:0.88rem;"><span class="text-primary">—</span> Private vault storage option</li>
            </ul>
            <a href="#" class="btn btn-outline-light w-100 py-2" style="border-radius:0;letter-spacing:0.1em;font-size:0.78rem;text-transform:uppercase;">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-price-2',
    categoryId: 'pricing',
    label: 'Jewellery – Care Plan Pricing',
    html: `<section style="background:var(--bs-dark);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">After-Sales Care</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">Preserve Your Investment</h2>
      <p class="mt-3 mx-auto" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);max-width:520px;font-family:var(--bs-font-sans-serif);font-size:0.92rem;line-height:1.8;">Our care plans ensure your piece remains as magnificent decades from now as the day you received it.</p>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-5">
        <div class="card p-4 h-100" style="background:#111;border:none;border-left:2px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);border-radius:0;">
          <div class="card-body">
            <p class="text-primary mb-2" style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;">Essential Care</p>
            <p class="text-white fw-light mb-1" style="font-size:1.8rem;">£75 <span style="font-size:0.85rem;color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);">per year</span></p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.82rem;margin-bottom:1.5rem;font-family:var(--bs-font-sans-serif);">Annual service for everyday fine jewellery.</p>
            <ul class="list-unstyled" style="font-family:var(--bs-font-sans-serif);">
              <li class="mb-2" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;"><span class="text-primary me-2">—</span>Annual clean &amp; polish</li>
              <li class="mb-2" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;"><span class="text-primary me-2">—</span>Prong &amp; setting inspection</li>
              <li class="mb-2" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;"><span class="text-primary me-2">—</span>One complimentary resize</li>
            </ul>
            <a href="#" class="btn btn-outline-light mt-4 px-4 py-2" style="border-radius:0;font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card p-4 h-100" style="background:#111;border:none;border-left:2px solid var(--bs-primary);border-radius:0;">
          <div class="card-body">
            <p class="text-primary mb-2" style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;">Maison Care</p>
            <p class="text-white fw-light mb-1" style="font-size:1.8rem;">£195 <span style="font-size:0.85rem;color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);">per year</span></p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.82rem;margin-bottom:1.5rem;font-family:var(--bs-font-sans-serif);">Comprehensive coverage for haute joaillerie pieces.</p>
            <ul class="list-unstyled" style="font-family:var(--bs-font-sans-serif);">
              <li class="mb-2" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;"><span class="text-primary me-2">—</span>Bi-annual service visits</li>
              <li class="mb-2" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;"><span class="text-primary me-2">—</span>Stone replacement cover</li>
              <li class="mb-2" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;"><span class="text-primary me-2">—</span>Unlimited resizes</li>
              <li class="mb-2" style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);font-size:0.88rem;"><span class="text-primary me-2">—</span>Priority atelier access</li>
            </ul>
            <a href="#" class="btn btn-primary mt-4 px-4 py-2" style="border-radius:0;font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;">Enrol Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ── FOOTERS ───────────────────────────────────────────────────────────────
  {
    id: 'jwl-footer-1',
    categoryId: 'footers',
    label: 'Jewellery – Full Dark Footer',
    html: `<footer style="background:var(--bs-dark);padding:5rem 0 2.5rem;border-top:1px solid color-mix(in srgb, var(--bs-primary) 15%, transparent);">
  <div class="container">
    <div class="row g-5 mb-5">
      <div class="col-lg-4">
        <p class="text-white mb-4" style="letter-spacing:0.3em;font-size:1.05rem;font-weight:300;">MAISON AUREL</p>
        <p style="color:rgba(255,255,255,0.38);font-size:0.88rem;line-height:2;font-family:var(--bs-font-sans-serif);max-width:300px;">Five generations of Parisian jewellery-making. Each piece is an heirloom in the making.</p>
        <div class="d-flex gap-3 mt-4">
          <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Instagram</a>
          <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">Pinterest</a>
          <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;">WeChat</a>
        </div>
      </div>
      <div class="col-sm-4 col-lg-2">
        <p class="text-primary mb-3" style="font-size:0.7rem;letter-spacing:0.25em;text-transform:uppercase;">Collections</p>
        <ul class="list-unstyled" style="font-family:var(--bs-font-sans-serif);">
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Rings</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Necklaces</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Earrings</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Bracelets</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Watches</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-lg-2">
        <p class="text-primary mb-3" style="font-size:0.7rem;letter-spacing:0.25em;text-transform:uppercase;">Maison</p>
        <ul class="list-unstyled" style="font-family:var(--bs-font-sans-serif);">
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Our Heritage</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">The Atelier</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Bespoke</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Careers</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-lg-2">
        <p class="text-primary mb-3" style="font-size:0.7rem;letter-spacing:0.25em;text-transform:uppercase;">Client Services</p>
        <ul class="list-unstyled" style="font-family:var(--bs-font-sans-serif);">
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Contact Us</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Shipping</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Returns</a></li>
          <li class="mb-2"><a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);text-decoration:none;font-size:0.88rem;">Care Plans</a></li>
        </ul>
      </div>
      <div class="col-lg-2">
        <p class="text-primary mb-3" style="font-size:0.7rem;letter-spacing:0.25em;text-transform:uppercase;">Ateliers</p>
        <p style="color:rgba(255,255,255,0.38);font-size:0.82rem;line-height:1.8;font-family:var(--bs-font-sans-serif);">Paris · London<br>Geneva · Tokyo</p>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:1.5rem;" class="d-flex flex-wrap justify-content-between align-items-center gap-2">
      <p style="color:rgba(255,255,255,0.22);font-size:0.75rem;margin:0;font-family:var(--bs-font-sans-serif);">© 2026 Maison Aurel. All rights reserved.</p>
      <div class="d-flex gap-4">
        <a href="#" style="color:rgba(255,255,255,0.22);text-decoration:none;font-size:0.72rem;letter-spacing:0.08em;font-family:var(--bs-font-sans-serif);">Privacy</a>
        <a href="#" style="color:rgba(255,255,255,0.22);text-decoration:none;font-size:0.72rem;letter-spacing:0.08em;font-family:var(--bs-font-sans-serif);">Legal</a>
        <a href="#" style="color:rgba(255,255,255,0.22);text-decoration:none;font-size:0.72rem;letter-spacing:0.08em;font-family:var(--bs-font-sans-serif);">Cookies</a>
      </div>
    </div>
  </div>
</footer>`
  },
  {
    id: 'jwl-footer-2',
    categoryId: 'footers',
    label: 'Jewellery – Minimal Gold Footer',
    html: `<footer style="background:var(--bs-body-bg);padding:3rem 0;border-top:1px solid color-mix(in srgb, var(--bs-primary) 20%, transparent);">
  <div class="container">
    <div class="text-center mb-4">
      <p class="text-white mb-2" style="letter-spacing:0.35em;font-size:0.95rem;font-weight:300;">MAISON AUREL</p>
      <div style="width:36px;height:1px;background:var(--bs-primary);margin:0.75rem auto;"></div>
      <p style="color:color-mix(in srgb, var(--bs-dark-text) 30%, transparent);font-size:0.78rem;font-family:var(--bs-font-sans-serif);letter-spacing:0.06em;">Est. Paris, 1882</p>
    </div>
    <nav class="d-flex flex-wrap justify-content-center gap-4 mb-4">
      <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Collections</a>
      <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Bespoke</a>
      <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Heritage</a>
      <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Ateliers</a>
      <a href="#" style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);text-decoration:none;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Contact</a>
    </nav>
    <p class="text-center" style="color:rgba(255,255,255,0.18);font-size:0.72rem;margin:0;font-family:var(--bs-font-sans-serif);">© 2026 Maison Aurel. Jewellers by Royal Appointment.</p>
  </div>
</footer>`
  },

  // ── GALLERY ───────────────────────────────────────────────────────────────
  {
    id: 'jwl-gallery-1',
    categoryId: 'gallery',
    label: 'Jewellery – Masonry Dark Gallery',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">The Collection</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">A Life in Fine Jewellery</h2>
    </div>
    <div class="row g-3">
      <div class="col-md-6 col-lg-4">
        <img loading="lazy" src="https://images.unsplash.com/photo-1515562141155-7a31e9680ef7?w=800&q=80" alt="Diamond ring" style="width:100%;height:280px;object-fit:cover;display:block;">
      </div>
      <div class="col-md-6 col-lg-4">
        <img loading="lazy" src="https://images.unsplash.com/photo-1602751584552-8ba47a5b4024?w=800&q=80" alt="Gold necklace" style="width:100%;height:280px;object-fit:cover;display:block;">
      </div>
      <div class="col-md-6 col-lg-4">
        <img loading="lazy" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" alt="Earrings" style="width:100%;height:280px;object-fit:cover;display:block;">
      </div>
      <div class="col-md-6 col-lg-3">
        <img loading="lazy" src="https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=800&q=80" alt="Sapphire ring" style="width:100%;height:220px;object-fit:cover;display:block;">
      </div>
      <div class="col-md-6 col-lg-3">
        <img loading="lazy" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" alt="Diamond solitaire" style="width:100%;height:220px;object-fit:cover;display:block;">
      </div>
      <div class="col-md-6 col-lg-3">
        <img loading="lazy" src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" alt="Gold chain" style="width:100%;height:220px;object-fit:cover;display:block;">
      </div>
      <div class="col-md-6 col-lg-3">
        <img loading="lazy" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" alt="Luxury watch" style="width:100%;height:220px;object-fit:cover;display:block;">
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="#" class="btn btn-outline-light px-5 py-2" style="letter-spacing:0.12em;font-size:0.78rem;text-transform:uppercase;border-radius:0;">View Full Archive</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-gallery-2',
    categoryId: 'gallery',
    label: 'Jewellery – Editorial Lookbook Grid',
    html: `<section style="background:var(--bs-dark);padding:5rem 0;">
  <div class="container-fluid px-0">
    <div class="text-center mb-5 px-3">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Lookbook</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">Autumn — Winter 2026</h2>
    </div>
    <div class="row g-1">
      <div class="col-6 col-lg-3">
        <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" alt="Collection dark" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.6s;">
          <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background:linear-gradient(0deg,rgba(0,0,0,0.7),transparent);">
            <p class="text-white mb-0" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Noir Solitaire</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=800&q=80" alt="Sapphire ring" style="width:100%;height:100%;object-fit:cover;display:block;">
          <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background:linear-gradient(0deg,rgba(0,0,0,0.7),transparent);">
            <p class="text-white mb-0" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Kashmir Blue</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1567225557594-88887a55d097?w=800&q=80" alt="Craft" style="width:100%;height:100%;object-fit:cover;display:block;">
          <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background:linear-gradient(0deg,rgba(0,0,0,0.7),transparent);">
            <p class="text-white mb-0" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">Atelier Series</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1458153989938-ba4b959e9d2c?w=800&q=80" alt="Jewellery store" style="width:100%;height:100%;object-fit:cover;display:block;">
          <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background:linear-gradient(0deg,rgba(0,0,0,0.7),transparent);">
            <p class="text-white mb-0" style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">The Maison</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ── SOCIAL PROOF ──────────────────────────────────────────────────────────
  {
    id: 'jwl-social-1',
    categoryId: 'social-proof',
    label: 'Jewellery – Press Logos Bar',
    html: `<section style="background:var(--bs-dark);padding:3.5rem 0;border-top:1px solid color-mix(in srgb, var(--bs-primary) 10%, transparent);border-bottom:1px solid color-mix(in srgb, var(--bs-primary) 10%, transparent);">
  <div class="container">
    <p class="text-center mb-4" style="color:color-mix(in srgb, var(--bs-dark-text) 25%, transparent);font-size:0.72rem;letter-spacing:0.28em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);">As Featured In</p>
    <div class="row align-items-center justify-content-center g-4 g-lg-5">
      <div class="col-auto">
        <p style="color:rgba(255,255,255,0.22);font-size:1.3rem;font-weight:300;letter-spacing:0.25em;margin:0;text-transform:uppercase;">Vogue</p>
      </div>
      <div class="col-auto">
        <p style="color:rgba(255,255,255,0.22);font-size:1.1rem;font-weight:300;letter-spacing:0.2em;margin:0;text-transform:uppercase;">Wallpaper*</p>
      </div>
      <div class="col-auto">
        <p style="color:rgba(255,255,255,0.22);font-size:1.2rem;font-weight:300;letter-spacing:0.2em;margin:0;text-transform:uppercase;">Harper's Bazaar</p>
      </div>
      <div class="col-auto">
        <p style="color:rgba(255,255,255,0.22);font-size:1.15rem;font-weight:300;letter-spacing:0.22em;margin:0;text-transform:uppercase;">The Times</p>
      </div>
      <div class="col-auto">
        <p style="color:rgba(255,255,255,0.22);font-size:1.1rem;font-weight:300;letter-spacing:0.2em;margin:0;text-transform:uppercase;">Financial Times</p>
      </div>
      <div class="col-auto">
        <p style="color:rgba(255,255,255,0.22);font-size:1.1rem;font-weight:300;letter-spacing:0.22em;margin:0;text-transform:uppercase;">Le Figaro</p>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-social-2',
    categoryId: 'social-proof',
    label: 'Jewellery – Awards & Accreditations',
    html: `<section style="background:var(--bs-body-bg);padding:4.5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">Recognition</p>
      <h2 class="text-white fw-light" style="font-size:2.1rem;letter-spacing:0.04em;">Trusted by the Discerning</h2>
    </div>
    <div class="row g-4 justify-content-center text-center">
      <div class="col-sm-6 col-lg-3">
        <div style="border:1px solid color-mix(in srgb, var(--bs-primary) 20%, transparent);padding:2rem 1.5rem;">
          <p class="text-primary mb-2" style="font-size:1.8rem;font-weight:300;letter-spacing:0.03em;">RJC</p>
          <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);margin:0;">Certified Member</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div style="border:1px solid color-mix(in srgb, var(--bs-primary) 20%, transparent);padding:2rem 1.5rem;">
          <p class="text-primary mb-2" style="font-size:1.8rem;font-weight:300;letter-spacing:0.03em;">GIA</p>
          <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);margin:0;">Graduate Gemologists</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div style="border:1px solid color-mix(in srgb, var(--bs-primary) 20%, transparent);padding:2rem 1.5rem;">
          <p class="text-primary mb-2" style="font-size:1.8rem;font-weight:300;letter-spacing:0.03em;">5★</p>
          <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);margin:0;">Trustpilot Rating</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div style="border:1px solid color-mix(in srgb, var(--bs-primary) 20%, transparent);padding:2rem 1.5rem;">
          <p class="text-primary mb-2" style="font-size:1.8rem;font-weight:300;letter-spacing:0.03em;">VIP</p>
          <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;font-family:var(--bs-font-sans-serif);margin:0;">By Royal Appointment</p>
        </div>
      </div>
    </div>
    <p class="text-center mt-5" style="color:color-mix(in srgb, var(--bs-dark-text) 20%, transparent);font-size:0.78rem;font-family:var(--bs-font-sans-serif);letter-spacing:0.06em;">Over 12,000 clients across 38 countries trust Maison Aurel</p>
  </div>
</section>`
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  {
    id: 'jwl-process-1',
    categoryId: 'process',
    label: 'Jewellery – Bespoke Journey Steps',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">The Bespoke Journey</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">How We Create Your Piece</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-6 col-lg-3">
        <div style="border-top:1px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);padding-top:1.8rem;">
          <p class="text-primary mb-3" style="font-size:2rem;font-weight:300;line-height:1;">01</p>
          <h5 class="text-white fw-light mb-3" style="letter-spacing:0.06em;">Discovery</h5>
          <p style="color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.9;font-family:var(--bs-font-sans-serif);">A private consultation with our creative director. We listen to your story, your aesthetic, and the feeling you wish to capture.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div style="border-top:1px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);padding-top:1.8rem;">
          <p class="text-primary mb-3" style="font-size:2rem;font-weight:300;line-height:1;">02</p>
          <h5 class="text-white fw-light mb-3" style="letter-spacing:0.06em;">Design</h5>
          <p style="color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.9;font-family:var(--bs-font-sans-serif);">Our atelier produces hand-drawn sketches and 3D renderings, refining the design until it aligns precisely with your vision.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div style="border-top:1px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);padding-top:1.8rem;">
          <p class="text-primary mb-3" style="font-size:2rem;font-weight:300;line-height:1;">03</p>
          <h5 class="text-white fw-light mb-3" style="letter-spacing:0.06em;">Creation</h5>
          <p style="color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.9;font-family:var(--bs-font-sans-serif);">Your piece is cast, hand-finished and set by our master jewellers — a process of between four and twelve weeks of dedicated craft.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div style="border-top:1px solid color-mix(in srgb, var(--bs-primary) 40%, transparent);padding-top:1.8rem;">
          <p class="text-primary mb-3" style="font-size:2rem;font-weight:300;line-height:1;">04</p>
          <h5 class="text-white fw-light mb-3" style="letter-spacing:0.06em;">Presentation</h5>
          <p style="color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.9;font-family:var(--bs-font-sans-serif);">We present your creation in our signature black lacquer box. The beginning of a lifetime's relationship between you and your jewellery.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-process-2',
    categoryId: 'process',
    label: 'Jewellery – Craftsmanship Process with Image',
    html: `<section style="background:var(--bs-dark);padding:5rem 0;">
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-lg-5">
        <img loading="lazy" src="https://images.unsplash.com/photo-1567225557594-88887a55d097?w=800&q=80" alt="Jewellery making" style="width:100%;aspect-ratio:3/4;object-fit:cover;display:block;">
      </div>
      <div class="col-lg-6 offset-lg-1">
        <p class="text-primary mb-3" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">The Craft</p>
        <h2 class="text-white fw-light mb-5" style="font-size:2.3rem;line-height:1.2;letter-spacing:0.02em;">Twelve Steps from Sketch to Heirloom</h2>
        <div class="d-flex flex-column gap-4">
          <div class="d-flex gap-4 align-items-start">
            <span class="text-primary fw-light" style="font-size:1.4rem;line-height:1;flex-shrink:0;min-width:2rem;">I</span>
            <div>
              <h6 class="text-white fw-light mb-1" style="letter-spacing:0.08em;">Hand-Drawn Design Brief</h6>
              <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.85rem;line-height:1.8;font-family:var(--bs-font-sans-serif);margin:0;">Pencil sketches capture the spirit of the piece before any tool is lifted.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start">
            <span class="text-primary fw-light" style="font-size:1.4rem;line-height:1;flex-shrink:0;min-width:2rem;">II</span>
            <div>
              <h6 class="text-white fw-light mb-1" style="letter-spacing:0.08em;">Lost-Wax Casting</h6>
              <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.85rem;line-height:1.8;font-family:var(--bs-font-sans-serif);margin:0;">A centuries-old technique refined by Maison Aurel over five generations.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start">
            <span class="text-primary fw-light" style="font-size:1.4rem;line-height:1;flex-shrink:0;min-width:2rem;">III</span>
            <div>
              <h6 class="text-white fw-light mb-1" style="letter-spacing:0.08em;">Stone Setting by Hand</h6>
              <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.85rem;line-height:1.8;font-family:var(--bs-font-sans-serif);margin:0;">Each stone is seated individually under magnification, ensuring perfect security and brilliance.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start">
            <span class="text-primary fw-light" style="font-size:1.4rem;line-height:1;flex-shrink:0;min-width:2rem;">IV</span>
            <div>
              <h6 class="text-white fw-light mb-1" style="letter-spacing:0.08em;">Final Quality Audit</h6>
              <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.85rem;line-height:1.8;font-family:var(--bs-font-sans-serif);margin:0;">Sixty-point inspection by our head gemmologist before any piece leaves the atelier.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ── PRODUCTS ──────────────────────────────────────────────────────────────
  {
    id: 'jwl-prod-1',
    categoryId: 'products',
    label: 'Jewellery – Dark Product Grid',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="text-center mb-5">
      <p class="text-primary mb-2" style="letter-spacing:0.3em;font-size:0.72rem;text-transform:uppercase;">New Arrivals</p>
      <h2 class="text-white fw-light" style="font-size:2.3rem;letter-spacing:0.03em;">The Latest Pieces</h2>
    </div>
    <div class="row g-4">
      <div class="col-sm-6 col-lg-3">
        <div style="background:#111;">
          <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1515562141155-7a31e9680ef7?w=800&q=80" alt="Diamond Ring" style="width:100%;height:100%;object-fit:cover;display:block;">
            <div class="position-absolute top-0 end-0 m-3" style="background:var(--bs-primary);padding:3px 10px;">
              <span style="font-size:0.62rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--bs-body-bg);">New</span>
            </div>
          </div>
          <div class="p-3">
            <p class="text-primary mb-1" style="font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;">Solitaire Ring</p>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.04em;">Soleil Diamond Ring</h6>
            <p class="text-white mb-3" style="font-size:0.92rem;font-family:var(--bs-font-sans-serif);">From £4,800</p>
            <a href="#" class="btn btn-primary w-100 py-2" style="border-radius:0;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;">View Piece</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div style="background:#111;">
          <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1602751584552-8ba47a5b4024?w=800&q=80" alt="Gold Necklace" style="width:100%;height:100%;object-fit:cover;display:block;">
          </div>
          <div class="p-3">
            <p class="text-primary mb-1" style="font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;">Necklace</p>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.04em;">Lumière Gold Chain</h6>
            <p class="text-white mb-3" style="font-size:0.92rem;font-family:var(--bs-font-sans-serif);">From £2,200</p>
            <a href="#" class="btn btn-primary w-100 py-2" style="border-radius:0;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;">View Piece</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div style="background:#111;">
          <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=800&q=80" alt="Sapphire Ring" style="width:100%;height:100%;object-fit:cover;display:block;">
          </div>
          <div class="p-3">
            <p class="text-primary mb-1" style="font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;">Cocktail Ring</p>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.04em;">Kashmir Sapphire Ring</h6>
            <p class="text-white mb-3" style="font-size:0.92rem;font-family:var(--bs-font-sans-serif);">From £7,400</p>
            <a href="#" class="btn btn-primary w-100 py-2" style="border-radius:0;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;">View Piece</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div style="background:#111;">
          <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" alt="Earrings" style="width:100%;height:100%;object-fit:cover;display:block;">
          </div>
          <div class="p-3">
            <p class="text-primary mb-1" style="font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;">Earrings</p>
            <h6 class="text-white fw-light mb-2" style="letter-spacing:0.04em;">Éclat Diamond Drop</h6>
            <p class="text-white mb-3" style="font-size:0.92rem;font-family:var(--bs-font-sans-serif);">From £3,600</p>
            <a href="#" class="btn btn-primary w-100 py-2" style="border-radius:0;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;">View Piece</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'jwl-prod-2',
    categoryId: 'products',
    label: 'Jewellery – Featured Product Detail',
    html: `<section style="background:var(--bs-body-bg);padding:5rem 0;">
  <div class="container">
    <div class="row g-5 align-items-start">
      <div class="col-lg-6">
        <div class="mb-3">
          <img loading="lazy" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" alt="Diamond solitaire main" style="width:100%;aspect-ratio:4/5;object-fit:cover;display:block;">
        </div>
        <div class="row g-2">
          <div class="col-4">
            <img loading="lazy" src="https://images.unsplash.com/photo-1515562141155-7a31e9680ef7?w=800&q=80" alt="Ring view 1" style="width:100%;height:80px;object-fit:cover;opacity:0.7;">
          </div>
          <div class="col-4">
            <img loading="lazy" src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" alt="Ring view 2" style="width:100%;height:80px;object-fit:cover;opacity:0.7;">
          </div>
          <div class="col-4">
            <img loading="lazy" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" alt="Ring view 3" style="width:100%;height:80px;object-fit:cover;opacity:0.7;">
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <p class="text-primary mb-2" style="letter-spacing:0.25em;font-size:0.7rem;text-transform:uppercase;">The Eternal Collection</p>
        <h2 class="text-white fw-light mb-2" style="font-size:2.2rem;letter-spacing:0.02em;">Radiance Solitaire Ring</h2>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 35%, transparent);font-size:0.78rem;letter-spacing:0.1em;font-family:var(--bs-font-sans-serif);margin-bottom:1.5rem;">REF. AUR-ETR-0042</p>
        <p class="text-white mb-4" style="font-size:1.6rem;font-weight:300;letter-spacing:0.04em;">£6,400</p>
        <p style="color:color-mix(in srgb, var(--bs-dark-text) 50%, transparent);line-height:1.9;font-family:var(--bs-font-sans-serif);font-size:0.92rem;margin-bottom:2rem;">A 1.2-carat round brilliant diamond of D colour and VVS1 clarity, set in a six-claw platinum mount. The Radiance is a timeless declaration of love, designed to be worn every day and cherished for generations.</p>
        <div class="mb-3">
          <p style="font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-family:var(--bs-font-sans-serif);margin-bottom:0.5rem;">Metal</p>
          <div class="d-flex gap-2">
            <button style="width:36px;height:36px;background:#e8e4d8;border:2px solid var(--bs-primary);cursor:pointer;" title="Platinum"></button>
            <button style="width:36px;height:36px;background:var(--bs-primary);border:1px solid color-mix(in srgb, var(--bs-dark-text) 20%, transparent);cursor:pointer;" title="18k Yellow Gold"></button>
            <button style="width:36px;height:36px;background:#d4b8b0;border:1px solid color-mix(in srgb, var(--bs-dark-text) 20%, transparent);cursor:pointer;" title="18k Rose Gold"></button>
          </div>
        </div>
        <div class="mb-4">
          <p style="font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-family:var(--bs-font-sans-serif);margin-bottom:0.5rem;">Ring Size</p>
          <select class="form-select" style="background:color-mix(in srgb, var(--bs-dark-text)  5%, transparent);border:1px solid color-mix(in srgb, var(--bs-primary) 30%, transparent);color:color-mix(in srgb, var(--bs-dark-text) 70%, transparent);border-radius:0;font-size:0.88rem;max-width:180px;font-family:var(--bs-font-sans-serif);">
            <option>Select Size</option>
            <option>H (UK) / 4 (US)</option>
            <option>J (UK) / 5 (US)</option>
            <option>L (UK) / 6 (US)</option>
            <option>N (UK) / 7 (US)</option>
            <option>P (UK) / 8 (US)</option>
          </select>
        </div>
        <div class="d-flex gap-3 mb-4">
          <a href="#" class="btn btn-primary flex-grow-1 py-3" style="border-radius:0;letter-spacing:0.12em;font-size:0.8rem;text-transform:uppercase;">Add to Wish List</a>
          <a href="#" class="btn btn-outline-light py-3 px-4" style="border-radius:0;letter-spacing:0.1em;font-size:0.8rem;text-transform:uppercase;">Book a Viewing</a>
        </div>
        <div class="d-flex gap-4 flex-wrap" style="border-top:1px solid rgba(255,255,255,0.07);padding-top:1.5rem;">
          <div>
            <p class="text-primary mb-0" style="font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;">Delivery</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.8rem;margin:0;font-family:var(--bs-font-sans-serif);">4–8 weeks</p>
          </div>
          <div>
            <p class="text-primary mb-0" style="font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;">Guarantee</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.8rem;margin:0;font-family:var(--bs-font-sans-serif);">Lifetime</p>
          </div>
          <div>
            <p class="text-primary mb-0" style="font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;">Certificate</p>
            <p style="color:color-mix(in srgb, var(--bs-dark-text) 40%, transparent);font-size:0.8rem;margin:0;font-family:var(--bs-font-sans-serif);">GIA included</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  }
]
