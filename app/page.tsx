import RemoteImage from "@/components/RemoteImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";
import CTAButton from "@/components/CTAButton";
import { FAQS } from "@/lib/faq";
import { PRODUCTS, PANELS } from "@/lib/products";
import { affiliateUrl } from "@/lib/affiliate";
import { SITE, absoluteUrl } from "@/lib/site";

const AUDIENCES = [
  { t: "Campers & overlanders", d: "Quiet, fume-free power for lights, fans, fridges and chargers at camp." },
  { t: "RV travelers", d: "Run essentials on the road and recharge from the sun with SolarSaga panels." },
  { t: "Outage-prepared homeowners", d: "Keep essentials like a fridge, Wi-Fi and lights running when the grid drops." },
  { t: "Off-grid power users", d: "Pair a power station with solar for remote cabins and job sites." },
];

const TRUST = [
  { t: "LiFePO4 long-life cells", d: "Jackery lists 4,000 cycles to 70%+ capacity on the Explorer 1000 v2, 2000 v2 and 5000 Plus." },
  { t: "ChargeShield 2.0", d: "Jackery's Explorer 1000 v2 page describes 62 layers of protection for stable, safe charging." },
  { t: "Quiet operation", d: "The Explorer 1000 v2 is listed at 30 dB, which Jackery compares to a whisper." },
  { t: "Free shipping & warranty", d: "Product pages list free shipping (2-5 business days) and a 3+2 year warranty. Confirm at checkout." },
];

export default function Home() {
  const hero = PRODUCTS.find((p) => p.hero) ?? PRODUCTS[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: SITE.name, url: absoluteUrl("/"), email: SITE.email },
      { "@type": "WebSite", name: SITE.name, url: absoluteUrl("/") },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-panel to-ink">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2 md:grid-rows-[auto_auto] md:items-center md:gap-x-8 md:py-16">
            <div className="md:col-start-1 md:row-start-1 md:self-end">
              <p className="text-sm font-bold uppercase tracking-wide text-brand">Independent Jackery buying guide</p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Portable Power Stations &amp; Solar Generators for Camping, RVs and Home Backup
              </h1>
              <p className="mt-4 text-lg text-neutral-300">
                Compare Jackery power stations side by side, then check the current price and availability on Jackery.com.
              </p>
            </div>
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-white sm:h-72 md:col-start-2 md:row-span-2 md:row-start-1 md:h-80">
              <RemoteImage
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-3"
              />
            </div>
            <div className="md:col-start-1 md:row-start-2 md:self-start">
              <div className="max-w-sm">
                <CTAButton
                  href={affiliateUrl(hero.path, "hero")}
                  label={hero.name}
                  location="hero"
                  ariaLabel={`Check current price of ${hero.name} on Jackery.com`}
                >
                  Check {hero.name.replace("Jackery ", "")} Price
                </CTAButton>
              </div>
              <p className="mt-3 text-xs text-neutral-400">
                {SITE.name} is an independent affiliate. {SITE.commissionDisclaimer}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="who">
          <h2 id="who" className="text-2xl font-extrabold text-white">Who these are for</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a) => (
              <li key={a.t} className="rounded-xl border border-line bg-panel p-4">
                <h3 className="font-bold text-white">{a.t}</h3>
                <p className="mt-1 text-sm text-neutral-300">{a.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="picks" className="bg-[#0c0e11]" aria-labelledby="picks-h">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 id="picks-h" className="text-2xl font-extrabold text-white">Top Jackery picks</h2>
            <p className="mt-1 text-neutral-400">Currently available models. Our featured pick comes first.</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="compare-h">
          <h2 id="compare-h" className="text-2xl font-extrabold text-white">Compare the specs</h2>
          <div className="mt-5">
            <ComparisonTable products={PRODUCTS} />
          </div>
        </section>

        <section className="bg-[#0c0e11]" aria-labelledby="solar-h">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-4">
              <div>
                <h2 id="solar-h" className="text-2xl font-extrabold text-white">{PANELS.name}</h2>
                <p className="mt-2 text-neutral-300">{PANELS.blurb}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-white sm:h-56">
                <RemoteImage src={PANELS.image} alt={PANELS.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-3" />
              </div>
              <div className="max-w-sm">
                <CTAButton href={affiliateUrl(PANELS.path, "solar")} label="SolarSaga panels" location="solar_section" variant="outline">
                  Browse SolarSaga Panels
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="why-h">
          <h2 id="why-h" className="text-2xl font-extrabold text-white">Why shoppers pick Jackery</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <li key={t.t} className="rounded-xl border border-line bg-panel p-4">
                <h3 className="font-bold text-white">{t.t}</h3>
                <p className="mt-1 text-sm text-neutral-300">{t.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 py-10" aria-labelledby="faq-h">
          <h2 id="faq-h" className="text-2xl font-extrabold text-white">Frequently asked questions</h2>
          <div className="mt-5">
            <FAQ />
          </div>
        </section>

        <section className="border-t border-line bg-panel">
          <div className="mx-auto max-w-3xl px-4 py-10 text-center">
            <h2 className="text-2xl font-extrabold text-white">Ready to see current pricing?</h2>
            <div className="mx-auto mt-5 max-w-sm">
              <CTAButton href={affiliateUrl()} label="Final CTA" location="final_cta">
                Visit Jackery.com
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
