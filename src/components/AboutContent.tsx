// src/components/AboutContent.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fireflies from "@/components/Fireflies"

export default function AboutContent({ data }: { data: any }) {
  
  // DÉFINITION DES TEXTES (Fallback : Si Sanity est vide, on utilise tes textes d'origine)
  const t = {
    title: data?.title || "About this work",
    practitionerName: data?.practitionerName || "Vee John-Baptiste",
    intro: data?.bioIntro || "Vee John-Baptiste is a transpersonal psychotherapist and clarifist with over ten years of clinical practice.",
    main: data?.bioMain || "Drawing on her training in psychotherapy and transpersonal education, she helps clients go beyond trauma, beyond patterns, beyond the endless collecting of coping mechanisms and tools. Her work illuminates how consciousness itself—not techniques or strategies—creates genuine transformation in relationship with self and others.",
    quote: data?.quote || "Space with Vee facilitates clarity around personal narratives, revealing the internal maps that shape how we see, what we seek, and who we become in partnership.",
    outro: data?.bioOutro || "A lifelong resident of Notting Hill, London, and committed Ashtanga yogi, Vee is a dedicated student of Sanskrit and ancient wisdom traditions. Driven by deep curiosity about human existence, she uses film and popular culture to decode relational patterns, bridging the gap between ancient wisdom and contemporary life.",
    originTitle: data?.originTitle || "The Origin of BodhaBodha",
    originText: data?.originText || "This platform emerged from years of observing the same patterns across hundreds of clinical hours—people seeking in others what they had not yet developed in themselves. BodhaBodha makes that clarification accessible—revealing which lens you're using."
  }

  return (
    // Fond Bleu Pétrole (#1F3A4D)
    <main className="relative min-h-screen bg-[#1F3A4D] text-[#C4B298] selection:bg-[#C4B298] selection:text-[#1F3A4D] overflow-x-hidden">

      {/* EFFET LUCIOLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Fireflies />
      </div>

      {/* NAVIGATION RAPIDE */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-[#C4B298] transition-colors">
          BodhaBodha
        </Link>
        <Link href="/" className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors">
          Back to Assessment
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-32 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start md:items-center">
            
            {/* --- COLONNE GAUCHE : TEXTES --- */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left space-y-8 order-2 md:order-1"
            >
                {/* EN-TÊTE */}
                <div>
                    <span className="block text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-3">
                        The Practitioner behind the platform
                    </span>
                    
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        {t.title}
                    </h1>

                    <h3 className="text-xl md:text-2xl font-light italic text-[#C4B298]">
                        {t.practitionerName} <span className="text-sm not-italic opacity-60 ml-2">Psych, dip, MA</span>
                    </h3>
                </div>

                {/* CONTENU BIO */}
                <div className="space-y-6 text-white/90 font-light leading-relaxed text-lg">
                    {/* whitespace-pre-wrap permet de respecter les sauts de ligne du Studio Sanity */}
                    <p className="whitespace-pre-wrap">
                        <strong className="text-white font-medium">{t.practitionerName}</strong> {t.intro.replace(t.practitionerName, '')}
                    </p>
                    
                    <p className="whitespace-pre-wrap">{t.main}</p>

                    <div className="border-l-2 border-[#C4B298] pl-6 my-8 italic text-white/80 whitespace-pre-wrap">
                        "{t.quote}"
                    </div>

                    <p className="whitespace-pre-wrap">{t.outro}</p>
                </div>

                <hr className="border-white/10 my-8" />

                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-[#C4B298]">{t.originTitle}</h3>
                    <p className="text-white/80 font-light leading-relaxed whitespace-pre-wrap">
                        {t.originText}
                    </p>
                </div>

            </motion.div>

            {/* --- COLONNE DROITE : PHOTO --- */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative order-1 md:order-2 flex justify-center md:justify-end"
            >
                {/* Cadre style "Carte" */}
                <div className="relative w-full max-w-md aspect-[3/4] md:aspect-[4/5]">
                    {/* Bordure décorative décalée */}
                    <div className="absolute inset-0 border border-[#C4B298]/30 translate-x-4 translate-y-4 rounded-sm" />
                    
                    {/* Image Container */}
                    <div className="absolute inset-0 rounded-sm overflow-hidden bg-black/20 shadow-2xl">
                        {/* Assure-toi que le fichier est bien un .jpg ou .png selon ce que tu as uploadé */}
                        <Image 
                            src="/images/vee-profile.jpg" 
                            alt={t.practitionerName}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                        
                        {/* Overlay très léger pour intégrer l'image au fond bleu */}
                        <div className="absolute inset-0 bg-[#1F3A4D]/10 mix-blend-overlay" />
                    </div>
                </div>
            </motion.div>

        </div>

      </div>
    </main>
  )
}