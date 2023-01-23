const heading = React.createElement("h1", {
  id: "heading"
}, "MY HEADING");
const heading1 = React.createElement("h1", {
  title: "heading1",
  className: "heading1",
  id: "heading1",
  key: "heading1",
}, "HEADING 1");

const heading2 = React.createElement("h2", {
  title: "heading2",
  className: "heading2",
  id: "heading2",
  key: "heading2",
}, "HEADING 2");

const container = React.createElement("div", {
  id: "container"
}, [heading1, heading2]);

console.log(heading);
console.log(heading.props.title);
console.log(heading.props.className);
console.log({...heading.props});
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing React Elemet into the render
root.render(container);

const head = document.createElement("h1");
head.innerHTML = `<b><em>Started with React</em></b>`;

// const container = ReactDOM.createRoot(document.getElementById("container"));
// container.render(container);
// const container = document.getElementById("container");
// container.appendChild(head);