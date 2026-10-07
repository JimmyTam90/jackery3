import { ImageResponse } from "next/og";

export const alt = "PrimeGearLab: Jackery power station buying guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#1A1A1A", color: "#fff" }}>
        <div style={{ fontSize: 40, color: "#FF6600", fontWeight: 800 }}>PrimeGearLab</div>
        <div style={{ fontSize: 68, fontWeight: 800, marginTop: 20, lineHeight: 1.1 }}>Jackery Portable Power Stations &amp; Solar Generators</div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#d4d4d4" }}>Independent buying guide</div>
      </div>
    ),
    size,
  );
}
