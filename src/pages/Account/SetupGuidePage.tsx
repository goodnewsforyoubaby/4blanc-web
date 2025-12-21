import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { H2, H3, Body, BodySmall } from '../../components/common';
import './SetupGuidePage.css';

// Image paths
const IMAGES = {
  banner: '/4blanc-web/images/setup-guide/banner.jpg',
  alizeProduct: '/4blanc-web/images/setup-guide/alize-product.jpg',
  maestroProduct: '/4blanc-web/images/setup-guide/maestro-product.jpg',
};

// Video guide sections data
const videoSections = [
  {
    id: 'maestro',
    title: 'Maéstro™ Ultimate Protection Nail Station',
    videos: [
      {
        id: 'v1uEa0B4ISA',
        title: 'In-depth tour of 4BLANC® Maéstro™ Ultimate Protection Nail Station',
      },
      {
        id: 'ewqkSX28xR4',
        title: '4BLANC® Maéstro Ultimate Protection Nail Station Unboxing and Installation',
      },
    ],
  },
  {
    id: 'alize',
    title: 'Alizé™ Nail Dust Collector',
    videos: [
      {
        id: 'TSq2Shaxajk',
        title: 'In-Depth Tour of 4BLANC® Alizé Nail Artist Station',
      },
      {
        id: 'iF6jyIn16z4',
        title: 'Unboxing 4BLANC® Alizé Nail Dust Collector and Assembling It For the First Use',
      },
    ],
  },
  {
    id: 'filter-stand',
    title: 'Filter & Stand',
    videos: [
      {
        id: 'FJGQW5JGA-c',
        title: '45 Days in Use - Removing Filter and Cleaning 4BLANC® Alizé Dust Collector',
      },
      {
        id: 'xixxcSb-xEg',
        title: 'Detailed Manual For Assembling of the Rolling Stand for Alizé Nail Dust Collector',
      },
      {
        id: 'fDeyD6HWvDc',
        title: 'How to Set Up the Heavy-Duty Rolling Stand for Maéstro™ Dust Collectors',
      },
    ],
  },
  {
    id: 'shadowless-lamp',
    title: 'Shadowless Lamp',
    videos: [
      {
        id: 'ccVOZapTp2E',
        title: 'Unboxing & Setting Up of 4BLANC® Shadowless Lamp',
      },
    ],
  },
  {
    id: 'macro-lens',
    title: 'Macro Lens',
    videos: [
      {
        id: 'BVwZlZwvYCQ',
        title: 'Unboxing & Setting Up of 4BLANC® Macro 30X Photo Lens',
      },
      {
        id: 'WmqJbPNb4iI',
        title: 'Unboxing & Setting Up of 4BLANC® Macro 20X Video Lens',
      },
    ],
  },
];

// YouTube embed component
const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
  <div className="setup-guide-video-wrapper">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="setup-guide-video"
    />
  </div>
);

export const SetupGuidePage: React.FC = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['maestro']));

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const scrollToSection = (sectionId: string) => {
    setOpenSections((prev) => new Set([...prev, sectionId]));
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="setup-guide-page">
      {/* Header Banner */}
      <div className="setup-guide-banner">
        <img src={IMAGES.banner} alt="Setup Guide" className="setup-guide-banner-image" />
        <div className="setup-guide-banner-overlay" />
        <div className="setup-guide-banner-content">
          <H2>Installation Guide and Operating Instructions</H2>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="setup-guide-intro">
        <H3>Step-by-Step SetUp Guide for Your 4BLANC® Dust Collector</H3>
        <Body color="secondary">
          Welcome to the 4BLANC® family! Join nail professionals worldwide who have transformed
          their workspaces into cleaner, safer environments. Select your product below to access
          clear, detailed setup guides and operating instructions designed to help you get the most
          out of your 4BLANC® equipment. Let's get started!
        </Body>
        <BodySmall className="setup-guide-select-label">Select Your Model below:</BodySmall>
      </section>

      {/* Product Selection Grid */}
      <section className="setup-guide-products">
        <div className="setup-guide-product-card" onClick={() => scrollToSection('alize')}>
          <img src={IMAGES.alizeProduct} alt="Alizé™" className="setup-guide-product-image" />
          <button className="setup-guide-product-button">Alizé™ Setup Guide</button>
        </div>
        <div className="setup-guide-product-card" onClick={() => scrollToSection('maestro')}>
          <img src={IMAGES.maestroProduct} alt="Maéstro™" className="setup-guide-product-image" />
          <button className="setup-guide-product-button">Maéstro™ Setup Guide</button>
        </div>
      </section>

      {/* Video Guide Accordion */}
      <section className="setup-guide-accordion">
        <div className="setup-guide-accordion-header">
          <H2>4BLANC® Video Guide</H2>
        </div>

        {videoSections.map((section) => (
          <div key={section.id} id={section.id} className="setup-guide-section">
            <button
              className={`setup-guide-section-header ${openSections.has(section.id) ? 'open' : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              <Body>{section.title}</Body>
              {openSections.has(section.id) ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {openSections.has(section.id) && (
              <div className="setup-guide-section-content">
                {section.videos.map((video) => (
                  <div key={video.id} className="setup-guide-video-item">
                    <YouTubeEmbed videoId={video.id} title={video.title} />
                    <BodySmall className="setup-guide-video-title">{video.title}</BodySmall>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
