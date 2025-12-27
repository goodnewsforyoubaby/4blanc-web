import React from 'react';
import {
  HeroBanner,
  TechHighlights,
  AskUsCTA,
} from '../../components/home';
import { H2 } from '../../components/common';
import './HomePage.css';

// Image paths
const IMAGES = {
  partnershipBanner: '/4blanc-web/images/home/partnership-banner.jpg',
  xmasBanner: '/4blanc-web/images/home/xmas-banner.jpg',
  uvLampHero: '/4blanc-web/images/home/uv-lamp-hero.jpg',
  maestroHero: '/4blanc-web/images/home/main-hero.jpg',
  awardBadge: '/4blanc-web/images/home/award-badge.png',
};

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* FULL-SCREEN BANNER STACK */}
      <section className="home-hero-stack hide-scrollbar">
        {/* 1. Partnership Banner */}
        <div className="home-hero-slide">
          <HeroBanner
            image={IMAGES.partnershipBanner}
            title="Become a 4BLANC Partner"
            subtitle="Join our global network of distributors, educators, and affiliates"
            buttonText="Explore Partnerships"
            buttonLink="/partnership"
            variant="dark"
          />
        </div>

        {/* 2. Seasonal - Christmas */}
        <div className="home-hero-slide">
          <HeroBanner
            image={IMAGES.xmasBanner}
            title="The 4BLANC® Christmas Studio Upgrade"
            subtitle="Exclusive Holiday Savings"
            buttonText="Shop Holiday Deals"
            buttonLink="/shop"
            variant="christmas"
          />
        </div>

        {/* 3. Новинки - New Arrivals */}
        <div className="home-hero-slide">
          <HeroBanner
            image={IMAGES.uvLampHero}
            label="NEW ARRIVAL"
            title="SMART UV LED NAIL LAMP"
            subtitle="Professional 48W curing with smart sensor"
            buttonText="Pre Order Now"
            buttonLink="/product/uv-led-nail-lamp"
            variant="dark"
          />
        </div>

        {/* 4. Headliner - Maéstro */}
        <div className="home-hero-slide">
          <HeroBanner
            image={IMAGES.maestroHero}
            badge={IMAGES.awardBadge}
            title="Maéstro™ Nail Station"
            subtitle="Ultimate Protection with HEPA-12 Filtration"
            buttonText="Discover Maéstro"
            buttonLink="/product/maestro-nail-dust-collector"
          />
        </div>
      </section>

      {/* NORMAL SECTIONS */}
      <div className="home-content">
        {/* 5. Learn More - Technology */}
        <section className="home-section">
          <div className="home-section-header">
            <H2>Why 4BLANC?</H2>
          </div>
          <TechHighlights />
        </section>

        {/* 6. Ask Us CTA */}
        <AskUsCTA />
      </div>
    </div>
  );
};
