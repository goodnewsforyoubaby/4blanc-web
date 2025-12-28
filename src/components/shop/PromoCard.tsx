import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PromoCardData } from '../../types';
import './PromoCard.css';

interface PromoCardProps {
  promo: PromoCardData;
}

export const PromoCard: React.FC<PromoCardProps> = ({ promo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(promo.link);
  };

  return (
    <div className="promo-card" onClick={handleClick}>
      <img
        src={promo.image}
        alt={promo.title}
        className="promo-card__image"
      />
      <div className="promo-card__overlay" />
      <div className="promo-card__content">
        {promo.badge && (
          <span className="promo-card__badge">{promo.badge}</span>
        )}
        <h3 className="promo-card__title">{promo.title}</h3>
        {promo.subtitle && (
          <p className="promo-card__subtitle">{promo.subtitle}</p>
        )}
      </div>
    </div>
  );
};
