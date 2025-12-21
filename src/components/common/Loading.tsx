import React from 'react';
import './Loading.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  fullScreen = false,
  text,
}) => {
  const content = (
    <div className={`loading loading-${size}`}>
      <div className="loading-spinner" />
      {text && <span className="loading-text">{text}</span>}
    </div>
  );

  if (fullScreen) {
    return <div className="loading-overlay">{content}</div>;
  }

  return content;
};
