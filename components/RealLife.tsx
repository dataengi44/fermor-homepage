"use client";
import { useState } from "react";

const ITEMS = [
  { t: "Build an emergency fund", d: "Fermor looks at your fixed costs, works out what three to six months of cover looks like, and sets a monthly amount you can keep up.", s: "Target: ₹3,00,000 · about 11 months at ₹26,000 a month" },
  { t: "Save for a major purchase", d: "Pick the thing and the date. Fermor shows what to set aside each month and which spending to ease off to get there.", s: "Laptop in 6 months: ₹8,000 a month, starting with dining out" },
  { t: "Start investing", d: "Before you put money in, Fermor checks that your cushion and bills are covered, then suggests a starting amount that won't strain your month.", s: "Ready to begin with ₹2,000 a month" },
  { t: "Understand monthly spending", d: "Every transaction is sorted for you. You see what changed since last month and which charges repeat without you noticing.", s: "3 subscriptions unused for 60 days: ₹1,150 a month" },
];

export default function RealLife() {
  const [i, setI] = useState(0);
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <ul role="tablist" className="divide-y divide-white/15 border-y border-white/15">
        {ITEMS.map((x, j) => (
          <li key={x.t}>
            <button role="tab" aria-selected={i === j} onClick={() => setI(j)}
              className={`w-full py-5 text-left font-display text-2xl font-medium tracking-tight transition-colors sm:text-3xl ${i === j ? "text-white" : "text-white/40 hover:text-white/70"}`}>{x.t}</button>
          </li>
        ))}
      </ul>
      <div className="self-center rounded-3xl bg-white/[.06] p-7 ring-1 ring-white/10" aria-live="polite">
        <p className="text-lg leading-relaxed text-white/85">{ITEMS[i].d}</p>
        <p className="mt-6 rounded-2xl bg-mint px-4 py-3 text-sm font-medium text-ink">{ITEMS[i].s}</p>
      </div>
    </div>
  );
}
