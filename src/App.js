import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContentContainer from "./components/ContentContainer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import ProjectButtons from "./components/ProjectButtons";
import projects from "./utils/Projects";
import Footer from "./components/Footer"
import Small from "./components/Small"
import ProjectContainer from "./components/ProjectContainer";

class App extends Component {
  state = {
    projects: projects,
    filteredProjects: projects
  };

  filterProjects = (event) => {

    // Conditionally sets state based on user preference; filters the projects that are displayed on the projects page

    let filtered;
    
    if(event === "front-end") {
      filtered = this.state.projects.filter(project => project.type === "front-end");
      this.setState({ filteredProjects: filtered });

    } else if (event === "back-end") {
      filtered = this.state.projects.filter(project => project.type === "back-end");
      this.setState({ filteredProjects: filtered });
    } else if (event === "full-stack") {
      filtered = this.state.projects.filter(project => project.type === "full-stack");
      this.setState({ filteredProjects: filtered });
    } else if (event === "display-all") {
      this.setState({ filteredProjects: projects });
    }

    return this.state.filteredProjects

  }

  render() {
    return (

      <Router>
        <div>
          <Switch>

          <Route exact path={process.env.PUBLIC_URL + '/'}>
              <ContentContainer>
              <Header />
              <Main>
                <About />
              </Main>
              <Footer />
              </ContentContainer>
              <Small />
            </Route>

            <Route exact path={process.env.PUBLIC_URL + '/projects'}>
              <ContentContainer>
              <Header />
              <Main>
             <ProjectContainer>
               <ProjectButtons
                  filterProjects={this.filterProjects}
                />
            
            {/* Each filtered project (or the default, which is all projects) are mapped to the Project component */}
            
                {this.state.filteredProjects.map(project => (
                        
                        <Project
                          id={project.id}
                          key={project.id}
                          image={project.image}
                          alt={project.alt}
                          title={project.title}
                          description={project.description}
                          deployed_url={project.deployed_url}
                          repo_url={project.repo_url}
                          type={project.type}
                        />
                      ))}
        
                  </ProjectContainer>

              </Main>
              <Footer />
              </ContentContainer>
              <Small />
            </Route>

          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;

