import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, X } from 'lucide-react';
import { Button, H3, Body, BodySmall, Caption } from '../../components/common';
import { useCart } from '../../contexts/CartContext';
import './CartPage.css';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeItem, clearCart } = useCart();

  const isEmpty = cart.items.length === 0;

  return (
    <div className="cart-page">
      {/* Header Actions */}
      <div className="cart-header">
        <button className="cart-close" onClick={() => navigate(-1)}>
          <X size={24} />
        </button>
        <H3>Cart ({cart.totalQuantity})</H3>
        {!isEmpty && (
          <button className="cart-clear" onClick={clearCart}>
            Clear
          </button>
        )}
      </div>

      {isEmpty ? (
        <div className="cart-empty">
          <ShoppingBag size={64} strokeWidth={1} />
          <Body>Your cart is empty</Body>
          <BodySmall color="secondary">Add items to get started</BodySmall>
          <Button onClick={() => navigate('/shop')}>Start Shopping</Button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  {item.image ? (
                    <img src={item.image.url} alt={item.title} />
                  ) : (
                    <div className="cart-item-placeholder" />
                  )}
                </div>
                <div className="cart-item-info">
                  <Body>{item.title}</Body>
                  {item.variantTitle && (
                    <Caption>{item.variantTitle}</Caption>
                  )}
                  <div className="cart-item-price">
                    ${parseFloat(item.price.amount).toFixed(2)}
                  </div>
                </div>
                <div className="cart-item-actions">
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <div className="cart-summary-row">
              <Body>Subtotal</Body>
              <Body>${parseFloat(cart.subtotal.amount).toFixed(2)}</Body>
            </div>
            <div className="cart-summary-row">
              <BodySmall color="secondary">Shipping</BodySmall>
              <BodySmall color="secondary">Calculated at checkout</BodySmall>
            </div>
            <Button fullWidth onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
