import { FAQItem } from '../types';

export const faqCategories = [
  { id: 'shipping', name: 'Shipping & Delivery' },
  { id: 'returns', name: 'Returns & Refunds' },
  { id: 'products', name: 'Products' },
  { id: 'orders', name: 'Orders & Payments' },
];

export const mockFAQ: FAQItem[] = [
  // Shipping
  {
    id: 'faq-1',
    question: 'How long does shipping take?',
    answer: 'Standard shipping within the US takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping varies by destination, typically 7-14 business days.',
    category: 'shipping',
  },
  {
    id: 'faq-2',
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see the exact shipping cost at checkout.',
    category: 'shipping',
  },
  {
    id: 'faq-3',
    question: 'How can I track my order?',
    answer: 'Once your order ships, you\'ll receive an email with tracking information. You can also track your order by logging into your account and viewing your order history.',
    category: 'shipping',
  },
  // Returns
  {
    id: 'faq-4',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of delivery for unused items in original packaging. Please contact our support team to initiate a return.',
    category: 'returns',
  },
  {
    id: 'faq-5',
    question: 'How do I return a product?',
    answer: 'Contact our support team through the chat or email with your order number. We\'ll provide you with a return label and instructions.',
    category: 'returns',
  },
  {
    id: 'faq-6',
    question: 'When will I receive my refund?',
    answer: 'Refunds are processed within 5-7 business days after we receive your return. The refund will be credited to your original payment method.',
    category: 'returns',
  },
  // Products
  {
    id: 'faq-7',
    question: 'What is the warranty on your products?',
    answer: 'All our electronic products come with a 1-year manufacturer warranty covering defects in materials and workmanship under normal use.',
    category: 'products',
  },
  {
    id: 'faq-8',
    question: 'Are your UV lamps safe?',
    answer: 'Yes! Our UV LED lamps use safe wavelengths specifically designed for gel curing. The exposure time is minimal and poses no risk when used as directed.',
    category: 'products',
  },
  {
    id: 'faq-9',
    question: 'How often should I replace the filters?',
    answer: 'For optimal performance, we recommend replacing dust collector filters every 2-3 months with regular use, or when the filter indicator suggests replacement.',
    category: 'products',
  },
  // Orders
  {
    id: 'faq-10',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Shop Pay.',
    category: 'orders',
  },
  {
    id: 'faq-11',
    question: 'Can I modify or cancel my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, the order may already be processing. Please contact support immediately if you need to make changes.',
    category: 'orders',
  },
  {
    id: 'faq-12',
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes! We offer special pricing for nail salons and beauty professionals. Contact us at wholesale@4blanc.com for more information.',
    category: 'orders',
  },
];

export const getFAQByCategory = (category: string): FAQItem[] => {
  return mockFAQ.filter((item) => item.category === category);
};
