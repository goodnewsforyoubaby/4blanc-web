import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, MessageCircle, ChevronRight, BookOpen } from 'lucide-react';
import { Button, H2, Body, BodySmall, Caption } from '../../components/common';
import { useCart } from '../../contexts/CartContext';
import { mockProductDetails, mockProducts, getProductFAQ, getProductGuideId } from '../../data';
import './ProductPage.css';

export const ProductPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const product = handle ? mockProductDetails[handle] : undefined;
  const fallbackProduct = mockProducts.find((p) => p.handle === handle);

  if (!product && !fallbackProduct) {
    return (
      <div className="product-page">
        <div className="product-empty">
          <Body>Product not found</Body>
        </div>
      </div>
    );
  }

  const displayProduct = product || {
    ...fallbackProduct!,
    description: 'Professional nail equipment by 4BLANC.',
    images: fallbackProduct?.featuredImage ? [fallbackProduct.featuredImage] : [],
    variants: [{
      id: 'default',
      title: 'Default',
      price: fallbackProduct!.priceRange.minVariantPrice,
      availableForSale: true,
      selectedOptions: [],
    }],
    options: [],
  };

  const selectedVariant = displayProduct.variants[selectedVariantIndex];

  const price = parseFloat(selectedVariant.price.amount);
  const comparePrice = selectedVariant.compareAtPrice
    ? parseFloat(selectedVariant.compareAtPrice.amount)
    : null;
  const hasDiscount = comparePrice && comparePrice > price;

  // Get product-specific data
  const guideId = handle ? getProductGuideId(handle) : null;
  const productFAQs = handle ? getProductFAQ(handle) : [];

  const handleAddToCart = () => {
    addItem({
      productId: displayProduct.id,
      variantId: selectedVariant.id,
      title: displayProduct.title,
      variantTitle: selectedVariant.title !== 'Default' ? selectedVariant.title : undefined,
      price: selectedVariant.price,
      quantity,
      image: displayProduct.images[0],
    });
  };

  const handleAskAboutProduct = () => {
    navigate('/chat', {
      state: {
        productContext: {
          title: displayProduct.title,
          price: `$${price.toFixed(2)}`,
          image: displayProduct.images[0]?.url,
        },
      },
    });
  };

  return (
    <div className="product-page">
      {/* Image Gallery */}
      <div className="product-gallery">
        <div className="product-gallery-main">
          {displayProduct.images[activeImageIndex] ? (
            <img
              src={displayProduct.images[activeImageIndex].url}
              alt={displayProduct.images[activeImageIndex].altText || displayProduct.title}
            />
          ) : (
            <div className="product-gallery-placeholder">No Image</div>
          )}
        </div>
        {displayProduct.images.length > 1 && (
          <div className="product-gallery-thumbs">
            {displayProduct.images.map((img, idx) => (
              <button
                key={idx}
                className={`product-gallery-thumb ${idx === activeImageIndex ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(idx)}
              >
                <img src={img.url} alt={img.altText || ''} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="product-info">
        <H2>{displayProduct.title}</H2>

        <div className="product-price">
          <span className="product-price-current">${price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="product-price-compare">${comparePrice?.toFixed(2)}</span>
          )}
        </div>

        {/* Purchase Section */}
        <div className="product-purchase-section">
          {/* Variants */}
          {displayProduct.options.length > 0 && (
            <div className="product-variants">
              {displayProduct.options.map((option) => (
                <div key={option.name} className="product-variant-group">
                  <Caption>{option.name}</Caption>
                  <div className="product-variant-options">
                    {option.values.map((value, idx) => (
                      <button
                        key={value}
                        className={`product-variant-option ${idx === selectedVariantIndex ? 'active' : ''}`}
                        onClick={() => setSelectedVariantIndex(idx)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quantity */}
          <div className="product-quantity">
            <Caption>Quantity</Caption>
            <div className="product-quantity-controls">
              <button
                className="product-quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus size={20} />
              </button>
              <span className="product-quantity-value">{quantity}</span>
              <button
                className="product-quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="product-actions">
            <Button
              fullWidth
              onClick={handleAddToCart}
              icon={<ShoppingBag size={20} />}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Details Zone: Description + Promo Banner */}
        <div className="product-details-zone">
          <div className="product-description">
            <BodySmall color="secondary">{displayProduct.description}</BodySmall>
          </div>

          {hasDiscount && (
            <div className="product-promo-banner">
              <img
                src={displayProduct.images[0]?.url}
                alt=""
                className="product-promo-banner-bg"
              />
              <div className="product-promo-banner-overlay" />
              <div className="product-promo-banner-content">
                <span className="product-promo-banner-label">Special Offer</span>
                <span className="product-promo-banner-savings">
                  Save ${(comparePrice! - price).toFixed(0)} ({Math.round(((comparePrice! - price) / comparePrice!) * 100)}% off)
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Resources Zone: Setup Guide + FAQ (only if has content) */}
        {(guideId || productFAQs.length > 0) && (
          <div className="product-resources-zone">
            {guideId && (
              <Link to={`/knowledge/setup-guide/${guideId}`} className="product-guide-link">
                <BookOpen size={20} />
                <span>View Setup Guide</span>
                <ChevronRight size={20} />
              </Link>
            )}

            {productFAQs.length > 0 && (
              <section className="product-faq-section">
                <Caption className="product-faq-title">Frequently Asked Questions</Caption>
                <div className="product-faq-accordion">
                  {productFAQs.map((faq) => (
                    <div key={faq.id} className="product-faq-accordion-item">
                      <button
                        className="product-faq-question"
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        <Body>{faq.question}</Body>
                        <ChevronRight
                          size={18}
                          className={`product-faq-chevron ${expandedFAQ === faq.id ? 'expanded' : ''}`}
                        />
                      </button>
                      {expandedFAQ === faq.id && (
                        <div className="product-faq-answer">
                          <BodySmall color="secondary">{faq.answer}</BodySmall>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Actions Zone: Ask about product */}
        <div className="product-actions-zone">
          <Button
            variant="secondary"
            fullWidth
            onClick={handleAskAboutProduct}
            icon={<MessageCircle size={20} />}
          >
            Ask about this product
          </Button>
        </div>
      </div>

    </div>
  );
};
