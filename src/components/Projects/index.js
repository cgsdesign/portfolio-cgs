//import React, { useState } from 'react';
import projects from '../../projects.json';
import "./project.css"
import { useSpring, animated } from 'react-spring'


function Project() {
    const [projectList] = [projects]
    //const [projectList] = useState(projects)
//     const items = range(4)
// const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

  const propsMove2 = useSpring({
        opacity: 1,
        from: { scale: 10, transform: "scale(0.5)" },
        to: { scale: 150, transform: "scale(1)", freq: "0.0, 0.0" },
        config: { duration: 1000 },
      });

      const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#fff" }));


    return(
        <div className="cardsection">
            {projectList.map(project =>
            <div className="carded" key={project.id}>
                            <animated.div style={propsMove2} >
                <a href={project.live} target="_blank" rel="noreferrer">
                        <div className="cardimg">
                            <div className="cardoverflowing">
                            <img src={require(`../../assets/images/portfolio/${project.image}`).default} alt={project.project}/>
                            </div>
                        </div>
                </a>
                <h3 className="orange">{project.project}</h3>
                <div className="overflow">
                    <a href={project.github} target="_blank" rel="noreferrer">
                    <h4>github link</h4>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                    <h4>live site</h4>
                    </a>
                </div>
                <div className="bottom">
                        <p>{project.focus}</p>
                </div>
                </animated.div>
            </div>
                )}
        </div>
    )
};

export default Project;