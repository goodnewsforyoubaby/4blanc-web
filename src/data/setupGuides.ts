// Setup Guide data for Maestro and Alize products
// Content sourced from 4blanc.com setup guide pages

export interface SetupGuideSection {
  id: string;
  title: string;
  content: string | string[];
  image?: string;
  images?: string[];
  youtubeId?: string;
  tip?: string;
  warning?: string;
}

export interface SetupGuide {
  id: 'maestro' | 'alize';
  title: string;
  subtitle: string;
  bannerImage: string;
  sections: SetupGuideSection[];
}

// Maestro Setup Guide
export const maestroSetupGuide: SetupGuide = {
  id: 'maestro',
  title: 'Maéstro™',
  subtitle: 'Ultimate Protection Nail Station Setup Guide',
  bannerImage: 'https://ucarecdn.com/cd47263d-6ad0-46e7-91f0-02e0262a0f8c/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-header.jpg',
  sections: [
    {
      id: 'getting-started',
      title: '1. Getting Started',
      content: [
        'Carefully unpack your 4BLANC® product. Inspect the package for any visible damage during shipment.',
        'Ensure all components are included (see the picture).',
      ],
      tip: 'Keep the packaging until setup is complete to ensure no pieces are missing.',
      image: 'https://ucarecdn.com/580e6925-be12-4949-8b78-88080e7b3245/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-component.jpg',
      youtubeId: 'v1uEa0B4ISA',
    },
    {
      id: 'installation-guide',
      title: '2. Installation Guide',
      content: 'Assemble your dust collector by scanning the QR codes on the box to access the video tutorials. You can also find detailed installation instructions, recommendations, and helpful tips for using your dust collector below.',
      youtubeId: 'ewqkSX28xR4',
    },
    {
      id: 'filter-installation',
      title: 'It is important to install the filter correctly',
      content: 'The filter is installed correctly when the dust collector housing is securely screwed on, and the inside of the filter is visible through the upper flower-shaped hole (see image). The filter should fit snugly in its compartment to ensure a hermetic seal. You can verify the dust collector\'s functionality by testing it with a sheet of paper or directly during a procedure.',
      image: 'https://ucarecdn.com/7e74ab62-c2f0-428c-b260-5d05fd1cb604/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup.jpg',
    },
    {
      id: 'clamp-installation',
      title: 'Clamp Installation',
      content: 'A table/countertop mount is included with your dust collector. When installing it on a pedicure cabinet or cart, ensure that the surface is stable and that the cabinet weighs at least 8 kg. If mounting on a table, the recommended distance between the table edge and the work area should be at least 30 cm. Alternatively, you can purchase a reinforced floor stand from our website. This stand will provide additional stability, making the dust collector more transportable. You won\'t have to worry about the weight and dimensions of your table or cabinet.',
      images: [
        'https://ucarecdn.com/65ac93e2-8f16-4982-86f6-fb3aec99d202/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-clamp.jpg',
        'https://ucarecdn.com/968192b6-639c-4f5c-8ec1-68cf3d4c52a3/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-clamp-2.jpg',
        'https://ucarecdn.com/67d16ec1-b376-4d89-8b4e-a57daf62561a/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-clamp-4.jpg',
      ],
    },
    {
      id: 'correct-position',
      title: 'Correct position',
      content: 'To ensure that the dust collector housing does not fall off, it should be positioned along the same axis as Adjustable Arm. When installed this way, the dust collector will sit evenly and stably. To prevent deformation of the Adjustable Arm, make sure the dust collector is positioned correctly, as shown in the pictures.',
      image: 'https://ucarecdn.com/02792af9-8944-409b-b0b5-d01c557ba4b3/-/format/auto/-/preview/3000x3000/-/quality/lighter/setup-angle.jpg',
    },
    {
      id: 'safety-equipment',
      title: 'Safety Equipment',
      content: 'When the dust collector is turned on, you will hear a characteristic sound similar to the startup of an airplane jet engine. Do not be alarmed; this is a normal feature of this type of motor.',
      warning: 'Keep hair, clothing, and small objects away from the meshed openings and the motor blades.',
      image: 'https://ucarecdn.com/7e8adfdd-9282-4d4b-8748-c4da19a71378/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-safety.jpg',
    },
    {
      id: 'positioning',
      title: 'Positioning',
      content: [
        'As you work, various airborne materials are produced, including fine dust (suspended particles that can harm the respiratory system) and sawdust (larger particles that fall onto the table by their own weight). To ensure proper airflow and effective dust collection, it is essential to direct the airflow towards the dust collector.',
        'For your convenience, position the dust collector at an angle on the side opposite to your working hand (as shown in the video). The dust collector should be placed similarly in the pedicure area to ensure effective dust collection.',
        'If sawdust clings to your glove due to static electricity, simply run the palm of your hand over the suction surface to remove it.',
      ],
      image: 'https://ucarecdn.com/8769e7a6-1046-49d1-b7d3-9f778b3c81c7/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-tips.jpg',
    },
    {
      id: 'cleaning-and-care',
      title: 'Cleaning and care',
      content: [
        'To keep your dust collector operating smoothly, it\'s important to clean and replace the filter regularly. We recommend cleaning the filter 3–4 times per month (approximately every 20–30 procedures).',
        'The filter should never come into contact with water or other liquids!',
        'When cleaning the dust collector or replacing the filter, always wear protective equipment such as a mask and gloves for your safety.',
      ],
      image: 'https://ucarecdn.com/bda08b02-91b2-4ebe-abd8-595c7022762d/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-clean.jpg',
    },
    {
      id: 'filter-replacement',
      title: 'How frequently to change the filter',
      content: [
        'We recommend replacing the filter if there is a noticeable reduction in the suction power. The filter typically lasts 2 to 6 months, depending on usage and how regularly it is emptied and cleaned.',
        'For specialists, particularly those providing podiatry treatments, we advise evaluating the risks associated with cleaning the filter. As the dust may contain opportunistic pathogens, it\'s safer to replace the filter every 1-2 months instead of cleaning it.',
        'Remember: Your health is more important than saving money on replaceable filters. You can order replacement filters directly from our shop.',
      ],
      image: 'https://ucarecdn.com/35aaff4c-1c23-4843-b9de-3c92ea264249/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-3filter.jpg',
    },
    {
      id: 'useful-tips',
      title: 'Useful Tips',
      content: [
        'Proper Sitting Position: When working with a client at the manicure table, use a palm rest to elevate the client\'s hands. This helps align your posture, reducing back strain and tension.',
        'Avoid pointing your hands directly at the table or slouching. Instead, keep your body aligned and maintain a neutral, comfortable posture.',
        'Stretching Tips: To prevent stiffness, take short breaks between client sessions to stretch and do exercises that relieve tension in your back, neck, and shoulders.',
      ],
      image: 'https://ucarecdn.com/d61273cb-6075-4bb0-aff2-73801d391db3/-/format/auto/-/preview/3000x3000/-/quality/lighter/Maestro-Filter-Setup-tips.jpg',
    },
  ],
};

