import React from 'react';
import '../styles/SearchBar.css'; // Adjust the path according to your folder structure

const SearchBar = () => {
  return (
    <section>
      <nav className="searchnav">
        <i className="fa-solid fa-anchor" id="anchor"></i>
        <h2>Anchors</h2>
        <input type="text" id="searchfield" placeholder="Search product by name..." />
        <button className="searchicon">
          <i className="fa fa-search"></i>
        </button>
      </nav>
    </section>
  );
};

export default SearchBar;
