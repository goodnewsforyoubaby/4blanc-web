import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Body, BodySmall, Caption } from '../../components/common';
import { articleCategories, mockArticles, getArticlesByCategory } from '../../data';
import { ArticleCategory } from '../../types';
import './ArticlesPage.css';

export const ArticlesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'all'>('all');

  const articles = activeCategory === 'all'
    ? mockArticles
    : getArticlesByCategory(activeCategory);

  return (
    <div className="articles-page">
      {/* Category Tabs */}
      <div className="articles-tabs hide-scrollbar">
        <button
          className={`articles-tab ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        {articleCategories.map((cat) => (
          <button
            key={cat.id}
            className={`articles-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="articles-list">
        {articles.map((article) => (
          <button
            key={article.id}
            className="article-card"
            onClick={() => navigate(`/knowledge/articles/${article.slug}`)}
          >
            {article.featuredImage && (
              <img src={article.featuredImage} alt={article.title} />
            )}
            <div className="article-card-content">
              <Caption color="link">
                {articleCategories.find((c) => c.id === article.category)?.name}
              </Caption>
              <Body>{article.title}</Body>
              <BodySmall color="secondary">{article.excerpt}</BodySmall>
              <Caption color="tertiary">{article.readTime} min read</Caption>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
