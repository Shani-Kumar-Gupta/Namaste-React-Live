import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', null, 'Laying The React Foundation');

const rooot = ReactDOM.createRoot(document.getElementById('root'));

rooot.render(heading);