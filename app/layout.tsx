import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/providers";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stjernberg Web and IT Services | Expert Web Developer from Finland",
  description:
    "Jens-Mikael, a 17-year-old web developer from Finland, fluent in English, Swedish, Finnish, and Norwegian, creates secure, high-performance websites and applications. Explore a portfolio of innovative projects and reliable digital solutions tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} relative min-h-screen text-white`}>
          <main>
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Toaster />
          </main>
        </body>
      </Providers>
    </html>
  );
}
