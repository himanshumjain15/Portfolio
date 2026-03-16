"use client";

import { ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { projects } from "@/data/portfolio";
import Link from "next/link";

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => p !== featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-layout mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-projects)">Projects</SectionHeading>

        {/* Featured project hero card */}
        {featured && (
          <ScrollReveal className="mb-8">
            <Link href={`/projects/${featured.id}`}>
              <div
                className="portfolio-card p-6 lg:p-8 cursor-pointer group relative overflow-hidden"
                style={{ "--card-accent": "var(--accent-projects)" } as React.CSSProperties}
              >
                {/* Permanent left accent strip */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: "var(--accent-projects)" }}
                />
                {/* Featured badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em]"
                    style={{
                      background: "color-mix(in srgb, var(--accent-projects) 15%, transparent)",
                      color: "var(--accent-projects)",
                      border: "1px solid color-mix(in srgb, var(--accent-projects) 30%, transparent)",
                    }}
                  >
                    <Star size={12} />
                    Featured
                  </div>
                  <span className="text-[12px] font-mono text-text-tertiary">
                    {featured.year}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
                  <div>
                    <h3 className="text-[26px] font-display font-semibold text-text-primary mb-2 group-hover:text-accent-projects transition-colors duration-200">
                      {featured.title}
                    </h3>
                    <p className="text-[15px] text-text-secondary mb-4">
                      {featured.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag-link"
                          style={{ "--tag-color": "var(--accent-projects)" } as React.CSSProperties}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[14px] text-text-primary/80 leading-relaxed mb-4">
                      {featured.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span
                        className="btn-text text-[14px]"
                        style={{ "--btn-color": "var(--accent-projects)" } as React.CSSProperties}
                      >
                        View Project
                        <span className="arrow">→</span>
                      </span>
                      {featured.links.map((link) => (
                        <span
                          key={link.label}
                          className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-accent-projects transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(link.url, "_blank");
                          }}
                        >
                          <ExternalLink size={13} />
                          {link.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 70}>
              <Link href={`/projects/${project.id}`}>
                <div
                  className="portfolio-card p-5 h-full cursor-pointer group relative overflow-hidden"
                  style={{ "--card-accent": "var(--accent-projects)" } as React.CSSProperties}
                >
                  {/* Decorative index */}
                  <span
                    className="absolute top-2 right-3 font-display font-bold text-[64px] leading-none select-none pointer-events-none"
                    style={{ opacity: 0.04, color: "var(--text-primary)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-mono text-text-tertiary">
                      {project.year}
                    </span>
                    <div className="flex gap-2">
                      {project.links.map((link) => (
                        <span
                          key={link.label}
                          className="text-text-tertiary hover:text-accent-projects transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(link.url, "_blank");
                          }}
                        >
                          <ExternalLink size={14} />
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-[18px] font-display font-semibold text-text-primary mb-2 group-hover:text-accent-projects transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary mb-4 line-clamp-2">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="tag-link text-[11px]"
                        style={{ "--tag-color": "var(--accent-projects)" } as React.CSSProperties}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
