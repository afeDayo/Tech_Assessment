import React, { useState } from "react";
import navlogo from "../../assets/MPAY LOGO.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../../hooks/useAuth";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBurgerClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLearnMoreClick = () => {
    if (!user) {
      navigate("/signup", { state: { from: "/learn" } });
    } else {
      navigate("/learn");
    }
  };

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
            <button onClick={handleLearnMoreClick}>LEARN MORE</button>
          </div>
        </div>
      </nav>
      <nav className="navbodytwo">
        <NavLink exact to="/" className="navlogotwo">
          <img className="logomob" src={navlogo} alt="navlogo" />
        </NavLink>
        <div className="navmob">
          <div className="navburger" onClick={handleBurgerClick}>
            <FaBars className="burger text-white" />
          </div>
          <div className={`navlinksdrop ${isDropdownOpen ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active">
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  CONTACT US
                </NavLink>
              </li>
              <div className="navbutton">
                <button onClick={handleLearnMoreClick}>LEARN MORE</button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
