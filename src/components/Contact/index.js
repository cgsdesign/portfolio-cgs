import React from "react";
import "./contact.css"
import portrait from "../../assets/images/self-portrait-sqr.jpg"
import Contactform from "../Contactform"

const Contact = () => (
  <div className="contact-content">
    <div className="w-6">
      <img src={portrait} alt="Catherine Sibley"></img>
    </div>
    <div className="w-9">
      <div className="pad">
        <h1>Contact Page</h1>
          <Contactform></Contactform>
      </div>
    </div>
  </div>
);

export default Contact;
