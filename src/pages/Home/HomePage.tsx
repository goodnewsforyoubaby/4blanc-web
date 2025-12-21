import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../../components/product';
import { CollectionCard } from '../../components/collection';
import { H2, Body } from '../../components/common';
import { getFeaturedProducts, mockCollections } from '../../data';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredProducts = getFeaturedProducts(8);

  return (
    <div className="home-page">
      {/* Featured Products */}
      <section className="home-section">
        <div className="home-section-header">
          <H2>Featured</H2>
          <button className="home-link" onClick={() => navigate('/shop')}>
            View all
          </button>
        </div>
        <div className="home-products-scroll hide-scrollbar">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="home-section">
        <div className="home-section-header">
          <H2>Collections</H2>
        </div>
        <div className="home-collections">
          {mockCollections.slice(0, 5).map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="home-section">
        <div className="home-quick-actions">
          <button className="home-quick-action" onClick={() => navigate('/chat')}>
            <span className="home-quick-icon">💬</span>
            <Body>Need Help?</Body>
            <span className="home-quick-desc">Chat with us</span>
          </button>
          <button className="home-quick-action" onClick={() => navigate('/knowledge')}>
            <span className="home-quick-icon">📚</span>
            <Body>Learn More</Body>
            <span className="home-quick-desc">Tips & guides</span>
          </button>
        </div>
      </section>
    </div>
  );
};
