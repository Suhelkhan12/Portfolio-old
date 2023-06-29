import React from "react";
import { ScaleLoader } from "react-spinners";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
// import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";

const App = () => {
  // IMP
  // IMP
  // IMP this I'm doing in order to load something on the screen

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setting the loading state varriable to true
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //
  // IMP for css overrde prps

  //
  //
  return (
    <>
      {loading ? (
        <div className="screen-loader">
          <ScaleLoader color="#d63636" loading={loading} size={30} />
        </div>
      ) : (
        <>
          {" "}
          {/* this is done for sidebar */}
          <Sidebar />
          {/* 
  // 
  */}
          {/* this is done for main */}
          <main className="main">
            <Home />
            <About />
            {/* <Resume /> */}
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  );
};

export default App;

// <ScaleLoader color="#d63636" />
