import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black text-white/40 text-sm border-t border-white/10 relative z-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* 1. GAUCHE : Copyright (1/3 de la largeur) */}
        <div className="md:w-1/3 text-center md:text-left order-3 md:order-1">
          © {new Date().getFullYear()} BodhaBodha.
        </div>

        {/* 2. CENTRE : About Vee (1/3 de la largeur - Parfaitement centré) */}
        <div className="md:w-1/3 flex justify-center order-1 md:order-2">
          <Link 
            href="/about" 
            className="text-yellow-300 font-serif text-xl hover:text-white transition-all transform hover:scale-105 flex items-center gap-2 group"
          >
            <span>About this work</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* 3. DROITE : Liens Légaux (1/3 de la largeur - Alignés à droite) */}
        <div className="md:w-1/3 flex justify-center md:justify-end gap-6 order-2 md:order-3">
          <Link href="/terms" className="hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5">
            Privacy
          </Link>
        </div>

      </div>
    </footer>
  )
}