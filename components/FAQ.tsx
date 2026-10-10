"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-panel">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                id={`faq-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[48px] w-full items-center justify-between gap-4 p-4 text-left font-bold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50"
              >
                <span>{f.q}</span>
                <span aria-hidden="true" className="text-brand">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="px-4 pb-4 text-neutral-300"
            >
              {f.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
