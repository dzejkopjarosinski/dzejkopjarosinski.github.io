import Link from "next/link";
import { about, person } from "@/lib/cv-data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-ink-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:48px_48px] opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {about.greeting}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal delay={0.05}>
            <dl className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
              <div>
                <dt className="text-xs uppercase tracking-wider text-mist">
                  Full name
                </dt>
                <dd className="mt-1 text-lg font-medium text-white">{person.name}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-mist">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="break-all text-white transition hover:text-accent"
                  >
                    {person.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              {about.paragraphs.map((p, i) => (
                <p key={i}>
                  {p.includes("harvium.pl") ? (
                    <>
                      {p.split("harvium.pl")[0]}
                      <Link
                        href={person.harvium}
                        className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
                        target="_blank"
                      >
                        harvium.pl
                      </Link>
                      {p.split("harvium.pl")[1]}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-mist">
                Tech I reach for often
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.techStack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
