export interface ProductBanner {
  id: string;
  image: string;
  label?: string;
  title: string;
  subtitle: string;
  price: string;
  compareAtPrice?: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  variant: 'default' | 'christmas' | 'dark';
}

export interface PromoSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
  link: string;
}

export const productBanners: ProductBanner[] = [
  {
    id: 'maestro-dust-collector',
    image: 'https://4blanc.com/cdn/shop/files/Maestro-nail-dust-collector-1.jpg',
    label: 'BESTSELLER',
    title: 'Maestro Nail Dust Collector',
    subtitle: 'Ultimate Protection for Your Salon',
    price: '$899',
    features: ['HEPA-12 Filter', 'UV Disinfection', 'Ultra Quiet'],
    buttonText: 'Shop Now',
    buttonLink: '/product/maestro-nail-station',
    variant: 'dark',
  },
  {
    id: 'shadowless-lamp',
    image: 'https://4blanc.com/cdn/shop/files/LED-1.jpg',
    label: 'SALE',
    title: 'Shadowless Nail Lamp',
    subtitle: 'Perfect Lighting for Professionals',
    price: '$119',
    compareAtPrice: '$149',
    features: ['2200 Lumens', 'SAMSUNG LEDs', '45,000 Hours'],
    buttonText: 'Shop Now',
    buttonLink: '/product/shadowless-lamp',
    variant: 'dark',
  },
  {
    id: 'uv-led-lamp',
    image: 'https://4blanc.com/cdn/shop/files/UV2.jpg',
    label: 'NEW',
    title: 'Smart UV LED Nail Lamp',
    subtitle: 'It Cures Your Way',
    price: '$88',
    compareAtPrice: '$120',
    features: ['Pure Gold Wire', '48W Power', '30-60s Curing'],
    buttonText: 'Shop Now',
    buttonLink: '/product/uv-led-nail-lamp',
    variant: 'dark',
  },
];

export const promoSlides: PromoSlide[] = [
  {
    id: 'partnership',
    image: '/4blanc-web/images/home/partnership-banner.jpg',
    title: 'Become a 4BLANC Partner',
    subtitle: 'Join our global network',
    link: '/partnership',
  },
  {
    id: 'christmas',
    image: '/4blanc-web/images/home/xmas-banner.jpg',
    title: 'The 4BLANC Christmas Studio Upgrade',
    subtitle: 'Exclusive Holiday Savings',
    link: '/shop',
  },
  {
    id: 'maestro-station',
    image: '/4blanc-web/images/home/main-hero.jpg',
    title: 'Maestro Nail Station',
    subtitle: 'Award-Winning Professional Equipment',
    badge: '/4blanc-web/images/home/award-badge.png',
    link: '/product/maestro-nail-station',
  },
];
