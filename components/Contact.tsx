import { person } from "@/lib/cv-data";
import { Reveal } from "./Reveal";

export function Contact() {
  const mailto = `mailto:${person.email}?subject=Hello%20Jakub`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,211,238,0.12),_transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s build something ambitious
            </h2>
            <p className="mt-4 max-w-md text-mist">
              Email is the best way to reach me. Happy to chat about data
              engineering, backend and full-stack work, or new product builds.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft backdrop-blur-xl">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-mist">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={mailto}
                      className="text-lg font-medium text-white transition hover:text-accent"
                    >
                      {person.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailto}
                  className="inline-flex flex-1 min-w-[140px] items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-cyan-100"
                >
                  Compose email
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 min-w-[140px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/40"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
