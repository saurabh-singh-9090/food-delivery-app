import { useContext, useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from '../assets/brand_logo.png';
import UserContext from '../utils/UserContext'
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("CART Items ------>>>>",cartItems)

  return (
    <div className="flex justify-between flex-wrap px-10 py-2 bg-green-600 text-white sticky top-0 z-10 font-normal">
      <div className="pl-36">
        <Link to="/"><img className="w-15 h-12 hidden" src={logo} /></Link>
      </div>
      <div className="flex pr-10">
        <ul className="flex justify-between flex-row p-2 items-center">
          <li className="px-4 hidden lg:block">OnlineStatus: {onlineStatus ? '🟢':'🔴'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          {/* <li className="px-4"><Link to="/grocery">Grocery</Link></li> */}
          {/* <li className="px-4"><Link to="/about">About Us</Link></li> */}
          {/* <li className="px-4"><Link to="/contact">Contact Us</Link></li> */}
          <li className="px-4 bg-white rounded-full text-orange-700"><Link to="/cart">🛒{cartItems.length}</Link></li>
          {/* On clicking login-btn entire Header component re-renders, but only Login btn is changed and rest items are as it is */}
          <li className="px-4" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>
            {btnName}
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
