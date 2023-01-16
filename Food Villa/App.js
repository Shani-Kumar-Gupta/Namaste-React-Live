import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <h1 className="title" id="title" key="title">
    Food Villa
  </h1>
);

const HeaderComponent = () => {
  return (
    <div className="header__container">
      <Title />
      <div className="nav-items">
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

/* Step 1: Build your App Layout */
const AppLayout = () => {
  return (
    <>
      {/*
      Header
        - Logo
        - Nav Bar List Items (Right Side)
        - Cart
      Body
        - Search Bar
        - Restraunt List
          - Restraunt Card
            - Image
            - Name
            - Rating
            - Cusines List
      Footer
        - Ref Links
        - Copyright
        - Address
      */}
      <HeaderComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
