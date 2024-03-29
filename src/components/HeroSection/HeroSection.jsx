import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import outcome from "../../assets/Frame 48.png";
import iphone from "../../assets/iPhone 13 Pro Mockup Right View.png";
import oval from "../../assets/Rectangle 55.png";
import spiral from "../../assets/Spiral 2.png";

const HeroSection = () => {
  useEffect(() => {
    ScrollReveal().reveal(".spiral", {
      duration: 500,
      origin: "right",
      distance: "0px",
      delay: 100,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".outcome", {
      duration: 500,
      origin: "top",
      distance: "50px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".iphone", {
      duration: 500,
      origin: "bottom",
      distance: "50px",
      delay: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="herosec">
      <div className="herotext">
        <h1>
          FASTEST <span>PAYMENT METHOD EVER</span>
        </h1>
        <p>
          Massa cursus cum in at tincidunt nisl id nisl. In ac viverra quis
          massa in pharetra praesent. Nisl in torto bgbdsudhg hdhjdkjAugue nulla
          turpis consectetur pharetra fames. Fermentum rhoncus lectus
          condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus
          vitae elit est tellus porta malesuada ut arcu.
        </p>
        <div className="herobut">
          <Link>LEARN MORE</Link>
        </div>
      </div>
      <div className="heroimg">
        <img className="outcome" src={outcome} alt="outcome" />
        <img className="iphone" src={iphone} alt="iphone" />
        <img className="oval" src={oval} alt="oval" />
        <img className="spiral" src={spiral} alt="spiral" />
      </div>
    </div>
  );
};

export default HeroSection;
