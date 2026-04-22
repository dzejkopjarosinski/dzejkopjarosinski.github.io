"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { WorkBrandTheme } from "@/lib/company-brands";

type Props = {
  brand: WorkBrandTheme;
  children: React.ReactNode;
};

/**
 * Brand glow while the card intersects the viewport (scroll), not on hover.
 */
export function ExperienceCard({ brand, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    amount: 0.38,
    margin: "-8% 0px -12% 0px",
  });

  return (
    <article
      ref={ref}
      className={`relative overflow-visible rounded-2xl border p-6 outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white/25 ${brand.cardBase} ${inView ? brand.cardGlow : ""}`}
    >
      {children}
    </article>
  );
}
