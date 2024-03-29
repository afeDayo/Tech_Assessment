import React from "react";
import navlogo from "../../assets/MPAY LOGO.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

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
    </div>
  );
};

export default NavBar;
