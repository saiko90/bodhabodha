'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import ProductDisplay from "@/components/ProductDisplay"
import Fireflies from "@/components/Fireflies"

// On définit les types pour les props
interface ResultClientProps {
  result: {
    title: string
    description: any
    color: string
    imageUrl: string
  }
  product: any
}

export default function ResultClient({ result, product }: ResultClientProps) {
  const [isReady, setIsReady] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // 1. On lance un chronomètre minimum de 3 secondes pour l'effet "Mystique"
    const timer = setTimeout(() => {
      // On ne débloque que si l'image est AUSSI chargée (ou s'il n'y en a pas)
      if (!result.imageUrl || imageLoaded) {
        setIsReady(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [imageLoaded, result.imageUrl])

  // Fonction appelée quand l'image est physiquement chargée par le navigateur
  const handleImageLoad = () => {
    setImageLoaded(true)
    // Si les 3 secondes sont déjà passées, on débloque tout de suite
    // Sinon, le useEffect le fera à la fin du timer
  }

  // --- ECRAN DE CHARGEMENT (Pendant qu'on prépare tout) ---
  if (!isReady) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white transition-opacity duration-700">
        {/* On charge l'image en "cachette" (invisible) pour qu'elle soit prête */}
        {result.imageUrl && (
          <Image
            src={result.imageUrl}
            alt="Preload"
            fill
            className="opacity-0"
            priority
            onLoad={handleImageLoad} // C'est ici qu'on détecte la fin du téléchargement
          />
        )}
        
        {/* L'animation visuelle */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-4 border-yellow-300/30 rounded-full animate-ping" />
          <div className="absolute inset-0 border-4 border-yellow-300 rounded-full animate-pulse" />
        </div>
        <h2 className="text-2xl font-serif text-yellow-100 animate-pulse tracking-widest uppercase">
          Revealing your Lens...
        </h2>
      </div>
    )
  }

  // --- ECRAN DE RÉSULTAT (S'affiche instantanément car tout est prêt) ---
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center p-4 overflow-hidden bg-black animate-in fade-in duration-1000">
      
      {/* 1. FOND */}
      <div 
        className="absolute inset-0 z-0 transition-colors duration-1000"
        style={{ backgroundColor: result.color || '#000' }} 
      >
        {result.imageUrl && (
            <Image 
                src={result.imageUrl} 
                alt="Atmosphere"
                fill
                className="object-cover opacity-50 blur-[80px] scale-125"
            />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. PARTICULES */}
      <Fireflies />

      {/* 3. CARTE */}
      <div className="relative z-10 max-w-4xl w-full bg-white/10 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.6)] my-10 animate-in slide-in-from-bottom-10 duration-1000">
        
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm font-bold opacity-80 mb-6 block text-white/80">
            Your Consciousness Lens
          </span>
          
          {/* IMAGE DU PERSONNAGE */}
          {result.imageUrl ? (
             <div className="mb-10 flex justify-center">
                <div className="relative group">
                    <div 
                        className="absolute inset-0 blur-3xl opacity-60 rounded-full group-hover:opacity-80 transition-opacity duration-500"
                        style={{ backgroundColor: result.color || 'white' }}
                    />
                    <Image 
                        src={result.imageUrl} 
                        alt={result.title}
                        width={320}
                        height={320}
                        className="relative w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white/10"
                    />
                </div>
             </div>
          ) : (
            <div className="mb-10 flex justify-center">
                <div 
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-white/10 flex items-center justify-center"
                    style={{ backgroundColor: result.color }}
                >
                    <span className="text-4xl">✨</span>
                </div>
            </div>
          )}

          <h1 className="text-5xl md:text-8xl font-bold mt-4 mb-6 tracking-tighter drop-shadow-xl text-white">
            {result.title}
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto rounded-full" />
        </div>

        {/* CONTENU TEXTE */}
        <div className="prose prose-lg md:prose-xl prose-invert mx-auto leading-relaxed text-center font-light text-white/90">
          <PortableText value={result.description} />
        </div>

        {/* SHOP */}
        <div className="my-16 border-t border-white/10 pt-12">
          <h2 className="text-center text-sm md:text-base font-bold mb-12 uppercase tracking-[0.2em] opacity-60">
            Commemorate your Journey
          </h2>
          <ProductDisplay product={product} />
        </div>

        {/* RETAKE */}
        <div className="mt-12 text-center">
            <Link 
                href="/" 
                className="inline-block text-sm uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-white transition-all duration-300 border-b border-transparent hover:border-white/50 pb-1"
            >
              Retake Assessment
            </Link>
        </div>

      </div>
    </main>
  )
}