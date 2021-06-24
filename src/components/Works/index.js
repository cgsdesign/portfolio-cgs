import React from "react";
import {useSpring, animated} from 'react-spring'
import Projects from "../Projects"
import portfolioimg from "../../assets/images/portfolio/portfolio-page1.png"
import "./works.css"
import portfolio from "../../assets/resume/gd-portfolio.pdf"


function Works() {
  const propsMove2 = useSpring(
      {opacity: 1, 
      from: {scale:10,transform: 'scale(0.5)'},
      to: { scale: 150, transform: 'scale(1)', freq: '0.0, 0.0' },
      config: { duration: 1000 }});    
return (
  <div class="flex-portfolio">
    {/* <h1>Download Portfolio</h1> */}

  {/* <div class="web-portfolio-section"> */}
  <h1>View Sites</h1>
  <Projects/>
  {/* </div> */}
  <div class="design-portfolio-section">
      <h2>Learn About My Design Process and Work</h2>
      <animated.div style={propsMove2}>
          <div class="portfolio-image">
          <img src={portfolioimg} alt="Design Portfolio"></img>
          </div>
      </animated.div>
          <div className="pad">
            <a href={portfolio} target="_blank" rel="noreferrer">
            <button>Download Full Design Portfolio</button>
            </a>
          </div>
    </div>

  </div>
);
}

export default Works;
