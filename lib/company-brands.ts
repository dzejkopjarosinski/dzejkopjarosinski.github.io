/**
 * Brand accents for experience cards. Glow is applied while the card is in view (scroll), not on hover.
 * Tailwind classes must stay as complete string literals for the JIT scanner.
 */
export type WorkBrandId =
  | "ey"
  | "uniqa"
  | "polkomtel"
  | "franklin"
  | "matchtrade"
  | "traderhouse"
  | "dive"
  | "southwestern";

export type WorkBrandTheme = {
  /** Idle / off-viewport: border, wash, minimal rim */
  cardBase: string;
  /** While scrolled into view: stronger border + multi-layer glow */
  cardGlow: string;
  period: string;
  org: string;
  bullet: string;
  dot: string;
};

export const workBrandThemes: Record<WorkBrandId, WorkBrandTheme> = {
  ey: {
    cardBase:
      "border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.09] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(250,204,21,0.06)] transition-all duration-500 ease-out",
    cardGlow:
      "border-yellow-400/50 shadow-[0_0_0_1px_rgba(250,204,21,0.16),0_0_80px_-12px_rgba(250,204,21,0.48),0_0_130px_-28px_rgba(250,204,21,0.26)] scale-[1.003]",
    period: "text-yellow-200/80",
    org: "text-yellow-100",
    bullet: "bg-yellow-300/85",
    dot: "from-yellow-300 to-amber-600",
  },
  uniqa: {
    cardBase:
      "border-blue-400/20 bg-gradient-to-br from-blue-500/[0.08] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(96,165,250,0.06)] transition-all duration-500 ease-out",
    cardGlow:
      "border-blue-400/50 shadow-[0_0_0_1px_rgba(96,165,250,0.15),0_0_80px_-12px_rgba(96,165,250,0.45),0_0_130px_-28px_rgba(96,165,250,0.24)] scale-[1.003]",
    period: "text-blue-200/75",
    org: "text-sky-100",
    bullet: "bg-sky-300/85",
    dot: "from-sky-400 to-blue-700",
  },
  polkomtel: {
    cardBase:
      "border-emerald-400/20 bg-gradient-to-br from-emerald-500/[0.08] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(52,211,153,0.06)] transition-all duration-500 ease-out",
    cardGlow:
      "border-emerald-400/50 shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_0_80px_-12px_rgba(52,211,153,0.44),0_0_130px_-28px_rgba(52,211,153,0.24)] scale-[1.003]",
    period: "text-emerald-200/75",
    org: "text-emerald-100",
    bullet: "bg-emerald-300/85",
    dot: "from-emerald-400 to-green-700",
  },
  franklin: {
    cardBase:
      "border-blue-800/28 bg-gradient-to-br from-blue-900/[0.12] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(37,99,235,0.08)] transition-all duration-500 ease-out",
    cardGlow:
      "border-blue-500/50 shadow-[0_0_0_1px_rgba(37,99,235,0.18),0_0_80px_-12px_rgba(37,99,235,0.42),0_0_130px_-28px_rgba(37,99,235,0.22)] scale-[1.003]",
    period: "text-blue-200/70",
    org: "text-blue-50",
    bullet: "bg-blue-300/75",
    dot: "from-blue-500 to-indigo-900",
  },
  matchtrade: {
    cardBase:
      "border-cyan-400/18 bg-gradient-to-br from-cyan-500/[0.07] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(34,211,238,0.06)] transition-all duration-500 ease-out",
    cardGlow:
      "border-cyan-400/45 shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_80px_-12px_rgba(34,211,238,0.42),0_0_130px_-28px_rgba(34,211,238,0.22)] scale-[1.003]",
    period: "text-cyan-200/75",
    org: "text-cyan-50",
    bullet: "bg-cyan-300/80",
    dot: "from-cyan-400 to-teal-700",
  },
  traderhouse: {
    cardBase:
      "border-amber-400/18 bg-gradient-to-br from-amber-600/[0.08] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(245,158,11,0.06)] transition-all duration-500 ease-out",
    cardGlow:
      "border-amber-400/45 shadow-[0_0_0_1px_rgba(245,158,11,0.14),0_0_80px_-12px_rgba(245,158,11,0.4),0_0_130px_-28px_rgba(245,158,11,0.2)] scale-[1.003]",
    period: "text-amber-200/75",
    org: "text-amber-50",
    bullet: "bg-amber-400/75",
    dot: "from-amber-400 to-orange-700",
  },
  dive: {
    cardBase:
      "border-red-400/22 bg-gradient-to-br from-red-600/[0.09] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(248,113,113,0.08)] transition-all duration-500 ease-out",
    cardGlow:
      "border-red-400/55 shadow-[0_0_0_1px_rgba(248,113,113,0.18),0_0_80px_-12px_rgba(248,113,113,0.46),0_0_130px_-28px_rgba(248,113,113,0.26)] scale-[1.003]",
    period: "text-red-200/75",
    org: "text-red-50",
    bullet: "bg-red-300/80",
    dot: "from-red-400 to-rose-800",
  },
  southwestern: {
    cardBase:
      "border-orange-400/22 bg-gradient-to-br from-orange-500/[0.09] via-ink-950/90 to-ink-950 shadow-[0_0_0_1px_rgba(251,146,60,0.08)] transition-all duration-500 ease-out",
    cardGlow:
      "border-orange-400/55 shadow-[0_0_0_1px_rgba(251,146,60,0.17),0_0_80px_-12px_rgba(251,146,60,0.46),0_0_130px_-28px_rgba(251,146,60,0.25)] scale-[1.003]",
    period: "text-orange-200/80",
    org: "text-orange-50",
    bullet: "bg-orange-300/85",
    dot: "from-orange-400 to-amber-700",
  },
};

export function getWorkBrand(brandId: WorkBrandId): WorkBrandTheme {
  return workBrandThemes[brandId];
}
