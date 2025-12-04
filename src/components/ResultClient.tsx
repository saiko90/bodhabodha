'use client'

import { useState, useEffect, useRef } from 'react' // Ajout de useRef
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import ProductDisplay from "@/components/ProductDisplay"
import Fireflies from "@/components/Fireflies"
import Footer from "@/components/Footer"

// Icônes flèches simples (SVG)
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
)
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
)

interface ResultClientProps {
  result: {
    title: string
    description: any
    color: string
    imageUrl: string
  }
  products: any[]
}

const ptComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-300 font-sans font-light tracking-wide mix-blend-plus-lighter">
        {children}
      </p>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-100 to-gold-500 mt-16 mb-8 border-b border-gold-500/20 pb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-serif text-gold-100 mt-10 mb-4">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="relative border-l-4 border-gold-500 pl-6 py-4 my-10 italic text-xl md:text-2xl text-gold-100 bg-white/5 rounded-r-xl font-serif shadow-lg">
        <span className="absolute top-0 left-2 text-4xl text-gold-500 opacity-50">"</span>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
        {children}
      </strong>
    ),
  },
}

export default function ResultClient({ result, products }: ResultClientProps) {
  const [isReady, setIsReady] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Ref pour le conteneur du slider
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!result.imageUrl || imageLoaded) {
        setIsReady(true)
      }
    }, 2500)
    return () => clearTimeout(timer)
  }, [imageLoaded, result.imageUrl])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  // Fonctions de défilement manuel
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
        const { current } = sliderRef;
        // On défile de la largeur d'environ un écran ou un groupe d'articles
        const scrollAmount = direction === 'left' ? -350 : 350;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  if (!isReady) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white">
        {result.imageUrl && (
          <Image src={result.imageUrl} alt="Preload" fill className="opacity-0" priority onLoad={handleImageLoad} />
        )}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-t-2 border-gold-500 rounded-full animate-spin" />
          <div className="absolute inset-2 border-b-2 border-white/30 rounded-full animate-spin-slow" />
        </div>
        <h2 className="text-xl font-serif text-gold-300 animate-pulse tracking-[0.3em] uppercase">
          Revelations...
        </h2>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-start p-4 md:p-8 overflow-x-hidden bg-black animate-in fade-in duration-1000">
      
      <div 
        className="fixed inset-0 z-0 transition-colors duration-1000"
        style={{ backgroundColor: result.color || '#111' }} 
      >
        {result.imageUrl && (
            <Image 
                src={result.imageUrl} 
                alt="Atmosphere"
                fill
                className="object-cover opacity-30 blur-[80px] scale-110"
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" /> 
      </div>

      <Fireflies />

      <div className="relative z-10 max-w-5xl w-full mt-12 mb-20">
        
        {/* HEADER */}
        <div className="text-center mb-16 animate-in slide-in-from-top-10 duration-1000 delay-300">
          <span className="inline-block py-1 px-4 border border-gold-500/30 rounded-full text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-300 mb-8 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            Your Archetype
          </span>
          
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 mb-10 group">
             <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000"
                style={{ backgroundColor: result.color || 'white' }}
             />
             {result.imageUrl && (
                <Image 
                    src={result.imageUrl} 
                    alt={result.title}
                    fill
                    className="object-cover rounded-full shadow-2xl border border-white/10 relative z-10"
                />
             )}
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-100 via-gold-300 to-gold-700 drop-shadow-sm tracking-tight mb-6">
            {result.title}
          </h1>
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto opacity-70" />
        </div>

        {/* TEXTE */}
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl animate-in slide-in-from-bottom-10 duration-1000 delay-500 mb-28">
          <div className="prose-lg md:prose-xl mx-auto text-center font-light">
            <PortableText value={result.description} components={ptComponents} />
          </div>
        </div>

        {/* --- CAROUSEL SECTION --- */}
        <div className="relative w-full">
            <div className="flex items-center justify-center gap-6 mb-12 opacity-80">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
                <span className="uppercase tracking-[0.3em] text-xs text-gold-100 font-serif">The Bodha Collection</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            {/* Conteneur Slider avec Flèches */}
            <div className="relative group/slider">
                
                {/* Flèche Gauche */}
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-black/50 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-black transition-all duration-300 hidden md:flex"
                    aria-label="Scroll Left"
                >
                    <ArrowLeft />
                </button>

                {/* Zone de défilement (Scroll Container) */}
                <div 
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-6 pb-12 px-4 snap-x snap-mandatory scrollbar-hide items-stretch"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Cache la scrollbar native
                >
                    {products && products.map((product, index) => (
                         <div key={product.id || index} className="min-w-[85vw] md:min-w-[350px] snap-center">
                            <ProductDisplay product={product} delay={index * 0.1} />
                         </div>
                    ))}
                </div>

                {/* Flèche Droite */}
                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-black/50 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-black transition-all duration-300 hidden md:flex"
                    aria-label="Scroll Right"
                >
                    <ArrowRight />
                </button>
            </div>
            
            {/* Indication visuelle mobile (Swipe) */}
            <div className="md:hidden text-center text-white/20 text-[10px] uppercase tracking-widest mt-[-20px] animate-pulse">
                Swipe to explore
            </div>
        </div>

        {/* FOOTER ACTION (Restart) */}
        <div className="mt-24 text-center pb-20"> {/* J'ai augmenté un peu le pb (padding-bottom) */}
            <Link 
                href="/" 
                className="group relative inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 hover:text-gold-300 transition-colors duration-500"
            >
              <span>Restart the cycle</span>
              <span className="h-px w-0 bg-gold-500 group-hover:w-full transition-all duration-500" />
            </Link>
        </div>

      </div>

      {/* 2. AJOUTE LE FOOTER ICI, AVANT LA FIN DU MAIN */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black">
        <Footer />
      </div>

    </main>
  )
}