import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-950 text-emerald-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 text-xl">
                🌾
              </div>
              <div className="text-lg font-extrabold text-white">
                Kisan <span className="text-orange-400">Setu</span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-emerald-200/80">
              Zero-commission vehicle booking portal connecting rural Indian farmers directly with transporters.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400">For Farmers</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-200/80">
              <li><Link to="/farmer" className="hover:text-white">Dashboard</Link></li>
              <li><Link to="/book" className="hover:text-white">Book a Trip</Link></li>
              <li><Link to="/" className="hover:text-white">Mandi Rates</Link></li>
              <li><Link to="/" className="hover:text-white">Crop Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400">For Transporters</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-200/80">
              <li><Link to="/transporter" className="hover:text-white">Dashboard</Link></li>
              <li><Link to="/" className="hover:text-white">Trip Requests</Link></li>
              <li><Link to="/" className="hover:text-white">Earnings</Link></li>
              <li><Link to="/" className="hover:text-white">Partner Signup</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-200/80">
              <li>📞 1800-123-KISAN</li>
              <li>✉️ hello@kisansetu.in</li>
              <li>📍 New Delhi, India</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {["𝕏", "f", "in", "▶"].map((s, i) => (
                <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800/60 text-sm font-bold text-white hover:bg-orange-500 cursor-pointer">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-emerald-800 pt-6 text-center text-xs text-emerald-300/70">
          © 2026 Kisan Setu — Built with ❤️ for Indian farmers. Made in India.
        </div>
      </div>
    </footer>
  );
}
