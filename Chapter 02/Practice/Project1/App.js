/***
 *
 *
 * Created a server for you
 * Automatic Reload when something got changed - HMR: Hot Module Replacement (Parcel is doing for us)
 * How Parcel knows that something got changed - File Watcher Algorithms (Parcel is doing for us) - Written in C++
 * Parcle is doing so many things for us - That's required some space - Which handles using .parcel-cache
 * dist - minified version (development build for us and hosted on server) - npx parcel entrypoint
 * Minified production build - npx parcel build entrypoint
 * BUNDLING
 * Cleaning up our code
 * Dev and Production build
 * Super fast build algorithm
 * Image optimization
 * JS optimization
 * Caching while development
 * Compression
 * Compatible with older versions of browsers (using browserslist and babel packages)
 * enable HTTPS on dev - (npx parcel entrypoint --https)
 * Manages PORT numbers for multiple running projects
 * Consistent Hashing Alogorith to cache it up or bundling
 * Zero Configuration
 * COnsole log removal: for that required configuration (babel-plugin-transform-remove-console package)
 * 
 * Transitive Dependencies
 * 
 * ?.Anything that would be auto generated put inside the gitignore file (Generate on the Server)
 * ?.How will I make my project older browser compatible (using browserlist package) - COde compatible
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const title = React.createElement("h1", {
  id: "myTitle",
  key: "myTitle",
  className: "myTitle",
  style: {
    display: "flex",
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px"
  }
}, "Ignite React App: Production Ready");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);