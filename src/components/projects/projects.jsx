import React, { useState } from "react";
import "./projects.css";
import Menu from "./menu";

const Projects = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElement) => {
      return curElement.category === categoryItem;
    });

    setItems(updatedItems);
  };

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
      </div>
      <div className="work-container grid">
        {items.map((element) => {
          const { id, image, title, category, link } = element;
          return (
            <div className="work-card" key={id}>
              <div className="work-thumbnail">
                <img src={image} alt="error" className="work-img" />
                <div className="work-mask"></div>
              </div>

              <span className="work-category">{category}</span>
              <h3 className="work-title">{title}</h3>
              <a
                href={link}
                className="work-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-link work-button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
