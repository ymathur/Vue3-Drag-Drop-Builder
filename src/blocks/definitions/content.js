export const contentBlocks = [
  {
    id: 'content-text-image',
    categoryId: 'content',
    label: 'Text + Image',
    html: `<section class="py-5">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-6">
        <span class="badge bg-primary mb-3">Our Story</span>
        <h2 class="fw-bold mb-3">Built for Modern Teams</h2>
        <p class="text-muted mb-3">Our platform was designed from the ground up with collaboration in mind. Whether you're a solo developer or a 500-person organization, our tools adapt to your workflow and grow with your needs.</p>
        <p class="text-muted mb-4">Integrate with your existing stack in minutes — we support over 200 tools and services out of the box, with a robust API for everything else.</p>
        <a href="#" class="btn btn-outline-primary">Read the Docs <i class="bi bi-box-arrow-up-right ms-1"></i></a>
      </div>
      <div class="col-lg-6">
        <div class="bg-secondary bg-opacity-25 rounded-4 d-flex align-items-center justify-content-center" style="height:340px">
          <span class="text-muted fs-5">Content Image</span>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'content-faq',
    categoryId: 'content',
    label: 'FAQ Accordion',
    html: `<section class="py-5 bg-light">
  <div class="container" style="max-width:760px">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Frequently Asked Questions</h2>
      <p class="text-muted">Can't find the answer you're looking for? <a href="#">Contact our support team.</a></p>
    </div>
    <div class="accordion shadow-sm" id="faqAccordion">
      <div class="accordion-item border-0 mb-2 rounded">
        <h2 class="accordion-header">
          <button class="accordion-button rounded fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
            How does the free trial work?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">You get full access to all features for 14 days with no credit card required. At the end of the trial, choose the plan that fits you best.</div>
        </div>
      </div>
      <div class="accordion-item border-0 mb-2 rounded">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
            Can I cancel at any time?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">Absolutely. Cancel anytime with no penalties and no questions asked. Your data remains available for 30 days after cancellation.</div>
        </div>
      </div>
      <div class="accordion-item border-0 mb-2 rounded">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
            Do you offer discounts for non-profits?
          </button>
        </h2>
        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">Yes — we offer a 50% discount for registered non-profit organizations. Reach out to our sales team with your documentation to apply.</div>
        </div>
      </div>
      <div class="accordion-item border-0 rounded">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
            Is my data safe and secure?
          </button>
        </h2>
        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">We use industry-standard AES-256 encryption for data at rest and TLS 1.3 in transit. We're SOC 2 Type II certified and GDPR compliant.</div>
        </div>
      </div>
    </div>
  </div>
</section>`
  }
]
