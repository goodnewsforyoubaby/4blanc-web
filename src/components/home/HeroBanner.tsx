import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';
import './HeroBanner.css';

interface HeroBannerProps {
  image: string;
  label?: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  badge?: string;
  overlay?: boolean;
  variant?: 'default' | 'christmas' | 'dark';
  price?: string;
  compareAtPrice?: string;
  features?: string[];
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  image,
  label,
  title,
  subtitle,
  buttonText,
  buttonLink,
  badge,
  overlay = true,
  variant = 'default',
  price,
  compareAtPrice,
  features,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (buttonLink.startsWith('http')) {
      window.open(buttonLink, '_blank');
    } else {
      navigate(buttonLink);
    }
  };

  return (
    <div className={`hero-banner hero-banner--${variant}`}>
      <img src={image} alt={title} className="hero-banner__image" />
      {overlay && <div className="hero-banner__overlay" />}
      <div className="hero-banner__content">
        {(badge || label) && (
          <div className="hero-banner__meta">
            {badge && (
              <img src={badge} alt="Award Badge" className="hero-banner__badge" />
            )}
            {label && <span className="hero-banner__label">{label}</span>}
          </div>
        )}
        <h2 className="hero-banner__title">{title}</h2>
        {subtitle && <p className="hero-banner__subtitle">{subtitle}</p>}
        {(price || compareAtPrice) && (
          <div className="hero-banner__pricing">
            {price && <span className="hero-banner__price">{price}</span>}
            {compareAtPrice && (
              <span className="hero-banner__compare-price">{compareAtPrice}</span>
            )}
          </div>
        )}
        {features && features.length > 0 && (
          <div className="hero-banner__features">
            {features.map((feature, index) => (
              <span key={index} className="hero-banner__feature">
                {feature}
              </span>
            ))}
          </div>
        )}
        <Button onClick={handleClick} className="hero-banner__button">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
