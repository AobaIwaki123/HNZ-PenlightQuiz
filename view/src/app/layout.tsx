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
      <body>{children}</body>
    </html>
  );
}
