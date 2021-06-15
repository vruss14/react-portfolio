import React from "react";
import { Link } from "react-router-dom";

// The header includes the main title (displayed on all pages) and the responsive nav bar
// Link paths are recognized by react-router-dom; #contact-info at the bottom of each page


function Header() {
    return (
        <div>
            <header className="d-flex justify-content-center align-items-center">
                <h1 id="page-title">Valerie Russell's Portfolio</h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">

                <div id="navbarSupportedContent">
                    <ul className="navbar-nav" id="custom-navbar">
                        <li className="nav-item ml-5 mr-5">
                            <a className="nav-link text-white" href="https://vruss14.github.io/react-portfolio">Home</a>
                        </li>
                        <li className="nav-item ml-5 mr-5">
                            <Link className="nav-link text-white" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item ml-5 mr-5">
                            <a className="nav-link text-white" href="https://vruss14.github.io/react-portfolio/#contact-info">Contact Information</a>
                        </li>
                        <li className="nav-item ml-5 mr-5">
                            <a className="nav-link text-white" href="https://vruss14.github.io/react-portfolio/valerie-russell-technical-resume-may.pdf" target="_blank" rel="noreferrer">Resumé PDF</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;