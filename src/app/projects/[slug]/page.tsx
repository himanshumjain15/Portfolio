import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { ProjectDetail } from "./ProjectDetail";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
