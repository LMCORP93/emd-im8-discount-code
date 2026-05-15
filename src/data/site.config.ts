// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number; name: string; brand: string; slug: string; image: string; brandLogo: string;
  rating: number; reviewCount: number; promoCode: string; promoPercent: number;
  originalPrice: string; discountPrice: string; affiliateLink: string; origin: string;
  availability: string; productType: string; pros: string[]; cons: string[]; description: string;
}
export interface SiteConfig {
  domain: string; isIndexable?: boolean; siteName: string; brand: string; product: string;
  productCategory: string; productFormat: string; tagline: string; affiliateLink: string;
  promoCode: string; originalPrice: string; discountPrice: string; rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string; breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[]; cons: string[]; faq: { question: string; answer: string }[];
  products: Product[]; tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Daily Ultimate Essentials',
    brand: 'IM8',
    slug: 'im8-daily-ultimate-essentials',
    image: '/images/products/im8-product.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69380c53746ebfad67adf684_Header-Logo-New.webp',
    rating: 8.8,
    reviewCount: 500,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '$112.00',
    discountPrice: '$100.80',
    affiliateLink: 'https://taap.it/im8health',
    origin: '🇺🇸 United States',
    availability: 'Delivery to the United States available; check final terms at checkout',
    productType: 'All-in-one daily supplement powder',
    pros: [
      'Premium daily all-in-one formula positioning',
      'Strong buyer intent around reviews, ingredients and discount codes',
      'Good fit for users comparing IM8 with AG1',
      'Simple daily drink format'
    ],
    cons: [
      'More expensive than basic multivitamins or single-ingredient supplements',
      'Best value depends on the active checkout offer',
      'Subscription terms should be checked before recurring purchase'
    ],
    description: 'IM8 Daily Ultimate Essentials is the main product behind the IM8 discount code search intent: a premium daily supplement drink for buyers comparing price, ingredients, reviews and alternatives like AG1.'
  }
];

const config: SiteConfig = {
  domain: 'https://im8-discount-code.com',
  isIndexable: true,
  siteName: 'IM8 Discount Code',
  brand: 'IM8',
  product: 'Daily Ultimate Essentials',
  productCategory: 'Daily supplement and all-in-one wellness powder',
  productFormat: 'Powder',
  tagline: 'Verified IM8 promo code, best deal and checkout guidance.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Supplement and wellness product reviewer since 2024.' },
  seo: {
    title: 'IM8 Discount Code 2026: Verified Promo & Best Deal',
    description: 'Find a working IM8 discount code, verified promo path, best checkout deal, IM8 vs AG1 notes, reviews, scam checks and price warnings.',
    ogImage: '/og-image.jpg',
  },
  analyticsMeasurementId: 'G-3V9ZDPJ6GP',
  breadcrumbs: [{ label: 'IM8 Discount Code', href: '/' }],
  quickSummary: {
    assets: ['Verified IM8 promo path first', 'First-order and subscription savings explained', 'Review, ingredients and AG1 comparison intent covered'],
    considerations: ['Coupon websites may show expired codes', 'Subscription terms matter', 'Always verify discount at checkout'],
  },
  pros: products[0].pros,
  cons: products[0].cons,
  faq: [
    { question: 'What is the best IM8 discount code?', answer: 'The best IM8 discount code is the offer that works at checkout today. Use a verified partner link or the official checkout offer and confirm the final price before payment.' },
    { question: 'Does IM8 offer a first-order discount?', answer: 'IM8 may offer first-order savings through a public promotion, subscription pricing or partner links. Offers can change by campaign and country.' },
    { question: 'Does IM8 have military or student discounts?', answer: 'Some buyers search for an IM8 military discount or IM8 student discount, but these offers are not always public. Check the official checkout, verified partner offer and eligibility terms before assuming they exist.' },
    { question: 'Is IM8 cheaper with a subscription?', answer: 'Subscription pricing is often cheaper than a one-time purchase, but buyers should check renewal price, cancellation terms and whether the discount applies only to the first order.' },
    { question: 'Is IM8 better than AG1?', answer: 'It depends on your goal. Compare formula, taste, serving cost, reviews, ingredients and what each product replaces in your routine before choosing.' },
    { question: 'Is IM8 a scam or legit?', answer: 'IM8 should be judged like any supplement brand: check the official site, ingredient label, third-party testing claims, reviews, refund policy and checkout terms. Avoid judging only from coupon pages or social hype.' },
    { question: 'Are IM8 coupon sites reliable?', answer: 'Not always. Many coupon sites display expired or unverified codes. A verified offer link is usually safer than random coupon lists.' },
  ],
  products,
  tocItems: [
    { id: 'quick-answer', label: 'Quick answer' },
    { id: 'why-growing', label: 'Why searches grow' },
    { id: 'find-code', label: 'Find a real code' },
    { id: 'military-student', label: 'Military & student discounts' },
    { id: 'price', label: 'Price check' },
    { id: 'vs-ag1', label: 'IM8 vs AG1' },
    { id: 'reviews-scam', label: 'Reviews, scam & trust' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'testing', label: 'Testing & clinical signals' },
    { id: 'beckham', label: 'David Beckham angle' },
    { id: 'side-effects', label: 'Side effects' },
    { id: 'verdict', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'blog', label: 'Discount Code', slug: '/', image: '/images/content/im8-discount-code-hero.webp' },
    { type: 'blog', label: 'IM8 vs AG1', slug: '/im8-vs-ag1/', image: '/images/content/im8-vs-ag1-comparison.webp' },
    { type: 'blog', label: 'IM8 Reviews', slug: '/im8-reviews/', image: '/images/content/im8-discount-code-hero.webp' },
  ],
};

export default config;
