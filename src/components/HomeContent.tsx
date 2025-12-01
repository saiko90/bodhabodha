'use client'
import { motion } from 'framer-motion'

export default function HomeContent() {
  return (
    <div className="bg-black text-white relative z-50">
      
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
            You have done the work—therapy, recovery programs, plant medicine, spiritual practice. The work has value. The work matters.
          </p>
          <p className="text-xl text-white font-light leading-relaxed">
            And still: the same types. The same draining of time and vital energy. The same sense that something fundamental remains unchanged.
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
              Your relational patterns begin to shift once consciousness is refined, once light reveals the actual shape of your perception.
            </p>
            <p className="text-gray-400">
              <strong>BodhaBodha</strong> does not fix your vision. It shows you which lens you are using. It reveals the shape of your current perception.
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

      {/* SECTION 3: THE 7 LENSES */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif text-center mb-16">The 7 Consciousness Lenses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { color: "bg-red-500", name: "Red Thread", desc: "Following the thread of pattern. Learning to focus." },
              { color: "bg-orange-500", name: "Orange Juice", desc: "Everything feels fresh and alive. Chemistry creates clarity." },
              { color: "bg-yellow-500", name: "Yellow Mellow", desc: "Reality settles in. Patterns repeat." },
              { color: "bg-green-500", name: "Green Scene", desc: "The full picture emerges. Questions multiply." },
              { color: "bg-blue-500", name: "True Blue", desc: "Building from within. Authentic expression." },
              { color: "bg-indigo-500", name: "Indi Gogo", desc: "Abstract vision and practical action flow freely." },
              { color: "bg-white", name: "White Light", desc: "Clear sight. Natural presence.", text: "text-black" },
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

    </div>
  )
}