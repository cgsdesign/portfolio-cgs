import React, {useState} from "react";
import portrait from "../../assets/images/Catherine.jpg"
import shadow from "../../assets/images/shadow2.png"

import "./about.css"
import { useSpring, animated, useTransition } from 'react-spring'

//import range from 'lodash-es/range'

function About() {
  const propsMove2 = useSpring({
    opacity: 1,
    from: { scale: 10, transform: "scale(0.5)" },
    to: { scale: 150, transform: "scale(1)", freq: "0.0, 0.0" },
    config: { duration: 1000 },
  });

//  const items = ["1"]
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 4000 },
    reset: true,
  })

//  const shadows = ["1"]  
    const { scales } = useSpring({
      to: async next => {
        while (1) await next({ scale: 2 * Math.PI })
      },
      from: { scale: 0 },
      config: { duration: 4000 },
      reset: true,
    })
  


  return(
  <section className="about-content">
      <div className="w-6">
        <animated.div key="1" style={{ transform: radians.interpolate(interp(1))}}>
            <img src={portrait} alt="Catherine Sibley"></img>
        </animated.div>
        {/* <animated.div key="2" style={{ transform: scales.interpolate(interp(1))}}> */}
          <img src={shadow} alt="shadow"></img>   
      {/* </animated.div>    */}
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
  )};


export default About;
