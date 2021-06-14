import React, { Component } from "react";
import ContentContainer from "./components/ContentContainer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import projects from "./utils/Projects";
import Footer from "./components/Footer"
import Small from "./components/Small"
import ProjectContainer from "./components/ProjectContainer";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <ContentContainer>
          <Header />
          <Main>
            <About />

            <ProjectContainer>
            
                {this.state.projects.map(project => (
                
                <Project
                  id={project.id}
                  key={project.id}
                  image={project.image}
                  alt={project.alt}
                  title={project.title}
                  description={project.description}
                  deployed_url={project.deployed_url}
                  repo_url={project.repo_url}
                />
              ))}

          </ProjectContainer>

          </Main>
          <Footer />
        </ContentContainer>
        <Small />
    </div>

    );
  }
}

export default App;

// function App() {
//   return (
//     <div>
//       <ContentContainer>
//         <Header />
//         <Main>
//           <About />
//           <Project 
//             />
//         </Main>
//         <Footer />
//       </ContentContainer>
//       <Small />
//     </div>


//   );
// }

// export default App;
