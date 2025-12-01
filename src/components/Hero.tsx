'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onStart }: { onStart: () => void }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // ON NE TOUCHE PAS AU SPRAY
  const MASK_SIZE = 600;

  const updateMousePosition = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })
  }

  return (
    <div 
      // J'ai rajouté 'overflow-hidden' ici vvv
      className="relative w-full h-screen overflow-hidden cursor-none bg-black"
      onMouseMove={updateMousePosition}
    >
      {/* --- COUCHE 1 : LE FOND (Jardin) --- */}
      <div className="absolute inset-0 w-full h-full z-0">
         <motion.div 
            className="w-full h-full"
            style={{ scale: 1.1 }}
            animate={{ 
                x: mousePosition.x / -60, 
                y: mousePosition.y / -60 
            }}
         >
             <img 
                src="/images/bg-fond2.jpg"
                alt="Garden Background"
                className="w-full h-full object-cover opacity-100"
             />
         </motion.div>
      </div>

      {/* --- COUCHE 2 : TITRE CACHÉ (BodhaBodha) --- */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-[12vw] font-bold text-yellow-300 tracking-tighter drop-shadow-[0_0_30px_rgba(253,224,71,0.5)] opacity-90">
            BodhaBodha
        </h1>
      </div>

      {/* --- COUCHE 3 : FEUILLES (Premier plan) --- */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
         <motion.div 
            className="w-full h-full"
            style={{ scale: 1.1 }}
            animate={{ x: mousePosition.x / -25, y: mousePosition.y / -25 }}
         >
             <img 
                src="/images/bg-feuilles4.png"
                alt="Leaves"
                className="w-full h-full object-cover object-left-bottom"
             />
         </motion.div>
      </div>

      {/* --- COUCHE 4 : MASQUE BLANC + TEXTE (Desktop) --- */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-white hidden md:flex flex-col items-center justify-center text-center p-6 z-30"
        style={{
          maskImage: `radial-gradient(circle ${MASK_SIZE}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 10%, black 50%)`,
          WebkitMaskImage: `radial-gradient(circle ${MASK_SIZE}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 10%, black 50%)`
        }}
      >
        <div className="max-w-4xl pointer-events-none text-gray-900 flex flex-col items-center h-full justify-center">
          
          {/* TITRE : Tiré vers le haut */}
          <h1 className="text-6xl md:text-9xl font-bold mb-0 tracking-tighter -mt-40">
            Conscious<br/>Coupling.
          </h1>

          {/* SOUS-TITRE : Poussé vers le bas */}
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mt-40">
            Before you can consciously couple, you need to see clearly. <br/>
            <strong>BodhaBodha</strong> reveals which consciousness lens you're currently using.
          </p>

        </div>
      </motion.div>

      {/* --- VERSION MOBILE (Texte visible sans masque) --- */}
      <div className="absolute inset-0 w-full h-full flex md:hidden flex-col items-center justify-center text-center p-6 z-30 bg-black/40">
         <div className="max-w-4xl text-white">
            <h1 className="text-5xl font-bold mb-6 tracking-tighter text-yellow-300 drop-shadow-lg">
                Conscious<br/>Coupling.
            </h1>
            <p className="text-lg font-light leading-relaxed mb-10">
                Before you can consciously couple, you need to see clearly.<br/>
                <strong>BodhaBodha</strong> reveals your consciousness lens.
            </p>
         </div>
      </div> {/* <--- C'EST CETTE BALISE QUI MANQUAIT ! */}

      {/* --- COUCHE 5 : LE BOUTON (Hors du masque) --- */}
      <div className="absolute inset-x-0 bottom-16 flex justify-center z-40 pointer-events-none">
        <div className="pointer-events-auto">
            <button 
              onClick={onStart}
              className="px-12 py-5 bg-black text-white rounded-full text-lg font-medium hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.8)] border border-white/20"
            >
              Take the Assessment
            </button>
        </div>
      </div>

      {/* Curseur */}
      <motion.div
        className="fixed w-8 h-8 bg-yellow-400/50 backdrop-blur-md rounded-full pointer-events-none z-50 mix-blend-overlay border border-white/80"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
    </div>
  )
}