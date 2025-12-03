import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // On définit nos polices ici
        serif: ["var(--font-playfair)", "serif"], 
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        // Voici la palette GOLD qui manquait
        gold: {
          100: '#F9F1D8', // Très clair (texte)
          300: '#E6C985', // Doré moyen
          500: '#D4AF37', // Or pur (bordures)
          700: '#AA8C2C', // Or foncé (ombres)
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Assure-toi d'avoir fait: npm install @tailwindcss/typography
  ],
};
export default config;