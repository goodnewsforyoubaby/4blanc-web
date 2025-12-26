import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ChevronRight } from 'lucide-react';
import { Body, BodySmall, Caption } from '../../components/common';
import { mockOrders } from '../../data';
import { Order, OrderStatus } from '../../types';
import './OrdersPage.css';

const getStatusLabel = (status: OrderStatus): string => {
  switch (status) {
    case 'processing':
      return 'Processing';
    case 'shipped':
      return 'Shipped';
    case 'delivered':
      return 'Delivered';
    case 'cancelled':
      return 'Cancelled';
    default:
      return status;
  }
};

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const OrdersPage: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderClick = (order: Order) => {
    navigate(`/account/orders/${order.id}`);
  };

  if (mockOrders.length === 0) {
    return (
      <div className="orders-page">
        <div className="orders-empty">
          <Package size={48} strokeWidth={1} />
          <Body color="secondary">No orders yet</Body>
          <BodySmall color="tertiary">Your order history will appear here</BodySmall>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-list">
        {mockOrders.map((order) => (
          <button
            key={order.id}
            className="order-card"
            onClick={() => handleOrderClick(order)}
          >
            {/* Product Thumbnails */}
            <div className="order-thumbnails">
              {order.items.slice(0, 2).map((item, index) => (
                <div
                  key={item.id}
                  className="order-thumbnail"
                  style={{ zIndex: 2 - index }}
                >
                  {item.image ? (
                    <img src={item.image.url} alt={item.title} />
                  ) : (
                    <div className="order-thumbnail-placeholder" />
                  )}
                </div>
              ))}
              {order.items.length > 2 && (
                <div className="order-thumbnail-more">
                  +{order.items.length - 2}
                </div>
              )}
            </div>

            {/* Order Info */}
            <div className="order-info">
              <div className="order-header">
                <Body className="order-number">{order.orderNumber}</Body>
                <span className={`order-status ${order.status}`}>
                  {getStatusLabel(order.status)}
                </span>
              </div>
              <Caption color="secondary">{formatDate(order.createdAt)}</Caption>
              <BodySmall className="order-total">
                ${parseFloat(order.total.amount).toFixed(2)}
              </BodySmall>
            </div>

            <ChevronRight size={20} className="order-arrow" />
          </button>
        ))}
      </div>
    </div>
  );
};
