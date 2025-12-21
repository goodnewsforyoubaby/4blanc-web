import React from 'react';
import { H2, H3, Body, BodySmall } from '../../components/common';
import './PolicyPage.css';

export const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="policy-page">
      <H2>Shipping Policy</H2>
      <BodySmall color="tertiary">Last updated: December 2024</BodySmall>

      <section className="policy-section">
        <H3>Domestic Shipping (USA)</H3>
        <Body>
          We offer the following shipping options within the United States:
        </Body>
        <ul className="policy-list">
          <li><strong>Standard Shipping:</strong> 3-5 business days - $5.99 (Free on orders over $50)</li>
          <li><strong>Express Shipping:</strong> 1-2 business days - $14.99</li>
          <li><strong>Same Day Delivery:</strong> Available in select areas - $24.99</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>International Shipping</H3>
        <Body>
          We ship to most countries worldwide. International shipping rates and delivery times vary by destination:
        </Body>
        <ul className="policy-list">
          <li><strong>Canada & Mexico:</strong> 5-7 business days - Starting at $12.99</li>
          <li><strong>Europe:</strong> 7-14 business days - Starting at $19.99</li>
          <li><strong>Asia & Australia:</strong> 10-21 business days - Starting at $24.99</li>
          <li><strong>Rest of World:</strong> 14-28 business days - Starting at $29.99</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>Order Processing</H3>
        <Body>
          Orders are typically processed within 1-2 business days. You will receive a confirmation email with tracking information once your order ships.
        </Body>
        <Body>
          Please note that orders placed on weekends or holidays will be processed on the next business day.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Tracking Your Order</H3>
        <Body>
          Once your order ships, you will receive an email with tracking information. You can also track your order by logging into your account and viewing your order history.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Questions?</H3>
        <Body>
          If you have any questions about shipping, please contact our support team through the chat or email us at support@4blanc.com.
        </Body>
      </section>
    </div>
  );
};
