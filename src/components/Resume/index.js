import React from "react";
import resume from "../../assets/Resume/resume.pdf"
import gdportfolio from "../../assets/Resume/gd-portfolio.pdf"
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
           <p> Speed & Resource Optomization 
          </p>   
          <h4>Digital Media:</h4>
          <p>  PhotoShop, InDesign, Illustrator, SketchUp, Word, Excel, Power Point
          </p>  
          <h4>Traditional Media:</h4>
          <p>
            Oil Painting, Pen and Ink, Graphite, Water Color, Wood, Ceramics, Computer Generated Painting, Woodworking
          </p>
          <br></br>
          <button href={resume}>Download Full Resume</button>
          {' '} 
          <button href={gdportfolio}>Download Full Design Portfolio</button>
  </section>
);

export default Home;
