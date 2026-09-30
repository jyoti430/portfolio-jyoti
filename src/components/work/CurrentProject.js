import { Mic } from "lucide-react";
import ProjectLinks from "./ProjectLinks";

export default function CurrentProject({ project }) {
  return (
    <article className="current-project" aria-labelledby={`${project.id}-title`}>
      <div className="current-project__icon" aria-hidden="true">
        <Mic size={21} strokeWidth={1.5} />
      </div>
      <div className="current-project__content">
        <div className="current-project__heading">
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <span className="current-project__status">{project.status}</span>
        </div>
        <p>{project.description}</p>
        <ul className="project-tags" aria-label={`Current direction for ${project.title}`}>
          {project.direction.map((item) => (
            <li className="project-tag" key={item}>{item}</li>
          ))}
        </ul>
        <ProjectLinks links={project.links} label={`${project.title} project links`} />
      </div>
    </article>
  );
}
