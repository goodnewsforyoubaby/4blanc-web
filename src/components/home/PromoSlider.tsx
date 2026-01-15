import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PromoSlider.css';

interface PromoSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
  link: string;
}

interface PromoSliderProps {
  slides: PromoSlide[];
}

export const PromoSlider: React.FC<PromoSliderProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      // Ширина карточки = 85% контейнера + gap (12px)
      const cardWidth = container.offsetWidth * 0.85 + 12;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, slides.length - 1));
    }
  };

  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.offsetWidth * 0.85 + 12;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleSlideClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link);
    }
  };

  return (
    <div className="promo-slider">
      <div
        className="promo-slider__slides hide-scrollbar"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {slides.map((slide) => (
          <button
            key={slide.id}
            className="promo-slider__slide"
            onClick={() => handleSlideClick(slide.link)}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="promo-slider__image"
            />
            <div className="promo-slider__overlay" />
            <div className="promo-slider__content">
              {slide.badge && (
                <img
                  src={slide.badge}
                  alt="Badge"
                  className="promo-slider__badge"
                />
              )}
              <h3 className="promo-slider__title">{slide.title}</h3>
              {slide.subtitle && (
                <p className="promo-slider__subtitle">{slide.subtitle}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="promo-slider__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`promo-slider__dot ${
                index === activeIndex ? 'promo-slider__dot--active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
