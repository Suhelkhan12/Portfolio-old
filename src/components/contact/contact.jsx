import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const [isSectionInView, setIsSectionInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact"); // Replace 'sectionId' with the actual ID of your section
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
  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container grid">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={
            isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
          }
          transition={{ duration: 1.5 }}
          className="contact-info"
        >
          <h3 className="contact-title">Let's talk!</h3>
          <p className="contact-details">
            Who likes to fill that big contact form! Let's talk on Linkedin{" "}
            <span class="wave">👋</span> .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={
            isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
          }
          transition={{ duration: 1.5 }}
          className="linkedin-button"
        >
          <div className="button btn">
            <a
              href="https://linkedin.com/in/suhel-khan-techie-925aa222a"
              target="_black"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
