import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Collection } from '../../types';
import './CollectionCard.css';

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  const navigate = useNavigate();

  return (
    <div
      className="collection-card"
      onClick={() => navigate(`/shop/${collection.handle}`)}
    >
      <div className="collection-card-image">
        {collection.image ? (
          <img src={collection.image.url} alt={collection.image.altText || collection.title} />
        ) : (
          <div className="collection-card-placeholder" />
        )}
      </div>
      <div className="collection-card-info">
        <h3 className="collection-card-title">{collection.title}</h3>
        {collection.description && (
          <p className="collection-card-description">{collection.description}</p>
        )}
      </div>
      <ChevronRight size={20} className="collection-card-arrow" />
    </div>
  );
};
