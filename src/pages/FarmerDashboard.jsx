import { useState } from "react";
import { Link } from "react-router-dom";
import {
  farmerProfile,
  farmerUpcomingTrips,
  farmerPastTrips,
  nearbyTransporters,
} from "../data/dummyData";

export default function FarmerDashboard() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* TOP HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 to-green-900">
        <img src="/images/farmer-dashboard.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img src="/images/farmer-portrait.jpg" alt="Farmer" className="h-16 w-16 rounded-2xl border-4 border-white/30 object-cover shadow-xl sm:h-20 sm:w-20" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-200">Namaste 🙏</div>
                <h1 className="text-2xl font-black text-white sm:text-3xl">{farmerProfile.name}</h1>
                <div className="text-sm text-emerald-100">📍 {farmerProfile.village}</div>
              </div>
            </div>
            <Link
              to="/book"
              className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-center text-sm font-bold text-white shadow-xl shadow-orange-900/30 hover:shadow-2xl"
            >
              + Book New Trip
            </Link>
          </div>

          {/* STAT CARDS */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Total Trips", value: farmerProfile.totalTrips, icon: "🚛", color: "from-emerald-400 to-emerald-600" },
              { label: "Saved vs Brokers", value: `₹${farmerProfile.totalSaved}`, icon: "💰", color: "from-orange-400 to-amber-500" },
              { label: "Nearest Mandi", value: farmerProfile.mandiDistance, icon: "📍", color: "from-sky-400 to-blue-600" },
              { label: "Your Rating", value: `${farmerProfile.rating} ⭐`, icon: "🏆", color: "from-pink-400 to-rose-500" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">{s.label}</span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${s.color} text-sm`}>
                    {s.icon}
                  </div>
                </div>
                <div className="mt-2 text-xl font-black text-white sm:text-2xl">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="sticky top-[65px] z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {[
            { id: "overview", label: "📊 Overview" },
            { id: "upcoming", label: "🚚 Upcoming Trips" },
            { id: "history", label: "📋 History" },
            { id: "transporters", label: "👥 Nearby Transporters" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab === t.id ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900">Current Active Trip</h2>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">Live</span>
                </div>
                <div className="mt-4 rounded-xl bg-gradient-to-br from-emerald-50 to-orange-50 p-5 ring-1 ring-emerald-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow">🍅</div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-900">Tomatoes • 400 kg</div>
                      <div className="text-xs text-slate-500">Trip ID: TRP-1082</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-black text-emerald-700">₹620</div>
                      <div className="text-xs text-slate-500">Paid via UPI</div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">🌾</div>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500">Pickup</div>
                        <div className="text-sm font-semibold text-slate-900">Rampur Farm</div>
                      </div>
                      <span className="text-xs text-slate-400">06:30 AM</span>
                    </div>
                    <div className="ml-4 h-4 border-l-2 border-dashed border-emerald-300" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">🏪</div>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500">Drop</div>
                        <div className="text-sm font-semibold text-slate-900">Azadpur Mandi</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700">ETA 07:15 AM</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Trip Progress</span>
                      <span className="font-bold text-emerald-700">35%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100">
                      <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
                <div className="mt-4 space-y-3">
                  {farmerPastTrips.slice(0, 3).map((t) => (
                    <div key={t.id} className="flex items-center gap-4 rounded-xl border border-slate-100 p-3 transition hover:border-emerald-200">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-lg">🌾</div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-slate-900">{t.crop} • {t.qty}</div>
                        <div className="text-xs text-slate-500">{t.drop} • {t.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900">₹{t.fare}</div>
                        <span className="text-xs font-semibold text-emerald-700">✓ Delivered</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 p-6 text-white shadow-lg">
                <div className="text-sm font-semibold opacity-90">💡 Quick Tip</div>
                <div className="mt-2 text-xl font-black">Book before 7 AM</div>
                <p className="mt-1 text-sm opacity-90">Subah 7 baje se pehle book karne par 15% discount milta hai.</p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900">Live Mandi Rates</h2>
                  <span className="text-xs text-slate-500">Azadpur</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { crop: "Tomatoes", rate: "₹24 / kg", change: "+6%", up: true },
                    { crop: "Onions", rate: "₹18 / kg", change: "-2%", up: false },
                    { crop: "Potato", rate: "₹14 / kg", change: "+3%", up: true },
                    { crop: "Wheat", rate: "₹22 / kg", change: "+1%", up: true },
                    { crop: "Cauliflower", rate: "₹30 / kg", change: "-4%", up: false },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">{r.crop}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">{r.rate}</span>
                        <span className={`text-xs font-bold ${r.up ? "text-emerald-600" : "text-rose-600"}`}>
                          {r.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h2 className="text-lg font-bold text-slate-900">Weather</h2>
                <div className="mt-3 flex items-center gap-4">
                  <div className="text-5xl">☀️</div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">28°C</div>
                    <div className="text-sm text-slate-500">Sunny, Rampur</div>
                    <div className="text-xs text-emerald-700 font-semibold mt-1">Good for harvest</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UPCOMING */}
        {tab === "upcoming" && (
          <div className="grid gap-4 md:grid-cols-2">
            {farmerUpcomingTrips.map((t) => (
              <div key={t.id} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">🍅</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{t.crop} • {t.quantity}</div>
                      <div className="text-xs text-slate-500">{t.id}</div>
                    </div>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                    t.status === "Driver En Route" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                  }`}>
                    {t.status}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-emerald-500 text-center text-xs leading-6 text-white">🌾</div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{t.pickup}</div>
                    </div>
                  </div>
                  <div className="ml-3 border-l-2 border-dashed border-slate-300 pl-8 text-xs text-slate-500">18 km • 45 min</div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-orange-500 text-center text-xs leading-6 text-white">🏪</div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{t.drop}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <div className="text-xs text-slate-500">Transporter</div>
                    <div className="text-sm font-bold text-slate-900">{t.transporter}</div>
                    <div className="text-xs text-slate-500">{t.vehicle}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Fare</div>
                    <div className="text-xl font-black text-emerald-700">₹{t.fare}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-sm font-bold text-white">📞 Call Driver</button>
                  <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700">Track</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* HISTORY */}
        {tab === "history" && (
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            <table className="w-full">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-6 py-3 text-left">Trip ID</th>
                  <th className="px-6 py-3 text-left">Crop</th>
                  <th className="px-6 py-3 text-left">Drop</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-right">Fare</th>
                  <th className="px-6 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {farmerPastTrips.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-mono text-xs text-slate-500">{t.id}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{t.crop} <span className="text-slate-500 font-normal">• {t.qty}</span></td>
                    <td className="px-6 py-4 text-slate-700">{t.drop}</td>
                    <td className="px-6 py-4 text-slate-700">{t.date}</td>
                    <td className="px-6 py-4 text-right font-bold text-emerald-700">₹{t.fare}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">✓ {t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* NEARBY TRANSPORTERS */}
        {tab === "transporters" && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nearbyTransporters.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
                <div className="flex items-center gap-3">
                  <img src="/images/transporter-portrait.jpg" alt="" className="h-12 w-12 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.vehicle}</div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">
                    ⭐ {t.rating}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-slate-50 py-2">
                    <div className="text-xs text-slate-500">Distance</div>
                    <div className="text-sm font-bold text-slate-900">{t.distance}</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 py-2">
                    <div className="text-xs text-slate-500">ETA</div>
                    <div className="text-sm font-bold text-slate-900">{t.eta}</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 py-2">
                    <div className="text-xs text-slate-500">Rate</div>
                    <div className="text-sm font-bold text-emerald-700">₹{t.farePerKm}/km</div>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 py-2.5 text-sm font-bold text-white">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
