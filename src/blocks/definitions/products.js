export const productBlocks = [
  {
    id: 'products-grid',
    categoryId: 'products',
    label: 'Product Grid',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Our Products</h2>
      <p class="text-muted lead">Handpicked gear for every lifestyle and budget</p>
      <div class="btn-group mt-3" role="group" aria-label="Product filters">
        <button type="button" class="btn btn-outline-primary btn-sm active">All</button>
        <button type="button" class="btn btn-outline-primary btn-sm">New</button>
        <button type="button" class="btn btn-outline-primary btn-sm">Popular</button>
        <button type="button" class="btn btn-outline-primary btn-sm">Sale</button>
      </div>
    </div>
    <div class="row g-4 mt-4">
      <div class="col-sm-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" class="card-img-top" alt="Wireless Headphones" style="height:220px;object-fit:cover;">
          <div class="card-body d-flex flex-column">
            <span class="badge bg-primary-subtle text-primary mb-2 align-self-start">Electronics</span>
            <h6 class="card-title fw-semibold mb-1">Wireless Headphones</h6>
            <p class="fw-bold text-dark mb-3">$79.00</p>
            <button class="btn btn-sm btn-outline-primary w-100 mt-auto">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80" class="card-img-top" alt="Smart Watch" style="height:220px;object-fit:cover;">
          <div class="card-body d-flex flex-column">
            <span class="badge bg-warning text-dark mb-2 align-self-start">NEW</span>
            <h6 class="card-title fw-semibold mb-1">Smart Watch</h6>
            <p class="fw-bold text-dark mb-3">$199.00</p>
            <button class="btn btn-sm btn-outline-primary w-100 mt-auto">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80" class="card-img-top" alt="Portable Speaker" style="height:220px;object-fit:cover;">
          <div class="card-body d-flex flex-column">
            <span class="badge bg-primary-subtle text-primary mb-2 align-self-start">Audio</span>
            <h6 class="card-title fw-semibold mb-1">Portable Speaker</h6>
            <p class="fw-bold text-dark mb-3">$49.00</p>
            <button class="btn btn-sm btn-outline-primary w-100 mt-auto">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card border-0 shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80" class="card-img-top" alt="Running Shoes" style="height:220px;object-fit:cover;">
          <div class="card-body d-flex flex-column">
            <span class="badge bg-warning text-dark mb-2 align-self-start">NEW</span>
            <h6 class="card-title fw-semibold mb-1">Running Shoes</h6>
            <p class="fw-bold text-dark mb-3">$129.00</p>
            <button class="btn btn-sm btn-outline-primary w-100 mt-auto">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'products-detail',
    categoryId: 'products',
    label: 'Product Detail',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" class="img-fluid rounded-4 shadow" alt="Premium Wireless Headphones">
      </div>
      <div class="col-md-6">
        <span class="badge bg-success mb-2">NEW ARRIVAL</span>
        <h2 class="fw-bold mb-2">Premium Wireless Headphones</h2>
        <div class="d-flex align-items-center gap-2 mb-3">
          <span class="text-warning">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </span>
          <small class="text-muted">(128 reviews)</small>
        </div>
        <div class="mb-3">
          <span class="display-6 fw-bold text-primary">$79.00</span>
          <small class="text-decoration-line-through text-muted ms-2">$129.00</small>
        </div>
        <p class="text-muted mb-4">Experience studio-quality sound with active noise cancellation and 30-hour battery life. Engineered for all-day comfort with premium memory foam ear cushions.</p>
        <div class="mb-3">
          <span class="fw-semibold me-3">Color:</span>
          <span class="d-inline-block rounded-circle border border-dark me-2" style="width:28px;height:28px;background-color:var(--bs-dark);cursor:pointer;"></span>
          <span class="d-inline-block rounded-circle border border-secondary me-2 bg-white" style="width:28px;height:28px;cursor:pointer;"></span>
          <span class="d-inline-block rounded-circle border border-primary me-2 bg-primary" style="width:28px;height:28px;cursor:pointer;"></span>
        </div>
        <select class="form-select mb-3" aria-label="Select size">
          <option selected disabled>Select Size</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <div class="d-flex gap-2 mb-4">
          <input type="number" class="form-control" style="max-width:80px;" value="1" min="1">
          <button class="btn btn-primary flex-grow-1">Add to Cart</button>
          <button class="btn btn-outline-secondary"><i class="bi bi-heart"></i> Wishlist</button>
        </div>
        <div class="d-flex gap-4 text-muted small">
          <span><i class="bi bi-truck me-1"></i>Free Shipping</span>
          <span><i class="bi bi-arrow-return-left me-1"></i>30-day Returns</span>
          <span><i class="bi bi-shield-check me-1"></i>2-Year Warranty</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'products-featured',
    categoryId: 'products',
    label: 'Featured Product Spotlight',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-4">
      <span class="text-primary text-uppercase fw-bold small letter-spacing-1">Staff Pick</span>
      <h2 class="fw-bold mt-1">The Ultimate Productivity Tool</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80" class="img-fluid rounded-4 shadow-lg w-100 mb-3" alt="Featured Product" style="object-fit:cover;max-height:420px;">
        <div class="row g-2 mb-4">
          <div class="col-4">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80" class="img-fluid rounded-3 shadow-sm w-100" alt="Product view 1" style="height:90px;object-fit:cover;">
          </div>
          <div class="col-4">
            <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&q=80" class="img-fluid rounded-3 shadow-sm w-100" alt="Product view 2" style="height:90px;object-fit:cover;">
          </div>
          <div class="col-4">
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&q=80" class="img-fluid rounded-3 shadow-sm w-100" alt="Product view 3" style="height:90px;object-fit:cover;">
          </div>
        </div>
        <div class="text-center">
          <div class="display-6 fw-bold text-primary mb-2">$199.00</div>
          <p class="text-muted mb-4">A game-changing device engineered to boost your focus, streamline your workflow, and help you accomplish more every day.</p>
          <div class="d-flex justify-content-center gap-3 mb-4">
            <a href="#" class="btn btn-primary btn-lg px-5">Shop Now</a>
            <a href="#" class="btn btn-outline-secondary">Learn More</a>
          </div>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <span class="badge bg-secondary-subtle text-secondary px-3 py-2"><i class="bi bi-lock me-1"></i>Secure Checkout</span>
            <span class="badge bg-secondary-subtle text-secondary px-3 py-2"><i class="bi bi-truck me-1"></i>Free Shipping</span>
            <span class="badge bg-secondary-subtle text-secondary px-3 py-2"><i class="bi bi-arrow-return-left me-1"></i>30-day Return</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'products-comparison',
    categoryId: 'products',
    label: 'Product Comparison Table',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Compare Plans</h2>
      <p class="text-muted lead">Find the perfect plan for your team's needs</p>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle text-center">
        <thead>
          <tr>
            <th class="text-start bg-light" style="min-width:160px;">Feature</th>
            <th class="bg-light">Basic<br><span class="fs-5 fw-bold">$9<small class="fs-6 fw-normal">/mo</small></span></th>
            <th class="bg-primary text-white">Pro<br><span class="fs-5 fw-bold">$29<small class="fs-6 fw-normal">/mo</small></span></th>
            <th class="bg-light">Enterprise<br><span class="fs-5 fw-bold">$99<small class="fs-6 fw-normal">/mo</small></span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-start fw-semibold">Projects</td>
            <td>3</td>
            <td class="table-primary fw-semibold">Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td class="text-start fw-semibold">Storage</td>
            <td>5 GB</td>
            <td class="table-primary fw-semibold">50 GB</td>
            <td>1 TB</td>
          </tr>
          <tr>
            <td class="text-start fw-semibold">Team Members</td>
            <td>1</td>
            <td class="table-primary fw-semibold">10</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td class="text-start fw-semibold">API Access</td>
            <td><i class="bi bi-x-lg text-danger"></i></td>
            <td class="table-primary"><i class="bi bi-check-lg text-success"></i></td>
            <td><i class="bi bi-check-lg text-success"></i></td>
          </tr>
          <tr>
            <td class="text-start fw-semibold">Analytics</td>
            <td>Basic</td>
            <td class="table-primary fw-semibold">Advanced</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td class="text-start fw-semibold">Support</td>
            <td>Email</td>
            <td class="table-primary fw-semibold">Priority</td>
            <td>Dedicated</td>
          </tr>
          <tr>
            <td class="text-start fw-semibold">Integrations</td>
            <td>10</td>
            <td class="table-primary fw-semibold">50</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td class="text-start fw-semibold">Custom Domain</td>
            <td><i class="bi bi-x-lg text-danger"></i></td>
            <td class="table-primary"><i class="bi bi-x-lg text-danger"></i></td>
            <td><i class="bi bi-check-lg text-success"></i></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="bg-light"></td>
            <td class="bg-light py-3"><a href="#" class="btn btn-outline-primary btn-sm px-4">Get Started</a></td>
            <td class="bg-primary-subtle py-3"><a href="#" class="btn btn-primary btn-sm px-4">Get Started</a></td>
            <td class="bg-light py-3"><a href="#" class="btn btn-dark btn-sm px-4">Get Started</a></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>`,
  },
];
