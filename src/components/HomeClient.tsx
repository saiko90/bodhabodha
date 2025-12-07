// src/components/HomeClient.tsx
'use client'

import { useState } from 'react'
import Quiz from "@/components/Quiz"
import Hero from "@/components/Hero"
import HomeContent from "@/components/HomeContent"
import Footer from "@/components/Footer"

// On définit ce qu'on reçoit du serveur
interface HomeClientProps {
  questions: any[]
  products: any[]
  content: any   
  lenses: any[]  
}

export default function HomeClient({ questions, products, content, lenses }: HomeClientProps) {
  const [view, setView] = useState<'hero' | 'quiz'>('hero')

  return (
    <main className="min-h-screen bg-black">
      
      {/* VUE 1 : ACCUEIL */}
      {view === 'hero' && (
        <div className="animate-in fade-in duration-500">
          
          {/* On donne le sous-titre dynamique au Hero */}
          <Hero 
            onStart={() => setView('quiz')} 
            subtitle={content?.heroSubtitle} 
          />
          
          {/* On donne les textes et les lentilles au contenu */}
          <HomeContent 
            products={products} 
            content={content} 
            lenses={lenses} 
          />
          
          <Footer />
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