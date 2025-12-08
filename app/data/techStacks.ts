// data/techStacks.ts

export const techStacks = [
  { name: "Next.js", category: "Frontend/Fullstack", color: "badge-primary" },
  { name: "React", category: "Frontend/Fullstack", color: "badge-primary" },
  { name: "TypeScript", category: "Language", color: "badge-info" },
  { name: "Tailwind CSS", category: "Styling", color: "badge-secondary" },
  { name: "Node.js", category: "Backend", color: "badge-neutral" },
  { name: "Express", category: "Backend", color: "badge-neutral" },
  { name: "Gemini API", category: "AI/ML", color: "badge-accent" },
  { name: "Python", category: "AI/ML", color: "badge-accent" },
  { name: "PostgreSQL", category: "Database", color: "badge-info" },
  { name: "Supabase", category: "Database", color: "badge-info" },
  // Add more of your specific technologies here
];

// Function to group the stacks by category for easy rendering
export const groupedStacks = techStacks.reduce((acc, stack) => {
  if (!acc[stack.category]) {
    acc[stack.category] = [];
  }
  acc[stack.category].push(stack);
  return acc;
}, {} as Record<string, typeof techStacks>);
