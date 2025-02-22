import React, { useState } from "react";
import { portfolioList } from "./portfolio-list";
import PortfolioModal from "./portfolio-modal";
import { Link } from "react-router-dom";

const PortfolioSeeMore = () => {
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [modalNumber, setModalNumber] = useState(-1);
  return (
    <div className="mt-2">
      <Link 
        to={"/"}
         className="back-icon"><i className="bi bi-arrow-left-circle fs-1 fw-bold"></i></Link>
        <div className="">
          <div className="portfolio">
            <div className="container mt-2">
              <div className="row portfolio-container">
                {portfolioList?.map((item, idx) => (
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
              </div>
            </div>
          </div>
          <PortfolioModal showModal={showPortfolioModal} setShowModal={setShowPortfolioModal} modalNumber={modalNumber} />
        </div>
    </div>
  );
};

export default PortfolioSeeMore;
