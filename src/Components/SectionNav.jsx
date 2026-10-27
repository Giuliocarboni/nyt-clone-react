import { NavLink } from "react-router";
import { sections } from "../data/sections";

function SectionNav({ open, onClose }) {
  return (
    <nav className="relative">
      <ul
        className={`${open ? "block" : "hidden"} absolute inset-x-0 top-0 z-10 divide-y divide-gray-200 bg-white px-4 text-sm shadow-md lg:static lg:flex lg:flex-wrap lg:justify-center lg:gap-x-6 lg:gap-y-2 lg:divide-y-0 lg:py-3 lg:shadow-none`}>
        {sections.map((s) => (
          <li key={s.path}>
            <NavLink
              to={`/section/${s.path}`}
              onClick={onClose}
              className={({ isActive }) =>
                `block py-3.5 lg:inline lg:py-0 underline-offset-4 decoration-2 ${
                  isActive ? "font-bold underline" : "hover:underline"
                }`
              }>
              {s.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionNav;
