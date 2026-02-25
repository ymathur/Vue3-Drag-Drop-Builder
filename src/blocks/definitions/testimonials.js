export const testimonialBlocks = [
  {
    id: 'testimonials-3col',
    categoryId: 'testimonials',
    label: '3-Column Testimonials',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">What Our Customers Say</h2>
      <p class="text-muted">Join thousands of satisfied teams worldwide</p>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 p-4">
          <div class="mb-3">
            <span class="text-warning fs-5">★★★★★</span>
          </div>
          <p class="text-muted fst-italic mb-4">"This platform transformed how our team collaborates. We shipped 3x faster within the very first month of use."</p>
          <div class="d-flex align-items-center mt-auto">
            <div class="bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" style="width:44px;height:44px">SC</div>
            <div>
              <div class="fw-bold small">Sarah Chen</div>
              <div class="text-muted small">VP Product, Acme Corp</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 p-4">
          <div class="mb-3">
            <span class="text-warning fs-5">★★★★★</span>
          </div>
          <p class="text-muted fst-italic mb-4">"The onboarding was seamless and the support team genuinely cares. Best SaaS purchase our company has ever made."</p>
          <div class="d-flex align-items-center mt-auto">
            <div class="bg-success rounded-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" style="width:44px;height:44px">TM</div>
            <div>
              <div class="fw-bold small">Tom Miller</div>
              <div class="text-muted small">Founder, BuildFast</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 p-4">
          <div class="mb-3">
            <span class="text-warning fs-5">★★★★★</span>
          </div>
          <p class="text-muted fst-italic mb-4">"Replaced three tools with this one. Saved $800/month and gained features we didn't even know we needed."</p>
          <div class="d-flex align-items-center mt-auto">
            <div class="bg-danger rounded-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" style="width:44px;height:44px">LJ</div>
            <div>
              <div class="fw-bold small">Laura Jones</div>
              <div class="text-muted small">CTO, DevStream</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'testimonials-large-quote',
    categoryId: 'testimonials',
    label: 'Large Quote + Logo Bar',
    html: `<section class="py-5 text-center">
  <div class="container" style="max-width:720px">
    <i class="bi bi-quote display-3 text-primary opacity-25"></i>
    <blockquote class="blockquote my-3">
      <p class="fs-3 fw-light fst-italic lh-base">"We evaluated 12 platforms before choosing this one. The decision took 2 weeks. The results spoke for themselves in 2 days."</p>
    </blockquote>
    <div class="d-flex align-items-center justify-content-center gap-3 mt-4 mb-5">
      <div class="bg-dark rounded-circle d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" style="width:54px;height:54px">EW</div>
      <div class="text-start">
        <div class="fw-bold">Emma Wilson</div>
        <div class="text-muted small">Director of Engineering, Stripe</div>
      </div>
    </div>
    <hr class="my-4">
    <p class="text-muted small text-uppercase fw-semibold mb-4 letter-spacing">Trusted by teams at</p>
    <div class="row row-cols-3 row-cols-md-6 g-3 align-items-center justify-content-center">
      <div class="col"><div class="bg-secondary bg-opacity-15 rounded-2 p-2 text-center text-muted small fw-semibold">Google</div></div>
      <div class="col"><div class="bg-secondary bg-opacity-15 rounded-2 p-2 text-center text-muted small fw-semibold">Stripe</div></div>
      <div class="col"><div class="bg-secondary bg-opacity-15 rounded-2 p-2 text-center text-muted small fw-semibold">Airbnb</div></div>
      <div class="col"><div class="bg-secondary bg-opacity-15 rounded-2 p-2 text-center text-muted small fw-semibold">Shopify</div></div>
      <div class="col"><div class="bg-secondary bg-opacity-15 rounded-2 p-2 text-center text-muted small fw-semibold">Notion</div></div>
      <div class="col"><div class="bg-secondary bg-opacity-15 rounded-2 p-2 text-center text-muted small fw-semibold">Vercel</div></div>
    </div>
  </div>
</section>`
  },
  {
    id: 'testimonials-carousel',
    categoryId: 'testimonials',
    label: 'Testimonials Carousel',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">What Our Customers Say</h2>
    </div>
    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" class="bg-primary" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" class="bg-primary" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner pb-5">
        <div class="carousel-item active">
          <div class="text-center px-5 mx-auto" style="max-width:680px">
            <div class="bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center mx-auto mb-4" style="width:60px;height:60px">SM</div>
            <p class="fs-4 fst-italic fw-light mb-4">"This platform completely revolutionized how our team approaches campaigns. We saw results in the very first week."</p>
            <div class="fw-semibold">Sarah M.</div>
            <div class="text-muted small">Marketing Director</div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="text-center px-5 mx-auto" style="max-width:680px">
            <div class="bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center mx-auto mb-4" style="width:60px;height:60px">JK</div>
            <p class="fs-4 fst-italic fw-light mb-4">"As a CTO I care deeply about reliability and developer experience. This product delivers on both without compromise."</p>
            <div class="fw-semibold">James K.</div>
            <div class="text-muted small">CTO</div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="text-center px-5 mx-auto" style="max-width:680px">
            <div class="bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center mx-auto mb-4" style="width:60px;height:60px">PR</div>
            <p class="fs-4 fst-italic fw-light mb-4">"I built my entire startup on this. The support team feels like co-founders. Couldn't have shipped without them."</p>
            <div class="fw-semibold">Priya R.</div>
            <div class="text-muted small">Founder</div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" style="filter:invert(1)"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" style="filter:invert(1)"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>`
  },
  {
    id: 'testimonials-video',
    categoryId: 'testimonials',
    label: 'Video Testimonial',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-md-6">
        <div class="position-relative rounded-4 overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" class="w-100" alt="Video testimonial thumbnail" style="height:350px;object-fit:cover;">
          <div class="position-absolute top-50 start-50 translate-middle">
            <button class="btn btn-light btn-lg rounded-circle shadow" style="width:70px;height:70px;">
              <i class="bi bi-play-fill text-primary fs-3"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <i class="bi bi-quote fs-1 text-primary mb-3"></i>
        <p class="fst-italic fs-5 fw-light mb-4">"Switching to this platform was the best decision we made all year. Our team's productivity doubled, our churn dropped, and customers keep telling us how much smoother everything feels now."</p>
        <div class="d-flex align-items-center mb-3">
          <div class="bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center me-3 flex-shrink-0" style="width:48px;height:48px;">AL</div>
          <div>
            <div class="fw-semibold">Alex Lee</div>
            <div class="text-muted small">Head of Product, Launchpad Co.</div>
          </div>
        </div>
        <div class="mb-3">
          <i class="bi bi-star-fill text-warning small"></i>
          <i class="bi bi-star-fill text-warning small"></i>
          <i class="bi bi-star-fill text-warning small"></i>
          <i class="bi bi-star-fill text-warning small"></i>
          <i class="bi bi-star-fill text-warning small"></i>
        </div>
        <a href="#" class="btn btn-outline-primary mt-1" style="width:fit-content;">Watch Full Story &rarr;</a>
      </div>
    </div>
  </div>
</section>`
  }
]
