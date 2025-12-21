import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, FileText, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import { H3, Body, BodySmall } from '../../components/common';
import { articleCategories, mockArticles } from '../../data';
import './KnowledgePage.css';

export const KnowledgePage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { path: '/knowledge/faq', icon: <HelpCircle size={22} />, title: 'FAQ', desc: 'Frequently asked questions' },
    { path: '/knowledge/articles', icon: <FileText size={22} />, title: 'Articles', desc: 'Tips and guides' },
    { path: '/knowledge/shipping-policy', icon: <Truck size={22} />, title: 'Shipping Policy', desc: 'Delivery information' },
    { path: '/knowledge/return-policy', icon: <RotateCcw size={22} />, title: 'Return Policy', desc: 'Returns and refunds' },
  ];

  return (
    <div className="knowledge-page">
      {/* Menu */}
      <section className="knowledge-section">
        <div className="knowledge-menu">
          {menuItems.map((item) => (
            <button
              key={item.path}
              className="knowledge-menu-item"
              onClick={() => navigate(item.path)}
            >
              <span className="knowledge-menu-icon">{item.icon}</span>
              <div className="knowledge-menu-info">
                <Body>{item.title}</Body>
                <BodySmall color="secondary">{item.desc}</BodySmall>
              </div>
              <ChevronRight size={20} className="knowledge-menu-arrow" />
            </button>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="knowledge-section">
        <div className="knowledge-section-header">
          <H3>Recent Articles</H3>
          <button className="knowledge-link" onClick={() => navigate('/knowledge/articles')}>
            View all
          </button>
        </div>
        <div className="knowledge-articles">
          {mockArticles.slice(0, 3).map((article) => (
            <button
              key={article.id}
              className="knowledge-article-card"
              onClick={() => navigate(`/knowledge/articles/${article.slug}`)}
            >
              {article.featuredImage && (
                <img src={article.featuredImage} alt={article.title} />
              )}
              <div className="knowledge-article-info">
                <Body>{article.title}</Body>
                <BodySmall color="tertiary">{article.readTime} min read</BodySmall>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
