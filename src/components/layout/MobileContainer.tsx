import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import './MobileContainer.css';

interface MobileContainerProps {
  children: React.ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  return (
    <>
      <ThemeSwitcher />
      <div className="mobile-container">
        <div className="mobile-frame">
          <div className="mobile-notch" />
          <div className="mobile-content">{children}</div>
          <div className="mobile-home-indicator" />
        </div>
      </div>
    </>
  );
};
