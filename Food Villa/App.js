import React from 'react';
import ReactDOM from 'react-dom/client';
import RestrauntList from './data';

const Title = () => (
  <div className="title__container">
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://cdn.dribbble.com/users/3005141/screenshots/5786598/befoodie.jpg"
      />
    </a>
    <h1 className="title" id="title">
      Food Villa
    </h1>
  </div>
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


// Config Driven UI: Configuration
const burgerKing = {
  name: "Burger King",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cchf34lzjd5unhgbgedu",
  cusines: ["Burgers", "American"],
  rating: "4.2"
}


/* Method 1: data mapping*/
const RestrauntCard = () => {
  let imgURL = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;
  return (
    <div className="restraunt__card">
      <img alt="burger king" src={`${imgURL}${RestrauntList[3].data.cloudinaryImageId}`} />
      <h2>{RestrauntList[1]?.data?.name}</h2>
      <h3>{RestrauntList[8]?.data?.cuisines}</h3> {/* Always do optional channing: Industry good practice */}
      <h4>{RestrauntList[1]?.data?.lastMileTravelString}</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body__container">
      <RestrauntCard restra/>
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer__container">
      <h1>Footer Component</h1>
    </div>
  );
};

/* Step 1: Build your App Layout */
const AppLayout = () => {
  return (
    <React.Fragment>
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
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

// React.Fragment - Component - It is like a empty tag <> </> - Empty tag - behind the screen React Fragment - Shorthand
// JSX can have only one parent element
const JSX = () => {
  return (
    // <React.Fragment></React.Fragment>
    <div style={{ backgroundColor: 'red' }}>
      <h1>JSX</h1>
      <h2>Second JSX</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
