import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endmoon Studio | Game Development & Live Operations",
  description:
    "A bilingual brand website prototype for Endmoon Studio, a game development and live operations studio.",
  keywords: ["game studio", "game development", "live operations", "Endmoon Studio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
