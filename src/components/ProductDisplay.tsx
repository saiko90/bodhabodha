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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-16 w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-64 w-full bg-gray-100">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
          ${product.price}
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-gray-900 font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-6">
          Wear your consciousness. High-quality cotton blend.
        </p>
        
        <a 
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors"
        >
          Buy Now
        </a>
      </div>
    </motion.div>
  )
}