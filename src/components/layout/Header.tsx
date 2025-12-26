import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, User, ChevronLeft, ShoppingBag } from 'lucide-react';
import { Badge } from '../common';
import { useNotifications } from '../../contexts/NotificationContext';
import { useCart } from '../../contexts/CartContext';
import './Header.css';

const getTitleByPath = (pathname: string): string => {
  if (pathname === '/') return '4BLANC';
  if (pathname.startsWith('/shop')) return 'Shop';
  if (pathname.startsWith('/product')) return 'Product';
  if (pathname.startsWith('/chat')) return 'Support Chat';
  if (pathname === '/contact') return 'Contact';
  // Knowledge Base pages
  if (pathname === '/knowledge') return 'Knowledge Base';
  if (pathname === '/knowledge/faq') return 'FAQ';
  if (pathname === '/knowledge/manual') return 'User Manuals';
  if (pathname === '/knowledge/video-guide') return 'Video Guide';
  if (pathname === '/knowledge/setup-guide') return 'Setup Guide';
  if (pathname.startsWith('/knowledge/setup-guide/')) return 'Setup Guide';
  if (pathname === '/knowledge/shipping-policy') return 'Shipping Policy';
  if (pathname === '/knowledge/return-policy') return 'Return Policy';
  if (pathname === '/knowledge/privacy-policy') return 'Privacy Policy';
  if (pathname.startsWith('/partnership')) return 'Partnership';
  if (pathname.startsWith('/knowledge')) return 'Knowledge Base';
  // Account pages
  if (pathname === '/account/login') return 'Sign In';
  if (pathname === '/account/register') return 'Create Account';
  if (pathname === '/account/settings') return 'Settings';
  if (pathname === '/account/orders') return 'Order History';
  if (pathname.startsWith('/account/orders/')) return 'Order Details';
  if (pathname.startsWith('/account')) return 'Account';
  if (pathname.startsWith('/notifications')) return 'Notifications';
  if (pathname.startsWith('/cart')) return 'Cart';
  return '4BLANC';
};

const shouldShowBackButton = (pathname: string): boolean => {
  const noBackRoutes = ['/', '/shop', '/chat', '/knowledge', '/account'];
  return !noBackRoutes.includes(pathname);
};

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { unreadCount } = useNotifications();
  const { cart } = useCart();

  const title = getTitleByPath(location.pathname);
  const showBack = shouldShowBackButton(location.pathname);
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <div className="header-left">
        {showBack && (
          <button className="header-btn" onClick={() => navigate(-1)}>
            <ChevronLeft size={24} />
          </button>
        )}
        <button className="header-btn" onClick={() => navigate('/account')}>
          <User size={22} />
        </button>
      </div>

      <div className="header-center">
        <h1 className="header-title">{title}</h1>
        {isHome && <span className="header-subtitle">Professional Nail Equipment</span>}
      </div>

      <div className="header-right">
        <button className="header-btn" onClick={() => navigate('/notifications')}>
          <Bell size={22} />
          <Badge count={unreadCount} />
        </button>
        <button className="header-btn" onClick={() => navigate('/cart')}>
          <ShoppingBag size={22} />
          <Badge count={cart.totalQuantity} />
        </button>
      </div>
    </header>
  );
};
