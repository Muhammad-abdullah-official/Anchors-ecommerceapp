import React from 'react';
import '../styles/Product.css';

const allProducts = [
  { title: 'Adidas Bag ', category: 'Bags', price: 120, thumbnail: '../assets/ProductImages/Bags/adidasbag1.jpg' },
  { title: 'Adidas Bag ', category: 'Bags', price: 140, thumbnail: '/assets/ProductImages/Bags/adidasbag2.jpg' },
  { title: 'Nike Bag ', category: 'Bags', price: 90, thumbnail: '/assets/ProductImages/Bags/nikebags1.jpg' },
  { title: 'Nike Bag ', category: 'Bags', price: 100, thumbnail: '/assets/ProductImages/Bags/nikebags2.jpg' },
  { title: 'Nike Bag ', category: 'Bags', price: 90, thumbnail: '/assets/ProductImages/Bags/nikebags1.jpg' },
  { title: 'Nike Bag ', category: 'Bags', price: 100, thumbnail: '/assets/ProductImages/Bags/nikebags2.jpg' },

];

const Product = ({ addItemToCart }) => {
  return (
    <div className="products" id="products">
      <h1 className="products-heading">All Products</h1>
      <div className="products-grid">
        {allProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
            <h2>{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
