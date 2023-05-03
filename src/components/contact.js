import React from 'react'

const Contact = ({contactElement}) => {

  return (
    <>
     <div className='contact-svg mt-5 '>
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="black" stroke="black"></path>
        </svg>
      </div>
        <div id="contact" ref={contactElement} className="py-5">
        <div className=" container">
          <div className="section-title pt-4">
            <h2 className='fw-bold text-center'>Contact</h2>
          </div>
        <div className='d-flex justify-content-center'>
            <div className='contact-input-width'>
          <div className="fw-bold  raleway-font text-center"data-aos='slide-right'data-delay="0.5s"   >
            Have a question or want to work together?
          </div>
          <form className='' action="mailto:gbenleseun2016@gmail.com" method="post" encType='text/plain' data-aos="zoom-in" data-delay="0.5s"  id="contact-form">
            <div className=""><input  className='bg-dark w-100 p-2 mt-4  text-light' placeholder="Name" type="text" name="name" required=""/></div>
            <div className=""><input  className='bg-dark w-100  p-2 text-light' placeholder="Enter email" type="email" name="email" required=""/></div>
            <textarea className='bg-dark  p-2 textarea-height text-light w-100' placeholder="Your Message" type="text" name="message"></textarea>
            <div id="success">
              {/* <div>
                Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span>
              </div> */}
            </div>
            <div className='d-flex justify-content-center'>
            <input className="button submit-button mt-3"  type="submit" id="submit" value="SUBMIT"/>
            </div>
          </form>
          </div>
          </div>
    </div> 
     </div>
    </>
  )
}

export default Contact