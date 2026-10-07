import Image from "next/image";
import CTAButton from "./CTAButton";
import { affiliateUrl } from "@/lib/affiliate";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div>
        <div className="relative h-48 w-full sm:h-56">
          <Image
            src={p.image}
            alt={p.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
        <h3 className="mt-4 text-lg font-extrabold text-charcoal">{p.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{p.tagline}</p>
        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
          <dt className="text-neutral-500">Capacity</dt>
          <dd className="font-semibold">{p.capacity}</dd>
          <dt className="text-neutral-500">AC output</dt>
          <dd className="font-semibold">{p.acOutput}</dd>
          <dt className="text-neutral-500">Weight</dt>
          <dd className="font-semibold">{p.weight}</dd>
        </dl>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <p className="mb-2 text-sm text-neutral-600">
          <span className="text-xl font-extrabold text-charcoal">{p.price}</span>
          {p.listPrice ? <span className="ml-2 text-neutral-500 line-through">{p.listPrice}</span> : null}
          <span className="ml-2 text-xs text-neutral-500">at time of writing</span>
        </p>
        <CTAButton
          href={affiliateUrl(p.path, p.slug)}
          label={p.name}
          location="product_card"
          ariaLabel={`Check current price of ${p.name} on Jackery.com`}
        >
          Check Price on Jackery.com
        </CTAButton>
      </div>
    </article>
  );
}
