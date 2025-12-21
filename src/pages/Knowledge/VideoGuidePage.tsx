import React, { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';
import { H2, Body, BodySmall, BottomSheet } from '../../components/common';
import './VideoGuidePage.css';

// Video section type
interface VideoSection {
  id: string;
  title: string;
  videos: { id: string; title: string }[];
}

// Video guide sections data (from 4blanc.com/pages/videos)
const videoSections: VideoSection[] = [
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
];

// YouTube embed component
const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
  <div className="video-guide-video-wrapper">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="video-guide-video"
    />
  </div>
);

export const VideoGuidePage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<VideoSection | null>(null);

  return (
    <div className="video-guide-page">
      <div className="video-guide-header">
        <H2>Video Guide</H2>
        <BodySmall color="secondary">
          Watch tutorials for your 4BLANC® products
        </BodySmall>
      </div>

      <div className="video-guide-list">
        {videoSections.map((section) => (
          <button
            key={section.id}
            className="video-guide-item"
            onClick={() => setSelectedSection(section)}
          >
            <span className="video-guide-icon">
              <Play size={20} />
            </span>
            <div className="video-guide-info">
              <Body>{section.title}</Body>
              <BodySmall color="tertiary">
                {section.videos.length} video{section.videos.length > 1 ? 's' : ''}
              </BodySmall>
            </div>
            <ChevronRight size={20} className="video-guide-arrow" />
          </button>
        ))}
      </div>

      {/* Video Modal */}
      <BottomSheet
        isOpen={selectedSection !== null}
        onClose={() => setSelectedSection(null)}
        title={selectedSection?.title || 'Video Guide'}
      >
        {selectedSection && (
          <div className="video-guide-modal-content">
            {selectedSection.videos.map((video) => (
              <div key={video.id} className="video-guide-video-item">
                <YouTubeEmbed videoId={video.id} title={video.title} />
                <BodySmall className="video-guide-video-title">{video.title}</BodySmall>
              </div>
            ))}
          </div>
        )}
      </BottomSheet>
    </div>
  );
};
