import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./headerSocial";
import ScrollDown from "./scrollDown";
import Shapes from "./shapes";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        {/* <img src={Me} alt="homeImage" className="home-img" /> */}
        <motion.img
          src={Me}
          alt="homeImage"
          className="home-img"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        ></motion.img>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Suhel Khan
        </motion.h1>
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
  );
};

export default Home;
