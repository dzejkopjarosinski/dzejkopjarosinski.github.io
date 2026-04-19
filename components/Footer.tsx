import { person } from "@/lib/cv-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-mist sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {person.name}. Crafted with Next.js.
        </p>
        <div className="flex gap-6">
          <a href={person.github} className="transition hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={person.linkedin} className="transition hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
