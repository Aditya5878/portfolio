

import React from "react";
import "./About.css";
import aboutImage from "./profile.png";
function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello👋, I'm Aditya Verma, a second-year student at Indian Institute of Technology Hyderabad🏫.
            <br />
            Currently, I'm focusing on DSA, competitive programming, and exploring web development.
          </p>
          <div class="circular--portrait"> <img src={aboutImage} alt="Profile-img" /> </div>
        </div>
      </div>
    </section>
  );
}

export default About;
