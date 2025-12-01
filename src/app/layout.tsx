import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

// 1. Police Sans-Serif (Moderne)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 2. Police Mono (Code)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 3. Police Serif (Élégance / Titres) -> AJOUTÉE
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// 4. Configuration SEO & Partage
export const metadata: Metadata = {
  title: "BodhaBodha | Discover your Consciousness Lens",
  description: "Before you can consciously couple, you need to see clearly. Take the 10-minute assessment to reveal your relational patterns.",
  
  // Icône dans l'onglet du navigateur
  icons: {
    icon: '/favicon.ico', 
  },

  // Apparence sur Facebook / WhatsApp / LinkedIn
  openGraph: {
    title: "BodhaBodha | Discover your Consciousness Lens",
    description: "Take the assessment to reveal your relational patterns and consciousness lens.",
    url: 'https://bodhabodha.vercel.app',
    siteName: 'BodhaBodha',
    images: [
      {
        url: '/images/bg-fond2.jpg', // On réutilise ta belle image de fond comme miniature !
        width: 1200,
        height: 630,
        alt: 'BodhaBodha Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        // On charge les 3 polices et on met le fond noir par défaut
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}