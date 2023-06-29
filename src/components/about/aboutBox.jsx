import React from "react";

const AboutBox = () => {
  return (
    <div className="about-boxes grid">
      <div className="about-box">
        <i className="about-icon icon-fire fire-project"></i>

        <div>
          <h3 className="about-title">3</h3>
          <span className="aboyt-subtitle">Projects</span>
        </div>
      </div>

      <div className="about-box">
        <i className="about-icon icon-badge badge-question"></i>

        <div>
          <h3 className="about-title">Leetcode</h3>
          <span className="aboyt-subtitle">Regularly</span>
        </div>
      </div>
    </div>
  );
};
export default AboutBox;
