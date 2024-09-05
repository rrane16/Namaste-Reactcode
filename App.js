const heading = React.createElement(
  "h1",
  { id: "djdj" },
  "hello world from React"
);

console.log("heading", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root", root);

root.render(heading);
document.title = "bye";

console.log("root after", root);
