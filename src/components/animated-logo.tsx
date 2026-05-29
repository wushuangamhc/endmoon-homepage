"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Lang } from "@/lib/content";

type LogoGlyph = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const logoGlyphs: Record<Lang, { label: string; travel: number; glyphs: LogoGlyph[] }> = {
  zh: {
    label: "月之底游戏",
    travel: 120,
    glyphs: ["月", "之", "底", "游", "戏"].map((alt, index) => ({
      src: `/assets/logo/logo_cn_${index + 1}.png`,
      alt,
      width: 1100,
      height: 1100,
    })),
  },
  en: {
    label: "Endmoon",
    travel: 180,
    glyphs: [
      { alt: "E", height: 241 },
      { alt: "N", height: 161 },
      { alt: "D", height: 142 },
      { alt: "M", height: 249 },
      { alt: "O", height: 265 },
      { alt: "O", height: 193 },
      { alt: "N", height: 142 },
    ].map((glyph, index) => ({
      src: `/assets/logo/logo_en_${index + 1}.png`,
      alt: glyph.alt,
      width: 148,
      height: glyph.height,
    })),
  },
};

export function AnimatedLogo({ lang }: { lang: Lang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const logo = logoGlyphs[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    const scrollCheck = window.setInterval(handleScroll, 250);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, { capture: true });
      window.clearInterval(scrollCheck);
    };
  }, []);

  return (
    <span
      className={`animated-logo animated-logo--${lang} ${isScrolled ? "is-swallowed" : ""}`}
      aria-hidden="true"
      style={{ "--logo-travel": `${logo.travel}px` } as CSSProperties}
    >
      <span className="animated-logo__mark">
        <Image
          src="/assets/logo/logo_icon.png"
          alt=""
          width={1539}
          height={1511}
          className="animated-logo__mark-image"
          priority
        />
      </span>

      <span className="animated-logo__word" key={lang}>
        {logo.glyphs.map((glyph, index) => (
          <span
            className="animated-logo__glyph"
            key={`${lang}-${glyph.alt}-${index}`}
            style={
              {
                "--glyph-exit-delay": `${index * 50}ms`,
                "--glyph-enter-delay": `${(logo.glyphs.length - index - 1) * 50}ms`,
              } as CSSProperties
            }
          >
            <Image
              src={glyph.src}
              alt=""
              width={glyph.width}
              height={glyph.height}
              className="animated-logo__glyph-image"
            />
          </span>
        ))}
      </span>

      <span className="sr-only">{logo.label}</span>
    </span>
  );
}
