import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { H2, Body, BodySmall } from '../../components/common';
import { partnershipPrograms } from '../../data';
import './PartnershipPage.css';

export const PartnershipPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="partnership-page">
      {/* Hero Section */}
      <section className="partnership-hero">
        <div className="partnership-hero-content">
          <h1 className="partnership-hero-title">
            Partner with <strong>4BLANC</strong>
          </h1>
          <p className="partnership-hero-desc">
            Whether you're a beauty school, salon, distributor, influencer, or entrepreneur — <strong>4BLANC</strong> offers a partnership program tailored to your goals.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="partnership-programs">
        <H2>Choose Your Program</H2>
        <div className="partnership-list">
          {partnershipPrograms.map((program) => (
            <button
              key={program.id}
              className="partnership-card"
              onClick={() => navigate(`/partnership/${program.slug}`)}
            >
              <img
                src={program.image}
                alt={program.title}
                className="partnership-card-image"
              />
              <div className="partnership-card-content">
                <Body className="partnership-card-title">{program.title}</Body>
                <BodySmall color="secondary">{program.subtitle}</BodySmall>
                <BodySmall color="tertiary" className="partnership-card-desc">
                  {program.description}
                </BodySmall>
              </div>
              <ChevronRight size={20} className="partnership-card-arrow" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
