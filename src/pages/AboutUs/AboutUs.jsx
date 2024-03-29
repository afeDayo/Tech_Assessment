import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./AboutUs.css";
import pokaab from "../../assets/Circlesab.png";
import friendly from "../../assets/user friendly log.png";
import kcare from "../../assets/support log.png";
import padlo from "../../assets/private logo.png";
import bigman from "../../assets/Frame 57.png";
import bigmanbk from "../../assets/Frame 56.png";
import spirok from "../../assets/Spiral 24.png";
import banks from "../../assets/partner banks.png";
import sphere from "../../assets/Ellipse 122.png";
import atm from "../../assets/CARD v.png";
import phonethird from "../../assets/iPhone 13 Pro mzz.png";
import manframe from "../../assets/Frame man.png";
import twogirls from "../../assets/Vectorab 63.png";
import appdemo from "../../assets/Frame 44.png";
import paypall from "../../assets/paypal flash logo.png";
import visaa from "../../assets/visa flash logo.png";
import mastcard from "../../assets/mastercard flash.png";
import profone from "../../assets/client1.png";
import proftwo from "../../assets/client2.png";
import profthree from "../../assets/client3.png";
import proffour from "../../assets/client4.png";
import proffive from "../../assets/client5.png";
import profsix from "../../assets/lizzi.png";
import media from "../../assets/social media.png";
import teampoka from "../../assets/Circlesteam.png";
import invspir from "../../assets/Spiral 3.png";
import secbackg from "../../assets/Vector bk.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // ========================SCROLL REVEAL===============
  useEffect(() => {
    ScrollReveal().reveal(".bigmanpro", {
      duration: 1500,
      origin: "top",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".bbannk", {
      duration: 2000,
      origin: "left",
      distance: "96px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".gadjet", {
      duration: 500,
      origin: "top",
      distance: "100px",
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".zcard", {
      duration: 500,
      origin: "left",
      distance: "100px",
      delay: 600,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".freeman", {
      duration: 500,
      origin: "bottom",
      distance: "100px",
      delay: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".fasttwo", {
      duration: 500,
      origin: "right",
      distance: "100px",
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".fastthree", {
      duration: 500,
      origin: "top",
      distance: "100px",
      delay: 600,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".fastfive", {
      duration: 500,
      origin: "bottom",
      distance: "100px",
      delay: 600,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".fastfour", {
      duration: 500,
      origin: "right",
      distance: "100px",
      delay: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".teammem", {
      duration: 1500,
      origin: "bottom",
      distance: "500px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".countsec", {
      duration: 2000,
      origin: "right",
      distance: "0px",
      delay: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="aboutus">
      <img className="secbackg" src={secbackg} alt="backg" />
      <div className="abtits">
        <h1>ABOUT US</h1>
        <p>
          Augue nulla turpis consectetur pharetra fames. rhoncus lectus Augue
          nulla turpis consectetur pharetra{" "}
        </p>
        <img className="abotpok" src={pokaab} alt="poka" />
      </div>
      {/* ================================================= */}
      <div className="mainabout">
        {/* =================================================== */}
        <div className="crafted">
          <div className="craftext">
            <h2>Crafted by the Creative Genzies</h2>
            <p>
              Purus sit imperdiet egestas penatibus. Duis odio metus tristique
              orci rutrum ipsum mattis. Auctor vel commodo consectetur placerat
              semper vel. Nunc volutpat eget facilisis dui tellus. Elementum
              ornare non sollicitudin hendrerit nunc mi proin nibh. Adipiscing
              at mi ultrices et sagittis nibh libero. Pha
            </p>
            <div className="craftserv">
              <div className="eachcraft">
                <img src={friendly} alt="goodui" />
                <div className="eacratex">
                  <h4>User Friendly</h4>
                  <p className="m-0">
                    Augue nulla turpis consectetur pharetra fames. rhoncus
                    lectus Augue nulla turpis consectetur pharetra{" "}
                  </p>
                </div>
              </div>
              <div className="eachcraft">
                <img src={kcare} alt="custcare" />
                <div className="eacratex">
                  <h4> Best Support</h4>
                  <p className="m-0">
                    Augue nulla turpis consectetur pharetra fames. rhoncus
                    lectus Augue nulla turpis consectetur pharetra{" "}
                  </p>
                </div>
              </div>
              <div className="eachcraft">
                <img src={padlo} alt="" />
                <div className="eacratex">
                  <h4>Security</h4>
                  <p className="m-0">
                    Augue nulla turpis consectetur pharetra fames. rhoncus
                    lectus Augue nulla turpis consectetur pharetra{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="craftimg">
            <img className="bigmanpro" src={bigman} alt="profilepic" />
            <img className="bigmanbk" src={bigmanbk} alt="profilbk" />
          </div>
          <img className="spirok" src={spirok} alt="spiro" />
        </div>
        {/* ================================================= */}
        <div className="missionsec">
          <div className="misstext">
            <h2>Our Mission</h2>
            <p>
              Purus sit imperdiet egestas penatibus. Duis odio metus tristique
              orci rutrum ipsum mattis. Auctor vel commodo consectetur placerat
              semper vel. Nunc volutpat eget facilisis dui tellus. Elementum
              ornare non sollicitudin hendrerit nunc mi proin nibh. Adipiscing
              at mi ultrices et sagittis nibh libero. PhaPurus sit imperdiet
              egestas penatibus. Duis odio metus tristique orci rutrum ipsum
              mattis. Auctor vel commodo consectetur placerat semper vel. Nunc
              volutpat eget facilisis dui tellus. Elementum ornare non
              sollicitudin hendrerit nunc mi proin nibh. Adipiscing at mi
              ultrices et sagittis nibh libero. PhaPurus sit imperdiet egestas
              penatibus
            </p>
          </div>
          <div className="bankzz">
            <img className="bbannk" src={banks} alt="partners" />
          </div>
        </div>
        {/* ====================================================== */}
        <div className="commitsec">
          <div className="commitimg">
            <img className="spezrez" src={sphere} alt="sphere" />
            <img className="zcard" src={atm} alt="card" />
            <img className="gadjet" src={phonethird} alt="iphone" />
            <img className="freeman" src={manframe} alt="frameman" />
          </div>
          <div className="committext">
            <h2>Committed to Give You the Best Service</h2>
            <p>
              Purus sit imperdiet egestas penatibus. Duis odio metus tristique
              orci rutrum ipsum mattis. Auctor vel commodo consectetur placerat
              semper vel. Nunc volutpat eget facilisis dui tellus. Elementum
              ornare non sollicitudin hendrerit nunc mi proin nibh. Adipiscing
              at mi ultrices et sagittis nibh libero. Pha
            </p>
            <div className="commumb">
              <div className="dobplus">
                <div className="actuzer">
                  <div className="symbnumb">
                    <h2>100</h2>
                    <p>+</p>
                  </div>
                  <p>Active user</p>
                </div>
                <div className="actuzer">
                  <div className="symbnumb">
                    <h2>400</h2>
                    <p>+</p>
                  </div>
                  <p>App Download</p>
                </div>
              </div>
              <div className="dobplus">
                <div className="actuzer">
                  <div className="symbnumb">
                    <h2>100</h2>
                    <p>%</p>
                  </div>
                  <p>Satisfied Users</p>
                </div>
                <div className="actuzer">
                  <div className="symbnumb">
                    <h2>200</h2>
                    <p>+</p>
                  </div>
                  <p>Partner Joined</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================================== */}
        <div className="fastsec">
          <div className="fasttext">
            <h2>
              <span>Fastest</span>, Easiest and Most Reliable Payment Platform
            </h2>
            <p>
              Scelerisque urna sed turpis fermentum porttitor metus. Eget
              aliquam vivamus risus odio scelerisque urna diam rhoncus
              phasellus. Felis blandit in quis tellus ultrices enim ut
              porttitor. Sed consectetur tellus velit luctus. E
            </p>
            <p>
              Scelerisque urna sed turpis fermentum porttitor metus. Eget
              aliquam vivamus risus odio scelerisque urna diam rhoncus
              phasellus. Felis blandit in{" "}
            </p>
          </div>
          <div className="fastimg">
            <img className="fastone" src={twogirls} alt="girls" />
            <img className="fasttwo" src={appdemo} alt="app" />
            <img className="fastthree" src={paypall} alt="paypall" />
            <img className="fastfour" src={visaa} alt="visac" />
            <img className="fastfive" src={mastcard} alt="masterc" />
          </div>
        </div>
        {/* ====================================================== */}
        <div className="teamsec">
          <div className="teamtex">
            <h2>Our Team</h2>
            <p>
              Scelerisque urna sed turpis fermentum porttitor metus. Eget
              aliquam vivamus risus odio scelerisque urna diam rhoncus
              phasellus. Felis blandit in quis tellus ultrices enim ut
              porttitor. Sed consectetur tellus velit luctus. E
            </p>
          </div>
          <div className="teammem">
            <div className="teamone">
              <div className="employ">
                <img src={profone} alt="client" />
                <h4>Tyronne Michael</h4>
                <p>CEO/Founder</p>
                <img className="mediasm" src={media} alt="socialm" />
              </div>
              <div className="employ">
                <img src={proftwo} alt="client" />
                <h4>Akpeki Tega</h4>
                <p>Operation Manager</p>
                <img className="mediasm" src={media} alt="socialm" />
              </div>
              <div className="employ">
                <img src={profthree} alt="client" />
                <h4>Alisha Gazel</h4>
                <p>Sales and Marketing</p>
                <img className="mediasm" src={media} alt="socialm" />
              </div>
            </div>
            <div className="teamtwo">
              <div className="employ">
                <img src={proffour} alt="client" />
                <h4>Aishat Chinedu</h4>
                <p>Lead Blockchain Developer</p>
                <img className="mediasm" src={media} alt="socialm" />
              </div>
              <div className="employ">
                <img src={proffive} alt="client" />
                <h4>Babatunde Victor</h4>
                <p>IT Support Executive</p>
                <img className="mediasm" src={media} alt="socialm" />
              </div>
              <div className="employ">
                <img className="profsix" src={profsix} alt="client" />
                <h4>Grace Afe</h4>
                <p>HR Manager</p>
                <img className="mediasm" src={media} alt="socialm" />
              </div>
            </div>
          </div>
          <img className="teampoka" src={teampoka} alt="poka" />
        </div>
        {/* ========================================================== */}
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
        {/* ======================================================== */}
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
    </div>
  );
};

export default AboutUs;
