import { ChatMessage } from '../types';

export const mockChatHistory: ChatMessage[] = [
  {
    id: 'msg-1',
    type: 'support',
    content: 'Hello! Welcome to 4BLANC support. How can I help you today?',
    timestamp: new Date('2024-12-21T10:00:00'),
    status: 'read',
  },
  {
    id: 'msg-2',
    type: 'user',
    content: 'Hi! I have a question about the UV LED Nail Lamp warranty.',
    timestamp: new Date('2024-12-21T10:01:00'),
    status: 'read',
  },
  {
    id: 'msg-3',
    type: 'support',
    content: 'Of course! All our UV LED Nail Lamps come with a 1-year manufacturer warranty. It covers defects in materials and workmanship under normal use.',
    timestamp: new Date('2024-12-21T10:02:00'),
    status: 'read',
  },
  {
    id: 'msg-4',
    type: 'user',
    content: 'Great! Can I send you a photo of a small issue I noticed on the casing?',
    timestamp: new Date('2024-12-21T10:03:00'),
    status: 'read',
  },
  {
    id: 'msg-5',
    type: 'support',
    content: 'Absolutely! Please go ahead and attach the image. I\'ll be happy to take a look and advise on next steps.',
    timestamp: new Date('2024-12-21T10:03:30'),
    status: 'read',
  },
  {
    id: 'msg-6',
    type: 'user',
    content: 'Here\'s the photo of the lamp casing.',
    timestamp: new Date('2024-12-21T10:04:00'),
    status: 'read',
    attachment: {
      type: 'image',
      name: 'lamp-issue.jpg',
      url: 'https://placehold.co/400x300/F6F8FA/656D76?text=Lamp+Photo',
      size: '1.2 MB',
    },
  },
  {
    id: 'msg-7',
    type: 'support',
    content: 'Thank you for sharing that! I can see the issue you\'re referring to. This appears to be a minor cosmetic defect that would be covered under our warranty. Let me create a replacement request for you right away.',
    timestamp: new Date('2024-12-21T10:05:00'),
    status: 'read',
  },
  {
    id: 'msg-8',
    type: 'support',
    content: 'I\'ve initiated the replacement process. You should receive a confirmation email shortly with shipping details. Is there anything else I can help you with?',
    timestamp: new Date('2024-12-21T10:06:00'),
    status: 'delivered',
  },
];

export const supportInfo = {
  name: '4BLANC Support',
  avatar: 'https://placehold.co/80x80/000000/FFFFFF?text=4B',
  status: 'online' as const,
  responseTime: 'Usually responds within minutes',
};

export const quickReplies = [
  'Track my order',
  'Return policy',
  'Warranty info',
  'Product question',
];
