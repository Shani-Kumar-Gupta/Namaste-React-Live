import React from 'react';
import {images} from '../constants'; // Named Export

const Title = () => {
  return (
    <div className="title__container">
      <a href="/">
        <img alt="foodies logo" src={images.logo} className="logo" />
      </a>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header__container">
      <Title />
      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;

/*
Two ways of exporting files-
  1. Default Export - If our file having multiple function by default we can only export one file as default. We can import using any name for the function if it's default exported.
  2. Named Export - 
*/