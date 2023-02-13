import React from 'react';
import {images} from '../constants';

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
        <img alt="foodies logo" src={images.logo} />
      </a>
    </div>
  )
}

const HeaderComponent = () => {
  return (
    <div className="header__container">
      <Title />
    </div>
  )
}

const BodyComponent = () => {
  return (
    <div>Body Component</div>
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
      <div>Hii AppLayout</div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  )
}

export default AppLayout;