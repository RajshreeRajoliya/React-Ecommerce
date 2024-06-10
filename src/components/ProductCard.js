import React from 'react';

const ProductCard = ({ product, addToCart, quantity }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart {quantity > 0}
      </button>
    </div>
  );
};

export default ProductCard;
