import { useState } from "react";
import {
  transporterProfile,
  transporterTripRequests,
  transporterActiveTrips,
  transporterHistory,
  transporterEarnings,
} from "../data/dummyData";

export default function TransporterDashboard() {
  const [tab, setTab] = useState("requests");
  const maxEarn = Math.max(...transporterEarnings.map((e) => e.amount));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* TOP */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800">
        <img src="/images/transporter-dashboard.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img src="/images/transporter-portrait.jpg" alt="" className="h-16 w-16 rounded-2xl border-4 border-white/30 object-cover shadow-xl sm:h-20 sm:w-20" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/30 px-2 py-0.5 text-xs font-bold text-emerald-50 ring-1 ring-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300"></span>
                    {transporterProfile.status}
                  </span>
                </div>
                <h1 className="mt-1 text-2xl font-black text-white sm:text-3xl">{transporterProfile.name}</h1>
                <div className="text-sm text-orange-100">🚛 {transporterProfile.vehicle} • {transporterProfile.vehicleNo}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border-2 border-white/40 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">
                {transporterProfile.status === "Available" ? "Go Offline" : "Go Online"}
              </button>
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-orange-700 shadow-xl">
                ⚙️ Vehicle
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "This Month", value: `₹${transporterProfile.earningsThisMonth.toLocaleString("en-IN")}`, icon: "💰", color: "from-emerald-400 to-emerald-600" },
              { label: "Pending Payout", value: `₹${transporterProfile.pendingPayout.toLocaleString("en-IN")}`, icon: "⏳", color: "from-amber-400 to-orange-500" },
              { label: "Trips Done", value: transporterProfile.tripsCompleted, icon: "✅", color: "from-sky-400 to-blue-600" },
              { label: "Rating", value: `${transporterProfile.rating} ⭐`, icon: "🏆", color: "from-pink-400 to-rose-500" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-100">{s.label}</span>
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
            { id: "requests", label: "📨 Trip Requests", count: transporterTripRequests.length },
            { id: "active", label: "🚛 Active Trips", count: transporterActiveTrips.length },
            { id: "earnings", label: "💰 Earnings" },
            { id: "history", label: "📋 History" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab === t.id ? "bg-orange-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {t.label}
              {t.count !== undefined && (
                <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  tab === t.id ? "bg-white/20 text-white" : "bg-orange-100 text-orange-700"
                }`}>
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* REQUESTS */}
        {tab === "requests" && (
          <div className="grid gap-5 lg:grid-cols-2">
            {transporterTripRequests.map((r) => (
              <div key={r.id} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-500">{r.id}</span>
                      {r.urgency === "Urgent" && (
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-700">🔥 Urgent</span>
                      )}
                    </div>
                    <div className="mt-1 text-lg font-black text-slate-900">{r.crop} • {r.quantity}</div>
                    <div className="text-sm text-slate-600">Farmer: {r.farmer}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Fare Offer</div>
                    <div className="text-2xl font-black text-emerald-700">₹{r.offeredFare}</div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">🌾</div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500">Pickup</div>
                      <div className="text-sm font-semibold text-slate-900">{r.pickup}</div>
                    </div>
                  </div>
                  <div className="ml-3.5 border-l-2 border-dashed border-slate-300 pl-7 text-xs text-slate-500">{r.distance}</div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs text-white">🏪</div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500">Drop</div>
                      <div className="text-sm font-semibold text-slate-900">{r.drop}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>📅 {r.date}</span>
                  <span className="font-bold text-emerald-700">₹{(r.offeredFare / parseInt(r.distance)).toFixed(1)}/km</span>
                </div>

                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 py-3 text-sm font-bold text-white shadow-md hover:shadow-lg">
                    ✓ Accept Trip
                  </button>
                  <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">
                    Decline
                  </button>
                  <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">
                    📞
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACTIVE */}
        {tab === "active" && (
          <div className="grid gap-5 lg:grid-cols-2">
            {transporterActiveTrips.length === 0 && (
              <div className="rounded-2xl bg-white p-12 text-center ring-1 ring-slate-100">
                <div className="text-5xl">😴</div>
                <div className="mt-3 font-bold text-slate-900">No active trips</div>
                <div className="text-sm text-slate-500">Switch to Requests tab to pick up a new load.</div>
              </div>
            )}
            {transporterActiveTrips.map((t) => (
              <div key={t.id} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-slate-500">{t.id}</div>
                    <div className="text-lg font-black text-slate-900">{t.crop} • {t.quantity}</div>
                    <div className="text-sm text-slate-600">{t.farmer}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">ETA</div>
                    <div className="text-lg font-black text-orange-600">{t.eta}</div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">In Progress</span>
                    <span className="font-bold text-emerald-700">{t.progress}%</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-emerald-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-600"
                      style={{ width: `${t.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-xl bg-orange-600 py-3 text-sm font-bold text-white">📞 Contact Farmer</button>
                  <button className="flex-1 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white">🗺️ Navigate</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EARNINGS */}
        {tab === "earnings" && (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Monthly Earnings</h2>
                  <p className="text-sm text-slate-500">Last 6 months</p>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  +18% vs last month
                </div>
              </div>

              <div className="mt-8 flex h-64 items-end gap-3">
                {transporterEarnings.map((e, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div className="text-xs font-bold text-slate-700">₹{(e.amount / 1000).toFixed(1)}k</div>
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-orange-500 to-amber-400 transition hover:from-orange-600 hover:to-amber-500"
                      style={{ height: `${(e.amount / maxEarn) * 85}%` }}
                    />
                    <div className="text-xs font-semibold text-slate-500">{e.month}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-green-800 p-6 text-white shadow-lg">
                <div className="text-sm font-semibold opacity-90">Total Earned</div>
                <div className="mt-2 text-3xl font-black">
                  ₹{transporterEarnings.reduce((a, b) => a + b.amount, 0).toLocaleString("en-IN")}
                </div>
                <div className="mt-1 text-xs opacity-80">Last 6 months</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="text-sm text-slate-500">Commission Charged</div>
                <div className="mt-1 text-2xl font-black text-emerald-700">₹0.00</div>
                <div className="text-xs text-slate-500">Kisan Setu takes zero commission 🎉</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="text-sm text-slate-500">Next Payout</div>
                <div className="mt-1 text-2xl font-black text-slate-900">₹4,200</div>
                <div className="text-xs text-slate-500">In 2 days • UPI</div>
                <button className="mt-3 w-full rounded-xl bg-slate-900 py-2 text-sm font-bold text-white">Withdraw Now</button>
              </div>
            </div>
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
                  <th className="px-6 py-3 text-left">Distance</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-right">Earned</th>
                  <th className="px-6 py-3 text-right">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {transporterHistory.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-mono text-xs text-slate-500">{t.id}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{t.crop}</td>
                    <td className="px-6 py-4 text-slate-700">{t.distance}</td>
                    <td className="px-6 py-4 text-slate-700">{t.date}</td>
                    <td className="px-6 py-4 text-right font-bold text-emerald-700">₹{t.fare}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-amber-500">{"★".repeat(t.rating)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
