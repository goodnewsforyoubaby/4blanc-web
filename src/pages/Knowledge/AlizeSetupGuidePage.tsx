import React from 'react';
import { alizeSetupGuide } from '../../data/setupGuides';
import { SetupGuideDetailPage } from './SetupGuideDetailPage';

export const AlizeSetupGuidePage: React.FC = () => {
  return <SetupGuideDetailPage guide={alizeSetupGuide} />;
};
