import { NavLink } from "react-router";
import { sections } from "../data/sections";

function SectionNav() {
  return (
    <ul>
      {sections.map((s) => (
        <li key={s.path}>
          <NavLink to={`/section/${s.path}`}>{s.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default SectionNav;
