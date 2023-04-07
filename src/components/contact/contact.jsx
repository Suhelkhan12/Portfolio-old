import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let's talk!</h3>
          <p className="contact-details">
            Who likes to fill that big contact form! Let's talk on Linkedin{" "}
            <span class="wave">👋</span> .
          </p>
        </div>

        <div className="linkedin-button">
          <div className="button btn">
            <a
              href="https://linkedin.com/in/suhel-khan-techie-925aa222a"
              target="_black"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
