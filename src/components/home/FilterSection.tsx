import React from 'react';
import './FilterSection.css';

interface FilterSectionProps {
  image: string;
  heading: string;
  description: string;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  image,
  heading,
  description,
}) => {
  return (
    <div className="filter-section">
      <img src={image} alt={heading} className="filter-section__image" />
      <div className="filter-section__overlay" />
      <div className="filter-section__content">
        <h2 className="filter-section__heading">{heading}</h2>
        <p className="filter-section__description">{description}</p>
      </div>
    </div>
  );
};
