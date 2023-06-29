import React from "react";
import { motion } from "framer-motion";
const HeaderSocials = () => {
  return (
    <div className="home-socials">
      <motion.a
        href="https://linkedin.com/in/suhel-khan-techie-925aa222a"
        target="_blank"
        className="home-social-link"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <i class="fa-brands fa-linkedin"></i>
      </motion.a>

      <motion.a
        href="https://github.com/Suhelkhan12/"
        target="_blank"
        className="home-social-link"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeIn" }}
      >
        <i class="fa-brands fa-github"></i>
      </motion.a>

      <motion.a
        href="https://leetcode.com/Suhelll/"
        target="_blank"
        className="home-social-link"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeIn" }}
      >
        <i class="fa-solid fa-code"></i>
      </motion.a>
    </div>
  );
};

export default HeaderSocials;
