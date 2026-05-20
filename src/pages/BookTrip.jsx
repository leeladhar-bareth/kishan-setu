import { useState } from "react";
import { nearbyTransporters } from "../data/dummyData";

export default function BookTrip() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    crop: "Tomatoes",
    quantity: "400",
    pickup: "Rampur Farm, UP",
    drop: "Azadpur Mandi",
    date: "Today",
    time: "06:30 AM",
  });
  const [selected, setSelected] = useState(null);

  const crops = ["Tomatoes", "Onions", "Potato", "Wheat", "Rice", "Cauliflower", "Carrots", "Cabbage"];
  const mandis = ["Azadpur Mandi", "Fatehpur Mandi", "Lucknow Mandi", "Kanpur Mandi"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
            Step {step} of 3
          </span>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Book a Trip to Mandi
          </h1>
          <p className="mt-2 text-slate-600">Fill in the details — we'll match you with the best transporter instantly.</p>
        </div>

        {/* PROGRESS */}
        <div className="mt-8 flex items-center gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-1 items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                step >= n ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-500"
              }`}>
                {step > n ? "✓" : n}
              </div>
              {n < 3 && <div className={`h-1 flex-1 rounded-full ${step > n ? "bg-emerald-500" : "bg-slate-200"}`} />}
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h2 className="text-lg font-bold text-slate-900">🌾 Crop Details</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Crop Type</label>
                    <select
                      value={form.crop}
                      onChange={(e) => setForm({ ...form, crop: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                    >
                      {crops.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Quantity (kg)</label>
                    <input
                      type="number"
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Pickup Location</label>
                    <input
                      value={form.pickup}
                      onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Drop Mandi</label>
                    <select
                      value={form.drop}
                      onChange={(e) => setForm({ ...form, drop: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                    >
                      {mandis.map((m) => <option key={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Date</label>
                    <select
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                    >
                      <option>Today</option>
                      <option>Tomorrow</option>
                      <option>Day After</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Time</label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                    >
                      <option>06:00 AM</option>
                      <option>06:30 AM</option>
                      <option>07:00 AM</option>
                      <option>08:00 AM</option>
                      <option>09:00 AM</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 py-3.5 text-sm font-bold text-white shadow-md"
                >
                  Continue → See Transporters
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900">🚛 Choose a Transporter</h2>
                <p className="text-sm text-slate-600">{nearbyTransporters.length} verified transporters available near your pickup location.</p>

                {nearbyTransporters.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`block w-full rounded-2xl p-4 text-left transition ${
                      selected === i
                        ? "bg-emerald-50 ring-2 ring-emerald-500 shadow-lg"
                        : "bg-white ring-1 ring-slate-100 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img src="/images/transporter-portrait.jpg" alt="" className="h-14 w-14 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-slate-900">{t.name}</div>
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">⭐ {t.rating}</span>
                        </div>
                        <div className="text-xs text-slate-500">{t.vehicle} • {t.distance} away • ETA {t.eta}</div>
                        <div className="mt-1 flex items-center gap-3 text-xs">
                          <span className="text-emerald-700 font-bold">₹{t.farePerKm}/km</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-600">Verified ID</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Est. Fare</div>
                        <div className="text-xl font-black text-emerald-700">₹{t.farePerKm * 18}</div>
                      </div>
                    </div>
                  </button>
                ))}

                <div className="flex gap-2 pt-3">
                  <button onClick={() => setStep(1)} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700">
                    ← Back
                  </button>
                  <button
                    onClick={() => selected !== null && setStep(3)}
                    disabled={selected === null}
                    className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-sm font-bold text-white shadow-md disabled:opacity-50"
                  >
                    Confirm & Pay →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">🎉</div>
                <h2 className="mt-4 text-2xl font-black text-slate-900">Trip Booked Successfully!</h2>
                <p className="mt-2 text-sm text-slate-600">
                  {selected !== null && nearbyTransporters[selected]?.name} will pick up your {form.crop} at {form.time}.
                </p>

                <div className="mt-6 rounded-xl bg-gradient-to-br from-emerald-50 to-orange-50 p-5 ring-1 ring-emerald-100 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Trip ID</span>
                    <span className="font-mono text-sm font-bold text-slate-900">TRP-2205</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Crop</span>
                    <span className="text-sm font-bold text-slate-900">{form.crop} • {form.quantity} kg</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Pickup</span>
                    <span className="text-sm font-bold text-slate-900">{form.pickup}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Drop</span>
                    <span className="text-sm font-bold text-slate-900">{form.drop}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-emerald-200 pt-2">
                    <span className="text-sm text-slate-600">Total Paid</span>
                    <span className="text-lg font-black text-emerald-700">₹{selected !== null ? nearbyTransporters[selected].farePerKm * 18 : 0}</span>
                  </div>
                </div>

                <button
                  onClick={() => { setStep(1); setSelected(null); }}
                  className="mt-6 w-full rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white"
                >
                  Book Another Trip
                </button>
              </div>
            )}
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="lg:sticky lg:top-32 h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Booking Summary</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Crop</span>
                <span className="font-bold text-slate-900">{form.crop}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Quantity</span>
                <span className="font-bold text-slate-900">{form.quantity} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date</span>
                <span className="font-bold text-slate-900">{form.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time</span>
                <span className="font-bold text-slate-900">{form.time}</span>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Pickup</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">📍 {form.pickup}</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Drop</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">🏪 {form.drop}</div>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3 text-center ring-1 ring-emerald-100">
                <div className="text-xs text-emerald-800">Commission</div>
                <div className="text-xl font-black text-emerald-700">₹0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
