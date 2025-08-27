import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Sam Gordon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overusedGroteske.className}`}>{children}</body>
    </html>
  );
}
