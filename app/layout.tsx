import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PORTAL – Collective Ink | Luxury Art Marketplace",
  description: "Where your perceptions become collectible art. A premium marketplace for contemporary inkblot art and collective creativity.",
  keywords: ["art", "marketplace", "inkblot", "collective", "luxury", "contemporary art"],
  authors: [{ name: "PORTAL Collective" }],
  openGraph: {
    title: "PORTAL – Collective Ink",
    description: "Where your perceptions become collectible art",
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
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
