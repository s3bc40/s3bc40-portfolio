import React from "react";
import { IconType } from "react-icons";

export const Section = ({
  id,
  title,
  Icon,
  children,
}: {
  id: string;
  title: string;
  Icon?: IconType;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="min-h-[90vh] py-32 flex flex-col items-center p-4 bg-base-300"
  >
    <div className="container mx-auto max-w-6xl">
      {/* Centered Title with Orange Accent */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-primary flex items-center justify-center gap-4">
        {Icon && <Icon className="w-10 h-10" />}
        {title}
      </h2>

      <div className="w-full mx-auto">{children}</div>
    </div>
  </section>
);
