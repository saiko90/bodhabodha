// src/components/ProductDisplay.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProductDisplayProps {
  product: {
    id: string
    name: string
    image: string
    url: string
  }
  delay?: number
}

export default function ProductDisplay({ product, delay = 0 }: ProductDisplayProps) {
  
  // Fonction pour générer le texte dynamique du bouton
  const getButtonText = (name: string) => {
    const lowerName = name.toLowerCase()
    
    if (lowerName.includes('hoodie')) {
      return "Buy Your Hoodie"
    }
    if (lowerName.includes('tee') || lowerName.includes('t-shirt') || lowerName.includes('shirt')) {
      return "Buy Your T-Shirt"
    }
    if (lowerName.includes('sweatshirt')) {
        return "Buy Your Sweatshirt"
    }
    
    // Fallback par défaut si le type n'est pas reconnu
    return "Buy Yours"
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.6 }}
      className="group relative flex flex-col items-center"
    >
      {/* CARTE PRODUIT */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-black border border-white/10 group-hover:border-gold-500/50 transition-all duration-500 shadow-2xl">
        
        {/* IMAGE */}
        <div className="absolute inset-0 p-4">
            <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                {product.image ? (
                    <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 350px"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20">
                        No Image
                    </div>
                )}
            </div>
        </div>

        {/* BADGE "ALREADY MADE" (Ex-Limited Edition) - RENDU LISIBLE */}
        <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 rounded text-[10px] uppercase tracking-[0.2em] text-white font-medium shadow-lg">
                Been there, doing  that
            </span>
        </div>

        {/* OVERLAY AU SURVOL */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link 
                href={product.url} 
                target="_blank"
                className="inline-block px-8 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
            >
                View Details
            </Link>
        </div>
      </div>

      {/* TITRE ET BOUTON ACTION */}
      <div className="mt-6 text-center w-full">
        <h3 className="text-lg font-serif text-white/90 mb-4 truncate w-full px-2">
            {product.name}
        </h3>
        
        <Link 
            href={product.url}
            target="_blank"
            className="w-full block py-4 border border-white/20 hover:border-gold-500 bg-white/5 hover:bg-gold-500/10 text-gold-300 hover:text-gold-100 uppercase tracking-[0.2em] text-xs transition-all duration-300 rounded-lg"
        >
            {getButtonText(product.name)}
        </Link>
      </div>

    </motion.div>
  )
}