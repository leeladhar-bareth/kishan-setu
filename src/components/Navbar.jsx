import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/farmer", label: "Farmer Dashboard" },
    { to: "/transporter", label: "Transporter Dashboard" },
    { to: "/book", label: "Book Trip" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 text-xl shadow-md shadow-emerald-200">
            🌾
          </div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-emerald-900">
              Kisan <span className="text-orange-600">Setu</span>
            </div>
            <div className="-mt-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700/70">
              Farmer's Bridge
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-100 text-emerald-900"
                    : "text-slate-600 hover:bg-slate-100 hover:text-emerald-900"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/book"
            className="ml-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:shadow-lg hover:shadow-orange-300"
          >
            Book Now
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-emerald-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-100 text-emerald-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
