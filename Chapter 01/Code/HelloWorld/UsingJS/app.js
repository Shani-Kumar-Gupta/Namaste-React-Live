// Creating h1 html element using document web API
const heading = document.createElement('h1');

// return content used inside h1 tag in the dom
heading.innerHTML = 'Hello World! 😍 I love React';

// accessing the root element using document web API: getElementById
const root = document.getElementById('root');

// append the heading element to the root element
root.appendChild(heading);
