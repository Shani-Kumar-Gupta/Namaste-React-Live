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

/*
1. Currently my all restaurants cards having same data and some how we have to pass some dynamic data to each card -> props as an attibute
*/
/* Mapping Static Data */
// const RestaurantCard = () => {
//   let imgURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + RestaurantData?.[0]?.data?.cloudinaryImageId;
//   return (
//     <div className="restaurant__card">
//       <img alt={RestaurantData?.[0]?.data?.name} src={imgURL} className="cardImg" />
//       <h2>{RestaurantData?.[0]?.data?.name}</h2>
//       <h3>{RestaurantData?.[0]?.data?.cuisines?.join(", ") }</h3>
//       <h4>{RestaurantData?.[0]?.data?.lastMileTravelString }</h4>
//     </div>
//   )
// }

/* Mapping dynamic data - passing as props */

// const RestaurantCard = (props) => {
//   console.log("my props", props);
//   let imgURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props?.restaurantDetails?.data?.cloudinaryImageId;
//   return (
//     <div className="restaurant__card">
//       <img alt={props?.restaurantDetails?.data?.name} src={imgURL} className="cardImg" />
//       <h2>{props?.restaurantDetails?.data?.name}</h2>
//       <h3>{props?.restaurantDetails?.data?.cuisines?.join(", ") }</h3>
//       <h4>{props?.restaurantDetails?.data?.lastMileTravelString }</h4>
//     </div>
//   )
// }

/* Receive props as object destructure */
// const RestaurantCard = ({restaurantDetails}) => {
//   console.log("my props", restaurantDetails);
//   const {name, cuisines, lastMileTravelString, cloudinaryImageId} = restaurantDetails;
//   let imgURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantDetails?.data?.cloudinaryImageId;
//   return (
//     <div className="restaurant__card">
//       <img alt={restaurantDetails?.data?.name} src={imgURL} className="cardImg" />
//       <h2>{restaurantDetails?.data?.name}</h2>
//       <h3>{restaurantDetails?.data?.cuisines?.join(", ") }</h3>
//       <h4>{restaurantDetails?.data?.lastMileTravelString }</h4>
//     </div>
//   )
// }

// const RestaurantCard = ({restaurantDetails}) => {
//   console.log("my props", restaurantDetails);
//   const {name, cuisines, lastMileTravelString, cloudinaryImageId} = restaurantDetails?.data;
//   let imgURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId;
//   return (
//     <div className="restaurant__card">
//       <img alt={name} src={imgURL} className="cardImg" />
//       <h2>{name}</h2>
//       <h3>{cuisines?.join(", ") }</h3>
//       <h4>{lastMileTravelString }</h4>
//     </div>
//   )
// }

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

/*
props - properties (This is way of passing data to the component using props)
        passing data from parent component to child component
*/

// const BodyComponent = () => {
//   return (
//     <div className="body__container">
//       {/* {RestaurantCard(RestaurantData[0])} */}
//       <RestaurantCard restaurantDetails={RestaurantData[0]} /> {/* Passing restaurantDetails as props - look like an html attribute */}
//       <RestaurantCard restaurantDetails={RestaurantData[1]} />
//       <RestaurantCard restaurantDetails={RestaurantData[2]} />
//       <RestaurantCard restaurantDetails={RestaurantData[3]} />
//     </div>
//   )
// }

// const BodyComponent = () => {
//   return (
//     <div className="body__container">
//       {/* {RestaurantCard(RestaurantData[0])} */}
//       <RestaurantCard
//         name={RestaurantData[0]?.data?.name}
//         cuisines={RestaurantData[0]?.data?.cuisines}
//         lastMileTravelString={RestaurantData[0]?.data?.lastMileTravelString}
//         cloudinaryImageId={RestaurantData[0]?.data?.cloudinaryImageId}
//       />{' '}
//       {/* Passing restaurantDetails as props - look like an html attribute */}
//       <RestaurantCard
//         name={RestaurantData[1]?.data?.name}
//         cuisines={RestaurantData[1]?.data?.cuisines}
//         lastMileTravelString={RestaurantData[1]?.data?.lastMileTravelString}
//         cloudinaryImageId={RestaurantData[1]?.data?.cloudinaryImageId}
//       />
//       <RestaurantCard
//         name={RestaurantData[2]?.data?.name}
//         cuisines={RestaurantData[2]?.data?.cuisines}
//         lastMileTravelString={RestaurantData[2]?.data?.lastMileTravelString}
//         cloudinaryImageId={RestaurantData[2]?.data?.cloudinaryImageId}
//       />
//       <RestaurantCard
//         {...RestaurantData[3]?.data}
//       />
//     </div>
//   );
// };

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
  return <div>Footer Component</div>;
};

/*
Config Driven UI: Config driven UI is a way of dynamically handle our UI through config which we will get from some backend API.
                  Whole UI is controled by a configuration which will receive from some backend API.
                  Control UI through backend API.
                  Based on config data which will receive from some backend API, UI will get rendered.
*/

const config = [
  {
    type: 'carousel',
    cards: [
      {
        imageURL: '......',
        offer: '50% Off',
      },
      {
        imageURL: '.......',
        offer: 'No Delivery Charges',
      },
    ],
  },
  {
    type: 'restaurants',
    cards: [
      {
        name: 'Burger King',
      },
      {
        name: 'KFC',
      },
    ],
  },
];

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


/* What is VIRTUAL DOM:
  We keep a representation of our DOM tree in a virtual DOM tree with us.

  Why do we need Virtual DOM in React? and Why React is fast?
  - Reconsiliation in React - It's an algorithm that's React uses to diff one tree from another and ditermine what's needs to changes in  UI.
  - And just update or rerender just the portions of it not whole application.

  Why do we use keys?
  Note: If you have a multiple children with the same element then always use key attribute else it will re-render the whole tree if any updation or deletion happens.

*/
