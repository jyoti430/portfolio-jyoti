"use client";

import { useEffect, useState } from "react";
import { useReducedMotion, useSpring, motion } from "framer-motion";

const spring = { stiffness: 90, damping: 22, mass: 0.7 };

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const [hasHydrated, setHasHydrated] = useState(false);
  const motionEnabled = hasHydrated && reduceMotion === false;
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  function nodeMotion(delay, distance = 1.5) {
    if (!motionEnabled) return {};

    return {
      animate: { y: [0, -distance, 0] },
      transition: {
        duration: 6 + delay,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
      },
    };
  }

  function handlePointerMove(event) {
    if (reduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    x.set(horizontal * 10);
    y.set(vertical * 10);
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="hero-visual-shell" aria-hidden="true">
      <motion.div
        className="hero-visual"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPosition}
        style={reduceMotion ? undefined : { x, y }}
      >
        <svg
          className="hero-visual__diagram"
          viewBox="0 0 560 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <path className="hero-visual__connection" d="M158 116L230 204" />
          <path className="hero-visual__connection" d="M402 100L330 203" />
          <path className="hero-visual__connection" d="M228 254L142 365" />
          <path className="hero-visual__connection" d="M332 254L414 365" />
          <motion.path
            className="hero-visual__connection hero-visual__connection--accent"
            d="M160 405L399 405"
            animate={motionEnabled ? { opacity: [0.38, 0.58, 0.38] } : undefined}
            transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity }}
          />
          <path className="hero-visual__connection" d="M280 116V203" />

          <circle className="hero-visual__port" cx="158" cy="116" r="4" />
          <circle className="hero-visual__port" cx="402" cy="100" r="4" />
          <circle className="hero-visual__port hero-visual__port--accent" cx="280" cy="203" r="4" />
          <circle className="hero-visual__port" cx="142" cy="365" r="4" />
          <circle className="hero-visual__port" cx="414" cy="365" r="4" />

          <g transform="translate(84 70)">
            <motion.g className="hero-visual__module" {...nodeMotion(0.2)}>
            <rect width="148" height="92" rx="14" />
            <circle cx="27" cy="30" r="7" />
            <path d="M46 30H100M22 58H121M22 70H82" />
            </motion.g>
          </g>

          <g transform="translate(328 54)">
            <motion.g className="hero-visual__module" {...nodeMotion(1.1)}>
            <rect width="148" height="92" rx="14" />
            <rect x="21" y="22" width="34" height="34" rx="8" />
            <path d="M69 30H124M69 43H108M21 70H124" />
            </motion.g>
          </g>

          <g transform="translate(190 190)">
            <motion.g
              className="hero-visual__module hero-visual__module--core"
              {...nodeMotion(0.5, 0.8)}
            >
            <rect width="180" height="122" rx="18" />
            <motion.circle
              className="hero-visual__pulse"
              cx="42"
              cy="42"
              r="13"
              initial={false}
              animate={motionEnabled ? { r: [12, 15, 12], opacity: [0.18, 0.38, 0.18] } : undefined}
              transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
            />
            <circle className="hero-visual__core-dot" cx="42" cy="42" r="8" />
            <circle cx="68" cy="42" r="4" />
            <circle cx="84" cy="42" r="4" />
            <path d="M26 72H154M26 87H132M26 102H94" />
            </motion.g>
          </g>

          <g transform="translate(60 354)">
            <motion.g className="hero-visual__module" {...nodeMotion(1.8)}>
            <rect width="148" height="92" rx="14" />
            <path d="M24 28H124M24 43H92M24 66H64" />
            <circle cx="112" cy="66" r="10" />
            </motion.g>
          </g>

          <g transform="translate(352 354)">
            <motion.g className="hero-visual__module" {...nodeMotion(0.8)}>
            <rect width="148" height="92" rx="14" />
            <circle cx="34" cy="34" r="12" />
            <circle cx="74" cy="34" r="12" />
            <circle cx="114" cy="34" r="12" />
            <path d="M24 68H124" />
            </motion.g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
