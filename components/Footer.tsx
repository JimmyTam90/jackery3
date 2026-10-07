import Link from "next/link";
import { LEGAL_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal pb-28 text-neutral-300 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-lg font-extrabold text-white">{SITE.name}</p>
        <p className="mt-3 max-w-3xl text-sm">
          {SITE.name} is an independent affiliate publisher. We are not Jackery and are not the merchant. Purchases are
          completed on Jackery.com.
        </p>
        <p className="mt-3 text-sm">
          Contact:{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-white underline">
            {SITE.email}
          </a>
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-block min-h-[44px] py-3 underline hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-neutral-400">{SITE.commissionDisclaimer}</p>
        <p className="mt-2 text-xs text-neutral-400">{SITE.footerLine}</p>
      </div>
    </footer>
  );
}
