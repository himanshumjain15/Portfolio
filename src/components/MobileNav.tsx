"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { personalInfo, sections } from "@/data/portfolio";

export function MobileNav() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const nodeColors = sections.map((s) => `var(${s.cssVar})`);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);

    const sectionEls = sections.map((s) => document.getElementById(s.id));
    let currentIndex = 0;
    for (let i = sectionEls.length - 1; i >= 0; i--) {
      const el = sectionEls[i];
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        currentIndex = i;
        break;
      }
    }
    setActiveSection(currentIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Top bar */}
      <div className="mobile-topbar">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-display font-bold text-[16px] text-text-primary"
        >
          {personalInfo.firstName}
        </button>

        <div className="flex-1" />

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-text-secondary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 text-text-secondary"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Progress bar */}
        <div
          className="mobile-progress"
          style={{
            width: `${scrollProgress * 100}%`,
            backgroundColor: nodeColors[activeSection],
          }}
        />
      </div>

      {/* Full-screen overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          style={{ animation: "fade-in 0.3s ease-out" }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center gap-6">
            {sections.map((section, i) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group flex items-center gap-4 transition-transform duration-200 hover:translate-x-3"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div
                  className="w-1 h-12 rounded-full transition-all duration-200 group-hover:w-2"
                  style={{ backgroundColor: nodeColors[i] }}
                />
                <span className="font-display font-bold text-[42px] text-white/80 group-hover:text-white transition-colors">
                  {section.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
