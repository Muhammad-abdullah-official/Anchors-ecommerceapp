import React from 'react';
import '../styles/Morale.css'; // Adjust the path according to your folder structure
import vectorImage from '../assets/mainpic.svg'; // Adjust the path according to your folder structure

const Morale = () => {
  return (
    <div className="morale">
      <div className="tag-lines">
        <h1>Anchors Store</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni ad
          eaque cum non ex? Ducimus facilis aspernatur quos sed, illo dolorum nobis
          sint! Dolorem nesciunt itaque veritatis? Corporis aspernatur nihil voluptate
          expedita nemo nulla doloribus temporibus, officiis quibusdam. Quasi
          corporis perferendis beatae temporibus neque asperiores quam totam saepe
          doloribus! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Doloribus voluptatibus totam nobis libero amet natus? Eos tempore enim
          tempora totam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti, commodi.
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </p>
      </div>
      <div className="vectorimage">
        <img src={vectorImage} alt="vectorimage" />
      </div>
    </div>
  );
};

export default Morale;
