"use client";

import { useEffect, useLayoutEffect, useState, useCallback, useRef } from "react";
import {
  Github, Linkedin, Mail, Sun, Moon,
  Home, User, Briefcase, FolderOpen, FlaskConical, Wrench, Send,
} from "lucide-react";
import { useTheme } from "next-themes";
import { personalInfo, sections } from "@/data/portfolio";

const sectionIcons = [Home, User, Briefcase, FolderOpen, FlaskConical, Wrench, Send];

// macOS dock magnification: Gaussian-like falloff
function getMagnification(distance: number, maxDist: number, maxScale: number) {
  if (distance > maxDist) return 1;
  const ratio = 1 - distance / maxDist;
  return 1 + (maxScale - 1) * Math.cos((1 - ratio) * Math.PI * 0.5) ** 2;
}

export function TimelinePanel() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const [showLabels, setShowLabels] = useState(false);
  const { theme, setTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Measure icon positions and set track bounds
  useLayoutEffect(() => {
    const updateTrackBounds = () => {
      const nav = navRef.current;
      const first = dotRefs.current[0];
      const last = dotRefs.current[sections.length - 1];
      if (!nav || !first || !last) return;

      const navRect = nav.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      const topOffset = firstRect.top + firstRect.height / 2 - navRect.top;
      const bottomOffset = navRect.bottom - (lastRect.top + lastRect.height / 2);

      nav.style.setProperty("--track-top", `${topOffset}px`);
      nav.style.setProperty("--track-bottom", `${bottomOffset}px`);
    };

    requestAnimationFrame(updateTrackBounds);
    window.addEventListener("resize", updateTrackBounds);
    return () => window.removeEventListener("resize", updateTrackBounds);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);

    const sectionEls = sections.map((s) => document.getElementById(s.id));
    let currentIndex = 0;
    for (let i = sectionEls.length - 1; i >= 0; i--) {
      const el = sectionEls[i];
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          currentIndex = i;
          break;
        }
      }
    }
    setActiveSection(currentIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const nav = navRef.current;
    if (!nav) return;
    const rect = nav.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
    setShowLabels(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseY(null);
    setShowLabels(false);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const activeColor = `var(${sections[activeSection]?.cssVar || "--accent-hero"})`;

  // Calculate scales for each dock item
  const scales = sections.map((_, i) => {
    if (mouseY === null) return 1;
    const btn = dotRefs.current[i];
    if (!btn) return 1;
    const nav = navRef.current;
    if (!nav) return 1;
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const btnCenter = btnRect.top + btnRect.height / 2 - navRect.top;
    const dist = Math.abs(mouseY - btnCenter);
    return getMagnification(dist, 120, 1.6);
  });

  return (
    <div className="timeline-panel dock-panel" role="navigation" aria-label="Page sections">
      {/* Avatar only */}
      <div className="dock-identity">
        <button onClick={() => scrollToSection("hero")} className="dock-avatar-btn">
          <div className="dock-avatar" style={{ "--avatar-color": activeColor } as React.CSSProperties}>
            {personalInfo.firstName[0]}{personalInfo.name.split(" ")[1]?.[0]}
          </div>
        </button>
      </div>

      {/* Dock nav */}
      <div
        className="dock-nav"
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Progress track */}
        <div className="dock-track">
          <div
            className="dock-track-fill"
            style={{
              height: `${scrollProgress * 100}%`,
              background: `linear-gradient(to bottom, var(${sections[0].cssVar}), ${activeColor})`,
            }}
          />
        </div>

        {/* Dock items */}
        <div className="dock-items">
          {sections.map((section, i) => {
            const isActive = i === activeSection;
            const isVisited = i < activeSection;
            const color = `var(${section.cssVar})`;
            const Icon = sectionIcons[i];
            const scale = scales[i];
            const size = 36 * scale;

            return (
              <button
                key={section.id}
                ref={(el) => { dotRefs.current[i] = el; }}
                onClick={() => scrollToSection(section.id)}
                className={`dock-item ${isActive ? "active" : ""} ${isVisited ? "visited" : ""}`}
                style={{
                  "--item-color": color,
                  "--item-scale": scale,
                } as React.CSSProperties}
              >
                <div className="dock-icon-wrap" style={{ width: size, height: size }}>
                  <div className={`dock-icon-bg ${isActive ? "active" : ""}`} />
                  <Icon
                    size={16 * Math.min(scale, 1.3)}
                    className={`dock-icon ${isActive ? "active" : ""} ${isVisited ? "visited" : ""}`}
                  />
                  {isActive && <div className="dock-icon-indicator" />}
                </div>

                {/* Tooltip label */}
                <div
                  className="dock-tooltip"
                  style={{ opacity: showLabels && scale > 1.15 ? 1 : 0 }}
                >
                  {section.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="dock-bottom">
        <div className="dock-separator" />
        <div className="dock-social-row">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="dock-social" style={{ "--social-color": activeColor } as React.CSSProperties} aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="dock-social" style={{ "--social-color": activeColor } as React.CSSProperties} aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="dock-social" style={{ "--social-color": activeColor } as React.CSSProperties} aria-label="Email">
            <Mail size={15} />
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="dock-social dock-theme"
              style={{ "--social-color": activeColor } as React.CSSProperties}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
