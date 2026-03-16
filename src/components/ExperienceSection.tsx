"use client";

import { Building2, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { experiences, education } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-layout mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-experience)">Experience</SectionHeading>

        {/* Experience cards */}
        <div className="relative mt-10 space-y-10">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 150}>
              <div
                className="portfolio-card p-6"
                style={{ "--card-accent": "var(--accent-experience)" } as React.CSSProperties}
              >
                {/* Thread node */}
                <div
                  className="absolute -left-[25px] top-8 w-3 h-3 rounded-full bg-accent-experience border-2 border-surface-0"
                  style={{ marginLeft: "-12px" }}
                />

                <div
                  className="absolute left-0 top-0 bottom-0 w-[6px] rounded-l-2xl"
                  style={{ background: "var(--accent-experience)", opacity: 0.5 }}
                />

                {/* Header with company icon */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 mt-0.5"
                      style={{
                        background: "color-mix(in srgb, var(--accent-experience) 10%, transparent)",
                        color: "var(--accent-experience)",
                      }}
                    >
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-display font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-[15px] text-accent-experience font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] text-text-secondary font-medium">
                      {exp.dates}
                    </p>
                    <p className="text-[12px] text-text-tertiary">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Metrics highlight row */}
                {exp.metrics && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col items-center px-4 py-2 rounded-lg"
                        style={{
                          background: "color-mix(in srgb, var(--accent-experience) 8%, transparent)",
                          border: "1px solid color-mix(in srgb, var(--accent-experience) 15%, transparent)",
                        }}
                      >
                        <span className="text-[18px] font-display font-bold text-accent-experience leading-none">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-text-tertiary font-medium mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="w-full h-px bg-border-subtle mb-3" />

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-[14px] text-text-primary/85 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-experience/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-link"
                      style={{ "--tag-color": "var(--accent-experience)" } as React.CSSProperties}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-[20px] font-display font-semibold text-text-primary mb-6">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.institution} delay={i * 100}>
                <div
                  className="portfolio-card p-5"
                  style={{ "--card-accent": "var(--accent-experience)" } as React.CSSProperties}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                      style={{
                        background: "color-mix(in srgb, var(--accent-experience) 10%, transparent)",
                        color: "var(--accent-experience)",
                      }}
                    >
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-display font-semibold text-text-primary">
                        {edu.institution}
                      </h4>
                      <p className="text-[14px] text-text-secondary">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <p className="text-[13px] text-text-tertiary mb-2">
                    {edu.dates} · {edu.location}
                  </p>
                  {edu.gpa && (
                    <span
                      className="inline-block text-[12px] font-semibold px-2 py-0.5 rounded-md mb-2"
                      style={{
                        background: "color-mix(in srgb, var(--accent-experience) 10%, transparent)",
                        color: "var(--accent-experience)",
                      }}
                    >
                      GPA: {edu.gpa}
                    </span>
                  )}
                  {edu.coursework && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {edu.coursework.map((c) => (
                        <span
                          key={c}
                          className="tag-link text-[11px]"
                          style={{ "--tag-color": "var(--accent-experience)" } as React.CSSProperties}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
