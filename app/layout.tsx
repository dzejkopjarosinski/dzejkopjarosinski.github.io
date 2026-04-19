import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jakub Jarosiński — Data Engineer & Software Developer",
  description:
    "Online resume of Jakub Jarosiński — data engineering and software development.",
  openGraph: {
    title: "Jakub Jarosiński",
    description: "Data engineer and software developer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
