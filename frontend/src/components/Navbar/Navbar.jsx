import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />

      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />

        <div className='navbar-cart'>
          <img src={assets.basket_icon} alt="Cart" />
          <div className="dot"></div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
