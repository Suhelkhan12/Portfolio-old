import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home-socials">
      <a
        href="https://linkedin.com/in/suhel-khan-techie-925aa222a"
        target="_blank"
        className="home-social-link"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/Suhelkhan12/"
        target="_blank"
        className="home-social-link"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="https://leetcode.com/Suhelll/"
        target="_blank"
        className="home-social-link"
        rel="noopener noreferrer"
      >
        <i class="fa-solid fa-code"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
