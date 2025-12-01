'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Fireflies from "@/components/Fireflies" 

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-yellow-300 selection:text-black overflow-x-hidden">

      {/* FOND + LUCIOLES */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-green-950/20 to-black pointer-events-none z-0" />
      <Fireflies />
      
      {/* NAVIGATION RAPIDE */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-yellow-300 transition-colors">
          BodhaBodha
        </Link>
        <Link href="/" className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Back to Assessment
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl relative z-10">
        
        {/* EN-TÊTE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-300 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            The Creator
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Vee John Baptiste
          </h1>
          <p className="text-xl text-white/60 italic">
            Psych, dip, MA
          </p>
        </motion.div>

        {/* ... (Le reste de ton contenu Bio reste identique) ... */}
        {/* CONTENU BIO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-invert mx-auto leading-relaxed text-white/90 space-y-8 font-light text-lg md:text-xl"
        >
          <p>
            <strong className="text-white font-medium">Vee John Baptiste</strong> is a transpersonal psychotherapist and clarifist with over ten years of clinical practice.
          </p>
          
          <p>
            Drawing on her training in psychotherapy and transpersonal education, she helps clients go beyond trauma, beyond patterns, beyond the endless collecting of coping mechanisms and tools. Her work illuminates how <strong>consciousness itself</strong>—not techniques or strategies—creates genuine transformation in relationships.
          </p>

          <div className="border-l-2 border-yellow-300/50 pl-6 my-10 italic text-white/80">
            "Space with Vee facilitates clarity around personal narratives, revealing the internal maps that shape how we see, what we seek, and who we become in partnership."
          </div>

          <p>
            A lifelong resident of Notting Hill, London, and committed Ashtanga yogi, Vee is a dedicated student of Sanskrit and ancient wisdom traditions. Driven by deep curiosity about human existence, she uses film and popular culture to decode relational patterns, bridging the gap between ancient wisdom and contemporary life.
          </p>

          <hr className="border-white/10 my-12" />

          <h3 className="text-2xl font-serif text-yellow-300 mb-4">The Origin of BodhaBodha</h3>
          
          <p>
            This platform emerged from years of observing the same patterns across hundreds of clinical hours—people seeking in others what they had not yet developed in themselves, repeating the same relational dynamics without understanding why.
          </p>
          
          <p>
            <strong>BodhaBodha</strong> makes that clarification accessible—revealing which lens you're using and what becomes possible when you see clearly.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link 
            href="/"
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Discover Your Lens
          </Link>
        </motion.div>

      </div>
    </main>
  )
}