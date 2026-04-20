import Image from "next/image";
import { projects } from "@/lib/cv-data";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/10 bg-ink-950 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl text-mist">
            Experiments, products, and deep dives — some older demos preserved as
            static pages.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.href} delay={0.04 * (i % 4)}>
              <a
                href={p.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-soft transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-90 transition group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-cyan-200">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-white/80 transition group-hover:gap-2">
                    Open
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
