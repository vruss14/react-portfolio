import React from "react";

function Project() {
    return (
        <section id="completed-projects">

        <h2 class = "display-2 mb-5">Projects</h2>

        <h3 class = "display-3 text-center mb-5" id = "full-stack-apps">Full-Stack Applications</h3>

        <div class = "custom-wrapper">
            <div class="card mb-5 ml-5 mr-5 custom-card">
                <img class="card-img-top" src="images/screenshots/resized/debugged-screenshot-resized.png" alt="Debugged and Deconstructed home page" />
                <div class="card-body text-center">
                  <h3 class="card-title display-4">Debugged & Deconstructed</h3>
                  <p class="card-text">RESTful API that allows logged in users to write and edit blog posts about web development.</p>
                  <a href="https://debugged-and-deconstructed.herokuapp.com/" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">Deployed Website</a>
                  <a href="https://github.com/vruss14/web-development-blog" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
                </div>
              </div>
    
            <div class="card mb-5 ml-5 mr-5 custom-card">
                <img class="card-img-top" src="images/screenshots/resized/space-e-screenshot-resized.png" alt="Space-E home page" />
                <div class="card-body text-center">
                  <h3 class="card-title display-4">Space-E</h3>
                  <p class="card-text">RESTful API that fetches space-related data from several public third-party APIs to help users learn about space-related topics and upcoming events.</p>
                  <a href="https://space-e.herokuapp.com/" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">Deployed Website</a>
                  <a href="https://github.com/bborumoore/space-e" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
                </div>
            </div>

        </div>


        <h3 class = "display-3 text-center mt-5 mb-5" id = "front-end-apps">Front-End Applications</h3>

        <div class = "custom-wrapper">
            <div class="card mb-5 ml-5 mr-5 custom-card">
                <img class="card-img-top" src="images/screenshots/resized/dingen-screenshot-resized.png" alt="DinGen homepage" />
                <div class="card-body text-center">
                  <h3 class="card-title display-4">DinGen</h3>
                  <p class="card-text">JavaScript-based dinner generator that leverages data from two public third-party APIs to help users plan meals and find new recipes.</p>
                  <a href="https://ellisaissa.github.io/DinGen-Web/" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">Deployed Website</a>
                  <a href="https://github.com/ellisaissa/DinGen-Web" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
                </div>
              </div>
    
            <div class="card mb-5 ml-5 mr-5 custom-card">
                <img class="card-img-top" src="images/screenshots/resized/coding-quiz-screenshot-resized.png" alt="Coding Quiz homepage" />
                <div class="card-body text-center">
                  <h3 class="card-title display-4">Coding Quiz</h3>
                  <p class="card-text">Tests junior developers on their front-end web development knowledge, and stores high scores locally.</p>
                  <a href="https://vruss14.github.io/coding-quiz/" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">Deployed Website</a>
                  <a href="https://github.com/vruss14/coding-quiz" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
                </div>
            </div>

        </div>


        <h3 class = "display-3 text-center mt-5 mb-5" id = "back-end-apps">Back-End Applications</h3>

        <div class = "custom-wrapper">
            <div class="card mb-5 ml-5 mr-5 custom-card">
                <img class="card-img-top" src="images/screenshots/resized/ecommerce-screenshot-resized.png" alt="Ecommerce back-end" />
                <div class="card-body text-center">
                  <h3 class="card-title display-4">E-Commerce Site</h3>
                  <p class="card-text">A functional back-end for an e-commerce site. Users can create, read, update, and delete product information as needed.</p>
                  <a href="https://github.com/vruss14/ecommerce" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
                </div>
              </div>
    
            <div class="card mb-5 ml-5 mr-5 custom-card">
                <img class="card-img-top" src="images/screenshots/original/view-all-departments.png" alt="Command line employee tracker" />
                <div class="card-body text-center">
                  <h3 class="card-title display-4">Employee Tracker</h3>
                  <p class="card-text">Simple CMS solution to view and modify basic employee data for an organization via the command line.</p>
                  <a href="https://github.com/vruss14/employee-tracker" target= "_blank" rel = "noreferrer" class="btn btn-primary mb-3 custom-size custom-btn">GitHub Repository</a>
                </div>
            </div>

        </div>

        </section>
    )
}

export default Project;