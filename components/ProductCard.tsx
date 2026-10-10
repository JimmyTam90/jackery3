import RemoteImage from "./RemoteImage";
import CTAButton from "./CTAButton";
import { affiliateUrl } from "@/lib/affiliate";
import type { Product } from "@/lib/types";

/** Mobile/desktop order inside the card: image block, key specs, then CTA block (never overlapping the image). */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-panel p-4">
      <div>
        <div className="relative h-48 w-full overflow-hidden rounded-xl bg-white sm:h-56">
          <RemoteImage
            src={p.image}
            alt={p.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-2"
          />
        </div>
        <h3 className="mt-4 text-lg font-extrabold text-white">{p.name}</h3>
        <p className="mt-1 text-sm text-neutral-400">{p.tagline}</p>
        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
          <dt className="text-neutral-400">Capacity</dt>
          <dd className="font-semibold text-white">{p.specs.capacity}</dd>
          <dt className="text-neutral-400">AC output</dt>
          <dd className="font-semibold text-white">{p.specs.acOutput}</dd>
          <dt className="text-neutral-400">Weight</dt>
          <dd className="font-semibold text-white">{p.specs.weight}</dd>
        </dl>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <p className="text-2xl font-extrabold text-white">{p.price}</p>
        <p className="mb-3 text-xs text-neutral-400">{p.priceNote}</p>
        <CTAButton
          href={affiliateUrl(p.path, p.id)}
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
