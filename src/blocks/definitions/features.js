export const featureBlocks = [
  {
    id: 'features-icons-3col',
    categoryId: 'features',
    label: '3-Column Icon Features',
    html: `<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Why Choose Us</h2>
      <p class="text-muted lead">Everything you need to build great products</p>
    </div>
    <div class="row g-4">
      <div class="col-md-4 text-center">
        <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:72px;height:72px">
          <i class="bi bi-lightning-charge fs-2 text-primary"></i>
        </div>
        <h5 class="fw-bold">Lightning Fast</h5>
        <p class="text-muted">Optimized performance out of the box. Load times under 1 second, guaranteed every time.</p>
      </div>
      <div class="col-md-4 text-center">
        <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:72px;height:72px">
          <i class="bi bi-shield-check fs-2 text-success"></i>
        </div>
        <h5 class="fw-bold">Secure by Default</h5>
        <p class="text-muted">Enterprise-grade security baked in from day one with absolutely zero configuration required.</p>
      </div>
      <div class="col-md-4 text-center">
        <div class="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:72px;height:72px">
          <i class="bi bi-graph-up-arrow fs-2 text-warning"></i>
        </div>
        <h5 class="fw-bold">Scales Seamlessly</h5>
        <p class="text-muted">From startup to enterprise — our platform grows right alongside your ambitions.</p>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'features-alternating',
    categoryId: 'features',
    label: 'Alternating Feature Rows',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="row align-items-center g-4 mb-5 pb-3">
      <div class="col-md-6">
        <img loading="lazy" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80" alt="Analytics dashboard" class="img-fluid rounded-4 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
      </div>
      <div class="col-md-6">
        <span class="badge bg-primary mb-2">Feature One</span>
        <h3 class="fw-bold">Powerful Analytics Dashboard</h3>
        <p class="text-muted mb-3">Get deep insights into your users' behavior. Track what matters, fix what doesn't, and grow faster with data-driven decisions.</p>
        <a href="#" class="btn btn-primary">Learn More <i class="bi bi-arrow-right ms-1"></i></a>
      </div>
    </div>
    <div class="row align-items-center g-4">
      <div class="col-md-6 order-md-2">
        <img loading="lazy" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Team collaboration" class="img-fluid rounded-4 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
      </div>
      <div class="col-md-6 order-md-1">
        <span class="badge bg-success mb-2">Feature Two</span>
        <h3 class="fw-bold">Seamless Team Collaboration</h3>
        <p class="text-muted mb-3">Invite your whole team, set permissions, and collaborate in real-time without conflicts or confusion.</p>
        <a href="#" class="btn btn-success">Learn More <i class="bi bi-arrow-right ms-1"></i></a>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'features-stats',
    categoryId: 'features',
    label: 'Stats / Numbers Bar',
    html: `<section class="py-5 bg-primary text-white">
  <div class="container">
    <div class="row text-center g-4">
      <div class="col-6 col-md-3">
        <div class="display-4 fw-bold">50K+</div>
        <div class="opacity-75 mt-1">Happy Customers</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="display-4 fw-bold">99.9%</div>
        <div class="opacity-75 mt-1">Uptime SLA</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="display-4 fw-bold">120+</div>
        <div class="opacity-75 mt-1">Countries Served</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="display-4 fw-bold">4.9★</div>
        <div class="opacity-75 mt-1">Average Rating</div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'features-checklist',
    categoryId: 'features',
    label: 'Feature Checklist',
    html: `<section class="py-5">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="badge bg-primary mb-3">Everything Included</span>
        <h2 class="fw-bold mb-3">All the Features You Need to Succeed</h2>
        <p class="text-muted mb-4">Our platform ships with a complete set of tools so you can focus on building your product, not configuring infrastructure.</p>
        <ul class="list-unstyled mb-0">
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span>Unlimited projects and workspaces with no per-seat restrictions</span>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span>Real-time collaboration with live cursor tracking and comments</span>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span>Advanced analytics and custom reporting dashboards</span>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span>Role-based access control with fine-grained permissions</span>
          </li>
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span>200+ native integrations with the tools you already use</span>
          </li>
          <li class="d-flex align-items-start gap-3">
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
            <span>Priority support with a dedicated customer success manager</span>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <img loading="lazy" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Feature overview" class="img-fluid rounded-4 shadow-lg" style="width:100%; object-fit:cover; aspect-ratio:4/3;">
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'features-2col-icons',
    categoryId: 'features',
    label: '2-Column Icon Grid',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Built to Perform at Every Scale</h2>
      <p class="text-muted lead">Four pillars that power everything we do</p>
    </div>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card border-0 shadow-sm h-100 p-4">
          <div class="mb-3">
            <i class="bi bi-lightning text-primary" style="font-size:2rem;"></i>
          </div>
          <h5 class="fw-bold mb-2">Blazing Performance</h5>
          <p class="text-muted mb-0">Optimized at every layer of the stack. Sub-second response times even under heavy load, with auto-scaling built right in.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-0 shadow-sm h-100 p-4">
          <div class="mb-3">
            <i class="bi bi-shield-check text-primary" style="font-size:2rem;"></i>
          </div>
          <h5 class="fw-bold mb-2">Enterprise Security</h5>
          <p class="text-muted mb-0">SOC 2 certified, GDPR compliant, and encrypted end-to-end. Your data is always protected by industry-leading security standards.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-0 shadow-sm h-100 p-4">
          <div class="mb-3">
            <i class="bi bi-graph-up text-primary" style="font-size:2rem;"></i>
          </div>
          <h5 class="fw-bold mb-2">Actionable Insights</h5>
          <p class="text-muted mb-0">Turn raw data into clear decisions. Custom dashboards, trend analysis, and automated reports delivered on your schedule.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-0 shadow-sm h-100 p-4">
          <div class="mb-3">
            <i class="bi bi-people text-primary" style="font-size:2rem;"></i>
          </div>
          <h5 class="fw-bold mb-2">Built for Teams</h5>
          <p class="text-muted mb-0">Invite unlimited members, manage roles, and collaborate in real-time. Scale from a solo founder to a global organization effortlessly.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
  }
]
