import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { H3, Body, BodySmall, BottomSheet } from '../../components/common';
import { faqCategories, getFAQByCategory } from '../../data';
import { FAQItem } from '../../types';
import './FAQPage.css';

export const FAQPage: React.FC = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(null);

  return (
    <div className="faq-page">
      {faqCategories.map((category) => {
        const items = getFAQByCategory(category.id);
        return (
          <section key={category.id} className="faq-section">
            <H3 className="faq-category-title">{category.name}</H3>
            <div className="faq-items">
              {items.map((item) => (
                <button
                  key={item.id}
                  className="faq-item"
                  onClick={() => setSelectedFAQ(item)}
                >
                  <Body>{item.question}</Body>
                  <ChevronRight size={20} />
                </button>
              ))}
            </div>
          </section>
        );
      })}

      <BottomSheet
        isOpen={selectedFAQ !== null}
        onClose={() => setSelectedFAQ(null)}
        title="FAQ"
      >
        {selectedFAQ && (
          <div className="faq-modal-content">
            <H3 className="faq-modal-question">{selectedFAQ.question}</H3>
            <BodySmall color="secondary" className="faq-modal-answer">
              {selectedFAQ.answer}
            </BodySmall>
          </div>
        )}
      </BottomSheet>
    </div>
  );
};
