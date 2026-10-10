"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/" aria-label={`${SITE.name} home`} className="flex min-h-[44px] items-center">
          <Image src={logo} alt={`${SITE.name} logo`} priority unoptimized height={36} className="h-9 w-auto" />
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={`/${n.href}`} className="text-sm font-semibold text-neutral-200 hover:text-brand">
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-white md:hidden"
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
        className={`${open ? "block" : "hidden"} border-t border-line bg-ink md:hidden`}
      >
        <ul className="mx-auto max-w-6xl px-4 py-2">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={`/${n.href}`} onClick={() => setOpen(false)} className="block min-h-[44px] py-3 font-semibold text-neutral-100">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
