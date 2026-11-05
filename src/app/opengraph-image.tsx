import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/content/profile";

// White HR monogram (transparent PNG, 1.275:1), read once at build time.
const markData = await readFile(
  join(process.cwd(), "public/brand/hr-mark-light.png"),
  "base64",
);
const markSrc = `data:image/png;base64,${markData}`;

/**
 * Default social-preview image, generated from brand tokens at build time.
 * System fonts only — next/og can't load the site's next/font variables here.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.shortName} — ${profile.positioning}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0f1215",
          color: "#e7eaee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain <img> */}
          <img src={markSrc} width={71} height={56} alt="" />
          <div
            style={{
              width: 1,
              height: 40,
              backgroundColor: "#2dd4bf",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, color: "#97a1ac" }}>{profile.positioning}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              lineHeight: 1.05,
              maxWidth: 940,
              color: "#e7eaee",
            }}
          >
            {profile.headline}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#97a1ac" }}>
            {profile.shortName} · Data Engineering · Analytics · Automation
          </div>
        </div>
      </div>
    ),
    size,
  );
}
