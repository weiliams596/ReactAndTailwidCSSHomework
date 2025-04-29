import React from 'react'

import { Link } from 'react-router-dom';
import { InsertNewProjection } from '../Assets/ProjectionsConfig';

export function ProjectInfo({ project }) {
    const links = `/HW10/project/${project.id}`;
    return (
        <div className="project-car">
            <h3>{project.ProjectName}</h3>
            <p><mark>{project.ProjectLang}</mark></p>
            <Link to={links} >Show detail</Link>
        </div>
    );
}

async function addProject(e) {
    e.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const projectLang = document.getElementById('projectLang').value;
    const coDevelopers = document.getElementById('coDevelopers').value;
    const coDevelopersArr = coDevelopers.split(' ');
    await InsertNewProjection(projectName, projectLang, coDevelopersArr);
    window.location.reload();
}

export default function ProjectList({ projects }) {

    return (
        <div>
            <form onSubmit={addProject}>
                <input type="text" placeholder='Project Name' id='projectName' />
                <input type="text" placeholder='Project Lang' id='projectLang' />
                <input type="text" placeholder='Co-Developers' id='coDevelopers' />
                <button type="submit">Add Project</button>
            </form>
            {projects && projects.map(project => (
                <ProjectInfo key={project.id} project={project} />
            ))}
        </div>
    )
}
