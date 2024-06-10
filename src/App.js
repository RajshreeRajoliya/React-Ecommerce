// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 200, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 2, name: 'Product 2', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 100, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 3, name: 'Product 3', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 300, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 4, name: 'Product 4', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 200, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 5, name: 'Product 5', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 600, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 6, name: 'Product 6', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 800, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 7, name: 'Product 7', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 400, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 8, name: 'Product 8', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 100, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 9, name: 'Product 9', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 300, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
    { id: 10, name: 'Product 10', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price:500, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      alert('Product already added');
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    ));
  };

  const removeItem = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const placeOrder = (userDetails) => {
    if (!userDetails.firstName || !userDetails.lastName || !userDetails.address) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Order placed:', { userDetails, cart });
    setCart([]);
    alert('Order placed successfully!');
  };

  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">Products</Link>
          <Link to="/cart" className="cart-link">
            Cart
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<ProductListingPage products={products} addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
                placeOrder={placeOrder}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
