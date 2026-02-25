import { categories } from './categories.js'
import { navigationBlocks } from './definitions/navigation.js'
import { heroBlocks } from './definitions/heroes.js'
import { featureBlocks } from './definitions/features.js'
import { contentBlocks } from './definitions/content.js'
import { cardBlocks } from './definitions/cards.js'
import { testimonialBlocks } from './definitions/testimonials.js'
import { ctaBlocks } from './definitions/cta.js'
import { formBlocks } from './definitions/forms.js'
import { pricingBlocks } from './definitions/pricing.js'
import { footerBlocks } from './definitions/footers.js'
import { galleryBlocks } from './definitions/gallery.js'
import { socialProofBlocks } from './definitions/social-proof.js'
import { processBlocks } from './definitions/process.js'
import { productBlocks } from './definitions/products.js'

export const allBlocks = [
  ...navigationBlocks,
  ...heroBlocks,
  ...featureBlocks,
  ...contentBlocks,
  ...cardBlocks,
  ...testimonialBlocks,
  ...ctaBlocks,
  ...formBlocks,
  ...pricingBlocks,
  ...footerBlocks,
  ...galleryBlocks,
  ...socialProofBlocks,
  ...processBlocks,
  ...productBlocks,
]

export const blocksByCategory = categories.reduce((acc, cat) => {
  acc[cat.id] = allBlocks.filter(b => b.categoryId === cat.id)
  return acc
}, {})

export { categories }
