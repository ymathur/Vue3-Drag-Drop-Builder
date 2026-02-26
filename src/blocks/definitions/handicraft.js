export const handicraftBlocks = [
  // ─── NAVIGATION ────────────────────────────────────────────────────────────
  {
    id: 'hcr-nav-1',
    categoryId: 'navigation',
    label: 'Handicraft – Indigo Heritage Nav',
    html: `<nav class="navbar navbar-expand-lg navbar-dark" style="background:var(--bs-dark);">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2" href="#">
      <span style="display:inline-block;width:32px;height:32px;background:var(--bs-primary);border-radius:50%;"></span>
      <span class="fw-bold fs-5" style="letter-spacing:0.04em;">Craft House Indira</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hcrNav1" aria-controls="hcrNav1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="hcrNav1">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Our Craft</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Collections</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Artisans</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Journal</a></li>
      </ul>
      <a href="#" class="btn btn-primary px-4 fw-semibold">Shop Now</a>
    </div>
  </div>
</nav>`
  },
  {
    id: 'hcr-nav-2',
    categoryId: 'navigation',
    label: 'Handicraft – Parchment Top Bar Nav',
    html: `<div>
  <div style="background:var(--bs-primary);" class="py-2 text-center">
    <span class="small fw-semibold" style="color:var(--bs-dark);">Free shipping on orders above ₹999 &nbsp;|&nbsp; Handcrafted with love, delivered to your door</span>
  </div>
  <nav class="navbar navbar-expand-lg" style="background:var(--bs-body-bg); border-bottom:2px solid var(--bs-border-color);">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#" style="color:var(--bs-dark); font-size:1.3rem; letter-spacing:0.05em;">The Folk Loom</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hcrNav2" aria-controls="hcrNav2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="hcrNav2">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link fw-semibold" href="#" style="color:var(--bs-dark);">Textiles</a></li>
          <li class="nav-item"><a class="nav-link fw-semibold" href="#" style="color:var(--bs-dark);">Pottery</a></li>
          <li class="nav-item"><a class="nav-link fw-semibold" href="#" style="color:var(--bs-dark);">Block Prints</a></li>
          <li class="nav-item"><a class="nav-link fw-semibold" href="#" style="color:var(--bs-dark);">Embroidery</a></li>
          <li class="nav-item"><a class="nav-link fw-semibold" href="#" style="color:var(--bs-dark);">Gifting</a></li>
        </ul>
        <div class="d-flex align-items-center gap-3">
          <a href="#" style="color:var(--bs-dark);"><i class="bi bi-search fs-5"></i></a>
          <a href="#" style="color:var(--bs-dark);"><i class="bi bi-bag fs-5"></i></a>
          <a href="#" class="btn btn-secondary btn-sm px-3 fw-semibold">Sign In</a>
        </div>
      </div>
    </div>
  </nav>
</div>`
  },

  // ─── HEROES ────────────────────────────────────────────────────────────────
  {
    id: 'hcr-hero-1',
    categoryId: 'heroes',
    label: 'Handicraft – Full-Width Block Print Hero',
    html: `<section class="position-relative text-white text-center" style="background:url('https://images.unsplash.com/photo-1452860606082-7e382d0bac84?w=1400&q=80') center/cover no-repeat; min-height:580px; display:flex; align-items:center;">
  <div class="position-absolute top-0 start-0 w-100 h-100" style="background:rgba(45,47,107,0.62);"></div>
  <div class="container position-relative py-5">
    <p class="text-uppercase fw-semibold mb-3" style="letter-spacing:0.15em; color:var(--bs-primary);">Handcrafted with Centuries of Tradition</p>
    <h1 class="display-3 fw-bold mb-4" style="font-family:'EB Garamond', serif; max-width:760px; margin:0 auto 1rem;">Every Piece Tells a Story of Heritage</h1>
    <p class="lead mb-5 mx-auto" style="max-width:560px; opacity:0.9;">Discover artisan goods woven, dyed, and hand-printed by a community of weavers and craftspeople preserving India's folk heritage.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-primary btn-lg px-5 fw-semibold">Explore Collection</a>
      <a href="#" class="btn btn-outline-light btn-lg px-5">Meet the Artisans</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-hero-2',
    categoryId: 'heroes',
    label: 'Handicraft – Split Hero with Pottery Image',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">The Folk Loom — Est. 1974</p>
        <h1 class="fw-bold mb-4" style="font-family:'EB Garamond', serif; font-size:3rem; line-height:1.15; color:var(--bs-dark);">Crafted by Hand,<br>Shaped by Heritage</h1>
        <p class="lead mb-4" style="color:#555;">From the potter's wheel to the weaver's loom — each piece in our collection is made by skilled artisans using natural dyes and traditional techniques passed through generations.</p>
        <div class="d-flex gap-3 flex-wrap mb-4">
          <a href="#" class="btn btn-primary btn-lg px-5 fw-semibold">Shop Handcrafted</a>
          <a href="#" class="btn btn-secondary btn-lg px-4">Our Story</a>
        </div>
        <div class="d-flex gap-4 mt-2">
          <div><div class="fw-bold fs-4" style="color:var(--bs-dark);">500+</div><div class="small text-muted">Artisan Partners</div></div>
          <div><div class="fw-bold fs-4" style="color:var(--bs-dark);">28</div><div class="small text-muted">Craft Traditions</div></div>
          <div><div class="fw-bold fs-4" style="color:var(--bs-dark);">15k+</div><div class="small text-muted">Happy Patrons</div></div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="position-relative">
          <img src="https://images.unsplash.com/photo-1492539438225-2666b2a98f93?w=800&q=80" alt="Artisan shaping pottery" class="img-fluid rounded-3 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
          <div class="position-absolute bottom-0 start-0 m-3 px-3 py-2 rounded-2" style="background:var(--bs-primary);">
            <span class="fw-bold" style="color:var(--bs-dark); font-size:0.85rem;">100% Natural Dyes &amp; Handmade</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FEATURES ───────────────────────────────────────────────────────────────
  {
    id: 'hcr-features-1',
    categoryId: 'features',
    label: 'Handicraft – 3-Column Craft Values',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Why Craft House Indira</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.4rem;">Rooted in Tradition, Made for Today</h2>
    </div>
    <div class="row g-4 text-center">
      <div class="col-md-4">
        <div class="p-4 rounded-3 h-100" style="background:var(--bs-body-bg); border:1.5px solid var(--bs-border-color);">
          <div class="mb-3" style="font-size:2.5rem;">🪡</div>
          <h5 class="fw-bold mb-2" style="color:var(--bs-dark);">Authentic Block Print</h5>
          <p class="text-muted mb-0">Each fabric is hand-stamped using carved teakwood blocks, a technique unchanged for over 400 years in the villages of Rajasthan.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 rounded-3 h-100" style="background:var(--bs-body-bg); border:1.5px solid var(--bs-border-color);">
          <div class="mb-3" style="font-size:2.5rem;">🌿</div>
          <h5 class="fw-bold mb-2" style="color:var(--bs-dark);">Natural Dye Heritage</h5>
          <p class="text-muted mb-0">We use indigo, turmeric, madder root, and pomegranate rind — plant-based dyes that are safe for you and gentle on the earth.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 rounded-3 h-100" style="background:var(--bs-body-bg); border:1.5px solid var(--bs-border-color);">
          <div class="mb-3" style="font-size:2.5rem;">🤝</div>
          <h5 class="fw-bold mb-2" style="color:var(--bs-dark);">Fair Artisan Wages</h5>
          <p class="text-muted mb-0">Every purchase directly supports our community of weavers and craftspeople, ensuring fair pay and sustainable livelihoods.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-features-2',
    categoryId: 'features',
    label: 'Handicraft – Horizontal Feature List with Image',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="row align-items-center g-5">
      <div class="col-lg-5">
        <img src="https://images.unsplash.com/photo-1579703822122-204d51e1bf5e?w=800&q=80" alt="Colorful handcrafted textiles" class="img-fluid rounded-3 shadow" style="width:100%; object-fit:cover; aspect-ratio:3/4; max-height:480px;">
      </div>
      <div class="col-lg-7">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Our Craft Promise</p>
        <h2 class="fw-bold mb-4" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.2rem;">Where Every Thread Carries Meaning</h2>
        <div class="d-flex flex-column gap-4">
          <div class="d-flex gap-3 align-items-start">
            <div class="flex-shrink-0 rounded-2 d-flex align-items-center justify-content-center" style="width:44px;height:44px;background:var(--bs-dark);">
              <span style="color:var(--bs-primary); font-size:1.2rem;">✦</span>
            </div>
            <div>
              <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Handcrafted, Not Mass-Produced</h6>
              <p class="text-muted mb-0 small">Each piece is made one at a time, by hand. No two are identical — that's the beauty of true artisan craft.</p>
            </div>
          </div>
          <div class="d-flex gap-3 align-items-start">
            <div class="flex-shrink-0 rounded-2 d-flex align-items-center justify-content-center" style="width:44px;height:44px;background:var(--bs-dark);">
              <span style="color:var(--bs-primary); font-size:1.2rem;">✦</span>
            </div>
            <div>
              <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Certified Craft Origin</h6>
              <p class="text-muted mb-0 small">All our artisans are verified members of recognised craft cooperatives and regional guilds.</p>
            </div>
          </div>
          <div class="d-flex gap-3 align-items-start">
            <div class="flex-shrink-0 rounded-2 d-flex align-items-center justify-content-center" style="width:44px;height:44px;background:var(--bs-dark);">
              <span style="color:var(--bs-primary); font-size:1.2rem;">✦</span>
            </div>
            <div>
              <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Ethically Sourced Materials</h6>
              <p class="text-muted mb-0 small">Khadi cotton, organic wool, and upcycled silk — sourced with care for both craft communities and the environment.</p>
            </div>
          </div>
          <div class="d-flex gap-3 align-items-start">
            <div class="flex-shrink-0 rounded-2 d-flex align-items-center justify-content-center" style="width:44px;height:44px;background:var(--bs-dark);">
              <span style="color:var(--bs-primary); font-size:1.2rem;">✦</span>
            </div>
            <div>
              <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Gift-Ready Packaging</h6>
              <p class="text-muted mb-0 small">All orders arrive wrapped in recycled block-print paper with a handwritten artisan note inside.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CONTENT ────────────────────────────────────────────────────────────────
  {
    id: 'hcr-content-1',
    categoryId: 'content',
    label: 'Handicraft – Story Section with Indigo Background',
    html: `<section class="py-5 bg-dark text-white">
  <div class="container py-3">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Our Heritage Story</p>
        <h2 class="fw-bold mb-4" style="font-family:'EB Garamond', serif; font-size:2.4rem; color:#fff;">Born in the Weaving Villages of India</h2>
        <p class="mb-3" style="opacity:0.85; line-height:1.8;">In the narrow lanes of Bagru and the sun-baked courtyards of Kutch, craft is not a profession — it is a birthright. Craft House Indira was founded to bring these stories to the world.</p>
        <p class="mb-4" style="opacity:0.85; line-height:1.8;">We partner with over 500 artisan families across 14 Indian states, documenting and preserving craft traditions that might otherwise be lost to time. When you buy from us, you keep a tradition alive.</p>
        <a href="#" class="btn btn-primary px-5 fw-semibold">Read Our Full Story</a>
      </div>
      <div class="col-lg-6">
        <img src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=800&q=80" alt="Weaver at traditional loom" class="img-fluid rounded-3 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-content-2',
    categoryId: 'content',
    label: 'Handicraft – Craft Technique Editorial',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="row justify-content-center mb-5">
      <div class="col-lg-7 text-center">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">The Art of Natural Dyeing</p>
        <h2 class="fw-bold mb-3" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">Indigo: The Colour of the Cosmos</h2>
        <p class="text-muted lead" style="font-size:1.05rem;">Indigo dyeing is one of the oldest crafts in the world. The deep blue of the cosmos, extracted from the Indigofera plant, has coloured the robes of kings and the saris of village weavers alike.</p>
      </div>
    </div>
    <div class="row g-4 align-items-start">
      <div class="col-lg-7">
        <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80" alt="Fabric dyeing in indigo vat" class="img-fluid rounded-3 shadow" style="width:100%; object-fit:cover; max-height:420px;">
      </div>
      <div class="col-lg-5">
        <h5 class="fw-bold mb-3" style="color:var(--bs-dark);">A Centuries-Old Process</h5>
        <p class="text-muted mb-3">The artisan dips clean cotton into the fermentation vat repeatedly, each dip building a richer, deeper shade of indigo blue. Exposure to air oxidises the dye and fixes it permanently.</p>
        <p class="text-muted mb-4">There are no shortcuts in natural dyeing — the process takes days and the results are gloriously unpredictable. This is why every piece dyed with natural indigo is unique.</p>
        <div class="d-flex flex-column gap-2">
          <div class="d-flex align-items-center gap-2"><span style="color:var(--bs-primary); font-weight:700;">01.</span><span class="text-muted small">Mordanting cotton to accept natural dye</span></div>
          <div class="d-flex align-items-center gap-2"><span style="color:var(--bs-primary); font-weight:700;">02.</span><span class="text-muted small">Preparing the indigo fermentation vat</span></div>
          <div class="d-flex align-items-center gap-2"><span style="color:var(--bs-primary); font-weight:700;">03.</span><span class="text-muted small">Repeated dipping and air oxidation</span></div>
          <div class="d-flex align-items-center gap-2"><span style="color:var(--bs-primary); font-weight:700;">04.</span><span class="text-muted small">Sun drying and finishing by hand</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CARDS ──────────────────────────────────────────────────────────────────
  {
    id: 'hcr-cards-1',
    categoryId: 'cards',
    label: 'Handicraft – Craft Category Cards',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Explore by Craft</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">Traditions Passed Through Generations</h2>
    </div>
    <div class="row g-4">
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color);">
          <img src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80" alt="Block Print" class="card-img-top" style="height:200px; object-fit:cover;">
          <div class="card-body">
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Block Printing</h6>
            <p class="text-muted small mb-3">Carved wooden blocks, vibrant pigments, and cloth — an ancient art form still alive in Rajasthan.</p>
            <a href="#" class="text-primary fw-semibold small text-decoration-none">Explore →</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color);">
          <img src="https://images.unsplash.com/photo-1579703822122-204d51e1bf5e?w=800&q=80" alt="Weaving" class="card-img-top" style="height:200px; object-fit:cover;">
          <div class="card-body">
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Handloom Weaving</h6>
            <p class="text-muted small mb-3">Every thread placed by a skilled weaver's hand — creating patterns that can take weeks to complete.</p>
            <a href="#" class="text-primary fw-semibold small text-decoration-none">Explore →</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color);">
          <img src="https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?w=800&q=80" alt="Ceramics" class="card-img-top" style="height:200px; object-fit:cover;">
          <div class="card-body">
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Painted Ceramics</h6>
            <p class="text-muted small mb-3">Blue pottery, terracotta ware, and hand-painted vessels shaped by the potters of Khurja and Jaipur.</p>
            <a href="#" class="text-primary fw-semibold small text-decoration-none">Explore →</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color);">
          <img src="https://images.unsplash.com/photo-1518730518541-d0a677d23b19?w=800&q=80" alt="Embroidery" class="card-img-top" style="height:200px; object-fit:cover;">
          <div class="card-body">
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Folk Embroidery</h6>
            <p class="text-muted small mb-3">Phulkari, Chikankari, Kantha — stitched stories of women who turned thread into art across India.</p>
            <a href="#" class="text-primary fw-semibold small text-decoration-none">Explore →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-cards-2',
    categoryId: 'cards',
    label: 'Handicraft – Artisan Profile Cards',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Meet the Makers</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">The Hands Behind the Heritage</h2>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-4">
        <div class="card text-center" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="card-body p-4">
            <img src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80" alt="Artisan Meera" class="rounded-circle mb-3 shadow" style="width:90px;height:90px;object-fit:cover; border:3px solid var(--bs-primary);">
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Meera Kumari</h6>
            <p class="small mb-2" style="color:var(--bs-primary); font-weight:600;">Block Print Master — Sanganer, Rajasthan</p>
            <p class="text-muted small mb-3">Meera has practiced the art of hand block printing for 32 years, inheriting her craft from her grandmother. Her floral motifs are instantly recognisable.</p>
            <span class="badge" style="background:var(--bs-dark); color:var(--bs-primary);">32 years of craft</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="card-body p-4">
            <img src="https://images.unsplash.com/photo-1492539438225-2666b2a98f93?w=800&q=80" alt="Artisan Rajan" class="rounded-circle mb-3 shadow" style="width:90px;height:90px;object-fit:cover; border:3px solid var(--bs-primary);">
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Rajan Prajapat</h6>
            <p class="small mb-2" style="color:var(--bs-primary); font-weight:600;">Potter — Khurja, Uttar Pradesh</p>
            <p class="text-muted small mb-3">Third-generation potter whose blue glazed ceramics have been showcased at national craft fairs and exported to over a dozen countries.</p>
            <span class="badge" style="background:var(--bs-dark); color:var(--bs-primary);">National Award — 2019</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="card-body p-4">
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80" alt="Artisan Fathima" class="rounded-circle mb-3 shadow" style="width:90px;height:90px;object-fit:cover; border:3px solid var(--bs-primary);">
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Fathima Bi</h6>
            <p class="small mb-2" style="color:var(--bs-primary); font-weight:600;">Basket Weaver — Nirmal, Telangana</p>
            <p class="text-muted small mb-3">Using bamboo, cane, and wild grass, Fathima creates functional and decorative pieces that tell the story of Telangana's forest craft tradition.</p>
            <span class="badge" style="background:var(--bs-dark); color:var(--bs-primary);">Community of 40 weavers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  {
    id: 'hcr-testimonials-1',
    categoryId: 'testimonials',
    label: 'Handicraft – 3-Column Patron Testimonials',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Patron Stories</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.2rem;">Loved by Those Who Value Craft</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 p-4" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.3rem;">★★★★★</div>
          <p class="text-muted mb-4" style="line-height:1.8;">"The block-print table runner I ordered is absolutely stunning. The craftsmanship is impeccable and it arrived with a handwritten note from the artisan. I felt a real connection to the heritage."</p>
          <div class="d-flex align-items-center gap-3 mt-auto">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Ananya S." class="rounded-circle" style="width:46px;height:46px;object-fit:cover; border:2px solid var(--bs-primary);">
            <div>
              <div class="fw-bold small" style="color:var(--bs-dark);">Ananya Sharma</div>
              <div class="text-muted" style="font-size:0.78rem;">Interior Designer, Mumbai</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.3rem;">★★★★★</div>
          <p class="text-muted mb-4" style="line-height:1.8;">"I gifted an indigo-dyed throw to my mother and she cried — it reminded her of the cloth her own mother used to weave. This is more than shopping. It's carrying tradition forward."</p>
          <div class="d-flex align-items-center gap-3 mt-auto">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Rohan M." class="rounded-circle" style="width:46px;height:46px;object-fit:cover; border:2px solid var(--bs-primary);">
            <div>
              <div class="fw-bold small" style="color:var(--bs-dark);">Rohan Mehta</div>
              <div class="text-muted" style="font-size:0.78rem;">Writer &amp; Heritage Traveller, Delhi</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.3rem;">★★★★★</div>
          <p class="text-muted mb-4" style="line-height:1.8;">"I have sourced artisan goods from across the globe but the quality and authenticity at Craft House Indira is second to none. Their curation is thoughtful and every piece is genuinely handcrafted."</p>
          <div class="d-flex align-items-center gap-3 mt-auto">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Priya K." class="rounded-circle" style="width:46px;height:46px;object-fit:cover; border:2px solid var(--bs-primary);">
            <div>
              <div class="fw-bold small" style="color:var(--bs-dark);">Priya Krishnan</div>
              <div class="text-muted" style="font-size:0.78rem;">Boutique Owner, Bengaluru</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-testimonials-2',
    categoryId: 'testimonials',
    label: 'Handicraft – Full-Width Feature Testimonial',
    html: `<section class="py-5 bg-dark text-white">
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <div class="mb-4" style="font-size:3rem; color:var(--bs-primary); line-height:1;">"</div>
        <p class="fs-4 fw-semibold mb-5" style="font-family:'EB Garamond', serif; font-size:1.6rem !important; line-height:1.7; opacity:0.95;">Buying from The Folk Loom changed the way I think about shopping. Knowing that a real artisan — with a name, a family, a centuries-old skill — made the sari I'm wearing makes it infinitely more precious. This is heritage you can hold.</p>
        <div class="d-flex align-items-center justify-content-center gap-4">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Lakshmi Nair" class="rounded-circle shadow" style="width:64px;height:64px;object-fit:cover; border:3px solid var(--bs-primary);">
          <div class="text-start">
            <div class="fw-bold" style="color:var(--bs-primary);">Lakshmi Nair</div>
            <div class="small" style="opacity:0.7;">Fashion Curator &amp; Cultural Commentator, Chennai</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CTA ────────────────────────────────────────────────────────────────────
  {
    id: 'hcr-cta-1',
    categoryId: 'cta',
    label: 'Handicraft – Saffron Banner CTA',
    html: `<section class="py-5 text-center" style="background:var(--bs-primary);">
  <div class="container py-3">
    <h2 class="fw-bold mb-3" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.5rem;">Take a Piece of Heritage Home</h2>
    <p class="lead mb-4 mx-auto" style="color:var(--bs-dark); max-width:580px; opacity:0.85;">Every item in our collection directly supports a family of artisans. Shop handcrafted goods that carry the soul of centuries of Indian folk tradition.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-secondary btn-lg px-5 fw-semibold">Browse All Collections</a>
      <a href="#" class="btn btn-outline-dark btn-lg px-5">Learn About Our Artisans</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-cta-2',
    categoryId: 'cta',
    label: 'Handicraft – Indigo CTA with Image',
    html: `<section class="py-5 bg-dark text-white">
  <div class="container py-3">
    <div class="row align-items-center g-5">
      <div class="col-lg-7">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Join Our Craft Community</p>
        <h2 class="fw-bold mb-3" style="font-family:'EB Garamond', serif; font-size:2.3rem;">Become a Patron of Living Heritage</h2>
        <p class="mb-4" style="opacity:0.82; line-height:1.8;">Subscribe to The Folk Loom Journal and be the first to know about new artisan stories, seasonal collections, behind-the-craft features, and exclusive patron-only offers.</p>
        <div class="d-flex gap-3 flex-wrap">
          <a href="#" class="btn btn-primary btn-lg px-5 fw-semibold">Subscribe Free</a>
          <a href="#" class="btn btn-outline-light btn-lg px-4">Gift a Craft Box</a>
        </div>
      </div>
      <div class="col-lg-5">
        <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80" alt="Spices and saffron" class="img-fluid rounded-3 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FORMS ──────────────────────────────────────────────────────────────────
  {
    id: 'hcr-forms-1',
    categoryId: 'forms',
    label: 'Handicraft – Newsletter Subscribe Form',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">The Craft Journal</p>
        <h2 class="fw-bold mb-3" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.1rem;">Stay Close to the Craft</h2>
        <p class="text-muted mb-4">Get artisan spotlights, seasonal collections, natural dyeing guides, and exclusive offers delivered to your inbox — no noise, only craft.</p>
        <form>
          <div class="input-group mb-3" style="max-width:460px; margin:0 auto;">
            <input type="email" class="form-control form-control-lg" placeholder="Your email address" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
            <button class="btn btn-primary px-4 fw-semibold" type="submit">Subscribe</button>
          </div>
          <p class="text-muted small mb-0">No spam, ever. Unsubscribe anytime. We respect your privacy.</p>
        </form>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-forms-2',
    categoryId: 'forms',
    label: 'Handicraft – Wholesale Inquiry Form',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="row g-5 align-items-start">
      <div class="col-lg-5">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Trade &amp; Wholesale</p>
        <h2 class="fw-bold mb-3" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.1rem;">Partner with Our Artisan Network</h2>
        <p class="text-muted mb-4" style="line-height:1.8;">Are you a boutique, hotel, gallery, or interior studio? We work with trade partners to supply authentic handcrafted goods at scale, without compromising on quality or artisan welfare.</p>
        <ul class="list-unstyled text-muted small">
          <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary); font-weight:700;">✦</span> Minimum order from 10 units per SKU</li>
          <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary); font-weight:700;">✦</span> Custom colourways and branding available</li>
          <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary); font-weight:700;">✦</span> Origin certificates and artisan documentation</li>
          <li class="mb-2 d-flex gap-2"><span style="color:var(--bs-primary); font-weight:700;">✦</span> Dedicated account manager assigned</li>
        </ul>
      </div>
      <div class="col-lg-7">
        <div class="card p-4 p-lg-5" style="border:1.5px solid var(--bs-border-color); background:#fff;">
          <h5 class="fw-bold mb-4" style="color:var(--bs-dark);">Send an Inquiry</h5>
          <form>
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="form-label small fw-semibold" style="color:var(--bs-dark);">Full Name</label>
                <input type="text" class="form-control" placeholder="Your name" style="border:1.5px solid var(--bs-border-color);">
              </div>
              <div class="col-sm-6">
                <label class="form-label small fw-semibold" style="color:var(--bs-dark);">Business Name</label>
                <input type="text" class="form-control" placeholder="Your business" style="border:1.5px solid var(--bs-border-color);">
              </div>
              <div class="col-12">
                <label class="form-label small fw-semibold" style="color:var(--bs-dark);">Email Address</label>
                <input type="email" class="form-control" placeholder="trade@yourbusiness.com" style="border:1.5px solid var(--bs-border-color);">
              </div>
              <div class="col-12">
                <label class="form-label small fw-semibold" style="color:var(--bs-dark);">Craft Categories of Interest</label>
                <select class="form-select" style="border:1.5px solid var(--bs-border-color);">
                  <option selected disabled>Select a category</option>
                  <option>Block Print Textiles</option>
                  <option>Handloom Fabrics</option>
                  <option>Ceramics &amp; Pottery</option>
                  <option>Embroidery &amp; Needlework</option>
                  <option>Basket Weaving</option>
                  <option>Multiple Categories</option>
                </select>
              </div>
              <div class="col-12">
                <label class="form-label small fw-semibold" style="color:var(--bs-dark);">Tell Us About Your Requirements</label>
                <textarea class="form-control" rows="3" placeholder="Expected volumes, specific requirements, timelines..." style="border:1.5px solid var(--bs-border-color);"></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold">Submit Inquiry</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── PRICING ─────────────────────────────────────────────────────────────────
  {
    id: 'hcr-pricing-1',
    categoryId: 'pricing',
    label: 'Handicraft – Craft Subscription Tiers',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">The Craft Box Subscription</p>
      <h2 class="fw-bold mb-2" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">Handcrafted, Every Season</h2>
      <p class="text-muted">A curated selection of authentic artisan goods delivered to your door quarterly.</p>
    </div>
    <div class="row g-4 justify-content-center align-items-stretch">
      <div class="col-md-4">
        <div class="card h-100" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="card-body p-4 p-lg-5 d-flex flex-column">
            <h5 class="fw-bold mb-1" style="color:var(--bs-dark);">Patron</h5>
            <p class="text-muted small mb-4">For those beginning their craft journey</p>
            <div class="display-5 fw-bold mb-4" style="color:var(--bs-dark);">₹999<small class="fs-5 text-muted fw-normal">/quarter</small></div>
            <ul class="list-unstyled mb-4 flex-grow-1">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>2 handcrafted items</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Artisan story card</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Block-print gift wrap</span></li>
              <li class="mb-2 d-flex gap-2 opacity-50"><i class="bi bi-x-circle mt-1 flex-shrink-0"></i><span>Exclusive patron discounts</span></li>
            </ul>
            <a href="#" class="btn btn-secondary w-100 fw-semibold">Subscribe</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 position-relative overflow-hidden" style="border:2px solid var(--bs-primary); background:var(--bs-body-bg);">
          <div class="position-absolute top-0 end-0 px-3 py-1" style="background:var(--bs-primary);">
            <span class="fw-bold small" style="color:var(--bs-dark);">Most Loved</span>
          </div>
          <div class="card-body p-4 p-lg-5 d-flex flex-column">
            <h5 class="fw-bold mb-1" style="color:var(--bs-dark);">Heritage</h5>
            <p class="text-muted small mb-4">Our signature craft experience</p>
            <div class="display-5 fw-bold mb-4" style="color:var(--bs-dark);">₹1,999<small class="fs-5 text-muted fw-normal">/quarter</small></div>
            <ul class="list-unstyled mb-4 flex-grow-1">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>5 handcrafted items</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Artisan story card + photo</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Block-print gift wrap</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>10% patron store discount</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Exclusive craft workshop invite</span></li>
            </ul>
            <a href="#" class="btn btn-primary w-100 fw-semibold">Subscribe</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="card-body p-4 p-lg-5 d-flex flex-column">
            <h5 class="fw-bold mb-1" style="color:var(--bs-dark);">Connoisseur</h5>
            <p class="text-muted small mb-4">For the dedicated craft collector</p>
            <div class="display-5 fw-bold mb-4" style="color:var(--bs-dark);">₹3,999<small class="fs-5 text-muted fw-normal">/quarter</small></div>
            <ul class="list-unstyled mb-4 flex-grow-1">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>10 handcrafted items</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Personalised artisan letter</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Premium block-print packaging</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>20% patron store discount</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0" style="color:var(--bs-primary);"></i><span>Annual artisan village visit</span></li>
            </ul>
            <a href="#" class="btn btn-secondary w-100 fw-semibold">Subscribe</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-pricing-2',
    categoryId: 'pricing',
    label: 'Handicraft – Custom Commission Pricing',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Custom Commissions</p>
      <h2 class="fw-bold mb-2" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">A Piece Made Just for You</h2>
      <p class="text-muted mx-auto" style="max-width:560px;">Commission a one-of-a-kind handcrafted piece with your chosen motifs, colours, and dimensions. Each commission is made by a master artisan and comes with a certificate of origin.</p>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 text-center" style="border:1.5px solid var(--bs-border-color); background:#fff;">
          <div class="card-body p-4">
            <div class="mb-3 rounded-2 mx-auto d-flex align-items-center justify-content-center" style="width:56px;height:56px;background:var(--bs-dark);">
              <span style="color:var(--bs-primary); font-size:1.5rem;">🪡</span>
            </div>
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Textile Commission</h6>
            <p class="text-muted small mb-3">Custom block-print yardage, handloom sarees, or embroidered table linen</p>
            <div class="fw-bold fs-4 mb-3" style="color:var(--bs-dark);">From ₹3,500</div>
            <a href="#" class="btn btn-primary btn-sm w-100 fw-semibold">Request Quote</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 text-center" style="border:2px solid var(--bs-primary); background:#fff;">
          <div class="card-body p-4">
            <div class="mb-3 rounded-2 mx-auto d-flex align-items-center justify-content-center" style="width:56px;height:56px;background:var(--bs-primary);">
              <span style="color:var(--bs-dark); font-size:1.5rem;">🏺</span>
            </div>
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Ceramic Commission</h6>
            <p class="text-muted small mb-3">Hand-thrown and painted dinnerware sets, planters, and decorative vessels</p>
            <div class="fw-bold fs-4 mb-3" style="color:var(--bs-dark);">From ₹2,200</div>
            <a href="#" class="btn btn-primary btn-sm w-100 fw-semibold">Request Quote</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 text-center" style="border:1.5px solid var(--bs-border-color); background:#fff;">
          <div class="card-body p-4">
            <div class="mb-3 rounded-2 mx-auto d-flex align-items-center justify-content-center" style="width:56px;height:56px;background:var(--bs-dark);">
              <span style="color:var(--bs-primary); font-size:1.5rem;">🧺</span>
            </div>
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Woven &amp; Basket Commission</h6>
            <p class="text-muted small mb-3">Custom bamboo furniture, storage baskets, and sculptural wall art</p>
            <div class="fw-bold fs-4 mb-3" style="color:var(--bs-dark);">From ₹1,800</div>
            <a href="#" class="btn btn-primary btn-sm w-100 fw-semibold">Request Quote</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FOOTERS ─────────────────────────────────────────────────────────────────
  {
    id: 'hcr-footer-1',
    categoryId: 'footers',
    label: 'Handicraft – Indigo Heritage Footer',
    html: `<footer style="background:var(--bs-dark); color:rgba(255,255,255,0.85);">
  <div class="container py-5">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="fw-bold fs-5 mb-2" style="color:var(--bs-primary); font-family:'EB Garamond', serif; letter-spacing:0.05em;">Craft House Indira</div>
        <p class="small mb-4" style="opacity:0.75; line-height:1.8;">Preserving India's living craft heritage since 1974. We work with a community of weavers, potters, and artisans across 14 states to bring you authentic handcrafted goods.</p>
        <div class="d-flex gap-3">
          <a href="#" style="color:var(--bs-primary);"><i class="bi bi-instagram fs-5"></i></a>
          <a href="#" style="color:var(--bs-primary);"><i class="bi bi-facebook fs-5"></i></a>
          <a href="#" style="color:var(--bs-primary);"><i class="bi bi-pinterest fs-5"></i></a>
          <a href="#" style="color:var(--bs-primary);"><i class="bi bi-youtube fs-5"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <h6 class="fw-bold mb-3" style="color:var(--bs-primary);">Collections</h6>
        <ul class="list-unstyled small">
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Block Print</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Handloom Textiles</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Ceramics</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Embroidery</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Basket Weaving</a></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <h6 class="fw-bold mb-3" style="color:var(--bs-primary);">About</h6>
        <ul class="list-unstyled small">
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Our Story</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Our Artisans</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Craft Journal</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Wholesale</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.7); text-decoration:none;">Contact Us</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6">
        <h6 class="fw-bold mb-3" style="color:var(--bs-primary);">The Craft Journal</h6>
        <p class="small mb-3" style="opacity:0.75;">Artisan spotlights, natural dyeing guides, and exclusive offers — delivered quarterly.</p>
        <div class="input-group">
          <input type="email" class="form-control form-control-sm" placeholder="Your email" style="background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.25); color:#fff;">
          <button class="btn btn-primary btn-sm px-3 fw-semibold" type="button">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid rgba(255,255,255,0.15);">
    <div class="container py-3 d-flex flex-wrap justify-content-between align-items-center gap-2">
      <p class="small mb-0" style="opacity:0.55;">© 2025 Craft House Indira. All rights reserved.</p>
      <div class="d-flex gap-3">
        <a href="#" class="small text-decoration-none" style="color:rgba(255,255,255,0.5);">Privacy</a>
        <a href="#" class="small text-decoration-none" style="color:rgba(255,255,255,0.5);">Terms</a>
        <a href="#" class="small text-decoration-none" style="color:rgba(255,255,255,0.5);">Shipping</a>
      </div>
    </div>
  </div>
