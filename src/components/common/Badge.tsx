import React from 'react';
import './Badge.css';

interface BadgeProps {
  count: number;
  maxCount?: number;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  count,
  maxCount = 9,
  className = '',
}) => {
  if (count <= 0) return null;

  const displayCount = count > maxCount ? `${maxCount}+` : count;

  return (
    <span className={`badge ${className}`}>
      {displayCount}
    </span>
  );
};
