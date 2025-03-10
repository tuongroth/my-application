import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  const handleToggle = () => {
    setCurrState(currState === "Login" ? "Sign Up" : "Login");
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the <a href="#">terms of use</a> & <a href="#">privacy policy</a>.</p>
        </div>

        <p className="login-popup-toggle">
          {currState === "Login" ? "Don't have an account?" : "Already have an account?"}  
          <span onClick={handleToggle}>{currState === "Login" ? " Sign Up" : " Login"}</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
