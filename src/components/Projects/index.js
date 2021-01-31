import React, { useState } from 'react';
import projects from '../../projects.json';
//create styling for one module
//create array of information
        //Image, Title, Link to Deployed Site, Link to Github, (optional description)
// map over array and insert in the information for the modules

function Project() {
    const [projectList, setProjectList] = useState(projects)

    return(
        <div>
            {projectList.map(project =>
                <h3>{project.project}</h3>
                )}
        </div>
    )
};

export default Project;