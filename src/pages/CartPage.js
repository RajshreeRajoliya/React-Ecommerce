// CartPage.jsx
import React, { useState } from 'react';
import CartItem from '../components/CartItem';

const CartPage = ({ cart, increaseQuantity, decreaseQuantity, removeItem, placeOrder }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    placeOrder(userDetails);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      ))}
      <h2 id='userTotal'>Total: ${totalPrice.toFixed(2)}</h2>
      <form id='total'>
        <input
        id='first'
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userDetails.firstName}
          onChange={handleInputChange}
          required
        />
        <input
        id='last'
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userDetails.lastName}
          onChange={handleInputChange}
          required
        />
        <input
        id='address'
          type="text"
          name="address"
          placeholder="Address"
          value={userDetails.address}
          onChange={handleInputChange}
          required
        />
      </form>
      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
};

export default CartPage;
