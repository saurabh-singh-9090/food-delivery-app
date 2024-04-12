import React from 'react';
import ReactDOM from 'react-dom/client';

//JSX - HTML like or XML like syntax
// JSX code is first transpiled into React Element which is an object.Then it gets converted into HTML element while rendering
// For multiline JSX we wrap it into ()
const jsxHeading = <h1 id="heading">Hello word using JSX</h1>;
console.log(jsxHeading); //It is also similar to the React element object

const Title = () => {
  return (
    <h1 className='head'>
      Title component 
    </h1>
  )
}

//Component Compositions (Components inside a Component)
const HeaderComponent = () => {
  return(
    <div id='container'>
      {Title()}
      <Title/>
      <Title></Title>
      <h1 id="heading">Hello word using React Functional Components</h1>
    </div>
  )
}
 
// Every rendering in React will happen inside root node
const root = ReactDOM.createRoot(document.getElementById("root"));  

// While rendering on the browser, the React element object gets converted into html element
// root.render(jsxHeading);
root.render(<HeaderComponent/>)
