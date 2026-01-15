import React from 'react';
import ReactDOM from 'react-dom';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '../common';
import './StickyBuyFooter.css';

interface StickyBuyFooterProps {
  price: number;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export const StickyBuyFooter: React.FC<StickyBuyFooterProps> = ({
  price,
  quantity,
  onQuantityChange,
  onAddToCart,
}) => {
  const modalRoot = document.getElementById('modal-root');

  const content = (
    <div className="sticky-buy-footer">
      <div className="sticky-buy-footer-content">
        <div className="sticky-buy-footer-price">
          <span className="sticky-buy-footer-price-value">${price.toFixed(2)}</span>
        </div>

        <div className="sticky-buy-footer-quantity">
          <button
            className="sticky-buy-footer-qty-btn"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            <Minus size={18} />
          </button>
          <span className="sticky-buy-footer-qty-value">{quantity}</span>
          <button
            className="sticky-buy-footer-qty-btn"
            onClick={() => onQuantityChange(quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus size={18} />
          </button>
        </div>

        <Button
          onClick={onAddToCart}
          icon={<ShoppingBag size={18} />}
          className="sticky-buy-footer-btn"
        >
          Add
        </Button>
      </div>
    </div>
  );

  // Render in portal to ensure it's above everything
  if (modalRoot) {
    return ReactDOM.createPortal(content, modalRoot);
  }

  return content;
};
