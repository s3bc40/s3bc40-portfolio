export const rotatingRoles = [
  "Agile Thinker",
  "Team Partner",
  "Growth Driver",
  "Problem Solver",
];

// Helper function to determine if 'a' or 'an' is needed
export const getArticle = (phrase: string) => {
  // Check if the first non-space character is a vowel (case-insensitive)
  const firstLetter = phrase.trim().toLowerCase()[0];
  return ["a", "e", "i", "o", "u"].includes(firstLetter) ? "an" : "a";
};
