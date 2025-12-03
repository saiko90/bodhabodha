import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";

// Configuration des polices
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair", 
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: "--font-lato",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Assessment Result",
  description: "Discover your inner archetype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* On injecte les variables CSS ici */}
      <body className={`${playfair.variable} ${lato.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}