import { ProductListItem, Product, Collection } from '../types';

export const mockProducts: ProductListItem[] = [
  {
    id: 'prod-1',
    title: 'SMART UV LED Nail Lamp',
    handle: 'uv-led-nail-lamp',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '88.00', currencyCode: 'USD' },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '119.99', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/E8E0F0/4A3F5C?text=UV+Lamp',
      altText: 'SMART UV LED Nail Lamp',
    },
  },
  {
    id: 'prod-2',
    title: 'Alize Nail Dust Collector',
    handle: 'alize-dust-collector',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '165.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/F0E8E8/5C4A4A?text=Alize+Dust',
      altText: 'Alize Nail Dust Collector',
    },
  },
  {
    id: 'prod-3',
    title: 'Maestro Nail Dust Collector',
    handle: 'maestro-dust-collector',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '245.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/E8F0E8/4A5C4A?text=Maestro',
      altText: 'Maestro Nail Dust Collector',
    },
  },
  {
    id: 'prod-4',
    title: 'Professional E-File Machine',
    handle: 'e-file-machine',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '195.00', currencyCode: 'USD' },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '249.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/E8E8F0/4A4A5C?text=E-File',
      altText: 'Professional E-File Machine',
    },
  },
  {
    id: 'prod-5',
    title: 'Replacement Filters (3 Pack)',
    handle: 'replacement-filters',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '24.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/F0F0E8/5C5C4A?text=Filters',
      altText: 'Replacement Filters',
    },
  },
  {
    id: 'prod-6',
    title: 'Nail Art Brush Set',
    handle: 'nail-art-brush-set',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '35.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/F0E8F0/5C4A5C?text=Brushes',
      altText: 'Nail Art Brush Set',
    },
  },
  {
    id: 'prod-7',
    title: 'Cuticle Oil Set',
    handle: 'cuticle-oil-set',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '18.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/E8F0F0/4A5C5C?text=Cuticle+Oil',
      altText: 'Cuticle Oil Set',
    },
  },
  {
    id: 'prod-8',
    title: 'Professional Tool Kit',
    handle: 'professional-tool-kit',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '89.00', currencyCode: 'USD' },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '110.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://placehold.co/400x400/F5F5F5/666666?text=Tool+Kit',
      altText: 'Professional Tool Kit',
    },
  },
];

export const mockProductDetails: Record<string, Product> = {
  'uv-led-nail-lamp': {
    ...mockProducts[0],
    description: 'Professional SMART UV LED Nail Lamp with intelligent sensor. 48W power, cures all gel types in 30-60 seconds. Features include automatic sensor, 4 timer settings, and removable base for pedicures.',
    images: [
      { url: 'https://placehold.co/400x400/E8E0F0/4A3F5C?text=UV+Lamp', altText: 'UV Lamp Front' },
      { url: 'https://placehold.co/400x400/E8E0F0/4A3F5C?text=UV+Lamp+2', altText: 'UV Lamp Side' },
    ],
    variants: [
      {
        id: 'var-1-1',
        title: 'White',
        price: { amount: '88.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '119.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Color', value: 'White' }],
      },
      {
        id: 'var-1-2',
        title: 'Black',
        price: { amount: '88.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '119.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Color', value: 'Black' }],
      },
    ],
    options: [{ name: 'Color', values: ['White', 'Black'] }],
  },
  'alize-dust-collector': {
    ...mockProducts[1],
    description: 'Compact and powerful nail dust collector. Perfect for home salons and mobile technicians. Quiet operation with HEPA filtration system.',
    images: [
      { url: 'https://placehold.co/400x400/F0E8E8/5C4A4A?text=Alize+Dust', altText: 'Alize Front' },
    ],
    variants: [
      {
        id: 'var-2-1',
        title: 'Default',
        price: { amount: '165.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [],
      },
    ],
    options: [],
  },
  'maestro-dust-collector': {
    ...mockProducts[2],
    description: 'Professional-grade dust collector with superior suction power. Built-in LED lighting, adjustable speed, and washable filters. Ideal for busy salons.',
    images: [
      { url: 'https://placehold.co/400x400/E8F0E8/4A5C4A?text=Maestro', altText: 'Maestro Front' },
    ],
    variants: [
      {
        id: 'var-3-1',
        title: 'White',
        price: { amount: '245.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Color', value: 'White' }],
      },
      {
        id: 'var-3-2',
        title: 'Black',
        price: { amount: '245.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Color', value: 'Black' }],
      },
    ],
    options: [{ name: 'Color', values: ['White', 'Black'] }],
  },
};

export const mockCollections: Collection[] = [
  {
    id: 'col-1',
    title: 'UV & LED Lamps',
    handle: 'uv-led-lamps',
    description: 'Professional curing lamps for gel and polygel',
    image: { url: 'https://placehold.co/400x400/E8E0F0/4A3F5C?text=UV+Lamp', altText: 'UV Lamps' },
  },
  {
    id: 'col-2',
    title: 'Dust Collectors',
    handle: 'dust-collectors',
    description: 'Keep your workspace clean and healthy',
    image: { url: 'https://placehold.co/400x400/F0E8E8/5C4A4A?text=Alize+Dust', altText: 'Dust Collectors' },
  },
  {
    id: 'col-3',
    title: 'E-File Machines',
    handle: 'e-file-machines',
    description: 'Professional electric nail drills',
    image: { url: 'https://placehold.co/400x400/E8E8F0/4A4A5C?text=E-File', altText: 'E-File Machines' },
  },
  {
    id: 'col-4',
    title: 'Accessories',
    handle: 'accessories',
    description: 'Filters, brushes, and more',
    image: { url: 'https://placehold.co/400x400/F0F0E8/5C5C4A?text=Filters', altText: 'Accessories' },
  },
  {
    id: 'col-5',
    title: 'Sale',
    handle: 'sale',
    description: 'Special offers and discounts',
    image: { url: 'https://placehold.co/400x400/F5F5F5/666666?text=Tool+Kit', altText: 'Sale Items' },
  },
];

export const getProductsByCollection = (handle: string): ProductListItem[] => {
  switch (handle) {
    case 'uv-led-lamps':
      return mockProducts.filter((p) => p.handle.includes('lamp'));
    case 'dust-collectors':
      return mockProducts.filter((p) => p.handle.includes('collector'));
    case 'e-file-machines':
      return mockProducts.filter((p) => p.handle.includes('e-file'));
    case 'accessories':
      return mockProducts.filter((p) =>
        p.handle.includes('filter') || p.handle.includes('brush') || p.handle.includes('oil')
      );
    case 'sale':
      return mockProducts.filter((p) => p.compareAtPriceRange);
    default:
      return mockProducts;
  }
};

export const getFeaturedProducts = (limit = 8): ProductListItem[] => {
  return mockProducts.slice(0, limit);
};

export const searchProducts = (query: string): ProductListItem[] => {
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.handle.toLowerCase().includes(lowerQuery)
  );
};
