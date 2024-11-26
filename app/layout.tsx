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
  title:
    "Stjernberg Web and IT Services | Expert Web Developer from Finland | Next.js, Node.js React.js Firebase",
  description:
    "Jens Mikael, a skilled 17-year-old web developer from Finland, fluent in English, Swedish, Finnish, and Norwegian, with a passion for building secure, high-performance web applications using Next.js, Tailwind CSS, Node.js, and DrizzleORM. Explore a diverse portfolio featuring design replications, robust backends, and innovative projects, showcasing expertise in frontend and backend development, authentication systems, and database management. Connect with a developer dedicated to creating meaningful digital solutions.",
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
