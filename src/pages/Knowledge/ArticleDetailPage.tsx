import React from 'react';
import { useParams } from 'react-router-dom';
import { H2, Body, Caption } from '../../components/common';
import { getArticleBySlug, articleCategories } from '../../data';
import './ArticleDetailPage.css';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="article-detail-page">
        <div className="article-empty">
          <Body>Article not found</Body>
        </div>
      </div>
    );
  }

  const category = articleCategories.find((c) => c.id === article.category);

  return (
    <div className="article-detail-page">
      {article.featuredImage && (
        <div className="article-hero">
          <img src={article.featuredImage} alt={article.title} />
        </div>
      )}

      <div className="article-content">
        <div className="article-meta">
          <Caption color="link">{category?.name}</Caption>
          <Caption color="tertiary">
            {article.readTime} min read
          </Caption>
        </div>

        <H2>{article.title}</H2>

        <div className="article-author">
          <Caption color="secondary">
            By {article.author} &middot; {new Date(article.publishedAt).toLocaleDateString()}
          </Caption>
        </div>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {article.tags.length > 0 && (
          <div className="article-tags">
            {article.tags.map((tag) => (
              <span key={tag} className="article-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
