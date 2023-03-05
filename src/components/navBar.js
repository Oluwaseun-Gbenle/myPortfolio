import React, { useState } from "react";

const NavBar = (props) => {
  console.log("window.location", window.location);
  return (
    <>
      <div className="nav-container nav-position">
        <nav
          id="navbar"
          className="non-mobile-nav  navbar d-flex justify-content-center"
        >
          <ul className="nav-bg">
            <li>
              <a
                className={`nav-link scrollto ${
                 props.scrollPosition < (props.aboutoffSetTop-150) &&
                  "active"
                }`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.scrollPosition >= (props.aboutoffSetTop-150) && props.scrollPosition < (props.portfolioOffSetTop-150) && "active"
                }`}
                href="#about"
              >
                About
              </a>
            </li>
           
            <li>
              <a
                className={`nav-link scrollto ${
                  props.scrollPosition >= (props.portfolioOffSetTop-150)  && "active"
                }`}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.hash === "contact" && "active"
                }`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <nav className="mt-4 nav-position navbar-light mobile-nav ">
        <div className="container-fluid ">
          <div
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <i className="bi bi-list mobile-nav-toggle text-light"></i>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="#home" className={`nav-item nav-link ${ props.scrollPosition < (props.aboutoffSetTop-150) &&"active"}`}>
                Home
              </a>
              <a href="#about" className={`nav-item nav-link ${props.scrollPosition >= (props.aboutoffSetTop-150) && 'active'}`}>
                About
              </a>
              <a href="#portfolio" className="nav-item nav-link">
                Portfolio
              </a>
              <a href="#contact" className="nav-item nav-link disabled" tabIndex="-1">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
