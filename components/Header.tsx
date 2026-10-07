"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-extrabold text-charcoal">
          Prime<span className="text-brand">GearLab</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-charcoal hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      <nav
        id="mobile-menu"
        aria-label={`${SITE.name} mobile`}
        className={`${open ? "block" : "hidden"} border-t border-neutral-200 bg-white md:hidden`}
      >
        <ul className="mx-auto max-w-6xl px-4 py-2">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block min-h-[44px] py-3 font-semibold text-charcoal">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
