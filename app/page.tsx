// app/page.tsx (Updated)
import { TechStacksSection } from "./components/TechStacksSection";
import { Section } from "./components/Section";
import { Nav } from "./components/Nav";
import { AboutHeroSection } from "./components/AboutHeroSection";
import { CourseCompletionsSection } from "./components/CourseCompletionsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { FaCode, FaGraduationCap, FaFolderOpen } from "react-icons/fa";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-base-300">
      <Nav />
      <AboutHeroSection id="about" />

      {/* Passing the Icon component via the new 'Icon' prop */}
      <Section id="stacks" title="Tech Stacks" Icon={FaCode}>
        <TechStacksSection />
      </Section>

      <Section id="courses" title="Courses Completions" Icon={FaGraduationCap}>
        <CourseCompletionsSection />
      </Section>

      <Section id="projects" title="My Projects" Icon={FaFolderOpen}>
        <ProjectsSection />
      </Section>
    </main>
  );
}
