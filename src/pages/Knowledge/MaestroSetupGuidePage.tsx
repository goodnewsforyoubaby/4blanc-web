import React from 'react';
import { maestroSetupGuide } from '../../data/setupGuides';
import { SetupGuideDetailPage } from './SetupGuideDetailPage';

export const MaestroSetupGuidePage: React.FC = () => {
  return <SetupGuideDetailPage guide={maestroSetupGuide} />;
};
