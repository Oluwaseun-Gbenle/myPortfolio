import React, { useState } from "react";
import PortfolioModal from "./portfolio-modal";
import { portfolioList } from "./portfolio-details/portfolio-list";

const Portfolio = ({ portfolioElement }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalNumber, setModalNumber] = useState(-1);
  return (
    <>
      <div
        id="portfolio"
        ref={portfolioElement}
        className="cont-padding text-light"
      >
        <div className="container">
          <div className="section-title py-4 text-center">
            <h2>Portfolio</h2>
          </div>

          <div className="">
            <section id="portfolio" className="portfolio">
              <div className="container">
                <PortfolioModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  modalNumber={modalNumber}
                />
                <div className="row portfolio-container">
                  {portfolioList?.map((item, idx) => (
                    <div
                      className="col-lg-4 col-md-6 portfolio-item filter-app "
                      data-aos="slide-up"
                      key={idx}
                    >
                      <div className="portfolio-wrap">
                        <img
                          src={item.images}
                          className="img-fluid"
                          alt={item.title}
                        />
                        <div className="portfolio-info">
                          <h4>{item.title}</h4>
                          <div
                            className="btn border-green"
                            onClick={() => {
                              setShowModal(true);
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
