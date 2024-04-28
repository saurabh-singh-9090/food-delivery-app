import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="logo-container">
      <div className="header">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
