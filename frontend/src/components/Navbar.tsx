import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-sky-400/20 to-cyan-400/30 blur-2xl" />

      {/* Navbar */}
      <nav
        className="
          relative
          glass
          h-16 md:h-20
          px-6 md:px-10
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight"
        >
          🗳️ Real-Time Polls
        </Link>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            to="/"
            className={`
              px-4 py-2 rounded-lg text-sm font-medium
              transition
              ${
                pathname === "/"
                  ? "bg-white/20"
                  : "hover:bg-white/10"
              }
            `}
          >
            Create
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
