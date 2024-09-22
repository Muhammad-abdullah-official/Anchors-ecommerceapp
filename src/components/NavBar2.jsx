import React from 'react';
import '../styles/NavBar2.css'; // Adjust the path according to your folder structure

const NavBar2 = () => {
  return (
    <nav className="topnav">
      <div className="leftnav">
        <span>Welcome to My E-Commerce Store</span>
        <a href="">Register</a> OR
        <a href="">Login</a>
      </div>
      <div className="rightnav">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-whatsapp"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-pinterest"></i>
      </div>
    </nav>
  );
};

export default NavBar2;
