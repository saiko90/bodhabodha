'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { calculateResult, CalculationResult } from '@/utils/scoring'
import EmailGate from './EmailGate'
import Fireflies from './Fireflies'

export default function Quiz({ questions }: { questions: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()
  const [answers, setAnswers] = useState<string[]>([])
  const [pendingResult, setPendingResult] = useState<CalculationResult | null>(null)

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  const handleAnswer = (stage: string) => {
    const newAnswers = [...answers, stage]
    setAnswers(newAnswers)

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      const final = calculateResult(newAnswers)
      localStorage.setItem('aware_result', JSON.stringify(final))
      setPendingResult(final)
    }
  }

  // --- RENDU ---

  return (
    // FOND GÉNÉRAL (Jardin Flouté)
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4">
      
      {/* Image de fond fixe */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/bg-fond2.jpg" 
          className="w-full h-full object-cover blur-sm brightness-50 scale-110" // Flou + Sombre
          alt="Background" 
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Filtre noir supplémentaire */}
      </div>

      {/* Lucioles Magiques */}
      <Fireflies />

      {/* CONTENU PRINCIPAL (Au dessus) */}
      <div className="relative z-10 w-full max-w-2xl">
        
        {/* Si fini, on affiche le Gate, sinon le Quiz */}
        {pendingResult ? (
           <EmailGate resultSlug={pendingResult.primaryStage} />
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-white/20"
          >
            {/* Barre de progression */}
            <div className="w-full bg-gray-200/50 h-2">
              <motion.div 
                className="bg-gradient-to-r from-teal-500 to-green-500 h-2" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-10 text-center">
                <span className="text-xs font-bold tracking-[0.2em] text-teal-700 uppercase opacity-70">
                  Question {currentIndex + 1} / {questions.length}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-medium mt-4 text-gray-900 leading-snug">
                  {currentQuestion.text}
                </h2>
              </div>

              <div className="space-y-4">
                <AnimatePresence mode='wait'>
                  {currentQuestion.answers.map((ans: any, index: number) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleAnswer(ans.stage)}
                      className="w-full text-left p-5 rounded-xl bg-white/50 border border-gray-200 hover:border-teal-500 hover:bg-teal-50 hover:shadow-md transition-all duration-300 group"
                    >
                      <span className="text-gray-700 group-hover:text-teal-900 font-medium text-lg">
                        {ans.text}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
        
      </div>
    </div>
  )
}