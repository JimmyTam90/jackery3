import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: absoluteUrl("/contact") },
  description: `Contact ${SITE.name}.`,
};

export default function Contact() {
  return (
    <LegalPage title="Contact Us" updated="October 7, 2026">
      <p>
        For questions about this website, email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <p>
        We do not sell products or handle orders, shipping, returns or warranty claims. For those, please contact
        Jackery directly through Jackery.com.
      </p>
    </LegalPage>
  );
}
