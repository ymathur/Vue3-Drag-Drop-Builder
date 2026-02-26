export const trailerBlocks = [
  // ─── NAVIGATION ──────────────────────────────────────────────────────────────
  {
    id: 'trl-nav-1',
    categoryId: 'navigation',
    label: 'Trailer – Dark Adventure Nav',
    html: `<nav class="navbar navbar-dark navbar-expand-lg" style="background:var(--bs-body-bg); border-bottom:2px solid var(--bs-primary);">
  <div class="container">
    <a class="navbar-brand fw-bold text-white fs-4" href="#" style="letter-spacing:2px;">
      <span class="text-primary">TRAIL</span>FORCE
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#trlNav1" aria-controls="trlNav1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="trlNav1">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
        <li class="nav-item"><a class="nav-link text-light fw-semibold" href="#">Gear</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-semibold" href="#">Trailers</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-semibold" href="#">Expeditions</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-semibold" href="#">Community</a></li>
      </ul>
      <div class="ms-lg-3 mt-3 mt-lg-0 d-flex gap-2">
        <a href="#" class="btn btn-outline-primary btn-sm px-3 fw-semibold">Sign In</a>
        <a href="#" class="btn btn-primary btn-sm px-3 fw-semibold">Shop Now</a>
      </div>
    </div>
  </div>
</nav>`
  },
  {
    id: 'trl-nav-2',
    categoryId: 'navigation',
    label: 'Trailer – Expedition Nav with Dropdown',
    html: `<nav class="navbar navbar-dark navbar-expand-lg py-3" style="background:var(--bs-body-bg);">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2 text-white fw-bold" href="#">
      <span style="display:inline-block;width:32px;height:32px;background:var(--bs-primary);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);"></span>
      <span style="letter-spacing:3px;">BASECAMP</span>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#trlNav2" aria-controls="trlNav2" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="trlNav2">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link text-light" href="#">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Adventure</a>
          <ul class="dropdown-menu dropdown-menu-dark" style="background:var(--bs-light); border:1px solid color-mix(in srgb, var(--bs-primary) 19%, transparent);">
            <li><a class="dropdown-item" href="#">Trail Hiking</a></li>
            <li><a class="dropdown-item" href="#">Off-Road Camping</a></li>
            <li><hr class="dropdown-divider" style="border-color:color-mix(in srgb, var(--bs-primary) 19%, transparent);"></li>
            <li><a class="dropdown-item" href="#">Wilderness Survival</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link text-light" href="#">Trailers</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="#">Contact</a></li>
      </ul>
      <a href="#" class="btn btn-primary fw-bold px-4" style="letter-spacing:1px;">GET EQUIPPED</a>
    </div>
  </div>
</nav>`
  },

  // ─── HEROES ──────────────────────────────────────────────────────────────────
  {
    id: 'trl-hero-1',
    categoryId: 'heroes',
    label: 'Trailer – Full-Width Wilderness Hero',
    html: `<section class="position-relative text-white text-center d-flex align-items-center" style="min-height:620px; background:url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1400&q=80') center/cover no-repeat;">
  <div class="position-absolute top-0 start-0 w-100 h-100" style="background:color-mix(in srgb, var(--bs-dark) 72%, transparent);"></div>
  <div class="container position-relative py-5">
    <span class="d-inline-block text-primary fw-bold mb-3" style="letter-spacing:4px; font-size:0.8rem;">WHERE THE ROAD ENDS</span>
    <h1 class="display-2 fw-bold text-white mb-4" style="line-height:1.05;">Built for the Wild.<br>Engineered to Last.</h1>
    <p class="lead mb-5 mx-auto text-light" style="max-width:580px; opacity:0.85;">All-terrain trailers and rugged expedition gear crafted for adventurers who refuse to be confined to the pavement.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-primary btn-lg px-5 fw-bold" style="letter-spacing:1px;">EXPLORE GEAR</a>
      <a href="#" class="btn btn-outline-light btn-lg px-5">Watch Film</a>
    </div>
    <div class="mt-5 d-flex justify-content-center gap-5 flex-wrap">
      <div><div class="fw-bold fs-3 text-primary">15K+</div><div class="text-light small" style="opacity:0.7;">Expeditions Launched</div></div>
      <div><div class="fw-bold fs-3 text-primary">50+</div><div class="text-light small" style="opacity:0.7;">Trail Models</div></div>
      <div><div class="fw-bold fs-3 text-primary">100%</div><div class="text-light small" style="opacity:0.7;">All-Terrain Rated</div></div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-hero-2',
    categoryId: 'heroes',
    label: 'Trailer – Split Hero Adventure',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-4">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="badge mb-3 fw-bold px-3 py-2" style="background:color-mix(in srgb, var(--bs-primary) 12%, transparent); color:var(--bs-primary); letter-spacing:2px;">NEW SEASON</span>
        <h1 class="display-4 fw-bold text-white mb-4" style="line-height:1.1;">Your Next Expedition Starts Here</h1>
        <p class="mb-4" style="color:var(--bs-body-color); font-size:1.1rem; line-height:1.7;">TrailForce trailers are engineered for extreme conditions — off-grid living, mountain terrain, and backcountry routes that others can't reach. Rugged. Durable. Unstoppable.</p>
        <div class="d-flex gap-3 flex-wrap mb-4">
          <a href="#" class="btn btn-primary btn-lg px-4 fw-bold">View All Trailers</a>
          <a href="#" class="btn btn-outline-primary btn-lg px-4">Our Story</a>
        </div>
        <div class="d-flex gap-4 flex-wrap">
          <div class="d-flex align-items-center gap-2">
            <span style="width:10px;height:10px;background:var(--bs-primary);border-radius:50%;display:inline-block;"></span>
            <span style="color:var(--bs-body-color); font-size:0.9rem;">3-Season Ready</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span style="width:10px;height:10px;background:var(--bs-primary);border-radius:50%;display:inline-block;"></span>
            <span style="color:var(--bs-body-color); font-size:0.9rem;">Off-Grid Capable</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span style="width:10px;height:10px;background:var(--bs-primary);border-radius:50%;display:inline-block;"></span>
            <span style="color:var(--bs-body-color); font-size:0.9rem;">5-Year Warranty</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="position-relative">
          <img loading="lazy" src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&q=80" alt="TrailForce campervan on open road" class="img-fluid rounded-3" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
          <div class="position-absolute bottom-0 start-0 m-3 px-3 py-2 rounded-2" style="background:color-mix(in srgb, var(--bs-dark) 80%, transparent); backdrop-filter:blur(8px);">
            <span class="text-primary fw-bold small">EXPEDITION SERIES</span>
            <div class="text-white fw-bold">TrailForce TX-7</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FEATURES ────────────────────────────────────────────────────────────────
  {
    id: 'trl-feat-1',
    categoryId: 'features',
    label: 'Trailer – 3-Column Feature Grid',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">WHY TRAILFORCE</span>
      <h2 class="fw-bold text-white display-6">Engineered for Extreme Conditions</h2>
      <p style="color:var(--bs-body-color); max-width:540px; margin:0 auto;" class="mt-2">Every bolt, panel, and system is tested across the most demanding terrain on earth.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:var(--bs-light);">
          <div class="mb-3" style="width:54px;height:54px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-shield-check fs-4 text-primary"></i>
          </div>
          <h5 class="fw-bold text-white mb-2">All-Terrain Durability</h5>
          <p style="color:var(--bs-body-color); font-size:0.95rem;">Military-grade aluminum frame with reinforced suspension handles rock crawls, river crossings, and everything the wilderness throws at you.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:var(--bs-light);">
          <div class="mb-3" style="width:54px;height:54px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-lightning-charge fs-4 text-primary"></i>
          </div>
          <h5 class="fw-bold text-white mb-2">Off-Grid Power System</h5>
          <p style="color:var(--bs-body-color); font-size:0.95rem;">200W solar panels, dual lithium battery banks, and a 2000W inverter keep your basecamp powered for days without a hookup.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:var(--bs-light);">
          <div class="mb-3" style="width:54px;height:54px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-snow2 fs-4 text-primary"></i>
          </div>
          <h5 class="fw-bold text-white mb-2">4-Season Insulation</h5>
          <p style="color:var(--bs-body-color); font-size:0.95rem;">Closed-cell foam core walls, double-pane windows, and a heated water system keep you comfortable from -20°F alpine to desert heat.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:var(--bs-light);">
          <div class="mb-3" style="width:54px;height:54px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-water fs-4 text-primary"></i>
          </div>
          <h5 class="fw-bold text-white mb-2">Fresh Water Independence</h5>
          <p style="color:var(--bs-body-color); font-size:0.95rem;">40-gallon freshwater tank with inline filtration system means clean water at any trailhead — no campground required.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:var(--bs-light);">
          <div class="mb-3" style="width:54px;height:54px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-tools fs-4 text-primary"></i>
          </div>
          <h5 class="fw-bold text-white mb-2">Modular Configuration</h5>
          <p style="color:var(--bs-body-color); font-size:0.95rem;">Swap kitchen modules, sleeping platforms, and gear racks to build exactly the rig your expedition demands — no compromise.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 p-4" style="background:var(--bs-light);">
          <div class="mb-3" style="width:54px;height:54px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-geo-alt fs-4 text-primary"></i>
          </div>
          <h5 class="fw-bold text-white mb-2">GPS Trail Integration</h5>
          <p style="color:var(--bs-body-color); font-size:0.95rem;">Built-in satellite communicator and offline topographic maps keep you navigating with confidence far beyond cell coverage.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-feat-2',
    categoryId: 'features',
    label: 'Trailer – Feature Split with Image',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="row align-items-center g-5 mb-5">
      <div class="col-lg-6">
        <img loading="lazy" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80" alt="Off-road rugged terrain" class="img-fluid rounded-3" style="width:100%; object-fit:cover; aspect-ratio:16/10;">
      </div>
      <div class="col-lg-6">
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">BUILT DIFFERENT</span>
        <h2 class="fw-bold text-white display-6 mb-3">Where Others Stop, TrailForce Keeps Going</h2>
        <p style="color:var(--bs-body-color);" class="mb-4">Our trailers aren't built for paved campgrounds. They're engineered for the places where maps run out — steep inclines, river beds, boulder fields, and everything off the beaten path.</p>
        <ul class="list-unstyled">
          <li class="d-flex align-items-start gap-3 mb-3">
            <span class="text-primary fw-bold mt-1" style="font-size:1.2rem;">&#10003;</span>
            <div>
              <div class="text-white fw-semibold">Independent Coil-Over Suspension</div>
              <div style="color:var(--bs-body-color); font-size:0.9rem;">18" of articulation on each corner — no terrain is too rough.</div>
            </div>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <span class="text-primary fw-bold mt-1" style="font-size:1.2rem;">&#10003;</span>
            <div>
              <div class="text-white fw-semibold">Marine-Grade Waterproofing</div>
              <div style="color:var(--bs-body-color); font-size:0.9rem;">Every seal, gasket, and connection rated for full water immersion.</div>
            </div>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <span class="text-primary fw-bold mt-1" style="font-size:1.2rem;">&#10003;</span>
            <div>
              <div class="text-white fw-semibold">3,500 lb Payload Capacity</div>
              <div style="color:var(--bs-body-color); font-size:0.9rem;">Haul everything your expedition demands without breaking a sweat.</div>
            </div>
          </li>
        </ul>
        <a href="#" class="btn btn-primary px-4 mt-2 fw-bold">See Specifications</a>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CONTENT ─────────────────────────────────────────────────────────────────
  {
    id: 'trl-content-1',
    categoryId: 'content',
    label: 'Trailer – Brand Story Content',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="row align-items-center g-5">
      <div class="col-lg-5">
        <div class="position-relative">
          <img loading="lazy" src="https://images.unsplash.com/photo-1502786129293-79981df4e689?w=800&q=80" alt="Campfire night" class="img-fluid rounded-3" style="width:100%; object-fit:cover; aspect-ratio:3/4;">
          <div class="position-absolute top-0 start-0 m-3 px-3 py-2 rounded-2 text-center" style="background:var(--bs-primary);">
            <div class="text-white fw-bold fs-4 lh-1">25</div>
            <div class="text-white" style="font-size:0.7rem; letter-spacing:1px;">YEARS IN<br>THE FIELD</div>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">OUR STORY</span>
        <h2 class="fw-bold text-white display-6 mb-4">Born at the Trailhead, Built for the Backcountry</h2>
        <p style="color:var(--bs-body-color); line-height:1.8; font-size:1.05rem;" class="mb-3">TrailForce was founded by two wilderness guides who were tired of gear that failed when it mattered most. After one too many broken trailers on remote expeditions, they started building their own.</p>
        <p style="color:var(--bs-body-color); line-height:1.8;" class="mb-4">Twenty-five years later, we outfit serious adventurers across six continents with trailers and gear that go the distance — because your adventure shouldn't end where the road does.</p>
        <div class="row g-3 mb-4">
          <div class="col-6 col-sm-3">
            <div class="text-center p-3 rounded-2" style="background:var(--bs-light);">
              <div class="fw-bold text-primary fs-4">50+</div>
              <div style="color:var(--bs-body-color); font-size:0.8rem;">Models</div>
            </div>
          </div>
          <div class="col-6 col-sm-3">
            <div class="text-center p-3 rounded-2" style="background:var(--bs-light);">
              <div class="fw-bold text-primary fs-4">6</div>
              <div style="color:var(--bs-body-color); font-size:0.8rem;">Continents</div>
            </div>
          </div>
          <div class="col-6 col-sm-3">
            <div class="text-center p-3 rounded-2" style="background:var(--bs-light);">
              <div class="fw-bold text-primary fs-4">98%</div>
              <div style="color:var(--bs-body-color); font-size:0.8rem;">Satisfaction</div>
            </div>
          </div>
          <div class="col-6 col-sm-3">
            <div class="text-center p-3 rounded-2" style="background:var(--bs-light);">
              <div class="fw-bold text-primary fs-4">15K</div>
              <div style="color:var(--bs-body-color); font-size:0.8rem;">Adventures</div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-outline-primary px-4 fw-bold">Read Our Story</a>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-content-2',
    categoryId: 'content',
    label: 'Trailer – Centered Editorial Content',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center mb-5">
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">THE PHILOSOPHY</span>
        <h2 class="fw-bold text-white display-6 mb-4">Wilderness Demands More Than Gear</h2>
        <p style="color:var(--bs-body-color); font-size:1.1rem; line-height:1.8;">The wild doesn't forgive shortcuts. Every weld, every latch, every gasket in a TrailForce trailer is chosen for one reason: to keep you alive and comfortable when the conditions turn against you.</p>
      </div>
    </div>
    <div class="row g-4 align-items-center">
      <div class="col-lg-6">
        <img loading="lazy" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" alt="Forest trail path" class="img-fluid rounded-3" style="width:100%; object-fit:cover; aspect-ratio:16/9;">
      </div>
      <div class="col-lg-6">
        <div class="d-flex flex-column gap-4">
          <div class="d-flex gap-4 align-items-start">
            <span class="fw-bold text-primary" style="font-size:2.5rem; line-height:1; min-width:48px;">01</span>
            <div>
              <h5 class="text-white fw-bold mb-1">Design for Failure</h5>
              <p style="color:var(--bs-body-color); font-size:0.95rem; margin:0;">We stress-test every component to its breaking point so yours never reaches it. Redundancy is built in, not bolted on.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start">
            <span class="fw-bold text-primary" style="font-size:2.5rem; line-height:1; min-width:48px;">02</span>
            <div>
              <h5 class="text-white fw-bold mb-1">Listen to Guides</h5>
              <p style="color:var(--bs-body-color); font-size:0.95rem; margin:0;">Our design team logs real miles with expedition guides every season. Their field notes drive every iteration.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start">
            <span class="fw-bold text-primary" style="font-size:2.5rem; line-height:1; min-width:48px;">03</span>
            <div>
              <h5 class="text-white fw-bold mb-1">Zero Compromise</h5>
              <p style="color:var(--bs-body-color); font-size:0.95rem; margin:0;">Lighter isn't always better. Cheaper is never acceptable. We balance weight, strength, and longevity without cutting corners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CARDS ───────────────────────────────────────────────────────────────────
  {
    id: 'trl-cards-1',
    categoryId: 'cards',
    label: 'Trailer – Adventure Activity Cards',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">CHOOSE YOUR ADVENTURE</span>
      <h2 class="fw-bold text-white display-6">Find Your Trailhead</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 overflow-hidden">
          <img loading="lazy" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="Mountain hiking" style="width:100%; height:180px; object-fit:cover;">
          <div class="card-body p-4" style="background:var(--bs-light);">
            <span class="badge mb-2" style="background:color-mix(in srgb, var(--bs-primary) 12%, transparent); color:var(--bs-primary);">HIKING</span>
            <h6 class="fw-bold text-white mb-2">Alpine Summit Series</h6>
            <p style="color:var(--bs-body-color); font-size:0.85rem; margin:0;">Lightweight packs and trail systems engineered for high-altitude ascents.</p>
            <a href="#" class="btn btn-outline-primary btn-sm mt-3 w-100">Explore</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 overflow-hidden">
          <img loading="lazy" src="https://images.unsplash.com/photo-1511310865647-f9a2a6a8ca12?w=800&q=80" alt="Kayaking" style="width:100%; height:180px; object-fit:cover;">
          <div class="card-body p-4" style="background:var(--bs-light);">
            <span class="badge mb-2" style="background:color-mix(in srgb, var(--bs-primary) 12%, transparent); color:var(--bs-primary);">WATER</span>
            <h6 class="fw-bold text-white mb-2">Whitewater Expedition</h6>
            <p style="color:var(--bs-body-color); font-size:0.85rem; margin:0;">Kayak trailers and dry storage systems for class IV river runs.</p>
            <a href="#" class="btn btn-outline-primary btn-sm mt-3 w-100">Explore</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 overflow-hidden">
          <img loading="lazy" src="https://images.unsplash.com/photo-1522163723043-8ad0a8c74f79?w=800&q=80" alt="Rock climbing" style="width:100%; height:180px; object-fit:cover;">
          <div class="card-body p-4" style="background:var(--bs-light);">
            <span class="badge mb-2" style="background:color-mix(in srgb, var(--bs-primary) 12%, transparent); color:var(--bs-primary);">CLIMBING</span>
            <h6 class="fw-bold text-white mb-2">Vertical Basecamp Kit</h6>
            <p style="color:var(--bs-body-color); font-size:0.85rem; margin:0;">Everything a climbing team needs — hauled in, set up fast, ready at dawn.</p>
            <a href="#" class="btn btn-outline-primary btn-sm mt-3 w-100">Explore</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 overflow-hidden">
          <img loading="lazy" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80" alt="Off-road" style="width:100%; height:180px; object-fit:cover;">
          <div class="card-body p-4" style="background:var(--bs-light);">
            <span class="badge mb-2" style="background:color-mix(in srgb, var(--bs-primary) 12%, transparent); color:var(--bs-primary);">OFF-ROAD</span>
            <h6 class="fw-bold text-white mb-2">Desert Overland Pack</h6>
            <p style="color:var(--bs-body-color); font-size:0.85rem; margin:0;">Overland trailers with extended water range for multi-day desert crossings.</p>
            <a href="#" class="btn btn-outline-primary btn-sm mt-3 w-100">Explore</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-cards-2',
    categoryId: 'cards',
    label: 'Trailer – Featured Gear Cards',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="d-flex align-items-end justify-content-between mb-5 flex-wrap gap-3">
      <div>
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">BESTSELLERS</span>
        <h2 class="fw-bold text-white display-6 mb-0">Top Trail Picks</h2>
      </div>
      <a href="#" class="btn btn-outline-primary">View All Gear</a>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100" style="background:var(--bs-body-bg);">
          <div class="position-relative">
            <img loading="lazy" src="https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=800&q=80" alt="Outdoor gear" style="width:100%; height:220px; object-fit:cover; border-radius:8px 8px 0 0;">
            <span class="position-absolute top-0 end-0 m-2 badge" style="background:var(--bs-primary);">BESTSELLER</span>
          </div>
          <div class="card-body p-4">
            <h6 class="text-white fw-bold mb-1">TX-7 Expedition Trailer</h6>
            <p style="color:var(--bs-body-color); font-size:0.85rem;" class="mb-3">All-terrain off-road trailer. Solar-ready. 40-gal water. Sleeps 2.</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="fw-bold text-primary fs-5">$8,499</span>
              <a href="#" class="btn btn-primary btn-sm px-3">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100" style="background:var(--bs-body-bg);">
          <div class="position-relative">
            <img loading="lazy" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80" alt="Camping tent" style="width:100%; height:220px; object-fit:cover; border-radius:8px 8px 0 0;">
          </div>
          <div class="card-body p-4">
            <h6 class="text-white fw-bold mb-1">Basecamp Roof Tent XL</h6>
            <p style="color:var(--bs-body-color); font-size:0.85rem;" class="mb-3">3-season rooftop tent with integrated awning. 30-second deploy.</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="fw-bold text-primary fs-5">$1,299</span>
              <a href="#" class="btn btn-primary btn-sm px-3">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100" style="background:var(--bs-body-bg);">
          <div class="position-relative">
            <img loading="lazy" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80" alt="Adventure hikers" style="width:100%; height:220px; object-fit:cover; border-radius:8px 8px 0 0;">
            <span class="position-absolute top-0 end-0 m-2 badge bg-success">NEW</span>
          </div>
          <div class="card-body p-4">
            <h6 class="text-white fw-bold mb-1">TrailForce Survival Kit</h6>
            <p style="color:var(--bs-body-color); font-size:0.85rem;" class="mb-3">72-hr wilderness survival system. Fire, shelter, water, navigation.</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="fw-bold text-primary fs-5">$349</span>
              <a href="#" class="btn btn-primary btn-sm px-3">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
  {
    id: 'trl-test-1',
    categoryId: 'testimonials',
    label: 'Trailer – 3-Column Testimonials',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">FROM THE FIELD</span>
      <h2 class="fw-bold text-white display-6">Adventurers Don't Lie</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card p-4 h-100" style="background:var(--bs-light);">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.1rem;">★★★★★</div>
          <p style="color:var(--bs-body-color); line-height:1.7; font-size:0.95rem;" class="mb-4">"Took the TX-7 through the Mojave for 10 days — 40°C heat, pure sand, zero hookups. Not a single failure. This thing is absolutely indestructible."</p>
          <div class="d-flex align-items-center gap-3 mt-auto">
            <img loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Marcus Webb" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid var(--bs-primary);">
            <div>
              <div class="text-white fw-bold small">Marcus Webb</div>
              <div style="color:var(--bs-body-color); font-size:0.78rem;">Desert Overland Guide, Arizona</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-4 h-100" style="background:var(--bs-light); border:1px solid #e8630a50;">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.1rem;">★★★★★</div>
          <p style="color:var(--bs-body-color); line-height:1.7; font-size:0.95rem;" class="mb-4">"I've owned three different overland trailers. TrailForce is on a different level. The solar setup alone paid for itself in one season. I'll never go back."</p>
          <div class="d-flex align-items-center gap-3 mt-auto">
            <img loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Sarah Kline" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid var(--bs-primary);">
            <div>
              <div class="text-white fw-bold small">Sarah Kline</div>
              <div style="color:var(--bs-body-color); font-size:0.78rem;">Full-Time Nomad, Pacific Crest</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-4 h-100" style="background:var(--bs-light);">
          <div class="mb-3" style="color:var(--bs-primary); font-size:1.1rem;">★★★★★</div>
          <p style="color:var(--bs-body-color); line-height:1.7; font-size:0.95rem;" class="mb-4">"Ran a 14-day Patagonia crossing with a full film crew. The gear bay fit everything. Setup took 10 minutes. If you're serious about expedition travel — this is it."</p>
          <div class="d-flex align-items-center gap-3 mt-auto">
            <img loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Elena Rossi" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid var(--bs-primary);">
            <div>
              <div class="text-white fw-bold small">Elena Rossi</div>
              <div style="color:var(--bs-body-color); font-size:0.78rem;">Adventure Filmmaker, Patagonia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-test-2',
    categoryId: 'testimonials',
    label: 'Trailer – Large Featured Testimonial',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="card p-5 text-center" style="background:var(--bs-body-bg); border:1px solid color-mix(in srgb, var(--bs-primary) 19%, transparent);">
          <div class="mb-4" style="color:var(--bs-primary); font-size:1.3rem; letter-spacing:2px;">★★★★★</div>
          <p class="text-white mb-5" style="font-size:1.4rem; line-height:1.6; font-style:italic;">"We drove TrailForce rigs from Alaska to Tierra del Fuego — 18,000 miles, 22 countries, every road surface imaginable. Not one axle, not one seal, not one panel gave out. That kind of reliability isn't luck. It's engineering."</p>
          <div class="d-flex align-items-center justify-content-center gap-3">
            <img loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="James & Dana Trethewey" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:3px solid var(--bs-primary);">
            <div class="text-start">
              <div class="text-white fw-bold">James & Dana Trethewey</div>
              <div style="color:var(--bs-body-color); font-size:0.85rem;">Pan-American Overland Expedition, 2024</div>
            </div>
          </div>
        </div>
        <div class="row g-4 mt-3">
          <div class="col-4 text-center">
            <div class="fw-bold text-primary display-6">18K</div>
            <div style="color:var(--bs-body-color); font-size:0.85rem;">Miles Traveled</div>
          </div>
          <div class="col-4 text-center">
            <div class="fw-bold text-primary display-6">22</div>
            <div style="color:var(--bs-body-color); font-size:0.85rem;">Countries Crossed</div>
          </div>
          <div class="col-4 text-center">
            <div class="fw-bold text-primary display-6">0</div>
            <div style="color:var(--bs-body-color); font-size:0.85rem;">Component Failures</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── CTA ─────────────────────────────────────────────────────────────────────
  {
    id: 'trl-cta-1',
    categoryId: 'cta',
    label: 'Trailer – Bold CTA Banner',
    html: `<section class="py-5 text-center position-relative" style="background:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80') center/cover no-repeat; min-height:380px; display:flex; align-items:center;">
  <div class="position-absolute top-0 start-0 w-100 h-100" style="background:color-mix(in srgb, var(--bs-dark) 82%, transparent);"></div>
  <div class="container position-relative py-5">
    <span class="text-primary fw-bold d-block mb-3" style="letter-spacing:4px; font-size:0.8rem;">LIMITED SEASON STOCK</span>
    <h2 class="fw-bold text-white display-5 mb-3">Your Wilderness Window Is Open</h2>
    <p class="mb-5 mx-auto" style="color:var(--bs-body-color); max-width:540px; font-size:1.05rem;">Spring expedition season fills up fast. Reserve your TrailForce rig now and get $500 off factory customization.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-primary btn-lg px-5 fw-bold" style="letter-spacing:1px;">RESERVE NOW</a>
      <a href="#" class="btn btn-outline-light btn-lg px-5">Download Catalogue</a>
    </div>
    <p class="mt-3" style="color:var(--bs-body-color); font-size:0.85rem; opacity:0.7;">Free delivery within 500 miles &middot; 5-Year structural warranty &middot; 30-day trail guarantee</p>
  </div>
</section>`
  },
  {
    id: 'trl-cta-2',
    categoryId: 'cta',
    label: 'Trailer – Side-by-Side CTA',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card p-5 h-100 d-flex flex-column justify-content-between" style="background:var(--bs-light); border-left:4px solid var(--bs-primary);">
          <div>
            <h3 class="fw-bold text-white mb-3">Build Your Custom Rig</h3>
            <p style="color:var(--bs-body-color);">Start with a base model and configure every module — power, sleep, kitchen, storage — to fit your exact expedition requirements.</p>
          </div>
          <a href="#" class="btn btn-primary fw-bold px-4 mt-4 align-self-start">Start Configuring</a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-5 h-100 d-flex flex-column justify-content-between" style="background:var(--bs-light); border-left:4px solid var(--bs-secondary);">
          <div>
            <h3 class="fw-bold text-white mb-3">Talk to an Expedition Advisor</h3>
            <p style="color:var(--bs-body-color);">Not sure which rig is right for your route? Our team of professional guides and outfitters will help you spec the perfect setup.</p>
          </div>
          <a href="#" class="btn btn-outline-primary fw-bold px-4 mt-4 align-self-start">Book a Call</a>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FORMS ───────────────────────────────────────────────────────────────────
  {
    id: 'trl-form-1',
    categoryId: 'forms',
    label: 'Trailer – Expedition Inquiry Form',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="card p-5" style="background:var(--bs-light);">
          <div class="text-center mb-4">
            <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">GET IN TOUCH</span>
            <h2 class="fw-bold text-white mb-2">Plan Your Expedition</h2>
            <p style="color:var(--bs-body-color); font-size:0.95rem;">Tell us about your adventure. We'll help you spec the right rig and gear package.</p>
          </div>
          <form>
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="form-label text-light small fw-semibold">First Name</label>
                <input type="text" class="form-control" style="background:var(--bs-body-bg); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="Jake">
              </div>
              <div class="col-sm-6">
                <label class="form-label text-light small fw-semibold">Last Name</label>
                <input type="text" class="form-control" style="background:var(--bs-body-bg); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="Holloway">
              </div>
              <div class="col-12">
                <label class="form-label text-light small fw-semibold">Email Address</label>
                <input type="email" class="form-control" style="background:var(--bs-body-bg); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="jake@expedition.com">
              </div>
              <div class="col-sm-6">
                <label class="form-label text-light small fw-semibold">Adventure Type</label>
                <select class="form-select" style="background:var(--bs-body-bg); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);">
                  <option value="">Select terrain...</option>
                  <option>Desert Overland</option>
                  <option>Mountain / Alpine</option>
                  <option>Coastal / Rainforest</option>
                  <option>Mixed All-Terrain</option>
                </select>
              </div>
              <div class="col-sm-6">
                <label class="form-label text-light small fw-semibold">Trip Duration</label>
                <select class="form-select" style="background:var(--bs-body-bg); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);">
                  <option value="">Select duration...</option>
                  <option>Weekend (2-3 days)</option>
                  <option>Week (5-7 days)</option>
                  <option>Extended (2-4 weeks)</option>
                  <option>Long-haul (1+ months)</option>
                </select>
              </div>
              <div class="col-12">
                <label class="form-label text-light small fw-semibold">Tell us about your expedition</label>
                <textarea class="form-control" rows="4" style="background:var(--bs-body-bg); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="Destination, group size, special requirements..."></textarea>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="trlNewsletterCheck">
                  <label class="form-check-label small" style="color:var(--bs-body-color);" for="trlNewsletterCheck">Subscribe to TrailForce expedition reports and new gear drops</label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary w-100 fw-bold py-2" style="letter-spacing:1px;">SUBMIT EXPEDITION REQUEST</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-form-2',
    categoryId: 'forms',
    label: 'Trailer – Newsletter & Dealer Locator Form',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="row g-5 align-items-center">
      <div class="col-lg-5">
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">STAY IN THE FIELD</span>
        <h2 class="fw-bold text-white display-6 mb-3">Join the TrailForce Community</h2>
        <p style="color:var(--bs-body-color);" class="mb-4">Get expedition field reports, early access to new builds, trail tips from our guides, and exclusive member-only discounts — delivered straight to your inbox.</p>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center gap-2 mb-2"><span class="text-primary fw-bold">&#10003;</span><span style="color:var(--bs-body-color); font-size:0.95rem;">Monthly expedition dispatches</span></li>
          <li class="d-flex align-items-center gap-2 mb-2"><span class="text-primary fw-bold">&#10003;</span><span style="color:var(--bs-body-color); font-size:0.95rem;">New model early access</span></li>
          <li class="d-flex align-items-center gap-2 mb-2"><span class="text-primary fw-bold">&#10003;</span><span style="color:var(--bs-body-color); font-size:0.95rem;">Exclusive member pricing</span></li>
        </ul>
      </div>
      <div class="col-lg-7">
        <div class="card p-4" style="background:var(--bs-body-bg);">
          <h5 class="text-white fw-bold mb-4">Subscribe &amp; Find Your Nearest Dealer</h5>
          <form>
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="form-label small fw-semibold text-light">Full Name</label>
                <input type="text" class="form-control" style="background:var(--bs-light); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="Your name">
              </div>
              <div class="col-sm-6">
                <label class="form-label small fw-semibold text-light">Email</label>
                <input type="email" class="form-control" style="background:var(--bs-light); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="you@example.com">
              </div>
              <div class="col-sm-6">
                <label class="form-label small fw-semibold text-light">State / Region</label>
                <input type="text" class="form-control" style="background:var(--bs-light); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="e.g. Colorado">
              </div>
              <div class="col-sm-6">
                <label class="form-label small fw-semibold text-light">Interested In</label>
                <select class="form-select" style="background:var(--bs-light); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);">
                  <option value="">Select...</option>
                  <option>Trailers</option>
                  <option>Gear &amp; Accessories</option>
                  <option>Guided Expeditions</option>
                  <option>Everything</option>
                </select>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary w-100 fw-bold">Find Dealer &amp; Subscribe</button>
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
    id: 'trl-pricing-1',
    categoryId: 'pricing',
    label: 'Trailer – 3-Tier Expedition Pricing',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">CHOOSE YOUR RIG</span>
      <h2 class="fw-bold text-white display-6">Expedition Packages</h2>
      <p style="color:var(--bs-body-color);">All packages include 5-year structural warranty and free 500-mile delivery.</p>
    </div>
    <div class="row g-4 align-items-stretch justify-content-center">
      <div class="col-md-4">
        <div class="card p-4 h-100" style="background:var(--bs-light);">
          <div class="mb-1 text-primary fw-bold" style="letter-spacing:2px; font-size:0.8rem;">TRAIL STARTER</div>
          <h4 class="text-white fw-bold mb-1">Weekender</h4>
          <p style="color:var(--bs-body-color); font-size:0.85rem;" class="mb-3">Perfect for weekend trail warriors and new overlanders.</p>
          <div class="text-white mb-4" style="font-size:2.5rem; font-weight:800; line-height:1;">$4,299<span style="font-size:1rem; font-weight:400; color:var(--bs-body-color);">/trailer</span></div>
          <ul class="list-unstyled mb-4" style="color:var(--bs-body-color); font-size:0.9rem;">
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Standard suspension system</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>20-gallon water tank</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>100W solar panel</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-x-circle-fill flex-shrink-0 mt-1" style="color:color-mix(in srgb, var(--bs-secondary) 38%, transparent);"></i><span style="opacity:0.5;">Off-road upgrade package</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-x-circle-fill flex-shrink-0 mt-1" style="color:color-mix(in srgb, var(--bs-secondary) 38%, transparent);"></i><span style="opacity:0.5;">Expedition configuration</span></li>
          </ul>
          <a href="#" class="btn btn-outline-primary w-100 fw-bold mt-auto">Configure Weekender</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-4 h-100 position-relative" style="background:var(--bs-light); border:2px solid var(--bs-primary);">
          <span class="position-absolute top-0 start-50 translate-middle badge" style="background:var(--bs-primary); letter-spacing:1px;">MOST POPULAR</span>
          <div class="mb-1 text-primary fw-bold mt-2" style="letter-spacing:2px; font-size:0.8rem;">EXPEDITION READY</div>
          <h4 class="text-white fw-bold mb-1">TrailForce TX-7</h4>
          <p style="color:var(--bs-body-color); font-size:0.85rem;" class="mb-3">The benchmark for serious overland expeditions worldwide.</p>
          <div class="text-white mb-4" style="font-size:2.5rem; font-weight:800; line-height:1;">$8,499<span style="font-size:1rem; font-weight:400; color:var(--bs-body-color);">/trailer</span></div>
          <ul class="list-unstyled mb-4" style="color:var(--bs-body-color); font-size:0.9rem;">
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Independent coil-over suspension</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>40-gallon water with filtration</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>200W solar + lithium battery bank</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Full off-road upgrade package</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-x-circle-fill flex-shrink-0 mt-1" style="color:color-mix(in srgb, var(--bs-secondary) 38%, transparent);"></i><span style="opacity:0.5;">Custom expedition configuration</span></li>
          </ul>
          <a href="#" class="btn btn-primary w-100 fw-bold mt-auto">Configure TX-7</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-4 h-100" style="background:var(--bs-light);">
          <div class="mb-1 text-primary fw-bold" style="letter-spacing:2px; font-size:0.8rem;">FULLY CUSTOM</div>
          <h4 class="text-white fw-bold mb-1">Apex Expedition</h4>
          <p style="color:var(--bs-body-color); font-size:0.85rem;" class="mb-3">Built to your exact specifications. No limits, no compromises.</p>
          <div class="text-white mb-4" style="font-size:2.5rem; font-weight:800; line-height:1;">$14,999+<span style="font-size:1rem; font-weight:400; color:var(--bs-body-color);">/trailer</span></div>
          <ul class="list-unstyled mb-4" style="color:var(--bs-body-color); font-size:0.9rem;">
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Full custom suspension build</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Unlimited water configuration</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>400W solar + dual battery banks</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Full off-road package + satellite</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Custom expedition configuration</span></li>
          </ul>
          <a href="#" class="btn btn-outline-primary w-100 fw-bold mt-auto">Request Custom Build</a>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-pricing-2',
    categoryId: 'pricing',
    label: 'Trailer – Membership / Service Plan Pricing',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">AFTER YOU'RE EQUIPPED</span>
      <h2 class="fw-bold text-white display-6">TrailForce Service Plans</h2>
      <p style="color:var(--bs-body-color);">Keep your rig mission-ready with an annual maintenance and support plan.</p>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-5">
        <div class="card p-4 h-100" style="background:var(--bs-body-bg);">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="text-white fw-bold mb-0">Trail Ready</h5>
            <span class="badge" style="background:color-mix(in srgb, var(--bs-primary) 12%, transparent); color:var(--bs-primary);">ANNUAL</span>
          </div>
          <div class="text-white mb-3" style="font-size:2rem; font-weight:800; line-height:1;">$299<span style="font-size:0.95rem; font-weight:400; color:var(--bs-body-color);">/yr</span></div>
          <ul class="list-unstyled mb-4" style="color:var(--bs-body-color); font-size:0.9rem;">
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Annual inspection + tune-up</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Suspension re-torque service</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>10% discount on parts</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Email technical support</span></li>
          </ul>
          <a href="#" class="btn btn-outline-primary w-100 fw-bold">Get Trail Ready</a>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card p-4 h-100" style="background:var(--bs-body-bg); border:2px solid var(--bs-primary);">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="text-white fw-bold mb-0">Expedition Elite</h5>
            <span class="badge" style="background:var(--bs-primary);">BEST VALUE</span>
          </div>
          <div class="text-white mb-3" style="font-size:2rem; font-weight:800; line-height:1;">$599<span style="font-size:0.95rem; font-weight:400; color:var(--bs-body-color);">/yr</span></div>
          <ul class="list-unstyled mb-4" style="color:var(--bs-body-color); font-size:0.9rem;">
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>2x inspections per year</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Priority repair turnaround (48hr)</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>20% discount on all parts</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>24/7 satellite technical support</span></li>
            <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i><span>Free loaner gear during service</span></li>
          </ul>
          <a href="#" class="btn btn-primary w-100 fw-bold">Go Expedition Elite</a>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── FOOTERS ─────────────────────────────────────────────────────────────────
  {
    id: 'trl-footer-1',
    categoryId: 'footers',
    label: 'Trailer – Full Dark Adventure Footer',
    html: `<footer style="background:var(--bs-dark); border-top:2px solid color-mix(in srgb, var(--bs-primary) 19%, transparent);">
  <div class="container py-5">
    <div class="row g-5">
      <div class="col-lg-4">
        <a class="d-block fw-bold text-white mb-3" href="#" style="font-size:1.5rem; letter-spacing:2px; text-decoration:none;"><span class="text-primary">TRAIL</span>FORCE</a>
        <p style="color:var(--bs-body-color); font-size:0.9rem; line-height:1.7;" class="mb-4">Built for the wild. Engineered for the long haul. TrailForce has been outfitting serious adventurers for 25 years — where the road ends, we begin.</p>
        <div class="d-flex gap-3">
          <a href="#" class="text-primary fs-5"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-primary fs-5"><i class="bi bi-youtube"></i></a>
          <a href="#" class="text-primary fs-5"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-primary fs-5"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>
      <div class="col-6 col-lg-2">
        <h6 class="text-white fw-bold mb-3" style="letter-spacing:1px;">PRODUCTS</h6>
        <ul class="list-unstyled" style="color:var(--bs-body-color); font-size:0.9rem;">
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">All Trailers</a></li>
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Camping Gear</a></li>
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Survival Kits</a></li>
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Accessories</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2">
        <h6 class="text-white fw-bold mb-3" style="letter-spacing:1px;">EXPLORE</h6>
        <ul class="list-unstyled" style="color:var(--bs-body-color); font-size:0.9rem;">
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Trail Reports</a></li>
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Expedition Map</a></li>
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Community</a></li>
          <li class="mb-2"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Events</a></li>
        </ul>
      </div>
      <div class="col-lg-4">
        <h6 class="text-white fw-bold mb-3" style="letter-spacing:1px;">STAY IN THE LOOP</h6>
        <p style="color:var(--bs-body-color); font-size:0.9rem;" class="mb-3">Get trail dispatches and new gear drops directly in your inbox.</p>
        <div class="input-group">
          <input type="email" class="form-control" style="background:var(--bs-light); border:1px solid color-mix(in srgb, var(--bs-secondary) 31%, transparent); color:var(--bs-body-color);" placeholder="your@email.com">
          <button class="btn btn-primary fw-bold px-3">Subscribe</button>
        </div>
      </div>
    </div>
    <hr style="border-color:color-mix(in srgb, var(--bs-primary) 12%, transparent); margin:2.5rem 0 1.5rem;">
    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
      <p class="mb-0" style="color:var(--bs-body-color); font-size:0.82rem;">&copy; 2024 TrailForce Gear Co. All rights reserved.</p>
      <div class="d-flex gap-3" style="color:var(--bs-body-color); font-size:0.82rem;">
        <a href="#" style="color:var(--bs-body-color); text-decoration:none;">Privacy Policy</a>
        <a href="#" style="color:var(--bs-body-color); text-decoration:none;">Terms of Use</a>
        <a href="#" style="color:var(--bs-body-color); text-decoration:none;">Warranty Info</a>
      </div>
    </div>
  </div>
</footer>`
  },
  {
    id: 'trl-footer-2',
    categoryId: 'footers',
    label: 'Trailer – Compact Dark Footer',
    html: `<footer style="background:var(--bs-body-bg); border-top:1px solid color-mix(in srgb, var(--bs-secondary) 19%, transparent);">
  <div class="container py-4">
    <div class="row align-items-center g-3">
      <div class="col-md-3">
        <a href="#" class="fw-bold text-white" style="font-size:1.2rem; letter-spacing:2px; text-decoration:none;"><span class="text-primary">TRAIL</span>FORCE</a>
      </div>
      <div class="col-md-6">
        <ul class="list-inline text-center mb-0" style="font-size:0.85rem;">
          <li class="list-inline-item me-3"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Home</a></li>
          <li class="list-inline-item me-3"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Trailers</a></li>
          <li class="list-inline-item me-3"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Gear</a></li>
          <li class="list-inline-item me-3"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">About</a></li>
          <li class="list-inline-item me-3"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Contact</a></li>
          <li class="list-inline-item"><a href="#" style="color:var(--bs-body-color); text-decoration:none;">Privacy</a></li>
        </ul>
      </div>
      <div class="col-md-3 text-md-end">
        <div class="d-flex gap-3 justify-content-md-end">
          <a href="#" style="color:var(--bs-primary);"><i class="bi bi-instagram"></i></a>
          <a href="#" style="color:var(--bs-primary);"><i class="bi bi-youtube"></i></a>
          <a href="#" style="color:var(--bs-primary);"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>
    </div>
    <hr style="border-color:color-mix(in srgb, var(--bs-secondary) 12%, transparent); margin:1rem 0;">
    <p class="text-center mb-0" style="color:var(--bs-body-color); font-size:0.78rem; opacity:0.7;">&copy; 2024 TrailForce Gear Co. — Built for the Wild. Engineered to Last.</p>
  </div>
</footer>`
  },

  // ─── GALLERY ─────────────────────────────────────────────────────────────────
  {
    id: 'trl-gallery-1',
    categoryId: 'gallery',
    label: 'Trailer – Expedition Photo Gallery Grid',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">FROM THE FIELD</span>
      <h2 class="fw-bold text-white display-6">Expedition Gallery</h2>
      <p style="color:var(--bs-body-color);">Real rigs, real terrain, real adventures — submitted by the TrailForce community.</p>
    </div>
    <div class="row g-3">
      <div class="col-6 col-md-4">
        <div class="overflow-hidden rounded-2 position-relative" style="aspect-ratio:1/1;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80" alt="Forest camp" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="overflow-hidden rounded-2 position-relative" style="aspect-ratio:1/1;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="Mountain sunrise" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="overflow-hidden rounded-2 position-relative" style="aspect-ratio:1/1;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&q=80" alt="Campervan road" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="overflow-hidden rounded-2 position-relative" style="aspect-ratio:1/1;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80" alt="Off-road terrain" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="overflow-hidden rounded-2 position-relative" style="aspect-ratio:1/1;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1502786129293-79981df4e689?w=800&q=80" alt="Campfire night" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="overflow-hidden rounded-2 position-relative" style="aspect-ratio:1/1;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="Mountain vista" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="#" class="btn btn-outline-primary px-5 fw-bold">View Full Gallery</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-gallery-2',
    categoryId: 'gallery',
    label: 'Trailer – Mosaic Landscape Gallery',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">THE WILD AWAITS</span>
      <h2 class="fw-bold text-white display-6">Where TrailForce Rigs Have Been</h2>
    </div>
    <div class="row g-3">
      <div class="col-md-8">
        <div class="overflow-hidden rounded-2" style="height:360px;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" alt="Forest trail" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div class="col-md-4">
        <div class="row g-3">
          <div class="col-12">
            <div class="overflow-hidden rounded-2" style="height:172px;">
              <img loading="lazy" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80" alt="Adventure hikers" style="width:100%; height:100%; object-fit:cover;">
            </div>
          </div>
          <div class="col-12">
            <div class="overflow-hidden rounded-2" style="height:172px;">
              <img loading="lazy" src="https://images.unsplash.com/photo-1522163723043-8ad0a8c74f79?w=800&q=80" alt="Rock climbing" style="width:100%; height:100%; object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="overflow-hidden rounded-2" style="height:240px;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1511310865647-f9a2a6a8ca12?w=800&q=80" alt="Kayaking" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div class="col-md-4">
        <div class="overflow-hidden rounded-2" style="height:240px;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1496309732348-3627abaa4831?w=800&q=80" alt="Sunset overlook" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div class="col-md-4">
        <div class="overflow-hidden rounded-2" style="height:240px;">
          <img loading="lazy" src="https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=800&q=80" alt="Outdoor equipment" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── SOCIAL PROOF ─────────────────────────────────────────────────────────────
  {
    id: 'trl-social-1',
    categoryId: 'social-proof',
    label: 'Trailer – Press Logos + Stats',
    html: `<section class="py-5" style="background:var(--bs-body-bg); border-top:1px solid color-mix(in srgb, var(--bs-secondary) 12%, transparent); border-bottom:1px solid color-mix(in srgb, var(--bs-secondary) 12%, transparent);">
  <div class="container py-3">
    <div class="text-center mb-4">
      <p class="text-primary fw-bold mb-0" style="letter-spacing:3px; font-size:0.8rem;">AS SEEN IN</p>
    </div>
    <div class="row align-items-center justify-content-center g-4 mb-5">
      <div class="col-6 col-md-2 text-center">
        <div class="fw-bold text-white opacity-50" style="font-size:1.1rem; letter-spacing:2px;">OUTSIDE</div>
      </div>
      <div class="col-6 col-md-2 text-center">
        <div class="fw-bold text-white opacity-50" style="font-size:1.1rem; letter-spacing:2px;">OVERLAND</div>
      </div>
      <div class="col-6 col-md-2 text-center">
        <div class="fw-bold text-white opacity-50" style="font-size:1.1rem; letter-spacing:2px;">ADVENTR</div>
      </div>
      <div class="col-6 col-md-2 text-center">
        <div class="fw-bold text-white opacity-50" style="font-size:1.1rem; letter-spacing:2px;">4X4MAG</div>
      </div>
      <div class="col-6 col-md-2 text-center">
        <div class="fw-bold text-white opacity-50" style="font-size:1.1rem; letter-spacing:2px;">TRAILS</div>
      </div>
    </div>
    <div class="row g-4 text-center">
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:var(--bs-light);">
          <div class="fw-bold text-primary" style="font-size:2.2rem; line-height:1;">15K+</div>
          <div style="color:var(--bs-body-color); font-size:0.85rem; margin-top:4px;">Expeditions Launched</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:var(--bs-light);">
          <div class="fw-bold text-primary" style="font-size:2.2rem; line-height:1;">4.9★</div>
          <div style="color:var(--bs-body-color); font-size:0.85rem; margin-top:4px;">Average Owner Rating</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:var(--bs-light);">
          <div class="fw-bold text-primary" style="font-size:2.2rem; line-height:1;">50+</div>
          <div style="color:var(--bs-body-color); font-size:0.85rem; margin-top:4px;">Trail Models Available</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 rounded-2" style="background:var(--bs-light);">
          <div class="fw-bold text-primary" style="font-size:2.2rem; line-height:1;">25yr</div>
          <div style="color:var(--bs-body-color); font-size:0.85rem; margin-top:4px;">In the Field</div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-social-2',
    categoryId: 'social-proof',
    label: 'Trailer – Awards & Certifications',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">RECOGNITION</span>
      <h2 class="fw-bold text-white display-6">Trusted by the Wilderness Community</h2>
    </div>
    <div class="row g-4 justify-content-center mb-5">
      <div class="col-md-4 col-lg-3">
        <div class="card p-4 text-center h-100" style="background:var(--bs-body-bg);">
          <div style="width:64px;height:64px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-trophy-fill text-primary fs-3"></i>
          </div>
          <h6 class="text-white fw-bold mb-1">Best Overland Trailer 2024</h6>
          <p style="color:var(--bs-body-color); font-size:0.8rem; margin:0;">Outside Magazine Annual Gear Awards</p>
        </div>
      </div>
      <div class="col-md-4 col-lg-3">
        <div class="card p-4 text-center h-100" style="background:var(--bs-body-bg);">
          <div style="width:64px;height:64px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-patch-check-fill text-primary fs-3"></i>
          </div>
          <h6 class="text-white fw-bold mb-1">ISO 9001 Certified</h6>
          <p style="color:var(--bs-body-color); font-size:0.8rem; margin:0;">Quality Management — Manufacturing Excellence</p>
        </div>
      </div>
      <div class="col-md-4 col-lg-3">
        <div class="card p-4 text-center h-100" style="background:var(--bs-body-bg);">
          <div style="width:64px;height:64px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-award-fill text-primary fs-3"></i>
          </div>
          <h6 class="text-white fw-bold mb-1">Editor's Choice 3 Years Running</h6>
          <p style="color:var(--bs-body-color); font-size:0.8rem; margin:0;">Overland Journal — Equipment Excellence</p>
        </div>
      </div>
      <div class="col-md-4 col-lg-3">
        <div class="card p-4 text-center h-100" style="background:var(--bs-body-bg);">
          <div style="width:64px;height:64px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;">
            <i class="bi bi-shield-fill-check text-primary fs-3"></i>
          </div>
          <h6 class="text-white fw-bold mb-1">Mil-Spec Tested</h6>
          <p style="color:var(--bs-body-color); font-size:0.8rem; margin:0;">MIL-STD-810H Environmental Certification</p>
        </div>
      </div>
    </div>
    <div class="text-center p-4 rounded-2" style="background:var(--bs-body-bg);">
      <p class="text-white fw-bold mb-1">"The most consistently reliable expedition trailer we have tested in 15 years of field reviews."</p>
      <p style="color:var(--bs-body-color); font-size:0.85rem; margin:0;">— Overland Journal, Equipment Excellence Series</p>
    </div>
  </div>
</section>`
  },

  // ─── PROCESS ─────────────────────────────────────────────────────────────────
  {
    id: 'trl-process-1',
    categoryId: 'process',
    label: 'Trailer – 4-Step Buying Process',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">HOW IT WORKS</span>
      <h2 class="fw-bold text-white display-6">From Order to Trailhead in 4 Steps</h2>
    </div>
    <div class="row g-4 position-relative">
      <div class="col-md-3">
        <div class="card p-4 h-100 text-center" style="background:var(--bs-light);">
          <div class="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle" style="width:64px;height:64px;background:var(--bs-primary);font-size:1.4rem;font-weight:800;color:var(--bs-body-bg);">01</div>
          <h6 class="text-white fw-bold mb-2">Configure Your Rig</h6>
          <p style="color:var(--bs-body-color); font-size:0.875rem;">Select your base model, then spec each module — power, water, sleep, and storage — for your exact expedition needs.</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-4 h-100 text-center" style="background:var(--bs-light);">
          <div class="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle" style="width:64px;height:64px;background:var(--bs-primary);font-size:1.4rem;font-weight:800;color:var(--bs-body-bg);">02</div>
          <h6 class="text-white fw-bold mb-2">Review with an Advisor</h6>
          <p style="color:var(--bs-body-color); font-size:0.875rem;">A TrailForce expedition specialist reviews your build and route to flag any configuration improvements before we build.</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-4 h-100 text-center" style="background:var(--bs-light);">
          <div class="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle" style="width:64px;height:64px;background:var(--bs-primary);font-size:1.4rem;font-weight:800;color:var(--bs-body-bg);">03</div>
          <h6 class="text-white fw-bold mb-2">We Build Your Trailer</h6>
          <p style="color:var(--bs-body-color); font-size:0.875rem;">Our craftsmen hand-build your rig in our facility. Every weld and seal is inspected before delivery. Lead time: 6–8 weeks.</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-4 h-100 text-center" style="background:var(--bs-light);">
          <div class="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle" style="width:64px;height:64px;background:var(--bs-primary);font-size:1.4rem;font-weight:800;color:var(--bs-body-bg);">04</div>
          <h6 class="text-white fw-bold mb-2">Hit the Trailhead</h6>
          <p style="color:var(--bs-body-color); font-size:0.875rem;">We deliver to your door or nearest dealer. A trail technician walks you through every system. Then the wilderness is yours.</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="#" class="btn btn-primary btn-lg px-5 fw-bold">Start Your Build</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-process-2',
    categoryId: 'process',
    label: 'Trailer – Expedition Planning Process',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="row align-items-center g-5">
      <div class="col-lg-5">
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">EXPEDITION PLANNING</span>
        <h2 class="fw-bold text-white display-6 mb-3">How to Plan Your Overland Adventure</h2>
        <p style="color:var(--bs-body-color);" class="mb-4">Follow our proven expedition framework — the same one our professional guides use for month-long wilderness crossings.</p>
        <a href="#" class="btn btn-primary fw-bold px-4">Download Planning Guide</a>
      </div>
      <div class="col-lg-7">
        <div class="d-flex flex-column gap-3">
          <div class="d-flex gap-4 align-items-start p-4 rounded-2" style="background:var(--bs-body-bg);">
            <div class="fw-bold text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:48px;height:48px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);font-size:1.1rem;">1</div>
            <div>
              <h6 class="text-white fw-bold mb-1">Route Intelligence</h6>
              <p style="color:var(--bs-body-color); font-size:0.9rem; margin:0;">Map your terrain type, elevation changes, and water sources. Build your route around confirmed access points and bail-out options.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start p-4 rounded-2" style="background:var(--bs-body-bg);">
            <div class="fw-bold text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:48px;height:48px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);font-size:1.1rem;">2</div>
            <div>
              <h6 class="text-white fw-bold mb-1">Gear Specification</h6>
              <p style="color:var(--bs-body-color); font-size:0.9rem; margin:0;">Match your trailer configuration to your route demands. Desert crossings need extra water. Alpine routes need insulation.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start p-4 rounded-2" style="background:var(--bs-body-bg);">
            <div class="fw-bold text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:48px;height:48px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);font-size:1.1rem;">3</div>
            <div>
              <h6 class="text-white fw-bold mb-1">Pre-Departure Checklist</h6>
              <p style="color:var(--bs-body-color); font-size:0.9rem; margin:0;">Run our 47-point systems check — suspension, water, power, communication, first aid — before every departure. No exceptions.</p>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-start p-4 rounded-2" style="background:var(--bs-body-bg);">
            <div class="fw-bold text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:48px;height:48px;background:color-mix(in srgb, var(--bs-primary) 12%, transparent);font-size:1.1rem;">4</div>
            <div>
              <h6 class="text-white fw-bold mb-1">Execute &amp; Adapt</h6>
              <p style="color:var(--bs-body-color); font-size:0.9rem; margin:0;">Follow the plan, but trust your instincts in the field. Our satellite support team is available 24/7 for real-time trail guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // ─── PRODUCTS ─────────────────────────────────────────────────────────────────
  {
    id: 'trl-products-1',
    categoryId: 'products',
    label: 'Trailer – Product Showcase Grid',
    html: `<section class="py-5" style="background:var(--bs-body-bg);">
  <div class="container py-3">
    <div class="d-flex align-items-end justify-content-between mb-5 flex-wrap gap-3">
      <div>
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">NEW ARRIVALS</span>
        <h2 class="fw-bold text-white display-6 mb-0">Latest Expedition Gear</h2>
      </div>
      <div class="d-flex gap-2 flex-wrap">
        <button class="btn btn-primary btn-sm px-3 active fw-bold">All Gear</button>
        <button class="btn btn-outline-primary btn-sm px-3">Trailers</button>
        <button class="btn btn-outline-primary btn-sm px-3">Camping</button>
        <button class="btn btn-outline-primary btn-sm px-3">Survival</button>
      </div>
    </div>
    <div class="row g-4">
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="background:var(--bs-light);">
          <div class="position-relative">
            <img loading="lazy" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80" alt="Basecamp Tent" style="width:100%; height:200px; object-fit:cover;">
            <span class="position-absolute top-0 start-0 m-2 badge" style="background:var(--bs-primary);">NEW</span>
          </div>
          <div class="card-body p-3 d-flex flex-column">
            <small class="text-primary fw-bold mb-1" style="letter-spacing:1px;">SHELTER</small>
            <h6 class="text-white fw-bold mb-1">Basecamp Roof Tent XL</h6>
            <p style="color:var(--bs-body-color); font-size:0.8rem;" class="mb-3 flex-grow-1">3-season, sleeps 2. 30-second deploy. Integrated awning.</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="fw-bold text-primary">$1,299</span>
              <a href="#" class="btn btn-primary btn-sm">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="background:var(--bs-light);">
          <div class="position-relative">
            <img loading="lazy" src="https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=800&q=80" alt="Expedition Kit" style="width:100%; height:200px; object-fit:cover;">
            <span class="position-absolute top-0 start-0 m-2 badge bg-success">BESTSELLER</span>
          </div>
          <div class="card-body p-3 d-flex flex-column">
            <small class="text-primary fw-bold mb-1" style="letter-spacing:1px;">SURVIVAL</small>
            <h6 class="text-white fw-bold mb-1">72-Hr Wilderness Kit</h6>
            <p style="color:var(--bs-body-color); font-size:0.8rem;" class="mb-3 flex-grow-1">Fire, water, shelter, navigation. Fits any TrailForce gear bay.</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="fw-bold text-primary">$349</span>
              <a href="#" class="btn btn-primary btn-sm">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="background:var(--bs-light);">
          <div class="position-relative">
            <img loading="lazy" src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&q=80" alt="TrailForce TX-5" style="width:100%; height:200px; object-fit:cover;">
          </div>
          <div class="card-body p-3 d-flex flex-column">
            <small class="text-primary fw-bold mb-1" style="letter-spacing:1px;">TRAILER</small>
            <h6 class="text-white fw-bold mb-1">TrailForce TX-5 Trailer</h6>
            <p style="color:var(--bs-body-color); font-size:0.8rem;" class="mb-3 flex-grow-1">Entry expedition trailer. 20-gal water, 100W solar, off-road suspension.</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="fw-bold text-primary">$5,999</span>
              <a href="#" class="btn btn-primary btn-sm">Configure</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 overflow-hidden" style="background:var(--bs-light);">
          <div class="position-relative">
            <img loading="lazy" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80" alt="Off-road lights" style="width:100%; height:200px; object-fit:cover;">
            <span class="position-absolute top-0 start-0 m-2 badge" style="background:var(--bs-secondary);">ECO</span>
          </div>
          <div class="card-body p-3 d-flex flex-column">
            <small class="text-primary fw-bold mb-1" style="letter-spacing:1px;">POWER</small>
            <h6 class="text-white fw-bold mb-1">400W Solar Upgrade Kit</h6>
            <p style="color:var(--bs-body-color); font-size:0.8rem;" class="mb-3 flex-grow-1">Fits all TX-series trailers. Dual lithium banks. 2000W inverter included.</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="fw-bold text-primary">$2,199</span>
              <a href="#" class="btn btn-primary btn-sm">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'trl-products-2',
    categoryId: 'products',
    label: 'Trailer – Featured Product Detail',
    html: `<section class="py-5" style="background:var(--bs-light);">
  <div class="container py-3">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <div class="position-relative rounded-3 overflow-hidden">
          <img loading="lazy" src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&q=80" alt="TrailForce TX-7 Expedition Trailer" style="width:100%; aspect-ratio:4/3; object-fit:cover;">
          <div class="position-absolute bottom-0 start-0 w-100 p-3 d-flex gap-2" style="background:linear-gradient(to top, color-mix(in srgb, var(--bs-dark) 93%, transparent), transparent);">
            <span class="badge" style="background:var(--bs-primary);">ALL-TERRAIN</span>
            <span class="badge" style="background:var(--bs-secondary);">SOLAR-READY</span>
            <span class="badge" style="background:var(--bs-light); border:1px solid color-mix(in srgb, var(--bs-primary) 19%, transparent); color:var(--bs-body-color);">OFF-GRID</span>
          </div>
        </div>
        <div class="row g-2 mt-2">
          <div class="col-4">
            <img loading="lazy" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80" alt="Suspension" class="img-fluid rounded-2" style="height:80px; width:100%; object-fit:cover; opacity:0.7; cursor:pointer;">
          </div>
          <div class="col-4">
            <img loading="lazy" src="https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=400&q=80" alt="Gear bay" class="img-fluid rounded-2" style="height:80px; width:100%; object-fit:cover; opacity:0.7; cursor:pointer;">
          </div>
          <div class="col-4">
            <img loading="lazy" src="https://images.unsplash.com/photo-1502786129293-79981df4e689?w=400&q=80" alt="Campfire" class="img-fluid rounded-2" style="height:80px; width:100%; object-fit:cover; opacity:0.7; cursor:pointer;">
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <span class="text-primary fw-bold d-block mb-2" style="letter-spacing:3px; font-size:0.8rem;">EXPEDITION SERIES</span>
        <h2 class="fw-bold text-white display-6 mb-1">TrailForce TX-7</h2>
        <div class="d-flex align-items-center gap-2 mb-3">
          <span style="color:var(--bs-primary);">★★★★★</span>
          <span style="color:var(--bs-body-color); font-size:0.85rem;">4.9 (312 reviews)</span>
        </div>
        <p style="color:var(--bs-body-color); line-height:1.7;" class="mb-4">The TX-7 is TrailForce's most trusted expedition trailer. Independent coil-over suspension, 40-gallon filtered water system, 200W solar with lithium storage, and a fully insulated sleeping platform rated to -15°F. Built for the long haul.</p>
        <div class="row g-3 mb-4">
          <div class="col-6">
            <div class="p-3 rounded-2 text-center" style="background:var(--bs-body-bg);">
              <div class="text-primary fw-bold">40 gal</div>
              <div style="color:var(--bs-body-color); font-size:0.78rem;">Fresh Water</div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 rounded-2 text-center" style="background:var(--bs-body-bg);">
              <div class="text-primary fw-bold">200W</div>
              <div style="color:var(--bs-body-color); font-size:0.78rem;">Solar Power</div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 rounded-2 text-center" style="background:var(--bs-body-bg);">
              <div class="text-primary fw-bold">18"</div>
              <div style="color:var(--bs-body-color); font-size:0.78rem;">Suspension Travel</div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 rounded-2 text-center" style="background:var(--bs-body-bg);">
              <div class="text-primary fw-bold">3,500 lb</div>
              <div style="color:var(--bs-body-color); font-size:0.78rem;">Payload</div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3 mb-4">
          <span class="text-white fw-bold" style="font-size:2rem;">$8,499</span>
          <span style="color:var(--bs-body-color); font-size:0.85rem;">Free delivery within 500 miles</span>
        </div>
        <div class="d-flex gap-3 flex-wrap">
          <a href="#" class="btn btn-primary btn-lg px-5 fw-bold">Configure &amp; Order</a>
          <a href="#" class="btn btn-outline-primary btn-lg px-4">Download Spec Sheet</a>
        </div>
      </div>
    </div>
  </div>
</section>`
  },


  // ── USA Trailer Sales Homepage Blocks ───────────────────────────────────────

  // 1. Navigation — site header
  {
    id: 'trl-nav-3',
    categoryId: 'navigation',
    label: 'USA Trailer \u2013 Site Header',
    html: `<nav style="background:#0d1b2a; font-family:'Segoe UI',system-ui,sans-serif;">
  <!-- Top utility bar -->
  <div style="background:#c8102e; color:#fff; font-size:0.8rem; padding:6px 0;">
    <div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">
      <span><i class="bi bi-telephone-fill me-1"></i>(989) 427-2715</span>
      <span><i class="bi bi-geo-alt-fill me-1"></i>7 Michigan Locations</span>
    </div>
  </div>
  <!-- Main navigation -->
  <div class="container py-3 d-flex justify-content-between align-items-center">
    <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/usa-logo.webp" alt="USA Trailer Sales" style="height:52px; object-fit:contain;" />
    <div class="d-none d-lg-flex align-items-center gap-4">
      <a href="#" style="color:#fff; text-decoration:none; font-size:0.9rem; font-weight:500; opacity:0.9;">Home</a>
      <a href="#" style="color:#fff; text-decoration:none; font-size:0.9rem; font-weight:500; opacity:0.9;">All Inventory</a>
      <a href="#" style="color:#fff; text-decoration:none; font-size:0.9rem; font-weight:500; opacity:0.9;">Financing</a>
      <a href="#" style="color:#fff; text-decoration:none; font-size:0.9rem; font-weight:500; opacity:0.9;">Parts &amp; Service</a>
      <a href="#" style="color:#fff; text-decoration:none; font-size:0.9rem; font-weight:500; opacity:0.9;">Contact Us</a>
      <a href="#" class="btn btn-sm px-4 fw-bold" style="background:#c8102e; color:#fff; border:none; border-radius:6px;">Browse Inventory</a>
    </div>
    <button class="d-lg-none btn btn-sm" style="color:#fff; border:1px solid rgba(255,255,255,0.3);">
      <i class="bi bi-list fs-5"></i>
    </button>
  </div>
</nav>`
  },

  // 2. Hero Banner
  {
    id: 'trl-hero-3',
    categoryId: 'heroes',
    label: 'USA Trailer \u2013 Hero Banner',
    html: `<section style="min-height:90vh; background:url('https://www.usa-trailer.com/wp-content/uploads/2024/06/USA-Trailer-Sales-slide-2.webp') center/cover no-repeat; display:flex; align-items:center; position:relative; overflow:hidden;">
  <div style="position:absolute; inset:0; background:rgba(0,0,0,0.58);"></div>
  <div class="container position-relative py-5 text-white" style="font-family:'Segoe UI',system-ui,sans-serif;">
    <div class="row justify-content-start">
      <div class="col-lg-7 col-xl-6">
        <span class="badge mb-4 px-3 py-2" style="background:#c8102e; font-size:0.72rem; letter-spacing:2.5px; font-weight:700; border-radius:4px;">MICHIGAN'S LARGEST TRAILER DEALER</span>
        <h1 class="fw-black mb-4" style="font-size:clamp(2.2rem,5vw,3.8rem); line-height:1.1; font-weight:900;">Your Hometown<br>Trailer Dealership</h1>
        <p class="lead mb-5" style="color:rgba(255,255,255,0.82); max-width:540px; line-height:1.7;">With 7 locations across Michigan and thousands of trailers in stock, USA Trailer Sales has everything you need &mdash; from utility trailers to heavy equipment haulers.</p>
        <div class="d-flex flex-wrap gap-3 mb-5">
          <a href="#" class="btn btn-lg px-5 fw-bold" style="background:#c8102e; color:#fff; border:none; border-radius:8px;">Browse All Inventory</a>
          <a href="#" class="btn btn-lg px-4 fw-bold" style="background:transparent; color:#fff; border:2px solid rgba(255,255,255,0.7); border-radius:8px;">Get Financing</a>
        </div>
        <!-- Trust stats -->
        <div class="d-flex gap-5 flex-wrap">
          <div>
            <div class="fw-black" style="font-size:2rem; color:#c8102e; line-height:1;">50+</div>
            <div style="font-size:0.8rem; color:rgba(255,255,255,0.65); margin-top:2px;">Years in<br>Business</div>
          </div>
          <div>
            <div class="fw-black" style="font-size:2rem; color:#c8102e; line-height:1;">7</div>
            <div style="font-size:0.8rem; color:rgba(255,255,255,0.65); margin-top:2px;">Michigan<br>Locations</div>
          </div>
          <div>
            <div class="fw-black" style="font-size:2rem; color:#c8102e; line-height:1;">1,000s</div>
            <div style="font-size:0.8rem; color:rgba(255,255,255,0.65); margin-top:2px;">Trailers<br>In Stock</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  // 3. Category Grid
  {
    id: 'trl-products-3',
    categoryId: 'products',
    label: 'USA Trailer \u2013 Category Grid',
    html: `<section style="background:#f5f7fa; padding:80px 0; font-family:'Segoe UI',system-ui,sans-serif;">
  <div class="container">
    <div class="text-center mb-5">
      <span class="badge mb-3 px-3 py-2" style="background:#c8102e; color:#fff; font-size:0.72rem; letter-spacing:2.5px; font-weight:700; border-radius:4px;">SHOP NOW</span>
      <h2 class="fw-black mb-3" style="font-size:clamp(1.8rem,3.5vw,2.6rem); color:#0d1b2a;">Shop by Category</h2>
      <p style="color:#6b7280; max-width:520px; margin:0 auto;">Michigan&apos;s widest selection of quality trailers for every need and budget.</p>
    </div>
    <div class="row g-4">
      <!-- Equipment -->
      <div class="col-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100" style="border-radius:14px; overflow:hidden;">
          <div style="aspect-ratio:4/3; overflow:hidden; background:#dde3ec;">
            <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/equipment-category.webp" alt="Equipment Trailers" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <div class="card-body p-4">
            <h5 class="fw-bold mb-2" style="color:#0d1b2a; font-size:1.05rem;">Equipment Trailers</h5>
            <p class="mb-3" style="color:#6b7280; font-size:0.85rem; line-height:1.6;">Heavy-duty trailers built for machinery, vehicles, and oversized loads.</p>
            <a href="#" style="color:#c8102e; font-weight:700; font-size:0.88rem; text-decoration:none;">Browse &rarr;</a>
          </div>
        </div>
      </div>
      <!-- Utility -->
      <div class="col-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100" style="border-radius:14px; overflow:hidden;">
          <div style="aspect-ratio:4/3; overflow:hidden; background:#dde3ec;">
            <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/utility-category.webp" alt="Landscape &amp; Utility Trailers" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <div class="card-body p-4">
            <h5 class="fw-bold mb-2" style="color:#0d1b2a; font-size:1.05rem;">Landscape &amp; Utility</h5>
            <p class="mb-3" style="color:#6b7280; font-size:0.85rem; line-height:1.6;">Versatile open trailers perfect for landscaping, hauling, and everyday work.</p>
            <a href="#" style="color:#c8102e; font-weight:700; font-size:0.88rem; text-decoration:none;">Browse &rarr;</a>
          </div>
        </div>
      </div>
      <!-- Enclosed -->
      <div class="col-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100" style="border-radius:14px; overflow:hidden;">
          <div style="aspect-ratio:4/3; overflow:hidden; background:#dde3ec;">
            <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/enclosed-category-min.webp" alt="Cargo &amp; Enclosed Trailers" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <div class="card-body p-4">
            <h5 class="fw-bold mb-2" style="color:#0d1b2a; font-size:1.05rem;">Cargo &amp; Enclosed</h5>
            <p class="mb-3" style="color:#6b7280; font-size:0.85rem; line-height:1.6;">Secure your cargo with our wide range of enclosed trailer options.</p>
            <a href="#" style="color:#c8102e; font-weight:700; font-size:0.88rem; text-decoration:none;">Browse &rarr;</a>
          </div>
        </div>
      </div>
      <!-- Dump -->
      <div class="col-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100" style="border-radius:14px; overflow:hidden;">
          <div style="aspect-ratio:4/3; overflow:hidden; background:#dde3ec;">
            <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/dump-category.webp" alt="Dump Trailers" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <div class="card-body p-4">
            <h5 class="fw-bold mb-2" style="color:#0d1b2a; font-size:1.05rem;">Dump Trailers</h5>
            <p class="mb-3" style="color:#6b7280; font-size:0.85rem; line-height:1.6;">Hydraulic dump trailers for construction, landscaping, and debris removal.</p>
            <a href="#" style="color:#c8102e; font-weight:700; font-size:0.88rem; text-decoration:none;">Browse &rarr;</a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="#" class="btn btn-lg px-5 fw-bold" style="background:#0d1b2a; color:#fff; border:none; border-radius:8px;">View All Categories</a>
    </div>
  </div>
</section>`
  },

  // 4. Why Choose Us (Stats + Features)
  {
    id: 'trl-feat-3',
    categoryId: 'features',
    label: 'USA Trailer \u2013 Why Choose Us',
    html: `<section style="background:#0d1b2a; padding:80px 0; color:#fff; font-family:'Segoe UI',system-ui,sans-serif;">
  <div class="container">
    <div class="text-center mb-5">
      <span class="badge mb-3 px-3 py-2" style="background:#c8102e; font-size:0.72rem; letter-spacing:2.5px; font-weight:700; border-radius:4px;">OUR PROMISE</span>
      <h2 class="fw-black mb-3" style="font-size:clamp(1.8rem,3.5vw,2.6rem); color:#fff;">Why Choose USA Trailer Sales?</h2>
      <p style="color:rgba(255,255,255,0.6); max-width:560px; margin:0 auto;">Michigan&apos;s most trusted trailer dealership &mdash; delivering quality, value, and service for over 50 years.</p>
    </div>
    <!-- Stat cards -->
    <div class="row g-4 mb-5">
      <div class="col-6 col-lg-3">
        <div class="text-center p-4 rounded-3" style="background:#1a2744;">
          <div style="font-size:2.8rem; line-height:1; color:#c8102e; font-weight:900;">50+</div>
          <div class="fw-bold mt-2" style="font-size:1rem; color:#fff;">Years in Business</div>
          <div style="font-size:0.78rem; color:rgba(255,255,255,0.5); margin-top:4px;">Family owned since 1972</div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="text-center p-4 rounded-3" style="background:#1a2744;">
          <div style="font-size:2.8rem; line-height:1; color:#c8102e; font-weight:900;">7</div>
          <div class="fw-bold mt-2" style="font-size:1rem; color:#fff;">Michigan Locations</div>
          <div style="font-size:0.78rem; color:rgba(255,255,255,0.5); margin-top:4px;">Across the entire state</div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="text-center p-4 rounded-3" style="background:#1a2744;">
          <div style="font-size:2.8rem; line-height:1; color:#c8102e; font-weight:900;">1,000s</div>
          <div class="fw-bold mt-2" style="font-size:1rem; color:#fff;">Trailers In Stock</div>
          <div style="font-size:0.78rem; color:rgba(255,255,255,0.5); margin-top:4px;">New &amp; used available</div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="text-center p-4 rounded-3" style="background:#1a2744;">
          <div style="font-size:2.8rem; line-height:1; color:#c8102e; font-weight:900;">5&#9733;</div>
          <div class="fw-bold mt-2" style="font-size:1rem; color:#fff;">Expert Staff</div>
          <div style="font-size:0.78rem; color:rgba(255,255,255,0.5); margin-top:4px;">Knowledgeable &amp; friendly</div>
        </div>
      </div>
    </div>
    <!-- Feature bullets -->
    <div class="row g-3 mb-5">
      <div class="col-md-6">
        <div class="d-flex align-items-start gap-3 p-3 rounded-3" style="background:#1a2744;">
          <span style="font-size:1.4rem; line-height:1.4;">&#127942;</span>
          <div>
            <div class="fw-bold mb-1" style="color:#fff;">Top Brand Selection</div>
            <div style="color:rgba(255,255,255,0.58); font-size:0.85rem;">We carry Big Tex, PJ, Load Trail, Carry-On, and more top brands.</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex align-items-start gap-3 p-3 rounded-3" style="background:#1a2744;">
          <span style="font-size:1.4rem; line-height:1.4;">&#128176;</span>
          <div>
            <div class="fw-bold mb-1" style="color:#fff;">Competitive Pricing</div>
            <div style="color:rgba(255,255,255,0.58); font-size:0.85rem;">Best prices in Michigan &mdash; we&apos;ll match any competitor&apos;s written quote.</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex align-items-start gap-3 p-3 rounded-3" style="background:#1a2744;">
          <span style="font-size:1.4rem; line-height:1.4;">&#128295;</span>
          <div>
            <div class="fw-bold mb-1" style="color:#fff;">Full Service Department</div>
            <div style="color:rgba(255,255,255,0.58); font-size:0.85rem;">Repairs, parts, and inspections &mdash; all in-house by certified technicians.</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex align-items-start gap-3 p-3 rounded-3" style="background:#1a2744;">
          <span style="font-size:1.4rem; line-height:1.4;">&#128203;</span>
          <div>
            <div class="fw-bold mb-1" style="color:#fff;">Easy Financing</div>
            <div style="color:rgba(255,255,255,0.58); font-size:0.85rem;">All credit situations considered &mdash; fast approvals and low monthly rates.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a href="#" class="btn btn-lg px-5 fw-bold me-3" style="background:#c8102e; color:#fff; border:none; border-radius:8px;">Browse All Inventory</a>
      <a href="#" class="btn btn-lg px-4" style="background:transparent; color:#fff; border:2px solid rgba(255,255,255,0.35); border-radius:8px;">Contact Us</a>
    </div>
  </div>
</section>`
  },

  // 5. About / Inventory Intro
  {
    id: 'trl-content-3',
    categoryId: 'content',
    label: 'USA Trailer \u2013 About Inventory',
    html: `<section style="background:#fff; padding:80px 0; font-family:'Segoe UI',system-ui,sans-serif;">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <div style="position:relative; display:inline-block; width:100%;">
          <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/USA-Trailer-Sales-trailers-2-jpg.avif" alt="USA Trailer Sales Inventory" style="width:100%; border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,0.14);">
          <div style="position:absolute; bottom:24px; left:-16px; background:#c8102e; color:#fff; padding:14px 20px; border-radius:10px; box-shadow:0 8px 24px rgba(200,16,46,0.4);">
            <div style="font-size:1.7rem; font-weight:900; line-height:1;">1,000+</div>
            <div style="font-size:0.78rem; font-weight:600; opacity:0.9;">Trailers In Stock</div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <span class="badge mb-3 px-3 py-2" style="background:#c8102e; color:#fff; font-size:0.72rem; letter-spacing:2.5px; font-weight:700; border-radius:4px;">MICHIGAN'S #1 TRAILER DEALER</span>
        <h2 class="fw-black mb-4" style="font-size:clamp(1.7rem,3vw,2.4rem); color:#0d1b2a; line-height:1.2;">Michigan&apos;s #1 Source for<br>New &amp; Used Trailers</h2>
        <p style="color:#6b7280; line-height:1.8; margin-bottom:1.5rem;">From everyday utility trailers to heavy equipment haulers, USA Trailer Sales carries the largest selection of trailers in Michigan. We stock top brands at unbeatable prices &mdash; ready to drive away today.</p>
        <ul style="list-style:none; padding:0; margin-bottom:2rem;">
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> Utility, Equipment, Cargo &amp; Dump Trailers</li>
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> New &amp; Certified Pre-Owned Options</li>
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> Custom Configurations Available</li>
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> Same-Day Walk-Out Possible at All Locations</li>
        </ul>
        <a href="#" class="btn btn-lg px-5 fw-bold" style="background:#c8102e; color:#fff; border:none; border-radius:8px;">View All Inventory &rarr;</a>
      </div>
    </div>
  </div>
</section>`
  },

  // 6. Financing CTA
  {
    id: 'trl-cta-3',
    categoryId: 'cta',
    label: 'USA Trailer \u2013 Financing CTA',
    html: `<section style="background:#f5f7fa; padding:80px 0; font-family:'Segoe UI',system-ui,sans-serif;">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="badge mb-3 px-3 py-2" style="background:#c8102e; color:#fff; font-size:0.72rem; letter-spacing:2.5px; font-weight:700; border-radius:4px;">TRAILER FINANCING</span>
        <h2 class="fw-black mb-4" style="font-size:clamp(1.7rem,3vw,2.4rem); color:#0d1b2a; line-height:1.2;">Flexible Financing Available</h2>
        <p style="color:#6b7280; line-height:1.8; margin-bottom:1.5rem;">We work with all credit situations to get you into the trailer you need. Our fast, hassle-free financing process makes owning a trailer easier than ever.</p>
        <ul style="list-style:none; padding:0; margin-bottom:2rem;">
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> All credit types accepted</li>
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> Low monthly payments available</li>
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> Quick approval &mdash; same day decisions</li>
          <li class="d-flex align-items-center gap-2 mb-2" style="color:#333;"><span style="color:#c8102e; font-weight:800;">&#10003;</span> Competitive interest rates</li>
        </ul>
        <div class="d-flex flex-wrap gap-3">
          <a href="#" class="btn btn-lg px-5 fw-bold" style="background:#c8102e; color:#fff; border:none; border-radius:8px;">Apply for Financing</a>
          <a href="#" class="btn btn-lg px-4" style="background:transparent; color:#0d1b2a; border:2px solid #0d1b2a; border-radius:8px;">Learn More</a>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/USA-Trailer-Sales-financing-jpg.avif" alt="Trailer Financing" style="width:100%; border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,0.12);">
      </div>
    </div>
  </div>
