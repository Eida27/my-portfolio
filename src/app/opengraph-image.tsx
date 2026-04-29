import { ImageResponse } from "next/og";

import { siteContent } from "@/lib/content";

export const alt = `${siteContent.name} portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#090d16",
          color: "#f7f8fb",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 28, color: "#67e8f9" }}>
            {siteContent.name}
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,.18)",
              borderRadius: 8,
              padding: "10px 16px",
              fontSize: 20,
              color: "#facc15",
            }}
          >
            {siteContent.role}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 880,
          }}
        >
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            {siteContent.headline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#b8c0cc",
            }}
          >
            Short-form edits, long-form YouTube support, captions, titles,
            keywords, hashtags, and social content preparation.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
