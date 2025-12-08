import { FaGithub, FaLinkedin } from "react-icons/fa"; // Social Icons

export const AboutHeroSection = ({ id }: { id: string }) => (
  // Use DaisyUI Hero component structure for aesthetic appeal
  <div
    className="hero min-h-[70vh] rounded-box shadow-2xl bg-base-100 overflow-hidden"
    id={id}
  >
    {/* Background Overlay or Pattern for Aesthetic */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-color-base-300)_0%,var(--tw-color-base-100)_100%)] opacity-30"></div>

    <div className="hero-content flex-col lg:flex-row-reverse p-8 relative z-10">
      {/* Avatar Container */}
      <div className="avatar mb-6 lg:mb-0 lg:ml-12">
        <div className="w-56 rounded-full ring ring-accent ring-offset-base-100 ring-offset-8 shadow-xl">
          {/* Placeholder for your actual avatar image */}
          <div className="h-full w-full bg-base-300 flex items-center justify-center text-4xl font-extrabold text-base-content/50">
            [IMAGE]
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-6xl font-extrabold text-base-content">
          Hello, I am <span className="text-accent">Jane Doe</span>
        </h1>
        <h2 className="text-3xl font-semibold mt-2 text-primary">
          Full-Stack Developer
        </h2>
        <p className="py-6 max-w-xl text-base-content/80">
          I specialize in building **high-performance, mobile-first web
          applications** using modern lean stacks. My focus is delivering
          **profitable solutions** by leveraging **AI integration** and clean
          architecture.
        </p>

        {/* Socials & CTA */}
        <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
          <a
            href="#"
            className="btn btn-outline btn-primary btn-sm sm:btn-md gap-2"
          >
            <FaGithub className="w-5 h-5" /> GitHub
          </a>
          <a
            href="#"
            className="btn btn-outline btn-primary btn-sm sm:btn-md gap-2"
          >
            <FaLinkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="#projects" className="btn btn-accent btn-sm sm:btn-md gap-2">
            View Projects
          </a>
        </div>
      </div>
    </div>
  </div>
);
