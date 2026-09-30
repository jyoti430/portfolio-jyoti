const linkLabels = [
  ["liveDemo", "Live Demo"],
  ["github", "GitHub"],
  ["caseStudy", "Case Study"],
];

export default function ProjectLinks({ links = {}, label = "Project links" }) {
  const availableLinks = linkLabels.filter(([key]) => links[key]);

  if (availableLinks.length === 0) return null;

  return (
    <ul className="project-links" aria-label={label}>
      {availableLinks.map(([key, text]) => (
        <li key={key}>
          <a href={links[key]} target="_blank" rel="noreferrer">
            {text} <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
