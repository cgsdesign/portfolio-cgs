import React from "react";
import resume from "../../assets/resume/CGSresume.pdf"
import portfolio from "../../assets/resume/gd-portfolio.pdf"
import "./resume.css"

const Home = () => (
  <section className="resume">
    <h1>Resume</h1>
    <h3>Skills: </h3>
          <h4>Coding:</h4>
          <p> Languages: JavaScript ES6+, CSS3, SCSS, HTML5, SQL, NoSQL
          </p>
          <p>Applications: GitHub, MongoDB, HubSpot
          </p>
          <p>Tools: JQuery, Bootstrap, Node, Mongoose, Express, React, Handlebars
           </p>
           <p> Speed & Resource Optimization 
          </p>   
          <h4>Digital Media:</h4>
          <p>  PhotoShop, InDesign, Illustrator, SketchUp, Word, Excel, Power Point
          </p>  
          <h4>Traditional Media:</h4>
          <p>
            Oil Painting, Pen and Ink, Graphite, Water Color, Wood, Ceramics, Computer Generated Painting, Woodworking
          </p>
          <br></br>
          <a href={resume} target="_blank" rel="noreferrer">
            <button>Download Full Resume</button>
          </a>
          {' '} 
          <a href={portfolio} target="_blank" rel="noreferrer">
            <button>Download Full Design Portfolio</button>
          </a>
  </section>
);

export default Home;
