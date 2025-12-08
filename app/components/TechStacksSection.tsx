import { groupedStacks } from "@/app/data/techStacks";
import { FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiOpengl,
} from "react-icons/si";

// Utility to map stack names to React Icon components
const getStackIcon = (name: string) => {
  switch (name) {
    case "Next.js":
      return SiNextdotjs;
    case "React":
      return SiReact;
    case "TypeScript":
      return SiTypescript;
    case "Tailwind CSS":
      return SiTailwindcss;
    case "Node.js":
      return SiNodedotjs;
    case "Express":
      return SiExpress;
    case "Python":
      return SiPython;
    case "PostgreSQL":
      return SiPostgresql;
    case "Supabase":
      return SiSupabase;
    case "Gemini API":
      return SiOpengl; // Placeholder icon for AI/ML, choose one you prefer
    default:
      return FaCode;
  }
};

export const TechStacksSection = () => (
  // Wrap the entire content in a single, well-defined Card
  <div className="card w-full bg-base-100 shadow-xl p-6 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
    <div className="card-body p-0">
      {Object.entries(groupedStacks).map(([category, stacks]) => (
        <div key={category} className="mb-8">
          {/* Category Header with a Divider */}
          <h3 className="text-2xl font-bold mb-4 text-accent border-b border-primary/20 pb-2">
            {category}
          </h3>

          {/* Responsive Grid of Icon-Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {stacks.map((stack) => {
              const Icon = getStackIcon(stack.name);
              return (
                <div
                  key={stack.name}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg bg-base-200 hover:bg-accent/10 transition-colors duration-200 cursor-pointer shadow-md`}
                  title={stack.name}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-1" />
                  <span className="text-sm font-medium text-base-content/80 text-center">
                    {stack.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
);
