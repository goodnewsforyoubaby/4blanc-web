import React from 'react';
import { H2, H3, Body, BodySmall } from '../../components/common';
import './PolicyPage.css';

export const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="policy-page">
      <H2>Return Policy</H2>
      <BodySmall color="tertiary">Last updated: December 2024</BodySmall>

      <section className="policy-section">
        <H3>30-Day Return Policy</H3>
        <Body>
          We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Return Conditions</H3>
        <Body>
          To be eligible for a return, items must be:
        </Body>
        <ul className="policy-list">
          <li>Unused and in the same condition that you received them</li>
          <li>In the original packaging with all tags attached</li>
          <li>Accompanied by the receipt or proof of purchase</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>Non-Returnable Items</H3>
        <Body>
          The following items cannot be returned:
        </Body>
        <ul className="policy-list">
          <li>Gift cards</li>
          <li>Downloadable software or digital products</li>
          <li>Items marked as final sale</li>
          <li>Personal care items that have been opened</li>
        </ul>
      </section>

      <section className="policy-section">
        <H3>How to Return</H3>
        <Body>
          To initiate a return:
        </Body>
        <ol className="policy-list numbered">
          <li>Contact our support team through the chat or email</li>
          <li>Provide your order number and reason for return</li>
          <li>Receive a prepaid return label via email</li>
          <li>Pack the item securely and drop it off at any shipping location</li>
        </ol>
      </section>

      <section className="policy-section">
        <H3>Refund Process</H3>
        <Body>
          Once we receive your return, we will inspect the item and notify you of the status. If approved, your refund will be processed within 5-7 business days to your original payment method.
        </Body>
        <Body>
          Please note that shipping costs are non-refundable unless the return is due to our error.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Exchanges</H3>
        <Body>
          If you need to exchange an item for a different size or color, please return the original item and place a new order. This ensures the fastest delivery of your new item.
        </Body>
      </section>

      <section className="policy-section">
        <H3>Warranty Claims</H3>
        <Body>
          All electronic products come with a 1-year manufacturer warranty. For warranty claims, please contact our support team with your order number and a description of the issue.
        </Body>
      </section>
    </div>
  );
};
