import { ImageResponse } from "next/og";
import { profile, siteUrl } from "@/data/site";

// Generated at build time: a 1200x630 share card that link previews (LinkedIn,
// WhatsApp, Slack, X) can load quickly, instead of the full-size portrait photo.
export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = ["Angular", "React", "Next.js", "Node.js", "NestJS", "MongoDB"];

function siteHost() {
  const host = new URL(siteUrl).host;
  return host.startsWith("localhost") ? null : host;
}

export default function OpenGraphImage() {
  const host = siteHost();

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
          background: "linear-gradient(135deg, #0b1120 0%, #111a33 60%, #1e1b4b 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#818cf8",
            }}
          />
          <div style={{ fontSize: 26, color: "#c7d2fe", letterSpacing: 2 }}>
            {profile.role.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#a5b4fc" }}>{profile.title}</div>
          <div style={{ fontSize: 28, color: "#cbd5e1", maxWidth: 940, lineHeight: 1.4 }}>
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  fontSize: 22,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid #334155",
                  background: "rgba(129, 140, 248, 0.12)",
                  color: "#e2e8f0",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
          {host ? <div style={{ fontSize: 24, color: "#94a3b8" }}>{host}</div> : null}
        </div>
      </div>
    ),
    { ...size },
  );
}
