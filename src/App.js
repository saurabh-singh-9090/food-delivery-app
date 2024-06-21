import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
// Lazy loading for Grocery component
const Grocery = lazy(() => import('./components/Grocery'))
import UserContext from './utils/UserContext';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Footer from './components/Footer';

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(()=>{
        //Some authentication code logic
        //Make an API call and send username and password
        const data = {
            name: "Saurabh",
        }
        setUserName(data.name)
    },[]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="bg-white">
          <Header />
          {/* Here, Outlet will be replaced by the children component of AppLayout component based on the route given by the user */}
          <Outlet />
          <Footer/>
        </div>
      </UserContext.Provider>
    </Provider>
  );
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
            // {
            //     path: "/about",
            //     element: <About/>
            // },
            // {
            //     path: "/contact",
            //     element: <ContactUs/>
            // },
            // {
            //     path: "/grocery",
            //     element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense> 
            // },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },     
            {
                path: "/cart",
                element: <Cart/>
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
