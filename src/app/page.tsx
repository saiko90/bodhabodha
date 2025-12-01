'use client'

import { useState, useEffect } from 'react'
import { client } from "@/lib/sanity"
import Quiz from "@/components/Quiz"
import Hero from "@/components/Hero"
import HomeContent from "@/components/HomeContent" // <--- Import

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
    <main className="min-h-screen bg-black"> {/* bg-black pour être raccord */}
      
      {/* VUE 1 : ACCUEIL (Hero + Contenu) */}
      {view === 'hero' && (
        <div className="animate-in fade-in duration-500">
          <Hero onStart={() => setView('quiz')} />
          <HomeContent />
        </div>
      )}

      {/* VUE 2 : QUIZ (Plein écran) */}
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