</footer>`
  },
  {
    id: 'hcr-footer-2',
    categoryId: 'footers',
    label: 'Handicraft – Parchment Minimal Footer',
    html: `<footer style="background:var(--bs-body-bg); border-top:3px solid var(--bs-primary);">
  <div class="container py-5">
    <div class="row g-4 justify-content-between">
      <div class="col-lg-5">
        <div class="fw-bold fs-5 mb-2" style="color:var(--bs-dark); font-family:'EB Garamond', serif;">The Folk Loom</div>
        <p class="text-muted small mb-3" style="line-height:1.8;">Handcrafted goods made by India's finest artisans using traditional techniques, natural dyes, and heritage materials. Shipped worldwide with care.</p>
        <div class="d-flex gap-3">
          <a href="#" style="color:var(--bs-dark);"><i class="bi bi-instagram"></i></a>
          <a href="#" style="color:var(--bs-dark);"><i class="bi bi-facebook"></i></a>
          <a href="#" style="color:var(--bs-dark);"><i class="bi bi-pinterest"></i></a>
        </div>
      </div>
      <div class="col-sm-4 col-lg-2">
        <h6 class="fw-bold mb-3" style="color:var(--bs-dark);">Shop</h6>
        <ul class="list-unstyled small text-muted">
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">New Arrivals</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Textiles</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Ceramics</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Gifting</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-lg-2">
        <h6 class="fw-bold mb-3" style="color:var(--bs-dark);">Help</h6>
        <ul class="list-unstyled small text-muted">
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">FAQs</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Shipping Info</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Returns</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid var(--bs-border-color);">
    <div class="container py-3 text-center">
      <p class="small text-muted mb-0">© 2025 The Folk Loom &nbsp;|&nbsp; Handcrafted with centuries of tradition &nbsp;|&nbsp; <a href="#" class="text-muted text-decoration-none">Privacy Policy</a></p>
    </div>
  </div>
