import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../../components/product';
import { HeroBanner, ProductCarousel, FilterSection } from '../../components/home';
import { H2 } from '../../components/common';
import { getFeaturedProducts } from '../../data';
import './HomePage.css';

// Image paths
const IMAGES = {
  xmasBanner: '/4blanc-web/images/home/xmas-banner.jpg',
  uvLampHero: '/4blanc-web/images/home/uv-lamp-hero.jpg',
  mainHero: '/4blanc-web/images/home/main-hero.jpg',
  awardBadge: '/4blanc-web/images/home/award-badge.png',
  maestroDetails: '/4blanc-web/images/home/maestro-details.jpg',
  alizeSuction: '/4blanc-web/images/home/alize-suction.jpg',
  filterIntro: '/4blanc-web/images/home/filter-intro.jpg',
};

// Product carousel slides data
const carouselSlides = [
  {
    id: 'maestro',
    title: 'Maéstro™',
    subtitle: 'Ultimate Protection Nail Station',
    description:
      'The Maéstro™ is engineered for professionals who demand the highest standards of cleanliness and performance. Its advanced cyclone system cleans up to 540 m³ of air per hour.',
    features: [
      { title: 'HEPA-12 Filter', description: 'Captures 99.8% of volatile dust' },
      { title: 'Cyclone Technology', description: 'Directs the airflow' },
      { title: 'UV Sanitization', description: 'Eliminating bacteria, fungus, and viruses' },
      { title: 'Motor', description: 'Creates a vortex to ensure effective cleaning' },
    ],
    buttonText: 'Learn More',
    buttonLink: '/product/maestro-nail-dust-collector',
    image: IMAGES.maestroDetails,
  },
  {
    id: 'alize',
    title: 'Alizé™',
    subtitle: 'Powerful suction, The cleanest air',
    description:
      'The Alizé™ cyclone system features a modified axial engine with diagonal blades, designed to clean up to 540 m³ of dust-laden air per hour. Lightweight and powerful.',
    features: [
      { title: 'HEPA-11 Filter', description: 'Captures 99.7% of volatile dust' },
      { title: 'Cyclone Technology', description: 'Directs the airflow' },
      { title: 'Motor', description: 'Creates a vortex to ensure effective cleaning' },
    ],
    buttonText: 'Learn More',
    buttonLink: '/product/alize-nail-dust-collector',
    image: IMAGES.alizeSuction,
  },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredProducts = getFeaturedProducts(6);

  return (
    <div className="home-page">
      {/* Christmas Promotion Banner */}
      <HeroBanner
        image={IMAGES.xmasBanner}
        title="The 4BLANC® Christmas Studio Upgrade"
        buttonText="Discover Your Exclusive Holiday Savings"
        buttonLink="/shop"
        variant="christmas"
      />

      {/* UV Nail Lamp Banner */}
      <HeroBanner
        image={IMAGES.uvLampHero}
        label="NEW ARRIVAL"
        title="SMART UV LED NAIL LAMP"
        buttonText="Pre Order Now"
        buttonLink="/shop"
        variant="dark"
      />

      {/* Main Hero Banner */}
      <HeroBanner
        image={IMAGES.mainHero}
        badge={IMAGES.awardBadge}
        title="Revolutionizing Nail Care"
        subtitle="The Perfect Balance of Protection, Efficiency, and Comfort"
        buttonText="Shop Now"
        buttonLink="/shop"
      />

      {/* Product Carousel */}
      <ProductCarousel slides={carouselSlides} />

      {/* Filter Section */}
      <FilterSection
        image={IMAGES.filterIntro}
        heading="Medical-grade filters HEPA-11 & HEPA-12"
        description="Capture up to 99.8% of particles as small as 0.3 µm, including the finest nail and gel dust, dead skin cells, and fungi, ensuring the air you breathe is pure and healthy."
      />

      {/* Featured Products Grid */}
      <section className="home-section">
        <div className="home-section-header">
          <H2>Our Products</H2>
          <button className="home-link" onClick={() => navigate('/shop')}>
            View all
          </button>
        </div>
        <div className="home-products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </section>
    </div>
  );
};
