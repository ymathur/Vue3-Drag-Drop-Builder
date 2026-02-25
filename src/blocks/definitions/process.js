export const processBlocks = [
  {
    id: 'process-horizontal-steps',
    categoryId: 'process',
    label: 'How It Works (Horizontal)',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="text-center mb-2">
      <h2 class="fw-bold">How It Works</h2>
      <p class="text-muted lead">Get up and running in four simple steps</p>
    </div>
    <div class="row g-0 mt-5">
      <div class="col-md-3 text-center position-relative">
        <div class="mx-auto mb-3 rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style="width:60px;height:60px;font-size:1.3rem;">1</div>
        <div class="d-none d-md-block position-absolute top-50 end-0 translate-middle-y text-muted" style="font-size:1.5rem;margin-top:-30px;"><i class="bi bi-arrow-right"></i></div>
        <h5 class="fw-semibold mt-2">Sign Up</h5>
        <small class="text-muted">Create your free account in under 60 seconds with just your email.</small>
      </div>
      <div class="col-md-3 text-center position-relative">
        <div class="mx-auto mb-3 rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style="width:60px;height:60px;font-size:1.3rem;">2</div>
        <div class="d-none d-md-block position-absolute top-50 end-0 translate-middle-y text-muted" style="font-size:1.5rem;margin-top:-30px;"><i class="bi bi-arrow-right"></i></div>
        <h5 class="fw-semibold mt-2">Configure</h5>
        <small class="text-muted">Tailor your workspace settings and integrations to match your workflow.</small>
      </div>
      <div class="col-md-3 text-center position-relative">
        <div class="mx-auto mb-3 rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style="width:60px;height:60px;font-size:1.3rem;">3</div>
        <div class="d-none d-md-block position-absolute top-50 end-0 translate-middle-y text-muted" style="font-size:1.5rem;margin-top:-30px;"><i class="bi bi-arrow-right"></i></div>
        <h5 class="fw-semibold mt-2">Invite Team</h5>
        <small class="text-muted">Bring your colleagues on board with a single email invitation link.</small>
      </div>
      <div class="col-md-3 text-center position-relative">
        <div class="mx-auto mb-3 rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style="width:60px;height:60px;font-size:1.3rem;">4</div>
        <h5 class="fw-semibold mt-2">Launch</h5>
        <small class="text-muted">Go live with confidence and start shipping value to your customers today.</small>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'process-vertical-timeline',
    categoryId: 'process',
    label: 'Vertical Timeline',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-2">
      <h2 class="fw-bold">Our Journey</h2>
      <p class="text-muted lead">From a small startup to a global platform</p>
    </div>
    <div class="mt-5 mx-auto" style="max-width:700px;">
      <div class="row g-0">
        <div class="col-auto d-flex flex-column align-items-center me-4">
          <div class="bg-primary rounded-circle flex-shrink-0" style="width:16px;height:16px;margin-top:4px;"></div>
          <div class="border-start border-2 border-primary ms-1 flex-grow-1 mt-1"></div>
        </div>
        <div class="col pb-4">
          <small class="text-muted fw-semibold">2020</small>
          <h5 class="fw-semibold mb-1 mt-1">Founded</h5>
          <p class="text-muted mb-0">Started with a small team and a big vision in Silicon Valley.</p>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-auto d-flex flex-column align-items-center me-4">
          <div class="bg-primary rounded-circle flex-shrink-0" style="width:16px;height:16px;margin-top:4px;"></div>
          <div class="border-start border-2 border-primary ms-1 flex-grow-1 mt-1"></div>
        </div>
        <div class="col pb-4">
          <small class="text-muted fw-semibold">2021</small>
          <h5 class="fw-semibold mb-1 mt-1">First 1,000 Users</h5>
          <p class="text-muted mb-0">Reached our first major milestone with customers in 30 countries.</p>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-auto d-flex flex-column align-items-center me-4">
          <div class="bg-primary rounded-circle flex-shrink-0" style="width:16px;height:16px;margin-top:4px;"></div>
          <div class="border-start border-2 border-primary ms-1 flex-grow-1 mt-1"></div>
        </div>
        <div class="col pb-4">
          <small class="text-muted fw-semibold">2022</small>
          <h5 class="fw-semibold mb-1 mt-1">Series A Funding</h5>
          <p class="text-muted mb-0">Raised $10M to accelerate product development and hiring.</p>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-auto d-flex flex-column align-items-center me-4">
          <div class="bg-primary rounded-circle flex-shrink-0" style="width:16px;height:16px;margin-top:4px;"></div>
          <div class="border-start border-2 border-primary ms-1 flex-grow-1 mt-1"></div>
        </div>
        <div class="col pb-4">
          <small class="text-muted fw-semibold">2023</small>
          <h5 class="fw-semibold mb-1 mt-1">1M Users</h5>
          <p class="text-muted mb-0">Crossed one million active users across 150 countries.</p>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-auto d-flex flex-column align-items-center me-4">
          <div class="bg-primary rounded-circle flex-shrink-0" style="width:16px;height:16px;margin-top:4px;"></div>
        </div>
        <div class="col pb-4">
          <small class="text-muted fw-semibold">2024</small>
          <h5 class="fw-semibold mb-1 mt-1">Global Expansion</h5>
          <p class="text-muted mb-0">Opened offices in London, Singapore and São Paulo.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'process-numbered-cards',
    categoryId: 'process',
    label: 'Numbered Steps (Cards)',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="text-center mb-2">
      <h2 class="fw-bold">Simple 3-Step Process</h2>
      <p class="text-muted lead">Everything you need to get started, distilled into three easy steps</p>
    </div>
    <div class="row g-4 mt-4">
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 p-4 text-center">
          <div class="display-1 fw-black text-primary lh-1 mb-3">01</div>
          <i class="bi bi-person-plus fs-2 text-muted mb-2"></i>
          <h5 class="fw-semibold mt-2">Create Account</h5>
          <p class="text-muted">Sign up for free in under a minute using just your email address. No credit card required to get started.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 p-4 text-center">
          <div class="display-1 fw-black text-primary lh-1 mb-3">02</div>
          <i class="bi bi-sliders fs-2 text-muted mb-2"></i>
          <h5 class="fw-semibold mt-2">Customize</h5>
          <p class="text-muted">Personalize your workspace with your brand, integrations, and team preferences. Set up takes just minutes.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 p-4 text-center">
          <div class="display-1 fw-black text-primary lh-1 mb-3">03</div>
          <i class="bi bi-rocket-takeoff fs-2 text-muted mb-2"></i>
          <h5 class="fw-semibold mt-2">Go Live</h5>
          <p class="text-muted">Launch your project to the world with a single click. Monitor performance from your real-time dashboard.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
];
