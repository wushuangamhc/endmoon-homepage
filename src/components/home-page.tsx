"use client";

import Link from "next/link";
import { CheckCircle2, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "@/components/site-shell";
import { CTAButton, GameCover, Tag } from "@/components/ui";
import { content, games } from "@/lib/content";

export function HomePage() {
  const { lang } = useLanguage();
  const brand = content.brand[lang];
  const home = content.home[lang];

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#f8f7f2_0%,#f8f7f2_45%,#bdf8e9_45%,#bdf8e9_62%,#ffd36b_62%,#ffd36b_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded bg-white/75 px-3 py-2 text-sm font-black text-black/70 ring-1 ring-black/10">
              {brand.descriptor}
            </p>
            <h1 className="text-5xl font-black leading-[0.98] text-[#161612] sm:text-7xl lg:text-8xl">
              {brand.name}
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-black leading-tight text-[#ee4f8f] sm:text-3xl">{brand.tagline}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/68 sm:text-lg">{brand.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/games">{brand.primaryCta}</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                {brand.secondaryCta}
              </CTAButton>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-md border border-black/12 bg-white/72 p-4 shadow-[10px_10px_0_#161612] backdrop-blur">
              <GameCover accent="from-[#25d7b7] via-[#ffe06b] to-[#ee4f8f]" title="Playable Worlds" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {home.stats.map(([value, label]) => (
                  <div key={value} className="rounded bg-[#f8f7f2] p-3">
                    <p className="text-2xl font-black">{value}</p>
                    <p className="mt-1 text-xs font-bold leading-4 text-black/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="max-w-2xl text-3xl font-black sm:text-4xl">{home.sections.capabilities}</h2>
          <Sparkles className="hidden text-[#ee4f8f] sm:block" size={36} />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {home.capabilities.map((item) => (
            <article key={item.title} className="rounded-md border border-black/10 bg-white p-6 shadow-sm">
              <Zap className="text-[#25d7b7]" size={24} />
              <h3 className="mt-5 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/62">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-6">
            <h2 className="text-3xl font-black sm:text-4xl">{home.sections.featured}</h2>
            <Link href="/games" className="rounded-md border border-black/12 px-4 py-2 text-sm font-black hover:bg-black hover:text-white">
              {lang === "zh" ? "全部作品" : "All Games"}
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {games.map((game) => (
              <article key={game.slug} className="rounded-md border border-black/10 bg-[#f8f7f2] p-3">
                <GameCover accent={game.accent} title={game.name[lang]} imagePosition={game.coverPosition} />
                <div className="p-3">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Tag>{game.genre[lang]}</Tag>
                    <Tag>{game.status[lang]}</Tag>
                  </div>
                  <h3 className="text-xl font-black">{game.name[lang]}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/62">{game.summary[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ee4f8f]">Endmoon Method</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">{home.sections.edge}</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {home.advantages.map((advantage) => (
            <div key={advantage} className="flex gap-3 rounded-md bg-white p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#25d7b7]" size={20} />
              <p className="text-sm font-bold leading-6 text-black/68">{advantage}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-md bg-[#ee4f8f] p-8 text-white sm:p-10 md:flex md:items-center md:justify-between md:gap-10">
          <div>
            <h2 className="text-3xl font-black">{home.sections.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/78">{home.sections.ctaBody}</p>
          </div>
          <div className="mt-6 shrink-0 md:mt-0">
            <CTAButton href="/contact" variant="secondary">
              {brand.secondaryCta}
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
