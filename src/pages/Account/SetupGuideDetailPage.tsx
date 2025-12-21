import React from 'react';
import { H2, H3, Body, BodySmall } from '../../components/common';
import { SetupGuide } from '../../data/setupGuides';
import './SetupGuideDetailPage.css';

// YouTube embed component
const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
  <div className="guide-detail-video-wrapper">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="guide-detail-video"
    />
  </div>
);

interface SetupGuideDetailPageProps {
  guide: SetupGuide;
}

export const SetupGuideDetailPage: React.FC<SetupGuideDetailPageProps> = ({ guide }) => {
  return (
    <div className="guide-detail-page">
      {/* Hero Banner */}
      <div className="guide-detail-banner">
        <img
          src={guide.bannerImage}
          alt={`${guide.title} Setup Guide`}
          className="guide-detail-banner-image"
        />
        <div className="guide-detail-banner-overlay" />
        <div className="guide-detail-banner-content">
          <h1 className="guide-detail-banner-title">{guide.title}</h1>
          <h2 className="guide-detail-banner-subtitle">{guide.subtitle}</h2>
        </div>
      </div>

      {/* Sections */}
      <div className="guide-detail-content">
        {guide.sections.map((section) => (
          <section key={section.id} className="guide-detail-section">
            <H3 className="guide-detail-section-title">{section.title}</H3>

            {/* Warning box */}
            {section.warning && (
              <div className="guide-detail-warning">
                <Body><strong>WARNING:</strong> {section.warning}</Body>
              </div>
            )}

            {/* Content */}
            <div className="guide-detail-section-content">
              {Array.isArray(section.content) ? (
                <ul className="guide-detail-list">
                  {section.content.map((item, index) => (
                    <li key={index}>
                      <Body>{item}</Body>
                    </li>
                  ))}
                </ul>
              ) : (
                <Body>{section.content}</Body>
              )}
            </div>

            {/* Tip */}
            {section.tip && (
              <div className="guide-detail-tip">
                <BodySmall><strong>Tip:</strong> {section.tip}</BodySmall>
              </div>
            )}

            {/* Single Image */}
            {section.image && !section.images && (
              <div className="guide-detail-image-container">
                <img
                  src={section.image}
                  alt={section.title}
                  className="guide-detail-image"
                  loading="lazy"
                />
              </div>
            )}

            {/* Multiple Images */}
            {section.images && (
              <div className="guide-detail-images-grid">
                {section.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${section.title} ${index + 1}`}
                    className="guide-detail-grid-image"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            {/* YouTube Video */}
            {section.youtubeId && (
              <YouTubeEmbed videoId={section.youtubeId} title={section.title} />
            )}
          </section>
        ))}
      </div>
    </div>
  );
};
