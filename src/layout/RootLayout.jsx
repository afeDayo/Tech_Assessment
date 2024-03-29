import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="allbody">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
