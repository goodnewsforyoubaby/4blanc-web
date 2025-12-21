import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { ProductListItem } from '../../types';
import { useWishlist } from '../../contexts/WishlistContext';
import './ProductCard.css';

interface ProductCardProps {
  product: ProductListItem;
  compact?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  const navigate = useNavigate();
  const { isInWishlist, toggleItem } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleItem({
      id: `wish-${product.id}`,
      productId: product.id,
      title: product.title,
      handle: product.handle,
      price: product.priceRange.minVariantPrice.amount,
      currencyCode: product.priceRange.minVariantPrice.currencyCode,
      image: product.featuredImage?.url,
    });
  };

  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const comparePrice = product.compareAtPriceRange
    ? parseFloat(product.compareAtPriceRange.minVariantPrice.amount)
    : null;
  const hasDiscount = comparePrice && comparePrice > price;

  return (
    <div
      className={`product-card ${compact ? 'product-card-compact' : ''}`}
      onClick={() => navigate(`/product/${product.handle}`)}
    >
      <div className="product-card-image">
        {product.featuredImage ? (
          <img src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} />
        ) : (
          <div className="product-card-placeholder">No Image</div>
        )}
        <button
          className={`product-card-wishlist ${inWishlist ? 'active' : ''}`}
          onClick={handleWishlistClick}
        >
          <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>
        {hasDiscount && (
          <span className="product-card-sale">Sale</span>
        )}
      </div>
      <div className="product-card-info">
        <h3 className="product-card-title">{product.title}</h3>
        <div className="product-card-price">
          <span className="product-card-current-price">
            ${price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="product-card-compare-price">
              ${comparePrice?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
