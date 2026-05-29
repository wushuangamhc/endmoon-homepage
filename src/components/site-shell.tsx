"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo, useState } from "react";
import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
import { AnimatedLogo } from "@/components/animated-logo";
import { content, languages, type Lang } from "@/lib/content";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside SiteShell");
  }
  return value;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
  };

  const contextValue = useMemo(() => ({ lang, setLang }), [lang]);
  const nav = content.nav[lang];

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="min-h-screen bg-[#f8f7f2] text-[#161612]">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f7f2]/88 backdrop-blur-xl">
          <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="logo-home-link flex items-center"
              aria-label={lang === "zh" ? "月之底游戏官网首页" : "Endmoon Studio home"}
            >
              <AnimatedLogo lang={lang} />
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                      active ? "bg-[#161612] text-white" : "text-black/62 hover:bg-black/8 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitch lang={lang} setLang={setLang} />
              <button
                type="button"
                className="grid size-10 place-items-center rounded-md border border-black/12 bg-white/70 text-black md:hidden"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <nav className="border-t border-black/10 px-4 py-3 md:hidden" aria-label="Mobile navigation">
              <div className="grid gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md bg-white/70 px-4 py-3 text-sm font-bold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}
        </header>

        {children}

        <footer className="border-t border-black/10 bg-[#161612] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="text-lg font-black">Endmoon Studio</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
                {lang === "zh"
                  ? "游戏研发、发行协作与长期运营的品牌展示型官网初版。"
                  : "A first-version brand website for game development, publishing support, and live operations."}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <FooterLink href="/games" label={lang === "zh" ? "作品" : "Games"} />
              <FooterLink href="/contact" label={lang === "zh" ? "联系合作" : "Contact"} />
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}

function LanguageSwitch({ lang, setLang }: LanguageContextValue) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-black/12 bg-white/70 p-1" aria-label="Language switcher">
      <Languages size={16} className="ml-2 text-black/55" />
      {(Object.keys(languages) as Lang[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLang(item)}
          className={`min-w-10 rounded px-2.5 py-1.5 text-xs font-black transition ${
            lang === item ? "bg-[#25d7b7] text-[#12120f]" : "text-black/55 hover:text-black"
          }`}
        >
          {languages[item]}
        </button>
      ))}
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-white/14 px-4 py-2 text-sm font-bold text-white/78 transition hover:border-white/35 hover:text-white"
    >
      {label}
      <ArrowUpRight size={15} />
    </Link>
  );
}
