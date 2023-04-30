import React, { useEffect, useRef } from "react";
import "./style.css";
import Typed from "typed.js";
import NavBar from "./navBar";
import Loader from "./loader";
import About from "./about";
import { useScrollPosition } from "./scroll-on-y-axis";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Stars from "./stars";

const IntroductoryPage = () => {
  const el = useRef(null);
  const loaderEl = useRef(null);
  const scrollPosition = useScrollPosition();
  const aboutElement = useRef("about");
  const portfolioElement = useRef("portfolio");
  const contactElement = useRef("contact");
  const about = aboutElement.current;
  const portfolio = portfolioElement.current;
  const contact = contactElement.current;
  const aboutoffSetTop = about.offsetTop;
  const portfolioOffSetTop = portfolio.offsetTop;
  const contactOffSetTop = contact.offsetTop;

  

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
      <div id="home" className="container1 " >
        <div> 
         <Stars/>
          <NavBar scrollPosition={scrollPosition} aboutoffSetTop={aboutoffSetTop} portfolioOffSetTop={portfolioOffSetTop} contactOffSetTop={contactOffSetTop}/>
          <div className="row align-items-center center-text vh-100 on-canvas">
            <div className="d-flex justify-content-center  ">
              <div className="text-container w-100 text-white text-center">
                <h1 className="fw-bold poppins-font">Gbenle Seun</h1>
                <h3 className="fw-light">
                  I'm a{" "}
                  <span className="underline-text" ref={el}>
                    {" "}
                  </span>
                </h3>
                <div className="d-flex justify-content-center mt-3">
                  <a href="https://twitter.com/SheywunG" target="_blank" rel="noreferrer" className="twitter social-links">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://github.com/Oluwaseun-Gbenle" target="_blank" rel="noreferrer" className="github social-links">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="/" className="instagram social-links">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/oluwaseun-gbenle-03742a158" target="_blank" rel="noreferrer"  className="linkedin social-links">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About aboutElement={aboutElement} />
      <Portfolio portfolioElement={portfolioElement} />
      <Contact contactElement={contactElement} />
    </>
  );
};

export default IntroductoryPage;
