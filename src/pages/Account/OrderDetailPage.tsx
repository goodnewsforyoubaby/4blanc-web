import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { Button, H3, Body, BodySmall, Caption } from '../../components/common';
import { getOrderById } from '../../data';
import { OrderStatus } from '../../types';
import './OrderDetailPage.css';

const STATUS_STEPS = ['processing', 'shipped', 'delivered'] as const;

const getStatusIndex = (status: OrderStatus): number => {
  if (status === 'cancelled') return -1;
  return STATUS_STEPS.indexOf(status as typeof STATUS_STEPS[number]);
};

const getStatusIcon = (status: string) => {
  const size = 20;
  switch (status) {
    case 'processing':
      return <Clock size={size} />;
    case 'shipped':
      return <Truck size={size} />;
    case 'delivered':
      return <CheckCircle size={size} />;
    default:
      return <Package size={size} />;
  }
};

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const formatShortDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const order = id ? getOrderById(id) : undefined;

  if (!order) {
    return (
      <div className="order-detail-page">
        <div className="order-detail-empty">
          <Package size={48} strokeWidth={1} />
          <Body color="secondary">Order not found</Body>
          <Button variant="secondary" onClick={() => navigate('/account/orders')}>
            Back to Orders
          </Button>
        </div>
      </div>
    );
  }

  const currentStatusIndex = getStatusIndex(order.status);
  const isCancelled = order.status === 'cancelled';

  const handleTrackingClick = () => {
    if (order.trackingNumber) {
      window.open(`https://www.ups.com/track?tracknum=${order.trackingNumber}`, '_blank');
    }
  };

  return (
    <div className="order-detail-page">
      {/* Order Header */}
      <div className="order-detail-header">
        <H3>{order.orderNumber}</H3>
        <Caption color="secondary">Placed on {formatDate(order.createdAt)}</Caption>
      </div>

      {/* Status Timeline */}
      <div className="order-detail-section">
        <Caption className="section-title">Order Status</Caption>
        {isCancelled ? (
          <div className="order-status-cancelled">
            <div className="status-icon cancelled">
              <XCircle size={24} />
            </div>
            <div className="status-info">
              <Body>Order Cancelled</Body>
              <BodySmall color="secondary">
                This order has been cancelled
              </BodySmall>
            </div>
          </div>
        ) : (
          <div className="order-timeline">
            {STATUS_STEPS.map((step, index) => {
              const isCompleted = index <= currentStatusIndex;
              const isCurrent = index === currentStatusIndex;
              return (
                <div
                  key={step}
                  className={`timeline-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                >
                  <div className="timeline-icon">
                    {getStatusIcon(step)}
                  </div>
                  <div className="timeline-content">
                    <BodySmall className={isCompleted ? '' : 'muted'}>
                      {step.charAt(0).toUpperCase() + step.slice(1)}
                    </BodySmall>
                  </div>
                  {index < STATUS_STEPS.length - 1 && (
                    <div className={`timeline-line ${isCompleted ? 'completed' : ''}`} />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tracking Info */}
        {order.trackingNumber && order.status === 'shipped' && (
          <div className="order-tracking">
            <BodySmall color="secondary">Tracking Number</BodySmall>
            <button className="tracking-link" onClick={handleTrackingClick}>
              <Body>{order.trackingNumber}</Body>
              <ExternalLink size={16} />
            </button>
            {order.estimatedDelivery && (
              <Caption color="secondary">
                Est. delivery: {formatShortDate(order.estimatedDelivery)}
              </Caption>
            )}
          </div>
        )}
      </div>

      {/* Order Items */}
      <div className="order-detail-section">
        <Caption className="section-title">
          Items ({order.items.reduce((sum, item) => sum + item.quantity, 0)})
        </Caption>
        <div className="order-items">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="order-item"
              onClick={() => navigate(`/product/${item.productHandle}`)}
            >
              <div className="order-item-image">
                {item.image ? (
                  <img src={item.image.url} alt={item.title} />
                ) : (
                  <div className="order-item-placeholder" />
                )}
              </div>
              <div className="order-item-info">
                <Body className="order-item-title">{item.title}</Body>
                {item.variantTitle && (
                  <Caption color="secondary">{item.variantTitle}</Caption>
                )}
                <BodySmall color="secondary">Qty: {item.quantity}</BodySmall>
              </div>
              <div className="order-item-price">
                <Body>${parseFloat(item.price.amount).toFixed(2)}</Body>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Address */}
      <div className="order-detail-section">
        <Caption className="section-title">Shipping Address</Caption>
        <div className="order-address">
          <MapPin size={18} className="address-icon" />
          <div className="address-content">
            <Body>
              {order.shippingAddress.firstName} {order.shippingAddress.lastName}
            </Body>
            <BodySmall color="secondary">
              {order.shippingAddress.address1}
              {order.shippingAddress.address2 && <>, {order.shippingAddress.address2}</>}
            </BodySmall>
            <BodySmall color="secondary">
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
            </BodySmall>
            <BodySmall color="secondary">{order.shippingAddress.country}</BodySmall>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="order-detail-section order-summary">
        <Caption className="section-title">Order Summary</Caption>
        <div className="summary-row">
          <BodySmall color="secondary">Subtotal</BodySmall>
          <BodySmall>${parseFloat(order.subtotal.amount).toFixed(2)}</BodySmall>
        </div>
        <div className="summary-row">
          <BodySmall color="secondary">Shipping</BodySmall>
          <BodySmall>
            {parseFloat(order.shippingCost.amount) === 0
              ? 'Free'
              : `$${parseFloat(order.shippingCost.amount).toFixed(2)}`}
          </BodySmall>
        </div>
        <div className="summary-row total">
          <Body>Total</Body>
          <Body className="total-amount">${parseFloat(order.total.amount).toFixed(2)}</Body>
        </div>
      </div>

      {/* Help Section */}
      <div className="order-detail-actions">
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/chat', { state: { orderContext: order.orderNumber } })}
        >
          Need Help with This Order?
        </Button>
      </div>
    </div>
  );
};
