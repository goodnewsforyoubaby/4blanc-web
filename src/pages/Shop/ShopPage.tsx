import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../../components/product';
import { CollectionCard } from '../../components/collection';
import { PromoCard } from '../../components/shop';
import { H3 } from '../../components/common';
import {
  mockProducts,
  mockCollections,
  searchProducts,
  mockPromoCards,
} from '../../data';
import './ShopPage.css';

export const ShopPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showBrowseUI, setShowBrowseUI] = useState(true);

  // Products - only search filter, no category sorting
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return mockProducts;
    return searchProducts(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowBrowseUI(query.length === 0);
  };

  return (
    <div className="shop-page">
      {/* Search */}
      <div className="shop-search">
        <div className="shop-search-input">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Special Offers & Announcements */}
      {showBrowseUI && (
        <section className="shop-section">
          <H3 className="shop-section-title">Special Offers</H3>
          <div className="shop-promo-grid">
            {mockPromoCards.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>
        </section>
      )}

      {/* Our Products - Collections as iOS list */}
      {showBrowseUI && (
        <section className="shop-section">
          <H3 className="shop-section-title">Our Products</H3>
          <div className="shop-collections">
            {mockCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="shop-section">
        <H3 className="shop-section-title">
          {searchQuery ? `Results (${filteredProducts.length})` : 'All Products'}
        </H3>
        {filteredProducts.length > 0 ? (
          <div className="shop-products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <p>No products found for "{searchQuery}"</p>
          </div>
        )}
      </section>
    </div>
  );
};
