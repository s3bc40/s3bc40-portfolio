import { getArticle, rotatingRoles } from "@/app/data/softSkills";

export const SoftSkillsRotator = () => (
  <div className="w-full text-center py-20 bg-base-300 border-t border-b border-base-content/10">
    <h3 className="text-4xl sm:text-6xl font-extrabold text-base-content mx-auto max-w-7xl">
      <span className="text-base-content/80">I thrive as </span>
      <span>
        <span className="text-rotate duration-10000">
          <span>
            {rotatingRoles.map((phrase) => {
              const article = getArticle(phrase);
              return (
                <span key={phrase} className="bg-accent text-accent-content">
                  {article} {phrase}
                </span>
              );
            })}
          </span>
        </span>
      </span>
    </h3>
  </div>
);
