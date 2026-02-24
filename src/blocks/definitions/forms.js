export const formBlocks = [
  {
    id: 'form-contact',
    categoryId: 'forms',
    label: 'Contact Form',
    html: `<section class="py-5 bg-light">
  <div class="container" style="max-width:700px">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Get in Touch</h2>
      <p class="text-muted">Fill out the form below and we'll be in touch within 24 hours.</p>
    </div>
    <div class="card border-0 shadow-sm">
      <div class="card-body p-4 p-md-5">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label fw-semibold">First Name</label>
            <input type="text" class="form-control" placeholder="John" />
          </div>
          <div class="col-md-6">
            <label class="form-label fw-semibold">Last Name</label>
            <input type="text" class="form-control" placeholder="Doe" />
          </div>
          <div class="col-12">
            <label class="form-label fw-semibold">Email Address</label>
            <input type="email" class="form-control" placeholder="john@company.com" />
          </div>
          <div class="col-12">
            <label class="form-label fw-semibold">Subject</label>
            <input type="text" class="form-control" placeholder="How can we help?" />
          </div>
          <div class="col-12">
            <label class="form-label fw-semibold">Message</label>
            <textarea class="form-control" rows="5" placeholder="Tell us more about your project or question..."></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary w-100 btn-lg fw-semibold">Send Message <i class="bi bi-send ms-2"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'form-login',
    categoryId: 'forms',
    label: 'Login Card',
    html: `<section class="py-5 bg-light">
  <div class="container" style="max-width:440px">
    <div class="card border-0 shadow-sm">
      <div class="card-body p-4 p-md-5">
        <div class="text-center mb-4">
          <div class="bg-primary rounded-3 d-inline-flex align-items-center justify-content-center text-white mb-3" style="width:48px;height:48px">
            <i class="bi bi-person-lock fs-5"></i>
          </div>
          <h3 class="fw-bold mb-1">Welcome Back</h3>
          <p class="text-muted small">Sign in to your account to continue</p>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Email Address</label>
          <input type="email" class="form-control" placeholder="you@example.com" />
        </div>
        <div class="mb-3">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <label class="form-label fw-semibold mb-0">Password</label>
            <a href="#" class="small text-primary text-decoration-none">Forgot password?</a>
          </div>
          <input type="password" class="form-control" placeholder="••••••••" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe" />
          <label class="form-check-label text-muted small" for="rememberMe">Remember me for 30 days</label>
        </div>
        <button class="btn btn-primary w-100 btn-lg fw-semibold mb-3">Sign In</button>
        <p class="text-center text-muted small mb-0">Don't have an account? <a href="#" class="text-primary fw-semibold text-decoration-none">Sign up free</a></p>
      </div>
    </div>
  </div>
</section>`
  }
]
