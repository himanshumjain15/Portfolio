"use client";

import { PenLine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

export function WritingSection() {
  return (
    <section id="writing" className="py-24">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-writing)">Writing</SectionHeading>

        <ScrollReveal>
          <div
            className="portfolio-card p-8 text-center"
            style={{ "--card-accent": "var(--accent-writing)" } as React.CSSProperties}
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
              style={{ background: "color-mix(in srgb, var(--accent-writing) 12%, transparent)" }}
            >
              <PenLine size={28} style={{ color: "var(--accent-writing)" }} />
            </div>
            <h3 className="text-[20px] font-display font-semibold text-text-primary mb-2">
              Coming Soon
            </h3>
            <p className="text-[15px] text-text-secondary max-w-md mx-auto">
              I am working on blog posts about data science, statistical methods, and lessons from
              building ML pipelines. Stay tuned.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
