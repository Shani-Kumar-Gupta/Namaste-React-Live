import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
  'h1',
  {
    style: {
      color: 'white',
    },
    key: 'title',
  },
  'Namaste React'
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'heading2',
    className: 'haeding2',
    key: 'heading2',
  },
  'Shani This Side 😊 Happy Learning React!'
);

const container = React.createElement(
  'div',
  {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      fontSize: '30px',
      backgroundColor: 'lightgreen',
    },
  },
  [heading1, heading2]
);

console.log('Heading', heading1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
