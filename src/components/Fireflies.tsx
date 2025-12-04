'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Fireflies() {
  const [fireflies, setFireflies] = useState<{ id: number; left: number; top: number; size: number; duration: number }[]>([])

  useEffect(() => {
    // On génère 50 particules pour plus de densité
    const flies = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2, 
      duration: Math.random() * 10 + 5
    }))
    setFireflies(flies)
  }, [])

  return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">      
      {/* 1. LUEUR D'ÉNERGIE (Gros nuage qui bouge) */}
      <motion.div 
        className="absolute w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[100px] mix-blend-screen"
        animate={{
            x: ["-50%", "50%", "-50%"],
            y: ["-20%", "20%", "-20%"],
            scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ left: "20%", top: "20%" }}
      />

      {/* 2. LES LUCIOLES */}
      {fireflies.map((fly) => (
        <motion.div
          key={fly.id}
          className="absolute bg-yellow-200 rounded-full shadow-[0_0_15px_rgba(253,224,71,0.9)]"
          style={{ 
            left: `${fly.left}%`, 
            top: `${fly.top}%`,
            width: fly.size,
            height: fly.size
          }}
          animate={{
            y: [0, -150, 0], 
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0], 
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: fly.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5 
          }}
        />
      ))}
    </div>
  )
}