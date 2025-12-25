import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ChevronRight, BookOpen, Play } from 'lucide-react';
import { H2, Body, BodySmall, Caption } from '../../components/common';
import './KnowledgePage.css';

export const KnowledgePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="knowledge-page">
      <div className="knowledge-header">
        <H2>Knowledge Base</H2>
        <BodySmall color="secondary">
          Product manuals and guides for your 4BLANC® equipment
        </BodySmall>
      </div>

      {/* GUIDES Section */}
      <div className="knowledge-section">
        <Caption className="knowledge-section-title">Guides</Caption>
        <div className="knowledge-menu">
          <button
            className="knowledge-menu-item"
            onClick={() => navigate('/knowledge/setup-guide')}
          >
            <span className="knowledge-menu-icon">
              <BookOpen size={22} />
            </span>
            <div className="knowledge-menu-info">
              <Body>Setup Guide</Body>
              <BodySmall color="secondary">Step-by-step product setup</BodySmall>
            </div>
            <ChevronRight size={20} className="knowledge-menu-arrow" />
          </button>
          <button
            className="knowledge-menu-item"
            onClick={() => navigate('/knowledge/video-guide')}
          >
            <span className="knowledge-menu-icon">
              <Play size={22} />
            </span>
            <div className="knowledge-menu-info">
              <Body>Video Guide</Body>
              <BodySmall color="secondary">Video tutorials</BodySmall>
            </div>
            <ChevronRight size={20} className="knowledge-menu-arrow" />
          </button>
        </div>
      </div>

      {/* MANUALS Section */}
      <div className="knowledge-section">
        <Caption className="knowledge-section-title">Manuals</Caption>
        <div className="knowledge-menu">
          <button
            className="knowledge-menu-item"
            onClick={() => navigate('/knowledge/manual')}
          >
            <span className="knowledge-menu-icon">
              <FileText size={22} />
            </span>
            <div className="knowledge-menu-info">
              <Body>User Manuals</Body>
              <BodySmall color="secondary">PDF guides for all products</BodySmall>
            </div>
            <ChevronRight size={20} className="knowledge-menu-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
