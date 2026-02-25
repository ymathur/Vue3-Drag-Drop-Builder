export const galleryBlocks = [
  {
    id: 'gallery-uniform-grid',
    categoryId: 'gallery',
    label: 'Photo Grid (3×2)',
    html: `<section class="py-5 bg-white">
  <div class="container">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Our Gallery</h2>
      <p class="text-muted">A curated selection of our favourite moments and work</p>
    </div>
    <div class="row g-3 mt-4">
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Gallery image 1" class="w-100 rounded-3" style="height:220px;object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80" alt="Gallery image 2" class="w-100 rounded-3" style="height:220px;object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Gallery image 3" class="w-100 rounded-3" style="height:220px;object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" alt="Gallery image 4" class="w-100 rounded-3" style="height:220px;object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Gallery image 5" class="w-100 rounded-3" style="height:220px;object-fit:cover;">
      </div>
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Gallery image 6" class="w-100 rounded-3" style="height:220px;object-fit:cover;">
      </div>
    </div>
  </div>
</section>`
  },
  {
    id: 'gallery-masonry',
    categoryId: 'gallery',
    label: 'Masonry Gallery',
    html: `<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Gallery</h2>
      <p class="text-muted">Explore our collection of inspiring visuals</p>
    </div>
    <div class="mt-4" style="column-count:3;column-gap:1rem;">
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" alt="Gallery image 1" class="w-100 rounded-3 mb-3" style="height:200px;object-fit:cover;break-inside:avoid;display:block;">
      <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80" alt="Gallery image 2" class="w-100 rounded-3 mb-3" style="height:280px;object-fit:cover;break-inside:avoid;display:block;">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80" alt="Gallery image 3" class="w-100 rounded-3 mb-3" style="height:240px;object-fit:cover;break-inside:avoid;display:block;">
      <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80" alt="Gallery image 4" class="w-100 rounded-3 mb-3" style="height:300px;object-fit:cover;break-inside:avoid;display:block;">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80" alt="Gallery image 5" class="w-100 rounded-3 mb-3" style="height:180px;object-fit:cover;break-inside:avoid;display:block;">
      <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80" alt="Gallery image 6" class="w-100 rounded-3 mb-3" style="height:260px;object-fit:cover;break-inside:avoid;display:block;">
    </div>
  </div>
</section>`
  },
  {
    id: 'gallery-lightbox',
    categoryId: 'gallery',
    label: 'Thumbnail Gallery',
    html: `<style>
.gallery-overlay { transition: opacity .2s; }
.position-relative:hover .gallery-overlay { opacity: 1 !important; }
</style>
<section class="py-5 bg-white">
  <div class="container">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Our Gallery</h2>
      <p class="text-muted">Click any image to view in full size</p>
    </div>
    <div class="row g-3 mt-4">
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Gallery image 1" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80" alt="Gallery image 2" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" alt="Gallery image 3" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" alt="Gallery image 4" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" alt="Gallery image 5" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80" alt="Gallery image 6" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" alt="Gallery image 7" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="position-relative overflow-hidden rounded-3" style="height:160px;">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Gallery image 8" class="w-100 h-100 object-fit-cover">
          <div class="gallery-overlay position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0" style="top:0;left:0;right:0;bottom:0;">
            <i class="bi bi-zoom-in text-white fs-3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  }
]
