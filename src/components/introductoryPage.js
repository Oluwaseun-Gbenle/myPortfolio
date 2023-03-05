import React, { useEffect, useRef } from "react";
import { darkModeStyle } from "./inlineStyles";
import "./style.css";
import Typed from "typed.js";
import NavBar from "./navBar";
import Loader from "./loader";
import About from "./about";
import { useScrollPosition } from "./scroll-on-y-axis";

const IntroductoryPage = () => {
  const el = useRef(null);
  const loaderEl = useRef(null);
  const scrollPosition = useScrollPosition();
  const element = useRef("about");
  const about = element.current;
  const aboutoffSetTop = about.offsetTop;

  useEffect(() => {
    let loader = loaderEl.current;
    setTimeout(() => {
      loader.classList.add("loaded");
    }, 1000);
    setTimeout(() => {
      loader.remove();
    }, 2000);
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["software engineer", "software developer"],
      startDelay: 2000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <Loader loaderEl={loaderEl} />
      <div id="home" className="container1 " style={darkModeStyle}>
        <div>
          <NavBar scrollPosition={scrollPosition} aboutoffSetTop={aboutoffSetTop}/>
          <div className="row align-items-center center-text vh-100">
            <div className="d-flex justify-content-center col-md-6 ">
              <div className="text-container w-100">
                <h1 className="fw-bold name-font">Gbenle Seun</h1>
                <h3 className="fw-light">
                  I'm a{" "}
                  <span className="underline-text" ref={el}>
                    {" "}
                  </span>
                </h3>
                <div className="d-flex mt-3">
                  <a href="#" className="twitter social-links">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="github social-links">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" className="instagram social-links">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin social-links">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About element={element} aboutoffSetTop={aboutoffSetTop}/>
    </>
  );
};

export default IntroductoryPage;
