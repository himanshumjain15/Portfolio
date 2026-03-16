"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MeshAurora } from "@/components/MeshAurora";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project } from "@/data/portfolio";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <MeshAurora />
      <div className="relative z-10 min-h-screen">
        {/* Reading progress bar */}
        <ReadingProgress />

        <div className="max-w-[760px] mx-auto px-6 py-16">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-accent-projects transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Header */}
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-[12px] font-mono text-text-tertiary mb-2 block">
                {project.year}
              </span>
              <h1 className="text-[36px] sm:text-[45px] font-display font-bold text-text-primary leading-[1.1] mb-4">
                {project.title}
              </h1>
              <p className="text-[18px] text-text-secondary leading-relaxed mb-6">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-link"
                    style={{ "--tag-color": "var(--accent-projects)" } as React.CSSProperties}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-[14px]"
                      style={{ "--btn-color": "var(--accent-projects)" } as React.CSSProperties}
                    >
                      <ExternalLink size={14} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Problem */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
                The Problem
              </h2>
              <p className="text-[16px] text-text-primary/85 leading-[1.8]">
                {project.problem}
              </p>
            </div>
          </ScrollReveal>

          {/* Approach */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
                The Approach
              </h2>
              <p className="text-[16px] text-text-primary/85 leading-[1.8]">
                {project.approach}
              </p>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
                Results
              </h2>
              <ul className="space-y-3">
                {project.results.map((result, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-text-primary/85 leading-relaxed pl-5 relative"
                  >
                    <span
                      className="absolute left-0 top-[10px] w-2 h-2 rounded-full"
                      style={{ background: "var(--accent-projects)", opacity: 0.6 }}
                    />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Lessons */}
          <ScrollReveal>
            <div
              className="p-6 rounded-xl mb-10"
              style={{
                background: "color-mix(in srgb, var(--accent-projects) 6%, var(--surface-0))",
                borderLeft: "4px solid var(--accent-projects)",
              }}
            >
              <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
                Lessons Learned
              </h2>
              <p className="text-[15px] text-text-primary/85 leading-[1.8] italic">
                {project.lessons}
              </p>
            </div>
          </ScrollReveal>

          {/* Back */}
          <div className="pt-8 border-t border-border-subtle">
            <Link
              href="/#projects"
              className="btn-text text-[15px]"
              style={{ "--btn-color": "var(--accent-projects)" } as React.CSSProperties}
            >
              <ArrowLeft size={16} />
              All Projects
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ReadingProgress() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]">
      <div
        className="h-full bg-accent-projects transition-none"
        id="reading-progress"
        style={{ width: "0%" }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var bar = document.getElementById('reading-progress');
              if (!bar) return;
              window.addEventListener('scroll', function() {
                var h = document.documentElement.scrollHeight - window.innerHeight;
                bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
              }, { passive: true });
            })();
          `,
        }}
      />
    </div>
  );
}
