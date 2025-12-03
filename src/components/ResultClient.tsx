'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import ProductDisplay from "@/components/ProductDisplay"
import Fireflies from "@/components/Fireflies"

interface ResultClientProps {
  result: {
    title: string
    description: any
    color: string
    imageUrl: string
  }
  products: any[] // On reçoit maintenant une liste de produits
}

// STYLES PERSONNALISÉS POUR SANITY (Look Premium Gold)
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

  // --- ECRAN DE CHARGEMENT ---
  if (!isReady) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white">
        {result.imageUrl && (
          <Image
            src={result.imageUrl}
            alt="Preload"
            fill
            className="opacity-0"
            priority
            onLoad={handleImageLoad}
          />
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

  // --- ECRAN DE RÉSULTAT ---
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-start p-4 md:p-8 overflow-x-hidden bg-black animate-in fade-in duration-1000">
      
      {/* 1. FOND DYNAMIQUE */}
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

      {/* 2. CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-3xl w-full mt-12 mb-20">
        
        {/* EN-TÊTE */}
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

        {/* CONTENU TEXTE */}
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl animate-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div className="prose-lg md:prose-xl mx-auto text-center font-light">
            <PortableText value={result.description} components={ptComponents} />
          </div>
        </div>

        {/* 3. SHOP SECTION (GRILLE DE 3) */}
        <div className="mt-28">
            <div className="flex items-center justify-center gap-6 mb-12 opacity-80">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
                <span className="uppercase tracking-[0.3em] text-xs text-gold-100 font-serif">The Bodha Collection</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
            </div>
            
            {/* GRILLE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products && products.map((product, index) => (
                 <ProductDisplay key={product.id || index} product={product} delay={index * 0.2} />
              ))}
            </div>
        </div>

        {/* FOOTER */}
        <div className="mt-24 text-center pb-10">
            <Link 
                href="/" 
                className="group relative inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 hover:text-gold-300 transition-colors duration-500"
            >
              <span>Restart the cycle</span>
              <span className="h-px w-0 bg-gold-500 group-hover:w-full transition-all duration-500" />
            </Link>
        </div>

      </div>
    </main>
  )
}