</section>`
  },

  // 7. Michigan Locations Map
  {
    id: 'trl-content-4',
    categoryId: 'content',
    label: 'USA Trailer \u2013 Locations Map',
    html: `<section style="background:#fff; padding:80px 0; font-family:'Segoe UI',system-ui,sans-serif;">
  <div class="container text-center">
    <span class="badge mb-3 px-3 py-2" style="background:#c8102e; color:#fff; font-size:0.72rem; letter-spacing:2.5px; font-weight:700; border-radius:4px;">FIND US</span>
    <h2 class="fw-black mb-3" style="font-size:clamp(1.8rem,3.5vw,2.6rem); color:#0d1b2a;">7 Convenient Michigan Locations</h2>
    <p style="color:#6b7280; max-width:560px; margin:0 auto 2.5rem;">Visit any of our statewide dealerships for the best selection, pricing, and expert service in Michigan.</p>
    <!-- Map image -->
    <div class="mb-4">
      <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/USA-Trailer-Sales-Map-Locations.png" alt="USA Trailer Sales Michigan Locations Map" style="max-width:900px; width:100%; border-radius:12px; box-shadow:0 12px 40px rgba(0,0,0,0.1);">
    </div>
    <!-- Location pills -->
    <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
      <span class="px-3 py-2 rounded-pill fw-semibold" style="background:#f0f4ff; color:#0d1b2a; font-size:0.88rem; border:1px solid #d0d9f0;">&#128205; Edmore</span>
      <span class="px-3 py-2 rounded-pill fw-semibold" style="background:#f0f4ff; color:#0d1b2a; font-size:0.88rem; border:1px solid #d0d9f0;">&#128205; Ionia</span>
      <span class="px-3 py-2 rounded-pill fw-semibold" style="background:#f0f4ff; color:#0d1b2a; font-size:0.88rem; border:1px solid #d0d9f0;">&#128205; New Boston</span>
      <span class="px-3 py-2 rounded-pill fw-semibold" style="background:#f0f4ff; color:#0d1b2a; font-size:0.88rem; border:1px solid #d0d9f0;">&#128205; Wayland</span>
      <span class="px-3 py-2 rounded-pill fw-semibold" style="background:#f0f4ff; color:#0d1b2a; font-size:0.88rem; border:1px solid #d0d9f0;">&#128205; Grayling</span>
      <span class="px-3 py-2 rounded-pill fw-semibold" style="background:#f0f4ff; color:#0d1b2a; font-size:0.88rem; border:1px solid #d0d9f0;">&#128205; Monroe</span>
      <span class="px-3 py-2 rounded-pill fw-semibold" style="background:#f0f4ff; color:#0d1b2a; font-size:0.88rem; border:1px solid #d0d9f0;">&#128205; Traverse City</span>
    </div>
    <a href="#" class="btn btn-lg px-5 fw-bold" style="background:#c8102e; color:#fff; border:none; border-radius:8px;">Find Your Nearest Location</a>
  </div>
