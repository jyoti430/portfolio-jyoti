"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Trophy } from "lucide-react";
import ProjectVisual from "./ProjectVisual";
import ProjectDetails from "./ProjectDetails";
import ProjectLinks from "./ProjectLinks";

export default function FeaturedProject({ project, reversed = false }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsId = useId();
  const reduceMotion = useReducedMotion();
  const technologies = project.coreTechnologies;

  return (
    <motion.article
      className="featured-project"
      data-reversed={reversed}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="featured-project__copy">
        <div className="project-overline">
          <span className="project-number">{project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>

        {project.achievement ? (
          <p className="project-achievement">
            <Trophy aria-hidden="true" size={15} /> {project.achievement}
          </p>
        ) : null}

        <h3 className="featured-project__title type-project" id={`${project.id}-title`}>
          {project.title}
        </h3>
        <p className="featured-project__description type-body type-secondary">
          {project.description}
        </p>

        <ul className="project-tags" aria-label={`Technologies for ${project.title}`}>
          {technologies.map((technology) => (
            <li className="project-tag" key={technology}>{technology}</li>
          ))}
        </ul>

        <ProjectLinks links={project.links} label={`${project.title} project links`} />

        <div className="featured-project__actions">
          <button
            className="project-details__toggle"
            type="button"
            aria-expanded={detailsOpen}
            aria-controls={detailsId}
            aria-label={`${detailsOpen ? "Hide" : "Show"} details for ${project.title}`}
            onClick={() => setDetailsOpen((open) => !open)}
          >
            {detailsOpen ? "Close details" : "Project details"}
            <ChevronDown aria-hidden="true" size={16} data-open={detailsOpen} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {detailsOpen ? (
            <motion.div
              className="project-details"
              id={detailsId}
              initial={reduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.2, 0, 0, 1] }}
            >
              <ProjectDetails project={project} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <ProjectVisual project={project} />
    </motion.article>
  );
}
