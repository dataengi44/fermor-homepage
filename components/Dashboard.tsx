"use client";
import { useState } from "react";

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
const YEAR = [612, 628, 641, 655, 649, 671, 693, 708, 724, 731, 759, 784].map((v) => v * 1000);
const MONTHS = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
const RANGES = { "3M": 3, "6M": 6, "1Y": 12 } as const;
type Range = keyof typeof RANGES;

const SPEND = [
  { name: "Housing", amt: 28400, color: "#0e8a6b", note: "Same as last month" },
  { name: "Food & dining", amt: 11200, color: "#e7a23c", note: "Up 18% on last month" },
  { name: "Transport", amt: 5800, color: "#14201c", note: "Down 6% on last month" },
  { name: "Subscriptions", amt: 2100, color: "#8cc9b3", note: "3 you haven't used in 60 days" },
];

const GOALS = [
  { name: "Emergency fund", saved: 180000, target: 300000, step: 5000 },
  { name: "New laptop", saved: 42000, target: 90000, step: 3000 },
  { name: "Start a monthly SIP", saved: 12000, target: 36000, step: 2000 },
];

export default function Dashboard() {
  const [range, setRange] = useState<Range>("6M");
  const [hover, setHover] = useState<number | null>(null);
  const [goals, setGoals] = useState(GOALS);
  const [cat, setCat] = useState(1);

  const n = RANGES[range];
  const vals = YEAR.slice(-n);
  const months = MONTHS.slice(-n);
  const a = hover ?? vals.length - 1;
  const W = 640, H = 220;
  const min = Math.min(...vals), max = Math.max(...vals);
  const pts = vals.map((v, i) => [(i / (vals.length - 1)) * W, H - 24 - ((v - min) / (max - min || 1)) * (H - 70)]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const diff = vals[a] - vals[0];
  const total = SPEND.reduce((s, c) => s + c.amt, 0);

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <section className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_50px_-30px_rgba(20,32,28,.25)] lg:col-span-3">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted">Net worth, {months[a]}</p>
            <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{inr(vals[a])}</p>
            <p className="mt-1 text-sm font-medium text-accent">{diff >= 0 ? "+" : ""}{inr(diff)} since {months[0]}</p>
          </div>
          <div role="tablist" aria-label="Time range" className="flex rounded-full bg-paper p-1">
            {(Object.keys(RANGES) as Range[]).map((r) => (
              <button key={r} role="tab" aria-selected={r === range} onClick={() => { setRange(r); setHover(null); }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${r === range ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}>{r}</button>
            ))}
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="mt-6 w-full" role="img" aria-label="Net worth over time">
          <defs>
            <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#0e8a6b" stopOpacity=".22" />
              <stop offset="1" stopColor="#0e8a6b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${line} L${W} ${H} L0 ${H} Z`} fill="url(#fill)" />
          <path d={line} fill="none" stroke="#0e8a6b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1={pts[a][0]} x2={pts[a][0]} y1="0" y2={H} stroke="#14201c" strokeOpacity=".15" strokeDasharray="3 4" />
          <circle cx={pts[a][0]} cy={pts[a][1]} r="6" fill="#fff" stroke="#0e8a6b" strokeWidth="3" />
          {pts.map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="16" fill="transparent" onMouseEnter={() => setHover(i)} onClick={() => setHover(i)} onMouseLeave={() => setHover(null)} />
          ))}
        </svg>
        <div className="mt-2 flex justify-between text-xs text-muted">{months.map((m) => <span key={m}>{m}</span>)}</div>
      </section>

      <section className="rounded-3xl border border-line bg-white p-6 lg:col-span-2">
        <p className="text-sm text-muted">Spent this month</p>
        <p className="font-display text-3xl font-semibold tracking-tight">{inr(total)}</p>
        <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-paper">
          {SPEND.map((c, i) => (
            <div key={c.name} style={{ width: `${(c.amt / total) * 100}%`, background: c.color, opacity: cat === i ? 1 : 0.35 }} className="transition-opacity" />
          ))}
        </div>
        <ul className="mt-4 space-y-1">
          {SPEND.map((c, i) => (
            <li key={c.name}>
              <button onClick={() => setCat(i)} aria-pressed={cat === i}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors ${cat === i ? "bg-mint/60" : "hover:bg-paper"}`}>
                <span className="flex items-center gap-3"><i className="size-2.5 rounded-full" style={{ background: c.color }} />{c.name}</span>
                <span className="text-sm tabular-nums">{inr(c.amt)}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-xl bg-paper px-3 py-2.5 text-sm text-muted"><b className="font-medium text-ink">{SPEND[cat].name}:</b> {SPEND[cat].note}</p>
      </section>

      {goals.map((g, i) => {
        const pct = Math.round((g.saved / g.target) * 100);
        const done = g.saved >= g.target;
        return (
          <section key={g.name} className="rounded-3xl border border-line bg-white p-6 lg:col-span-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0 flex-1 basis-56">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{g.name}</h3>
                  <span className="text-sm tabular-nums text-muted">{inr(g.saved)} of {inr(g.target)}</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-paper" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={g.name}>
                  <div className="h-full rounded-full bg-accent transition-[width] duration-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
              <button disabled={done}
                onClick={() => setGoals(goals.map((x, j) => j === i ? { ...x, saved: Math.min(x.target, x.saved + x.step) } : x))}
                className="rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent disabled:border-transparent disabled:bg-mint disabled:text-accent">
                {done ? "Goal reached" : `Add ${inr(g.step)}`}
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
