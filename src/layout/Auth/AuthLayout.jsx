import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AuthLayout.css";
import mainlogo from "../../assets/MPAY LOGO.png";

const AuthLayout = () => {
  return (
    <div className="authpage">
      <Link to="/" className="mainlogo">
        <img src={mainlogo} alt="mainlogo" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
