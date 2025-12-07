'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    // Couleur de fond extraite de l'image "BODHA colours.png"
    <section className="relative py-24 px-6 md:px-12 bg-[#1F3A4D] text-[#C4B298] overflow-hidden">
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- COLONNE GAUCHE : TEXTES (Alignés à gauche) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8 order-2 md:order-1"
          >
            <div>
                {/* 2. Replace 'The Creator' WITH 'The Practitioner behind the platform' */}
                <span className="block text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-80 mb-2">
                    The Practitioner behind the platform
                </span>
                
                {/* 1. Replace 'About Vee John Baptiste' WITH 'About this work' */}
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
                    About this work
                </h2>

                {/* 4. Name smaller & Left aligned */}
                <h3 className="text-xl md:text-2xl font-light italic text-[#C4B298]">
                    Vee John-Baptiste
                </h3>
            </div>

            <div className="space-y-6 text-white/80 font-light leading-relaxed text-lg">
                <p>
                    BODHABODHA is not just a tool; it is a mirror. It was born from years of practice, observation, and a deep understanding of the human condition.
                </p>
                <p>
                    As a practitioner, my goal has never been to "fix" you, but to help you see. To reveal the unconscious lens through which you view your relationships, your conflicts, and your self.
                </p>
                <p>
                    When you see clearly—when the mechanism of your perception is laid bare—change happens naturally. Not through force, but through awareness.
                </p>
            </div>
            
            {/* Signature ou petit élément décoratif */}
            <div className="w-24 h-[1px] bg-[#C4B298]/50 mt-8"></div>

          </motion.div>


          {/* --- COLONNE DROITE : PHOTO (Ajoutée) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2 flex justify-center md:justify-end"
          >
            {/* Cadre décoratif */}
            <div className="relative w-full max-w-md aspect-[4/5]">
                {/* Bordure décalée pour l'effet style */}
                <div className="absolute inset-0 border border-[#C4B298]/30 translate-x-4 translate-y-4 rounded-lg" />
                
                {/* Image Container */}
                <div className="absolute inset-0 rounded-lg overflow-hidden bg-black/20 shadow-2xl">
                    <Image 
                        src="/images/vee-profile.jpg" 
                        alt="Vee John-Baptiste"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                    
                    {/* Overlay subtil pour harmoniser avec le bleu */}
                    <div className="absolute inset-0 bg-[#1F3A4D]/20 mix-blend-overlay" />
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}