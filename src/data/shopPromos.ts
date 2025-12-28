import { PromoCardData } from '../types';

const IMG_PATH = '/4blanc-web/images/products';

export const mockPromoCards: PromoCardData[] = [
  {
    id: 'promo-1',
    title: 'Holiday Sale',
    subtitle: 'Up to 30% off',
    image: `${IMG_PATH}/shadowless-lamp.jpg`,
    badge: '30% OFF',
    type: 'sale',
    link: '/shop/sale',
  },
  {
    id: 'promo-2',
    title: 'New Arrivals',
    subtitle: 'Check out latest',
    image: `${IMG_PATH}/uv-lamp.jpg`,
    badge: 'NEW',
    type: 'new-arrival',
    link: '/product/uv-led-nail-lamp',
  },
];
