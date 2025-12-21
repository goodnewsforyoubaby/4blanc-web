import React from 'react';
import { H2, H3, Body, BodySmall } from '../../components/common';
import './PolicyPage.css';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="policy-page">
      <H2>Privacy Policy</H2>
      <BodySmall color="tertiary">Last updated: December 2024</BodySmall>

      <section className="policy-section">
        <H3>Introduction</H3>
        <Body>
          4BLANC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Information We Collect</H3>
        <Body>We collect information that you provide directly to us:</Body>
        <ul className="policy-list">
          <li><strong>Personal Information:</strong> Name, email address, phone number, shipping and billing addresses</li>
          <li><strong>Payment Information:</strong> Credit card details (processed securely through our payment processor)</li>
          <li><strong>Account Information:</strong> Username, password, and order history</li>
          <li><strong>Communication Data:</strong> Messages you send to our customer support</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>Automatic Data Collection</H3>
        <Body>When you visit our website, we automatically collect:</Body>
        <ul className="policy-list">
          <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns</li>
          <li><strong>Location Data:</strong> IP address and general geographic location</li>
          <li><strong>Cookies:</strong> Small files stored on your device for site functionality</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>How We Use Your Information</H3>
        <Body>We use the collected information for:</Body>
        <ul className="policy-list">
          <li>Processing and fulfilling your orders</li>
          <li>Communicating with you about orders and promotions</li>
          <li>Improving our website and customer experience</li>
          <li>Preventing fraud and ensuring security</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>Information Sharing</H3>
        <Body>
          We do not sell your personal information. We may share your information with:
        </Body>
        <ul className="policy-list">
          <li><strong>Service Providers:</strong> Shipping carriers, payment processors, email services</li>
          <li><strong>Business Partners:</strong> As necessary to fulfill your orders</li>
          <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>Data Security</H3>
        <Body>
          We implement industry-standard security measures to protect your information, including SSL encryption, secure payment processing, and regular security audits. However, no method of transmission over the Internet is 100% secure.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Your Rights</H3>
        <Body>You have the right to:</Body>
        <ul className="policy-list">
          <li>Access and receive a copy of your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal data</li>
          <li>Opt-out of marketing communications</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>Cookies</H3>
        <Body>
          We use cookies and similar technologies to enhance your browsing experience. You can manage cookie preferences through your browser settings. Essential cookies are required for site functionality.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Third-Party Links</H3>
        <Body>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Children's Privacy</H3>
        <Body>
          Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Changes to This Policy</H3>
        <Body>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Contact Us</H3>
        <Body>
          If you have questions about this Privacy Policy or our data practices, please contact us through the chat or email us at privacy@4blanc.com.
        </Body>
      </section>
    </div>
  );
};
