// app/page.tsx
import { TechStacksSection } from "./components/TechStacksSection";
import { Section } from "./components/Section";
import { Nav } from "./components/Nav";
import { AboutHeroSection } from "./components/AboutHeroSection";
import { CourseCompletionsSection } from "./components/CourseCompletionsSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-base-300">
      <Nav />
      <AboutHeroSection id="about" />
      <Section id="stacks" title="💻 Tech Stacks">
        <TechStacksSection />
      </Section>

      <Section id="courses" title="🎓 Courses Completions">
        <CourseCompletionsSection />
      </Section>
      <Section id="projects" title="✨ Projects">
        <ProjectsSection />
      </Section>
    </main>
  );
}
