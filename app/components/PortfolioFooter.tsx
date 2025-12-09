import React from "react";
import { FaGithub } from "react-icons/fa";

interface PortfolioFooterProps {
  githubUrl: string;
}

export const PortfolioFooter: React.FC<PortfolioFooterProps> = ({
  githubUrl,
}) => {
  return (
    // Footer container matching the background of the main page
    <footer className="w-full text-center py-8 bg-base-300">
      <div className="container mx-auto max-w-6xl">
        <p className="text-base-content/70 text-sm mb-4">
          Interested in the code behind this portfolio?
        </p>

        {/* GitHub Link Button */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200 
                               hover:text-accent focus:text-accent text-primary"
        >
          <FaGithub className="w-5 h-5" />
          View the source code on GitHub
        </a>

        {/* Simple copyright/name mention */}
        <p className="text-base-content/50 text-xs mt-6">
          © {new Date().getFullYear()} s3bc40. Built with Next.js, Tailwind, and
          DaisyUI.
        </p>
      </div>
    </footer>
  );
};
