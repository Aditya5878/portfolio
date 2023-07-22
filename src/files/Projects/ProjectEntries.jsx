import React from "react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectEntries(props){
  return(
     
    <div className="project">
       <h3> {props.title}  </h3>
       <p>  {props.description}  </p>
     
       <div className="buttons-container">
         <a href={props.webLink} className="btn-github"><FaExternalLinkAlt /> WebSite</a>
         <a href={props.gitHubLink} className="btn-website"><FaGithub /> GitHub</a>
       </div>

        </div>
    )
}

export default ProjectEntries;