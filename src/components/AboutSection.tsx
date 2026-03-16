"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, School, Trophy, MapPin, Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { aboutParagraphs, quickInfo, stats } from "@/data/portfolio";
const infoIcons: Record<string, typeof BookOpen> = {
  Program: BookOpen,
  University: School,
  GPA: Trophy,
  Location: MapPin,
  Status: Briefcase,
};

function StatCounter({ value, suffix, label, accent }: {
  value: number;
  suffix: string;
  label: string;
  accent: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const startTime = performance.now();
    const isFloat = value % 1 !== 0;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setCount(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <div
      ref={ref}
      className="stat-card scroll-reveal p-4 rounded-xl border border-border-subtle"
      style={{
        "--stat-accent": accent,
        background: `linear-gradient(135deg, color-mix(in srgb, ${accent} 4%, var(--surface-0)), var(--surface-0))`,
      } as React.CSSProperties}
    >
      <div className="text-[34px] font-display font-bold text-text-primary leading-none mb-1">
        {count}{suffix}
      </div>
      <div className="text-[13px] text-text-secondary font-medium">
        {label}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-12">

      <div className="max-w-layout mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-about)">About Me</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Left — Bio with accent bar */}
          <div
            className="space-y-6 pl-5 self-start"
            style={{ borderLeft: "3px solid var(--accent-about)" }}
          >
            {aboutParagraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <p className="text-[16px] text-text-primary/90 leading-[1.8] max-w-prose">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Right — Quick Info + Stats */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <ScrollReveal>
              <div
                className="rounded-xl bg-surface-0 border border-border-subtle p-5"
                style={{ borderLeft: "4px solid var(--accent-about)" }}
              >
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.10em] text-accent-about mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3">
                  {quickInfo.map((item) => {
                    const Icon = infoIcons[item.label];
                    return (
                      <div key={item.label} className="flex items-center gap-3">
                        {Icon && (
                          <Icon size={16} />
                        )}
                        <span className="text-[13px] text-text-tertiary font-medium flex-1">
                          {item.label}
                        </span>
                        <span className="text-[14px] text-text-primary font-medium">
                          {item.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  accent={stat.accent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
