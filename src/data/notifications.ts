import { Notification } from '../types';

export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    type: 'order',
    title: 'Order Shipped',
    message: 'Your order #4B-1234 has been shipped! Track your package.',
    timestamp: new Date('2024-12-21T09:00:00'),
    read: false,
    actionUrl: '/account',
  },
  {
    id: 'notif-2',
    type: 'promo',
    title: 'Holiday Sale - 20% Off',
    message: 'Save 20% on all UV LED Lamps. Use code: HOLIDAY20',
    timestamp: new Date('2024-12-20T12:00:00'),
    read: false,
  },
  {
    id: 'notif-3',
    type: 'chat',
    title: 'New Message from Support',
    message: 'We\'ve replied to your inquiry about the warranty.',
    timestamp: new Date('2024-12-19T15:30:00'),
    read: true,
    actionUrl: '/chat',
  },
  {
    id: 'notif-4',
    type: 'order',
    title: 'Order Delivered',
    message: 'Your order #4B-1198 has been delivered. Enjoy!',
    timestamp: new Date('2024-12-18T14:00:00'),
    read: true,
  },
  {
    id: 'notif-5',
    type: 'system',
    title: 'Account Security',
    message: 'New login detected from your device.',
    timestamp: new Date('2024-12-17T10:00:00'),
    read: true,
  },
];
