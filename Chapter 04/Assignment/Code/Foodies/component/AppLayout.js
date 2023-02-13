import React from 'react';
import { images, RestaurantData } from '../constants';

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

const Title = () => {
  return (
    <div className="title__container">
      <a href="/">
        <img alt="foodies logo" src={images.logo} className="logo" />
      </a>
    </div>
  )
}

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
  )
}

const RestaurantCard = () => {
  let imgURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + RestaurantData?.[0]?.data?.cloudinaryImageId;
  return (
    <div className="restaurant__card">
      <img alt={RestaurantData?.[0]?.data?.name} src={imgURL} className="cardImg" />
      <h2>{RestaurantData?.[0]?.data?.name}</h2>
      <h3>{RestaurantData?.[0]?.data?.cuisines?.join(", ") }</h3>
      <h4>{RestaurantData?.[0]?.data?.lastMileTravelString }</h4>
    </div>
  )
}

const BodyComponent = () => {
  return (
    <div className="body__container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  )
}

const FooterComponent = () => {
  return (
    <div>Footer Component</div>
  )
}

/*
Config Driven UI: Config driven UI is a way of dynamically handle our UI through config which we will get from some backend API.
                  Whole UI is controled by a configuration which will receive from some backend API.
                  Control UI through backend API.
                  Based on config data which will receive from some backend API, UI will get rendered.
*/

const config = [
  {
    type: "carousel",
    cards: [
      {
        imageURL: "......",
        offer: "50% Off",
      },
      {
        imageURL: ".......",
        offer: "No Delivery Charges"
      }
    ]
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "Burger King",
      },
      {
        name: "KFC"
      }
    ]
  }
]

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  )
}

export default AppLayout;