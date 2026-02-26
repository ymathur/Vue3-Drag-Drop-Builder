export const ctaBlocks = [
  {
    id: 'cta-centered',
    categoryId: 'cta',
    label: 'Centered CTA Banner',
    html: `<section class="py-5 bg-primary text-white text-center">
  <div class="container py-3">
    <h2 class="display-6 fw-bold mb-3">Ready to Get Started?</h2>
    <p class="lead mb-4" style="opacity:0.85">Join 50,000+ teams already building with us. No credit card required to begin.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#" class="btn btn-light btn-lg px-5 fw-semibold">Start Free Trial</a>
      <a href="#" class="btn btn-outline-light btn-lg px-5">Talk to Sales</a>
    </div>
  </div>
</section>`
  },
  {
    id: 'cta-email-signup',
    categoryId: 'cta',
    label: 'Email Signup Banner',
    html: `<section class="py-5 bg-dark text-white">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-6">
        <h3 class="fw-bold mb-2">Stay in the Loop</h3>
        <p class="mb-0" style="color: rgba(255,255,255,0.6)">Get the latest product updates, tutorials, and exclusive offers delivered straight to your inbox.</p>
      </div>
      <div class="col-lg-6">
        <div class="input-group input-group-lg">
          <input type="email" class="form-control border-0" placeholder="Enter your email address" />
          <button class="btn btn-primary px-4 fw-semibold" type="button">Subscribe</button>
        </div>
        <p class="small mt-2" style="color: rgba(255,255,255,0.4)">No spam, ever. Unsubscribe at any time. We respect your privacy.</p>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'cta-newsletter-image',
    categoryId: 'cta',
    label: 'Newsletter CTA with Image',
    html: `<section class="py-5 bg-primary text-white">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-md-6">
        <h2 class="fw-bold mb-3">Stay in the Loop</h2>
        <p class="mb-4 opacity-75">Get the latest updates, exclusive tips, and early access to new features delivered straight to your inbox. Join 20,000+ subscribers.</p>
        <div class="input-group mb-2">
          <input type="email" class="form-control form-control-lg border-0" placeholder="Enter your email" />
          <button class="btn btn-light fw-semibold px-4" type="button">Subscribe</button>
        </div>
        <p class="small opacity-50 mb-0">We respect your privacy. Unsubscribe at any time. No spam, ever.</p>
      </div>
      <div class="col-md-6 text-center">
        <img loading="lazy" src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80" class="img-fluid rounded-4 shadow-lg" alt="Newsletter illustration" style="max-height:340px;object-fit:cover;width:100%;">
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'cta-countdown',
    categoryId: 'cta',
    label: 'Urgency / Countdown CTA',
    html: `<section class="py-5 bg-dark text-white text-center">
  <div class="container py-3">
    <span class="badge bg-danger mb-3 px-3 py-2 text-uppercase fw-semibold">Limited Time Offer</span>
    <h2 class="fw-bold display-6 mb-4">50% Off &mdash; This Week Only</h2>
    <div class="d-flex justify-content-center flex-wrap gap-3 mb-4">
      <div class="bg-white bg-opacity-10 rounded-3 p-3 d-flex flex-column align-items-center" style="min-width:80px;">
        <span class="display-5 fw-bold lh-1">02</span>
        <span class="small text-white-50 mt-1">Days</span>
      </div>
      <div class="bg-white bg-opacity-10 rounded-3 p-3 d-flex flex-column align-items-center" style="min-width:80px;">
        <span class="display-5 fw-bold lh-1">14</span>
        <span class="small text-white-50 mt-1">Hours</span>
      </div>
      <div class="bg-white bg-opacity-10 rounded-3 p-3 d-flex flex-column align-items-center" style="min-width:80px;">
        <span class="display-5 fw-bold lh-1">35</span>
        <span class="small text-white-50 mt-1">Minutes</span>
      </div>
      <div class="bg-white bg-opacity-10 rounded-3 p-3 d-flex flex-column align-items-center" style="min-width:80px;">
        <span class="display-5 fw-bold lh-1">22</span>
        <span class="small text-white-50 mt-1">Seconds</span>
      </div>
    </div>
    <a href="#" class="btn btn-warning btn-lg px-5 fw-semibold mb-3">Claim Your Discount &rarr;</a>
    <p class="small text-white-50 mb-0">Offer ends Sunday midnight. No code needed.</p>
  </div>
</section>`
  }
]
