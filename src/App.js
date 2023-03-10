import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <>
      {/* this is done for sidebar */}
      <Sidebar />
      {/* 
      // 
      */}
      {/* this is done for main */}
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
