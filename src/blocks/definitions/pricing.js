export const pricingBlocks = [
  {
    id: 'pricing-3col',
    categoryId: 'pricing',
    label: '3-Tier Pricing Table',
    html: `<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Simple, Transparent Pricing</h2>
      <p class="text-muted">No hidden fees. Cancel or upgrade anytime with no lock-in.</p>
    </div>
    <div class="row g-4 align-items-stretch justify-content-center">
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body p-4 p-lg-5">
            <h5 class="fw-bold mb-1">Starter</h5>
            <p class="text-muted small mb-4">Perfect for individuals and small projects</p>
            <div class="display-5 fw-bold mb-4">$9<small class="fs-5 text-muted fw-normal">/mo</small></div>
            <ul class="list-unstyled mb-4">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>5 Projects</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>10GB Storage</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>Email Support</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-x-circle-fill text-secondary mt-1 flex-shrink-0"></i><span class="text-muted">Custom Domain</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-x-circle-fill text-secondary mt-1 flex-shrink-0"></i><span class="text-muted">Team Members</span></li>
            </ul>
            <a href="#" class="btn btn-outline-primary w-100 fw-semibold">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow h-100 bg-primary text-white position-relative overflow-hidden">
          <div class="position-absolute top-0 end-0 m-3">
            <span class="badge bg-warning text-dark fw-semibold">Most Popular</span>
          </div>
          <div class="card-body p-4 p-lg-5">
            <h5 class="fw-bold mb-1">Pro</h5>
            <p class="mb-4" style="opacity:0.75">For growing teams who need more power</p>
            <div class="display-5 fw-bold mb-4">$29<small class="fs-5 fw-normal" style="opacity:0.75">/mo</small></div>
            <ul class="list-unstyled mb-4">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0"></i><span>Unlimited Projects</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0"></i><span>100GB Storage</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0"></i><span>Priority Support</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0"></i><span>Custom Domain</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill mt-1 flex-shrink-0"></i><span>Up to 10 Team Members</span></li>
            </ul>
            <a href="#" class="btn btn-light w-100 fw-semibold text-primary">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body p-4 p-lg-5">
            <h5 class="fw-bold mb-1">Enterprise</h5>
            <p class="text-muted small mb-4">For large organizations with custom needs</p>
            <div class="display-5 fw-bold mb-4">$99<small class="fs-5 text-muted fw-normal">/mo</small></div>
            <ul class="list-unstyled mb-4">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>Unlimited Everything</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>1TB Storage</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>Dedicated Support</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>Custom Domain</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check-circle-fill text-success mt-1 flex-shrink-0"></i><span>Unlimited Team Members</span></li>
            </ul>
            <a href="#" class="btn btn-outline-primary w-100 fw-semibold">Contact Sales</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'pricing-2col',
    categoryId: 'pricing',
    label: '2-Tier Pricing',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Simple, Honest Pricing</h2>
      <p class="text-muted mb-4">Pick the plan that fits your needs. Upgrade or cancel anytime.</p>
      <div class="d-inline-flex rounded-pill border overflow-hidden">
        <button class="btn btn-primary btn-sm px-4 rounded-pill">Monthly</button>
        <button class="btn btn-light btn-sm px-4 rounded-pill">Annual <span class="badge bg-success ms-1">Save 20%</span></button>
      </div>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-5">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body p-4 p-lg-5">
            <h5 class="fw-bold mb-1">Free</h5>
            <p class="text-muted small mb-4">Perfect for personal projects and exploration</p>
            <div class="display-5 fw-bold mb-4">$0<small class="fs-5 text-muted fw-normal">/mo</small></div>
            <ul class="list-unstyled mb-4">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check text-success fs-5 flex-shrink-0"></i><span>1 Project</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check text-success fs-5 flex-shrink-0"></i><span>1GB Storage</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check text-success fs-5 flex-shrink-0"></i><span>Community Support</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check text-success fs-5 flex-shrink-0"></i><span>Basic Analytics</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check text-success fs-5 flex-shrink-0"></i><span>API Access</span></li>
            </ul>
            <a href="#" class="btn btn-outline-primary w-100 fw-semibold">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card border-0 shadow bg-primary text-white h-100 position-relative overflow-hidden">
          <div class="position-absolute top-0 end-0 m-3">
            <span class="badge bg-warning text-dark fw-bold">MOST POPULAR</span>
          </div>
          <div class="card-body p-4 p-lg-5">
            <h5 class="fw-bold mb-1">Pro</h5>
            <p class="mb-4 opacity-75">For teams who need more power and flexibility</p>
            <div class="display-5 fw-bold mb-4">$29<small class="fs-5 fw-normal opacity-75">/mo</small></div>
            <ul class="list-unstyled mb-4">
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>Unlimited Projects</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>100GB Storage</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>Priority Support</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>Advanced Analytics</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>Custom Domain</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>Team Collaboration</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>White Label Reports</span></li>
              <li class="mb-2 d-flex gap-2"><i class="bi bi-check fs-5 flex-shrink-0"></i><span>API + Webhooks</span></li>
            </ul>
            <a href="#" class="btn btn-light fw-semibold w-100">Start Free Trial</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'pricing-comparison',
    categoryId: 'pricing',
    label: 'Feature Comparison Table',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Compare All Features</h2>
      <p class="text-muted">Everything you need to choose the right plan for your team.</p>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th scope="col" class="py-3">Feature</th>
            <th scope="col" class="py-3 text-center">Starter</th>
            <th scope="col" class="py-3 text-center">Growth</th>
            <th scope="col" class="py-3 text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="fw-semibold">Storage</td>
            <td class="text-center text-muted">1GB</td>
            <td class="text-center text-muted">10GB</td>
            <td class="text-center text-muted">Unlimited</td>
          </tr>
          <tr>
            <td class="fw-semibold">Users</td>
            <td class="text-center text-muted">1</td>
            <td class="text-center text-muted">5</td>
            <td class="text-center text-muted">Unlimited</td>
          </tr>
          <tr>
            <td class="fw-semibold">API Access</td>
            <td class="text-center"><i class="bi bi-x-lg text-danger"></i></td>
            <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
            <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
          </tr>
          <tr>
            <td class="fw-semibold">Analytics</td>
            <td class="text-center text-muted">Basic</td>
            <td class="text-center text-muted">Pro</td>
            <td class="text-center text-muted">Custom</td>
          </tr>
          <tr>
            <td class="fw-semibold">Support</td>
            <td class="text-center text-muted">Email</td>
            <td class="text-center text-muted">Chat</td>
            <td class="text-center text-muted">Dedicated</td>
          </tr>
          <tr>
            <td class="fw-semibold">Custom Domain</td>
            <td class="text-center"><i class="bi bi-x-lg text-danger"></i></td>
            <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
            <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
          </tr>
          <tr>
            <td class="fw-semibold">White Label</td>
            <td class="text-center"><i class="bi bi-x-lg text-danger"></i></td>
            <td class="text-center"><i class="bi bi-x-lg text-danger"></i></td>
            <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
          </tr>
          <tr>
            <td class="fw-semibold">Exports</td>
            <td class="text-center text-muted">3/mo</td>
            <td class="text-center text-muted">Unlimited</td>
            <td class="text-center text-muted">Unlimited</td>
          </tr>
          <tr>
            <td class="fw-semibold">Integrations</td>
            <td class="text-center text-muted">5</td>
            <td class="text-center text-muted">25</td>
            <td class="text-center text-muted">Unlimited</td>
          </tr>
          <tr>
            <td class="fw-semibold">SLA</td>
            <td class="text-center text-muted">99%</td>
            <td class="text-center text-muted">99.9%</td>
            <td class="text-center text-muted">99.99%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-light">
            <td></td>
            <td class="text-center py-3"><a href="#" class="btn btn-outline-primary btn-sm">Choose Starter</a></td>
            <td class="text-center py-3"><a href="#" class="btn btn-primary btn-sm">Choose Growth</a></td>
            <td class="text-center py-3"><a href="#" class="btn btn-outline-primary btn-sm">Choose Enterprise</a></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>`
  }
]
