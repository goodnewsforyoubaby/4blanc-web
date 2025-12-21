import React, { useState } from 'react';
import { H2, BodySmall, Button } from '../../components/common';
import './ContactPage.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', comment: '' });
      setSubmitted(false);
    }, 3000);
  };

  const isValid = form.email.trim() !== '';

  return (
    <div className="contact-page">
      <div className="contact-header">
        <H2>Contact</H2>
        <BodySmall color="secondary">
          Have a question? Send us a message.
        </BodySmall>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <div className="contact-field">
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

        <div className="contact-field">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={5}
          />
        </div>

        <Button
          type="submit"
          fullWidth
          disabled={!isValid || submitted}
        >
          {submitted ? 'Message Sent!' : 'Send'}
        </Button>
      </form>
    </div>
  );
};
