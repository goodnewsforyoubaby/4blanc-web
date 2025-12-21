import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Tag, MessageCircle, Bell, X } from 'lucide-react';
import { Body, BodySmall, Caption } from '../../components/common';
import { useNotifications } from '../../contexts/NotificationContext';
import { NotificationType } from '../../types';
import './NotificationsPage.css';

const getIcon = (type: NotificationType) => {
  switch (type) {
    case 'order':
      return <Package size={20} />;
    case 'promo':
      return <Tag size={20} />;
    case 'chat':
      return <MessageCircle size={20} />;
    default:
      return <Bell size={20} />;
  }
};

export const NotificationsPage: React.FC = () => {
  const navigate = useNavigate();
  const { notifications, markAsRead, markAllAsRead, clearNotification, unreadCount } = useNotifications();

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  const handleClick = (notification: typeof notifications[0]) => {
    markAsRead(notification.id);
    if (notification.actionUrl) {
      navigate(notification.actionUrl);
    }
  };

  return (
    <div className="notifications-page">
      {/* Header */}
      <div className="notifications-header">
        <Caption color="secondary">{unreadCount} unread</Caption>
        {unreadCount > 0 && (
          <button className="notifications-mark-all" onClick={markAllAsRead}>
            Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="notifications-empty">
          <Bell size={48} strokeWidth={1} />
          <Body color="secondary">No notifications yet</Body>
        </div>
      ) : (
        <div className="notifications-list">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? '' : 'unread'}`}
              onClick={() => handleClick(notification)}
            >
              <div className={`notification-icon ${notification.type}`}>
                {getIcon(notification.type)}
              </div>
              <div className="notification-content">
                <Body>{notification.title}</Body>
                <BodySmall color="secondary">{notification.message}</BodySmall>
                <Caption color="tertiary">{formatTime(notification.timestamp)}</Caption>
              </div>
              <button
                className="notification-dismiss"
                onClick={(e) => {
                  e.stopPropagation();
                  clearNotification(notification.id);
                }}
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
