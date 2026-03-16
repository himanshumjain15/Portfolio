"use client";

import { useEffect, useState } from "react";
import { FileText, Sparkles } from "lucide-react";
import { personalInfo, floatingBadges } from "@/data/portfolio";

export function HeroSection() {
  const [greeting, setGreeting] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullGreeting = "Hello, I'm";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullGreeting.length) {
        setGreeting(fullGreeting.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-layout mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Typewriter greeting */}
            <p className="text-[16px] font-body text-text-secondary mb-3 h-6">
              {greeting}
              {showCursor && <span className="typewriter-cursor" />}
            </p>

            {/* Name */}
            <h1 className="text-[44px] sm:text-[60px] lg:text-[80px] font-display font-bold leading-[1.05] mb-4 gradient-text">
              {personalInfo.name.split(" ").slice(0, 2).join(" ")}
            </h1>

            {/* Tagline */}
            <p
              className="text-[20px] sm:text-[24px] font-display font-medium text-text-secondary mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              {personalInfo.tagline}
            </p>

            {/* Description */}
            <p
              className="text-[18px] sm:text-[20px] text-text-primary/85 max-w-[520px] mb-8 leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "1.5s" }}
            >
              {personalInfo.description}
            </p>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "1.8s",
                background: "color-mix(in srgb, var(--accent-experience) 12%, transparent)",
                border: "1px solid color-mix(in srgb, var(--accent-experience) 35%, transparent)",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-experience opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-experience" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.10em] text-accent-experience">
                {personalInfo.degree} · {personalInfo.university} · {personalInfo.seeking}
              </span>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "2s" }}
            >
              <a
                href="#projects"
                className="btn-primary"
                style={{ "--btn-color": "var(--accent-hero)" } as React.CSSProperties}
              >
                <Sparkles size={16} />
                View My Work
                <span className="arrow">→</span>
              </a>
              <a
                href={personalInfo.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ "--btn-color": "var(--accent-hero)" } as React.CSSProperties}
              >
                <FileText size={16} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right — Floating badges (no headshot since not provided) */}
          <div
            className="relative hidden lg:flex items-center justify-center w-[320px] h-[320px] opacity-0 animate-fade-in"
            style={{ animationDelay: "2.2s" }}
          >
            {/* Decorative circles */}
            <div
              className="absolute w-[160px] h-[160px] rounded-full"
              style={{
                border: "2px solid color-mix(in srgb, var(--accent-hero) 25%, transparent)",
                background: "color-mix(in srgb, var(--accent-hero) 5%, transparent)",
              }}
            />
            <div
              className="absolute w-[240px] h-[240px] rounded-full"
              style={{
                border: "1.5px solid color-mix(in srgb, var(--accent-hero) 15%, transparent)",
              }}
            />
            <div
              className="absolute w-[310px] h-[310px] rounded-full"
              style={{
                border: "1px solid color-mix(in srgb, var(--accent-about) 10%, transparent)",
              }}
            />

            {/* Floating skill badges */}
            {floatingBadges.map((badge, i) => {
              const positions = [
                { top: "0px", left: "20px", rotate: "-8deg", duration: "4.2s", distance: "-6px" },
                { top: "10px", right: "0px", rotate: "6deg", duration: "3.8s", distance: "-5px" },
                { bottom: "20px", left: "0px", rotate: "10deg", duration: "5.1s", distance: "-7px" },
                { bottom: "0px", right: "10px", rotate: "-4deg", duration: "4.6s", distance: "-4px" },
              ];
              const { duration, distance, rotate, ...cssPos } = positions[i];

              return (
                <div
                  key={badge.label}
                  className="floating-badge absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-0 shadow-sm border border-border-subtle"
                  style={{
                    ...cssPos,
                    "--float-duration": duration,
                    "--float-distance": distance,
                    "--float-rotate": rotate,
                  } as unknown as React.CSSProperties}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--accent-hero)" }}
                  />
                  <span className="font-mono text-[12px] text-text-primary">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
