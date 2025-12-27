// Map product handles to their setup guide IDs

export type GuideId = 'maestro' | 'alize';

// Products that have setup guides
export const productGuideMapping: Record<string, GuideId> = {
  'maestro-dust-collector': 'maestro',
  'alize-dust-collector': 'alize',
  // Filters can also link to parent product guides
  'maestro-filter': 'maestro',
  'alize-filter': 'alize',
};

// Helper to get guide ID for a product
export const getProductGuideId = (handle: string): GuideId | null => {
  return productGuideMapping[handle] || null;
};

// Helper to check if product has a setup guide
export const hasProductGuide = (handle: string): boolean => {
  return handle in productGuideMapping;
};

// Get guide route path for a product
export const getProductGuideRoute = (handle: string): string | null => {
  const guideId = getProductGuideId(handle);
  return guideId ? `/knowledge/setup-guide/${guideId}` : null;
};
