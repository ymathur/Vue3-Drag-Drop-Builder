export const navigationBlocks = [
  {
    id: 'nav-default',
    categoryId: 'navigation',
    label: 'Default Navbar',
    html: `<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#">BrandName</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDefault" aria-controls="navDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navDefault">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
      <a href="#" class="btn btn-primary ms-3">Get Started</a>
    </div>
  </div>
</nav>`
  },
  {
    id: 'nav-dark',
    categoryId: 'navigation',
    label: 'Dark Navbar with Dropdown',
    html: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">DarkBrand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDark" aria-controls="navDark" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navDark">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">About</a></li>
            <li><a class="dropdown-item" href="#">Blog</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Portfolio</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
      <a href="#" class="btn btn-outline-light ms-3">Sign In</a>
    </div>
  </div>
</nav>`
  },
  {
    id: 'nav-cta-button',
    categoryId: 'navigation',
    label: 'Navbar with CTA Button',
    html: `<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-5 text-primary" href="#">BrandName</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCtaButton" aria-controls="navCtaButton" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navCtaButton">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-primary btn-sm px-4">Get Started</a>
        <span class="text-muted ms-2 small">No credit card</span>
      </div>
    </div>
  </div>
</nav>`
  },
  {
    id: 'nav-centered-logo',
    categoryId: 'navigation',
    label: 'Centered Logo Navbar',
    html: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCenteredLogo" aria-controls="navCenteredLogo" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navCenteredLogo">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
      </ul>
      <a class="navbar-brand fw-bold text-white fs-4 mx-auto" href="#">BrandName</a>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
        <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
        <li class="nav-item"><a class="nav-link me-2" href="#">Contact</a></li>
        <li class="nav-item me-2"><a href="#" class="btn btn-outline-light btn-sm">Login</a></li>
        <li class="nav-item"><a href="#" class="btn btn-primary btn-sm">Sign Up</a></li>
      </ul>
    </div>
  </div>
</nav>`
  }
]
