import { ImageResponse } from "next/og";
import { company } from "@/content/site";

export const alt = company.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#12202a", color: "#fff" }}>
      <div style={{ fontSize: 36, color: "#f55a24" }}>{company.name}</div>
      <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>{company.tagline}</div>
      <div style={{ fontSize: 34, color: "#d5dbe0" }}>Construction · Electric & hybrid vehicles · Agricultural exports</div>
    </div>,
    size,
  );
}
