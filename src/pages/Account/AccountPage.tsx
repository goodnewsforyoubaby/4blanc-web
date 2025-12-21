import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Settings,
  Package,
  HelpCircle,
  MessageCircle,
  FileText,
  Handshake,
  BookOpen,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { Button, H3, Body, BodySmall, Caption } from '../../components/common';
import { useAuth } from '../../contexts/AuthContext';
import './AccountPage.css';

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      logout();
    }
  };

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

        <div className="account-menu">
          <MenuItem
            icon={<BookOpen size={22} />}
            label="Setup Guide"
            onClick={() => navigate('/account/setup-guide')}
          />
          <MenuItem
            icon={<HelpCircle size={22} />}
            label="FAQ"
            onClick={() => navigate('/knowledge/faq')}
          />
          <MenuItem
            icon={<MessageCircle size={22} />}
            label="Contact Us"
            onClick={() => navigate('/chat')}
          />
          <MenuItem
            icon={<Handshake size={22} />}
            label="Partnership"
            onClick={() => navigate('/knowledge/partnership')}
          />
        </div>
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

      {/* Menu */}
      <div className="account-menu">
        <Caption className="account-menu-title">ORDERS</Caption>
        <MenuItem
          icon={<Package size={22} />}
          label="Order History"
          onClick={() => alert('Order history coming soon!')}
        />

        <Caption className="account-menu-title">ACCOUNT</Caption>
        <MenuItem
          icon={<Settings size={22} />}
          label="Settings"
          onClick={() => navigate('/account/settings')}
        />

        <Caption className="account-menu-title">INFORMATION</Caption>
        <MenuItem
          icon={<BookOpen size={22} />}
          label="Setup Guide"
          onClick={() => navigate('/account/setup-guide')}
        />
        <MenuItem
          icon={<HelpCircle size={22} />}
          label="FAQ"
          onClick={() => navigate('/knowledge/faq')}
        />
        <MenuItem
          icon={<MessageCircle size={22} />}
          label="Contact Us"
          onClick={() => navigate('/chat')}
        />
        <MenuItem
          icon={<FileText size={22} />}
          label="Policies"
          onClick={() => navigate('/knowledge')}
        />
        <MenuItem
          icon={<Handshake size={22} />}
          label="Partnership"
          onClick={() => navigate('/knowledge/partnership')}
        />

        <MenuItem
          icon={<LogOut size={22} />}
          label="Sign Out"
          danger
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  danger?: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badge, danger, onClick }) => (
  <button className={`account-menu-item ${danger ? 'danger' : ''}`} onClick={onClick}>
    <span className="account-menu-icon">{icon}</span>
    <span className="account-menu-label">{label}</span>
    {badge !== undefined && badge > 0 && (
      <span className="account-menu-badge">{badge}</span>
    )}
    <ChevronRight size={20} className="account-menu-arrow" />
  </button>
);
