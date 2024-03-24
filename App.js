const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React JS"
);
console.log(heading) //heading is a React element in form of an object
 
// Every rendering in React will happen inside root node
const root = ReactDOM.createRoot(document.getElementById("root"));  

// While rendering on the browser, the React element object gets converted into html element
root.render(heading);
