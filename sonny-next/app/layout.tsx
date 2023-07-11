import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Icha Portfolio",
  description: "Learning from Sonny Sangha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth snap-mandatory">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
