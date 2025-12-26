export interface ShippingFAQItem {
  id: string;
  question: string;
  answer: string;
}

export const shippingFAQ: ShippingFAQItem[] = [
  {
    id: 'ship-faq-1',
    question: 'How long does shipping take?',
    answer: 'Standard shipping within the US takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping varies by destination.',
  },
  {
    id: 'ship-faq-2',
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by destination. You can see exact rates at checkout.',
  },
  {
    id: 'ship-faq-3',
    question: 'What are the shipping costs?',
    answer: 'Standard: $5.99 (FREE on orders over $50). Express: $14.99. International rates start at $12.99 depending on destination.',
  },
  {
    id: 'ship-faq-4',
    question: 'Are there shipping restrictions?',
    answer: 'Some countries may have import restrictions on electronic equipment. Please check your local customs regulations before ordering.',
  },
  {
    id: 'ship-faq-5',
    question: 'Can I track my order?',
    answer: 'Yes! Once your order ships, you will receive an email with tracking information. You can also track orders in your account.',
  },
];

export interface ShippingMethod {
  id: string;
  name: string;
  duration: string;
  price: number;
  freeThreshold: number | null;
}

export const shippingMethods: ShippingMethod[] = [
  {
    id: 'standard',
    name: 'Standard',
    duration: '3-5 business days',
    price: 5.99,
    freeThreshold: 50,
  },
  {
    id: 'express',
    name: 'Express',
    duration: '1-2 business days',
    price: 14.99,
    freeThreshold: null,
  },
];

// US States for shipping form
export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];

// Countries for shipping
export const countries = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'MX', name: 'Mexico' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'AU', name: 'Australia' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
];