// Alize Setup Guide
export const alizeSetupGuide: SetupGuide = {
  id: 'alize',
  title: 'Alizé™',
  subtitle: 'Nail Dust Collector Setup Guide',
  bannerImage: 'https://ucarecdn.com/48556009-9ea0-4145-8bf0-df842f27475d/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-Filter-Setup-header.jpg',
  sections: [
    {
      id: 'getting-started',
      title: '1. Getting Started',
      content: [
        'Carefully unpack your 4BLANC® product. Inspect the package for any visible damage during shipment.',
        'Ensure all components are included (see the picture).',
      ],
      tip: 'Keep the packaging until setup is complete to ensure no pieces are missing.',
      image: 'https://ucarecdn.com/ebf5eac9-1197-4228-bc24-9fb9b107d3d0/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-component.jpg',
      youtubeId: 'TSq2Shaxajk',
    },
    {
      id: 'installation-guide',
      title: '2. Installation Guide',
      content: 'Assemble your dust collector by scanning the QR codes on the box to access the video tutorials. You can also find detailed installation instructions, recommendations, and helpful tips for using your dust collector below.',
      youtubeId: 'nRUPxpJUn0A',
    },
    {
      id: 'filter-installation',
      title: 'It is important to install the filter correctly',
      content: 'The filter is installed correctly when the dust collector housing is securely screwed on, and the inside of the filter is visible through the upper flower-shaped hole (see image). The filter should fit snugly in its compartment to ensure a hermetic seal. You can verify the dust collector\'s functionality by testing it with a sheet of paper or directly during a procedure.',
      image: 'https://ucarecdn.com/eae2477b-4d86-4a7c-9c3a-bdd635a5d1c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-setup-guide-filter.jpg',
    },
    {
      id: 'clamp-installation',
      title: 'Clamp Installation',
      content: 'A table/countertop mount is included with your dust collector. When installing it on a pedicure cabinet or cart, ensure that the surface is stable and that the cabinet weighs at least 5 kg. If mounting on a table, the recommended distance between the table edge and the work area should be at least 50 cm. Alternatively, you can purchase a reinforced floor stand from our website. This stand will provide additional stability, making the dust collector more transportable. You won\'t have to worry about the weight and dimensions of your table or cabinet.',
      images: [
        'https://ucarecdn.com/257b8b44-4464-41f6-a896-c22c8a9885ce/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-installation-guide-1.jpg',
        'https://ucarecdn.com/1eaf8c97-6359-4e3b-8ec6-dc805062e709/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-installation-guide-2.jpg',
        'https://ucarecdn.com/a0cb12d1-b6c3-4a62-b125-3fa27f3fed9e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-installation-guide-3.jpg',
      ],
    },
    {
      id: 'correct-position',
      title: 'Correct position',
      content: 'To ensure that the dust collector housing does not fall off, it should be positioned along the same axis as Adjustable Arm. When installed this way, the dust collector will sit evenly and stably. To prevent deformation of the Adjustable Arm, make sure the dust collector is positioned correctly, as shown in the pictures.',
      image: 'https://ucarecdn.com/ec848bd6-16c5-4143-b11a-b5e2f81bda49/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-installation-guide-4.jpg',
    },
    {
      id: 'safety-equipment',
      title: 'Safety Equipment',
      content: 'When the dust collector is turned on, you will hear a characteristic sound similar to the startup of an airplane jet engine. Do not be alarmed; this is a normal feature of this type of motor.',
      warning: 'Keep hair, clothing, and small objects away from the meshed openings and the motor blades.',
      image: 'https://ucarecdn.com/a575724c-387b-4d1c-ab62-de36c520120b/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-installation-guide-5.jpg',
    },
    {
      id: 'positioning',
      title: 'Positioning',
      content: [
        'As you work, various airborne materials are produced, including fine dust (suspended particles that can harm the respiratory system) and sawdust (larger particles that fall onto the table by their own weight). To ensure proper airflow and effective dust collection, it is essential to direct the airflow towards the dust collector.',
        'For your convenience, position the dust collector at an angle on the side opposite to your working hand (as shown in the video). The dust collector should be placed similarly in the pedicure area to ensure effective dust collection.',
        'If sawdust clings to your glove due to static electricity, simply run the palm of your hand over the suction surface to remove it.',
      ],
      image: 'https://ucarecdn.com/10e30934-d5e0-4a4c-a6d1-d027a0c0a92a/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-Filter-Setup-tips.jpg',
    },
    {
      id: 'cleaning-and-care',
      title: 'Cleaning and care',
      content: [
        'To keep your dust collector operating smoothly, it\'s important to clean and replace the filter regularly. We recommend cleaning the filter 3–4 times per month (approximately every 20–30 procedures).',
        'The filter should never come into contact with water or other liquids!',
        'When cleaning the dust collector or replacing the filter, always wear protective equipment such as a mask and gloves for your safety.',
      ],
      image: 'https://ucarecdn.com/43991935-eece-4c75-9a78-45aef6c4fb6d/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-4Blanc-filter-dust-640x800.jpg',
    },
    {
      id: 'filter-replacement',
      title: 'How frequently to change the filter',
      content: [
        'We recommend replacing the filter if there is a noticeable reduction in the suction power. The filter typically lasts 2 to 6 months, depending on usage and how regularly it is emptied and cleaned.',
        'For specialists, particularly those providing podiatry treatments, we advise evaluating the risks associated with cleaning the filter. As the dust may contain opportunistic pathogens, it\'s safer to replace the filter every 1-2 months instead of cleaning it.',
        'Remember: Your health is more important than saving money on replaceable filters. You can order replacement filters directly from our shop.',
      ],
      image: 'https://ucarecdn.com/dc58e449-128b-4fdb-b97b-ab6b9986d1ff/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-installation-guide-filter.jpg',
    },
    {
      id: 'useful-tips',
      title: 'Useful life hacks',
      content: [
        'Proper Sitting Position: When working with a client at the manicure table, use a palm rest to elevate the client\'s hands. This helps align your posture, reducing back strain and tension.',
        'Avoid pointing your hands directly at the table or slouching. Instead, keep your body aligned and maintain a neutral, comfortable posture.',
        'Stretching Tips: To prevent stiffness, take short breaks between client sessions to stretch and do exercises that relieve tension in your back, neck, and shoulders.',
        'Removing Material: When removing material, set the cutter speed to 25,000–30,000 (Revolutions Per Minute) RPM. This speed helps slow down the particles, allowing them to form a stream that can be directed towards the dust collector for better suction.',
      ],
      image: 'https://ucarecdn.com/d3491468-0beb-4c17-95e0-0a3c87f6a5db/-/format/auto/-/preview/3000x3000/-/quality/lighter/Alize-installation-guide-6.jpg',
    },
  ],
};

// Helper to get guide by ID
export const getSetupGuideById = (id: 'maestro' | 'alize'): SetupGuide => {
  return id === 'maestro' ? maestroSetupGuide : alizeSetupGuide;
};
