"use client";

import { MonitorSmartphone } from "lucide-react";
import { useLanguage } from "@/components/site-shell";
import { GameCover, SectionIntro, Tag } from "@/components/ui";
import { content, games } from "@/lib/content";

export function GamesPage() {
  const { lang } = useLanguage();
  const copy = content.games[lang];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} body={copy.body} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-18 sm:px-6 lg:px-8">
        {games.map((game, index) => (
          <article
            key={game.slug}
            className="grid gap-5 rounded-md border border-black/10 bg-white p-4 shadow-sm lg:grid-cols-[0.9fr_1.1fr]"
          >
            <GameCover accent={game.accent} title={game.name[lang]} imagePosition={game.coverPosition} />
            <div className="flex flex-col justify-between p-2">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Tag>0{index + 1}</Tag>
                  <Tag>{game.genre[lang]}</Tag>
                  <Tag>{game.status[lang]}</Tag>
                </div>
                <h2 className="text-3xl font-black">{game.name[lang]}</h2>
                <p className="mt-3 text-sm font-bold text-black/50">{game.name.en}</p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-black/64">{game.summary[lang]}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-md bg-[#f8f7f2] px-4 py-2 text-sm font-black">
                  <MonitorSmartphone size={17} />
                  {game.platform}
                </span>
                <button
                  type="button"
                  className="rounded-md bg-[#161612] px-4 py-2 text-sm font-black text-white transition hover:bg-[#ee4f8f]"
                >
                  {copy.viewDetails}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
