// Maéstro™ Nail Station - Full content data

export interface MaestroFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MaestroSpec {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface MaestroFAQ {
  id: string;
  question: string;
  answer: string;
}

// Key Features (5 cards)
export const maestroFeatures: MaestroFeature[] = [
  {
    id: 'feat-1',
    title: 'Professional-Grade UV Sanitization',
    description: 'Cutting-edge UV disinfection technology, meeting medical-grade standards. Provides a secure environment by eliminating bacteria, fungus, and viruses inside the machine, prioritizing the health and safety of nail masters.',
    icon: 'Sun',
  },
  {
    id: 'feat-2',
    title: 'Seamless Adjustability for Your Comfort',
    description: 'Fluid adjustable head positioning system for a 360° adjustment, providing a convenient and comfortable experience during use and maintenance.',
    icon: 'RotateCcw',
  },
  {
    id: 'feat-3',
    title: 'Intuitive Controls for Ease',
    description: 'Streamlined control with just 4 buttons and visual indicators for effortless management of all functions, enhancing your convenience during work.',
    icon: 'Sliders',
  },
  {
    id: 'feat-4',
    title: 'Eye-Friendly Lighting for Comfort',
    description: '168 adjustable LEDs offering a comfortable and customizable lighting experience. Prioritizing your eye health, so you can focus on your craft with ease.',
    icon: 'Lightbulb',
  },
  {
    id: 'feat-5',
    title: 'Reliable and Cost-Efficient',
    description: 'Maéstro™ captures the finest dust particles with low noise and power use. The durable filter lasts through 150+ treatments, ensuring consistent protection and performance.',
    icon: 'BadgeCheck',
  },
];

// Technical Specifications (9 specs) - shortened for iOS-style list
export const maestroSpecs: MaestroSpec[] = [
  {
    id: 'spec-1',
    label: 'Engine',
    value: '170W · 3 modes · 4100 RPM',
    icon: 'Settings',
  },
  {
    id: 'spec-2',
    label: 'Airflow',
    value: 'HEPA-H12 · 128×188mm',
    icon: 'Wind',
  },
  {
    id: 'spec-3',
    label: 'Filter',
    value: 'Cyclonic · 74 dB noise',
    icon: 'Circle',
  },
  {
    id: 'spec-4',
    label: 'Lights',
    value: '168 LEDs · 3 temps · 2250lm',
    icon: 'Lightbulb',
  },
  {
    id: 'spec-5',
    label: 'Disinfection',
    value: 'UV-C integrated',
    icon: 'Sun',
  },
  {
    id: 'spec-6',
    label: 'Protection',
    value: 'Multi-level smart system',
    icon: 'Shield',
  },
  {
    id: 'spec-7',
    label: 'Mount',
    value: 'Table or rolling stand',
    icon: 'ArrowUp',
  },
  {
    id: 'spec-8',
    label: 'Weight',
    value: '8.8kg (21.5kg with stand)',
    icon: 'Package',
  },
  {
    id: 'spec-9',
    label: 'Packaging',
    value: '100% recycled · 52×46×29cm',
    icon: 'Box',
  },
];

// FAQ (7 questions)
export const maestroFAQ: MaestroFAQ[] = [
  {
    id: 'faq-1',
    question: 'Where can I buy 4BLANC dust collectors and filters?',
    answer: 'You can purchase our products directly from our official website or through our partners like Amazon (US, France, Germany, Australia).',
  },
  {
    id: 'faq-2',
    question: 'How do I install the Maéstro Nail Station?',
    answer: 'Watch our setup video guide for step-by-step installation instructions. The table mount system requires only 10cm² at the side of your working space.',
  },
  {
    id: 'faq-3',
    question: 'How do I clean my dust collector?',
    answer: 'Regular cleaning involves removing the filter and wiping down surfaces. The durable filter lasts through 150+ treatments before needing replacement.',
  },
  {
    id: 'faq-4',
    question: 'What is the voltage of your machines?',
    answer: 'Our machines support 110-240V universal voltage for worldwide use.',
  },
  {
    id: 'faq-5',
    question: 'Where can I find a serial number?',
    answer: 'The serial number is located on the bottom of the device and on the original packaging.',
  },
  {
    id: 'faq-6',
    question: 'Can I use this machine for pedicures?',
    answer: 'Yes! With the optional rolling stand, Maéstro is perfect for both manicures and pedicures. The articulating arm provides flexible positioning for any treatment.',
  },
  {
    id: 'faq-7',
    question: 'What are the main features of the Maéstro Nail Station?',
    answer: 'Key features include HEPA-12 filtration, UV-C disinfection, 168 LED light ring with adjustable color temperature, 360° adjustable arm, and smart multi-level protection system.',
  },
];

// Product description
export const maestroDescription = {
  purpose: 'Pedicures, manicures, and podiatry consultations, dental procedures and prosthetics',
  shortDescription: 'Maéstro™ is an innovative, all-in-one nail salon solution emphasizing health protection and workplace wellness.',
  fullDescription: 'It offers high efficiency with low energy use, integrating multiple functions and adjustability. Features include a powerful vacuum for capturing nail, gel, and skin particles with exceptional suction power and low noise, HEPA-12 air filtration system for withholding finest dust and odor, UV disinfection, adjustable circled light for convenient illumination, a smart protection system for amateur users, and flexible mounting for diverse treatments. Maéstro™ ensures a safer, more versatile environment for nail technicians and clients alike, enhancing both service quality and safety.',
};
