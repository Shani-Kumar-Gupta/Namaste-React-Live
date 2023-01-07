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

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeader);

// Question 3 :- Create a functional Component using JSX (h1,h2,h3,inside div with class title)?

const Heading1 = () => {
  return (
    <h1 id="funcHead1" key="funckey1">Functional Comp. Heading 1</h1>
  )
}

const Heading2 = () => {
  return (
    <h2 id="funcHead2" key="funckey2">Functional Comp. Heading 2</h2>
  )
}

const Heading3 = () => {
  return (
    <h3 id="funcHead3" key="funckey3">Functional Comp. Heading 2</h3>
  )
}

const Header = () => {
  return (
    <div className='title'>
      <Heading1 />
      <Heading2 />
      <Heading3 />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);