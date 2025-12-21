import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeSwitcher.css';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="theme-switcher">
      <div className="theme-switcher-label">
        <Palette size={16} />
        <span>Theme</span>
      </div>
      <div className="theme-switcher-buttons">
        {themes.map((t) => (
          <button
            key={t.id}
            className={`theme-button ${theme === t.id ? 'active' : ''}`}
            onClick={() => setTheme(t.id)}
            title={t.description}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
};
