import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body className={cn("")}>{children}</body>
    </html>
  );
}
