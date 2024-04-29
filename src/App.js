import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
  return(
    <div className='app'>
      <Header/>
      {/* Here, Outlet will be replaced by the children component of AppLayout component based on the route given by the user */}
      <Outlet/> 
    </div>
  )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },            
        ],
        errorElement: <Error/>,
    },
])
 
// Every rendering in React will happen inside root node
const root = ReactDOM.createRoot(document.getElementById("root"));  

// While rendering on the browser, the React element object gets converted into html element
// root.render(jsxHeading);
root.render(<RouterProvider router={appRouter}/>)
