import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { Modal } from "react-bootstrap";
import { portfolioList } from "./portfolio-list";

const SeeMoreModal = ({ showModal, setShowModal, setModalNumber,setShowPortfolioModal }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="see-more-modal-width bg-black" centered>
      <div onClick={() => setShowModal(false)} type="button" className="btn-close btn-close-white   mx-4 mt-4"></div>
      <Modal.Body className="bg-black ">
        <div className="cursor-style">
          <AnimatedCursor innerSize={19} outerSize={19} color="24, 210 ,110" outerAlpha={0.4} innerScale={0.7} outerScale={5} />
        </div>
        <div className="">
            <div className="portfolio">
              <div className="container">
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
          </div>
      </Modal.Body>
    </Modal>
  );
};

export default SeeMoreModal;
