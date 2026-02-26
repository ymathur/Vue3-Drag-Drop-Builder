export const furnitureBlocks = [
  // ─── NAVIGATION ────────────────────────────────────────────────────────────
  {
    id: 'fur-nav-1',
    categoryId: 'navigation',
    label: 'Furniture – Warm Light Nav',
    html: `<nav class="navbar navbar-light bg-light navbar-expand-lg" style="background-color:var(--bs-body-bg) !important; border-bottom:1px solid var(--bs-border-color);">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#" style="color:var(--bs-dark); letter-spacing:0.04em;">Atelier Madera</a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#furNav1" aria-controls="furNav1" aria-expanded="false" aria-label="Toggle navigation" style="color:var(--bs-dark);">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="furNav1">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">
        <li class="nav-item"><a class="nav-link fw-medium" href="#" style="color:var(--bs-dark);">Collections</a></li>
        <li class="nav-item"><a class="nav-link fw-medium" href="#" style="color:var(--bs-dark);">Rooms</a></li>
        <li class="nav-item"><a class="nav-link fw-medium" href="#" style="color:var(--bs-dark);">Materials</a></li>
        <li class="nav-item"><a class="nav-link fw-medium" href="#" style="color:var(--bs-dark);">Our Story</a></li>
        <li class="nav-item"><a class="nav-link fw-medium" href="#" style="color:var(--bs-dark);">Journal</a></li>
      </ul>
      <div class="d-flex align-items-center gap-3">
        <a href="#" style="color:var(--bs-dark);" class="text-decoration-none small fw-medium">Login</a>
        <a href="#" class="btn btn-primary px-4" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Shop Now</a>
      </div>
    </div>
  </div>
</nav>`
  },
  {
    id: 'fur-nav-2',
    categoryId: 'navigation',
    label: 'Furniture – Dark Walnut Nav with Dropdown',
    html: `<nav class="navbar navbar-dark navbar-expand-lg py-3" style="background-color:var(--bs-dark);">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4 text-white" href="#" style="letter-spacing:0.06em; font-style:italic;">Loom &amp; Grain</a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#furNav2" aria-controls="furNav2" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="furNav2">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link text-white-75" href="#">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white-75" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Collections</a>
          <ul class="dropdown-menu" style="background-color:var(--bs-body-bg); border:1px solid var(--bs-border-color); border-radius:2px;">
            <li><a class="dropdown-item" href="#" style="color:var(--bs-dark);">Living Room</a></li>
            <li><a class="dropdown-item" href="#" style="color:var(--bs-dark);">Dining &amp; Kitchen</a></li>
            <li><a class="dropdown-item" href="#" style="color:var(--bs-dark);">Bedroom</a></li>
            <li><hr class="dropdown-divider" style="border-color:var(--bs-border-color);"></li>
            <li><a class="dropdown-item" href="#" style="color:var(--bs-dark);">New Arrivals</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link text-white-75" href="#">Bespoke</a></li>
        <li class="nav-item"><a class="nav-link text-white-75" href="#">Stockists</a></li>
      </ul>
      <a href="#" class="btn btn-outline-light ms-3 px-4" style="border-radius:2px;">Book a Consultation</a>
    </div>
  </div>
</nav>`
  },

  // ─── HEROES ────────────────────────────────────────────────────────────────
  {
    id: 'fur-hero-1',
    categoryId: 'heroes',
    label: 'Furniture – Full-Width Image Hero',
    html: `<section class="position-relative text-white text-center d-flex align-items-center" style="min-height:580px; background:url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80') center/cover no-repeat;">
  <div class="position-absolute top-0 start-0 w-100 h-100" style="background:rgba(61,43,31,0.52);"></div>
  <div class="container position-relative py-5">
    <p class="text-uppercase fw-semibold mb-3" style="letter-spacing:0.22em; font-size:0.78rem; opacity:0.85;">New Autumn Collection</p>
    <h1 class="display-3 fw-bold mb-4 mx-auto" style="max-width:720px; line-height:1.15;">Furniture That Tells a Story</h1>
    <p class="lead mb-5 mx-auto" style="max-width:540px; opacity:0.82;">Each piece in the Atelier Madera collection is handcrafted from sustainably sourced hardwood — built to last generations.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-lg px-5 py-3 fw-semibold" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Explore the Collection</a>
      <a href="#" class="btn btn-lg btn-outline-light px-5 py-3" style="border-radius:2px;">Our Story</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-hero-2',
    categoryId: 'heroes',
    label: 'Furniture – Split Hero with Room Image',
    html: `<section class="py-0" style="background-color:var(--bs-body-bg);">
  <div class="container-fluid px-0">
    <div class="row g-0 align-items-stretch" style="min-height:520px;">
      <div class="col-lg-6 d-flex align-items-center px-5 py-5">
        <div class="py-3" style="max-width:500px;">
          <p class="text-uppercase fw-semibold mb-3" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">The Loom &amp; Grain Collection</p>
          <h1 class="fw-bold mb-4" style="font-size:clamp(2rem,4vw,3.2rem); color:var(--bs-dark); line-height:1.2;">Crafted from Sustainable Hardwood</h1>
          <p class="mb-5" style="color:#7a5c47; font-size:1.05rem; line-height:1.7;">From our atelier in the Portuguese highlands, each chair, table, and cabinet is shaped by hand — a union of form, function, and soul.</p>
          <div class="d-flex gap-3 flex-wrap">
            <a href="#" class="btn btn-primary btn-lg px-5" style="background-color:var(--bs-primary); border-color:var(--bs-primary); border-radius:2px;">Shop Living Room</a>
            <a href="#" class="btn btn-lg px-5" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent;">View Lookbook</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" alt="Minimal modern living room" style="width:100%; height:100%; object-fit:cover; min-height:400px;">
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FEATURES ──────────────────────────────────────────────────────────────
  {
    id: 'fur-features-1',
    categoryId: 'features',
    label: 'Furniture – Three-Column Craft Features',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Why Atelier Madera</p>
      <h2 class="fw-bold mb-3" style="color:var(--bs-dark);">The Principles of Our Craft</h2>
      <p class="mx-auto" style="max-width:520px; color:#7a5c47;">Every decision we make — from sourcing to finishing — is guided by a deep respect for materials, makers, and the homes that will hold our work.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="text-center p-4">
          <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width:72px;height:72px;background-color:#f5e6d8;">
            <svg width="32" height="32" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h5 class="fw-bold mb-2" style="color:var(--bs-dark);">Sustainably Sourced</h5>
          <p style="color:#7a5c47; line-height:1.7;">Every plank comes from FSC-certified forests. We partner exclusively with mills that replant for every tree harvested.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="text-center p-4">
          <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width:72px;height:72px;background-color:#f5e6d8;">
            <svg width="32" height="32" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          </div>
          <h5 class="fw-bold mb-2" style="color:var(--bs-dark);">Built to Last a Lifetime</h5>
          <p style="color:#7a5c47; line-height:1.7;">Heirloom joinery techniques — mortise, tenon, and hand-cut dovetails — ensure structural integrity that outlasts trends.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="text-center p-4">
          <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width:72px;height:72px;background-color:#f5e6d8;">
            <svg width="32" height="32" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h5 class="fw-bold mb-2" style="color:var(--bs-dark);">Bespoke Customisation</h5>
          <p style="color:#7a5c47; line-height:1.7;">Choose your wood species, finish, and dimensions. Our atelier will build the piece exactly to your vision and space.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-features-2',
    categoryId: 'features',
    label: 'Furniture – Alternating Feature Rows',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color:var(--bs-dark);">Designed for Real Living</h2>
      <p style="color:#7a5c47; max-width:480px; margin:0 auto;">Pieces that move with you — generous proportions, thoughtful detailing, and finishes that only improve with age.</p>
    </div>
    <div class="row align-items-center g-5 mb-5">
      <div class="col-lg-6">
        <img src="https://images.unsplash.com/photo-1567538096630-e3838a7f1a9b?w=800&q=80" alt="Wooden chair detail" class="img-fluid rounded-1 w-100" style="object-fit:cover; height:360px;">
      </div>
      <div class="col-lg-6 ps-lg-5">
        <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Signature Joinery</p>
        <h3 class="fw-bold mb-3" style="color:var(--bs-dark);">Hand-Cut, Not Factory-Made</h3>
        <p style="color:#7a5c47; line-height:1.75;">Our chairs and cabinets are shaped by craftspeople who have spent decades mastering their trade. No CNC shortcuts. Every curve is intentional, every edge bevelled by hand.</p>
        <a href="#" class="mt-3 d-inline-block fw-semibold text-decoration-none" style="color:var(--bs-primary);">Discover the process &rarr;</a>
      </div>
    </div>
    <div class="row align-items-center g-5 flex-lg-row-reverse">
      <div class="col-lg-6">
        <img src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=800&q=80" alt="Wooden table surface" class="img-fluid rounded-1 w-100" style="object-fit:cover; height:360px;">
      </div>
      <div class="col-lg-6 pe-lg-5">
        <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Natural Finishes</p>
        <h3 class="fw-bold mb-3" style="color:var(--bs-dark);">The Wood's Own Beauty, Preserved</h3>
        <p style="color:#7a5c47; line-height:1.75;">We use only food-safe hardwax oils and water-based lacquers that protect without hiding grain. The result is a surface that feels warm and alive under your hands.</p>
        <a href="#" class="mt-3 d-inline-block fw-semibold text-decoration-none" style="color:var(--bs-primary);">Explore finishes &rarr;</a>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CONTENT ───────────────────────────────────────────────────────────────
  {
    id: 'fur-content-1',
    categoryId: 'content',
    label: 'Furniture – Brand Story Section',
    html: `<section class="py-5" style="background-color:var(--bs-dark); color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="row align-items-center g-5">
      <div class="col-lg-5">
        <img src="https://images.unsplash.com/photo-1600210492493-0de1d7f0b1d5?w=800&q=80" alt="Interior design showcase" class="img-fluid rounded-1 w-100" style="object-fit:cover; height:460px;">
      </div>
      <div class="col-lg-7 ps-lg-5">
        <p class="text-uppercase fw-semibold mb-3" style="color:var(--bs-primary); letter-spacing:0.2em; font-size:0.78rem;">Our Atelier — Est. 2009</p>
        <h2 class="fw-bold mb-4" style="color:var(--bs-body-bg); line-height:1.25; font-size:clamp(1.6rem,3vw,2.4rem);">Rooted in Craft. Guided by Beauty.</h2>
        <p style="color:#d4b9a4; line-height:1.8; margin-bottom:1.25rem;">Atelier Madera was founded in the Douro Valley by master carpenter Álvaro Monteiro and interior designer Lena Voss. Frustrated by the disposable nature of modern furniture, they set out to build pieces worthy of inheritance.</p>
        <p style="color:#d4b9a4; line-height:1.8; margin-bottom:1.75rem;">Today, a team of twelve artisans hand-shapes every piece in our hillside workshop — using traditional Portuguese carpentry techniques passed down over four generations.</p>
        <div class="row g-4 mb-4">
          <div class="col-4">
            <div class="fw-bold mb-1" style="font-size:1.8rem; color:var(--bs-primary);">15+</div>
            <div style="color:#d4b9a4; font-size:0.87rem;">Years of craft</div>
          </div>
          <div class="col-4">
            <div class="fw-bold mb-1" style="font-size:1.8rem; color:var(--bs-primary);">12</div>
            <div style="color:#d4b9a4; font-size:0.87rem;">Master artisans</div>
          </div>
          <div class="col-4">
            <div class="fw-bold mb-1" style="font-size:1.8rem; color:var(--bs-primary);">40+</div>
            <div style="color:#d4b9a4; font-size:0.87rem;">Countries delivered to</div>
          </div>
        </div>
        <a href="#" class="btn btn-lg px-5" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Meet the Team</a>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-content-2',
    categoryId: 'content',
    label: 'Furniture – Editorial Text + Image',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="text-center mb-5">
          <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">The Journal — Autumn 2025</p>
          <h2 class="fw-bold" style="color:var(--bs-dark); font-size:clamp(1.6rem,3.5vw,2.6rem); line-height:1.2;">Why the Best Rooms Tell a Story in Wood</h2>
        </div>
        <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80" alt="Cozy living room" class="img-fluid w-100 mb-4 rounded-1" style="object-fit:cover; max-height:420px;">
        <div class="row g-5">
          <div class="col-md-6">
            <p style="color:#5a3e30; line-height:1.85; font-size:1.02rem;">There is a reason we are drawn to rooms anchored by a great dining table or a generous armchair by the fire. Wood carries warmth in a way no synthetic material can replicate — its grain records the seasons, its patina the passage of time.</p>
          </div>
          <div class="col-md-6">
            <p style="color:#5a3e30; line-height:1.85; font-size:1.02rem;">At Atelier Madera we believe that choosing furniture is an act of intention. It is deciding what the next twenty years of evening dinners, Sunday mornings, and first birthdays will look and feel like. We take that seriously.</p>
          </div>
        </div>
        <div class="text-center mt-4">
          <a href="#" class="fw-semibold text-decoration-none" style="color:var(--bs-primary);">Read the full article &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CARDS ─────────────────────────────────────────────────────────────────
  {
    id: 'fur-cards-1',
    categoryId: 'cards',
    label: 'Furniture – Room Collection Cards',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Shop by Room</p>
      <h2 class="fw-bold" style="color:var(--bs-dark);">Find Your Signature Space</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card border-0 overflow-hidden h-100" style="border-radius:3px; border:1px solid var(--bs-border-color) !important;">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" alt="Living Room" class="card-img-top" style="height:260px; object-fit:cover;">
            <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background:linear-gradient(to top, rgba(61,43,31,0.7), transparent);">
              <span class="text-white fw-semibold">Living Room</span>
            </div>
          </div>
          <div class="card-body" style="background-color:var(--bs-body-bg);">
            <p class="card-text mb-3" style="color:#7a5c47; font-size:0.92rem;">Sofas, armchairs, coffee tables, and sideboards for your most-lived-in room.</p>
            <a href="#" class="fw-semibold text-decoration-none" style="color:var(--bs-primary); font-size:0.9rem;">Explore Living Room &rarr;</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 overflow-hidden h-100" style="border-radius:3px; border:1px solid var(--bs-border-color) !important;">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd3?w=800&q=80" alt="Dining Room" class="card-img-top" style="height:260px; object-fit:cover;">
            <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background:linear-gradient(to top, rgba(61,43,31,0.7), transparent);">
              <span class="text-white fw-semibold">Dining Room</span>
            </div>
          </div>
          <div class="card-body" style="background-color:var(--bs-body-bg);">
            <p class="card-text mb-3" style="color:#7a5c47; font-size:0.92rem;">Solid oak and walnut dining tables and chairs built for long meals and laughter.</p>
            <a href="#" class="fw-semibold text-decoration-none" style="color:var(--bs-primary); font-size:0.9rem;">Explore Dining &rarr;</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 overflow-hidden h-100" style="border-radius:3px; border:1px solid var(--bs-border-color) !important;">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1556228578-67f7c21ada40?w=800&q=80" alt="Bedroom" class="card-img-top" style="height:260px; object-fit:cover;">
            <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background:linear-gradient(to top, rgba(61,43,31,0.7), transparent);">
              <span class="text-white fw-semibold">Bedroom</span>
            </div>
          </div>
          <div class="card-body" style="background-color:var(--bs-body-bg);">
            <p class="card-text mb-3" style="color:#7a5c47; font-size:0.92rem;">Beds, wardrobes, and bedside tables — serene, minimal, beautifully made.</p>
            <a href="#" class="fw-semibold text-decoration-none" style="color:var(--bs-primary); font-size:0.9rem;">Explore Bedroom &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-cards-2',
    categoryId: 'cards',
    label: 'Furniture – Material Highlight Cards',
    html: `<section class="py-5" style="background-color:var(--bs-dark);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Our Materials</p>
      <h2 class="fw-bold" style="color:var(--bs-body-bg);">Chosen for Character</h2>
      <p style="color:#d4b9a4; max-width:480px; margin:0 auto;">We work with three primary hardwoods — each with its own temperament, grain story, and warmth.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="p-4 h-100" style="background-color:#4e3728; border-left:3px solid var(--bs-primary);">
          <h5 class="fw-bold mb-2" style="color:var(--bs-body-bg);">European White Oak</h5>
          <p style="color:#d4b9a4; line-height:1.75; margin-bottom:1rem;">Open grain, warm honey tones. The most versatile of our woods — works beautifully in both modern and traditional interiors.</p>
          <span class="badge" style="background-color:var(--bs-primary); color:#fff; font-size:0.75rem;">Most Popular</span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 h-100" style="background-color:#4e3728; border-left:3px solid var(--bs-primary);">
          <h5 class="fw-bold mb-2" style="color:var(--bs-body-bg);">Black American Walnut</h5>
          <p style="color:#d4b9a4; line-height:1.75; margin-bottom:1rem;">Rich chocolate hues with a naturally fine, tight grain. Walnut adds instant depth and sophistication to any room it enters.</p>
          <span class="badge" style="background-color:rgba(194,122,86,0.3); color:var(--bs-primary); border:1px solid var(--bs-primary); font-size:0.75rem;">Premium</span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 h-100" style="background-color:#4e3728; border-left:3px solid var(--bs-primary);">
          <h5 class="fw-bold mb-2" style="color:var(--bs-body-bg);">Reclaimed Portuguese Pine</h5>
          <p style="color:#d4b9a4; line-height:1.75; margin-bottom:1rem;">Salvaged from old farmhouses in the Alentejo. Each board carries knots, nail holes, and marks of a previous life — irreplaceable patina.</p>
          <span class="badge" style="background-color:rgba(194,122,86,0.3); color:var(--bs-primary); border:1px solid var(--bs-primary); font-size:0.75rem;">Limited Stock</span>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── TESTIMONIALS ──────────────────────────────────────────────────────────
  {
    id: 'fur-testimonials-1',
    categoryId: 'testimonials',
    label: 'Furniture – Three Testimonial Cards',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Client Stories</p>
      <h2 class="fw-bold" style="color:var(--bs-dark);">Homes That Came Alive</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="p-4 h-100 d-flex flex-column" style="background-color:#fff; border:1px solid var(--bs-border-color); border-radius:3px;">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.4rem;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="flex-grow-1 mb-4" style="color:#5a3e30; line-height:1.8; font-style:italic;">"The oak dining table is beyond anything I hoped for. Six of us eat around it every Sunday and it has become the literal centre of our home. Worth every penny and every week of the wait."</p>
          <div class="d-flex align-items-center gap-3">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Sophie L." class="rounded-circle" style="width:46px; height:46px; object-fit:cover;">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Sophie Larsson</div>
              <div style="color:#a07860; font-size:0.82rem;">Stockholm, Sweden</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 h-100 d-flex flex-column" style="background-color:#fff; border:1px solid var(--bs-border-color); border-radius:3px;">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.4rem;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="flex-grow-1 mb-4" style="color:#5a3e30; line-height:1.8; font-style:italic;">"I ordered a bespoke wardrobe in walnut for our master bedroom. The team at Atelier Madera was thoughtful throughout the process, and the finished piece is genuinely extraordinary."</p>
          <div class="d-flex align-items-center gap-3">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="James C." class="rounded-circle" style="width:46px; height:46px; object-fit:cover;">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">James Chen</div>
              <div style="color:#a07860; font-size:0.82rem;">London, United Kingdom</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 h-100 d-flex flex-column" style="background-color:#fff; border:1px solid var(--bs-border-color); border-radius:3px;">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.4rem;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="flex-grow-1 mb-4" style="color:#5a3e30; line-height:1.8; font-style:italic;">"We furnished our entire apartment through Atelier Madera. Everything is cohesive, beautiful, and obviously built to last. Our friends ask about the furniture every single time they visit."</p>
          <div class="d-flex align-items-center gap-3">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Carla M." class="rounded-circle" style="width:46px; height:46px; object-fit:cover;">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Carla Moreau</div>
              <div style="color:#a07860; font-size:0.82rem;">Paris, France</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-testimonials-2',
    categoryId: 'testimonials',
    label: 'Furniture – Featured Large Testimonial',
    html: `<section class="py-5" style="background-color:#f5e6d8;">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <div class="mb-4" style="color:var(--bs-primary); font-size:2.5rem; line-height:1;">&ldquo;</div>
        <blockquote class="mb-4" style="font-size:clamp(1.1rem,2.2vw,1.5rem); color:var(--bs-dark); line-height:1.65; font-style:italic; font-weight:400;">We have bought furniture from all over the world. Nothing comes close to the rigour of the craft at Atelier Madera. You can feel the care in every joint. These are pieces our grandchildren will argue over one day.</blockquote>
        <div class="d-flex align-items-center justify-content-center gap-3">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Thomas B." class="rounded-circle" style="width:56px; height:56px; object-fit:cover; border:2px solid var(--bs-primary);">
          <div class="text-start">
            <div class="fw-bold" style="color:var(--bs-dark);">Thomas Brandt</div>
            <div style="color:#a07860; font-size:0.85rem;">Interior Architect — Munich, Germany</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CTA ───────────────────────────────────────────────────────────────────
  {
    id: 'fur-cta-1',
    categoryId: 'cta',
    label: 'Furniture – Warm Dark CTA Banner',
    html: `<section class="py-5" style="background-color:var(--bs-dark);">
  <div class="container py-4 text-center">
    <p class="text-uppercase fw-semibold mb-3" style="color:var(--bs-primary); letter-spacing:0.2em; font-size:0.78rem;">Bespoke Orders Open</p>
    <h2 class="fw-bold mb-3" style="color:var(--bs-body-bg); font-size:clamp(1.6rem,3.5vw,2.6rem); max-width:640px; margin:0 auto 1rem;">Commission a Piece Built Exactly for You</h2>
    <p class="mb-5 mx-auto" style="color:#d4b9a4; max-width:520px; line-height:1.75;">Our artisans work directly with you to design a one-of-a-kind piece. Lead time is typically 8–12 weeks. Every commission includes a lifetime structural guarantee.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-lg px-5 py-3 fw-semibold" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Begin Your Commission</a>
      <a href="#" class="btn btn-lg btn-outline-light px-5 py-3" style="border-radius:2px;">Download the Catalogue</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-cta-2',
    categoryId: 'cta',
    label: 'Furniture – Showroom Visit CTA',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg); border-top:1px solid var(--bs-border-color); border-bottom:1px solid var(--bs-border-color);">
  <div class="container py-4">
    <div class="row align-items-center g-4">
      <div class="col-lg-7">
        <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">London Showroom — Marylebone</p>
        <h2 class="fw-bold mb-3" style="color:var(--bs-dark); font-size:clamp(1.5rem,3vw,2.2rem);">Experience the Pieces in Person</h2>
        <p style="color:#7a5c47; line-height:1.75; max-width:520px;">Touch the grain. Sit in the chair. See how the light plays on the finish. Our Marylebone showroom is open Wednesday to Sunday. Private appointments always welcome.</p>
      </div>
      <div class="col-lg-5 text-lg-end">
        <a href="#" class="btn btn-lg px-5 me-2 mb-2" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Book a Showroom Visit</a>
        <a href="#" class="btn btn-lg px-5 mb-2" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent;">Get Directions</a>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FORMS ─────────────────────────────────────────────────────────────────
  {
    id: 'fur-forms-1',
    categoryId: 'forms',
    label: 'Furniture – Consultation Request Form',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="text-center mb-5">
          <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Free Design Consultation</p>
          <h2 class="fw-bold" style="color:var(--bs-dark);">Tell Us About Your Space</h2>
          <p style="color:#7a5c47;">Share a few details and one of our design advisors will be in touch within one working day.</p>
        </div>
        <div class="p-4 p-lg-5" style="background-color:#fff; border:1px solid var(--bs-border-color); border-radius:3px;">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-semibold" style="color:var(--bs-dark);">First Name</label>
              <input type="text" class="form-control" placeholder="Your first name" style="border-color:var(--bs-border-color); background:var(--bs-body-bg); color:var(--bs-dark);">
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold" style="color:var(--bs-dark);">Last Name</label>
              <input type="text" class="form-control" placeholder="Your last name" style="border-color:var(--bs-border-color); background:var(--bs-body-bg); color:var(--bs-dark);">
            </div>
            <div class="col-12">
              <label class="form-label fw-semibold" style="color:var(--bs-dark);">Email Address</label>
              <input type="email" class="form-control" placeholder="you@example.com" style="border-color:var(--bs-border-color); background:var(--bs-body-bg); color:var(--bs-dark);">
            </div>
            <div class="col-12">
              <label class="form-label fw-semibold" style="color:var(--bs-dark);">Which room are you furnishing?</label>
              <select class="form-select" style="border-color:var(--bs-border-color); background:var(--bs-body-bg); color:var(--bs-dark);">
                <option value="" disabled selected>Select a room</option>
                <option>Living Room</option>
                <option>Dining Room</option>
                <option>Bedroom</option>
                <option>Home Office</option>
                <option>Multiple Rooms</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label fw-semibold" style="color:var(--bs-dark);">Tell us about your project</label>
              <textarea class="form-control" rows="4" placeholder="Dimensions, style preferences, budget range, timeline…" style="border-color:var(--bs-border-color); background:var(--bs-body-bg); color:var(--bs-dark);"></textarea>
            </div>
            <div class="col-12 mt-2">
              <button class="btn w-100 py-3 fw-semibold" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Request My Free Consultation</button>
              <p class="text-center mt-3 mb-0 small" style="color:#a07860;">We respect your privacy. Your information is never shared.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-forms-2',
    categoryId: 'forms',
    label: 'Furniture – Newsletter Sign-up Form',
    html: `<section class="py-5" style="background-color:var(--bs-dark);">
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
        <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.2em; font-size:0.78rem;">The Madera Edit</p>
        <h2 class="fw-bold mb-3" style="color:var(--bs-body-bg);">Inspiration, Delivered Monthly</h2>
        <p class="mb-4" style="color:#d4b9a4; line-height:1.7;">New collections, behind-the-scenes from the atelier, interior ideas, and occasional subscriber-only offers — curated and sent once a month.</p>
        <div class="d-flex gap-2">
          <input type="email" class="form-control flex-grow-1 py-3" placeholder="Your email address" style="border:1px solid #7a5c47; background:rgba(254,246,236,0.08); color:var(--bs-body-bg); border-radius:2px;">
          <button class="btn px-4 fw-semibold" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px; white-space:nowrap;">Subscribe</button>
        </div>
        <p class="mt-3 mb-0 small" style="color:#a07860;">Unsubscribe at any time. We will never share your address.</p>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── PRICING ───────────────────────────────────────────────────────────────
  {
    id: 'fur-pricing-1',
    categoryId: 'pricing',
    label: 'Furniture – Interior Design Service Tiers',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Design Services</p>
      <h2 class="fw-bold mb-2" style="color:var(--bs-dark);">How We Work With You</h2>
      <p style="color:#7a5c47; max-width:480px; margin:0 auto;">From a single room refresh to a complete home fit-out, we have a service to match your ambition.</p>
    </div>
    <div class="row g-4 align-items-stretch justify-content-center">
      <div class="col-md-4">
        <div class="p-4 p-lg-5 h-100 d-flex flex-column" style="background-color:#fff; border:1px solid var(--bs-border-color); border-radius:3px;">
          <h5 class="fw-bold mb-1" style="color:var(--bs-dark);">Discovery</h5>
          <p class="mb-4" style="color:#a07860; font-size:0.88rem;">For focused single-room projects</p>
          <div class="fw-bold mb-4" style="font-size:2.2rem; color:var(--bs-dark);">£350<small style="font-size:0.9rem; color:#a07860; font-weight:400;"> flat fee</small></div>
          <ul class="list-unstyled mb-5 flex-grow-1">
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary);">&#10003;</span><span style="color:#5a3e30;">90-minute in-home consultation</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary);">&#10003;</span><span style="color:#5a3e30;">Room layout and furniture plan</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary);">&#10003;</span><span style="color:#5a3e30;">Curated product shortlist</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:#a07860;">&#10007;</span><span style="color:#a07860;">Project management</span></li>
          </ul>
          <a href="#" class="btn w-100 py-3" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent; font-weight:600;">Book Discovery</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 p-lg-5 h-100 d-flex flex-column position-relative" style="background-color:var(--bs-primary); border-radius:3px;">
          <div class="position-absolute top-0 end-0 m-3">
            <span class="badge" style="background-color:var(--bs-dark); color:var(--bs-body-bg); font-size:0.72rem; letter-spacing:0.08em;">MOST CHOSEN</span>
          </div>
          <h5 class="fw-bold mb-1" style="color:var(--bs-body-bg);">Atelier Full Room</h5>
          <p class="mb-4" style="color:rgba(254,246,236,0.75); font-size:0.88rem;">A complete, coordinated room design</p>
          <div class="fw-bold mb-4" style="font-size:2.2rem; color:var(--bs-body-bg);">£1,200<small style="font-size:0.9rem; color:rgba(254,246,236,0.7); font-weight:400;"> flat fee</small></div>
          <ul class="list-unstyled mb-5 flex-grow-1">
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-body-bg);">&#10003;</span><span style="color:rgba(254,246,236,0.9);">Everything in Discovery</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-body-bg);">&#10003;</span><span style="color:rgba(254,246,236,0.9);">3D mood board &amp; render</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-body-bg);">&#10003;</span><span style="color:rgba(254,246,236,0.9);">Full procurement management</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-body-bg);">&#10003;</span><span style="color:rgba(254,246,236,0.9);">Delivery &amp; placement day</span></li>
          </ul>
          <a href="#" class="btn w-100 py-3 fw-semibold" style="background-color:var(--bs-body-bg); border-color:var(--bs-body-bg); color:var(--bs-primary); border-radius:2px;">Book Atelier Room</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 p-lg-5 h-100 d-flex flex-column" style="background-color:#fff; border:1px solid var(--bs-border-color); border-radius:3px;">
          <h5 class="fw-bold mb-1" style="color:var(--bs-dark);">Whole Home</h5>
          <p class="mb-4" style="color:#a07860; font-size:0.88rem;">End-to-end design &amp; fit-out</p>
          <div class="fw-bold mb-4" style="font-size:2.2rem; color:var(--bs-dark);">Custom<small style="font-size:0.9rem; color:#a07860; font-weight:400;"> pricing</small></div>
          <ul class="list-unstyled mb-5 flex-grow-1">
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary);">&#10003;</span><span style="color:#5a3e30;">Everything in Atelier Full Room</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary);">&#10003;</span><span style="color:#5a3e30;">Full architectural liaison</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary);">&#10003;</span><span style="color:#5a3e30;">Dedicated project manager</span></li>
            <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary);">&#10003;</span><span style="color:#5a3e30;">Priority bespoke commission slots</span></li>
          </ul>
          <a href="#" class="btn w-100 py-3" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent; font-weight:600;">Enquire Now</a>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-pricing-2',
    categoryId: 'pricing',
    label: 'Furniture – Simple Product Price List',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Pricing Guide</p>
      <h2 class="fw-bold" style="color:var(--bs-dark);">Starting Prices for Our Core Pieces</h2>
      <p style="color:#7a5c47; max-width:500px; margin:0 auto;">All prices are for standard dimensions in European White Oak. Bespoke sizing, walnut, and reclaimed pine are priced on enquiry.</p>
    </div>
    <div class="row g-0 justify-content-center">
      <div class="col-lg-8">
        <div style="border:1px solid var(--bs-border-color); border-radius:3px; overflow:hidden;">
          <div class="d-flex justify-content-between align-items-center px-4 py-3" style="background-color:#fff; border-bottom:1px solid var(--bs-border-color);">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Dining Table — 180cm</div>
              <div class="small" style="color:#a07860;">Solid oak top, turned legs, hardwax finish</div>
            </div>
            <div class="fw-bold" style="color:var(--bs-primary); font-size:1.15rem;">From £1,850</div>
          </div>
          <div class="d-flex justify-content-between align-items-center px-4 py-3" style="background-color:var(--bs-body-bg); border-bottom:1px solid var(--bs-border-color);">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Dining Chair (each)</div>
              <div class="small" style="color:#a07860;">Solid oak frame, upholstered seat in natural linen</div>
            </div>
            <div class="fw-bold" style="color:var(--bs-primary); font-size:1.15rem;">From £395</div>
          </div>
          <div class="d-flex justify-content-between align-items-center px-4 py-3" style="background-color:#fff; border-bottom:1px solid var(--bs-border-color);">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Sideboard — 160cm</div>
              <div class="small" style="color:#a07860;">Three doors, soft-close hinges, brass handles</div>
            </div>
            <div class="fw-bold" style="color:var(--bs-primary); font-size:1.15rem;">From £2,200</div>
          </div>
          <div class="d-flex justify-content-between align-items-center px-4 py-3" style="background-color:var(--bs-body-bg); border-bottom:1px solid var(--bs-border-color);">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Lounge Armchair</div>
              <div class="small" style="color:#a07860;">Solid oak frame, wool or leather upholstery</div>
            </div>
            <div class="fw-bold" style="color:var(--bs-primary); font-size:1.15rem;">From £1,100</div>
          </div>
          <div class="d-flex justify-content-between align-items-center px-4 py-3" style="background-color:#fff; border-bottom:1px solid var(--bs-border-color);">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Bed Frame — King</div>
              <div class="small" style="color:#a07860;">Solid headboard, slatted base, natural oil finish</div>
            </div>
            <div class="fw-bold" style="color:var(--bs-primary); font-size:1.15rem;">From £2,800</div>
          </div>
          <div class="d-flex justify-content-between align-items-center px-4 py-3" style="background-color:var(--bs-body-bg);">
            <div>
              <div class="fw-semibold" style="color:var(--bs-dark);">Coffee Table</div>
              <div class="small" style="color:#a07860;">Live-edge or straight, choice of leg style</div>
            </div>
            <div class="fw-bold" style="color:var(--bs-primary); font-size:1.15rem;">From £780</div>
          </div>
        </div>
        <p class="mt-4 text-center small" style="color:#a07860;">All pieces come with a lifetime structural guarantee and free white-glove delivery in the UK. <a href="#" style="color:var(--bs-primary);">Request a bespoke quote &rarr;</a></p>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FOOTERS ───────────────────────────────────────────────────────────────
  {
    id: 'fur-footer-1',
    categoryId: 'footers',
    label: 'Furniture – Warm Four-Column Footer',
    html: `<footer class="pt-5 pb-4" style="background-color:var(--bs-dark); color:#d4b9a4;">
  <div class="container">
    <div class="row g-4 mb-5">
      <div class="col-lg-4 col-md-6">
        <h5 class="fw-bold mb-3" style="color:var(--bs-body-bg); letter-spacing:0.04em;">Atelier Madera</h5>
        <p class="mb-4" style="line-height:1.75; font-size:0.9rem;">Handcrafted furniture from sustainable hardwood. Designed and made in our atelier in the Portuguese highlands since 2009.</p>
        <div class="d-flex gap-3">
          <a href="#" style="color:var(--bs-primary); text-decoration:none;">Instagram</a>
          <a href="#" style="color:var(--bs-primary); text-decoration:none;">Pinterest</a>
          <a href="#" style="color:var(--bs-primary); text-decoration:none;">LinkedIn</a>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <h6 class="fw-bold mb-3" style="color:var(--bs-body-bg); text-transform:uppercase; letter-spacing:0.12em; font-size:0.78rem;">Collections</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Living Room</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Dining</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Bedroom</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Home Office</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Outdoor</a></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <h6 class="fw-bold mb-3" style="color:var(--bs-body-bg); text-transform:uppercase; letter-spacing:0.12em; font-size:0.78rem;">Company</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Our Story</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">The Atelier</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Sustainability</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">The Journal</a></li>
          <li class="mb-2"><a href="#" style="color:#d4b9a4; text-decoration:none; font-size:0.9rem;">Stockists</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6">
        <h6 class="fw-bold mb-3" style="color:var(--bs-body-bg); text-transform:uppercase; letter-spacing:0.12em; font-size:0.78rem;">Visit Us</h6>
        <p style="font-size:0.9rem; line-height:1.75;">12 Marylebone Lane<br>London, W1U 2PD<br><br>Wednesday – Sunday<br>10:00 – 18:00</p>
        <a href="#" class="btn mt-2 btn-sm px-4" style="border:1px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent; font-size:0.85rem;">Book a Visit</a>
      </div>
    </div>
    <div class="pt-4 d-flex flex-wrap justify-content-between align-items-center gap-2" style="border-top:1px solid rgba(232,213,192,0.2); font-size:0.82rem;">
      <span>&copy; 2025 Atelier Madera. All rights reserved.</span>
      <div class="d-flex gap-3">
        <a href="#" style="color:#d4b9a4; text-decoration:none;">Privacy Policy</a>
        <a href="#" style="color:#d4b9a4; text-decoration:none;">Terms &amp; Conditions</a>
        <a href="#" style="color:#d4b9a4; text-decoration:none;">Cookie Settings</a>
      </div>
    </div>
  </div>
</footer>`
  },
  {
    id: 'fur-footer-2',
    categoryId: 'footers',
    label: 'Furniture – Minimal Warm Footer',
    html: `<footer class="py-5" style="background-color:var(--bs-body-bg); border-top:1px solid var(--bs-border-color);">
  <div class="container">
    <div class="row align-items-start g-4 mb-4">
      <div class="col-lg-5">
        <h5 class="fw-bold mb-2" style="color:var(--bs-dark); letter-spacing:0.04em; font-size:1.3rem;">Loom &amp; Grain</h5>
        <p style="color:#7a5c47; font-size:0.9rem; max-width:320px; line-height:1.7;">Heirloom furniture for the modern home. Handmade in Portugal, delivered worldwide.</p>
      </div>
      <div class="col-lg-7">
        <div class="row g-3">
          <div class="col-6 col-md-3">
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Collections</a>
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Bespoke</a>
            <a href="#" class="d-block text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Showrooms</a>
          </div>
          <div class="col-6 col-md-3">
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Our Story</a>
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Journal</a>
            <a href="#" class="d-block text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Press</a>
          </div>
          <div class="col-6 col-md-3">
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Delivery</a>
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Returns</a>
            <a href="#" class="d-block text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Care Guide</a>
          </div>
          <div class="col-6 col-md-3">
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Instagram</a>
            <a href="#" class="d-block mb-2 text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">Pinterest</a>
            <a href="#" class="d-block text-decoration-none" style="color:#7a5c47; font-size:0.9rem;">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 text-center" style="border-top:1px solid var(--bs-border-color); font-size:0.82rem; color:#a07860;">
      &copy; 2025 Loom &amp; Grain Ltd. Registered in England &amp; Wales. &nbsp;·&nbsp; <a href="#" style="color:#a07860; text-decoration:none;">Privacy</a> &nbsp;·&nbsp; <a href="#" style="color:#a07860; text-decoration:none;">Terms</a>
    </div>
  </div>
</footer>`
  },

  // ─── GALLERY ───────────────────────────────────────────────────────────────
  {
    id: 'fur-gallery-1',
    categoryId: 'gallery',
    label: 'Furniture – Masonry-Style Room Gallery',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">In Real Homes</p>
      <h2 class="fw-bold" style="color:var(--bs-dark);">The Madera Collection at Home</h2>
    </div>
    <div class="row g-3">
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80" alt="Sofa in living room" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:360px;">
      </div>
      <div class="col-md-6">
        <div class="row g-3">
          <div class="col-6">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd3?w=800&q=80" alt="Dining room" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:172px;">
          </div>
          <div class="col-6">
            <img src="https://images.unsplash.com/photo-1567538096630-e3838a7f1a9b?w=800&q=80" alt="Wooden chair" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:172px;">
          </div>
          <div class="col-12">
            <img src="https://images.unsplash.com/photo-1556228578-67f7c21ada40?w=800&q=80" alt="Bedroom interior" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:172px;">
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80" alt="Cozy living room" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:240px;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80" alt="Armchair" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:240px;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1600210492493-0de1d7f0b1d5?w=800&q=80" alt="Interior design showcase" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:240px;">
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="#" class="fw-semibold text-decoration-none" style="color:var(--bs-primary);">View the full lookbook &rarr;</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-gallery-2',
    categoryId: 'gallery',
    label: 'Furniture – Horizontal Scroll Gallery Strip',
    html: `<section class="py-5" style="background-color:var(--bs-dark);">
  <div class="container-fluid px-0">
    <div class="text-center mb-4 px-3">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">New Arrivals — Autumn 2025</p>
      <h2 class="fw-bold" style="color:var(--bs-body-bg);">The Solstice Collection</h2>
    </div>
    <div class="d-flex gap-3 px-4 pb-2" style="overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
      <div style="flex:0 0 320px; scroll-snap-align:start;">
        <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" alt="Minimal room" style="width:320px; height:380px; object-fit:cover; border-radius:3px;">
        <div class="mt-2 px-1">
          <div class="fw-semibold" style="color:var(--bs-body-bg); font-size:0.9rem;">Solstice Lounge</div>
          <div style="color:var(--bs-primary); font-size:0.85rem;">From £3,200</div>
        </div>
      </div>
      <div style="flex:0 0 320px; scroll-snap-align:start;">
        <img src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=800&q=80" alt="Wooden table" style="width:320px; height:380px; object-fit:cover; border-radius:3px;">
        <div class="mt-2 px-1">
          <div class="fw-semibold" style="color:var(--bs-body-bg); font-size:0.9rem;">Harvest Dining Table</div>
          <div style="color:var(--bs-primary); font-size:0.85rem;">From £2,100</div>
        </div>
      </div>
      <div style="flex:0 0 320px; scroll-snap-align:start;">
        <img src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80" alt="Armchair" style="width:320px; height:380px; object-fit:cover; border-radius:3px;">
        <div class="mt-2 px-1">
          <div class="fw-semibold" style="color:var(--bs-body-bg); font-size:0.9rem;">Volta Armchair</div>
          <div style="color:var(--bs-primary); font-size:0.85rem;">From £1,100</div>
        </div>
      </div>
      <div style="flex:0 0 320px; scroll-snap-align:start;">
        <img src="https://images.unsplash.com/photo-1556909114-44e3e70034be?w=800&q=80" alt="Cabinet sideboard" style="width:320px; height:380px; object-fit:cover; border-radius:3px;">
        <div class="mt-2 px-1">
          <div class="fw-semibold" style="color:var(--bs-body-bg); font-size:0.9rem;">Grain Sideboard</div>
          <div style="color:var(--bs-primary); font-size:0.85rem;">From £2,400</div>
        </div>
      </div>
      <div style="flex:0 0 320px; scroll-snap-align:start;">
        <img src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&q=80" alt="Bookshelf home decor" style="width:320px; height:380px; object-fit:cover; border-radius:3px;">
        <div class="mt-2 px-1">
          <div class="fw-semibold" style="color:var(--bs-body-bg); font-size:0.9rem;">Alcove Shelving</div>
          <div style="color:var(--bs-primary); font-size:0.85rem;">From £880</div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── SOCIAL PROOF ──────────────────────────────────────────────────────────
  {
    id: 'fur-social-proof-1',
    categoryId: 'social-proof',
    label: 'Furniture – Press Logos & Stats Bar',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg); border-top:1px solid var(--bs-border-color); border-bottom:1px solid var(--bs-border-color);">
  <div class="container py-3">
    <div class="text-center mb-4">
      <p class="text-uppercase fw-semibold mb-0" style="color:#a07860; letter-spacing:0.18em; font-size:0.78rem;">As seen in</p>
    </div>
    <div class="d-flex flex-wrap justify-content-center align-items-center gap-5 mb-5">
      <span class="fw-bold" style="color:var(--bs-primary); font-size:1.1rem; letter-spacing:0.08em; opacity:0.7;">Dezeen</span>
      <span class="fw-bold" style="color:var(--bs-primary); font-size:1.1rem; letter-spacing:0.08em; opacity:0.7;">Wallpaper*</span>
      <span class="fw-bold" style="color:var(--bs-primary); font-size:1.1rem; letter-spacing:0.08em; opacity:0.7;">Architectural Digest</span>
      <span class="fw-bold" style="color:var(--bs-primary); font-size:1.1rem; letter-spacing:0.08em; opacity:0.7;">Monocle</span>
      <span class="fw-bold" style="color:var(--bs-primary); font-size:1.1rem; letter-spacing:0.08em; opacity:0.7;">The World of Interiors</span>
    </div>
    <div class="row g-4 text-center">
      <div class="col-6 col-md-3">
        <div class="fw-bold mb-1" style="font-size:2rem; color:var(--bs-primary);">4,200+</div>
        <div style="color:#7a5c47; font-size:0.9rem;">Pieces delivered worldwide</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="fw-bold mb-1" style="font-size:2rem; color:var(--bs-primary);">4.97 / 5</div>
        <div style="color:#7a5c47; font-size:0.9rem;">Average customer rating</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="fw-bold mb-1" style="font-size:2rem; color:var(--bs-primary);">15 Years</div>
        <div style="color:#7a5c47; font-size:0.9rem;">Of continuous craft</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="fw-bold mb-1" style="font-size:2rem; color:var(--bs-primary);">Lifetime</div>
        <div style="color:#7a5c47; font-size:0.9rem;">Structural guarantee on all pieces</div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-social-proof-2',
    categoryId: 'social-proof',
    label: 'Furniture – Awards & Certification Bar',
    html: `<section class="py-5" style="background-color:#fff; border-top:1px solid var(--bs-border-color);">
  <div class="container py-2">
    <div class="row align-items-center g-4 justify-content-center text-center">
      <div class="col-6 col-md-2">
        <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style="width:64px;height:64px;background-color:#f5e6d8;border:2px solid var(--bs-border-color);">
          <svg width="28" height="28" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="small fw-semibold" style="color:var(--bs-dark);">FSC Certified</div>
        <div style="color:#a07860; font-size:0.75rem;">Sustainable sourcing</div>
      </div>
      <div class="col-6 col-md-2">
        <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style="width:64px;height:64px;background-color:#f5e6d8;border:2px solid var(--bs-border-color);">
          <svg width="28" height="28" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
        </div>
        <div class="small fw-semibold" style="color:var(--bs-dark);">RIBA Partner</div>
        <div style="color:#a07860; font-size:0.75rem;">Architects' choice</div>
      </div>
      <div class="col-6 col-md-2">
        <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style="width:64px;height:64px;background-color:#f5e6d8;border:2px solid var(--bs-border-color);">
          <svg width="28" height="28" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="small fw-semibold" style="color:var(--bs-dark);">Lifetime Warranty</div>
        <div style="color:#a07860; font-size:0.75rem;">On all structural joints</div>
      </div>
      <div class="col-6 col-md-2">
        <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style="width:64px;height:64px;background-color:#f5e6d8;border:2px solid var(--bs-border-color);">
          <svg width="28" height="28" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        <div class="small fw-semibold" style="color:var(--bs-dark);">Carbon Neutral</div>
        <div style="color:#a07860; font-size:0.75rem;">Certified 2022–present</div>
      </div>
      <div class="col-6 col-md-2">
        <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style="width:64px;height:64px;background-color:#f5e6d8;border:2px solid var(--bs-border-color);">
          <svg width="28" height="28" fill="none" stroke="var(--bs-primary)" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
        </div>
        <div class="small fw-semibold" style="color:var(--bs-dark);">Dezeen Award</div>
        <div style="color:#a07860; font-size:0.75rem;">Furniture of the Year 2023</div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── PROCESS ───────────────────────────────────────────────────────────────
  {
    id: 'fur-process-1',
    categoryId: 'process',
    label: 'Furniture – How We Build Your Piece (Steps)',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">The Bespoke Journey</p>
      <h2 class="fw-bold" style="color:var(--bs-dark);">From Conversation to Heirloom</h2>
      <p style="color:#7a5c47; max-width:480px; margin:0 auto;">Every bespoke commission follows the same careful path — from your first idea to the moment your piece takes its place in your home.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-3 text-center">
        <div class="fw-bold mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style="width:52px;height:52px;background-color:var(--bs-primary);color:#fff;font-size:1.15rem;">1</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Discovery Call</h6>
        <p style="color:#7a5c47; font-size:0.9rem; line-height:1.7;">We talk through your room, your taste, your life. A 30-minute call with one of our design advisors — no obligation.</p>
      </div>
      <div class="col-md-3 text-center">
        <div class="fw-bold mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style="width:52px;height:52px;background-color:var(--bs-primary);color:#fff;font-size:1.15rem;">2</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Design &amp; Proposal</h6>
        <p style="color:#7a5c47; font-size:0.9rem; line-height:1.7;">Our designers produce scaled drawings, material samples, and a detailed quote. We refine until the design is exactly right.</p>
      </div>
      <div class="col-md-3 text-center">
        <div class="fw-bold mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style="width:52px;height:52px;background-color:var(--bs-primary);color:#fff;font-size:1.15rem;">3</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Handcrafted in the Atelier</h6>
        <p style="color:#7a5c47; font-size:0.9rem; line-height:1.7;">Your piece enters the queue with one of our master craftspeople. Lead time is typically 8–12 weeks. We send photo updates throughout.</p>
      </div>
      <div class="col-md-3 text-center">
        <div class="fw-bold mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style="width:52px;height:52px;background-color:var(--bs-primary);color:#fff;font-size:1.15rem;">4</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">White-Glove Delivery</h6>
        <p style="color:#7a5c47; font-size:0.9rem; line-height:1.7;">We deliver, unpack, position, and take away all packaging. Your new piece is in its place, ready to begin its story.</p>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="#" class="btn btn-lg px-5 py-3 fw-semibold" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Start Your Commission</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-process-2',
    categoryId: 'process',
    label: 'Furniture – Vertical Timeline Process',
    html: `<section class="py-5" style="background-color:var(--bs-dark);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Our Making Process</p>
      <h2 class="fw-bold" style="color:var(--bs-body-bg);">Inside the Atelier</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="d-flex gap-4 mb-4">
          <div class="d-flex flex-column align-items-center flex-shrink-0">
            <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width:40px;height:40px;min-height:40px;background-color:var(--bs-primary);color:#fff;font-size:0.9rem;">I</div>
            <div style="width:2px;flex:1;background-color:rgba(194,122,86,0.3);min-height:48px;margin-top:4px;"></div>
          </div>
          <div class="pb-4">
            <h6 class="fw-bold mb-1" style="color:var(--bs-body-bg);">Wood Selection</h6>
            <p style="color:#d4b9a4; font-size:0.92rem; line-height:1.7;">Each board is hand-selected from our seasoned stock. We look for grain flow, figure, and stability. Only the finest 30% of each delivery makes it to a commission.</p>
          </div>
        </div>
        <div class="d-flex gap-4 mb-4">
          <div class="d-flex flex-column align-items-center flex-shrink-0">
            <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width:40px;height:40px;min-height:40px;background-color:var(--bs-primary);color:#fff;font-size:0.9rem;">II</div>
            <div style="width:2px;flex:1;background-color:rgba(194,122,86,0.3);min-height:48px;margin-top:4px;"></div>
          </div>
          <div class="pb-4">
            <h6 class="fw-bold mb-1" style="color:var(--bs-body-bg);">Milling &amp; Drying</h6>
            <p style="color:#d4b9a4; font-size:0.92rem; line-height:1.7;">Selected boards are milled flat and allowed to acclimate in our workshop for a minimum of three weeks before cutting. This ensures dimensional stability for life.</p>
          </div>
        </div>
        <div class="d-flex gap-4 mb-4">
          <div class="d-flex flex-column align-items-center flex-shrink-0">
            <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width:40px;height:40px;min-height:40px;background-color:var(--bs-primary);color:#fff;font-size:0.9rem;">III</div>
            <div style="width:2px;flex:1;background-color:rgba(194,122,86,0.3);min-height:48px;margin-top:4px;"></div>
          </div>
          <div class="pb-4">
            <h6 class="fw-bold mb-1" style="color:var(--bs-body-bg);">Joinery &amp; Assembly</h6>
            <p style="color:#d4b9a4; font-size:0.92rem; line-height:1.7;">Mortise-and-tenon, dovetail, and draw-bore joinery are cut and fitted by hand. No hidden metal brackets. The wood locks into itself as it was designed to do.</p>
          </div>
        </div>
        <div class="d-flex gap-4">
          <div class="d-flex flex-column align-items-center flex-shrink-0">
            <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width:40px;height:40px;min-height:40px;background-color:var(--bs-primary);color:#fff;font-size:0.9rem;">IV</div>
          </div>
          <div>
            <h6 class="fw-bold mb-1" style="color:var(--bs-body-bg);">Finishing</h6>
            <p style="color:#d4b9a4; font-size:0.92rem; line-height:1.7;">Hand-sanding through six grits, followed by two coats of hardwax oil, hand-buffed. The grain sings. The wood breathes. It is ready to begin its life in your home.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── PRODUCTS ──────────────────────────────────────────────────────────────
  {
    id: 'fur-products-1',
    categoryId: 'products',
    label: 'Furniture – Product Grid with Add to Cart',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Shop the Collection</p>
      <h2 class="fw-bold" style="color:var(--bs-dark);">Bestselling Pieces</h2>
    </div>
    <div class="row g-4">
      <div class="col-sm-6 col-lg-3">
        <div class="h-100 d-flex flex-column" style="border:1px solid var(--bs-border-color); border-radius:3px; overflow:hidden; background-color:#fff;">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" alt="Tiago Lounge Chair" style="width:100%; height:240px; object-fit:cover;">
            <span class="badge position-absolute top-0 start-0 m-3" style="background-color:var(--bs-primary); border-radius:0;">Bestseller</span>
          </div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <div class="small mb-1" style="color:#a07860;">Lounge Seating</div>
            <div class="fw-semibold mb-1" style="color:var(--bs-dark);">Tiago Lounge Chair</div>
            <div class="fw-bold mb-3" style="color:var(--bs-primary);">£1,100</div>
            <a href="#" class="btn mt-auto w-100" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent; font-size:0.88rem; font-weight:600;">Add to Wishlist</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="h-100 d-flex flex-column" style="border:1px solid var(--bs-border-color); border-radius:3px; overflow:hidden; background-color:#fff;">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=800&q=80" alt="Harvest Dining Table" style="width:100%; height:240px; object-fit:cover;">
          </div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <div class="small mb-1" style="color:#a07860;">Dining</div>
            <div class="fw-semibold mb-1" style="color:var(--bs-dark);">Harvest Dining Table — 180cm</div>
            <div class="fw-bold mb-3" style="color:var(--bs-primary);">£1,850</div>
            <a href="#" class="btn mt-auto w-100" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent; font-size:0.88rem; font-weight:600;">Add to Wishlist</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="h-100 d-flex flex-column" style="border:1px solid var(--bs-border-color); border-radius:3px; overflow:hidden; background-color:#fff;">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1556909114-44e3e70034be?w=800&q=80" alt="Grain Sideboard" style="width:100%; height:240px; object-fit:cover;">
            <span class="badge position-absolute top-0 start-0 m-3" style="background-color:var(--bs-dark); border-radius:0;">New</span>
          </div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <div class="small mb-1" style="color:#a07860;">Storage</div>
            <div class="fw-semibold mb-1" style="color:var(--bs-dark);">Grain Sideboard — 160cm</div>
            <div class="fw-bold mb-3" style="color:var(--bs-primary);">£2,200</div>
            <a href="#" class="btn mt-auto w-100" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent; font-size:0.88rem; font-weight:600;">Add to Wishlist</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="h-100 d-flex flex-column" style="border:1px solid var(--bs-border-color); border-radius:3px; overflow:hidden; background-color:#fff;">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1567538096630-e3838a7f1a9b?w=800&q=80" alt="Volta Dining Chair" style="width:100%; height:240px; object-fit:cover;">
          </div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <div class="small mb-1" style="color:#a07860;">Dining Seating</div>
            <div class="fw-semibold mb-1" style="color:var(--bs-dark);">Volta Dining Chair</div>
            <div class="fw-bold mb-3" style="color:var(--bs-primary);">£395</div>
            <a href="#" class="btn mt-auto w-100" style="border:1.5px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px; background:transparent; font-size:0.88rem; font-weight:600;">Add to Wishlist</a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="#" class="btn btn-lg px-5 py-3 fw-semibold" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">View Full Collection</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'fur-products-2',
    categoryId: 'products',
    label: 'Furniture – Featured Product Detail Section',
    html: `<section class="py-5" style="background-color:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <div class="position-relative">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80" alt="The Madera Sofa" class="img-fluid w-100 rounded-1" style="object-fit:cover; height:480px;">
          <div class="row g-2 mt-2">
            <div class="col-4">
              <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80" alt="Sofa detail 1" class="img-fluid w-100 rounded-1" style="height:90px; object-fit:cover; cursor:pointer; border:2px solid var(--bs-primary);">
            </div>
            <div class="col-4">
              <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" alt="Sofa detail 2" class="img-fluid w-100 rounded-1" style="height:90px; object-fit:cover; cursor:pointer;">
            </div>
            <div class="col-4">
              <img src="https://images.unsplash.com/photo-1600210492493-0de1d7f0b1d5?w=800&q=80" alt="Sofa detail 3" class="img-fluid w-100 rounded-1" style="height:90px; object-fit:cover; cursor:pointer;">
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 ps-lg-4">
        <p class="text-uppercase fw-semibold mb-2" style="color:var(--bs-primary); letter-spacing:0.18em; font-size:0.78rem;">Living Room — Solstice Collection</p>
        <h2 class="fw-bold mb-2" style="color:var(--bs-dark);">The Madera Three-Seat Sofa</h2>
        <div class="d-flex align-items-center gap-2 mb-3">
          <span style="color:var(--bs-primary);">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <small style="color:#a07860;">(47 reviews)</small>
        </div>
        <div class="mb-4" style="font-size:1.7rem; font-weight:700; color:var(--bs-dark);">£3,200 <small style="font-size:0.9rem; color:#a07860; font-weight:400;">+ free delivery</small></div>
        <p class="mb-4" style="color:#7a5c47; line-height:1.8;">An heirloom sofa built on a solid oak frame with hand-tied springs and wool-blend upholstery. Deep seats, generous arms, and cushions that hold their shape for decades.</p>
        <div class="mb-3">
          <label class="fw-semibold mb-2 d-block" style="color:var(--bs-dark); font-size:0.9rem;">Upholstery</label>
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-sm py-1 px-3 fw-semibold" style="border:2px solid var(--bs-primary); color:var(--bs-primary); border-radius:2px;">Natural Linen</button>
            <button class="btn btn-sm py-1 px-3" style="border:1px solid var(--bs-border-color); color:#7a5c47; border-radius:2px;">Warm Wool</button>
            <button class="btn btn-sm py-1 px-3" style="border:1px solid var(--bs-border-color); color:#7a5c47; border-radius:2px;">Cognac Leather</button>
          </div>
        </div>
        <div class="mb-4">
          <label class="fw-semibold mb-2 d-block" style="color:var(--bs-dark); font-size:0.9rem;">Wood Finish</label>
          <select class="form-select" style="border-color:var(--bs-border-color); background:#fff; color:var(--bs-dark); border-radius:2px; max-width:260px;">
            <option>European White Oak — Natural</option>
            <option>European White Oak — Smoked</option>
            <option>Black American Walnut</option>
          </select>
        </div>
        <div class="d-flex gap-3 flex-wrap mb-4">
          <a href="#" class="btn btn-lg px-5 fw-semibold" style="background-color:var(--bs-primary); border-color:var(--bs-primary); color:#fff; border-radius:2px;">Add to Wishlist</a>
          <a href="#" class="btn btn-lg px-4" style="border:1.5px solid var(--bs-dark); color:var(--bs-dark); border-radius:2px; background:transparent;">Request a Sample</a>
        </div>
        <div class="d-flex gap-4 flex-wrap" style="color:#7a5c47; font-size:0.85rem;">
          <span>&#10003; &nbsp;8–12 week lead time</span>
          <span>&#10003; &nbsp;Lifetime structural guarantee</span>
          <span>&#10003; &nbsp;White-glove delivery included</span>
        </div>
      </div>
    </div>
  </div>
</section>`
  }
]
