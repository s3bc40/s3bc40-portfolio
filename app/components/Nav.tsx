import { IoMenu } from "react-icons/io5";
import { FaUser, FaCode, FaGraduationCap, FaFolderOpen } from "react-icons/fa";

export const Nav = () => {
  const navItems = [
    { id: "about", title: "About", icon: FaUser },
    { id: "stacks", title: "Tech Stacks", icon: FaCode },
    { id: "courses", title: "Courses", icon: FaGraduationCap },
    { id: "projects", title: "Projects", icon: FaFolderOpen },
  ];

  return (
    // Fixed container for the FAB in the bottom right corner
    <div className="fixed bottom-6 right-6 z-100">
      {/* DaisyUI Dropdown with a custom look */}
      <div className="dropdown dropdown-top dropdown-end">
        {/* FAB Button (always visible) */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-lg btn-accent shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <IoMenu className="w-6 h-6" />
        </div>

        {/* Dropdown Menu (Vertical list of links) */}
        <ul
          tabIndex={0}
          className="dropdown-content z-1 menu p-2 shadow-2xl bg-base-100 rounded-box w-52 mb-2"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-base-content hover:bg-base-200"
              >
                <item.icon className="w-5 h-5 text-accent" />
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
