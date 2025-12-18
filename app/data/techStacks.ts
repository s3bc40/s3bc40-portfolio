import { IconType } from "react-icons";
import { BiBot } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiJavascript,
  SiRust,
  SiSolidity,
  SiVuedotjs,
  SiVuetify,
  SiFoundryvirtualtabletop,
  SiCss3,
  SiDaisyui,
  SiLinux,
  SiUbuntu,
  SiDebian,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiFigma,
  SiStreamlit,
  SiFastapi,
  SiSupabase,
  SiShadcnui,
} from "react-icons/si";

// Define the structure for a single stack item
interface StackItem {
  name: string;
  category: string;
  Icon: IconType;
}

export const techStacks: StackItem[] = [
  // Language
  { name: "TypeScript", category: "Language", Icon: SiTypescript },
  { name: "JavaScript", category: "Language", Icon: SiJavascript },
  { name: "Python", category: "Language", Icon: SiPython },
  { name: "Rust", category: "Language", Icon: SiRust },
  { name: "Vyper", category: "Language", Icon: FaCode },
  { name: "Solidity", category: "Language", Icon: SiSolidity },
  { name: "CSS", category: "Language", Icon: SiCss3 },

  // Frameworks/Libraries
  { name: "Next.js", category: "Frameworks/Libraries", Icon: SiNextdotjs },
  { name: "React", category: "Frameworks/Libraries", Icon: SiReact },
  { name: "Google ADK", category: "Frameworks/Libraries", Icon: BiBot },
  { name: "Streamlit", category: "Frameworks/Libraries", Icon: SiStreamlit },
  { name: "FastAPI", category: "Frameworks/Libraries", Icon: SiFastapi },
  { name: "Vue.js", category: "Frameworks/Libraries", Icon: SiVuedotjs },
  { name: "Vuetify", category: "Frameworks/Libraries", Icon: SiVuetify },
  { name: "Moccasin", category: "Frameworks/Libraries", Icon: FaCode },
  {
    name: "Foundry",
    category: "Frameworks/Libraries",
    Icon: SiFoundryvirtualtabletop,
  },

  // Styling
  { name: "Shadcn UI", category: "Styling", Icon: SiShadcnui },
  { name: "Tailwind CSS", category: "Styling", Icon: SiTailwindcss },
  { name: "DaisyUI", category: "Styling", Icon: SiDaisyui },
  { name: "Figma", category: "Styling", Icon: SiFigma },

  // Operating Systems
  { name: "Linux", category: "Operating Systems", Icon: SiLinux },
  { name: "Ubuntu", category: "Operating Systems", Icon: SiUbuntu },
  { name: "Debian", category: "Operating Systems", Icon: SiDebian },

  // Version Control
  { name: "Git", category: "Version Control", Icon: SiGit },
  { name: "GitHub", category: "Version Control", Icon: SiGithub },
  { name: "GitLab", category: "Version Control", Icon: SiGitlab },

  // Containers/Databases
  { name: "Supabase", category: "Containers/Databases", Icon: SiSupabase },
  { name: "PostgreSQL", category: "Containers/Databases", Icon: SiPostgresql },
  { name: "Docker", category: "Containers/Databases", Icon: SiDocker },
];

// Fallback/Default Icon for safety (not used in the map, but good practice)
export const DefaultIcon = FaCode;

// Function to group the stacks by category (remains the same)
export const groupedStacks = techStacks.reduce((acc, stack) => {
  if (!acc[stack.category]) {
    acc[stack.category] = [];
  }
  acc[stack.category].push(stack);
  return acc;
}, {} as Record<string, StackItem[]>); // Use the new StackItem interface
