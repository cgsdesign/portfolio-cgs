import React from "react";
import portrait from "../../assets/images/Catherine.jpg" 
import "./about.css"

const About = () => (
  <section className="about-content">
    <div className="w-6">
    <img src={portrait} alt="Catherine Sibley"></img>
    </div>
      <div className="w-9 padlr">
          <h1>About Me</h1>
          <p>
          I am a front end web developer and web designer leveraging 10 years design experience focused on user-intuitive design and innovative brand development. I have a certificate in Full Stack Web Development from the University of Wisconsin Coding Boot Camp (2021), and BFA from Washington University in St. Louis (2011). 
          </p>
          <p>If you need an innovative problem-solver who is passionate about achieving measurable results, with strengths in creativity, teamwork, adaptability, and building projects from ideation to execution, I have you covered.
          </p>
      </div>
  </section>
);


export default About;
