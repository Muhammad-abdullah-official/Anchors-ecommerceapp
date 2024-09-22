import React from 'react';
import '../styles/Checkout.css'; 

const Checkout = ({ cartItems, totalPrice, setIsOpen }) => {
  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      console.log('Checking out with items:', cartItems);
      alert('Proceeding to checkout');
    } else {
      alert('No items in the cart');
    }
  };

  return (
    <div className="checkout" id="checkout">
      <button id="xmark-button" onClick={handleCloseCart}>
        <i className="fa-solid fa-xmark" id="cart-close-button"></i>
      </button>

      <h1>Your Cart</h1>

      <div className="cart-item-container">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => <p key={index}>{item.title}</p>)
        ) : (
          <p>No Products Selected</p>
        )}
      </div>

      <div className="details-bill">
        <p>Total price: $ <span id="total-bill">{totalPrice}</span></p>
      </div>

      <button id="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
