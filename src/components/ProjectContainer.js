import React from "react";

function ProjectContainer(props) {
    return (
        <section className="custom-wrapper" id="completed-projects">{props.children}</section>
    )
}

export default ProjectContainer;