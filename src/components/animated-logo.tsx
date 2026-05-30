"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();
  const logo = logoGlyphs[lang];
  const charCount = logo.glyphs.length;
  const logoTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const };
  const glyphTransition = (index: number) =>
    prefersReducedMotion
      ? { duration: 0 }
      : {
          duration: 0.4,
          delay: isScrolled ? index * 0.05 : (charCount - index - 1) * 0.05,
          ease: [0.34, 1.56, 0.64, 1] as const,
        };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.span
      className={`animated-logo animated-logo--${lang} ${isScrolled ? "is-swallowed" : ""}`}
      aria-hidden="true"
      style={{ "--logo-travel": `${logo.travel}px` } as CSSProperties}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
    >
      <motion.span
        className="animated-logo__mark"
        animate={{
          x: isScrolled ? logo.travel : 0,
          rotate: isScrolled ? 360 : 0,
          scale: isScrolled ? 1.15 : 1,
        }}
        transition={logoTransition}
      >
        <Image
          src="/assets/logo/logo_icon.png"
          alt=""
          width={1539}
          height={1511}
          className="animated-logo__mark-image"
          priority
        />
      </motion.span>

      <span className="animated-logo__word" key={lang}>
        {logo.glyphs.map((glyph, index) => (
          <motion.span
            className="animated-logo__glyph"
            key={`${lang}-${glyph.alt}-${index}`}
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? -20 : 0,
              scale: isScrolled ? 0.8 : 1,
            }}
            transition={glyphTransition(index)}
          >
            <Image
              src={glyph.src}
              alt=""
              width={glyph.width}
              height={glyph.height}
              className="animated-logo__glyph-image"
            />
          </motion.span>
        ))}
      </span>

      <span className="sr-only">{logo.label}</span>
    </motion.span>
  );
}
