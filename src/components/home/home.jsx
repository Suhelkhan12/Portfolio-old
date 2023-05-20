import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./headerSocial";
import ScrollDown from "./scrollDown";
import Shapes from "./shapes";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="homeImage" className="home-img" />

          <h1 className="home-name">Suhel Khan</h1>
          <span className="home-education">A Developer.</span>
          <br />
          <span className="home-education">
            I design and code beautifully simple things, and I love what I do.
            <br />
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
    </motion.section>
  );
};

export default Home;
