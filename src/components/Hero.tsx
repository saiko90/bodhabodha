'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onStart }: { onStart: () => void }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Taille de la loupe
  const MASK_SIZE = 400;

  const updateMousePosition = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })
  }

  // On s'assure juste que la vidéo démarre bien
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented", error);
      });
    }
  }, []);

  const subtitleText = "BODHABODHA reveals how you have been seeing—the unconscious patterns shaping every relationship in your life. When you see clearly—when awareness awakens—you relate from consciousness rather than conditioning.";
  const commonTextStyle = "text-lg md:text-xl font-semibold leading-relaxed";

  return (
    <div 
      className="relative w-full h-screen overflow-hidden cursor-none bg-black"
      onMouseMove={updateMousePosition}
    >
      {/* =========================================================
          COUCHE DU DESSOUS (RÉVÉLÉE PAR LA LOUPE)
          Contient : La Forêt + Le Titre Jaune + Le Texte BLANC LUMINEUX
         ========================================================= */}
      <div className="absolute inset-0 z-0">
          
          {/* Fond Forêt (Parallax) */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ scale: 1.1 }}
            animate={{ x: mousePosition.x / -60, y: mousePosition.y / -60 }}
          >
              <img src="/images/bg-fond2.jpg" alt="Forest Depth" className="w-full h-full object-cover" />
          </motion.div>

          {/* TITRE JAUNE */}
          <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none mb-20">
            <h1 className="text-[12vw] font-bold text-yellow-300 tracking-tighter drop-shadow-[0_0_30px_rgba(253,224,71,0.5)] opacity-80">
                BodhaBodha
            </h1>
          </div>

          {/* Feuilles Premier Plan */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-8"
            style={{ scale: 1.1 }}
            animate={{ x: mousePosition.x / -25, y: mousePosition.y / -25 }}
          >
              <img src="/images/bg-feuilles4.png" alt="Leaves" className="w-full h-full object-cover object-left-bottom" />
          </motion.div>

          {/* TEXTE BLANC LUMINEUX (Glow mystique) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 pointer-events-none">
             <div className="max-w-4xl mt-40"> 
                <p className={`${commonTextStyle} text-white drop-shadow-[0_0_25px_rgba(255,255,255,1)]`}>
                    {subtitleText}
                </p>
             </div>
          </div>
      </div>


      {/* =========================================================
          COUCHE DU DESSUS (MASQUÉE PAR LA LOUPE)
          Contient : La Vidéo + Overlay Ovale + Le Texte NOIR
         ========================================================= */}
      <motion.div 
        className="absolute inset-0 z-20 w-full h-full bg-white"
        style={{
          maskImage: `radial-gradient(circle ${MASK_SIZE}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${MASK_SIZE}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`
        }}
      >
          {/* Conteneur Vidéo */}
          <div className="absolute inset-0 w-full h-full">
             <video 
               ref={videoRef}
               src="/videos/intro.mp4"
               autoPlay
               loop 
               muted
               playsInline
               className="w-full h-full object-cover object-top" 
             />
             
             {/* OVERLAY VIGNETTE OVALE BLANCHE */}
             <div 
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 35%, white 75%)'
                }}
             />
          </div>

          {/* TEXTE NOIR AVEC "BACKLIGHT" */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-30 pointer-events-none">
             <div className="max-w-4xl mt-40 relative">
                
                {/* Backlight (Halo blanc) */}
                <div className="absolute inset-[-20px] bg-white/70 blur-2xl rounded-full -z-10 mix-blend-soft-light" />
                <div className="absolute inset-[-10px] bg-white/50 blur-xl rounded-full -z-10" />

                {/* Texte Noir */}
                <p className={`${commonTextStyle} text-gray-900`}>
                    {subtitleText}
                </p>
             </div>
          </div>
      </motion.div>


      {/* =========================================================
          INTERFACE UI
         ========================================================= */}
      <div className="absolute inset-x-0 bottom-16 flex justify-center z-50 pointer-events-none">
        <div className="pointer-events-auto">
            <button 
              onClick={onStart}
              className="px-12 py-5 bg-black text-white rounded-full text-lg font-medium hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.5)] border border-white/20"
            >
              Take the Assessment
            </button>
        </div>
      </div>

      <motion.div
        className="fixed w-8 h-8 bg-white/20 backdrop-blur-md rounded-full pointer-events-none z-50 border border-white/80 hidden md:block shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
    </div>
  )
}