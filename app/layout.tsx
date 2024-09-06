import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/providers";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stjernberg Web and IT Services",
  description:
    "My web development portfolio where I showcase my skills, past projects and services",
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
          <Navbar />
          {children}
          <Analytics />
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
