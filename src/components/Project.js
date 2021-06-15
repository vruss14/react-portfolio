import React from "react";

function Project(props) {

  // Back-end projects do not have a deployed URL; so the project from the JSON file should either be rendered with
  // two buttons (if there is a deployed link), or one (the repository link) if it is a back-end project

  if (props.deployed_url) {
    return (
      <div className="card mb-5 ml-5 mr-5 custom-card">
        <img className="card-img-top" src={props.image} alt={props.alt} />
        <div className="card-body text-center">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.description}</p>
          <a href={props.deployed_url} target="_blank" rel="noreferrer" className="btn btn-primary mb-3 custom-size custom-btn">Deployed Website</a>
          <a href={props.repo_url} target="_blank" rel="noreferrer" className="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
        </div>
      </div>
    )
  }

  return (
    <div className="card mb-5 ml-5 mr-5 custom-card">
      <img className="card-img-top" src={props.image} alt={props.alt} />
      <div className="card-body text-center">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
        <a href={props.repo_url} target="_blank" rel="noreferrer" className="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
      </div>
    </div>
  )
}

export default Project;