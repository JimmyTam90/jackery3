"use client";

import type { ReactNode } from "react";
import { trackCtaClick } from "@/lib/tracking";

type Props = {
  href: string;
  label: string;
  location: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  ariaLabel?: string;
};

/** Native external affiliate link: target=_blank, rel=noopener noreferrer, no JS navigation. */
export default function CTAButton({ href, label, location, children, variant = "primary", className = "", ariaLabel }: Props) {
  const base =
    "inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-5 py-3 text-base font-bold transition active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40";
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark"
      : "border-2 border-brand bg-white text-brand hover:bg-brand-light";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={ariaLabel}
      onClick={() => trackCtaClick(label, location)}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
