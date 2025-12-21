import React from 'react';
import { Check } from 'lucide-react';
import { H3, Body, BodySmall, Caption } from '../../components/common';
import { useTheme } from '../../contexts/ThemeContext';
import './SettingsPage.css';

export const SettingsPage: React.FC = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="settings-page">
      {/* Theme Selection */}
      <section className="settings-section">
        <H3>Appearance</H3>
        <BodySmall color="secondary">Choose your preferred theme</BodySmall>

        <div className="settings-themes">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`settings-theme ${theme === t.id ? 'active' : ''}`}
              onClick={() => setTheme(t.id)}
            >
              <div className="settings-theme-preview" data-theme={t.id}>
                <div className="settings-theme-header" />
                <div className="settings-theme-content">
                  <div className="settings-theme-card" />
                  <div className="settings-theme-card" />
                </div>
                <div className="settings-theme-tabs" />
              </div>
              <div className="settings-theme-info">
                <Body>{t.name}</Body>
                <Caption color="tertiary">{t.description}</Caption>
              </div>
              {theme === t.id && (
                <div className="settings-theme-check">
                  <Check size={16} />
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Language (Mock) */}
      <section className="settings-section">
        <H3>Language</H3>
        <BodySmall color="secondary">Select your preferred language</BodySmall>

        <div className="settings-option">
          <Body>English</Body>
          <Check size={20} />
        </div>
        <div className="settings-option disabled">
          <Body color="tertiary">Russian (coming soon)</Body>
        </div>
      </section>

      {/* Notifications (Mock) */}
      <section className="settings-section">
        <H3>Notifications</H3>
        <BodySmall color="secondary">Manage your notification preferences</BodySmall>

        <label className="settings-toggle">
          <span>
            <Body>Order Updates</Body>
            <Caption color="tertiary">Get notified about your orders</Caption>
          </span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="settings-toggle">
          <span>
            <Body>Promotions</Body>
            <Caption color="tertiary">Receive special offers and deals</Caption>
          </span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="settings-toggle">
          <span>
            <Body>New Products</Body>
            <Caption color="tertiary">Be the first to know about new arrivals</Caption>
          </span>
          <input type="checkbox" />
        </label>
      </section>
    </div>
  );
};
