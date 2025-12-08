export const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="min-h-[90vh] py-32 flex flex-col items-center p-4 bg-base-300"
  >
    <div className="container mx-auto max-w-6xl">
      {/* Centered Title with Orange Accent */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-base-content">
        {/* Highlight the title with the accent color */}
        <span className="text-accent">{title.split(" ")[0]}</span>{" "}
        {title.substring(title.indexOf(" ") + 1)}
      </h2>

      {/* Content wrapper: centered using `mx-auto` and `w-full` */}
      <div className="w-full mx-auto">{children}</div>
    </div>
  </section>
);
