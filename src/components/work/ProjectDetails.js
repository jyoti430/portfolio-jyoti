import ProjectLinks from "./ProjectLinks";

function TechnologyGroups({ groups }) {
  return (
    <div className="project-details__technology">
      <h4>Technology</h4>
      {groups.map(({ group, items }) => (
        <div className="project-details__tech-group" key={group}>
          {groups.length > 1 ? <span>{group}</span> : null}
          <ul className="project-tags">
            {items.map((technology) => (
              <li className="project-tag" key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DetailList({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="project-details__list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function ProjectDetails({ project }) {
  return (
    <div className="project-details__content">
      {project.context ? (
        <div className="project-details__section">
          <h4>Context</h4>
          <p>{project.context}</p>
        </div>
      ) : null}

      <div className="project-details__section">
        <h4>What it does</h4>
        <p>{project.description}</p>
      </div>

      {project.contribution ? (
        <div className="project-details__section">
          <h4>My contribution</h4>
          <p>{project.contribution}</p>
        </div>
      ) : null}

      <TechnologyGroups groups={project.technologies} />
      <DetailList title="Capabilities" items={project.capabilities} />
      <DetailList title="MVP" items={project.mvp} />
      <ProjectLinks links={project.links} />
    </div>
  );
}
