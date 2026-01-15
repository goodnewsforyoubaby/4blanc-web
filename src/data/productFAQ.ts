// Product-specific FAQ data extracted from 4blanc.com
import { ProductFAQItem } from '../types';

// Product FAQ data mapped by product handle
export const productFAQData: Record<string, ProductFAQItem[]> = {
  'maestro-dust-collector': [
    {
      id: 'maestro-faq-1',
      question: 'How do I install the Maestro dust collector?',
      answer: 'The Maestro comes with a table/countertop clamp mount. Ensure the surface is stable and weighs at least 8kg. Position the dust collector along the same axis as the Adjustable Arm for stability. See the Setup Guide for detailed video instructions.',
    },
    {
      id: 'maestro-faq-2',
      question: 'How often should I replace the filter?',
      answer: 'We recommend replacing the filter every 2-6 months depending on usage, or when you notice reduced suction power. For podiatry specialists, replace every 1-2 months for safety rather than cleaning.',
    },
    {
      id: 'maestro-faq-3',
      question: 'How do I clean the Maestro?',
      answer: 'Clean the filter 3-4 times per month (every 20-30 procedures). Never use water on the filter. Always wear a mask and gloves when cleaning for your safety.',
    },
    {
      id: 'maestro-faq-4',
      question: 'Can I use Maestro for pedicure?',
      answer: 'Yes! Position the dust collector similarly in the pedicure area. For specialists providing podiatry treatments, we advise replacing filters more frequently (every 1-2 months) rather than cleaning them.',
    },
    {
      id: 'maestro-faq-5',
      question: 'What are the main features of Maestro?',
      answer: 'Maestro features superior suction power, built-in LED lighting, adjustable speed, washable HEPA filters, and an adjustable arm for flexible positioning. Ideal for busy professional salons.',
    },
  ],
  'alize-dust-collector': [
    {
      id: 'alize-faq-1',
      question: 'How do I install the Alize dust collector?',
      answer: 'The Alize includes a table/countertop mount. Ensure the surface weighs at least 5kg and position the dust collector at least 50cm from the work area. See the Setup Guide for video instructions.',
    },
    {
      id: 'alize-faq-2',
      question: 'How do I clean the Alize?',
      answer: 'Clean the filter 3-4 times per month (approximately every 20-30 procedures). The filter should never contact water or other liquids. Always wear protective equipment when cleaning.',
    },
    {
      id: 'alize-faq-3',
      question: 'When should I change the filter?',
      answer: 'Replace the filter when you notice reduced suction power, typically every 2-6 months depending on usage. For podiatry treatments, replace every 1-2 months instead of cleaning.',
    },
    {
      id: 'alize-faq-4',
      question: 'What materials are the filters made of?',
      answer: 'Alize uses high-quality HEPA filtration materials designed to capture fine nail dust particles. The filter system ensures a clean and healthy workspace.',
    },
    {
      id: 'alize-faq-5',
      question: 'Where can I find my serial number?',
      answer: 'The serial number is located on the bottom of the dust collector unit. You will need this for warranty claims and customer support inquiries.',
    },
    {
      id: 'alize-faq-6',
      question: 'Can I use Alize for pedicure?',
      answer: 'Yes! Position the Alize at an angle on the side opposite to your working hand. The same positioning applies for pedicure work to ensure effective dust collection.',
    },
  ],
  'uv-led-nail-lamp': [
    {
      id: 'lamp-faq-1',
      question: 'What types of gel does this lamp cure?',
      answer: 'The SMART UV LED Nail Lamp cures all gel types including gel polish, hard gel, builder gel, and polygel in 30-60 seconds.',
    },
    {
      id: 'lamp-faq-2',
      question: 'Is the UV light safe?',
      answer: 'Yes! Our UV LED lamps use safe wavelengths specifically designed for gel curing. The exposure time is minimal and poses no risk when used as directed.',
    },
    {
      id: 'lamp-faq-3',
      question: 'How do I use the timer settings?',
      answer: 'The lamp features 4 timer settings. Press the timer button to cycle through options. The automatic sensor detects your hand and starts curing automatically.',
    },
  ],
  'shadowless-lamp': [
    {
      id: 'shadowless-faq-1',
      question: 'What makes this lamp shadowless?',
      answer: 'The Shadowless Nail Lamp uses multiple LED light sources positioned at different angles to eliminate shadows, providing even illumination across the entire nail surface.',
    },
    {
      id: 'shadowless-faq-2',
      question: 'Is the Shadowless Lamp good for photography?',
      answer: 'Yes! The even, shadow-free lighting makes it perfect for nail photography and social media content. It provides professional studio-quality lighting.',
    },
  ],
  'macro-lens': [
    {
      id: 'macro-faq-1',
      question: 'How do I attach the Macro Lens to my phone?',
      answer: 'The Macro 20X Photo Lens comes with a universal clip that attaches to any smartphone. Simply clip it over your phone camera and adjust for best focus.',
    },
    {
      id: 'macro-faq-2',
      question: 'What magnification does this lens provide?',
      answer: 'The lens provides 20X magnification, perfect for capturing intricate nail art details, cuticle work, and before/after comparison photos.',
    },
  ],
  'maestro-nail-station': [
    {
      id: 'station-faq-1',
      question: 'Where can I buy 4BLANC dust collectors and filters?',
      answer: 'You can purchase our products directly from our official website or through our partners like Amazon (US, France, Germany, Australia).',
    },
    {
      id: 'station-faq-2',
      question: 'How do I install the Maéstro Nail Station?',
      answer: 'Watch our setup video guide for step-by-step installation instructions. The table mount system requires only 10cm² at the side of your working space.',
    },
    {
      id: 'station-faq-3',
      question: 'How do I clean my dust collector?',
      answer: 'Regular cleaning involves removing the filter and wiping down surfaces. The durable filter lasts through 150+ treatments before needing replacement.',
    },
    {
      id: 'station-faq-4',
      question: 'What is the voltage of your machines?',
      answer: 'Our machines support 110-240V universal voltage for worldwide use.',
    },
    {
      id: 'station-faq-5',
      question: 'Where can I find a serial number?',
      answer: 'The serial number is located on the bottom of the device and on the original packaging.',
    },
    {
      id: 'station-faq-6',
      question: 'Can I use this machine for pedicures?',
      answer: 'Yes! With the optional rolling stand, Maéstro is perfect for both manicures and pedicures. The articulating arm provides flexible positioning for any treatment.',
    },
    {
      id: 'station-faq-7',
      question: 'What are the main features of the Maéstro Nail Station?',
      answer: 'Key features include HEPA-12 filtration, UV-C disinfection, 168 LED light ring with adjustable color temperature, 360° adjustable arm, and smart multi-level protection system.',
    },
  ],
};

// Helper function to get FAQ by product handle
export const getProductFAQ = (handle: string): ProductFAQItem[] => {
  return productFAQData[handle] || [];
};

// Helper function to check if product has FAQ
export const hasProductFAQ = (handle: string): boolean => {
  return (productFAQData[handle]?.length || 0) > 0;
};
