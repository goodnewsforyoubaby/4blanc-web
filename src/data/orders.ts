import { Order } from '../types';

const IMG_PATH = '/4blanc-web/images/products';

export const mockOrders: Order[] = [
  {
    id: 'order-1',
    orderNumber: '4B-2024-1234',
    status: 'shipped',
    createdAt: new Date('2024-12-20T10:30:00'),
    updatedAt: new Date('2024-12-22T14:00:00'),
    items: [
      {
        id: 'item-1-1',
        productId: 'prod-3',
        productHandle: 'maestro-dust-collector',
        title: 'Maestro Nail Dust Collector',
        variantTitle: 'White',
        price: { amount: '245.00', currencyCode: 'USD' },
        quantity: 1,
        image: { url: `${IMG_PATH}/maestro.jpg`, altText: 'Maestro Dust Collector' },
      },
      {
        id: 'item-1-2',
        productId: 'prod-6',
        productHandle: 'maestro-filter',
        title: 'Maestro HEPA Filter',
        price: { amount: '35.00', currencyCode: 'USD' },
        quantity: 2,
        image: { url: `${IMG_PATH}/maestro-filter.jpg`, altText: 'Maestro Filter' },
      },
    ],
    subtotal: { amount: '315.00', currencyCode: 'USD' },
    shippingCost: { amount: '0.00', currencyCode: 'USD' },
    total: { amount: '315.00', currencyCode: 'USD' },
    shippingAddress: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      address1: '123 Nail Art Studio',
      address2: 'Suite 101',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      country: 'United States',
    },
    trackingNumber: '1Z999AA10123456784',
    estimatedDelivery: new Date('2024-12-26'),
  },
  {
    id: 'order-2',
    orderNumber: '4B-2024-1198',
    status: 'delivered',
    createdAt: new Date('2024-12-10T09:15:00'),
    updatedAt: new Date('2024-12-15T11:30:00'),
    items: [
      {
        id: 'item-2-1',
        productId: 'prod-1',
        productHandle: 'uv-led-nail-lamp',
        title: 'SMART UV LED Nail Lamp',
        variantTitle: 'White',
        price: { amount: '88.00', currencyCode: 'USD' },
        quantity: 1,
        image: { url: `${IMG_PATH}/uv-lamp.jpg`, altText: 'UV LED Lamp' },
      },
    ],
    subtotal: { amount: '88.00', currencyCode: 'USD' },
    shippingCost: { amount: '9.99', currencyCode: 'USD' },
    total: { amount: '97.99', currencyCode: 'USD' },
    shippingAddress: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      address1: '123 Nail Art Studio',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      country: 'United States',
    },
  },
  {
    id: 'order-3',
    orderNumber: '4B-2024-1056',
    status: 'processing',
    createdAt: new Date('2024-12-24T16:45:00'),
    updatedAt: new Date('2024-12-24T16:45:00'),
    items: [
      {
        id: 'item-3-1',
        productId: 'prod-2',
        productHandle: 'alize-dust-collector',
        title: 'Alize Nail Dust Collector',
        price: { amount: '165.00', currencyCode: 'USD' },
        quantity: 1,
        image: { url: `${IMG_PATH}/alize.jpg`, altText: 'Alize Dust Collector' },
      },
      {
        id: 'item-3-2',
        productId: 'prod-5',
        productHandle: 'alize-filter',
        title: 'Alize Replacement Filter',
        price: { amount: '24.00', currencyCode: 'USD' },
        quantity: 3,
        image: { url: `${IMG_PATH}/alize-filter.jpg`, altText: 'Alize Filter' },
      },
    ],
    subtotal: { amount: '237.00', currencyCode: 'USD' },
    shippingCost: { amount: '0.00', currencyCode: 'USD' },
    total: { amount: '237.00', currencyCode: 'USD' },
    shippingAddress: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      address1: '456 Beauty Lane',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'United States',
    },
  },
  {
    id: 'order-4',
    orderNumber: '4B-2024-0987',
    status: 'cancelled',
    createdAt: new Date('2024-12-05T14:20:00'),
    updatedAt: new Date('2024-12-06T09:00:00'),
    items: [
      {
        id: 'item-4-1',
        productId: 'prod-4',
        productHandle: 'shadowless-lamp',
        title: 'Shadowless Nail Lamp',
        price: { amount: '195.00', currencyCode: 'USD' },
        quantity: 1,
        image: { url: `${IMG_PATH}/shadowless-lamp.jpg`, altText: 'Shadowless Lamp' },
      },
    ],
    subtotal: { amount: '195.00', currencyCode: 'USD' },
    shippingCost: { amount: '0.00', currencyCode: 'USD' },
    total: { amount: '195.00', currencyCode: 'USD' },
    shippingAddress: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      address1: '123 Nail Art Studio',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      country: 'United States',
    },
  },
];

export const getOrderById = (id: string): Order | undefined => {
  return mockOrders.find((order) => order.id === id);
};

export const getOrderByNumber = (orderNumber: string): Order | undefined => {
  return mockOrders.find((order) => order.orderNumber === orderNumber);
};
