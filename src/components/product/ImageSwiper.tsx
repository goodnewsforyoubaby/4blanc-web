import React, { useState, useRef, useCallback } from 'react';
import './ImageSwiper.css';

interface ImageSwiperProps {
  images: { url: string; altText?: string }[];
  title: string;
}

export const ImageSwiper: React.FC<ImageSwiperProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    endX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = startX.current - endX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeIndex < images.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
  }, [activeIndex, images.length]);

  // Mouse events for desktop testing
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    endX.current = e.clientX;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) {
      endX.current = e.clientX;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = startX.current - endX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeIndex < images.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
  }, [activeIndex, images.length]);

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  if (images.length === 0) {
    return (
      <div className="image-swiper">
        <div className="image-swiper-placeholder">No images</div>
      </div>
    );
  }

  return (
    <div className="image-swiper">
      <div
        className="image-swiper-track"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="image-swiper-slide">
            <img
              src={image.url}
              alt={image.altText || `${title} - Image ${index + 1}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="image-swiper-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`image-swiper-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
