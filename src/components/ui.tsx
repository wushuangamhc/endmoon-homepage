import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ee4f8f]">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-black leading-[1.05] text-[#161612] sm:text-5xl lg:text-6xl">{title}</h1>
      {body ? <p className="mt-5 text-base leading-7 text-black/62 sm:text-lg">{body}</p> : null}
    </div>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-[#161612] text-white shadow-[5px_5px_0_#25d7b7] hover:-translate-y-0.5"
      : "border border-black/12 bg-white/75 text-[#161612] hover:border-black/28 hover:bg-white";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black transition ${className}`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

export function GameCover({
  accent,
  title,
  imagePosition = "center center",
}: {
  accent: string;
  title: string;
  imagePosition?: string;
}) {
  return (
    <div className={`group relative min-h-56 overflow-hidden rounded-md bg-gradient-to-br ${accent}`}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-88 transition duration-500 group-hover:scale-105"
        style={{
          backgroundImage: "url('/assets/endmoon-showcase-triptych.png')",
          backgroundPosition: imagePosition,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-white/10" />
      <div className="absolute inset-x-6 top-6 h-20 rounded-md border border-white/35 bg-white/18 backdrop-blur-sm" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="mb-4 grid grid-cols-4 gap-2">
          <span className="h-12 rounded bg-white/55" />
          <span className="h-12 rounded bg-black/20" />
          <span className="h-12 rounded bg-white/35" />
          <span className="h-12 rounded bg-black/25" />
        </div>
        <p className="rounded-md bg-[#161612] px-4 py-3 text-lg font-black text-white shadow-[4px_4px_0_rgba(255,255,255,0.45)]">
          {title}
        </p>
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded bg-black/6 px-2.5 py-1 text-xs font-black uppercase tracking-[0.08em] text-black/62">
      {children}
    </span>
  );
}
