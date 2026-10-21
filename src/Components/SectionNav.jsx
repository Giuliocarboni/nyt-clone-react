import { NavLink } from "react-router";

const sections = [
  { name: "World", path: "world" },
  { name: "U.S.", path: "us" },
  { name: "Politics", path: "politics" },
  { name: "N.Y.", path: "nyregion" },
  { name: "Business", path: "business" },
  { name: "Opinion", path: "opinion" },
  { name: "Science", path: "science" },
  { name: "Arts", path: "arts" },
  { name: "Books", path: "books" },
  { name: "Food", path: "food" },
  { name: "Travel", path: "travel" },
];

function SectionNav() {
  return (
    <ul>
      {sections.map((s) => (
        <li key="s.path">
          <NavLink to={`/section/${s.path}`}>{s.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default SectionNav;
