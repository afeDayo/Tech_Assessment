import React from "react";
import footlogo from "../../assets/MPAY LOGO foot.png";
import apple from "../../assets/apple.png";
import googlep from "../../assets/googleplay.png";
import azula from "../../assets/azular.png";
import socialm from "../../assets/social media.png";
import line2 from "../../assets/Line 2.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footsec">
      <footer>
        <div className="topfoot">
          <div className="mainfoott">
            <img src={footlogo} alt="footlogo" />
            <p>0ne Application for Every Transaction</p>
            <div className="footapp">
              <img src={apple} alt="apple" />
              <img src={googlep} alt="googlep" />
              <img src={azula} alt="azula" />
            </div>
          </div>
          <div className="footlinks">
            <div className="feet">
              <h4>Other Pages</h4>
              <div>
                <Link>Home</Link>
                <Link>About Us</Link>
                <Link>Contact Us</Link>
                <Link>Services</Link>
              </div>
            </div>
            <div className="feet">
              <h4>Quick Links</h4>
              <div>
                <p>Privacy Policy</p>
                <p>Disclaimer</p>
                <p>Security</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="feet">
              <h4>Social Media</h4>
              <div>
                <p className="fettex">
                  Our Support and Sales team are always available 24/7 to answer
                  your queries
                </p>
                <img src={socialm} alt="socialmedia" />
              </div>
            </div>
          </div>
        </div>
        <div className="botfeet">
          <img src={line2} alt="line" />
          <div className="floorfeet">
            <p>MPay by Mickietyronne</p>
            <p>
              Copyright, <span>&copy;</span> 2023, All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
