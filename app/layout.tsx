import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const overusedGroteske = localFont({
  src: [
    {
      path: "../public/fonts/OverusedGrotesk-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Book.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/OverusedGrotesk-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/OverusedGrotesk-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-overused-groteske",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sam Gordon",
  description: "A theater enthusiast and a passionate developer, working to create technology that enhances the performing arts and everyday life.",
  openGraph: {
        title: "Sam Gordon",
        description: "A theater enthusiast and a passionate developer, working to create technology that enhances the performing arts and everyday life.",
        images: {
            url: "https://thesamgordon.com/opengraph-image.png",
            alt: "Sam Gordon",
            type: "image/png",
            width: 1200,
            height: 630,
        },
        type: "website",
        locale: "en_US",
    },
    twitter: {
        title: "Sam Gordon",
        card: "summary_large_image",
        description: "A theater enthusiast and a passionate developer, working to create technology that enhances the performing arts and everyday life.",
        images: {
            url: "https://thesamgordon.com/opengraph-image.png",
            alt: "Sam Gordon",
            type: "image/png",
            width: 1200,
            height: 630,
        },
    },
    manifest: "https://thesamgordon.com/manifest.json",
    keywords: ["Sam Gordon"],
    robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#980133",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="og:image" content="https://thesamgordon.com/opengraph-image.png" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
      </head>
      <body className={`${inter.variable} ${overusedGroteske.className}`}>{children}</body>
    </html>
  );
}
