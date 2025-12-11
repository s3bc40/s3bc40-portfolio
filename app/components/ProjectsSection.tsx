// app/page.tsx (Updated ProjectsSection Component)
import { projects } from "@/app/data/projects"; // Adjust import path as needed
import Image from "next/image"; // Use Next.js Image
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
    {projects.reverse().map((project) => (
      <div
        key={project.id}
        className="card card-compact bg-base-100 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/30 border border-base-200"
      >
        <figure className="max-h-64 overflow-hidden bg-base-300">
          <Image
            src={project.imagePlaceholder}
            alt={`${project.title} Screenshot`}
            width={700}
            height={450}
            className="w-full h-64 object-cover object-top transition-opacity duration-500 hover:opacity-80"
          />
        </figure>

        {/* Card Content */}
        <div className="card-body p-6">
          <h3 className="card-title text-3xl font-bold text-accent">
            {project.title}
          </h3>
          <p className="text-base-content/80 mb-4">{project.description}</p>

          {/* Tech Badges for quick scan */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((techItem) => (
              <div
                key={techItem}
                className="badge badge-outline badge-sm text-base-content/70"
              >
                {techItem}
              </div>
            ))}
          </div>

          {/* Action Buttons - Clear and Prominent CTAs */}
          <div className="card-actions justify-end mt-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md gap-2"
              >
                <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-accent btn-sm sm:btn-md gap-2"
            >
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);
