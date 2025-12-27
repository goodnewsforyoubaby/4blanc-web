import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Button } from '../common';
import './AskUsCTA.css';

export const AskUsCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="ask-us-cta">
      <div className="ask-us-icon">
        <MessageCircle size={32} />
      </div>
      <h3 className="ask-us-title">Have questions?</h3>
      <p className="ask-us-description">
        Our team is here to help you find the perfect equipment for your salon.
      </p>
      <Button
        variant="primary"
        fullWidth
        onClick={() => navigate('/chat')}
      >
        Start a Conversation
      </Button>
    </section>
  );
};
