import ProjectData from "./ProjectData";
import ProjectEntries from "./ProjectEntries";
import "./Projects.css";
function CreateProjectEntry(props) {
  return (
    <ProjectEntries
      title={props.title}
      description={props.description}
      webLink={props.webLink}
      gitHubLink={props.gitHubLink}
    />
  );
}

function Projects() {
  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2> Projects </h2>
        <div className="projects-container">
          {ProjectData.map(CreateProjectEntry)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
