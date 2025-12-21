import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';
import { H2, Body, BodySmall } from '../../components/common';
import './KnowledgePage.css';

export const KnowledgePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="knowledge-page">
      <div className="knowledge-header">
        <H2>Documentation</H2>
        <BodySmall color="secondary">
          Product manuals and guides for your 4BLANC® equipment
        </BodySmall>
      </div>

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
  );
};
