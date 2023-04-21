import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/S.gif";

const Sidebar = () => {
  // for showing the nav var
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav-logo">
          <img src={Logo} alt="logo" className="logo-avatar" />
        </a>
        <button className="dark-light ">
          <i class="fa-sharp fa-solid fa-moon-stars moon"></i>
        </button>
        <nav className="nav">
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav-footer">
          <span className="copyright">&copy; Suhel - 2023</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav-toggle nav-toggle-open" : "nav-toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu menu-toggle"></i>
      </div>
    </>
  );
};

export default Sidebar;
