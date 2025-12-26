import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { H2, Body, BodySmall, Button } from '../../components/common';
import './OrderSuccessPage.css';

interface LocationState {
  orderNumber?: string;
}

export const OrderSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const orderNumber = state?.orderNumber || 'XXXXXX';

  // Redirect if accessed directly without order
  useEffect(() => {
    if (!state?.orderNumber) {
      // Allow viewing the page but with placeholder order number
    }
  }, [state]);

  return (
    <div className="order-success-page">
      <div className="order-success-icon">
        <CheckCircle size={64} strokeWidth={1.5} />
      </div>

      <div className="order-success-header">
        <H2>Order Confirmed!</H2>
        <BodySmall color="secondary">Order #4BL-{orderNumber}</BodySmall>
      </div>

      <div className="order-success-info">
        <Body>Thank you for your purchase.</Body>
        <BodySmall color="secondary">
          You will receive an email confirmation with your order details and tracking information shortly.
        </BodySmall>
      </div>

      <div className="order-success-actions">
        <Button fullWidth onClick={() => navigate('/account/orders')}>
          View Orders
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/shop')}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};
