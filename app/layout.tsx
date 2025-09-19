import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CosmicHeader from "@/components/CosmicHeader";
import Script from "next/script";

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
  title: "PORTAL – Collective Ink | Cosmic Art Consciousness",
  description: "Where consciousness meets canvas. An interactive art project where anonymous perceptions become collectible cosmic artworks through collective consciousness.",
  keywords: ["art", "consciousness", "inkblot", "collective", "cosmic", "interactive art", "rorschach", "anonymous", "universe"],
  authors: [{ name: "PORTAL Collective" }],
  openGraph: {
    title: "PORTAL – Collective Ink",
    description: "Where consciousness meets canvas",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JETFDJK4PM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JETFDJK4PM');
          `}
        </Script>
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <CosmicHeader />
        {children}
      </body>
    </html>
  );
}
