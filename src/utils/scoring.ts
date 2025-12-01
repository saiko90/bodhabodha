// src/utils/scoring.ts

type Scores = { [key: string]: number }

export interface CalculationResult {
  primaryStage: string
  confidence: number
  secondaryStage?: string
  isTransition: boolean
}

export function calculateResult(answers: string[]): CalculationResult {
  // 1. Initialisation des scores
  let scores: Scores = {
    red: 0, orange: 0, yellow: 0, green: 0, 
    trueblue: 0, indigogo: 0, whitelight: 0
  }

  // 2. Application des Poids (Règles de Vee)
  answers.forEach((stage, index) => {
    let weight = 1
    
    if (index < 10) {
      weight = 2 // Q1-10 (Stage Experience)
    } else if (index < 15) {
      weight = 1 // Q11-15 (Attachment)
    } else {
      weight = 1.5 // Q16-20 (Locus of Control)
    }

    if (scores[stage] !== undefined) {
      scores[stage] += weight
    }
  })

  // 3. Trouver le gagnant (Primary)
  const sortedScores = Object.entries(scores).sort(([,a], [,b]) => b - a)
  const primary = sortedScores[0]
  const secondary = sortedScores[1]

  // 4. Calcul de la confiance (%)
  const totalPoints = Object.values(scores).reduce((a, b) => a + b, 0)
  const confidence = Math.round((primary[1] / totalPoints) * 100)

  // 5. Détection de Transition
  // Si confiance < 70%, on regarde le second
  let isTransition = false
  let secondaryStage = undefined

  if (confidence < 70) {
    isTransition = true
    secondaryStage = secondary[0]
  }

  return {
    primaryStage: primary[0], // ex: 'red'
    confidence: confidence,   // ex: 75
    secondaryStage: secondaryStage, // ex: 'orange' ou undefined
    isTransition: isTransition
  }
}