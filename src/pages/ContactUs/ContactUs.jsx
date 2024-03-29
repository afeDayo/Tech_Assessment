import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import building from "../../assets/building.png";
import callme from "../../assets/callme.png";
import mialme from "../../assets/compemail.png";
import smile from "../../assets/smile.png";
import sidepooka from "../../assets/sidepook.png";
import amueba from "../../assets/amueba.png";
import invspir from "../../assets/Spiral 3.png";
import secbackg from "../../assets/conblacbk.png";
import concircle from "../../assets/ContantSpiral 2.png";

const ContactUs = () => {
  // ========================SCROLL REVEAL===============
  useEffect(() => {
    ScrollReveal().reveal(".formcon", {
      duration: 1500,
      origin: "right",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
      opacity: 0,
    });
  }, []);

  // ================CAROSEL================
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 6000); // Change interval to 6 seconds to account for both transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contact-us">
      <img className="secbackgsz" src={secbackg} alt="backg" />
      <div className="contacttits">
        <h1>CONTACT US</h1>
        <img className="lastcir" src={concircle} alt="lastcircle" />
      </div>
      {/* ======================================================= */}
      <div className="touchsec">
        <div className="touchtext">
          <h2>Get In Touch</h2>
          <p>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>
          <div className="touchme">
            <div className="touchhim">
              <img src={building} alt="office" />
              <div className="touchher">
                <h4>Office Address</h4>
                <p>
                  Augue nulla turpis consectetur pharetra fames. Fermentum
                  rhoncus lectus{" "}
                </p>
              </div>
            </div>
            <div className="touchhim">
              <img src={callme} alt="call" />
              <div className="touchher">
                <h4>Phone Number</h4>
                <p>+234 567 9805 606</p>
                <p>+1 54 567805 606</p>
              </div>
            </div>
            <div className="touchhim">
              <img src={mialme} alt="email" />
              <div className="touchher">
                <h4>Email Address</h4>
                <p>Support@mpay.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="formcon">
          <h3>Your Details</h3>
          <form action="">
            <div className="inform">
              <div className="formin">
                <h4>
                  Name <span>*</span>
                </h4>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="formin">
                <h4>
                  Email Address <span>*</span>
                </h4>
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="formin">
                <h4>
                  Subject <span>*</span>
                </h4>
                <input type="text" placeholder="Subject Message" />
              </div>
              <div className="forminher">
                <h4>
                  Comment/Questions <span>*</span>
                </h4>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message..."
                ></textarea>
              </div>
            </div>
            <Link>SUBMIT</Link>
          </form>
        </div>
      </div>
      {/* ====================================================== */}
      <div className="avalable">
        <div className="avalaimg">
          <img src={smile} alt="smile" />
        </div>
        <div className="avlabtext">
          <div className="carousel">
            <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
              <h2>24/7 Availability</h2>
            </div>
            <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
              <h2>Fast Response</h2>
            </div>
          </div>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. Eu odio at faucibus massa ac in lectus cras
            blandit. Bibendum sapien non quis rhoncus.
          </p>
        </div>
        <img className="sidepookad" src={sidepooka} alt="pokadot" />
        <img className="amueba" src={amueba} alt="amueba" />

        {/* =========== */}
        <div className="purpsecv">
          <div className="purpkepv">
            <div className="subemiv">
              <h2>Keep Updated About Our Product</h2>
              <div className="eiminpv">
                <input type="text" placeholder="YOUR EMAIL ADDRESS" />
                <Link>SUBMIT</Link>
              </div>
            </div>
            <img className="litspitv" src={invspir} alt="litspiral" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
