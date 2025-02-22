import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = ({ contactElement }) => {
  const [formData, setFormData] = useState({ from_name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_PUBLIC_KEY)
      .then((response) => {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <>
      <div className="contact-svg mt-5 ">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="black" stroke="black"></path>
        </svg>
      </div>
      <div id="contact" ref={contactElement} className="py-5">
        <div className=" container">
          <div className="section-title pt-4">
            <h2 className="fw-bold text-center">Contact</h2>
          </div>
          <div className="center-contact">
            <div>
              <div className="fw-bold  raleway-font text-center" data-aos="slide-right" data-delay="0.5s">
                Have a question or want to work together?
              </div>
              <form className="" onSubmit={handleSubmit} data-aos="zoom-in" data-delay="0.5s" id="contact-form">
                <div className="">
                  <input
                    onChange={handleChange}
                    value={formData.from_name}
                    className="bg-dark w-100 p-2 mt-4  text-light"
                    placeholder="Name"
                    type="text"
                    name="from_name"
                    required=""
                  />
                </div>
                <div className="">
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    className="bg-dark w-100  p-2 text-light"
                    placeholder="Enter email"
                    type="email"
                    name="email"
                    required=""
                  />
                </div>
                <textarea
                  className="bg-dark  p-2 textarea-height text-light w-100"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  type="text"
                  name="message"
                ></textarea>
                <div id="success"></div>
                <div className="d-flex justify-content-center">
                  <input className="button submit-button mt-3" type="submit" id="submit" value="SUBMIT" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
