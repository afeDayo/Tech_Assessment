import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomeTwo from "./HomeTwo/HomeTwo";
import "./Home.css";

const Home = () => {
  return (
    <div className="homebody">
      <HeroSection />
      <HomeTwo />
    </div>
  );
};

export default Home;
