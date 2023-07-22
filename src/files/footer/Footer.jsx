import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/aditya-verma-07a62023b/"><FaLinkedin /></a>
                    <a href="https://github.com/Aditya5878"><FaGithub /></a>
                    <a href="https://www.instagram.com/verma_aditya_28/"><FaInstagram /></a>

                </div>
                <p>© 2023 Aditya Verma. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;


