import React from 'react';
import '../styles/ContactPage.css'; // Adjust the path according to your folder structure

const ContactPage = () => {
  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <input type="text" placeholder='Enter your name' className='input-field' />
      <input type="text" placeholder='Enter delivery address' className='input-field' />
      <input type="tel" placeholder='Enter contact number' className='input-field' />
      <textarea placeholder='Description' className='input-field description' />
      <button className='btn'>Place Order</button>
    </div>
  );
}

export default ContactPage;
