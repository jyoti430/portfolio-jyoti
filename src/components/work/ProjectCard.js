import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({ project }) {
  return (
    <article className="more-project" aria-labelledby={`${project.id}-title`}>
      <div className="project-overline">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3 className="more-project__title" id={`${project.id}-title`}>{project.title}</h3>
      <p className="more-project__description type-secondary">{project.description}</p>
      {project.result ? <p className="more-project__result">{project.result}</p> : null}
      <ul className="project-tags" aria-label={`Technologies for ${project.title}`}>
        {project.technologies.map((technology) => (
          <li className="project-tag" key={technology}>{technology}</li>
        ))}
      </ul>
      <ProjectLinks links={project.links} label={`${project.title} links`} />
    </article>
  );
}
