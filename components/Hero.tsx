import Image from "next/image";
import { person } from "@/lib/cv-data";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-28"
    >
      <Image
        src={person.heroImage}
        alt=""
        fill
        priority
        className="object-cover object-[center_20%]"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.18),_transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/15 bg-ink-900 shadow-glow ring-2 ring-accent/20 sm:h-24 sm:w-24">
            <Image
              src={person.profileImage}
              alt={person.name}
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          </div>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-white/40 to-transparent" />
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90">
          Portfolio
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {person.name.split(" ")[0]}
          <span className="block bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
            {person.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <div className="mt-6 max-w-2xl space-y-2">
          <p className="text-sm text-mist sm:text-base">
            I am a{" "}
            <Typewriter strings={person.titleLines} typingMs={90} deletingMs={50} />
          </p>
          <p className="text-sm text-slate-400 sm:text-base">
            Data Engineering & cool products development.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-ink-950 shadow-soft transition hover:bg-cyan-100"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:border-accent/40 hover:bg-accent/10"
          >
            View work
          </a>
        </div>

        <ul className="mt-12 flex gap-5 text-sm text-mist">
          <li>
            <a
              className="transition hover:text-white"
              href={person.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="text-white/20">/</li>
          <li>
            <a
              className="transition hover:text-white"
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
