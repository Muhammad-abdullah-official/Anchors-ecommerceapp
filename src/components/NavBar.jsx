import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 

const Navbar = () => {
  return (
    <header>
      <nav className="bottomnav">
        <h1>
          <i className="fas fa-anchor"></i> Anchors Store
        </h1>
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/products">
              <i className="fab fa-product-hunt"></i> Products
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fas fa-address-card"></i> Contact Us
            </Link>
          </li>
        </ul>
        <div className="storeicon">
          <button id="baricon">
            <i className="fas fa-bars" id="menu-icon"></i>
          </button>
          <button className="cart" id="cart-btn">
            <i className="fas fa-shopping-cart"></i>
            <span className="notification" id="total-cart-items">0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
