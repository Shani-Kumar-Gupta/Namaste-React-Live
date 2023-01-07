import React from 'react';
import ReactDOM from 'react-dom/client';

// Question 1 :- Create a Nested header Element using React.createElement (h1,h2,h3,inside div with class title)?
const heading1 = React.createElement(
  'h1',
  {
    id: 'heading1',
    key: 'h1',
  },
  'Heading 1'
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'heading2',
    key: 'h2',
  },
  'Heading 2'
);

const heading3 = React.createElement(
  'h3',
  {
    id: 'heading3',
    key: 'h3',
  },
  'Heading 3'
);

const header = React.createElement(
  'div',
  {
    className: 'title',
  },
  [heading1, heading2, heading3]
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(header);

// Question 2 :- Create a Nested header Element using JSX (h1,h2,h3,inside div with class title)?

const jsxHeading1 = (
  <h1 id="jsx-head1" key="key1">
    JSX Heading 1
  </h1>
);

const jsxHeading2 = (
  <h2 id="jsx-head2" key="key2">
    JSX Heading 2
  </h2>
);

const jsxHeading3 = (
  <h3 id="jsx-head3" key="key3">
    JSX Heading 3
  </h3>
);

const jsxHeader = (
  <div class="title">
    {jsxHeading1}
    {jsxHeading2}
    {jsxHeading3}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeader);
