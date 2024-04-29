import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="logo-container">
      <div className="header">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          {/* On clicking login-btn entire Header component re-renders, but only Login btn is changed and rest items are as it is */}
          <button className="login-btn" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
