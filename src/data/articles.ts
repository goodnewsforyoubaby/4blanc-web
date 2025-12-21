import { Article, ArticleCategory } from '../types';

export const articleCategories: { id: ArticleCategory; name: string; icon: string }[] = [
  { id: 'product-guides', name: 'Product Guides', icon: 'Book' },
  { id: 'nail-care-tips', name: 'Nail Care Tips', icon: 'Sparkles' },
  { id: 'salon-business', name: 'Salon Business', icon: 'Building' },
  { id: 'maintenance', name: 'Maintenance', icon: 'Wrench' },
];

export const mockArticles: Article[] = [
  {
    id: 'article-1',
    title: 'How to Get the Perfect Gel Cure Every Time',
    slug: 'perfect-gel-cure',
    excerpt: 'Learn the secrets to achieving a flawless gel cure with our UV LED lamp. Tips from professional nail technicians.',
    content: `
      <h2>Understanding Gel Curing</h2>
      <p>Proper gel curing is essential for long-lasting manicures. The key factors include lamp wattage, curing time, and gel application thickness.</p>

      <h3>Step 1: Prepare Your Nails</h3>
      <p>Clean and dehydrate the nail plate before applying any gel product. This ensures maximum adhesion.</p>

      <h3>Step 2: Apply Thin Layers</h3>
      <p>Always apply gel in thin, even layers. Thick layers may not cure properly all the way through.</p>

      <h3>Step 3: Cure Time</h3>
      <p>With our 48W UV LED lamp, most gels cure in 30-60 seconds. Always follow the gel manufacturer's recommendations.</p>

      <h3>Pro Tips</h3>
      <ul>
        <li>Keep the lamp clean for optimal light output</li>
        <li>Replace bulbs every 6-12 months for consistent results</li>
        <li>Use the removable base for pedicures</li>
      </ul>
    `,
    category: 'product-guides',
    author: '4BLANC Team',
    publishedAt: new Date('2024-12-15'),
    readTime: 5,
    featuredImage: 'https://cdn.shopify.com/s/files/1/0726/0549/9680/files/UV1.jpg?v=1730131355',
    tags: ['UV lamp', 'gel nails', 'tutorial'],
  },
  {
    id: 'article-2',
    title: 'Maintaining Your Nail Dust Collector',
    slug: 'dust-collector-maintenance',
    excerpt: 'Keep your Alize or Maestro dust collector running smoothly with these essential maintenance tips.',
    content: `
      <h2>Regular Maintenance Schedule</h2>
      <p>Your dust collector is an investment in your health and workspace cleanliness. Follow these guidelines for optimal performance.</p>

      <h3>Daily Tasks</h3>
      <ul>
        <li>Empty the dust bag after each client</li>
        <li>Wipe down the exterior with a damp cloth</li>
        <li>Check the filter indicator light</li>
      </ul>

      <h3>Weekly Tasks</h3>
      <ul>
        <li>Clean or replace the pre-filter</li>
        <li>Inspect the motor housing for dust buildup</li>
        <li>Test suction power</li>
      </ul>

      <h3>Monthly Tasks</h3>
      <ul>
        <li>Replace HEPA filter if needed</li>
        <li>Deep clean all removable parts</li>
        <li>Check power cord for damage</li>
      </ul>
    `,
    category: 'maintenance',
    author: '4BLANC Team',
    publishedAt: new Date('2024-12-10'),
    readTime: 4,
    featuredImage: 'https://cdn.shopify.com/s/files/1/0726/0549/9680/files/alize1.jpg?v=1730131355',
    tags: ['maintenance', 'dust collector', 'filters'],
  },
  {
    id: 'article-3',
    title: 'Essential Cuticle Care for Healthy Nails',
    slug: 'cuticle-care-guide',
    excerpt: 'Discover the importance of cuticle care and how to properly maintain healthy nail beds.',
    content: `
      <h2>Why Cuticle Care Matters</h2>
      <p>Cuticles protect the nail matrix from bacteria and infection. Proper care is essential for healthy nail growth.</p>

      <h3>Do's</h3>
      <ul>
        <li>Gently push back cuticles after softening</li>
        <li>Use cuticle oil daily</li>
        <li>Keep hands moisturized</li>
      </ul>

      <h3>Don'ts</h3>
      <ul>
        <li>Never cut living cuticle tissue</li>
        <li>Avoid harsh chemicals</li>
        <li>Don't pick at hangnails</li>
      </ul>
    `,
    category: 'nail-care-tips',
    author: '4BLANC Team',
    publishedAt: new Date('2024-12-05'),
    readTime: 3,
    featuredImage: 'https://cdn.shopify.com/s/files/1/0726/0549/9680/files/oil1.jpg?v=1730131355',
    tags: ['cuticle care', 'nail health', 'tips'],
  },
  {
    id: 'article-4',
    title: 'Setting Up Your Home Nail Salon',
    slug: 'home-salon-setup',
    excerpt: 'Everything you need to know about creating a professional nail workspace at home.',
    content: `
      <h2>Creating Your Space</h2>
      <p>A well-organized workspace is key to efficient and professional nail services.</p>

      <h3>Essential Equipment</h3>
      <ul>
        <li>Professional nail table with proper ventilation</li>
        <li>High-quality dust collector</li>
        <li>UV/LED curing lamp</li>
        <li>Proper lighting</li>
        <li>Comfortable seating</li>
      </ul>

      <h3>Ventilation</h3>
      <p>Good ventilation is crucial for your health. Consider a combination of a dust collector and an air purifier.</p>
    `,
    category: 'salon-business',
    author: '4BLANC Team',
    publishedAt: new Date('2024-11-28'),
    readTime: 6,
    featuredImage: 'https://cdn.shopify.com/s/files/1/0726/0549/9680/files/toolkit1.jpg?v=1730131355',
    tags: ['salon setup', 'business', 'equipment'],
  },
];

export const getArticlesByCategory = (category: ArticleCategory): Article[] => {
  return mockArticles.filter((a) => a.category === category);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return mockArticles.find((a) => a.slug === slug);
};
