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
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80" alt="Content image" class="img-fluid rounded-4 shadow" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
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
  },
  {
    id: 'content-timeline',
    categoryId: 'content',
    label: 'Timeline / History',
    html: `<section class="py-5 bg-light">
  <div class="container" style="max-width:760px">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Our Journey</h2>
      <p class="text-muted lead">From a small idea to a global platform</p>
    </div>
    <div class="d-flex flex-column gap-4">
      <div class="row g-0 align-items-start">
        <div class="col-sm-3 text-sm-end pe-sm-4 mb-2 mb-sm-0">
          <span class="badge bg-primary fs-6 px-3 py-2">2019</span>
        </div>
        <div class="col-sm-9">
          <div class="border-start border-3 border-primary ps-3">
            <h5 class="fw-bold mb-1">The Idea Is Born</h5>
            <p class="text-muted mb-0">Two engineers frustrated with existing tools decided to build something better. The first prototype was written in a weekend hackathon.</p>
          </div>
        </div>
      </div>
      <div class="row g-0 align-items-start">
        <div class="col-sm-3 text-sm-end pe-sm-4 mb-2 mb-sm-0">
          <span class="badge bg-primary fs-6 px-3 py-2">2020</span>
        </div>
        <div class="col-sm-9">
          <div class="border-start border-3 border-primary ps-3">
            <h5 class="fw-bold mb-1">Public Beta Launch</h5>
            <p class="text-muted mb-0">We opened the doors to 500 beta users and received overwhelmingly positive feedback. Product-market fit confirmed — we were onto something.</p>
          </div>
        </div>
      </div>
      <div class="row g-0 align-items-start">
        <div class="col-sm-3 text-sm-end pe-sm-4 mb-2 mb-sm-0">
          <span class="badge bg-primary fs-6 px-3 py-2">2022</span>
        </div>
        <div class="col-sm-9">
          <div class="border-start border-3 border-primary ps-3">
            <h5 class="fw-bold mb-1">Series A &amp; Global Expansion</h5>
            <p class="text-muted mb-0">Raised $12M in Series A funding. Expanded our team to 40 people across 12 countries and launched enterprise tier with dedicated support.</p>
          </div>
        </div>
      </div>
      <div class="row g-0 align-items-start">
        <div class="col-sm-3 text-sm-end pe-sm-4 mb-2 mb-sm-0">
          <span class="badge bg-primary fs-6 px-3 py-2">2024</span>
        </div>
        <div class="col-sm-9">
          <div class="border-start border-3 border-primary ps-3">
            <h5 class="fw-bold mb-1">50,000 Customers &amp; Counting</h5>
            <p class="text-muted mb-0">We crossed 50K active customers in 120 countries. Today we process over 2 billion events per month — and we're just getting started.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'content-stats-text',
    categoryId: 'content',
    label: 'Stats + Paragraph',
    html: `<section class="py-5">
  <div class="container">
    <div class="row g-4 text-center mb-5 pb-2 border-bottom">
      <div class="col-4">
        <div class="display-5 fw-bold text-primary">50K+</div>
        <div class="text-muted small mt-1">Active Customers</div>
      </div>
      <div class="col-4">
        <div class="display-5 fw-bold text-primary">99.9%</div>
        <div class="text-muted small mt-1">Uptime Guarantee</div>
      </div>
      <div class="col-4">
        <div class="display-5 fw-bold text-primary">2B+</div>
        <div class="text-muted small mt-1">Events per Month</div>
      </div>
    </div>
    <div class="row g-5 align-items-start">
      <div class="col-lg-6">
        <h2 class="fw-bold mb-3">Why Teams Choose Us Over the Competition</h2>
        <p class="text-muted mb-3">We built our platform around one principle: your team should spend time building great products, not fighting your tools. Every decision we make is guided by that belief.</p>
        <p class="text-muted mb-0">From onboarding to scaling to enterprise — our platform meets you where you are and grows as your ambitions do. Thousands of companies trust us to keep their most critical workflows running.</p>
      </div>
      <div class="col-lg-6">
        <h6 class="fw-bold text-uppercase text-muted small letter-spacing mb-3">Key Benefits</h6>
        <ul class="list-unstyled mb-0">
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span class="text-muted">Set up in minutes — no engineering resources required to get started</span>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span class="text-muted">Transparent pricing with no hidden fees or surprise overages</span>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span class="text-muted">24/7 support from engineers who built the product, not call-centre scripts</span>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span class="text-muted">Migrate from any competitor in under an hour with our guided import tool</span>
          </li>
          <li class="d-flex align-items-start gap-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span class="text-muted">Data residency options in US, EU, and APAC for compliance requirements</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>`
  }
]
