export const heroBlocks = [
  {
    id: 'hero-centered',
    categoryId: 'heroes',
    label: 'Centered Hero',
    html: `<section class="py-5 bg-light text-center">
  <div class="container py-5">
    <span class="badge bg-primary mb-3 fs-6 px-3 py-2">New Feature</span>
    <h1 class="display-4 fw-bold mb-3">Build Beautiful Pages Fast</h1>
    <p class="lead text-muted mb-4 mx-auto" style="max-width:600px">
      Drag and drop Bootstrap components to create stunning, responsive web pages without writing a single line of code.
    </p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-primary btn-lg px-4">Get Started Free</a>
      <a href="#" class="btn btn-outline-secondary btn-lg px-4">Learn More</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-split',
    categoryId: 'heroes',
    label: 'Split Hero (Text + Visual)',
    html: `<section class="py-5">
  <div class="container py-4">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Your Next Great Project Starts Here</h1>
        <p class="lead text-muted mb-4">We help teams design, build, and launch exceptional digital products. From concept to code, faster than ever before.</p>
        <div class="d-flex gap-2 flex-wrap">
          <a href="#" class="btn btn-primary btn-lg">Start Building</a>
          <a href="#" class="btn btn-outline-dark btn-lg">Watch Demo</a>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80" alt="Hero visual" class="img-fluid rounded-4 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-dark-gradient',
    categoryId: 'heroes',
    label: 'Dark Gradient Hero',
    html: `<section class="py-5 text-white text-center" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);">
  <div class="container py-5">
    <p class="text-white-50 text-uppercase fw-semibold letter-spacing mb-3">The Platform for Modern Teams</p>
    <h1 class="display-3 fw-bold mb-3">Transform Your Business</h1>
    <p class="lead mb-5 mx-auto" style="max-width:550px; opacity:0.75">Powerful tools built for modern teams. Scale faster with our enterprise-grade platform.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-light btn-lg px-5 py-3 fw-semibold rounded-pill">Start Free Trial</a>
      <a href="#" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">See the Demo</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-bg-image',
    categoryId: 'heroes',
    label: 'Full-Width Background Image Hero',
    html: `<section class="py-5 text-white text-center position-relative" style="background: url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80') center/cover no-repeat; min-height: 520px; display:flex; align-items:center;">
  <div class="position-absolute top-0 start-0 w-100 h-100" style="background:rgba(0,0,0,0.55);"></div>
  <div class="container py-5 position-relative">
    <span class="badge bg-primary mb-3 fs-6 px-3 py-2">Explore the World</span>
    <h1 class="display-3 fw-bold mb-3">Where Will You Go Next?</h1>
    <p class="lead mb-5 mx-auto" style="max-width:580px; opacity:0.88">Discover breathtaking destinations, curated itineraries, and unforgettable experiences tailored just for you.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-light btn-lg px-5 fw-semibold rounded-pill">Start Exploring</a>
      <a href="#" class="btn btn-outline-light btn-lg px-5 rounded-pill">View Gallery</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-split-with-img',
    categoryId: 'heroes',
    label: 'Split Hero (Text + Real Image)',
    html: `<section class="py-5">
  <div class="container py-4">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="badge text-bg-success fw-semibold mb-3">New Arrival</span>
        <h1 class="display-5 fw-bold lh-1 mb-3">Crafted for Those Who Demand the Best</h1>
        <p class="lead text-muted mb-4">Award-winning design meets cutting-edge technology. Our flagship product redefines what's possible — built for creators, leaders, and innovators.</p>
        <div class="d-flex gap-2 flex-wrap">
          <a href="#" class="btn btn-dark btn-lg px-4">Shop Now</a>
          <a href="#" class="btn btn-outline-secondary btn-lg px-4">Learn More</a>
        </div>
        <div class="mt-4 d-flex gap-4">
          <div><div class="fw-bold fs-4">10k+</div><div class="text-muted small">Happy Customers</div></div>
          <div><div class="fw-bold fs-4">4.9★</div><div class="text-muted small">Average Rating</div></div>
          <div><div class="fw-bold fs-4">2yr</div><div class="text-muted small">Warranty</div></div>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80" alt="Product showcase" class="img-fluid rounded-4 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-centered-with-img',
    categoryId: 'heroes',
    label: 'Centered Hero with Image Below',
    html: `<section class="py-5 text-center bg-light">
  <div class="container py-4">
    <p class="text-primary fw-semibold text-uppercase small mb-2">Introducing v2.0</p>
    <h1 class="display-4 fw-bold mb-3 mx-auto" style="max-width:700px">The Smarter Way to Manage Your Business</h1>
    <p class="lead text-muted mb-4 mx-auto" style="max-width:580px">All your tools in one place. Analytics, team collaboration, and automation that adapts to how you work.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap mb-5">
      <a href="#" class="btn btn-primary btn-lg px-5 rounded-pill">Get Started Free</a>
      <a href="#" class="btn btn-outline-dark btn-lg px-5 rounded-pill">Watch Demo</a>
    </div>
    <div class="rounded-4 overflow-hidden shadow-lg border mx-auto" style="max-width:900px;">
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80" alt="Dashboard preview" class="img-fluid d-block" style="width:100%;">
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-video',
    categoryId: 'heroes',
    label: 'Video Hero (Play Button + Modal)',
    html: `<section class="py-5 text-center" style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);">
  <div class="container py-5">
    <span class="badge bg-danger mb-3 px-3 py-2 fs-6">▶ Watch the Story</span>
    <h1 class="display-4 fw-bold text-white mb-3">See It in Action</h1>
    <p class="lead mb-5 mx-auto text-white-50" style="max-width:560px">Two minutes. That's all it takes to see why thousands of teams switched to our platform.</p>
    <!-- Video thumbnail with play overlay — click to open modal -->
    <div class="position-relative mx-auto rounded-4 overflow-hidden shadow-lg" style="max-width:720px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#videoHeroModal">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&q=80" alt="Video preview" class="img-fluid d-block" style="width:100%; aspect-ratio:16/9; object-fit:cover;">
      <!-- Play button circle -->
      <div class="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle bg-white shadow" style="width:72px; height:72px; transition:transform 0.2s;">
        <i class="bi bi-play-fill text-primary" style="font-size:2rem; margin-left:4px;"></i>
      </div>
    </div>
  </div>
  <!-- Bootstrap Video Modal — replace iframe src with your YouTube/Vimeo embed URL -->
  <div class="modal fade" id="videoHeroModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-dark border-0">
        <div class="modal-header border-0 pb-0">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-0 pb-1">
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Product Demo" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-app-download',
    categoryId: 'heroes',
    label: 'App Download Hero',
    html: `<section class="py-5 bg-light">
  <div class="container py-4">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="badge bg-primary fw-semibold mb-3 px-3 py-2">NEW App</span>
        <h1 class="display-5 fw-bold lh-1 mb-3">Download Our App Today</h1>
        <p class="lead text-muted mb-4">Everything you need, right in your pocket. Stay connected, productive, and in control — wherever you are.</p>
        <div class="d-flex gap-3 flex-wrap mb-4">
          <a href="#" class="btn btn-dark btn-lg d-flex align-items-center gap-2 px-4">
            <i class="bi bi-apple fs-5"></i>
            <span>App Store</span>
          </a>
          <a href="#" class="btn btn-outline-dark btn-lg d-flex align-items-center gap-2 px-4">
            <i class="bi bi-google-play fs-5"></i>
            <span>Google Play</span>
          </a>
        </div>
        <p class="text-muted small mb-0">
          <span class="text-warning fw-semibold">★★★★★</span>
          <span class="ms-1 fw-semibold text-dark">4.9</span>
          <span class="ms-1">from 50k+ reviews</span>
        </p>
      </div>
      <div class="col-lg-6 text-center">
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80" alt="Mobile app mockup" class="rounded-4 shadow-lg" style="height:400px; width:100%; object-fit:cover; max-width:360px;">
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'hero-announcement',
    categoryId: 'heroes',
    label: 'Announcement + Hero',
    html: `<div>
  <!-- Announcement Banner -->
  <div class="bg-warning text-dark py-2 text-center">
    <div class="container d-flex align-items-center justify-content-center gap-2 flex-wrap">
      <span class="badge bg-dark text-warning fw-bold px-2 py-1">NEW</span>
      <span class="fw-semibold small">We just launched our Pro plan with unlimited everything.</span>
      <a href="#" class="text-dark fw-bold small text-decoration-none">See what's included &rarr;</a>
    </div>
  </div>
  <!-- Main Hero -->
  <section class="py-5 bg-light text-center">
    <div class="container py-5">
      <h1 class="display-4 fw-bold mb-3 mx-auto" style="max-width:720px">The All-in-One Platform Your Team Has Been Waiting For</h1>
      <p class="lead text-muted mb-4 mx-auto" style="max-width:580px">Streamline your workflow, collaborate in real time, and ship products your customers love — without the complexity.</p>
      <div class="d-flex gap-3 justify-content-center flex-wrap mb-3">
        <a href="#" class="btn btn-primary btn-lg px-5 rounded-pill">Get Started Free</a>
        <a href="#" class="btn btn-outline-secondary btn-lg px-5 rounded-pill">See a Demo</a>
      </div>
      <p class="text-muted small mb-0">No credit card required &middot; Free 14-day trial</p>
    </div>
  </section>
</div>`
  }
]
