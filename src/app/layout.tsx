import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nicolas — Strategic Frameworks for the AI-Native Era",
  description:
    "Strategic frameworks exploring how organizations must restructure for the AI-native era — where the bottleneck is no longer technology, but organizational design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${inter.variable}`}>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
