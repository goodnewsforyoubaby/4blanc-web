import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Truck, Store, Package, MapPin, Building, GraduationCap, BookOpen,
  Sparkles, Video, PenTool, ShoppingCart, Heart, ShoppingBag, Home, Building2,
  CheckCircle, ExternalLink
} from 'lucide-react';
import { H2, H3, Body, BodySmall, Button } from '../../components/common';
import { getPartnershipBySlug } from '../../data';
import './PartnershipDetailPage.css';

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck size={24} />,
  Store: <Store size={24} />,
  Package: <Package size={24} />,
  MapPin: <MapPin size={24} />,
  Building: <Building size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  BookOpen: <BookOpen size={24} />,
  Sparkles: <Sparkles size={24} />,
  Video: <Video size={24} />,
  PenTool: <PenTool size={24} />,
  ShoppingCart: <ShoppingCart size={24} />,
  Heart: <Heart size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  Home: <Home size={24} />,
  Building2: <Building2 size={24} />,
};

export const PartnershipDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const program = getPartnershipBySlug(slug || '');

  if (!program) {
    return (
      <div className="partnership-detail-page">
        <div className="partnership-not-found">
          <H2>Program Not Found</H2>
          <Body>The partnership program you're looking for doesn't exist.</Body>
          <Button onClick={() => navigate('/partnership')}>
            Back to Partnership
          </Button>
        </div>
      </div>
    );
  }

  const handleCtaClick = () => {
    if (program.ctaLink) {
      window.open(program.ctaLink, '_blank');
    } else {
      // Mock action - in real app would navigate to application form
      alert('Application form would open here');
    }
  };

  return (
    <div className="partnership-detail-page">
      {/* Hero Section */}
      <section className="pd-hero">
        <h1 className="pd-hero-title">{program.heroTitle}</h1>
        <p className="pd-hero-subtitle">{program.heroSubtitle}</p>
        <Button onClick={handleCtaClick} className="pd-hero-cta">
          {program.ctaText}
          {program.ctaLink && <ExternalLink size={16} />}
        </Button>
      </section>

      {/* Why Join Section */}
      <section className="pd-section">
        <H2>{program.whyJoinTitle}</H2>
        <Body color="secondary">{program.whyJoinDescription}</Body>
      </section>

      {/* Benefits Section */}
      <section className="pd-section">
        <H3>Benefits</H3>
        <div className="pd-benefits">
          {program.benefits.map((benefit, index) => (
            <div key={index} className="pd-benefit">
              <CheckCircle size={20} className="pd-benefit-icon" />
              <div className="pd-benefit-content">
                <Body className="pd-benefit-title">{benefit.title}</Body>
                <BodySmall color="secondary">{benefit.description}</BodySmall>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="pd-section">
        <H3>Who Is This Program For?</H3>
        <div className="pd-audience">
          {program.targetAudience.map((audience, index) => (
            <div key={index} className="pd-audience-item">
              <div className="pd-audience-icon">
                {iconMap[audience.icon] || <Sparkles size={24} />}
              </div>
              <div className="pd-audience-content">
                <Body className="pd-audience-title">{audience.title}</Body>
                <BodySmall color="secondary">{audience.description}</BodySmall>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pd-section">
        <H3>How It Works</H3>
        <div className="pd-steps">
          {program.howItWorks.map((step, index) => (
            <div key={index} className="pd-step">
              <div className="pd-step-number">{index + 1}</div>
              <Body>{step}</Body>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pd-cta-section">
        <Button onClick={handleCtaClick} fullWidth>
          {program.ctaText}
          {program.ctaLink && <ExternalLink size={16} />}
        </Button>
      </section>
    </div>
  );
};
