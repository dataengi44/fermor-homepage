"use client";
import { useState } from "react";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden>
        <rect width="26" height="26" rx="8" fill="var(--accent)" />
        <path d="M8 19V8h10M8 13.5h7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
      Fermor
    </a>
  );
}

const links = [
  ["How it works", "#how"],
  ["Features", "#features"],
  ["Resources", "#resources"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-8 text-[15px] text-muted md:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="transition-colors hover:text-ink">{l}</a></li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 md:flex">
          <a href="/signin" className="px-3 py-2 text-[15px] font-medium">Sign in</a>
          <a href="/signup" className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-paper transition-colors hover:bg-accent">Get started</a>
        </div>
        <button className="grid size-10 place-items-center rounded-full border border-line md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-4 bg-ink before:mb-1 before:block before:h-0.5 before:w-4 before:-translate-y-1 before:bg-ink after:mt-1 after:block after:h-0.5 after:w-4 after:translate-y-1 after:bg-ink" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-lg">{l}</a>
          ))}
          <div className="mt-5 flex gap-3">
            <a href="/signin" className="flex-1 rounded-full border border-line py-3 text-center font-medium">Sign in</a>
            <a href="/signup" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-ink py-3 text-center font-medium text-paper">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}