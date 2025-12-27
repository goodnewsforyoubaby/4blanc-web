// Product Types
export interface ProductImage {
  url: string;
  altText?: string;
}

export interface ProductPrice {
  amount: string;
  currencyCode: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: ProductPrice;
  compareAtPrice?: ProductPrice;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
}

export interface ProductListItem {
  id: string;
  title: string;
  handle: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: ProductPrice;
  };
  compareAtPriceRange?: {
    minVariantPrice: ProductPrice;
  };
  featuredImage?: ProductImage;
}

export interface Product extends ProductListItem {
  description: string;
  descriptionHtml?: string;
  images: ProductImage[];
  variants: ProductVariant[];
  options: { name: string; values: string[] }[];
}

// Collection Types
export interface Collection {
  id: string;
  title: string;
  handle: string;
  description?: string;
  image?: ProductImage;
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  variantTitle?: string;
  price: ProductPrice;
  quantity: number;
  image?: ProductImage;
}

export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  subtotal: ProductPrice;
}

// Chat Types
export interface ChatMessage {
  id: string;
  type: 'user' | 'support';
  content: string;
  timestamp: Date;
  attachment?: {
    type: 'image' | 'file';
    name: string;
    url: string;
    size?: string;
  };
  status?: 'sent' | 'delivered' | 'read';
}

// Article Types
export type ArticleCategory = 'product-guides' | 'nail-care-tips' | 'salon-business' | 'maintenance';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  author: string;
  publishedAt: Date;
  readTime: number;
  featuredImage?: string;
  tags: string[];
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Product-specific FAQ (no category needed)
export interface ProductFAQItem {
  id: string;
  question: string;
  answer: string;
}

// Notification Types
export type NotificationType = 'order' | 'promo' | 'system' | 'chat';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

// Order Types
export type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  id: string;
  productId: string;
  productHandle: string;
  title: string;
  variantTitle?: string;
  price: ProductPrice;
  quantity: number;
  image?: ProductImage;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  items: OrderItem[];
  subtotal: ProductPrice;
  shippingCost: ProductPrice;
  total: ProductPrice;
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
  estimatedDelivery?: Date;
}

// Partnership Types
export interface PartnershipBenefit {
  title: string;
  description: string;
}

export interface PartnershipAudience {
  title: string;
  description: string;
  icon: string;
}

export interface PartnershipProgram {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  whyJoinTitle: string;
  whyJoinDescription: string;
  benefits: PartnershipBenefit[];
  targetAudience: PartnershipAudience[];
  howItWorks: string[];
  ctaText: string;
  ctaLink?: string;
  image: string;
}
