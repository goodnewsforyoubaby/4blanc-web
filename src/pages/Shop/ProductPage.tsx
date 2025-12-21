import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button, H2, Body, BodySmall, Caption } from '../../components/common';
import { useCart } from '../../contexts/CartContext';
import { mockProductDetails, mockProducts } from '../../data';
import './ProductPage.css';

export const ProductPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const { addItem } = useCart();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
            <>
              <span className="product-price-compare">${comparePrice?.toFixed(2)}</span>
              <span className="product-price-discount">
                {Math.round(((comparePrice! - price) / comparePrice!) * 100)}% off
              </span>
            </>
          )}
        </div>

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
              <Minus size={18} />
            </button>
            <span className="product-quantity-value">{quantity}</span>
            <button
              className="product-quantity-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="product-actions">
          <Button
            fullWidth
            onClick={handleAddToCart}
            icon={<ShoppingBag size={20} />}
          >
            Add to Cart
          </Button>
        </div>

        {/* Description */}
        <div className="product-description">
          <BodySmall color="secondary">{displayProduct.description}</BodySmall>
        </div>
      </div>
    </div>
  );
};
