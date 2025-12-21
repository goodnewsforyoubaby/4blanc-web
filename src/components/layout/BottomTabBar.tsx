import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, MessageCircle, BookOpen } from 'lucide-react';
import { Badge } from '../common';
import './BottomTabBar.css';

interface TabItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

interface BottomTabBarProps {
  unreadChatCount?: number;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ unreadChatCount = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs: TabItem[] = [
    { path: '/', label: 'Home', icon: <Home size={24} /> },
    { path: '/shop', label: 'Shop', icon: <ShoppingBag size={24} /> },
    { path: '/chat', label: 'Chat', icon: <MessageCircle size={24} />, badge: unreadChatCount },
    { path: '/knowledge', label: 'Knowledge', icon: <BookOpen size={24} /> },
  ];

  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          className={`tab-item ${isActive(tab.path) ? 'tab-active' : ''}`}
          onClick={() => navigate(tab.path)}
        >
          <span className="tab-icon">
            {tab.icon}
            {tab.badge !== undefined && tab.badge > 0 && (
              <Badge count={tab.badge} className="tab-badge" />
            )}
          </span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};