</section>`
  },

  // 8. Parts & Service
  {
    id: 'trl-feat-4',
    categoryId: 'features',
    label: 'USA Trailer \u2013 Parts & Service',
    html: `<section style="background:#0d1b2a; padding:80px 0; font-family:'Segoe UI',system-ui,sans-serif;">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/USA-Trailer-Sales-parts-and-service-2-jpg.avif" alt="Parts &amp; Service" style="width:100%; border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,0.45);">
      </div>
      <div class="col-lg-6 text-white">
        <span class="badge mb-3 px-3 py-2" style="background:#c8102e; font-size:0.72rem; letter-spacing:2.5px; font-weight:700; border-radius:4px;">PARTS &amp; SERVICE</span>
        <h2 class="fw-black mb-4" style="font-size:clamp(1.7rem,3vw,2.4rem); color:#fff; line-height:1.2;">Expert Trailer Parts &amp; Service</h2>
        <p style="color:rgba(255,255,255,0.62); line-height:1.8; margin-bottom:2rem;">Our certified technicians handle everything from routine maintenance to major repairs. We stock a full inventory of OEM and aftermarket trailer parts at all locations.</p>
        <ul style="list-style:none; padding:0; margin-bottom:2rem;">
          <li class="d-flex align-items-center gap-3 mb-3">
            <span class="d-inline-flex align-items-center justify-content-center fw-bold" style="width:30px; height:30px; min-width:30px; background:#c8102e; border-radius:50%; font-size:0.8rem; color:#fff;">&#10003;</span>
            <span style="color:rgba(255,255,255,0.82);">Brake inspections &amp; replacement</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-3">
            <span class="d-inline-flex align-items-center justify-content-center fw-bold" style="width:30px; height:30px; min-width:30px; background:#c8102e; border-radius:50%; font-size:0.8rem; color:#fff;">&#10003;</span>
            <span style="color:rgba(255,255,255,0.82);">Axle replacement &amp; wheel alignment</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-3">
            <span class="d-inline-flex align-items-center justify-content-center fw-bold" style="width:30px; height:30px; min-width:30px; background:#c8102e; border-radius:50%; font-size:0.8rem; color:#fff;">&#10003;</span>
            <span style="color:rgba(255,255,255,0.82);">Electrical wiring &amp; lighting repair</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-3">
            <span class="d-inline-flex align-items-center justify-content-center fw-bold" style="width:30px; height:30px; min-width:30px; background:#c8102e; border-radius:50%; font-size:0.8rem; color:#fff;">&#10003;</span>
            <span style="color:rgba(255,255,255,0.82);">Tire service &amp; replacement</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-3">
            <span class="d-inline-flex align-items-center justify-content-center fw-bold" style="width:30px; height:30px; min-width:30px; background:#c8102e; border-radius:50%; font-size:0.8rem; color:#fff;">&#10003;</span>
            <span style="color:rgba(255,255,255,0.82);">Roof &amp; panel repair</span>
          </li>
        </ul>
        <a href="#" class="btn btn-lg px-5 fw-bold" style="background:#c8102e; color:#fff; border:none; border-radius:8px;">Visit Our Service Department</a>
      </div>
    </div>
  </div>
