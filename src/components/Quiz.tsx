'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface QuizProps {
  questions: any[]
}

export default function Quiz({ questions }: QuizProps) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [isExiting, setIsExiting] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  // --- CORRECTION ICI ---
  // On mélange les réponses à chaque fois que la QUESTION change (données ou index)
  const shuffledAnswers = useMemo(() => {
    if (!currentQuestion?.answers) return []

    // Copie pour ne pas muter l'original
    const mixed = [...currentQuestion.answers]
    
    // Mélange
    return mixed.sort(() => Math.random() - 0.5)
    
  }, [currentQuestion]) // <--- On surveille currentQuestion au lieu de l'index
  // ----------------------

  const handleAnswer = (answer: any) => {
    // Sécurisation du type de réponse
    const lensType = answer.lens || answer.type || answer.value || "unknown"

    setScores(prev => ({
      ...prev,
      [lensType]: (prev[lensType] || 0) + 1
    }))

    // Passer à la question suivante ou finir
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      finishQuiz()
    }
  }

  const finishQuiz = () => {
    setIsExiting(true)
    
    // Calcul du gagnant (celui avec le plus haut score)
    let winner = 'unknown';
    if (Object.keys(scores).length > 0) {
        winner = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
    }
    
    // Sauvegarde
    if (typeof window !== 'undefined') {
        localStorage.setItem('bodha_result', winner)
    }

    // Redirection
    setTimeout(() => {
      router.push(`/result/${winner}`)
    }, 500)
  }

  // Loading state si pas de données
  if (!currentQuestion) return (
    <div className="flex h-[50vh] items-center justify-center text-white/50">
        Loading...
    </div>
  )

  return (
    <div className="w-full max-w-2xl mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh]">
      
      {/* Barre de progression */}
      <div className="w-full bg-gray-800 h-1 mb-12 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode='wait'>
        {!isExiting && (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Question */}
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-12 text-center leading-relaxed">
              {currentQuestion.text}
            </h2>

            {/* Réponses (Mélangées) */}
            <div className="grid grid-cols-1 gap-4">
              {shuffledAnswers.map((answer: any, index: number) => (
                <motion.button
                  // Utilise answer._key si dispo pour aider React, sinon index
                  key={answer._key || index} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(answer)}
                  className="p-6 text-left rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-300 group"
                >
                  <span className="inline-block w-8 h-8 rounded-full border border-white/20 text-xs flex items-center justify-center mr-4 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    {String.fromCharCode(65 + index)} {/* A, B, C... */}
                  </span>
                  <span className="text-lg font-light">{answer.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}