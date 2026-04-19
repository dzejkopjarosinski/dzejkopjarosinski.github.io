import { education, experience } from "@/lib/cv-data";
import { Reveal } from "./Reveal";

function Dot({ variant }: { variant: "work" | "edu" }) {
  return (
    <div
      className={`absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink-950 md:block ${
        variant === "work"
          ? "bg-gradient-to-br from-accent to-cyan-600"
          : "bg-gradient-to-br from-violet-300 to-violet-600"
      }`}
    />
  );
}

export function Timeline() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/10 bg-ink-900/40 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Resume
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Experience & education
          </h2>
          <p className="mt-4 max-w-2xl text-mist">
            Data engineering roles, software delivery, and a finance-heavy early
            career.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/50 via-white/15 to-violet-400/40 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-14 md:space-y-20">
            <Reveal>
              <h3 className="pl-12 text-center font-display text-xl text-white md:pl-0">
                Work experience
              </h3>
            </Reveal>

            {experience.map((item, i) => {
              const isRight = item.side === "right";
              return (
                <Reveal key={`${item.org}-${item.period}`} delay={0.03 * (i % 4)}>
                  <div className="relative grid md:grid-cols-2 md:gap-10">
                    <Dot variant="work" />
                    <div
                      className={`pl-12 md:pl-0 ${isRight ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
                    >
                      <article className="rounded-2xl border border-white/10 bg-ink-950/80 p-6 shadow-soft transition hover:border-accent/25 hover:shadow-glow">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {item.period}
                        </p>
                        <h4 className="mt-2 font-display text-xl text-white">{item.role}</h4>
                        <p className="mt-1 text-sm text-mist">
                          {item.org}
                          {item.location ? ` · ${item.location}` : ""}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                          {item.bullets.map((b, j) => (
                            <li key={`${item.org}-${j}`} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                    <div
                      className={`hidden md:block ${isRight ? "md:col-start-1 md:row-start-1" : ""}`}
                    />
                  </div>
                </Reveal>
              );
            })}

            <Reveal>
              <h3 className="mt-8 pl-12 text-center font-display text-xl text-white md:mt-12 md:pl-0">
                Education
              </h3>
            </Reveal>

            {education.map((item, i) => {
              const isRight = item.side === "right";
              return (
                <Reveal key={`${item.school}-${item.period}`} delay={0.03 * (i % 4)}>
                  <div className="relative grid md:grid-cols-2 md:gap-10">
                    <Dot variant="edu" />
                    <div
                      className={`pl-12 md:pl-0 ${isRight ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
                    >
                      <article className="rounded-2xl border border-white/10 bg-ink-950/80 p-6 shadow-soft transition hover:border-violet-400/40">
                        <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                          {item.period}
                        </p>
                        <h4 className="mt-2 font-display text-xl text-white">{item.degree}</h4>
                        <p className="mt-1 text-sm text-mist">
                          {item.school}
                          {item.location ? ` · ${item.location}` : ""}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                          {item.notes.map((n, j) => (
                            <li key={`${item.school}-${j}`} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-300/80" />
                              <span>{n}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                    <div
                      className={`hidden md:block ${isRight ? "md:col-start-1 md:row-start-1" : ""}`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
