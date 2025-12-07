'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import ProductDisplay from "@/components/ProductDisplay"

// Icônes Flèches pour le slider
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
)
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
)

export default function HomeContent({ products }: { products?: any[] }) {
  
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
        const { current } = sliderRef;
        const scrollAmount = direction === 'left' ? -350 : 350;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <div className="bg-black text-white relative z-50 overflow-hidden">
      
      {/* SECTION 1: THE PROBLEM */}
      <section className="py-24 px-6 container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-yellow-300 mb-8">
            The patterns repeat even after years of deep work.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            This is what people say. They have done the work—therapy, recovery programs, plant medicine, spiritual practice. The work has value. The work matters.
          </p>
          <p className="text-xl text-white font-light leading-relaxed">
            And still: the same types. The same draining of time and vital energy. The same sense that something fundamental remains unchanged.
            <br/><br/>
            <strong>What shifts everything is consciousness itself.</strong>
          </p>
        </motion.div>
      </section>

      <hr className="border-white/10 max-w-xl mx-auto" />

      {/* SECTION 2: LIGHT CREATES MOVEMENT */}
      <section className="py-24 px-6 container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold tracking-[0.2em] text-teal-500 uppercase mb-4">
              The Philosophy
            </h3>
            <h2 className="text-4xl font-serif mb-6">Light Creates Movement</h2>
            <p className="text-gray-400 mb-4">
              Your own fixed frames begin to shift when light is shed on your relational dynamics. When consciousness illuminates the actual shape of your perception.
            </p>
            <p className="text-gray-400">
              <strong>BODHABODHA</strong> does not fix your vision. It shows you which <strong>perceptual mode</strong> you are using. It reveals the shape of your current perception.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-gradient-to-br from-teal-900 to-black rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(20,184,166,0.2)]"
          >
            <div className="text-center p-8">
              <span className="block text-6xl mb-4">👁️</span>
              <p className="italic text-white/60">"Perfect vision requires a circular form. Not distorted. Not elongated. Round."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE 7 PERCEPTUAL MODES */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif text-center mb-16">7 Lens</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { color: "bg-red-500", name: "Red Thread", desc: "Following the thread of pattern. Learning to focus. Something has shifted." },
              { color: "bg-orange-500", name: "Orange Juice", desc: "Everything feels fresh and alive. Chemistry creates clarity. Possibility opens." },
              { color: "bg-yellow-500", name: "Yellow Mellow", desc: "Reality settles in. What attracted now reveals complexity. Patterns repeat." },
              { color: "bg-green-500", name: "Green Scene", desc: "The full picture emerges. Questions multiply. Confusion meets curiosity." },
              { color: "bg-blue-500", name: "True Blue", desc: "Building from within. Authentic expression. Inner work deepens." },
              { color: "bg-indigo-500", name: "Indi Gogo", desc: "Abstract vision and practical action flow freely. Inner and outer dialogue move naturally." },
              { color: "bg-white", name: "White Light", desc: "Clear sight. Natural presence. Being becomes teaching.", text: "text-black" },
            ].map((lens, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-black border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className={`w-4 h-4 rounded-full ${lens.color} mb-4 shadow-[0_0_10px_currentColor]`} />
                <h3 className="text-xl font-bold mb-2">{lens.name}</h3>
                <p className="text-sm text-gray-400">{lens.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOUVELLE SECTION SHOP (CARROUSEL) --- */}
      <div className="py-24 border-t border-white/10">
            <div className="text-center mb-16 px-4">
                <span className="text-yellow-300 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                    The Collection
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                    Wear Your Truth
                </h2>
            </div>

            <div className="relative group/slider max-w-7xl mx-auto">
                {/* Flèche Gauche */}
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hidden md:flex"
                >
                    <ArrowLeft />
                </button>

                {/* Slider */}
                <div 
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-8 pb-12 px-4 snap-x snap-mandatory scrollbar-hide items-stretch"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products && products.map((product, index) => (
                         <div key={product.id || index} className="min-w-[85vw] md:min-w-[350px] snap-center">
                            <ProductDisplay product={product} delay={index * 0.1} />
                         </div>
                    ))}
                </div>

                {/* Flèche Droite */}
                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hidden md:flex"
                >
                    <ArrowRight />
                </button>
            </div>
            
             <div className="md:hidden text-center text-white/20 text-[10px] uppercase tracking-widest mt-[-20px] animate-pulse">
                Swipe to explore
            </div>
      </div>

    </div>
  )
}