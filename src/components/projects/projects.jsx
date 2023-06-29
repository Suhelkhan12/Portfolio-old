import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import "./projects.css";
import Menu from "./menu";

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElement) => {
      return curElement.category === categoryItem;
    });

    setItems(updatedItems);
  };

  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("card"); // Replace 'sectionId' with the actual ID of your section
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsSectionInView(isVisible);

        const cardHeight = section.firstChild.clientHeight;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const visibleIndex = Math.floor(scrollTop / cardHeight);
        setVisibleIndex(visibleIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="work container section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="work-filters">
        <span className="work-item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work-item" onClick={() => filterItem("Frontend")}>
          Frontend
        </span>
        <span className="work-item" onClick={() => filterItem("Backend")}>
          Backend
        </span>
        <span className="work-item" onClick={() => filterItem("Full")}>
          Complete
        </span>
        <span className="work-item" onClick={() => filterItem("Webflow")}>
          Webflow
        </span>
      </div>
      <div className="work-container grid" id="card">
        {items.map((element, index) => {
          const { id, image, title, category, desc, link } = element;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                isSectionInView && visibleIndex >= index
                  ? {
                      opacity: 1,

                      transition: {
                        delay: index * 0.3,
                        ease: easeInOut,
                      },
                    }
                  : { opacity: 0 }
              }
              className="work-card"
              key={id}
            >
              <div className="work-thumbnail">
                <img src={image} alt="error" className="work-img" />
                <div className="work-mask"></div>
              </div>

              <span className="work-category">{category}</span>
              <h3 className="work-title">{title}</h3>
              <p className="work-subtitle">{desc}</p>
              <a
                href={link}
                className="work-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="icon-link work-button-icon"></i> */}
                <p className="project-demo">Demo</p>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
