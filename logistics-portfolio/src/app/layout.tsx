import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aruna Logistics Solution - Smart Logistics. Seamless Delivery.",
  description: "Transform your supply chain with India's most trusted logistics partner. End-to-end shipping solutions across 200+ cities with real-time tracking and 99.5% on-time delivery.",
  keywords: ["logistics", "shipping", "delivery", "freight", "warehousing", "supply chain", "aruna logistics"],
  authors: [{ name: "Aruna Logistics Solution" }],
  openGraph: {
    title: "Aruna Logistics Solution - Smart Logistics. Seamless Delivery.",
    description: "Transform your supply chain with India's most trusted logistics partner across 200+ cities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
