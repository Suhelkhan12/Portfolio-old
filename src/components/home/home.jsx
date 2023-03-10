import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./headerSocial";
import ScrollDown from "./scrollDown";
import Shapes from "./shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="homeImage" className="home-img" />

        <h1 className="home-name">Suhel Khan</h1>
        <span className="home-education">A Developer.</span>
        <br />
        <span className="home-education">
          Let's build something great Together!
        </span>

        {/* social links */}
        <HeaderSocials />

        <a href="mailto:suhel7822@gmail.com" className="btn button">
          Contact Me
        </a>

        {/* scroll down */}
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
