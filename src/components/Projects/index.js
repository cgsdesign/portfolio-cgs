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
            <div className="card" key={project.id}>
                <div className="cardimg">
                    <img src={require(`../../assets/images/portfolio/${project.image}`).default} alt={project.project}/>
                </div>
                <div className="overflow">
                    <h3>{project.project}</h3>
                    <a href={project.github} target="_blank" rel="noreferrer">
                    <h4>github link</h4>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                    <h4>live site</h4>
                    </a>
                    <p>{project.focus}</p>
                </div>
            </div>
                )}
        </div>
    )
};

export default Project;