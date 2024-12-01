import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/providers";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { CSPostHogProvider } from "./Providers";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NJ7Z3HTEG9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NJ7Z3HTEG9');
          `}
        </Script>
      </head>
      <CSPostHogProvider>
        <body className={`${inter.className} relative min-h-screen text-white`}>
          <main>
            <Providers>
              <Navbar />
              {children}
              <Analytics />
              <SpeedInsights />
              <Toaster />
            </Providers>
          </main>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
