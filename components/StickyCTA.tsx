import CTAButton from "./CTAButton";
import { affiliateUrl } from "@/lib/affiliate";

export default function StickyCTA() {
  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink px-4 pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.4)] md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <CTAButton href={affiliateUrl()} label="Sticky CTA" location="sticky_mobile">
        Shop Jackery Power Stations
      </CTAButton>
    </div>
  );
}
