import { Link } from "react-router-dom";
import { features, steps, testimonials } from "../data/dummyData";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              Zero Commission • Zero Brokers
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Kisan se <span className="text-emerald-600">Mandi</span>,<br />
              <span className="text-orange-600">Seedha</span> aur <span className="underline decoration-emerald-300 decoration-4">Transparent</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Kisan Setu ek zero-commission vehicle booking portal hai jo rural Indian farmers ko seedha nearby transporters se jodta hai. Crop ko mandi tak pahunchao — bina broker, bina hidden fees.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/farmer"
                className="rounded-full bg-gradient-to-r from-emerald-600 to-green-700 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl hover:shadow-emerald-300"
              >
                🌾 Farmer Login
              </Link>
              <Link
                to="/transporter"
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:shadow-xl hover:shadow-orange-300"
              >
                🚛 Transporter Login
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <div className="text-2xl font-black text-emerald-700 sm:text-3xl">12K+</div>
                <div className="text-xs text-slate-500">Farmers</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-600 sm:text-3xl">3.4K</div>
                <div className="text-xs text-slate-500">Transporters</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 sm:text-3xl">₹0</div>
                <div className="text-xs text-slate-500">Commission</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/20">
              <img src="/images/hero-farmer.jpg" alt="Indian farmer with transport truck" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xl">🚚</div>
                <div>
                  <div className="text-xs text-slate-500">Trip Confirmed</div>
                  <div className="text-sm font-bold text-slate-900">400kg Tomatoes</div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold">ETA 45 min</span>
                <span className="rounded-full bg-orange-100 px-2 py-0.5 font-bold text-orange-700">₹620</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 hidden rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
              <div className="text-xs text-slate-500">Saved this month</div>
              <div className="text-xl font-black text-emerald-700">₹4,820</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-orange-600">Why Kisan Setu</span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Har kisan ke liye, har mandi tak
          </h2>
          <p className="mt-3 text-slate-600">
            Technology jo seedhe farmer ki jeb mein paise bachaaye.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-orange-100 text-3xl">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">How it works</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              4 simple steps. 30 seconds mein booking.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-2xl bg-white p-6 shadow-lg shadow-emerald-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-xl font-black text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANDI + TRANSPORTER SPLIT */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Link to="/farmer" className="group relative overflow-hidden rounded-3xl">
            <img src="/images/mandi.jpg" alt="Mandi" className="h-80 w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">For Farmers</div>
              <h3 className="mt-1 text-2xl font-black text-white">Book transport to nearest Mandi</h3>
              <p className="mt-1 text-sm text-emerald-100">Transparent fares, live tracking, secure payments</p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-orange-300 group-hover:gap-2 transition-all">
                Open Farmer Dashboard →
              </div>
            </div>
          </Link>

          <Link to="/transporter" className="group relative overflow-hidden rounded-3xl">
            <img src="/images/transporter-truck.jpg" alt="Transport truck" className="h-80 w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-orange-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-300">For Transporters</div>
              <h3 className="mt-1 text-2xl font-black text-white">Pick up loads, earn more, zero commission</h3>
              <p className="mt-1 text-sm text-orange-100">Incoming trip requests, smart route, instant payout</p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-300 group-hover:gap-2 transition-all">
                Open Transporter Dashboard →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">Real Stories</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Farmers aur Transporters ki awaaz
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-2xl">“</div>
                <p className="text-sm leading-relaxed text-slate-700">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-800 to-green-900 py-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Aaj hi judo Kisan Setu se.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
            Chahe aap kisaan ho ya transporter — ek platform, zero commission, poora control.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/book" className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-emerald-900 shadow-xl hover:bg-emerald-50">
              Start First Trip
            </Link>
            <a href="#" className="rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10">
              Download App (Coming Soon)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
