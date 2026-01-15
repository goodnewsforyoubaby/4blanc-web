import React from 'react';
import {
  HeroBanner,
  PromoSlider,
  TechHighlights,
  AskUsCTA,
} from '../../components/home';
import { H2 } from '../../components/common';
import { productBanners, promoSlides } from '../../data/homeBanners';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* SECTION 1: Product Advertisement Banners */}
      <section className="home-hero-stack hide-scrollbar">
        {productBanners.map((banner) => (
          <div key={banner.id} className="home-hero-slide">
            <HeroBanner
              image={banner.image}
              label={banner.label}
              title={banner.title}
              subtitle={banner.subtitle}
              price={banner.price}
              compareAtPrice={banner.compareAtPrice}
              features={banner.features}
              buttonText={banner.buttonText}
              buttonLink={banner.buttonLink}
              variant={banner.variant}
            />
          </div>
        ))}
      </section>

      {/* SECTION 2: Promotional Slider */}
      <section className="home-promo-section">
        <div className="home-section-header">
          <H2>Promotions</H2>
        </div>
        <PromoSlider slides={promoSlides} />
      </section>

      {/* SECTION 3: Why 4BLANC? */}
      <div className="home-content">
        <section className="home-section">
          <div className="home-section-header">
            <H2>Why 4BLANC?</H2>
          </div>
          <TechHighlights />
        </section>

        <AskUsCTA />
      </div>
    </div>
  );
};
