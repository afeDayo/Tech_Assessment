import React, { useEffect } from "react";
import "./Services.css";
import usefrend from "../../assets/user friendly log.png";
import upoort from "../../assets/support log.png";
import lockedp from "../../assets/private logo.png";
import sporo from "../../assets/Spiral 002.png";
import serena from "../../assets/serena 52.png";
import cutegirl from "../../assets/cutegirl 53.png";
import patbank from "../../assets/partner banks.png";
import vec1 from "../../assets/Vector 1.png";
import vec2 from "../../assets/Vector2.png";
import vec3 from "../../assets/Vector3.png";
import vec4 from "../../assets/Vector4.png";
import vec5 from "../../assets/vector5.png";
import vec6 from "../../assets/Mask group.png";
import arrow from "../../assets/arrow.png";
import laptop from "../../assets/laptop.png";
import hotspot from "../../assets/hotspot.png";
import watch from "../../assets/watch.png";
import diamond from "../../assets/diamond.png";
import stats from "../../assets/Group 1000002312.png";
import hat from "../../assets/Vector 61.png";
import ssuport from "../../assets/sUPORTED PAYMENTS.png";
import indwoman from "../../assets/INDWOM 54.png";
import supagirl from "../../assets/supagirl 55.png";
import supapoka from "../../assets/Ccccc.png";
import balll from "../../assets/Ellipse 12.png";
import mpcard from "../../assets/CARD vvv.png";
import logomaster from "../../assets/logomaster.png";
import logovisa from "../../assets/logovisa.png";
import invspir from "../../assets/Spiral 3.png";
import secbackg from "../../assets/Vector bk.png";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const Services = () => {
  // ========================SCROLL REVEAL===============
  useEffect(() => {
    ScrollReveal().reveal(".toimgone", {
      duration: 500,
      origin: "left",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".toimgtwo", {
      duration: 500,
      origin: "left",
      distance: "50px",
      delay: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".patbank", {
      duration: 1500,
      origin: "left",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".servcardcon", {
      duration: 1500,
      origin: "bottom",
      distance: "500px",
      delay: 500,
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

    ScrollReveal().reveal(".countsec", {
      duration: 2000,
      origin: "right",
      distance: "0px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".mpaycard", {
      duration: 1000,
      origin: "left",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="servicespage">
      <img className="secbackgs" src={secbackg} alt="backg" />
      <div className="viceshead">
        <h1>OUR SERVICES</h1>
        <p>
          Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
          lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
          tellus vitae elit est tellus porta malesuada ut arcu.
        </p>
        <img className="spororo" src={sporo} alt="spiral" />
      </div>
      {/* ============================================================ */}
      <div className="suopsec">
        <div className="eachsoup">
          <img src={usefrend} alt="UI" />
          <h4>User Friendly</h4>
          <p>Augue nulla turpis consectetur pharetra fames. rhoncus lectus </p>
        </div>
        <div className="eachsoup">
          <img src={upoort} alt="customers" />
          <h4>Best Support</h4>
          <p>Augue nulla turpis consectetur pharetra fames. rhoncus lectus</p>
        </div>
        <div className="eachsoup">
          <img src={lockedp} alt="padlock" />
          <h4>Secure</h4>
          <p>Augue nulla turpis consectetur pharetra fames. rhoncus lectus</p>
        </div>
      </div>
      {/* ======================================================= */}
      <div className="tosec">
        <div className="toimg">
          <img className="toimgone" src={serena} alt="cuzcare" />
          <img className="toimgtwo" src={cutegirl} alt="cute" />
        </div>
        <div className="totext">
          <h2>
            <span>Best</span> Support & Always Ready to Help
          </h2>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. Eu odio at faucibus massa ac in lectus cras
            blandit. Bibendum sapien non quis rhoncus.
          </p>
        </div>
      </div>
      {/* ======================================================= */}
      <div className="parabankz">
        <img className="patbank" src={patbank} alt="partners" />
      </div>
      {/* ========================================================= */}
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
      </div>
      {/* ======================================================= */}
      <div className="homebiz">
        <div className="homebiztextb">
          <h2>
            <span>Hot</span> Promo, Discount, and Cashback
          </h2>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. E
          </p>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in{" "}
          </p>
          <div className="bizbutb">
            <img src={ssuport} alt="support" />
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
      {/* ============================================================ */}
      <div className="countsec">
        <div className="count">
          <div className="countnum">
            <h2>90</h2>
            <p>+</p>
          </div>
          <p>Powered Merchant</p>
        </div>
        <div className="count">
          <div className="countnum">
            <h2>50</h2>
            <p>+</p>
          </div>
          <p>Trusted Partners</p>
        </div>
        <div className="count">
          <div className="countnum">
            <h2>70</h2>
            <p>+</p>
          </div>
          <p>Professional Team</p>
        </div>
        <div className="count">
          <div className="countnum">
            <h2>90</h2>
            <p>+</p>
          </div>
          <p>Happy Customers</p>
        </div>
      </div>
      {/* ====================================================== */}
      <div className="tranzsec">
        <div className="tranzimg">
          <img src={indwoman} alt="indwoman" />
        </div>
        <div className="tranztext">
          <h2>Payment & Transfer</h2>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. E
          </p>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. E
          </p>
        </div>
      </div>
      {/* ======================================================= */}
      <div className="supasec">
        <div className="supatext">
          <h2>Save & Budget</h2>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. E
          </p>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. E
          </p>
        </div>
        <div className="supaimg">
          <img className="supagirl" src={supagirl} alt="supagirl" />
        </div>
        <img className="supapoka" src={supapoka} alt="pokadot" />
      </div>
      {/* =================================================== */}
      <div className="mpaysec">
        <div className="mpayimg">
          <img className="mpayball" src={balll} alt="ellipes" />
          <img className="mpaycard" src={mpcard} alt="card" />
        </div>
        <div className="mpaytext">
          <h2>
            <span>MPAY</span> Card
          </h2>
          <p>
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. E
          </p>
          <div className="mpaypartner">
            <img src={logomaster} alt="atm" />
            <img src={logovisa} alt="atm" />
          </div>
        </div>
      </div>
      {/* ============================================================= */}
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

export default Services;
