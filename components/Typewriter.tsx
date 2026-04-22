"use client";

import { useEffect, useState } from "react";

type Props = {
  strings: string[];
  typingMs?: number;
  deletingMs?: number;
  pauseMs?: number;
};

export function Typewriter({
  strings,
  typingMs = 95,
  deletingMs = 55,
  pauseMs = 2000,
}: Props) {
  const [lineIndex, setLineIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = strings[lineIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!full) {
      return undefined;
    }

    if (!deleting && display === full) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && display === "") {
      setDeleting(false);
      setLineIndex((i) => (i + 1) % strings.length);
    } else if (deleting) {
      timeout = setTimeout(
        () => setDisplay(full.slice(0, Math.max(0, display.length - 1))),
        deletingMs,
      );
    } else if (display.length < full.length) {
      timeout = setTimeout(
        () => setDisplay(full.slice(0, display.length + 1)),
        typingMs,
      );
    }

    return () => clearTimeout(timeout);
  }, [
    deleting,
    deletingMs,
    display,
    lineIndex,
    pauseMs,
    strings,
    typingMs,
  ]);

  const longestString = strings.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span className="inline-grid grid-cols-1 grid-rows-1">
      <span className="invisible row-start-1 col-start-1" aria-hidden>
        {longestString}
      </span>
      <span className="row-start-1 col-start-1 inline-flex items-center">
        <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
          {display}
        </span>
        <span
          className="ml-1 inline-block h-[1em] w-0.5 translate-y-px bg-accent animate-pulse"
          aria-hidden
        />
      </span>
    </span>
  );
}
