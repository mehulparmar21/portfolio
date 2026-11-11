"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  CloseIcon,
  ArrowUpRightIcon,
} from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          href="#home"
          className="brand"
          onClick={closeMobileMenu}
          aria-label="Mehul Parmar - Home"
        >
          <span className="brand-name">Mehul Parmar</span>
          <span className="brand-role">Technical Lead</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${
                activeSection === link.href.slice(1) ? "active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon size={19} />
          </a>

          <a href="mailto:hello@example.com" className="social-link" aria-label="Email" title="Email">
            <Mail size={18} />
          </a>

          <ThemeToggle />

          <a href="#contact" className="header-contact">
            Let&apos;s Talk <ArrowUpRightIcon size={15} />
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <CloseIcon size={23} />
            ) : (
              <MenuIcon size={23} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${
                activeSection === link.href.slice(1) ? "active" : ""
              }`}
              onClick={closeMobileMenu}
            >
              <span className="mobile-nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}

          <div className="mobile-socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              <GithubIcon size={18} /> GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}