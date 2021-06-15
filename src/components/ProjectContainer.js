import React from "react";

// Separates the entire projects section into its own container

function ProjectContainer(props) {
    return (
        <section className="custom-wrapper" id="completed-projects">{props.children}</section>
    )
}

export default ProjectContainer;