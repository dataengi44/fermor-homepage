import Nav, { Logo } from "@/components/Nav";
import Dashboard from "@/components/Dashboard";
import RealLife from "@/components/RealLife";

const btn = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-medium transition-colors";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_40px_80px_-40px_rgba(14,138,107,.45)]">
        <p className="text-sm text-muted">Net worth</p>
        <p className="font-display text-5xl font-semibold tracking-tight">₹7,84,000</p>
        <p className="mt-1 text-sm font-medium text-accent">+₹26,000 this month</p>
        <svg viewBox="0 0 400 130" className="mt-5 w-full" aria-hidden>
          <defs>
            <linearGradient id="h" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#0e8a6b" stopOpacity=".2" /><stop offset="1" stopColor="#0e8a6b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 105 C40 100 60 92 95 94 S150 70 190 66 S250 72 285 48 S350 30 400 14 V130 H0Z" fill="url(#h)" />
          <path className="draw" pathLength={1} d="M0 105 C40 100 60 92 95 94 S150 70 190 66 S250 72 285 48 S350 30 400 14" fill="none" stroke="#0e8a6b" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-mint/70 p-4">
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-white">!</span>
          <p className="text-sm leading-snug">Dining out is up 18% this month. Cap it at ₹9,000 and you&apos;d reach your laptop goal a month sooner.</p>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-2 w-56 rounded-2xl border border-line bg-white p-4 shadow-xl sm:-left-8">
        <p className="text-sm font-medium">Emergency fund</p>
        <div className="mt-2 h-2 rounded-full bg-paper"><div className="h-full w-3/5 rounded-full bg-accent" /></div>
        <p className="mt-2 text-xs text-muted">₹1,80,000 of ₹3,00,000</p>
      </div>
    </div>
  );
}

const steps = [
  ["Understand", "Connect your accounts and see where your money goes, sorted into categories you recognise, without building a spreadsheet."],
  ["Act", "Fermor points out what changed and what to do about it: a bill to cancel, a limit worth setting, a goal that needs a bigger transfer."],
  ["Grow", "Small, repeatable steps add up. Track your progress month after month and watch the habits stick."],
];

const lifeCopy = "Every tool here is built around the questions people actually ask: can I afford this, am I on track, what should I do next.";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
          <div>
            <h1 className="font-display text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">Make every financial decision with clarity.</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">Fermor shows you where your money goes, tells you what to do about it, and helps you build habits that last. For anyone who wants to feel in control without becoming a finance expert.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/signup" className={`${btn} bg-accent text-white hover:bg-ink`}>Get started</a>
              <a href="#how" className={`${btn} border border-line bg-white hover:border-ink`}>See how it works</a>
            </div>
          </div>
          <HeroVisual />
        </section>

        {/* Positioning strip */}
        <section className="border-y border-line bg-white/60">
          <ul className="mx-auto grid max-w-6xl divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {["Understand your money", "Make smarter decisions", "Build for the future"].map((t) => (
              <li key={t} className="py-6 font-display text-xl font-medium tracking-tight sm:px-8 sm:first:pl-0">{t}</li>
            ))}
          </ul>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Three steps from confusion to confidence.</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map(([t, d], i) => (
              <li key={t} className="relative border-t-2 border-ink pt-6">
                <span className="font-display text-sm font-medium text-accent">Step {i + 1}</span>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-3 leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Dashboard */}
        <section className="bg-mint/40 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Your whole picture, on one screen.</h2>
            <p className="mt-4 max-w-xl text-lg text-muted">This is a live preview. Change the range, tap a category, add to a goal.</p>
            <div className="mt-10"><Dashboard /></div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Built to answer the next question.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            <article className="rounded-3xl border border-line bg-white p-8 md:col-span-4">
              <h3 className="font-display text-2xl font-semibold">Spending insights</h3>
              <p className="mt-2 max-w-md text-muted">Transactions are categorised automatically, and Fermor flags what&apos;s different from your usual month.</p>
              <div className="mt-8 flex h-28 items-end gap-2" aria-hidden>
                {[42, 55, 38, 61, 48, 72, 52, 66, 44, 58, 80, 62].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-md ${i === 10 ? "bg-amber" : "bg-accent/25"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </article>
            <article className="rounded-3xl bg-ink p-8 text-paper md:col-span-2">
              <h3 className="font-display text-2xl font-semibold">Financial goals</h3>
              <p className="mt-2 text-paper/70">Name a goal, set a date, and see the monthly amount it takes.</p>
            </article>
            <article className="rounded-3xl bg-mint p-8 md:col-span-2">
              <h3 className="font-display text-2xl font-semibold">Personalised recommendations</h3>
              <p className="mt-2 text-ink/70">Suggestions based on your own numbers, each with the reason behind it.</p>
            </article>
            <article className="rounded-3xl border border-line bg-white p-8 md:col-span-4">
              <h3 className="font-display text-2xl font-semibold">Progress tracking</h3>
              <p className="mt-2 max-w-md text-muted">See how this month compares with the last, and whether the small changes are adding up.</p>
            </article>
          </div>
        </section>

        {/* Built for real life */}
        <section className="bg-ink py-24 text-white sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Built for real life.</h2>
            <p className="mt-4 max-w-xl text-lg text-white/65">{lifeCopy}</p>
            <div className="mt-12"><RealLife /></div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="rounded-[2rem] bg-gradient-to-br from-mint to-white p-10 ring-1 ring-line sm:p-16">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Your financial future starts with understanding.</h2>
            <a href="/signup" className={`${btn} mt-9 bg-ink text-paper hover:bg-accent`}>Get started</a>
          </div>
        </section>
      </main>

      <footer id="resources" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">Your money, made clearer.</p>
          </div>
          {[["Product", ["How it works", "Features", "Sign in"]], ["Resources", ["Guides", "Help centre", "Blog"]], ["Company", ["About", "Privacy", "Terms"]]].map(([h, l]) => (
            <div key={h as string}>
              <h4 className="font-medium">{h as string}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">{(l as string[]).map((x) => {
  const href = x === "Sign in" ? "/signin" : x === "How it works" ? "#how" : x === "Features" ? "#features" : "#";
  return <li key={x}><a href={href} className="hover:text-ink">{x}</a></li>;
})}</ul>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-10 text-xs text-muted">© 2026 Fermor. Figures shown are sample data.</p>
      </footer>
    </div>
  );
}