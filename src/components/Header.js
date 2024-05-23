import { useContext, useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from '../assets/brand_logo.png';
import UserContext from '../utils/UserContext'

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between px-10 py-2 bg-orange-200">
      <div className="ml-6">
        <img className="w-15 h-12" src={logo} />
      </div>
      <div className="flex">
        <ul className="flex justify-between flex-row p-2 items-center">
          <li className="px-4">OnlineStatus: {onlineStatus ? '🟢':'🔴'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
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
