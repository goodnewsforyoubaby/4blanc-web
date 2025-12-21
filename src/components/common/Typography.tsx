import React from 'react';
import './Typography.css';

type ColorType = 'primary' | 'secondary' | 'tertiary' | 'link' | 'inverse' | 'success' | 'error';

interface TypographyProps {
  children: React.ReactNode;
  color?: ColorType;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, color = 'primary', className = '' }) => (
  <h1 className={`typography h1 text-${color} ${className}`}>{children}</h1>
);

export const H2: React.FC<TypographyProps> = ({ children, color = 'primary', className = '' }) => (
  <h2 className={`typography h2 text-${color} ${className}`}>{children}</h2>
);

export const H3: React.FC<TypographyProps> = ({ children, color = 'primary', className = '' }) => (
  <h3 className={`typography h3 text-${color} ${className}`}>{children}</h3>
);

export const H4: React.FC<TypographyProps> = ({ children, color = 'primary', className = '' }) => (
  <h4 className={`typography h4 text-${color} ${className}`}>{children}</h4>
);

export const Body: React.FC<TypographyProps> = ({ children, color = 'primary', className = '' }) => (
  <p className={`typography body text-${color} ${className}`}>{children}</p>
);

export const BodySmall: React.FC<TypographyProps> = ({ children, color = 'secondary', className = '' }) => (
  <p className={`typography body-small text-${color} ${className}`}>{children}</p>
);

export const Caption: React.FC<TypographyProps> = ({ children, color = 'tertiary', className = '' }) => (
  <span className={`typography caption text-${color} ${className}`}>{children}</span>
);

export const Label: React.FC<TypographyProps> = ({ children, color = 'primary', className = '' }) => (
  <span className={`typography label text-${color} ${className}`}>{children}</span>
);
