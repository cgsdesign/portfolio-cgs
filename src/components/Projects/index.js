//import React, { useState } from 'react';
import projects from '../../projects.json';
import "./project.css"
//import image from "../../assets/images"
//create styling for one module
//create array of information
        //Image, Title, Link to Deployed Site, Link to Github, (optional description)
// map over array and insert in the information for the modules

function Project() {
    const [projectList] = [projects]
    //const [projectList] = useState(projects)

    return(
        <div className="cardsection">
            {projectList.map(project =>
            <div className="carded" key={project.id}>
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
            </div>
                )}
        </div>
    )
};

export default Project;