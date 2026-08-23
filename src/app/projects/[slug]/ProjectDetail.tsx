"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MeshAurora } from "@/components/MeshAurora";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project, ProjectCaseStudy } from "@/data/portfolio";
import { ModelComparisonChart, ABTestChart } from "@/components/charts/ProjectCharts";

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
              {project.category && (
                <span
                  className="inline-block text-[12px] font-semibold uppercase tracking-[0.08em] mb-3"
                  style={{ color: "var(--accent-projects)" }}
                >
                  {project.category}
                </span>
              )}
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

          {project.caseStudy ? (
            <CaseStudySections caseStudy={project.caseStudy} workflow={project.workflow} />
          ) : (
            <>
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

              {/* Workflow */}
              {project.workflow && <WorkflowSteps steps={project.workflow} />}

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
                    Conclusion
                  </h2>
                  <p className="text-[15px] text-text-primary/85 leading-[1.8] italic">
                    {project.lessons}
                  </p>
                </div>
              </ScrollReveal>
            </>
          )}

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

function WorkflowSteps({ steps }: { steps: string[] }) {
  return (
    <ScrollReveal>
      <div className="mb-10">
        <h2 className="text-[20px] font-display font-semibold text-text-primary mb-4">
          Workflow
        </h2>
        <div>
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 relative pb-6 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-[15px] top-8 bottom-0 w-px"
                  style={{ background: "var(--border-subtle)" }}
                />
              )}
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full text-[13px] font-bold flex-shrink-0 z-10"
                style={{ background: "var(--accent-projects)", color: "#fff" }}
              >
                {i + 1}
              </span>
              <p className="text-[15px] text-text-primary/85 leading-relaxed pt-1">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function DataTable({ table }: { table: { headers: string[]; rows: string[][] } }) {
  return (
    <div className="overflow-x-auto mt-4 rounded-xl border border-border-subtle">
      <table className="w-full text-[14px] border-collapse">
        <thead>
          <tr style={{ background: "color-mix(in srgb, var(--accent-projects) 8%, transparent)" }}>
            {table.headers.map((h) => (
              <th
                key={h}
                className="text-left font-semibold text-text-primary px-4 py-2.5 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-t border-border-subtle">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-text-primary/85 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CaseStudySections({
  caseStudy,
  workflow,
}: {
  caseStudy: ProjectCaseStudy;
  workflow?: string[];
}) {
  return (
    <>
      {/* Overview */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
            Overview
          </h2>
          <p className="text-[16px] text-text-primary/85 leading-[1.8]">
            {caseStudy.overview}
          </p>
        </div>
      </ScrollReveal>

      {/* Results */}
      {(caseStudy.resultsSummary || caseStudy.resultsTable) && (
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
              Results
            </h2>
            {caseStudy.resultsIntro && (
              <p className="text-[16px] text-text-primary/85 leading-[1.8] mb-3">
                {caseStudy.resultsIntro}
              </p>
            )}
            {caseStudy.resultsChart && (
              <ABTestChart
                data={caseStudy.resultsChart.data}
                domain={caseStudy.resultsChart.domain}
                title={caseStudy.resultsChart.title}
                subtitle={caseStudy.resultsChart.subtitle}
                footnote={caseStudy.resultsChart.footnote}
              />
            )}
            {caseStudy.resultsTable && <DataTable table={caseStudy.resultsTable} />}
            {caseStudy.resultsSummary && (
              <p
                className="text-[15px] text-text-primary/85 leading-[1.8] mt-4 p-4 rounded-xl"
                style={{
                  background: "color-mix(in srgb, var(--accent-projects) 6%, var(--surface-0))",
                  borderLeft: "4px solid var(--accent-projects)",
                }}
              >
                {caseStudy.resultsSummary}
              </p>
            )}
            {caseStudy.resultsNote && (
              <p className="text-[14px] text-text-tertiary leading-relaxed mt-3">
                {caseStudy.resultsNote}
              </p>
            )}
          </div>
        </ScrollReveal>
      )}

      {/* Problem Statement & Approach */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
            Problem Statement &amp; Approach
          </h2>
          <p className="text-[16px] text-text-primary/85 leading-[1.8] mb-3">
            {caseStudy.problemStatement}
          </p>
          <p className="text-[16px] text-text-primary/85 leading-[1.8]">
            <span className="font-semibold text-text-primary">Approach: </span>
            {caseStudy.approachSummary}
          </p>
          {caseStudy.approachChart && (
            <ModelComparisonChart
              data={caseStudy.approachChart.data}
              title={caseStudy.approachChart.title}
              subtitle={caseStudy.approachChart.subtitle}
              footnote={caseStudy.approachChart.footnote}
            />
          )}
          {caseStudy.approachTable && <DataTable table={caseStudy.approachTable} />}
        </div>
      </ScrollReveal>

      {/* System Architecture */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
            System Architecture
          </h2>
          <p className="text-[16px] text-text-primary/85 leading-[1.8]">
            {caseStudy.systemArchitecture}
          </p>
        </div>
      </ScrollReveal>

      {/* Workflow */}
      {workflow && <WorkflowSteps steps={workflow} />}

      {/* Key Features */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
            Key Features
          </h2>
          <ul className="space-y-3">
            {caseStudy.keyFeatures.map((feature, i) => (
              <li
                key={i}
                className="text-[15px] text-text-primary/85 leading-relaxed pl-5 relative"
              >
                <span
                  className="absolute left-0 top-[10px] w-2 h-2 rounded-full"
                  style={{ background: "var(--accent-projects)", opacity: 0.6 }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Technical Stack */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-4">
            Technical Stack
          </h2>
          <div className="space-y-4">
            {caseStudy.techStack.map((group) => (
              <div key={group.category}>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary mb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="tag-link"
                      style={{ "--tag-color": "var(--accent-projects)" } as React.CSSProperties}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Deployment */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
            Deployment
          </h2>
          <p className="text-[16px] text-text-primary/85 leading-[1.8]">
            {caseStudy.deployment}
          </p>
        </div>
      </ScrollReveal>

      {/* Challenges & Solutions */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-4">
            Challenges &amp; Solutions
          </h2>
          <div className="space-y-5">
            {caseStudy.challenges.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl"
                style={{
                  background: "color-mix(in srgb, var(--accent-projects) 5%, var(--surface-0))",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <p className="text-[15px] text-text-primary/85 leading-relaxed mb-2">
                  <span className="font-semibold text-text-primary">Challenge: </span>
                  {item.challenge}
                </p>
                <p className="text-[15px] text-text-primary/85 leading-relaxed">
                  <span className="font-semibold" style={{ color: "var(--accent-projects)" }}>
                    Solution:{" "}
                  </span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Honest Limitations */}
      {caseStudy.limitations && (
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
              Honest Limitations
            </h2>
            <ul className="space-y-3">
              {caseStudy.limitations.map((item, i) => (
                <li
                  key={i}
                  className="text-[15px] text-text-primary/85 leading-relaxed pl-5 relative"
                >
                  <span
                    className="absolute left-0 top-[10px] w-2 h-2 rounded-full"
                    style={{ background: "var(--accent-projects)", opacity: 0.6 }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      )}

      {/* Improvements */}
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="text-[20px] font-display font-semibold text-text-primary mb-3">
            Improvements
          </h2>
          <ul className="space-y-3">
            {caseStudy.improvements.map((item, i) => (
              <li
                key={i}
                className="text-[15px] text-text-primary/85 leading-relaxed pl-5 relative"
              >
                <span
                  className="absolute left-0 top-[10px] w-2 h-2 rounded-full"
                  style={{ background: "var(--accent-projects)", opacity: 0.6 }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Footer tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {caseStudy.footerTags.map((tag) => (
          <span
            key={tag}
            className="tag-link"
            style={{ "--tag-color": "var(--accent-projects)" } as React.CSSProperties}
          >
            {tag}
          </span>
        ))}
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
