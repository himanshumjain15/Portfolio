import { TimelinePanel } from "@/components/TimelinePanel";
import { MobileNav } from "@/components/MobileNav";
import { MeshAurora } from "@/components/MeshAurora";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <MeshAurora />
      <TimelinePanel />
      <MobileNav />

      <div
        className="main-content relative z-10"
        style={{ marginLeft: "var(--timeline-width)" }}
      >
        <div id="main">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <ContactSection />

          {/* Footer */}
          <footer className="py-8 text-center border-t border-border-subtle">
            <p className="text-[13px] text-text-tertiary">
              &copy; {new Date().getFullYear()} Himanshu Jain. Built with Next.js.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
