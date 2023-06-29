import React from "react";
import { useState, useEffect } from "react";
import "./about.css";
import About_logo from "../../assets/suhel-img.jpg";
import resume from "../documents/SuhelResume.pdf";
import AboutBox from "./aboutBox";
import Cpp from "../../assets/c++.png";
import Java from "../../assets/java.png";
import Css from "../../assets/css.png";
import Html from "../../assets/html.png";
import Js from "../../assets/js.png";
import Rct from "../../assets/react.png";
import Git from "../../assets/git.png";
import Sql from "../../assets/sql.png";
import Node from "../../assets/node.png";
import Bootstrap from "../../assets/bootstrap.png";
import { motion } from "framer-motion";

const About = () => {
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about"); // Replace 'sectionId' with the actual ID of your section
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsSectionInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [frontendPercent, backendPercent, othersPersent] = [70, 40, 50];
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container grid">
        {/* <img src={About_logo} alt="aboutImg" className="about-img" /> */}
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          animate={
            isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
          }
          transition={{ duration: 1.5 }}
          src={About_logo}
          alt="aboutImg"
          className="about-img"
        ></motion.img>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={
            isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
          }
          transition={{ duration: 1.5 }}
          className="about-data grid"
        >
          <div className="about-info">
            <p className="about-description">
              Hello,<span class="wave">👋</span> I'm Suhel, a web developer and
              a student. I'm passionate about crafting beautiful and functional
              web applications that provide great user experiences. I believe in
              clean and organized code, attention to detail, and constant
              learning to stay up-to-date with the latest web technologies.I am
              able to adapt very quick and overall I am very curious. When I'm
              not coding, you can find me exploring new hiking trails or trying
              out new food/coffee shops.
            </p>
            <a href={resume} className="btn " rel="noreferrer" target="_blank">
              Download CV
            </a>
          </div>

          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Frontend</h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="skills-number"
                >
                  {frontendPercent}%
                </motion.span>
              </div>

              <div className="skills-bar">
                <motion.span
                  style={{ width: `${frontendPercent}%` }}
                  initial={{ width: 0 }}
                  animate={
                    isSectionInView
                      ? { width: `${frontendPercent}%` }
                      : { width: 0 }
                  }
                  transition={{ duration: 1, delay: 1.5 }}
                  className="skills-percentage frontend"
                ></motion.span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Backend</h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="skills-number"
                >
                  {backendPercent}%
                </motion.span>
              </div>

              <div className="skills-bar">
                <motion.span
                  style={{ width: `${backendPercent}%` }}
                  initial={{ width: 0 }}
                  animate={
                    isSectionInView
                      ? { width: `${backendPercent}%` }
                      : { width: 0 }
                  }
                  transition={{ duration: 1, delay: 1.6 }}
                  className="skills-percentage backend"
                ></motion.span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Other tools</h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="skills-number"
                >
                  {othersPersent}%
                </motion.span>
              </div>

              <div className="skills-bar">
                <motion.span
                  style={{ width: `${backendPercent}%` }}
                  initial={{ width: 0 }}
                  animate={
                    isSectionInView
                      ? { width: `${backendPercent}%` }
                      : { width: 0 }
                  }
                  transition={{ duration: 1, delay: 1.7 }}
                  className="skills-percentage other-tools"
                ></motion.span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-teck-stack">
                <h3 className="skills-name">Teck Stack</h3>
                <div className="teck-container-main">
                  <span className="teck-img-container">
                    <img src={Cpp} alt="C++" className="skill-img" />
                    {/* <span className="skill-img-description">70%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Java} alt="Java" className="skill-img" />
                    {/* <span className="skill-img-description">60%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Html} alt="Html" className="skill-img" />
                    {/* <span className="skill-img-description">80%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Css} alt="Css" className="skill-img" />
                    {/* <span className="skill-img-description">70%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Js} alt="Js" className="skill-img" />
                    {/* <span className="skill-img-description">60%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Rct} alt="React" className="skill-img" />
                    {/* <span className="skill-img-description">40%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Node} alt="" className="skill-img" />
                    {/* <span className="skill-img-description">40%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Sql} alt="Sql" className="skill-img" />
                    {/* <span className="skill-img-description">60%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Git} alt="" className="skill-img" />
                    {/* <span className="skill-img-description">60%</span> */}
                  </span>
                  <span className="teck-img-container">
                    <img src={Bootstrap} alt="" className="skill-img" />
                    {/* <span className="skill-img-description">60%</span> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
