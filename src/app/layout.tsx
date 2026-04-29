import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "@/components/providers";
import { siteContent } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteContent.name} | ${siteContent.role}`,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.subheadline,
  applicationName: `${siteContent.name} Portfolio`,
  authors: [{ name: siteContent.name }],
  creator: siteContent.name,
  keywords: [
    "video editor",
    "short-form video editor",
    "social media SEO assistant",
    "YouTube Shorts editor",
    "TikTok video editor",
    "Instagram Reels editor",
    "YouTube title optimization",
    "hashtag research",
    "content repurposing",
  ],
  openGraph: {
    title: `${siteContent.name} | ${siteContent.role}`,
    description: siteContent.subheadline,
    url: siteUrl,
    siteName: `${siteContent.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} | ${siteContent.role}`,
    description: siteContent.subheadline,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full`}
    >
      <body>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
