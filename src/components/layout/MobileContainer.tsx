import React from 'react';
import './MobileContainer.css';

interface MobileContainerProps {
  children: React.ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  return (
    <div className="mobile-container">
      <div className="mobile-frame">
        <div className="mobile-notch" />
        <div className="mobile-content">{children}</div>
        <div className="mobile-home-indicator" />
      </div>
    </div>
  );
};
