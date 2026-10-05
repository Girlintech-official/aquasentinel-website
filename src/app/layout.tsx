import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AquaSentinel Labs | Intelligent Aquaculture",
  description:
    "AquaSentinel Labs builds intelligent early-warning technology that helps fish farmers detect stress and changing pond conditions earlier.",
  keywords: [
    "AquaSentinel Labs",
    "aquaculture technology",
    "fish farming",
    "smart aquaculture",
    "AI aquaculture",
    "aquaculture monitoring",
    "early warning aquaculture",
  ],
  authors: [{ name: "AquaSentinel Labs" }],
  openGraph: {
    title: "AquaSentinel Labs | Intelligent Aquaculture",
    description:
      "Detect earlier. Act smarter. Protect more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}