import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Truck,
  Clock,
  Globe,
  MapPin,
  CreditCard,
} from 'lucide-react';
import { H2, H3, Body, BodySmall, Caption, Button, BottomSheet } from '../../components/common';
import { useCart } from '../../contexts/CartContext';
import {
  shippingFAQ,
  shippingMethods,
  usStates,
  countries,
  ShippingFAQItem,
} from '../../data';
import './CheckoutPage.css';

interface ShippingAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  // Form state
  const [address, setAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
  });

  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [isShippingInfoOpen, setIsShippingInfoOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [isPaymentSheetOpen, setIsPaymentSheetOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals
  const subtotal = parseFloat(cart.subtotal.amount);
  const shippingMethod = shippingMethods.find((m) => m.id === selectedShipping);
  const shippingCost =
    shippingMethod?.freeThreshold && subtotal >= shippingMethod.freeThreshold
      ? 0
      : shippingMethod?.price || 0;
  const total = subtotal + shippingCost;

  const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handlePayment = () => {
    setIsPaymentSheetOpen(true);
  };

  const processPayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/checkout/success', {
        state: { orderNumber: Math.random().toString(36).substring(2, 8).toUpperCase() },
      });
    }, 1500);
  };

  // Check if cart is empty
  if (cart.items.length === 0) {
    return (
      <div className="checkout-empty">
        <Body>Your cart is empty</Body>
        <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      {/* Shipping Address Section */}
      <section className="checkout-section">
        <H3>Shipping Address</H3>
        <div className="checkout-form">
          <div className="checkout-row">
            <div className="checkout-field">
              <label>First Name <span className="required">*</span></label>
              <input
                type="text"
                placeholder="Enter first name"
                value={address.firstName}
                onChange={(e) => handleAddressChange('firstName', e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Last Name <span className="required">*</span></label>
              <input
                type="text"
                placeholder="Enter last name"
                value={address.lastName}
                onChange={(e) => handleAddressChange('lastName', e.target.value)}
              />
            </div>
          </div>

          <div className="checkout-field">
            <label>Street Address <span className="required">*</span></label>
            <input
              type="text"
              placeholder="Enter street address"
              value={address.address1}
              onChange={(e) => handleAddressChange('address1', e.target.value)}
            />
          </div>

          <div className="checkout-field">
            <label>Apartment, Suite, etc.</label>
            <input
              type="text"
              placeholder="Optional"
              value={address.address2}
              onChange={(e) => handleAddressChange('address2', e.target.value)}
            />
          </div>

          <div className="checkout-field">
            <label>City <span className="required">*</span></label>
            <input
              type="text"
              placeholder="Enter city"
              value={address.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
            />
          </div>

          <div className="checkout-row">
            <div className="checkout-field">
              <label>State <span className="required">*</span></label>
              <select
                value={address.state}
                onChange={(e) => handleAddressChange('state', e.target.value)}
              >
                <option value="">Select state</option>
                {usStates.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="checkout-field">
              <label>ZIP Code <span className="required">*</span></label>
              <input
                type="text"
                placeholder="Enter ZIP"
                value={address.zip}
                onChange={(e) => handleAddressChange('zip', e.target.value)}
              />
            </div>
          </div>

          <div className="checkout-field">
            <label>Country <span className="required">*</span></label>
            <select
              value={address.country}
              onChange={(e) => handleAddressChange('country', e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Shipping Method Section */}
      <section className="checkout-section">
        <H3>Shipping Method</H3>
        <div className="checkout-shipping-methods">
          {shippingMethods.map((method) => {
            const isFree = method.freeThreshold && subtotal >= method.freeThreshold;
            return (
              <label
                key={method.id}
                className={`shipping-method ${selectedShipping === method.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="shipping"
                  value={method.id}
                  checked={selectedShipping === method.id}
                  onChange={() => setSelectedShipping(method.id)}
                />
                <div className="shipping-method-info">
                  <Body>{method.name}</Body>
                  <Caption color="secondary">{method.duration}</Caption>
                </div>
                <div className="shipping-method-price">
                  {isFree ? (
                    <>
                      <Body className="shipping-free">FREE</Body>
                      <Caption color="secondary" className="shipping-original">
                        ${method.price.toFixed(2)}
                      </Caption>
                    </>
                  ) : (
                    <Body>${method.price.toFixed(2)}</Body>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* Shipping Info Section (Expandable) */}
      <section className="checkout-section checkout-info-section">
        <button
          className={`checkout-info-toggle ${isShippingInfoOpen ? 'open' : ''}`}
          onClick={() => setIsShippingInfoOpen(!isShippingInfoOpen)}
        >
          <div className="checkout-info-header">
            <Truck size={20} />
            <Body>Shipping Information</Body>
          </div>
          {isShippingInfoOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isShippingInfoOpen && (
          <div className="checkout-info-content">
            {/* Key Facts */}
            <div className="checkout-info-facts">
              <div className="checkout-fact">
                <Clock size={16} />
                <BodySmall>Orders ship within 1-2 business days</BodySmall>
              </div>
              <div className="checkout-fact">
                <Globe size={16} />
                <BodySmall>We ship to most countries worldwide</BodySmall>
              </div>
              <div className="checkout-fact">
                <MapPin size={16} />
                <BodySmall>Some regions may have restrictions</BodySmall>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="checkout-faq">
              {shippingFAQ.map((item: ShippingFAQItem) => (
                <div key={item.id} className="checkout-faq-item">
                  <button
                    className="checkout-faq-question"
                    onClick={() => toggleFAQ(item.id)}
                  >
                    <BodySmall>{item.question}</BodySmall>
                    <ChevronRight
                      size={16}
                      className={`checkout-faq-chevron ${expandedFAQ === item.id ? 'expanded' : ''}`}
                    />
                  </button>
                  {expandedFAQ === item.id && (
                    <div className="checkout-faq-answer">
                      <Caption color="secondary">{item.answer}</Caption>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Policy Link */}
            <button
              className="checkout-policy-link"
              onClick={() => navigate('/knowledge/shipping-policy')}
            >
              <BodySmall>View full Shipping Policy</BodySmall>
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Order Summary */}
      <section className="checkout-section">
        <H3>Order Summary</H3>
        <div className="checkout-summary">
          <div className="checkout-summary-row">
            <Body>Subtotal ({cart.totalQuantity} items)</Body>
            <Body>${subtotal.toFixed(2)}</Body>
          </div>
          <div className="checkout-summary-row">
            <Body>Shipping</Body>
            <Body>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</Body>
          </div>
          <div className="checkout-summary-divider" />
          <div className="checkout-summary-row checkout-total">
            <Body>Total</Body>
            <H3>${total.toFixed(2)}</H3>
          </div>
        </div>
      </section>

      {/* Apple Pay Button */}
      <button className="checkout-apple-pay" onClick={handlePayment}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M17.72 8.2c-.06.05-1.17.67-1.17 2.06 0 1.61 1.41 2.18 1.45 2.2-.01.04-.23.77-.75 1.53-.46.67-.94 1.33-1.69 1.33-.74 0-.93-.43-1.79-.43-.84 0-1.14.45-1.83.45-.7 0-1.18-.62-1.73-1.38-.64-.89-1.16-2.27-1.16-3.57 0-2.1 1.36-3.21 2.7-3.21.71 0 1.31.47 1.75.47.43 0 1.1-.5 1.92-.5.31 0 1.42.03 2.15.82zm-2.54-1.5c.35-.41.59-1 .59-1.57 0-.08-.01-.16-.02-.22-.56.02-1.23.37-1.64.84-.32.36-.61.94-.61 1.54 0 .09.02.18.03.21.05.01.14.02.23.02.5 0 1.14-.34 1.52-.82z" />
        </svg>
        <span>Pay with Apple Pay</span>
      </button>

      {/* Apple Pay BottomSheet */}
      <BottomSheet
        isOpen={isPaymentSheetOpen}
        onClose={() => !isProcessing && setIsPaymentSheetOpen(false)}
        title="Confirm Payment"
      >
        <div className="payment-sheet">
          <div className="payment-sheet-amount">
            <H2>${total.toFixed(2)}</H2>
            <Caption color="secondary">4BLANC</Caption>
          </div>

          <div className="payment-sheet-card">
            <div className="payment-card-icon">
              <CreditCard size={24} />
            </div>
            <div className="payment-card-info">
              <Body>Visa •••• 4242</Body>
              <Caption color="secondary">Default Card</Caption>
            </div>
          </div>

          <Button
            fullWidth
            onClick={processPayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Confirm Payment'}
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
};
