import React from "react";

// Component for the home page
// Includes portrait and about me info

function About() {
    return (
        <section id="about-me">
        
            <figure className="image-wrapper">
                <img id="portfolio-img" src="/images/screenshots/original/developer-portrait.jpeg" alt="Valerie portrait" />
            </figure>
        
            <h2 className="display-3 mb-3">About Me</h2>
        
            <p> Full-stack web developer with a bachelor’s of science in human biology,
                along with professional experiences in neuroscience research, copyediting,
                and crisis resolution. Strong interest in using logical reasoning, a detail-oriented mindset,
                and a calm demeanor to solve problems effectively. </p><br />
        
            <p> Currently working towards a certificate in full-stack web development,
                through which I am obtaining proficiency in the MERN stack. Because of my previous professional experiences as
                an editor,
                I have a particular passion for debugging and refactoring code to
                produce deliverables that are both fully functional and easy to maintain.</p><br />
        
        
            <p> I have now created/helped to build multiple full-stack applications, which is one of my greatest professional
                accomplishments.
                Moving forward, I am excited to continue building applications that improve lives and change the world for the
                better.</p><br />
        
            <p>This portfolio includes links to a few of my favorite completed projects. If you have
                any questions or if you would like to contact me, you can find my contact information on the bottom of the page.
            </p><br />
        
        </section>
    );
}

export default About;