import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
  description: `Terms of use for ${SITE.domain}.`,
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="October 7, 2026">
      <p>By using {SITE.domain} you agree to these terms.</p>
      <h2>Nature of this site</h2>
      <p>
        {SITE.name} is an independent affiliate publisher. We are not Jackery, we do not sell or ship products, and we
        do not process orders. All purchases are made on Jackery.com under its terms.
      </p>
      <h2>Information accuracy</h2>
      <p>
        Product details and prices were collected from Jackery.com at the time of writing and may change. Always
        confirm current specifications, prices, shipping and warranty terms on the merchant&rsquo;s site before buying.
      </p>
      <h2>Affiliate links</h2>
      <p>
        Some links are affiliate links. See our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        The site is provided &ldquo;as is&rdquo; without warranties. To the extent permitted by law, we are not liable
        for losses arising from use of the site or from purchases made on third-party websites.
      </p>
      <h2>Contact</h2>
      <p>Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
