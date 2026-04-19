"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/75 py-3 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-white sm:text-base"
        >
          JJ<span className="text-accent">.</span>
        </Link>
        <nav className="flex max-w-[52vw] flex-wrap justify-end gap-x-4 gap-y-1 text-xs text-mist sm:text-sm md:max-w-none md:flex-nowrap md:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/dzejkopjarosinski"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:border-accent/40 hover:bg-accent/10 sm:text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
