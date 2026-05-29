import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://endmoon.studio"),
  title: {
    default: "Endmoon Studio | Game Development & Live Operations",
    template: "%s | Endmoon Studio",
  },
  description:
    "A bilingual brand website prototype for Endmoon Studio, a creative game development and live operations studio.",
  keywords: ["game studio", "game development", "live operations", "Endmoon Studio"],
  authors: [{ name: "Endmoon Studio" }],
  creator: "Endmoon Studio",
  openGraph: {
    title: "Endmoon Studio",
    description: "Bilingual brand website for a game development and live operations studio.",
    url: "https://endmoon.studio",
    siteName: "Endmoon Studio",
    images: [
      {
        url: "/assets/endmoon-showcase-triptych.png",
        width: 1536,
        height: 1024,
        alt: "Stylized showcase artwork for Endmoon Studio games",
      },
    ],
    locale: "zh_CN",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endmoon Studio",
    description: "Game development and live operations studio.",
    images: ["/assets/endmoon-showcase-triptych.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
