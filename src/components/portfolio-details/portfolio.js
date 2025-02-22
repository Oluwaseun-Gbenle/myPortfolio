import React, { useState } from "react";
import PortfolioModal from "./portfolio-modal";
import { portfolioList } from "./portfolio-list";
import { Link } from "react-router-dom";

const Portfolio = ({ portfolioElement }) => {
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [modalNumber, setModalNumber] = useState(-1);
  return (
      <div id="portfolio" ref={portfolioElement} className="cont-padding text-light">
        <div className="container">
          <div className="section-title py-4 text-center">
            <h2>Portfolio</h2>
          </div>

          <div className="">
            <section id="portfolio" className="portfolio">
              <div className="container">
                <PortfolioModal showModal={showPortfolioModal} setShowModal={setShowPortfolioModal} modalNumber={modalNumber} />
                <div className="row portfolio-container">
                  {portfolioList?.slice(0, 9).map((item, idx) => (
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app " data-aos="slide-up" key={idx}>
                      <div className="portfolio-wrap">
                        <img src={item.images} className="img-fluid" alt={item.title} />
                        <div className="portfolio-info">
                          <h4>{item.title}</h4>
                          <div
                            className="btn border-green"
                            onClick={() => {
                              setShowPortfolioModal(true);
                              setModalNumber(idx);
                            }}
                          >
                            {" "}
                            <i className="bi bi-box-arrow-up-right me-2"></i>
                            Learn More
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link
                    to={"/all-portfolio"}
                    className="text-success text-decoration-none  bg-black border-0  d-flex align-items-center justify-content-center gap-2 fs-4 fw-bold"
                  >
                    See More <i className="bi bi-chevron-right fw-bold"></i>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

  );
};

export default Portfolio;