</footer>`
  },

  // ─── GALLERY ─────────────────────────────────────────────────────────────────
  {
    id: 'hcr-gallery-1',
    categoryId: 'gallery',
    label: 'Handicraft – Masonry Craft Photo Gallery',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">The Craft in Images</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.2rem;">A Visual Journey Through Heritage</h2>
    </div>
    <div class="row g-3">
      <div class="col-md-8">
        <img src="https://images.unsplash.com/photo-1452860606082-7e382d0bac84?w=1400&q=80" alt="Craft market" class="img-fluid rounded-3 shadow" style="width:100%; height:340px; object-fit:cover;">
      </div>
      <div class="col-md-4 d-flex flex-column gap-3">
        <img src="https://images.unsplash.com/photo-1492539438225-2666b2a98f93?w=800&q=80" alt="Pottery hands" class="img-fluid rounded-3 shadow" style="width:100%; height:160px; object-fit:cover;">
        <img src="https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?w=800&q=80" alt="Painted ceramics" class="img-fluid rounded-3 shadow" style="width:100%; height:160px; object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1518730518541-d0a677d23b19?w=800&q=80" alt="Traditional embroidery" class="img-fluid rounded-3 shadow" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80" alt="Fabric dyeing" class="img-fluid rounded-3 shadow" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80" alt="Basket weaving" class="img-fluid rounded-3 shadow" style="width:100%; height:220px; object-fit:cover;">
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="#" class="btn btn-secondary px-5 fw-semibold">View Full Gallery</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-gallery-2',
    categoryId: 'gallery',
    label: 'Handicraft – Uniform Grid Gallery',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">Artisan at Work</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.2rem;">The Making of Craft</h2>
    </div>
    <div class="row g-3">
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80" alt="Artisan at work" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=800&q=80" alt="Weaving loom" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80" alt="Block print fabric" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1579703822122-204d51e1bf5e?w=800&q=80" alt="Colorful textiles" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Artisan market" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80" alt="Spices saffron" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1492539438225-2666b2a98f93?w=800&q=80" alt="Pottery" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <img src="https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?w=800&q=80" alt="Ceramics" class="img-fluid rounded-3 shadow-sm" style="width:100%; height:220px; object-fit:cover;">
      </div>
    </div>
  </div>
</section>`
  },

  // ─── SOCIAL PROOF ────────────────────────────────────────────────────────────
  {
    id: 'hcr-social-proof-1',
    categoryId: 'social-proof',
    label: 'Handicraft – Press & Recognition Bar',
    html: `<section class="py-4 bg-light" style="border-top:2px solid var(--bs-border-color); border-bottom:2px solid var(--bs-border-color);">
  <div class="container">
    <div class="row align-items-center g-3">
      <div class="col-12 col-md-3 text-center text-md-start">
        <p class="small fw-semibold text-uppercase mb-0" style="letter-spacing:0.1em; color:var(--bs-primary);">As Featured In</p>
      </div>
      <div class="col-12 col-md-9">
        <div class="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center gap-4">
          <span class="fw-bold text-muted" style="font-size:1.05rem; font-family:'EB Garamond', serif;">Vogue India</span>
          <span class="fw-bold text-muted" style="font-size:1.05rem; font-family:'EB Garamond', serif;">Craft Quarterly</span>
          <span class="fw-bold text-muted" style="font-size:1.05rem; font-family:'EB Garamond', serif;">The Hindu</span>
          <span class="fw-bold text-muted" style="font-size:1.05rem; font-family:'EB Garamond', serif;">Architectural Digest</span>
          <span class="fw-bold text-muted" style="font-size:1.05rem; font-family:'EB Garamond', serif;">Artisan World</span>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-social-proof-2',
    categoryId: 'social-proof',
    label: 'Handicraft – Stats & Awards Social Proof',
    html: `<section class="py-5 bg-dark text-white">
  <div class="container py-3">
    <div class="row text-center g-4 mb-5">
      <div class="col-6 col-md-3">
        <div class="fw-bold" style="font-size:2.8rem; color:var(--bs-primary); font-family:'EB Garamond', serif;">500+</div>
        <div class="small" style="opacity:0.75;">Artisan Families Supported</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="fw-bold" style="font-size:2.8rem; color:var(--bs-primary); font-family:'EB Garamond', serif;">28</div>
        <div class="small" style="opacity:0.75;">Living Craft Traditions</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="fw-bold" style="font-size:2.8rem; color:var(--bs-primary); font-family:'EB Garamond', serif;">15k+</div>
        <div class="small" style="opacity:0.75;">Pieces Sold Worldwide</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="fw-bold" style="font-size:2.8rem; color:var(--bs-primary); font-family:'EB Garamond', serif;">4.9★</div>
        <div class="small" style="opacity:0.75;">Average Patron Rating</div>
      </div>
    </div>
    <div class="row justify-content-center g-3 text-center">
      <div class="col-12 mb-3">
        <p class="text-uppercase fw-semibold mb-0" style="letter-spacing:0.12em; color:var(--bs-primary); opacity:0.8; font-size:0.8rem;">Awards &amp; Recognition</p>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:rgba(255,255,255,0.07); border:1px solid rgba(240,165,0,0.3);">
          <div class="fw-semibold small mb-1" style="color:var(--bs-primary);">National Crafts Council</div>
          <div class="small" style="opacity:0.65;">Best Heritage Brand 2023</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:rgba(255,255,255,0.07); border:1px solid rgba(240,165,0,0.3);">
          <div class="fw-semibold small mb-1" style="color:var(--bs-primary);">GI Certification</div>
          <div class="small" style="opacity:0.65;">14 Verified Craft Origins</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:rgba(255,255,255,0.07); border:1px solid rgba(240,165,0,0.3);">
          <div class="fw-semibold small mb-1" style="color:var(--bs-primary);">UNESCO Nominee</div>
          <div class="small" style="opacity:0.65;">Living Heritage Partner</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:rgba(255,255,255,0.07); border:1px solid rgba(240,165,0,0.3);">
          <div class="fw-semibold small mb-1" style="color:var(--bs-primary);">Vogue India</div>
          <div class="small" style="opacity:0.65;">Top 10 Craft Brands 2024</div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── PROCESS ─────────────────────────────────────────────────────────────────
  {
    id: 'hcr-process-1',
    categoryId: 'process',
    label: 'Handicraft – How It\'s Made Process Steps',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">The Craft Process</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">From Loom to Your Doorstep</h2>
      <p class="text-muted mx-auto" style="max-width:540px;">Every piece you receive has traveled a long and beautiful journey — here is how it comes to life.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-3 text-center">
        <div class="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold" style="width:60px;height:60px;background:var(--bs-dark);color:var(--bs-primary);font-size:1.4rem;font-family:'EB Garamond',serif;">01</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Sourcing Materials</h6>
        <p class="text-muted small">Khadi cotton, natural wool, and wild plant fibres are sourced directly from farming cooperatives and forest communities.</p>
      </div>
      <div class="col-md-3 text-center">
        <div class="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold" style="width:60px;height:60px;background:var(--bs-dark);color:var(--bs-primary);font-size:1.4rem;font-family:'EB Garamond',serif;">02</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Natural Dyeing</h6>
        <p class="text-muted small">Artisans prepare mordant baths and fermentation vats using indigo, madder, marigold, and turmeric to achieve rich, lasting colours.</p>
      </div>
      <div class="col-md-3 text-center">
        <div class="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold" style="width:60px;height:60px;background:var(--bs-dark);color:var(--bs-primary);font-size:1.4rem;font-family:'EB Garamond',serif;">03</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Handcrafting</h6>
        <p class="text-muted small">Block printing, weaving, embroidery, or throwing on the potter's wheel — every item is made entirely by hand, one at a time.</p>
      </div>
      <div class="col-md-3 text-center">
        <div class="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold" style="width:60px;height:60px;background:var(--bs-primary);color:var(--bs-dark);font-size:1.4rem;font-family:'EB Garamond',serif;">04</div>
        <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Curated &amp; Shipped</h6>
        <p class="text-muted small">Each item is quality-checked, photographed, wrapped in recycled block-print paper, and shipped to you with an artisan origin card.</p>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-process-2',
    categoryId: 'process',
    label: 'Handicraft – Commission Order Process',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">How to Commission</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">A Bespoke Piece in 4 Simple Steps</h2>
    </div>
    <div class="row g-4 align-items-start">
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 p-4 text-center" style="border:1.5px solid var(--bs-border-color); background:#fff;">
          <div class="mb-3" style="font-size:2rem; color:var(--bs-primary);">📋</div>
          <div class="fw-bold small mb-1" style="color:var(--bs-primary);">Step 01</div>
          <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Tell Us Your Vision</h6>
          <p class="text-muted small mb-0">Fill in our commission inquiry form with your preferred craft type, dimensions, colour palette, and budget.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 p-4 text-center" style="border:1.5px solid var(--bs-border-color); background:#fff;">
          <div class="mb-3" style="font-size:2rem; color:var(--bs-primary);">🎨</div>
          <div class="fw-bold small mb-1" style="color:var(--bs-primary);">Step 02</div>
          <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Design Consultation</h6>
          <p class="text-muted small mb-0">Our craft advisor connects you with the ideal artisan and shares sample motifs, colour swatches, and a detailed quote.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 p-4 text-center" style="border:1.5px solid var(--bs-border-color); background:#fff;">
          <div class="mb-3" style="font-size:2rem; color:var(--bs-primary);">🪡</div>
          <div class="fw-bold small mb-1" style="color:var(--bs-primary);">Step 03</div>
          <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Artisan Creates</h6>
          <p class="text-muted small mb-0">Your approved artisan begins work. You receive progress photographs and can request adjustments along the way.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 p-4 text-center" style="border:1.5px solid var(--bs-border-color); background:#fff;">
          <div class="mb-3" style="font-size:2rem; color:var(--bs-primary);">📦</div>
          <div class="fw-bold small mb-1" style="color:var(--bs-primary);">Step 04</div>
          <h6 class="fw-bold mb-2" style="color:var(--bs-dark);">Delivered with Care</h6>
          <p class="text-muted small mb-0">Your finished piece is inspected, packed in heritage gift wrap, and shipped with a signed certificate of artisan origin.</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="#" class="btn btn-primary btn-lg px-5 fw-semibold">Start Your Commission</a>
    </div>
  </div>
</section>`
  },

  // ─── PRODUCTS ────────────────────────────────────────────────────────────────
  {
    id: 'hcr-products-1',
    categoryId: 'products',
    label: 'Handicraft – Artisan Product Grid',
    html: `<section class="py-5 bg-light">
  <div class="container py-3">
    <div class="text-center mb-5">
      <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.12em; color:var(--bs-primary);">New Arrivals</p>
      <h2 class="fw-bold" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2.3rem;">Fresh from the Artisan's Hands</h2>
    </div>
    <div class="row g-4">
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80" alt="Block Print Stole" class="card-img-top" style="height:240px; object-fit:cover;">
            <span class="position-absolute top-0 start-0 m-2 badge" style="background:var(--bs-primary); color:var(--bs-dark);">New</span>
          </div>
          <div class="card-body d-flex flex-column">
            <p class="small mb-1" style="color:var(--bs-primary); font-weight:600;">Block Print</p>
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Indigo Floral Stole</h6>
            <p class="text-muted small mb-2">By Meera Kumari, Sanganer</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <span class="fw-bold" style="color:var(--bs-dark);">₹1,200</span>
              <a href="#" class="btn btn-primary btn-sm px-3 fw-semibold">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?w=800&q=80" alt="Hand-painted Ceramic Bowl" class="card-img-top" style="height:240px; object-fit:cover;">
            <span class="position-absolute top-0 start-0 m-2 badge" style="background:var(--bs-dark); color:var(--bs-primary);">Bestseller</span>
          </div>
          <div class="card-body d-flex flex-column">
            <p class="small mb-1" style="color:var(--bs-primary); font-weight:600;">Ceramics</p>
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Hand-painted Serving Bowl</h6>
            <p class="text-muted small mb-2">By Rajan Prajapat, Khurja</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <span class="fw-bold" style="color:var(--bs-dark);">₹850</span>
              <a href="#" class="btn btn-primary btn-sm px-3 fw-semibold">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1518730518541-d0a677d23b19?w=800&q=80" alt="Phulkari Cushion" class="card-img-top" style="height:240px; object-fit:cover;">
          </div>
          <div class="card-body d-flex flex-column">
            <p class="small mb-1" style="color:var(--bs-primary); font-weight:600;">Embroidery</p>
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Phulkari Cushion Cover</h6>
            <p class="text-muted small mb-2">Punjab Embroidery Collective</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <span class="fw-bold" style="color:var(--bs-dark);">₹680</span>
              <a href="#" class="btn btn-primary btn-sm px-3 fw-semibold">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="border:1.5px solid var(--bs-border-color); background:var(--bs-body-bg);">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80" alt="Bamboo Tray Set" class="card-img-top" style="height:240px; object-fit:cover;">
            <span class="position-absolute top-0 start-0 m-2 badge" style="background:var(--bs-dark); color:var(--bs-primary);">Limited</span>
          </div>
          <div class="card-body d-flex flex-column">
            <p class="small mb-1" style="color:var(--bs-primary); font-weight:600;">Basket Weaving</p>
            <h6 class="fw-bold mb-1" style="color:var(--bs-dark);">Bamboo Serving Tray Set</h6>
            <p class="text-muted small mb-2">By Fathima Bi, Nirmal</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <span class="fw-bold" style="color:var(--bs-dark);">₹1,450</span>
              <a href="#" class="btn btn-primary btn-sm px-3 fw-semibold">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="#" class="btn btn-secondary px-5 fw-semibold">Browse All Products</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'hcr-products-2',
    categoryId: 'products',
    label: 'Handicraft – Featured Product Detail',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <div class="row g-2">
          <div class="col-12">
            <img src="https://images.unsplash.com/photo-1579703822122-204d51e1bf5e?w=800&q=80" alt="Handwoven Ikat Throw" class="img-fluid rounded-3 shadow" style="width:100%; object-fit:cover; height:360px;">
          </div>
          <div class="col-4">
            <img src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=800&q=80" alt="Loom detail" class="img-fluid rounded-2" style="height:90px; width:100%; object-fit:cover; border:2px solid var(--bs-border-color);">
          </div>
          <div class="col-4">
            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80" alt="Dye process" class="img-fluid rounded-2" style="height:90px; width:100%; object-fit:cover; border:2px solid var(--bs-border-color);">
          </div>
          <div class="col-4">
            <img src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80" alt="Artisan" class="img-fluid rounded-2" style="height:90px; width:100%; object-fit:cover; border:2px solid var(--bs-border-color);">
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing:0.1em; color:var(--bs-primary);">Handloom Textiles</p>
        <h2 class="fw-bold mb-2" style="font-family:'EB Garamond', serif; color:var(--bs-dark); font-size:2rem;">Double Ikat Silk Throw</h2>
        <div class="d-flex align-items-center gap-2 mb-3">
          <span style="color:var(--bs-primary);">★★★★★</span>
          <span class="small text-muted">(47 reviews)</span>
        </div>
        <p class="text-muted small mb-2">By the Patan Weaving Cooperative, Gujarat</p>
        <div class="mb-3">
          <span class="fw-bold" style="color:var(--bs-dark); font-size:1.8rem;">₹4,800</span>
          <span class="text-decoration-line-through text-muted ms-2 small">₹6,200</span>
          <span class="badge ms-2" style="background:var(--bs-primary); color:var(--bs-dark);">Save 22%</span>
        </div>
        <p class="text-muted mb-4" style="line-height:1.8;">Woven on a traditional pit loom using the rare double ikat technique — where both warp and weft threads are resist-dyed before weaving. Each throw takes three master weavers up to 14 days to complete.</p>
        <div class="mb-3">
          <span class="fw-semibold small me-3" style="color:var(--bs-dark);">Colour:</span>
          <button class="btn btn-sm rounded-pill me-2 fw-semibold" style="background:var(--bs-dark); color:var(--bs-primary); border:none; font-size:0.75rem;">Indigo &amp; Saffron</button>
          <button class="btn btn-sm rounded-pill me-2 fw-semibold" style="background:var(--bs-body-bg); color:var(--bs-dark); border:1.5px solid var(--bs-border-color); font-size:0.75rem;">Rust &amp; Cream</button>
        </div>
        <div class="d-flex gap-3 mb-4 flex-wrap">
          <a href="#" class="btn btn-primary btn-lg px-5 fw-semibold">Add to Cart</a>
          <a href="#" class="btn btn-secondary btn-lg px-4">Wishlist</a>
        </div>
        <div class="d-flex gap-4 small text-muted flex-wrap">
          <span><i class="bi bi-truck me-1"></i>Free shipping above ₹999</span>
          <span><i class="bi bi-award me-1"></i>GI Tagged Origin</span>
          <span><i class="bi bi-arrow-return-left me-1"></i>14-day returns</span>
        </div>
      </div>
    </div>
  </div>
</section>`
  }
]
