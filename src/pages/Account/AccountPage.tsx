import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Settings,
  Package,
  HelpCircle,
  MessageCircle,
  Handshake,
  LogOut,
  ChevronRight,
  Truck,
  RotateCcw,
  Shield,
} from 'lucide-react';
import { Button, H3, Body, BodySmall, Caption } from '../../components/common';
import { useAuth } from '../../contexts/AuthContext';
import './AccountPage.css';

// Menu group type
interface MenuGroup {
  title: string;
  items: MenuItemData[];
}

interface MenuItemData {
  icon: React.ReactNode;
  label: string;
  path?: string;
  onClick?: () => void;
  danger?: boolean;
}

// Menu groups for guest mode
const guestMenuGroups: MenuGroup[] = [
  {
    title: 'HELP',
    items: [
      { icon: <HelpCircle size={22} />, label: 'FAQ', path: '/knowledge/faq' },
      { icon: <MessageCircle size={22} />, label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'LEGAL',
    items: [
      { icon: <Truck size={22} />, label: 'Shipping Policy', path: '/knowledge/shipping-policy' },
      { icon: <RotateCcw size={22} />, label: 'Return Policy', path: '/knowledge/return-policy' },
      { icon: <Shield size={22} />, label: 'Privacy Policy', path: '/knowledge/privacy-policy' },
    ],
  },
];

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      logout();
    }
  };

  const handleItemClick = (item: MenuItemData) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.path) {
      navigate(item.path);
    }
  };

  // Menu groups for authenticated mode
  const authMenuGroups: MenuGroup[] = [
    {
      title: 'MY ORDERS',
      items: [
        { icon: <Package size={22} />, label: 'Order History', onClick: () => alert('Order history coming soon!') },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        { icon: <Settings size={22} />, label: 'Account Settings', path: '/account/settings' },
      ],
    },
    ...guestMenuGroups,
  ];

  if (!isAuthenticated) {
    return (
      <div className="account-page">
        <div className="account-guest">
          <div className="account-guest-icon">
            <User size={48} strokeWidth={1} />
          </div>
          <H3>Welcome to 4BLANC</H3>
          <BodySmall color="secondary">
            Sign in to access your orders and more
          </BodySmall>
          <Button fullWidth onClick={() => navigate('/account/login')}>
            Sign In
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => navigate('/account/register')}
          >
            Create Account
          </Button>
        </div>

        <PartnershipBanner onClick={() => navigate('/partnership')} />

        {guestMenuGroups.map((group) => (
          <MenuSection
            key={group.title}
            group={group}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="account-page">
      {/* Profile */}
      <div className="account-profile">
        <div className="account-avatar">
          {user?.firstName?.charAt(0) || 'U'}
        </div>
        <div className="account-info">
          <Body>
            {user?.firstName} {user?.lastName}
          </Body>
          <BodySmall color="secondary">{user?.email}</BodySmall>
        </div>
      </div>

      <PartnershipBanner onClick={() => navigate('/partnership')} />

      {/* Menu Groups */}
      {authMenuGroups.map((group) => (
        <MenuSection
          key={group.title}
          group={group}
          onItemClick={handleItemClick}
        />
      ))}

      {/* Sign Out - Separate from groups */}
      <div className="account-signout">
        <button
          className="account-menu-item danger"
          onClick={handleLogout}
        >
          <span className="account-menu-icon">
            <LogOut size={22} />
          </span>
          <span className="account-menu-label">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

// Partnership Banner Component
interface PartnershipBannerProps {
  onClick: () => void;
}

const PartnershipBanner: React.FC<PartnershipBannerProps> = ({ onClick }) => (
  <button className="partnership-banner" onClick={onClick}>
    <span className="partnership-banner-icon">
      <Handshake size={20} />
    </span>
    <div className="partnership-banner-content">
      <p className="partnership-banner-title">Become a Partner</p>
      <p className="partnership-banner-subtitle">Grow your business with 4BLANC</p>
    </div>
    <ChevronRight size={20} className="partnership-banner-arrow" />
  </button>
);

// Menu Section Component
interface MenuSectionProps {
  group: MenuGroup;
  onItemClick: (item: MenuItemData) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ group, onItemClick }) => (
  <div className="account-section">
    <Caption className="account-section-title">{group.title}</Caption>
    <div className="account-menu-group">
      {group.items.map((item) => (
        <button
          key={item.label}
          className={`account-menu-item ${item.danger ? 'danger' : ''}`}
          onClick={() => onItemClick(item)}
        >
          <span className="account-menu-icon">{item.icon}</span>
          <span className="account-menu-label">{item.label}</span>
          <ChevronRight size={20} className="account-menu-arrow" />
        </button>
      ))}
    </div>
  </div>
);
