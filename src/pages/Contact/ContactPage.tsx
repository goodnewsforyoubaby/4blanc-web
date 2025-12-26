import React, { useState, useRef } from 'react';
import { Paperclip, X } from 'lucide-react';
import { H2, BodySmall, Button } from '../../components/common';
import './ContactPage.css';

interface ContactFormData {
  name: string;
  email: string;
  orderNumber: string;
  comment: string;
}

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    orderNumber: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', orderNumber: '', comment: '' });
      setAttachedFiles([]);
      setSubmitted(false);
    }, 3000);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachedFiles(prev => [...prev, ...files].slice(0, 3));
    // Reset input to allow selecting the same file again
    e.target.value = '';
  };

  const handleRemoveFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Valid if comment or files attached
  const isValid = form.comment.trim() !== '' || attachedFiles.length > 0;

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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="orderNumber">Order Number</label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={form.orderNumber}
            onChange={handleChange}
            placeholder="#4BL-12345"
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
            rows={4}
          />
        </div>

        {/* Attachments section */}
        <div className="contact-attachments-section">
          {attachedFiles.length > 0 && (
            <div className="contact-attachments">
              {attachedFiles.map((file, index) => (
                <div key={index} className="contact-attachment-item">
                  <Paperclip size={16} />
                  <span className="contact-attachment-name">{file.name}</span>
                  <button
                    type="button"
                    className="contact-attachment-remove"
                    onClick={() => handleRemoveFile(index)}
                    aria-label="Remove file"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {attachedFiles.length < 3 && (
            <button
              type="button"
              className="contact-attach-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip size={18} />
              <span>Attach{attachedFiles.length > 0 && ` (${attachedFiles.length}/3)`}</span>
            </button>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            style={{ display: 'none' }}
            multiple
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
