import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  MessageCircle,
  Award,
  Sun,
  RotateCcw,
  Sliders,
  Lightbulb,
  BadgeCheck,
  Settings,
  Wind,
  Circle,
  Shield,
  ArrowUp,
  Package,
  Box,
  FileText,
  Book,
} from 'lucide-react';
import { H2, H3, Body, BodySmall, Caption, Button } from '../../components/common';
import { ImageSwiper, StickyBuyFooter } from '../../components/product';
import { useCart } from '../../contexts/CartContext';
import { mockProductDetails } from '../../data';
import {
  maestroFeatures,
  maestroSpecs,
  maestroFAQ,
  maestroDescription,
} from '../../data/maestroContent';
import './MaestroProductPage.css';

// Icon mapping for features
const featureIcons: Record<string, React.ReactNode> = {
  Sun: <Sun size={24} />,
  RotateCcw: <RotateCcw size={24} />,
  Sliders: <Sliders size={24} />,
  Lightbulb: <Lightbulb size={24} />,
  BadgeCheck: <BadgeCheck size={24} />,
};

// Icon mapping for specs
const specIcons: Record<string, React.ReactNode> = {
  Settings: <Settings size={20} />,
  Wind: <Wind size={20} />,
  Circle: <Circle size={20} />,
  Lightbulb: <Lightbulb size={20} />,
  Sun: <Sun size={20} />,
  Shield: <Shield size={20} />,
  ArrowUp: <ArrowUp size={20} />,
  Package: <Package size={20} />,
  Box: <Box size={20} />,
};

export const MaestroProductPage: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const product = mockProductDetails['maestro-nail-station'];

  if (!product) {
    return (
      <div className="maestro-page">
        <div className="maestro-empty">
          <Body>Product not found</Body>
        </div>
      </div>
    );
  }

  const price = parseFloat(product.variants[0].price.amount);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variantId: product.variants[0].id,
      title: product.title,
      price: product.variants[0].price,
      quantity,
      image: product.images[0],
    });
  };

  const handleAskAboutProduct = () => {
    navigate('/chat', {
      state: {
        productContext: {
          title: product.title,
          price: `$${price.toFixed(2)}`,
          image: product.images[0]?.url,
        },
      },
    });
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="maestro-page">
      {/* Image Gallery with Swipe */}
      <ImageSwiper images={product.images} title={product.title} />

      {/* Hero Section */}
      <div className="maestro-hero">
        <div className="maestro-hero-badge">
          <Award size={16} />
          <span>2025 Beauty Innovation Award</span>
        </div>
        <H2>Maéstro™</H2>
        <BodySmall color="secondary" className="maestro-hero-subtitle">
          Ultimate Protection Nail Station
        </BodySmall>
        <div className="maestro-hero-price">${price.toFixed(2)}</div>
      </div>

      {/* Description */}
      <div className="maestro-description">
        <Caption className="maestro-description-purpose">
          Purpose: {maestroDescription.purpose}
        </Caption>
        <BodySmall color="secondary">
          {maestroDescription.shortDescription} {maestroDescription.fullDescription}
        </BodySmall>
      </div>

      {/* Video Guide Section */}
      <div className="maestro-video">
        <H3 className="maestro-video-title">Setup Guide</H3>
        <div className="maestro-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/GQrOuE8OQec"
            title="Maéstro Setup Guide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="maestro-video-frame"
          />
        </div>
        <BodySmall color="secondary" className="maestro-video-caption">
          Watch how to set up your Maéstro Nail Station
        </BodySmall>
      </div>

      {/* Key Features - Dark Section */}
      <div className="maestro-features">
        <H3 className="maestro-features-title">Key Features</H3>
        <div className="maestro-features-list">
          {maestroFeatures.map((feature) => (
            <div key={feature.id} className="maestro-feature-card">
              <div className="maestro-feature-icon">
                {featureIcons[feature.icon] || <BadgeCheck size={24} />}
              </div>
              <div className="maestro-feature-content">
                <Body className="maestro-feature-title">{feature.title}</Body>
                <BodySmall className="maestro-feature-desc">{feature.description}</BodySmall>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications - iOS-style list */}
      <div className="maestro-specs">
        <H3 className="maestro-specs-title">Technical Specifications</H3>
        <div className="maestro-specs-list">
          {maestroSpecs.map((spec) => (
            <div key={spec.id} className="maestro-spec-row">
              <div className="maestro-spec-icon">
                {specIcons[spec.icon] || <Circle size={18} />}
              </div>
              <div className="maestro-spec-content">
                <div className="maestro-spec-label">{spec.label}</div>
                <div className="maestro-spec-value">{spec.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="maestro-faq">
        <H3 className="maestro-faq-title">Frequently Asked Questions</H3>
        <div className="maestro-faq-list">
          {maestroFAQ.map((faq) => (
            <div key={faq.id} className="maestro-faq-item">
              <button
                className="maestro-faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                <Body>{faq.question}</Body>
                <ChevronRight
                  size={18}
                  className={`maestro-faq-chevron ${expandedFAQ === faq.id ? 'expanded' : ''}`}
                />
              </button>
              {expandedFAQ === faq.id && (
                <div className="maestro-faq-answer">
                  <BodySmall color="secondary">{faq.answer}</BodySmall>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="maestro-resources">
        <H3 className="maestro-resources-title">Resources</H3>
        <div className="maestro-resources-list">
          <button
            className="maestro-resource-item"
            onClick={() => navigate('/knowledge/setup-guide')}
          >
            <FileText size={20} />
            <span>Assembly Instructions</span>
            <ChevronRight size={18} />
          </button>
          <button
            className="maestro-resource-item"
            onClick={() => navigate('/knowledge/manual')}
          >
            <Book size={20} />
            <span>User Manual</span>
            <ChevronRight size={18} />
          </button>
          <button
            className="maestro-resource-item"
            onClick={() => navigate('/knowledge/warranty-policy')}
          >
            <Shield size={20} />
            <span>Warranty Information</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Ask About Product */}
      <div className="maestro-actions">
        <Button
          variant="secondary"
          fullWidth
          onClick={handleAskAboutProduct}
          icon={<MessageCircle size={20} />}
        >
          Ask about this product
        </Button>
      </div>

      {/* Spacing for sticky footer */}
      <div className="maestro-footer-spacer" />

      {/* Sticky Buy Footer */}
      <StickyBuyFooter
        price={price}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};
