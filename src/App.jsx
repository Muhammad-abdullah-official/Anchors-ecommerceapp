import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import NavBar2 from './components/NavBar2';
import NavBar3 from './components/NavBar3';
import SearchBar from './components/SearchBar';
import Morale from './components/Morale';
import ContactPage from './components/ContactPage';
import Product from './components/Product';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
    setIsOpen(true); // Open the cart when an item is added
  };

  return (
    <Router>
      <Navbar />
      {isOpen && <Checkout cartItems={cartItems} totalPrice={totalPrice} setIsOpen={setIsOpen} />}

      <NavBar2 />
      <NavBar3 />
      <SearchBar />
      <Morale />
      
      <Routes>
        <Route path="/" element={<Product addItemToCart={addItemToCart} />} />
        <Route path="/products" element={<Product addItemToCart={addItemToCart} />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
