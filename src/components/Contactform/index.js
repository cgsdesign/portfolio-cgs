import React, { useState } from 'react';
import linkedin from "../../assets/images/linkedin.png"
import github from "../../assets/images/github.png"
import codepen from "../../assets/images/codepen.png"
import "./contactform.css"

function Contactform() {
  return (
    <section>
      <h3>Catherine G Sibley</h3>
      <h4> Madison, IL</h4>
      <h4> catherine.lea.graham@gmail.com</h4>
      <br></br>
      <div className="link-zone">
      <a href="https://www.linkedin.com/in/catherine-sibley-93677926/" target="_blank" rel="noreferrer">
              <img alt="linkedin link" src={linkedin} />
          </a>
          <a href="https://github.com/cgsdesign" target="_blank" rel="noreferrer">
              <img alt="github link" src={github} />
          {/* </a>   
          <a href="https://codepen.io/cgsdesign" target="_blank" rel="noreferrer">
              <img alt="github link" src={codepen} /> */}
          </a>  
          </div> 
    </section>
  )
  }
  
export default Contactform;
