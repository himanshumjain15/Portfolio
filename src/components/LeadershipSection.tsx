"use client";

import { Trophy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { leadership } from "@/data/portfolio";

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24">
      <div className="max-w-layout mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-leadership)">Leadership</SectionHeading>

        <div className="relative mt-10 space-y-10">
          {leadership.map((item, i) => (
            <ScrollReveal key={item.organization} delay={i * 150}>
              <div
                className="portfolio-card p-6"
                style={{ "--card-accent": "var(--accent-leadership)" } as React.CSSProperties}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[6px] rounded-l-2xl"
                  style={{ background: "var(--accent-leadership)", opacity: 0.5 }}
                />

                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 mt-0.5"
                      style={{
                        background: "color-mix(in srgb, var(--accent-leadership) 10%, transparent)",
                        color: "var(--accent-leadership)",
                      }}
                    >
                      <Trophy size={20} />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-display font-semibold text-text-primary">
                        {item.organization}
                      </h3>
                      <p className="text-[15px] text-accent-leadership font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] text-text-secondary font-medium">
                      {item.dates}
                    </p>
                  </div>
                </div>

                {item.metrics && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {item.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col items-center px-4 py-2 rounded-lg"
                        style={{
                          background: "color-mix(in srgb, var(--accent-leadership) 8%, transparent)",
                          border: "1px solid color-mix(in srgb, var(--accent-leadership) 15%, transparent)",
                        }}
                      >
                        <span className="text-[18px] font-display font-bold text-accent-leadership leading-none">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-text-tertiary font-medium mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="w-full h-px bg-border-subtle mb-3" />

                <ul className="space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-[14px] text-text-primary/85 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-leadership/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
