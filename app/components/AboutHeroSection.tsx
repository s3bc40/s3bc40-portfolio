import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const AboutHeroSection = ({ id }: { id: string }) => (
  <div
    className="hero min-h-[70vh] shadow-2xl bg-base-100 overflow-hidden"
    id={id}
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-color-base-300)_0%,var(--tw-color-base-100)_100%)] opacity-30"></div>

    <div className="hero-content flex-col lg:flex-row-reverse p-8 relative z-10">
      {/* Avatar Container */}
      <div className="avatar mb-6 lg:mb-0 lg:ml-12">
        <div className="w-56 rounded-full ring ring-accent ring-offset-base-100 ring-offset-8 shadow-xl">
          <Image
            src="/images/avatar.png"
            alt="s3bc40 Avatar"
            width={224}
            height={224}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-6xl font-extrabold text-base-content">
          Hey, I am <span className="text-accent">Sebastien Claro</span>
        </h1>

        <h2 className="text-2xl font-medium mt-1 text-accent/70 italic">
          aka s3bc40
        </h2>

        <h3 className="text-3xl font-semibold mt-2 text-primary">
          Software & AI agent Engineer
        </h3>
        <p className="py-6 max-w-xl mx-auto lg:mx-0 text-base-content/80">
          Building innovative software solutions and intelligent AI agents to
          solve real-world problems. Passionate about technology, open-source,
          and continuous learning.
        </p>

        {/* Socials & CTA */}
        <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
          <a
            href="https://github.com/s3bc40"
            target="_blank"
            className="btn btn-outline btn-primary btn-sm sm:btn-md gap-2"
          >
            <FaGithub className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sgoncalvesclaro/"
            target="_blank"
            className="btn btn-outline btn-primary btn-sm sm:btn-md gap-2"
          >
            <FaLinkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a
            href="https://x.com/s3bc40"
            target="_blank"
            className="btn btn-outline btn-primary btn-sm sm:btn-md gap-2"
          >
            <FaTwitter className="w-5 h-5" /> Twitter
          </a>
          <a href="#projects" className="btn btn-accent btn-sm sm:btn-md gap-2">
            View Projects
          </a>
        </div>
      </div>
    </div>
  </div>
);
