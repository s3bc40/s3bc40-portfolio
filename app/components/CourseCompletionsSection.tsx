// app/page.tsx (Updated CoursesCompletionsSection Component)
import { courses } from "@/app/data/courseCompletions"; // Adjust import path as needed
import Image from "next/image"; // Use Next.js Image for optimization

export const CourseCompletionsSection = () => (
  <div className="card w-full bg-base-100 shadow-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
    <div className="card-body p-0">
      {courses.map((course) => (
        // Use DaisyUI's collapse component inside a container for the list
        <div
          key={course.id}
          className="collapse collapse-plus bg-base-200 mb-3 rounded-lg"
        >
          {/* Header/Title (Always visible) */}
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold text-base-content flex justify-between items-center">
            <span>{course.title}</span>
            <span className="text-sm font-normal text-accent/80 italic hidden sm:inline-block">
              {course.date}
            </span>
          </div>

          {/* Content (Hidden until expanded) */}
          <div className="collapse-content bg-base-200/50 p-4 border-t border-base-300">
            <p className="mb-4 text-base-content/80">{course.description}</p>

            {/* Certificate Image - Responsive and Lazy Loaded */}
            <h4 className="text-lg font-semibold mb-2 text-primary">
              Certificate: ({course.issuer})
            </h4>
            <div className="rounded-box overflow-hidden border-2 border-base-300">
              <Image
                src={course.imagePlaceholder}
                alt={`${course.title} Certificate`}
                width={1200}
                height={800}
                layout="responsive"
                placeholder="blur"
                blurDataURL="data:image/png;base64,..." // Replace with actual blur data if possible
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

            {/* Placeholder for the "View Credential" button */}
            <a href="#" target="_blank" className="btn btn-accent btn-sm mt-4">
              View Credential Link
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);
