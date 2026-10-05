import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display" });
const body = Figtree({ subsets: ["latin"], variable: "--f-body" });

export const metadata: Metadata = {
  title: "Fermor: your money, made clearer",
  description: "Fermor helps you understand where your money goes, act on it, and build better financial habits.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
