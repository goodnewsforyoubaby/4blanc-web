import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../../components/product';
import { CollectionCard } from '../../components/collection';
import { H3 } from '../../components/common';
import { mockProducts, mockCollections, searchProducts } from '../../data';
import './ShopPage.css';

export const ShopPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCollections, setShowCollections] = useState(true);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return mockProducts;
    return searchProducts(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowCollections(query.length === 0);
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

      {/* Collections */}
      {showCollections && (
        <section className="shop-section">
          <H3 className="shop-section-title">Collections</H3>
          <div className="shop-collections">
            {mockCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>
      )}

      {/* Products */}
      <section className="shop-section">
        <div className="shop-section-header">
          <H3 className="shop-section-title">
            {searchQuery ? `Results (${filteredProducts.length})` : 'All Products'}
          </H3>
        </div>
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
