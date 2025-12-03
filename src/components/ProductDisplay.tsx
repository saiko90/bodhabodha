'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  image: string
  url: string
}

export default function ProductDisplay({ product, delay = 0 }: { product: Product, delay?: number }) {
  if (!product) return null

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      className="relative w-full max-w-sm mx-auto group h-full"
    >
      {/* Halo doré derrière la carte au survol */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/0 via-gold-500/20 to-gold-500/0 rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition duration-1000" />

      {/* La Carte : Fond noir semi-transparent */}
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden hover:border-gold-500/30 transition-colors duration-500 shadow-2xl flex flex-col h-full">
        
        {/* Zone Image */}
        <div className="relative h-72 w-full flex items-center justify-center p-6 bg-gradient-to-b from-white/5 to-transparent overflow-hidden">
          
          {/* Lueur d'ambiance */}
          <div className="absolute w-40 h-40 bg-white/5 rounded-full blur-[40px] group-hover:bg-gold-500/5 transition-colors duration-700" />
          
          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out z-10">
             <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              />
          </div>

          {/* --- BADGE NEW! STYLE "DARK GLASS" --- */}
          <div className="absolute top-5 right-5 z-20">
             <div className="relative bg-black/40 backdrop-blur-md border border-gold-500/30 px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-gold-500/60 transition-colors duration-500">
                {/* Petit point lumineux pour attirer l'oeil */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
                </span>
                
                <span className="font-serif italic font-bold text-sm text-gold-100 tracking-wider drop-shadow-sm">
                    New
                </span>
             </div>
          </div>
          {/* ----------------------------------- */}

        </div>

        {/* Zone Information */}
        <div className="p-6 text-center bg-black/40 border-t border-white/5 relative z-10 flex flex-col flex-grow justify-between">
          <div className="mb-6">
            <h3 className="text-lg font-serif text-white mb-3 tracking-wide leading-tight line-clamp-2 h-[3.5rem] flex items-center justify-center">
                {product.name}
            </h3>
            
            <p className="text-white/30 text-[10px] uppercase tracking-[0.25em] block font-light">
               Limited Edition
            </p>
          </div>
          
          <a 
            href={product.url}
            target={product.url === '#' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={`group/btn relative inline-flex items-center justify-center w-full py-3.5 overflow-hidden font-bold rounded-xl bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] ${product.url === '#' ? 'opacity-60 cursor-not-allowed bg-gray-200' : ''}`}
          >
            <span className="relative z-10 uppercase tracking-[0.2em] text-[11px] group-hover/btn:text-black">
                {product.url === '#' ? 'Coming Soon' : 'Acquire Artifact'}
            </span>
            {product.url !== '#' && (
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover/btn:scale-100 group-hover/btn:bg-gold-300/20" />
            )}
          </a>
        </div>
      </div>
    </motion.div>
  )
}