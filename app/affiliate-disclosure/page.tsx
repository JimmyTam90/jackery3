import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  alternates: { canonical: "/affiliate-disclosure" },
  description: `Affiliate disclosure for ${SITE.domain}.`,
};

export default function AffiliateDisclosure() {
  return (
    <LegalPage title="Affiliate Disclosure" updated="October 7, 2026">
      <p>{SITE.commissionDisclaimer}</p>
      <p>
        {SITE.name} is an independent publisher that participates in an affiliate program for Jackery products. When
        you click a link marked as a product or shop link and then buy on Jackery.com, we may earn a commission. The
        price you pay is not increased because of this.
      </p>
      <p>
        We are not Jackery, and nothing on this site is an official Jackery communication. Product information comes
        from Jackery&rsquo;s public website at the time of writing and may change.
      </p>
      <p>Questions about this disclosure: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
