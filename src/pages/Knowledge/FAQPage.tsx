import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { H3, Body, BodySmall } from '../../components/common';
import { faqCategories, getFAQByCategory } from '../../data';
import './FAQPage.css';

export const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="faq-page">
      {faqCategories.map((category) => {
        const items = getFAQByCategory(category.id);
        return (
          <section key={category.id} className="faq-section">
            <H3 className="faq-category-title">{category.name}</H3>
            <div className="faq-items">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`faq-item ${openItems.has(item.id) ? 'open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(item.id)}
                  >
                    <Body>{item.question}</Body>
                    {openItems.has(item.id) ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {openItems.has(item.id) && (
                    <div className="faq-answer">
                      <BodySmall color="secondary">{item.answer}</BodySmall>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
