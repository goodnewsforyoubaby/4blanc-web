import React from 'react';
import { Shield, Zap, Wind } from 'lucide-react';
import './TechHighlights.css';

interface TechHighlight {
  id: string;
  icon: React.ReactNode;
  title: string;
  stat: string;
  description: string;
}

const techHighlights: TechHighlight[] = [
  {
    id: 'hepa',
    icon: <Shield size={24} />,
    title: 'HEPA-12 Filter',
    stat: '99.8%',
    description: 'Captures particles as small as 0.3 µm',
  },
  {
    id: 'uv',
    icon: <Zap size={24} />,
    title: 'UV Sanitization',
    stat: '99.9%',
    description: 'Eliminates bacteria, fungus, viruses',
  },
  {
    id: 'cyclone',
    icon: <Wind size={24} />,
    title: 'Cyclone Technology',
    stat: '540 m³/hr',
    description: 'Powerful airflow vortex cleaning',
  },
];

export const TechHighlights: React.FC = () => {
  return (
    <div className="tech-highlights hide-scrollbar">
      {techHighlights.map((tech) => (
        <div key={tech.id} className="tech-highlight-card">
          <div className="tech-highlight-icon">{tech.icon}</div>
          <div className="tech-highlight-stat">{tech.stat}</div>
          <div className="tech-highlight-title">{tech.title}</div>
          <div className="tech-highlight-description">{tech.description}</div>
        </div>
      ))}
    </div>
  );
};
