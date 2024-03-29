import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./HomeTwo.css";
import partners from "../../../assets/partner banks.png";
import ellipse from "../../../assets/Ellipse 12.png";
import card from "../../../assets/CARD.png";
import iphonepro from "../../../assets/iPhone 12 Pro 6.png";
import userf from "../../../assets/user friendly log.png";
import support from "../../../assets/support log.png";
import privat from "../../../assets/private logo.png";
import laptop from "../../../assets/laptop.png";
import hotspot from "../../../assets/hotspot.png";
import watch from "../../../assets/watch.png";
import diamond from "../../../assets/diamond.png";
import stats from "../../../assets/Group 1000002312.png";
import hat from "../../../assets/Vector 61.png";
import vec1 from "../../../assets/Vector 1.png";
import vec2 from "../../../assets/Vector2.png";
import vec3 from "../../../assets/Vector3.png";
import vec4 from "../../../assets/Vector4.png";
import vec5 from "../../../assets/vector5.png";
import vec6 from "../../../assets/Mask group.png";
import arrow from "../../../assets/arrow.png";
import pokkadot from "../../../assets/Circles.png";
import spirall from "../../../assets/Spiral 22.png";
import quotes from "../../../assets/Quote vector.png";
import recone from "../../../assets/Vector 62.png";
import profileone from "../../../assets/Ellipse 21.png";
import fintech from "../../../assets/sUPORTED PAYMENTS.png";
import poookt from "../../../assets/Circlebbs.png";
import invspir from "../../../assets/Spiral 3.png";
import { Link } from "react-router-dom";

const HomeTwo = () => {
  // ========================SCROLL REVEAL===============
  useEffect(() => {
    ScrollReveal().reveal(".partners", {
      duration: 1500,
      origin: "left",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".ellipse", {
      duration: 500,
      origin: "left",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".cardvv", {
      duration: 500,
      origin: "right",
      distance: "100px",
      delay: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".laptop", {
      duration: 300,
      origin: "top",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".hotspot", {
      duration: 300,
      origin: "right",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".watch", {
      duration: 300,
      origin: "right",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".diamond", {
      duration: 300,
      origin: "bottom",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".servcardcon", {
      duration: 1500,
      origin: "bottom",
      distance: "500px",
      delay: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="mainhome">
      <div className="partners">
        <img src={partners} alt="partners" />
      </div>

      {/* ============================================================ */}

      <div className="homedig">
        <div className="homefin">
          <img className="ellipse" src={ellipse} alt="circle" />
          <img className="cardvv" src={card} alt="card" />
          <img className="iphonepro" src={iphonepro} alt="iphone" />
        </div>
        <div className="homemanage">
          <h2>
            Manage Everything in Your <span>Hand</span>
          </h2>
          <p>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>
          <div className="manageall">
            <div className="mallone">
              <div>
                <img src={userf} alt="" />
              </div>
              <div>
                <h4>User Friendly</h4>
                <p>
                  Augue nulla turpis consectetur pharetra fames. Fermentum
                  rhoncus lectus{" "}
                </p>
              </div>
            </div>
            <div className="malltwo">
              <div>
                <img src={support} alt="" />
              </div>
              <div>
                <h4>Best Support</h4>
                <p>
                  Augue nulla turpis consectetur pharetra fames. Fermentum
                  rhoncus lectus{" "}
                </p>
              </div>
            </div>
            <div className="mallthree">
              <div>
                <img src={privat} alt="" />
              </div>
              <div>
                <h4>Secure</h4>
                <p>
                  Augue nulla turpis consectetur pharetra fames. Fermentum
                  rhoncus lectus{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      <div className="homebiz">
        <div className="homebiztext">
          <h2>
            Enjoy <span>Enormous</span> Business Promos
          </h2>
          <p>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>
          <div className="bizbut">
            <Link>GET STARTED</Link>
          </div>
        </div>
        <div className="homebizimg">
          <img className="hat" src={hat} alt="hatpic" />
          <img className="stats" src={stats} alt="stats" />
          <img className="laptop" src={laptop} alt="icon1" />
          <img className="hotspot" src={hotspot} alt="icon2" />
          <img className="watch" src={watch} alt="icon3" />
          <img className="diamond" src={diamond} alt="icon4" />
        </div>
      </div>
      {/* =========================================================== */}

      <div className="servsec">
        <div className="servhead">
          <h2>Our Services</h2>
          <p>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna{" "}
          </p>
        </div>
        <div className="servcardcon">
          <div className="servrowone">
            <div className="serv">
              <img src={vec1} alt="vec" />
              <h4>Payment Management</h4>
              <p>
                Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
                lectus condimentum aug
              </p>
              <Link className="lmarr">
                Learn More
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
            <div className="serv">
              <img src={vec2} alt="vec" />
              <h4>Personal Dashboard</h4>
              <p>
                Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
                lectus condimentum aug
              </p>
              <Link className="lmarr">
                Learn More
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
            <div className="serv">
              <img src={vec3} alt="vec" />
              <h4>Integrated Payment</h4>
              <p>
                Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
                lectus condimentum aug
              </p>
              <Link className="lmarr">
                Learn More
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
          <div className="servrowtwo">
            <div className="serv">
              <img src={vec4} alt="vec" />
              <h4>Business Tracking</h4>
              <p>
                Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
                lectus condimentum aug
              </p>
              <Link className="lmarr">
                Learn More
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
            <div className="serv">
              <img className="ordvec" src={vec5} alt="vec" />
              <h4>Credit and Debit card</h4>
              <p>
                Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
                lectus condimentum aug
              </p>
              <Link className="lmarr">
                Learn More
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
            <div className="serv">
              <img className="ordvec" src={vec6} alt="vec" />
              <h4>Credit and Debit card</h4>
              <p>
                Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
                lectus condimentum aug
              </p>
              <Link className="lmarr">
                Learn More
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
        <img className="pokadots" src={pokkadot} alt="pokadots" />
        <img className="spiralll" src={spirall} alt="spiralll" />
      </div>
      {/* ========================================================== */}
      <div className="quotesec">
        <img className="quote" src={quotes} alt="quotes" />
        <img className="recone" src={recone} alt="rectangle" />
        <div className="qouttext">
          <p>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>
          <div className="alisha">
            <div>
              <img src={profileone} alt="profile" />
            </div>
            <div className="alisgprof">
              <h4 className="m-0">Babatunde Alisha</h4>
              <p className="m-0">Customer</p>
            </div>
          </div>
        </div>
      </div>
      {/* ====================================================== */}
      <div className="finsecc">
        <div className="fintext">
          <h2>Support Payment From Every Platform</h2>
          <p>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>
          <h5>Supported Payment</h5>
          <img src={fintech} alt="" />
        </div>
        <img className="poookdot" src={poookt} alt="pokadot" />
      </div>
      {/* ======================================================= */}
      <div className="purpsec">
        <div className="purpkep">
          <div className="subemi">
            <h2>Keep Updated About Our Product</h2>
            <div className="eiminp">
              <input type="text" placeholder="YOUR EMAIL ADDRESS" />
              <Link>SUBMIT</Link>
            </div>
          </div>
          <img className="litspit" src={invspir} alt="litspiral" />
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
