import React from "react";

const NavBar = (props) => {
  return (
    <>
      <div className="nav-container-non-mobile nav-position">
        <nav
          id="navbar"
          className="non-mobile-nav  navbar d-flex justify-content-center"
        >
          <ul className="nav-bg">
            <li>
              <a
                className={`nav-link scrollto ${
                 (props.scrollPosition=== 0 && "active") || (props.scrollPosition < (props.aboutoffSetTop-200) &&
                  "active")
                }`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.scrollPosition >= (props.aboutoffSetTop-200) && props.scrollPosition < (props.portfolioOffSetTop-200) && "active"
                }`}
                href="#about"
              >
                About
              </a>
            </li>
           
            <li>
              <a
                className={`nav-link scrollto ${
                  props.scrollPosition >= (props.portfolioOffSetTop-200)  && props.scrollPosition < (props.contactOffSetTop-800) && "active"
                }`}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={`nav-item nav-link ${
                  props.scrollPosition >= (props.contactOffSetTop-800)  && "active" }`}
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
            <div className="navbar-nav mobile-nav-color">
              <a href="#home" className={`nav-item nav-link ${   (props.scrollPosition=== 0 && "active") || (props.scrollPosition < (props.aboutoffSetTop-200) &&
                  "active")}`}>
                Home
              </a>
              <a href="#about" className={`nav-item nav-link ${props.scrollPosition >= (props.aboutoffSetTop-200) && props.scrollPosition < (props.portfolioOffSetTop-200) && "active"
               }`}>
                About
              </a>
              <a href="#portfolio" className={`nav-item nav-link ${
                  props.scrollPosition >= (props.portfolioOffSetTop-200) && props.scrollPosition < (props.contactOffSetTop-200) && "active" }`}>
                Portfolio
              </a>
              <a href="#contact" className={`nav-item nav-link ${
                  props.scrollPosition >= (props.contactOffSetTop-200)  && "active" }`}>
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
