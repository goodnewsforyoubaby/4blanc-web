import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Button, Body, BodySmall, Caption } from '../../components/common';
import { useWishlist } from '../../contexts/WishlistContext';
import { useCart } from '../../contexts/CartContext';
import './WishlistPage.css';

export const WishlistPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  const isEmpty = items.length === 0;

  const handleAddToCart = (item: typeof items[0]) => {
    addItem({
      productId: item.productId,
      variantId: 'default',
      title: item.title,
      price: { amount: item.price, currencyCode: item.currencyCode },
      quantity: 1,
      image: item.image ? { url: item.image } : undefined,
    });
  };

  return (
    <div className="wishlist-page">
      {/* Header */}
      <div className="wishlist-header">
        <Caption color="secondary">{items.length} items</Caption>
        {!isEmpty && (
          <button className="wishlist-clear" onClick={clearWishlist}>
            Clear All
          </button>
        )}
      </div>

      {isEmpty ? (
        <div className="wishlist-empty">
          <Heart size={64} strokeWidth={1} />
          <Body>Your wishlist is empty</Body>
          <BodySmall color="secondary">
            Save items you love to see them here
          </BodySmall>
          <Button onClick={() => navigate('/shop')}>Browse Products</Button>
        </div>
      ) : (
        <div className="wishlist-items">
          {items.map((item) => (
            <div key={item.id} className="wishlist-item">
              <div
                className="wishlist-item-image"
                onClick={() => navigate(`/product/${item.handle}`)}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <div className="wishlist-item-placeholder" />
                )}
              </div>
              <div className="wishlist-item-info">
                <Body>{item.title}</Body>
                <BodySmall color="secondary">
                  ${parseFloat(item.price).toFixed(2)}
                </BodySmall>
                <Button
                  size="small"
                  icon={<ShoppingBag size={16} />}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </div>
              <button
                className="wishlist-item-remove"
                onClick={() => removeItem(item.productId)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
