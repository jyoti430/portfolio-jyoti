"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar({ brand = null, items = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linksId = useId();

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <nav className="site-nav container" aria-label="Main navigation">
        {brand ? (
          <Link className="site-nav__brand" href="#top" onClick={() => setMenuOpen(false)}>
            {brand}
          </Link>
        ) : null}

        {items.length > 0 ? (
          <>
            <button
              className="site-nav__toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls={linksId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>

            <ul
              className="site-nav__links"
              id={linksId}
              data-open={menuOpen}
            >
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    className="site-nav__link"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </nav>
    </header>
  );
}
