import React from "react";
import { Carousel, Modal } from "react-bootstrap";
import { modalDetails } from "./portfolio-details/modal-details";
import AnimatedCursor from "react-animated-cursor";

const PortfolioModal = ({ showModal, setShowModal, modalNumber }) => {
  const textColor = modalDetails[modalNumber]?.color === "light"? "text-dark":modalDetails[modalNumber]?.color === "stroke" ? "text-stroke text-white":"text-white"
  
  return (
    <>
      <Modal show={showModal} onHide={() =>  setShowModal(false)} dialogClassName="modal-width" centered>
        <div onClick={() => setShowModal(false)} type="button" className="btn-close btn-close-white  mx-4 mt-4"></div>
        <Modal.Body className="">
            <div className="cursor-style">
              <AnimatedCursor innerSize={19} outerSize={19}  color="24, 210 ,110" outerAlpha={0.4} innerScale={0.7} outerScale={5} />
            </div>
          <div className="d-flex justify-content-end"></div>
          <div id="portfolio-details" className="portfolio-details">
            <div className="modal-padding mb-5">
              <div className="row">
                <div className="col-lg-7 relative mb-5">
                  <h2 className="portfolio-title mb-3">{modalDetails[modalNumber]?.title}</h2>
                  <Carousel>
                    {modalDetails[modalNumber]?.image.map((item, idx) => (
                      <Carousel.Item key={idx}>
                        <img className="d-block carousel-img-container" src={item.slide} alt={item.label} />
                        <Carousel.Caption className={`${textColor}`}>
                          <div className="carousel-label">{item.label}</div>
                          <p className="carousel-desc">{item.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="col-lg-5 portfolio-info">
                  <h2 className=" mx-3">Project information</h2>
                  <ul className="my-3 ">
                    <div>
                      <strong>Category</strong>:<span className="fw-light"> {modalDetails[modalNumber]?.category}</span>
                    </div>
                    <br />
                    <div>
                      <strong>Client</strong>:<span className="fw-light"> {modalDetails[modalNumber]?.client}</span>{" "}
                    </div>
                    <br />
                    <div>
                      <strong>Project date</strong>:<span className="fw-light"> {modalDetails[modalNumber]?.date}</span>
                    </div>
                    <br />
                    {modalDetails[modalNumber]?.url && (
                      <div>
                        <strong>Project URL</strong>:
                        <span className="fw-light">
                          {" "}
                          <a href="#">www.example.com</a>
                        </span>
                      </div>
                    )}
                  </ul>

                  {modalDetails[modalNumber]?.site && (
                    <div className="d-flex flex-row mx-4">
                      <p>Visit site: </p>
                      <a className="fw-light lh-base ms-2" target="_blank" rel="noopener noreferrer" href={modalDetails[modalNumber]?.site}>
                        {modalDetails[modalNumber]?.site}
                      </a>
                    </div>
                  )}
                  <div className="fw-light lh-base">
                    {modalDetails[modalNumber]?.projectDetails}
                    {modalDetails[modalNumber]?.featureList.map((item, idx) => (
                      <ul key={idx}>
                        <li>{item.feature}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PortfolioModal;
