import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function ProjectMotif({ kind }) {
  if (kind === "agriculture") {
    return (
      <svg className="project-visual__motif" viewBox="0 0 500 280" fill="none" aria-hidden="true">
        <path className="project-motif__line" d="M48 220C121 175 192 174 250 220C308 266 379 265 452 220" />
        <path className="project-motif__line" d="M48 190C121 145 192 144 250 190C308 236 379 235 452 190" />
        <path className="project-motif__line" d="M48 160C121 115 192 114 250 160C308 206 379 205 452 160" />
        <path className="project-motif__accent" d="M250 159V77M250 111C224 109 207 95 200 75C225 75 243 88 250 111ZM250 128C274 124 291 108 297 87C274 89 257 103 250 128Z" />
        <circle className="project-motif__node" cx="250" cy="159" r="5" />
      </svg>
    );
  }

  if (kind === "supply-chain") {
    return (
      <svg className="project-visual__motif" viewBox="0 0 500 280" fill="none" aria-hidden="true">
        <path className="project-motif__line" d="M88 188L178 112L274 167L389 83M178 112L194 216L321 216L389 83M274 167L389 220" />
        <path className="project-motif__accent" d="M88 188L178 112L274 167L389 83" />
        <circle className="project-motif__node" cx="88" cy="188" r="8" />
        <circle className="project-motif__node" cx="178" cy="112" r="11" />
        <circle className="project-motif__node project-motif__node--accent" cx="274" cy="167" r="13" />
        <circle className="project-motif__node" cx="389" cy="83" r="9" />
        <circle className="project-motif__node" cx="194" cy="216" r="7" />
        <circle className="project-motif__node" cx="321" cy="216" r="7" />
        <circle className="project-motif__node" cx="389" cy="220" r="7" />
      </svg>
    );
  }

  if (kind === "cad") {
    return (
      <svg className="project-visual__motif" viewBox="0 0 500 280" fill="none" aria-hidden="true">
        <path className="project-motif__line" d="M145 82C145 70 155 60 167 60H333C345 60 355 70 355 82V198C355 210 345 220 333 220H167C155 220 145 210 145 198V82Z" />
        <path className="project-motif__line" d="M183 60V220M317 60V220M145 111H355M145 169H355" />
        <path className="project-motif__accent" d="M183 111C207 97 226 97 250 111C274 125 293 125 317 111M183 169C207 155 226 155 250 169C274 183 293 183 317 169" />
        <circle className="project-motif__node project-motif__node--accent" cx="250" cy="140" r="6" />
      </svg>
    );
  }

  return (
    <svg className="project-visual__motif" viewBox="0 0 500 280" fill="none" aria-hidden="true">
      <path className="project-motif__line" d="M151 73H278L326 121V223H151V73Z" />
      <path className="project-motif__line" d="M278 73V121H326M174 103H250M174 124H226M174 189H246M174 207H274" />
      <path className="project-motif__line" d="M192 93V55H319L361 97V191H326" />
      <path className="project-motif__accent" d="M246 156C265 137 291 137 309 156M246 156C265 175 291 175 309 156" />
      <circle className="project-motif__node project-motif__node--accent" cx="246" cy="156" r="5" />
      <circle className="project-motif__node" cx="309" cy="156" r="5" />
    </svg>
  );
}

export default function ProjectVisual({ project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className="project-visual"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.2, 0, 0, 1] }}
    >
      {project.image ? (
        <Image
          className="project-visual__image"
          src={project.image.src}
          alt={project.image.alt || `${project.title} project image`}
          fill
          sizes="(max-width: 56rem) 100vw, 50vw"
        />
      ) : (
        <div className="project-visual__placeholder">
          <ProjectMotif kind={project.visual} />
          <figcaption className="project-visual__caption">
            <span>Abstract project motif</span>
            <span>Conceptual placeholder — not a project screenshot</span>
          </figcaption>
        </div>
      )}
    </motion.figure>
  );
}
