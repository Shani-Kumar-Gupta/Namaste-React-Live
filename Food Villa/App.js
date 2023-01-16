import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <h1 className="title" id="title" key="title">
    Food Villa
  </h1>
);

/* Step 1: Build your App Layout */
const AppLayout = () => {
  return (
    {
      /*
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
      */
    }
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Title />);