import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  description: `How ${SITE.name} handles information on primegearlab.com.`,
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 7, 2026">
      <p>
        This policy explains how {SITE.name} (&ldquo;we&rdquo;) handles information on {SITE.domain}. This site is an
        informational affiliate page and does not sell products or process payments.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Information you send us voluntarily, such as an email you write to {SITE.email}.</li>
        <li>
          Technical and usage data (for example pages viewed, device and browser type, and clicks on outbound links)
          collected through analytics or advertising tools only when they are enabled on this site.
        </li>
      </ul>
      <h2>Cookies and advertising tools</h2>
      <p>
        When enabled, tools such as Google Analytics, Google Ads and Meta Pixel may set cookies or similar identifiers
        to measure traffic and ad performance. You can control cookies through your browser settings and ad settings
        provided by those companies.
      </p>
      <h2>Third-party websites</h2>
      <p>
        Links on this site lead to Jackery.com, a third-party website with its own privacy practices. Purchases and
        any information you provide there are handled by that merchant, not by us. Please review their policies.
      </p>
      <h2>How we use information</h2>
      <p>We use information to operate and improve the site, measure the effectiveness of our content, and respond to messages.</p>
      <h2>Your choices</h2>
      <p>To ask about information you have sent us, or to request its deletion, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <h2>Changes</h2>
      <p>We may update this policy and will change the date above when we do.</p>
    </LegalPage>
  );
}
