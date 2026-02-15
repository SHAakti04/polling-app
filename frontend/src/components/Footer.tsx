import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* FULL WIDTH BACKGROUND */}
      <div className="glass w-full px-6 py-8">
        {/* CONTENT CONTAINER */}
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            gap-8
            md:grid-cols-3
            text-sm
          "
        >
          {/* BRAND */}
          <div>
            <h3 className="text-base font-semibold">
              🗳️ Real-Time Polls
            </h3>
            <p className="mt-2 opacity-80 leading-relaxed">
              Create and share live polls with real-time
              updates powered by Socket.IO.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold opacity-80 mb-2">
              Explore
            </h4>
            <ul className="space-y-1 opacity-80">
              <li>
                <Link to="/" className="hover:opacity-100">
                  Create Poll
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  className="hover:opacity-100"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Docs
                </a>
              </li>
            </ul>
          </div>

          {/* TECH */}
          <div className="md:text-right">
            <h4 className="font-semibold opacity-80 mb-2">
              Built With
            </h4>
            <p className="opacity-80">
              React · TypeScript · Tailwind <br />
              Socket.IO · MongoDB
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="max-w-7xl mx-auto my-5 h-px bg-white/10" />

        {/* BOTTOM ROW */}
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            gap-2
            text-xs
            opacity-70
          "
        >
          <span>
            © {new Date().getFullYear()} Real-Time Polls
          </span>
          <span>
            Built with ❤️ for real-time experiences
          </span>
        </div>
      </div>
    </footer>
  );
}
