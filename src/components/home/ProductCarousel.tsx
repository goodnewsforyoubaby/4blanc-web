import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';
import './ProductCarousel.css';

interface Feature {
  title: string;
  description: string;
}

interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonLink: string;
  image: string;
}

interface ProductCarouselProps {
  slides: CarouselSlide[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveIndex(newIndex);
    }
  };

  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth',
      });
    }
  };

  const handleButtonClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link);
    }
  };

  return (
    <div className="product-carousel">
      <div
        className="product-carousel__slides hide-scrollbar"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="product-carousel__slide">
            <div className="product-carousel__image-container">
              <img
                src={slide.image}
                alt={slide.title}
                className="product-carousel__image"
              />
            </div>
            <div className="product-carousel__content">
              <h2 className="product-carousel__title">{slide.title}</h2>
              <h3 className="product-carousel__subtitle">{slide.subtitle}</h3>
              <p className="product-carousel__description">{slide.description}</p>

              <div className="product-carousel__features">
                {slide.features.map((feature, index) => (
                  <div key={index} className="product-carousel__feature">
                    <span className="product-carousel__feature-title">
                      {feature.title}
                    </span>
                    <span className="product-carousel__feature-desc">
                      {feature.description}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleButtonClick(slide.buttonLink)}
                className="product-carousel__button"
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="product-carousel__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`product-carousel__dot ${
                index === activeIndex ? 'product-carousel__dot--active' : ''
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
