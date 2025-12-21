import { ProductListItem, Product, Collection } from '../types';

// Base path for product images
const IMG_PATH = '/4blanc-web/images/products';

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
      url: `${IMG_PATH}/uv-lamp.jpg`,
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
      url: `${IMG_PATH}/alize.jpg`,
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
      url: `${IMG_PATH}/maestro.jpg`,
      altText: 'Maestro Nail Dust Collector',
    },
  },
  {
    id: 'prod-4',
    title: 'Shadowless Nail Lamp',
    handle: 'shadowless-lamp',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '195.00', currencyCode: 'USD' },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '249.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: `${IMG_PATH}/shadowless-lamp.jpg`,
      altText: 'Shadowless Nail Lamp',
    },
  },
  {
    id: 'prod-5',
    title: 'Alize Replacement Filter',
    handle: 'alize-filter',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '24.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: `${IMG_PATH}/alize-filter.jpg`,
      altText: 'Alize Replacement Filter',
    },
  },
  {
    id: 'prod-6',
    title: 'Maestro HEPA Filter',
    handle: 'maestro-filter',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '35.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: `${IMG_PATH}/maestro-filter.jpg`,
      altText: 'Maestro HEPA Filter',
    },
  },
  {
    id: 'prod-7',
    title: 'Nail Art Table Mat',
    handle: 'table-mat',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '18.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: `${IMG_PATH}/table-mat.jpg`,
      altText: 'Nail Art Table Mat',
    },
  },
  {
    id: 'prod-8',
    title: 'Macro 20X Photo Lens',
    handle: 'macro-lens',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '89.00', currencyCode: 'USD' },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '110.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: `${IMG_PATH}/macro-lens.jpg`,
      altText: 'Macro 20X Photo Lens',
    },
  },
];

export const mockProductDetails: Record<string, Product> = {
  'uv-led-nail-lamp': {
    ...mockProducts[0],
    description: 'Professional SMART UV LED Nail Lamp with intelligent sensor. 48W power, cures all gel types in 30-60 seconds. Features include automatic sensor, 4 timer settings, and removable base for pedicures.',
    images: [
      { url: `${IMG_PATH}/uv-lamp.jpg`, altText: 'UV Lamp Front' },
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
      { url: `${IMG_PATH}/alize.jpg`, altText: 'Alize Front' },
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
      { url: `${IMG_PATH}/maestro.jpg`, altText: 'Maestro Front' },
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
    image: { url: `${IMG_PATH}/uv-lamp.jpg`, altText: 'UV Lamps' },
  },
  {
    id: 'col-2',
    title: 'Dust Collectors',
    handle: 'dust-collectors',
    description: 'Keep your workspace clean and healthy',
    image: { url: `${IMG_PATH}/alize.jpg`, altText: 'Dust Collectors' },
  },
  {
    id: 'col-3',
    title: 'Maestro Series',
    handle: 'maestro-series',
    description: 'Professional Maestro equipment',
    image: { url: `${IMG_PATH}/maestro.jpg`, altText: 'Maestro Series' },
  },
  {
    id: 'col-4',
    title: 'Accessories',
    handle: 'accessories',
    description: 'Filters, mats, and more',
    image: { url: `${IMG_PATH}/alize-filter.jpg`, altText: 'Accessories' },
  },
  {
    id: 'col-5',
    title: 'Sale',
    handle: 'sale',
    description: 'Special offers and discounts',
    image: { url: `${IMG_PATH}/shadowless-lamp.jpg`, altText: 'Sale Items' },
  },
];

export const getProductsByCollection = (handle: string): ProductListItem[] => {
  switch (handle) {
    case 'uv-led-lamps':
      return mockProducts.filter((p) => p.handle.includes('lamp'));
    case 'dust-collectors':
      return mockProducts.filter((p) => p.handle.includes('collector') || p.handle.includes('alize') || p.handle.includes('maestro'));
    case 'maestro-series':
      return mockProducts.filter((p) => p.handle.includes('maestro'));
    case 'accessories':
      return mockProducts.filter((p) =>
        p.handle.includes('filter') || p.handle.includes('mat') || p.handle.includes('lens')
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
