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
            Products, experiments, and deep dives — each with a short write-up.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.href} delay={0.04 * (i % 4)}>
              <a
                href={p.href}
                className="group grid grid-cols-[7.5rem_1fr] gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3 transition duration-300 hover:border-accent/35 hover:bg-white/[0.04] sm:grid-cols-[9rem_1fr] sm:gap-5 sm:p-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-900">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 120px, 144px"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center py-1 pr-1">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-white/65 transition group-hover:gap-2 group-hover:text-accent">
                    View project
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
