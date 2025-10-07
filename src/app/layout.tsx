import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kennedy Ada - Full-Stack Developer | Code, Design, Impact",
  description:
    "Crafting web experiences that blend clean design, solid engineering, and real world impact.",
  openGraph: {
    title: "Kennedy Ada - Full-Stack Developer | Code, Design, Impact",
    description:
      "Crafting web experiences that blend clean design, solid engineering, and real world impact.",
    url: "https://adaken.dev",
    siteName: "Kennedy Ada Portfolio",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Kennedy Ada Portfolio Preview",
      },
      {
        url: "/social-preview-square.png",
        width: 600,
        height: 600,
        alt: "Kennedy Ada Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kennedy Ada - Full-Stack Developer | Code, Design, Impact",
    description:
      "Crafting web experiences that blend clean design, solid engineering, and real world impact.",
    images: ["/social-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "web development",
    "frontend",
    "react",
    "full-stack",
    "nextjs",
    "design",
    "portfolio",
  ],
  authors: [{ name: "Kennedy Ada" }],
  creator: "Kennedy Ada",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
