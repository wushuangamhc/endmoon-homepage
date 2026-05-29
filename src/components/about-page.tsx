"use client";

import { Orbit, ShieldCheck, UsersRound } from "lucide-react";
import { useLanguage } from "@/components/site-shell";
import { SectionIntro } from "@/components/ui";
import { content } from "@/lib/content";

const icons = [Orbit, ShieldCheck, UsersRound];

export function AboutPage() {
  const { lang } = useLanguage();
  const copy = content.about[lang];

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} body={copy.body} />
        <div className="rounded-md bg-[#161612] p-6 text-white shadow-[10px_10px_0_#25d7b7]">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd36b]">Studio Values</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {copy.values.map((value) => (
              <div key={value} className="rounded bg-white/10 p-4 text-sm font-black">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {copy.pillars.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="rounded-md border border-black/10 bg-[#f8f7f2] p-6">
                <Icon className="text-[#ee4f8f]" size={28} />
                <h2 className="mt-5 text-2xl font-black">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-black/62">{body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-md border border-black/10 bg-white lg:grid-cols-4">
          {[
            ["01", lang === "zh" ? "玩法原型" : "Gameplay Prototype"],
            ["02", lang === "zh" ? "视觉方向" : "Visual Direction"],
            ["03", lang === "zh" ? "版本计划" : "Release Planning"],
            ["04", lang === "zh" ? "社区运营" : "Community Ops"],
          ].map(([num, label]) => (
            <div key={num} className="border-b border-black/10 p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="text-sm font-black text-[#25d7b7]">{num}</p>
              <p className="mt-3 text-lg font-black">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
