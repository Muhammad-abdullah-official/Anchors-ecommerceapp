import React from 'react';
import '../styles/NavBar3.css'; // Adjust the path according to your folder structure

const NavBar3 = () => {
  return (
    <nav className="centrenav">
      <div className="emailnumber">
        <div className="number">
          <i className="fa fa-phone"></i>
          +92 3456897534
        </div>
        <div className="email">
          <i className="fa fa-envelope"></i>
          anchors@gmail.com
        </div>
      </div>
      <div className="shopname">
        <i className="fa-solid fa-store" id="fastore"></i>
        <h1 className="anch">Anchor,s <span>Store</span></h1>
        <p>Everything Here</p>
      </div>
      <div className="contact">
        <i className="fa fa-map"></i> Contact Us
      </div>
    </nav>
  );
};

export default NavBar3;