</section>`
  },

  // 9. Site Footer
  {
    id: 'trl-footer-3',
    categoryId: 'footers',
    label: 'USA Trailer \u2013 Site Footer',
    html: `<footer style="background:#0d1b2a; color:rgba(255,255,255,0.65); font-family:'Segoe UI',system-ui,sans-serif; padding:60px 0 0;">
  <div class="container">
    <div class="row g-4 mb-4">
      <!-- Brand column -->
      <div class="col-lg-3 col-md-6">
        <img src="https://www.usa-trailer.com/wp-content/uploads/2024/06/usa-logo.webp" alt="USA Trailer Sales" style="height:48px; object-fit:contain; margin-bottom:1rem; display:block;">
        <p style="font-size:0.86rem; line-height:1.7; color:rgba(255,255,255,0.5); margin-bottom:1rem;">Michigan&apos;s Largest Trailer Dealer. Serving communities statewide for over 50 years.</p>
        <div class="d-flex gap-3">
          <a href="#" style="color:rgba(255,255,255,0.45); font-size:1.2rem; text-decoration:none;"><i class="bi bi-facebook"></i></a>
          <a href="#" style="color:rgba(255,255,255,0.45); font-size:1.2rem; text-decoration:none;"><i class="bi bi-instagram"></i></a>
          <a href="#" style="color:rgba(255,255,255,0.45); font-size:1.2rem; text-decoration:none;"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
      <!-- Quick Links -->
      <div class="col-lg-2 col-6">
        <h6 class="fw-bold text-white mb-3" style="font-size:0.82rem; letter-spacing:1.2px; text-transform:uppercase;">Quick Links</h6>
        <ul style="list-style:none; padding:0; margin:0;">
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Home</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">All Inventory</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Financing</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Parts &amp; Service</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Contact Us</a></li>
        </ul>
      </div>
      <!-- Trailer Types -->
      <div class="col-lg-2 col-6">
        <h6 class="fw-bold text-white mb-3" style="font-size:0.82rem; letter-spacing:1.2px; text-transform:uppercase;">Trailer Types</h6>
        <ul style="list-style:none; padding:0; margin:0;">
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Equipment Trailers</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Utility Trailers</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Cargo &amp; Enclosed</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Dump Trailers</a></li>
          <li class="mb-2"><a href="#" style="color:rgba(255,255,255,0.52); text-decoration:none; font-size:0.86rem;">Landscape Trailers</a></li>
        </ul>
      </div>
      <!-- Locations -->
      <div class="col-lg-5 col-md-6">
        <h6 class="fw-bold text-white mb-3" style="font-size:0.82rem; letter-spacing:1.2px; text-transform:uppercase;">Our Locations</h6>
        <div class="row g-2">
          <div class="col-6">
            <div style="font-size:0.82rem; margin-bottom:0.8rem;">
              <div class="fw-bold text-white" style="font-size:0.86rem; margin-bottom:2px;">Edmore</div>
              <div style="color:rgba(255,255,255,0.5);">(989) 427-2715</div>
            </div>
            <div style="font-size:0.82rem; margin-bottom:0.8rem;">
              <div class="fw-bold text-white" style="font-size:0.86rem; margin-bottom:2px;">Ionia</div>
              <div style="color:rgba(255,255,255,0.5);">(616) 527-1947</div>
            </div>
            <div style="font-size:0.82rem; margin-bottom:0.8rem;">
              <div class="fw-bold text-white" style="font-size:0.86rem; margin-bottom:2px;">New Boston</div>
              <div style="color:rgba(255,255,255,0.5);">(734) 753-4340</div>
            </div>
            <div style="font-size:0.82rem;">
              <div class="fw-bold text-white" style="font-size:0.86rem; margin-bottom:2px;">Wayland</div>
              <div style="color:rgba(255,255,255,0.5);">(269) 792-9550</div>
            </div>
          </div>
          <div class="col-6">
            <div style="font-size:0.82rem; margin-bottom:0.8rem;">
              <div class="fw-bold text-white" style="font-size:0.86rem; margin-bottom:2px;">Grayling</div>
              <div style="color:rgba(255,255,255,0.5);">(989) 348-2888</div>
            </div>
            <div style="font-size:0.82rem; margin-bottom:0.8rem;">
              <div class="fw-bold text-white" style="font-size:0.86rem; margin-bottom:2px;">Monroe</div>
              <div style="color:rgba(255,255,255,0.5);">(734) 242-7575</div>
            </div>
            <div style="font-size:0.82rem;">
              <div class="fw-bold text-white" style="font-size:0.86rem; margin-bottom:2px;">Traverse City</div>
              <div style="color:rgba(255,255,255,0.5);">(231) 941-0580</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Bottom bar -->
  <div style="border-top:1px solid rgba(255,255,255,0.1); padding:18px 0;">
    <div class="container d-flex flex-wrap justify-content-between align-items-center gap-3">
      <span style="font-size:0.8rem; color:rgba(255,255,255,0.35);">&copy; 2024 USA Trailer Sales. All rights reserved.</span>
      <div class="d-flex gap-4">
        <a href="#" style="color:rgba(255,255,255,0.35); text-decoration:none; font-size:0.8rem;">Privacy Policy</a>
        <a href="#" style="color:rgba(255,255,255,0.35); text-decoration:none; font-size:0.8rem;">Terms of Use</a>
        <a href="#" style="color:rgba(255,255,255,0.35); text-decoration:none; font-size:0.8rem;">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`
  }

]