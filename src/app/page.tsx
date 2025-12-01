'use client' // Important car on gère de l'état (State)

import { useState, useEffect } from 'react'
import { client } from "@/lib/sanity"
import Quiz from "@/components/Quiz"
import Hero from "@/components/Hero"

// On doit récupérer les données côté client ou passer par un Server Component parent.
// Pour simplifier aujourd'hui, on va fetcher dans un useEffect (méthode simple).
// (La méthode "pro" serait de garder page.tsx en serveur et passer les data, mais on gère l'état d'affichage ici).

export default function Home() {
  const [questions, setQuestions] = useState<any[]>([])
  const [view, setView] = useState<'hero' | 'quiz'>('hero') // État pour savoir quoi afficher

  // Charger les questions au démarrage
  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await client.fetch(`*[_type == "question"] | order(_createdAt asc){ text, answers }`)
      setQuestions(data)
    }
    fetchQuestions()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {view === 'hero' && (
        <Hero onStart={() => setView('quiz')} />
      )}

      {view === 'quiz' && (
        <div className="animate-in fade-in duration-700">
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