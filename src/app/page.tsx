'use client'

import { useState, useEffect } from 'react'
import { client } from "@/lib/sanity"
import Quiz from "@/components/Quiz"
import Hero from "@/components/Hero"
import HomeContent from "@/components/HomeContent"
import Footer from "@/components/Footer" // <--- 1. IMPORT ICI

export default function Home() {
  const [questions, setQuestions] = useState<any[]>([])
  const [view, setView] = useState<'hero' | 'quiz'>('hero')

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await client.fetch(`*[_type == "question"] | order(_createdAt asc){ text, answers }`)
      setQuestions(data)
    }
    fetchQuestions()
  }, [])

  return (
    <main className="min-h-screen bg-black">
      
      {/* VUE 1 : ACCUEIL */}
      {view === 'hero' && (
        <div className="animate-in fade-in duration-500">
          <Hero onStart={() => setView('quiz')} />
          <HomeContent />
          <Footer /> {/* <--- 2. AJOUTE LE COMME ÇA */}
        </div>
      )}

      {/* VUE 2 : QUIZ */}
      {view === 'quiz' && (
        <div className="animate-in fade-in duration-700 fixed inset-0 z-50 bg-black">
          {questions.length > 0 ? (
            <Quiz questions={questions} />
          ) : (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading assessment...
            </div>
          )}
        </div>
      )}
    </main>
  )
}