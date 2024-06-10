// CartItem.jsx
import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <div className="quantity-control">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>
      <button onClick={() => removeItem(item.id)} className="remove-button">Remove</button>
    </div>
  );
};

export default CartItem;
