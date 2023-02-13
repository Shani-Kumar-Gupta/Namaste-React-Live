import React from 'react';

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

const HeaderComponent = () => {
  return (
    <div>Header Component</div>
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