import React, { useState, useRef } from "react";
// import { useForm } from "@formspree/react";
import "./ContactForm.css";
import { useForm} from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mvojgkpn");        // mvojgkpn is the form id from formspree.io 
  const [isSubmitted, setIsSubmitted] = useState(false);      // isSubmitted is a boolean variable which is set to true when the form is submitted successfully 
  const formRef = useRef();                                // formRef is used to reset the form after submission 

  const handleFormSubmit = async (e) => {                 // handleFormSubmit is an async function which is called when the form is submitted to formspree.io so that the form is reset after submission 
    e.preventDefault();                     // preventDefault is used to prevent the default behaviour of the form when it is submitted   
    await handleSubmit(e);                 // handleSubmit is called when the form is submitted to formspree.io
    setIsSubmitted(true);                   // isSubmitted is set to true when the form is submitted successfully 
    formRef.current.reset();               // formRef is used to reset the form after submission
  };

  return (
    <div id="contact" className="container contact-form">         {/* id="contact" is used to link the contact section in the navbar */}
      <div className="contact-image">                               {/* contact-image is used to display the image in the contact section */}
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>

      <form ref={formRef} onSubmit={handleFormSubmit}>         {/* onSubmit is used to call the handleFormSubmit function when the form is submitted */}
        <h3>Drop a Message</h3>
        <div className="row">                                  {/* row is used to divide the form into two columns */}
          <div className="col-md-6">                           {/* col-md-6 is used to divide the form into two columns */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Phone Number(optional) "
              />
            </div>
          </div>
          <div className="col-md-6">                               {/* col-md-6 is used to divide the form into two columns */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your Message *"
                style={{ width: "100%", height: "150px" }}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">                     {/* row is used to divide the form into two columns */}
          <div className="col-md-6">               {/* col-md-6 is used to divide the form into two columns */}
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>
      {isSubmitted && (                          // isSubmitted is a boolean variable which is set to true when the form is submitted successfully
        <div className="success-message">         {/* success-message is used to display the message when the form is submitted successfully */}
          Thank you for contacting me! I will reply to you soon.
        </div>
      )}
    </div>
  );
}

export default ContactForm;
