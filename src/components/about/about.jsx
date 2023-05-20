import React from "react";
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

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container grid">
        <img src={About_logo} alt="aboutImg" className="about-img" />
        <div className="about-data grid">
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
                <span className="skills-number">70%</span>
              </div>

              <div className="skills-bar">
                <span className="skills-percentage frontend"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Backend</h3>
                <span className="skills-number">40%</span>
              </div>

              <div className="skills-bar">
                <span className="skills-percentage backend"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Other tools</h3>
                <span className="skills-number">50%</span>
              </div>

              <div className="skills-bar">
                <span className="skills-percentage other-tools"></span>
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
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
