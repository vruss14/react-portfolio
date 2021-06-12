import React from "react";

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
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item ml-5 mr-5">
                            <a className="nav-link text-white" href="#about-me">About Me</a>
                        </li>
                        <li className="nav-item dropdown ml-5 mr-5">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                            
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#full-stack-apps">Full-stack Applications</a>
                                <a className="dropdown-item" href="#front-end-apps">Front-end Applications</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#back-end-apps">Back-end Applications</a>
                            </div>
                        </li>
                        <li className="nav-item ml-5 mr-5">
                            <a className="nav-link text-white" href="#contact-info">Contact Information</a>
                        </li>
                        <li className="nav-item ml-5 mr-5">
                            <a className="nav-link text-white" href="./public/valerie-russell-technical-resume-may.pdf" target="_blank">Resumé PDF</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;