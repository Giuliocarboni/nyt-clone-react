import { useState } from "react";
import { Link } from "react-router";
import { formatDate } from "../utils/formatDate";
import logo from "../assets/logo.svg";
import SectionNav from "./SectionNav";

function Header() {
  const today = formatDate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-neutral-300 px-4 lg:border-b-0">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center py-3 lg:grid-cols-[1fr_auto_1fr] lg:border-b lg:border-black lg:py-6">
          <div>
            <button
              className="-ml-2 flex rounded-full p-2 hover:bg-gray-100 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}>
              <span className="material-symbols-outlined">
                {open ? "close" : "menu"}
              </span>
            </button>
            <div className="hidden lg:block">
              <div className="text-xs text-neutral-900">{today}</div>
              <div className="text-xs text-neutral-900">Today's Paper</div>
            </div>
          </div>
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="The New York Times"
              className="h-auto w-[clamp(210px,45vw,484px)]"
            />
          </Link>
        </div>
        <div
          aria-hidden="true"
          className="mx-auto mt-[2px] hidden max-w-[1200px] border-t border-black lg:block"
        />
      </header>

      <SectionNav open={open} onClose={() => setOpen(false)} />

      <p className=" px-4 py-4 text-left text-xs font-bold text-neutral-900 lg:hidden">
        {today}
      </p>
    </>
  );
}

export default Header;
