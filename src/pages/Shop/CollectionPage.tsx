import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product';
import { H3, Body } from '../../components/common';
import { getProductsByCollection, mockCollections } from '../../data';
import './CollectionPage.css';

export const CollectionPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();

  const collection = mockCollections.find((c) => c.handle === handle);
  const products = handle ? getProductsByCollection(handle) : [];

  if (!collection) {
    return (
      <div className="collection-page">
        <div className="collection-empty">
          <Body>Collection not found</Body>
        </div>
      </div>
    );
  }

  return (
    <div className="collection-page">
      <div className="collection-header">
        <H3>{collection.title}</H3>
        {collection.description && (
          <Body color="secondary">{collection.description}</Body>
        )}
      </div>

      {products.length > 0 ? (
        <div className="collection-products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="collection-empty">
          <Body color="secondary">No products in this collection</Body>
        </div>
      )}
    </div>
  );
};
