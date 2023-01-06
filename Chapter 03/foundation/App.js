import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {}, 'Hello Devs');
// How React.createElement get's executed?
// React.createElement => Returns an Object => Converted into HTML through React => Reander in the DOM (Using ReactDOM)

// JSX Syntax =>
// Create a h1 Tag
// This is valid Javascipt syntax
// Question: Is JSX html inside JavaScript is True or False? => True :( => False :)
// This (JSX) is html like syntax => Fancy way of writing HTML
// How JavaScript recognizes this syntax?????
// How does this work in browsers?

// How JSX executes behind the scenes?
// JSX (babel) => React.createElement => Returns an Object => Converted into HTML through React => Reander in the DOM (Using ReactDOM)
/*
Advantages of JSX:
  Readibility
  Mantainability
  Developer friendly
  Clean and less code
*/
const heading1 = (
  <h1 id="hello" key={1}>
    Namaste Devs
  </h1>
);

const div = React.createElement('div', {}, [heading, heading1]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading1);
