"use client";

import { useState } from "react";
import type { Product, ProductSpecs, UseCase } from "@/lib/types";

const ROWS: { label: string; key: keyof ProductSpecs }[] = [
  { label: "Battery capacity", key: "capacity" },
  { label: "AC output (rated)", key: "acOutput" },
  { label: "Surge power", key: "surge" },
  { label: "Battery chemistry", key: "chemistry" },
  { label: "Fast charge (AC)", key: "fastCharge" },
  { label: "Weight", key: "weight" },
  { label: "Solar panel input", key: "solarInput" },
];

const FILTERS: { id: "all" | UseCase; label: string }[] = [
  { id: "all", label: "All models" },
  { id: "camping", label: "Camping & RV" },
  { id: "home", label: "Home backup" },
];

export default function ComparisonTable({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<"all" | UseCase>("all");
  const shown = products.filter((p) => filter === "all" || p.useCases.includes(filter));
  return (
    <div>
      <div role="group" aria-label="Filter models by use" className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`min-h-[44px] rounded-full border px-4 text-sm font-bold active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50 ${
              filter === f.id ? "border-brand bg-brand text-ink" : "border-line bg-panel text-neutral-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">Jackery power station comparison</caption>
          <thead className="bg-panel text-white">
            <tr>
              <th scope="col" className="p-3">Spec</th>
              {shown.map((p) => (
                <th key={p.id} scope="col" className="p-3">{p.name.replace("Jackery ", "")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={r.label} className={i % 2 ? "bg-panel/60" : "bg-ink"}>
                <th scope="row" className="p-3 font-semibold text-neutral-200">{r.label}</th>
                {shown.map((p) => (
                  <td key={p.id} className="p-3 text-neutral-100">{p.specs[r.key]}</td>
                ))}
              </tr>
            ))}
            <tr className="bg-panel/60">
              <th scope="row" className="p-3 font-semibold text-neutral-200">Price (at writing)</th>
              {shown.map((p) => (
                <td key={p.id} className="p-3 font-bold text-white">{p.price}</td>
              ))}
            </tr>
          </tbody>
        </table>
        <p className="border-t border-line p-3 text-xs text-neutral-400">
          &ldquo;See listing&rdquo; means we did not confirm that figure on the page we read; check the product page on
          Jackery.com. Specs, prices and stock can change.
        </p>
      </div>
    </div>
  );
}
