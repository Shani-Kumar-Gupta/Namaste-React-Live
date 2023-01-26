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