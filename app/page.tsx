import { TechStacksSection } from "./components/TechStacksSection";
import { Section } from "./components/Section";
import { Nav } from "./components/Nav";
import { AboutHeroSection } from "./components/AboutHeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { FaCode, FaFolderOpen } from "react-icons/fa";
import { SoftSkillsRotator } from "./components/SoftSkillsRotator";
import { PortfolioFooter } from "./components/PortfolioFooter";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-base-300">
      <Nav />
      <AboutHeroSection id="about" />

      <SoftSkillsRotator />

      <Section id="stacks" title="Tech Stacks" Icon={FaCode}>
        <TechStacksSection />
      </Section>

      <Section id="projects" title="Projects" Icon={FaFolderOpen}>
        <ProjectsSection />
      </Section>

      <PortfolioFooter
        githubUrl={"https://github.com/s3bc40/s3bc40-portfolio"}
      />
    </main>
  );
}
