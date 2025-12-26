import React, { useState } from 'react';
import { ChevronRight, FileText, Scale, Info } from 'lucide-react';
import { H2, BodySmall, Body, Caption, Button, BottomSheet } from '../../components/common';
import { warrantyProducts, serialNumberImages, warrantyText, termsText } from '../../data/warranty';
import './WarrantyPage.css';

interface WarrantyFormData {
  product: string;
  serialNumber: string;
  email: string;
  comment: string;
}

export const WarrantyPage: React.FC = () => {
  const [form, setForm] = useState<WarrantyFormData>({
    product: '',
    serialNumber: '',
    email: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showWarranty, setShowWarranty] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    setSubmitted(true);
    setTimeout(() => {
      setForm({ product: '', serialNumber: '', email: '', comment: '' });
      setSubmitted(false);
    }, 3000);
  };

  const isValid = form.product && form.serialNumber.trim() !== '' && form.email.trim() !== '';

  return (
    <div className="warranty-page">
      {/* Header */}
      <div className="warranty-header">
        <H2>Register Your Product</H2>
        <BodySmall color="secondary">
          Register your 4BLANC product to activate warranty coverage
        </BodySmall>
      </div>

      {/* Serial Number Help */}
      <div className="warranty-sn-section">
        <div className="warranty-sn-help">
          <Info size={20} className="warranty-sn-icon" />
          <Caption color="secondary">Where to find serial number</Caption>
        </div>
        <div className="warranty-sn-images">
          {serialNumberImages.map((img) => (
            <div key={img.product} className="warranty-sn-image">
              <img src={img.imageUrl} alt={img.alt} />
              <Caption color="secondary">{img.product}</Caption>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form className="warranty-form" onSubmit={handleSubmit}>
        <div className="warranty-field">
          <label htmlFor="product">
            Product <span className="required">*</span>
          </label>
          <select
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            required
          >
            <option value="">Select your product</option>
            {warrantyProducts.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div className="warranty-field">
          <label htmlFor="serialNumber">
            Serial Number <span className="required">*</span>
          </label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={form.serialNumber}
            onChange={handleChange}
            placeholder="e.g., 4B-2024-XXXXX"
            required
          />
        </div>

        <div className="warranty-field">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="warranty-field">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Optional notes or purchase details"
            rows={3}
          />
        </div>

        <Button type="submit" fullWidth disabled={!isValid || submitted}>
          {submitted ? 'Registration Submitted!' : 'Register Product'}
        </Button>
      </form>

      {/* Legal Links */}
      <div className="warranty-legal-section">
        <Caption className="warranty-section-title">LEGAL</Caption>
        <div className="warranty-links">
          <button
            className="warranty-link-item"
            onClick={() => setShowWarranty(true)}
          >
            <span className="warranty-link-icon">
              <FileText size={22} />
            </span>
            <Body>One (1) Year Limited Warranty</Body>
            <ChevronRight size={20} className="warranty-link-arrow" />
          </button>
          <button
            className="warranty-link-item"
            onClick={() => setShowTerms(true)}
          >
            <span className="warranty-link-icon">
              <Scale size={22} />
            </span>
            <Body>Terms and Conditions</Body>
            <ChevronRight size={20} className="warranty-link-arrow" />
          </button>
        </div>
      </div>

      {/* BottomSheet: Warranty */}
      <BottomSheet
        isOpen={showWarranty}
        onClose={() => setShowWarranty(false)}
        title="Limited Warranty"
      >
        <div className="warranty-legal-content">
          {warrantyText.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </BottomSheet>

      {/* BottomSheet: Terms */}
      <BottomSheet
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms and Conditions"
      >
        <div className="warranty-legal-content">
          {termsText.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
};
