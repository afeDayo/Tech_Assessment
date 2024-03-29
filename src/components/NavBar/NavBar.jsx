import React from "react";
import navlogo from "../../assets/MPAY LOGO.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navsec">
      <nav className="navbody">
        <NavLink exact to="/" className="navlogo">
          <img src={navlogo} alt="navlogo" />
        </NavLink>
        <div className="navlinks">
          <NavLink exact to="/" activeClassName="active">
            HOME
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            ABOUT US
          </NavLink>
          <NavLink to="/services" activeClassName="active">
            SERVICES
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            CONTACT US
          </NavLink>
          <div className="navbutton">
            <NavLink to="/learn">LEARN MORE</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
