import React from 'react';
// import Typed from 'react-typed';
import './Header.css';
// import { FaDownload } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="background-overlay"></div>

      <div className="main-info">
        <h1>Hello👋! I am Aditya</h1>
        <h6>MAE Undergraduate at IIT Hyderabad🎓</h6>
        <br />
        <span>
          <a href="#contact" className="btn-main-offer">Contact</a>
          <a href="#project" className="btn-my-work">My Work</a>
          {/* <a href="./src/files/resume.pdf" className="btn-my-resume "><FaDownload/>Download CV</a> */}
        </span>
      </div>
    </div>
  );
}

export default Header;
