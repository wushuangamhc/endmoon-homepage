"use client";

import { FormEvent, useState } from "react";
import { BriefcaseBusiness, Mail, Radio } from "lucide-react";
import { useLanguage } from "@/components/site-shell";
import { SectionIntro } from "@/components/ui";
import { content } from "@/lib/content";

export function ContactPage() {
  const { lang } = useLanguage();
  const copy = content.contact[lang];
  const [notice, setNotice] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message) {
      setNotice({ type: "error", message: copy.errors.required });
      return;
    }

    if (!validEmail) {
      setNotice({ type: "error", message: copy.errors.email });
      return;
    }

    setNotice({ type: "success", message: copy.success });
  }

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionIntro eyebrow={copy.eyebrow} title={copy.title} body={copy.body} />
          <div className="mt-8 grid gap-3">
            <ContactItem icon={<Mail size={20} />} label={copy.emailLabel} value={content.company.email} />
            <ContactItem icon={<BriefcaseBusiness size={20} />} label={copy.hiringLabel} value={content.company.hiring} />
            <ContactItem icon={<Radio size={20} />} label={copy.socialLabel} value={content.company.social} />
          </div>
        </div>

        <form noValidate onSubmit={handleSubmit} className="rounded-md border border-black/10 bg-white p-5 shadow-[8px_8px_0_#ffd36b] sm:p-7">
          <h2 className="text-2xl font-black">{copy.formTitle}</h2>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-black">
              {copy.fields.name}
              <input
                name="name"
                required
                autoComplete="name"
                placeholder={lang === "zh" ? "你的姓名" : "Your name"}
                className="min-h-12 rounded-md border border-black/12 bg-[#f8f7f2] px-4 font-medium outline-none transition focus:border-[#25d7b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black">
              {copy.fields.email}
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@example.com"
                className="min-h-12 rounded-md border border-black/12 bg-[#f8f7f2] px-4 font-medium outline-none transition focus:border-[#25d7b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black">
              {copy.fields.type}
              <select name="type" className="min-h-12 rounded-md border border-black/12 bg-[#f8f7f2] px-4 font-medium outline-none transition focus:border-[#25d7b7]">
                {copy.types.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black">
              {copy.fields.message}
              <textarea
                name="message"
                required
                rows={6}
                placeholder={lang === "zh" ? "简单说明项目、合作方向或招聘需求" : "Briefly describe the project, partnership, or hiring request"}
                className="resize-none rounded-md border border-black/12 bg-[#f8f7f2] px-4 py-3 font-medium outline-none transition focus:border-[#25d7b7]"
              />
            </label>
          </div>
          <button type="submit" className="mt-5 w-full rounded-md bg-[#161612] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ee4f8f]">
            {copy.fields.submit}
          </button>
          {notice ? (
            <p
              className={`mt-4 rounded-md px-4 py-3 text-sm font-bold leading-6 ${
                notice.type === "success" ? "bg-[#e5fff8] text-[#075f51]" : "bg-[#fff0f5] text-[#9b174d]"
              }`}
              role="status"
            >
              {notice.message}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-md bg-white p-4">
      <span className="grid size-11 shrink-0 place-items-center rounded bg-[#25d7b7] text-[#161612]">{icon}</span>
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.14em] text-black/45">{label}</span>
        <span className="mt-1 block break-all text-sm font-black">{value}</span>
      </span>
    </div>
  );
}
