"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Nav";

type Mode = "signin" | "signup";
type Errors = Partial<Record<"name" | "email" | "password", string>>;

function Field({ id, label, error, ...props }: { id: string; label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-accent ${error ? "border-red-500" : "border-line"}`} />
      {error && <p id={`${id}-err`} className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default function AuthForm({ mode }: { mode: Mode }) {
  const up = mode === "signup";
  const [v, setV] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState<Errors>({});
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  const on = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV({ ...v, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const x: Errors = {};
    if (up && v.name.trim().length < 2) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = "Enter a valid email address, like name@example.com.";
    if (v.password.length < 8) x.password = "Use at least 8 characters.";
    setErr(x);
    if (!Object.keys(x).length) setDone(true);
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-5 py-6 sm:px-10">
        <Logo />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          {done ? (
            <div aria-live="polite">
              <h1 className="font-display text-4xl font-semibold tracking-tight">
                {up ? `Welcome, ${v.name.trim().split(" ")[0]}.` : "You're signed in."}
              </h1>
              <p className="mt-3 text-muted">This is a front-end demo, so no real account was created. In the full product, you'd land on your dashboard now.</p>
              <Link href="/" className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-colors hover:bg-accent">Back to homepage</Link>
            </div>
          ) : (
            <>
              <h1 className="font-display text-4xl font-semibold tracking-tight">{up ? "Create your account" : "Welcome back"}</h1>
              <p className="mt-3 text-muted">{up ? "Start understanding your money in a few minutes." : "Sign in to see where your money stands."}</p>
              <form onSubmit={submit} noValidate className="mt-8 space-y-5">
                {up && <Field id="name" label="Full name" autoComplete="name" value={v.name} onChange={on("name")} error={err.name} />}
                <Field id="email" label="Email" type="email" autoComplete="email" value={v.email} onChange={on("email")} error={err.email} />
                <div className="relative">
                  <Field id="password" label="Password" type={show ? "text" : "password"} autoComplete={up ? "new-password" : "current-password"} value={v.password} onChange={on("password")} error={err.password} />
                  <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-[2.1rem] rounded-md px-2 py-1 text-sm text-muted hover:text-ink">{show ? "Hide" : "Show"}</button>
                </div>
                <button type="submit" className="w-full rounded-full bg-accent py-3.5 font-medium text-white transition-colors hover:bg-ink">{up ? "Create account" : "Sign in"}</button>
              </form>
              <p className="mt-6 text-sm text-muted">
                {up ? "Already have an account? " : "New to Fermor? "}
                <Link href={up ? "/signin" : "/signup"} className="font-medium text-ink underline underline-offset-4 hover:text-accent">{up ? "Sign in" : "Create an account"}</Link>
              </p>
            </>
          )}
        </div>
      </div>

      <aside className="hidden flex-col justify-center bg-ink p-14 text-white lg:flex" aria-hidden>
        <p className="max-w-md font-display text-4xl font-semibold leading-tight tracking-tight">Know where you stand before you decide.</p>
        <div className="mt-10 max-w-sm rounded-3xl bg-white/[.07] p-6 ring-1 ring-white/10">
          <p className="text-sm text-white/60">Emergency fund</p>
          <p className="mt-1 font-display text-3xl font-semibold">₹1,80,000</p>
          <div className="mt-4 h-2 rounded-full bg-white/15"><div className="h-full w-3/5 rounded-full bg-accent" /></div>
          <p className="mt-3 text-sm text-white/60">60% of ₹3,00,000. On track for August.</p>
        </div>
      </aside>
    </div>
  );
}