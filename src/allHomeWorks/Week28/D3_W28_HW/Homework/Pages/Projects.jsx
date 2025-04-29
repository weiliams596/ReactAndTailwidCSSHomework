import React, { useEffect,useState } from 'react'

import ProjectList from '../Components/ProjectList';

import {GetProjections} from '../Assets/ProjectionsConfig';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        GetProjections().then(data => {
            setProjects(data);
        });
    },[]);
    
    return (
        <div>
            {projects&& <ProjectList projects={projects} />}
        </div>
      )
}
