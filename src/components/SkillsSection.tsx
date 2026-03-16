"use client";

import { BarChart3, Code2, Brain, LineChart, TrendingUp, Wrench, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { skillGroups, certifications } from "@/data/portfolio";
const groupIcons: Record<string, typeof BarChart3> = {
  "Core Methods": BarChart3,
  "Languages & Libraries": Code2,
  "ML & Deep Learning": Brain,
  "Data Visualization": LineChart,
  "Statistical Methods": TrendingUp,
  "Infrastructure & Tools": Wrench,
};

function ProficiencyDot({ level }: { level?: "expert" | "proficient" | "familiar" }) {
  if (level === "expert") {
    return <span className="w-2 h-2 rounded-full bg-current" title="Expert" />;
  }
  if (level === "proficient") {
    return (
      <span className="relative w-2 h-2 rounded-full border border-current" title="Proficient">
        <span className="absolute inset-0 rounded-full bg-current" style={{ clipPath: "inset(0 50% 0 0)" }} />
      </span>
    );
  }
  return <span className="w-2 h-2 rounded-full border border-current" title="Familiar" />;
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-layout mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-skills)">Skills</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.title];
            return (
              <ScrollReveal key={group.title} delay={i * 60}>
                <div
                  className="portfolio-card p-5 h-full"
                  style={{ "--card-accent": group.accent } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
                        style={{
                          background: `color-mix(in srgb, ${group.accent} 12%, transparent)`,
                          color: group.accent,
                        }}
                      >
                        <Icon size={16} />
                      </div>
                    )}
                    <h3
                      className="text-[15px] font-display font-semibold"
                      style={{ color: group.accent }}
                    >
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="tag-link group/tag relative"
                        style={{ "--tag-color": group.accent } as React.CSSProperties}
                        title={skill.proof}
                      >
                        <ProficiencyDot level={skill.level} />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Certifications */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 mr-2">
              <Award size={16} className="text-accent-skills" />
              <span className="text-[13px] font-semibold text-text-secondary uppercase tracking-[0.08em]">
                Certifications:
              </span>
            </div>
            {certifications.map((cert) => (
              <span
                key={cert.name}
                className="tag-link"
                style={{ "--tag-color": "var(--accent-skills)" } as React.CSSProperties}
              >
                {cert.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
