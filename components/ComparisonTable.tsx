import { PRODUCTS } from "@/lib/products";

const ROWS: { label: string; key: keyof (typeof PRODUCTS)[number] }[] = [
  { label: "Capacity", key: "capacity" },
  { label: "AC output", key: "acOutput" },
  { label: "Surge / peak", key: "surge" },
  { label: "Solar recharge", key: "solar" },
  { label: "LiFePO4 battery", key: "lifepo4" },
  { label: "Weight", key: "weight" },
  { label: "Price (at writing)", key: "price" },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200">
      <table className="min-w-[720px] w-full border-collapse text-left text-sm">
        <caption className="sr-only">Jackery power station comparison</caption>
        <thead className="bg-charcoal text-white">
          <tr>
            <th scope="col" className="p-3">Spec</th>
            {PRODUCTS.map((p) => (
              <th key={p.slug} scope="col" className="p-3">{p.name.replace("Jackery ", "")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={r.label} className={i % 2 ? "bg-neutral-50" : "bg-white"}>
              <th scope="row" className="p-3 font-semibold text-charcoal">{r.label}</th>
              {PRODUCTS.map((p) => (
                <td key={p.slug} className="p-3">{String(p[r.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-neutral-200 p-3 text-xs text-neutral-500">
        &ldquo;See listing&rdquo; means we did not confirm that figure on the page we read; check the product page on
        Jackery.com. Specs and prices can change.
      </p>
    </div>
  );
}
