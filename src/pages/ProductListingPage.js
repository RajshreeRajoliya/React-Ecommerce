import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = ({ products, addToCart }) => {
  return (
    <div className="product-listing-page">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
