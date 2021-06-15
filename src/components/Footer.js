import React from "react";

// Footer info includes contact information (clickable icons)

function Footer() {
    return (
        <footer id="contact-info">
            <a href="mailto:vruss14@gmail.com"><img src = "./images/icons/email-svgrepo-com.svg" alt = "email icon" className = "footer-icon" id = "email-svg" width = "64px" /></a><p>vruss14@gmail.com</p>
            <img src = "./images/icons/phone-svgrepo-com.svg" width = "64px" alt = "phone icon" id = "phone-svg" /><p>(313) 241-0774</p>
            <a href= "https://github.com/vruss14" target="_blank" rel = "noreferrer"><img src = "./images/icons/GitHub-Mark-Light-120px-plus.png" className = "footer-icon" alt = "GitHub icon" id = "github-logo" width = "64px" /></a>
            <a href= "https://www.linkedin.com/in/valerie-russell-732731162" target="_blank" rel = "noreferrer"><img src = "./images/icons/LI-In-Bug.png" alt = "LinkedIn icon" className = "footer-icon" id = "linkedin-logo" width = "64px" /></a>
        </footer>
    );
}

export default Footer;