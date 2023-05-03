import React from 'react'
import { Carousel, Modal } from 'react-bootstrap'
import { modalDetails } from './portfolio-details/modal-details'
import AnimatedCursor from 'react-animated-cursor'

const PortfolioModal = ({showModal,setShowModal,modalNumber}) => {
  console.log("showModal",showModal);
  return (
    <>
    <Modal
    show={showModal}
    onHide={() => setShowModal(false)}
    dialogClassName="modal-90w "
    style={{opacity:'1'}}
    centered
  >
    <Modal.Body className=''>
   { showModal &&<div className="cursor-style">
        <AnimatedCursor
          innerSize={19}
          outerSize={19}
          color="252, 248 ,250"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
}
      <div className='d-flex justify-content-end m-4'>
      <div onClick={()=> setShowModal(false)} type="button" className="btn-close btn-close-white"></div>
   </div>
    <div id="portfolio-details" className="portfolio-details">
      <div className="mx-5 mb-5">

        <div className="row">

          <div className="col-lg-7">
            <h2 className="portfolio-title">{modalDetails[modalNumber]?.title}</h2>
            <Carousel>
          {modalDetails[modalNumber]?.image.map((item,idx)=>(
      <Carousel.Item key={idx}>
        <img
          className="d-block w-100"
          src={item.slide}
          alt={item.label}
        />
        <Carousel.Caption className={modalDetails[modalNumber]?.color==="light" && "text-dark"}>
          <h3>{item.label}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
  
    </Carousel>
       

          </div>

          <div className="col-lg-5 portfolio-info">
            <h3 className='fw-light mx-3 '>Project information</h3>
            <ul className='my-3 '>
           <div> <strong>Category</strong>:<span className='fw-light'>{modalDetails[modalNumber]?.category}</span></div> <br />
           <div><strong>Client</strong>: <span className='fw-light'>{modalDetails[modalNumber]?.client}</span> </div><br />
           <div> <strong>Project date</strong>:<span className='fw-light'> {modalDetails[modalNumber]?.date}</span></div><br />
           {modalDetails[modalNumber]?.url && <div><strong>Project URL</strong>:<span className='fw-light'> <a href="#">www.example.com</a></span>
           </div> }
           </ul>

            <p className='fw-light lh-base'>
             {modalDetails[modalNumber]?.projectDetails}
            {modalDetails[modalNumber]?.featureList.map((item,idx)=>(
              <ul key={idx}>
                <li>{item.feature}</li>
              </ul>
             ))}
            </p>
          </div>

        </div>

      </div>
    
    </div>
    </Modal.Body>
 
  </Modal>
  </>
  )
}

export default PortfolioModal