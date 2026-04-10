import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asifcontracting.com"),
  title: {
    default: "Asif Contracting Corp | NYC's #1 Construction Company | 21+ Years",
    template: "%s | Asif Contracting Corp - NYC Construction",
  },
  description:
    "NYC's most trusted construction company with 21+ years of experience. Licensed & insured general contractor specializing in renovations, new construction, remodeling, and more across all 5 boroughs. Free estimates.",
  keywords: [
    "NYC construction company",
    "general contractor NYC",
    "home renovation NYC",
    "remodeling contractor New York",
    "construction company New York City",
    "licensed contractor NYC",
    "kitchen remodeling NYC",
    "bathroom remodeling NYC",
    "new construction NYC",
    "home improvement NYC",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asifcontracting.com",
    siteName: "Asif Contracting Corp",
    title: "Asif Contracting Corp | NYC's #1 Construction Company",
    description:
      "21+ years building NYC. Licensed & insured general contractor for renovations, new construction, remodeling & more. Free estimates across all 5 boroughs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asif Contracting Corp - NYC Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Contracting Corp | NYC's #1 Construction Company",
    description: "21+ years building NYC. Licensed & insured general contractor. Free estimates.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://asifcontracting.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
