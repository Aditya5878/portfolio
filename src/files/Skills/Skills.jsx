import React from "react";
import "./Skills.css";
import SkillsData from "./SkillsData";
function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {SkillsData.map((skillCategory) => {
            return (
              <div className="skills-category">
                <h3>{skillCategory.title}</h3>

                <ul>
            {skillCategory.description.map((item, index) => (
                   <li key={index}>            
              {item.icon} {item.text}
              </li>
             ))}
                    </ul>
               </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;




