import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll-down">
      <a href="#about" className="mouse-wrapper">
        <span className="home-scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
