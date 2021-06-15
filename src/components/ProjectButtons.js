import React from "react";

function ProjectButtons(props) {
    return (
        <div className="d-flex justify-content-center" id="project-btn-container">

            <button onClick={() => props.filterProjects("front-end")} className="btn btn-primary custom-size custom-btn mt-4 mb-4 ml-3 mr-3 p-3 project-btn" id="front-end-btn">Front-End Projects</button>
            <button onClick={() => props.filterProjects("back-end")} className="btn btn-primary custom-size custom-btn mt-4 mb-4 ml-3 mr-3 p-3 project-btn" id="back-end-btn">Back-End Projects</button>
            <button onClick={() => props.filterProjects("full-stack")} className="btn btn-primary custom-size custom-btn mt-4 mb-4 ml-3 mr-3 p-3 project-btn" id="full-stack-btn">Full-Stack Projects</button>
            <button onClick={() => props.filterProjects("display-all")} className="btn btn-primary custom-size custom-btn mt-4 mb-4 ml-3 mr-3 p-3 project-btn" id="display-all-btn">Display All Projects</button>

        </div>
    )
}

export default ProjectButtons;