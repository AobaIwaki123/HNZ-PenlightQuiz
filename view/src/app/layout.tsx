import type { Metadata } from "next";
import "./globals.css";
import {
  Noto_Sans_JP,
} from "next/font/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "日向坂46ペンライトクイズ",
  description: "日向坂46のペンライトのペアを答えるクイズです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansJP.className}>
      <head>
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="日向坂46ペンライトクイズ"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="My PWA App" />
      </head>
      <body>{children}</body>
    </html>
  );
}
