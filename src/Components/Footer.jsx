import { Link } from "react-router";
import { sections } from "../data/sections";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="px-4">
      <div className="mx-auto max-w-[1200px] border-t border-gray-300 py-8">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="The New York Times" className="h-auto w-50" />
        </Link>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:grid sm:grid-cols-4 sm:justify-start lg:grid-flow-col lg:grid-rows-3">
          {sections.map((s) => (
            <li key={s.path}>
              <Link
                to={`/section/${s.path}`}
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-neutral-500">
          NYT Clone made by{" "}
          <a
            href="https://giuliocarboni.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Giulio Carboni
          </a>{" "}
          for a learning project. Data provided by{" "}
          <a
            href="https://developer.nytimes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            The New York Times
          </a>{" "}
          API.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
