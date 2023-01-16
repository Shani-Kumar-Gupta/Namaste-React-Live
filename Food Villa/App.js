import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <h1 className="title" id="title" key="title">
    Food Villa
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Title />);