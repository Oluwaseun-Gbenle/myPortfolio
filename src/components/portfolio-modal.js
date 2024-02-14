import React, { useEffect } from "react";
import { Carousel, Modal } from "react-bootstrap";
import { modalDetails } from "./portfolio-details/modal-details";
import AnimatedCursor from "react-animated-cursor";

const PortfolioModal = ({ showModal, setShowModal, modalNumber }) => {
  const textColor = modalDetails[modalNumber]?.color === "light"? "text-dark":modalDetails[modalNumber]?.color === "stroke" ? "text-stroke text-dark":"text-white"
  useEffect(() => {
    const stopPropagation = (event) => {
      if (event.target.closest('.carousel-control-next') || event.target.closest('.carousel-control-prev')) {
        event.stopPropagation();
      }
    };
  
    document.addEventListener('click', stopPropagation);
  
    return () => {
      document.removeEventListener('click', stopPropagation);
    };
  }, []);
  
  
  return (
    <>
      <Modal show={showModal} onHide={(event) => {event.stopPropagation(); setShowModal(false)}} dialogClassName="modal-90w " style={{ opacity: "1" }} centered>
        {/* <div onClick={() => setShowModal(false)} type="button" className="btn-close btn-close-white  m-4 "></div> */}
        <svg onClick={() => setShowModal(false)} className="m-4" width="30" fill="white" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
          </svg>
        <Modal.Body className="">
          {showModal && (
            <div className="cursor-style">
              <AnimatedCursor innerSize={19} outerSize={19} color="252, 248 ,250" outerAlpha={0.4} innerScale={0.7} outerScale={5} />
            </div>
          )}
          <div className="d-flex justify-content-end"></div>
          <div id="portfolio-details" className="portfolio-details">
            <div className="mx-5 mb-5">
              <div className="row">
                <div className="col-lg-7 relative">
                  <h2 className="portfolio-title mb-3">{modalDetails[modalNumber]?.title}</h2>
                  <Carousel>
                    {modalDetails[modalNumber]?.image.map((item, idx) => (
                      <Carousel.Item key={idx}>
                        <img className="d-block w-100" src={item.slide} alt={item.label} />
                        <Carousel.Caption className={`${textColor}`}>
                          <h3>{item.label}</h3>
                          <p>{item.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="col-lg-5 portfolio-info">
                  <h3 className=" mx-3">Project information</h3>
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
