"use client";

import { motion, useReducedMotion } from "framer-motion";
import { currentProjects, featuredProjects, moreProjects } from "@/data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import CurrentProject from "./CurrentProject";

export default function WorkSection() {
  const reduceMotion = useReducedMotion();
  const entranceTransition = {
    duration: reduceMotion ? 0 : 0.45,
    ease: [0.2, 0, 0, 1],
  };

  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={entranceTransition}
      >
        <header className="work-section__header">
          <p className="work-section__eyebrow type-label">SELECTED PROJECTS</p>
          <h2 className="work-section__title type-section" id="work-title">Work</h2>
        </header>

        <section className="work-group" aria-labelledby="featured-work-title">
          <h3 className="work-group__title" id="featured-work-title">Featured Work</h3>
          <div className="featured-projects">
            {featuredProjects.map((project, index) => (
              <FeaturedProject
                key={project.id}
                project={project}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        <section className="work-group work-group--more" aria-labelledby="more-work-title">
          <h3 className="work-group__title" id="more-work-title">More Work</h3>
          <div className="more-projects">
            {moreProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <section className="work-group work-group--current" aria-labelledby="current-work-title">
          <h3 className="work-group__title" id="current-work-title">Currently Building</h3>
          <div className="current-projects">
            {currentProjects.map((project) => <CurrentProject key={project.id} project={project} />)}
          </div>
        </section>
      </motion.div>
    </section>
  );
}
