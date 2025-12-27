import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Truck, GraduationCap, Users, ShoppingCart, Home } from 'lucide-react';
import { PartnershipProgram } from '../../types';
import './PartnershipCarousel.css';

interface PartnershipCarouselProps {
  programs: PartnershipProgram[];
}

// Map partnership IDs to icons
const getPartnershipIcon = (id: string) => {
  switch (id) {
    case 'dealer':
      return <Truck size={24} />;
    case 'educational':
      return <GraduationCap size={24} />;
    case 'affiliate':
      return <Users size={24} />;
    case 'dropshipping':
      return <ShoppingCart size={24} />;
    case 'salon':
      return <Home size={24} />;
    default:
      return <Users size={24} />;
  }
};

export const PartnershipCarousel: React.FC<PartnershipCarouselProps> = ({ programs }) => {
  const navigate = useNavigate();

  return (
    <div className="partnership-carousel hide-scrollbar">
      {programs.map((program) => (
        <button
          key={program.id}
          className="partnership-carousel-card"
          onClick={() => navigate(`/partnership/${program.slug}`)}
        >
          <div className="partnership-carousel-icon">
            {getPartnershipIcon(program.id)}
          </div>
          <div className="partnership-carousel-content">
            <div className="partnership-carousel-title">{program.title}</div>
            <div className="partnership-carousel-subtitle">{program.subtitle}</div>
          </div>
          <ChevronRight size={16} className="partnership-carousel-chevron" />
        </button>
      ))}
    </div>
  );
};
