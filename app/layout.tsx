import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "./site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dayax Library",
  description: "A bright reading room in Mogadishu for shelves, quiet desks, and long afternoons.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-[#f4f7f8] font-[family-name:var(--font-sans)] text-[#14202b] antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
