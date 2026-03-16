"use client";

import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { research } from "@/data/portfolio";

export function ResearchSection() {
  return (
    <section id="research" className="py-24">
      <div className="max-w-layout mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-research)">Research</SectionHeading>

        <div className="space-y-6">
          {research.map((paper, i) => (
            <ScrollReveal key={paper.id} delay={i * 100}>
              <div
                className="portfolio-card p-6 lg:p-8"
                style={{ "--card-accent": "var(--accent-research)" } as React.CSSProperties}
              >
                {/* Award badge */}
                {paper.award && (
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold"
                      style={{
                        background: "color-mix(in srgb, var(--accent-research) 15%, transparent)",
                        color: "var(--accent-research)",
                        border: "1px solid color-mix(in srgb, var(--accent-research) 30%, transparent)",
                      }}
                    >
                      <Award size={14} />
                      {paper.award}
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-[22px] font-display font-semibold text-text-primary mb-2 leading-tight">
                  {paper.title}
                </h3>

                {/* Venue + Status */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="inline-flex px-2.5 py-1 rounded-md text-[12px] font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-research), color-mix(in srgb, var(--accent-research) 80%, #fff))",
                      color: "#fff",
                    }}
                  >
                    {paper.venue}
                  </span>
                  <span className="text-[13px] text-text-tertiary">
                    {paper.year}
                  </span>
                  <span
                    className="tag-link text-[11px]"
                    style={{ "--tag-color": "var(--accent-experience)" } as React.CSSProperties}
                  >
                    {paper.status}
                  </span>
                </div>

                {/* Authors */}
                <p className="text-[14px] text-text-secondary mb-4">
                  {paper.authors}
                </p>

                {/* Summary */}
                <p className="text-[15px] text-text-primary/85 leading-relaxed mb-6 max-w-prose">
                  {paper.summary}
                </p>

                {/* Key findings */}
                <div className="mb-6">
                  <h4 className="text-[13px] font-semibold uppercase tracking-[0.10em] text-accent-research mb-3">
                    Key Findings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {paper.findings.map((finding, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 p-3 rounded-lg"
                        style={{
                          background: "color-mix(in srgb, var(--accent-research) 8%, transparent)",
                        }}
                      >
                        <span
                          className="flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold flex-shrink-0 mt-0.5"
                          style={{
                            background: "var(--accent-research)",
                            color: "#fff",
                          }}
                        >
                          {j + 1}
                        </span>
                        <p className="text-[13px] text-text-primary/85">
                          {finding}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags + Links */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-link"
                        style={{ "--tag-color": "var(--accent-research)" } as React.CSSProperties}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {paper.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-text text-[14px]"
                        style={{ "--btn-color": "var(--accent-research)" } as React.CSSProperties}
                      >
                        <ExternalLink size={14} />
                        {link.label}
                        <span className="arrow">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
