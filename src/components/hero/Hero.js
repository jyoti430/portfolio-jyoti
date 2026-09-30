"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: reduceMotion ? 0 : delay, ease: [0.2, 0, 0, 1] },
  });

  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <motion.div className="hero__identity" {...entrance(0.04)}>
          <span className="hero__name">JYOTI</span>
          <span className="hero__identity-divider" aria-hidden="true" />
          <p className="hero__eyebrow type-label">SOFTWARE DEVELOPER</p>
        </motion.div>

        <motion.h1 className="hero__title type-display" id="hero-title" {...entrance(0.1)}>
          I build thoughtful interfaces for real-world products.
        </motion.h1>

        <motion.p className="hero__summary type-body type-secondary" {...entrance(0.18)}>
          Frontend-focused developer working with React and JavaScript, with hands-on
          experience across AI/ML projects and full-stack applications.
        </motion.p>

        <motion.p className="hero__focus type-metadata" {...entrance(0.24)}>
          Frontend <span aria-hidden="true">·</span> Full-Stack <span aria-hidden="true">·</span> AI/ML Projects
        </motion.p>

        <motion.div className="hero__actions" {...entrance(0.3)}>
          <a className="button button--primary" href="#work">
            View my work <ArrowDown aria-hidden="true" size={16} />
          </a>
          {siteConfig.githubUrl ? (
            <a
              className="button button--secondary"
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ) : (
            <button
              className="button button--secondary hero__github-pending"
              type="button"
              disabled
              aria-label="GitHub link, URL not configured"
            >
              GitHub <ArrowUpRight aria-hidden="true" size={16} />
            </button>
          )}
        </motion.div>
      </div>

      <motion.div className="hero__visual" {...entrance(0.2)}>
        <HeroVisual />
      </motion.div>
    </section>
  );
}
