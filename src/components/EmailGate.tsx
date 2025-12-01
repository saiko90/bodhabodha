'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function EmailGate({ resultSlug }: { resultSlug: string }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        // Si l'inscription réussit, on redirige vers le résultat
        router.push(`/result/${resultSlug}`)
      } else {
        alert("Something went wrong. Please try again.")
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-50 max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl text-center border-2 border-white/50"
    >
      <div className="flex justify-center mb-6">
        <img 
            src="/images/gate.jpg" 
            alt="Unlock" 
            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-yellow-100"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Profile is Ready.</h2>
      <p className="text-gray-600 mb-8">
        Enter your email to unlock your detailed <strong>Consciousness Lens</strong> report and receive your personalized analysis.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Unlocking...' : 'Reveal My Result ✨'}
        </button>
      </form>
      
      <p className="text-xs text-gray-400 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  )
}