'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  image: string
  url: string
}

export default function ProductDisplay({ product }: { product: Product }) {
  if (!product) return null

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-md mx-auto group"
    >
      {/* Lueur d'ambiance derrière la carte */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-50 transition duration-1000" />

      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-colors duration-500">
        
        {/* Zone Image */}
        <div className="relative h-80 w-full flex items-center justify-center p-8 bg-gradient-to-b from-white/5 to-transparent">
          {/* Cercle lumineux derrière le vêtement */}
          <div className="absolute w-48 h-48 bg-white/10 rounded-full blur-[50px]" />
          
          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
             <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              />
          </div>

          <div className="absolute top-6 right-6 backdrop-blur-md bg-white/10 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="text-white font-serif italic">${product.price}</span>
          </div>
        </div>

        {/* Zone Info */}
        <div className="p-8 text-center relative z-10">
          <h3 className="text-2xl font-serif text-white mb-2">{product.name}</h3>
          <p className="text-white/50 text-sm mb-8 font-light leading-relaxed">
            A physical anchor for your new awareness. <br/>
            Limited edition series.
          </p>
          
          <a 
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-all duration-300 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Claim Yours
          </a>
        </div>
      </div>
    </motion.div>
  )
}