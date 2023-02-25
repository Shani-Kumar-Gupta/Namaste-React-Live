import React from 'react';
import { images, RestaurantData } from '../constants'; // Named Import
import HeaderComponent from './Header'; // Default Import

// import * as constData from '../constants';
// console.log(constData.images);

/***** Project Planning *******/
/*
  Header Component
    Logo and Title
    Navigation Item
      Home
      About Us
      Contact
      Sign in
      Offers
      Support
      Cart
  Body Component
    Search Bar
    Restaurant Card
      Image
      Description
      Prize
      Rating
      Cuisines
  Footer Component
    Reference Link
    Copyright
    Address
*/

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  let imgURL =
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
    cloudinaryImageId;
  return (
    <div className="restaurant__card">
      <img alt={name} src={imgURL} className="cardImg" />
      <h2>{name}</h2>
      <h3>{cuisines?.join(', ')}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body__container">
      {RestaurantData.map((restaurant) => {
        return <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data}/>
      })}
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer__container">
      <h2>Foodies</h2>
      <h3>Created By 😃 <b>Shani Kumar Gupta</b> &#169;2023</h3>
    </div>
  )
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

export default AppLayout;