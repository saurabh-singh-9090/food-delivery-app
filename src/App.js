import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';


const AppLayout = () => {
  return(
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}
 
// Every rendering in React will happen inside root node
const root = ReactDOM.createRoot(document.getElementById("root"));  

// While rendering on the browser, the React element object gets converted into html element
// root.render(jsxHeading);
root.render(<AppLayout/>)
