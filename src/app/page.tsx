// src/app/page.tsx
import { client } from "@/lib/sanity"
import { getAllPrintfulProducts } from "@/utils/printful"
import HomeClient from "@/components/HomeClient"

// On force la page à être dynamique pour voir les changements de Vee instantanément
export const dynamic = 'force-dynamic';

export default async function Home() {
  
  // 1. Récupération des Questions
  const questions = await client.fetch(`*[_type == "question"] | order(_createdAt asc){ text, answers }`)

  // 2. Récupération du contenu TEXTE (Home Page)
  // On prend le premier document trouvé ([0])
  const homeContent = await client.fetch(`*[_type == "homePage"][0]`)

  // 3. Récupération des Lenses (Triées par ordre)
  const lenses = await client.fetch(`*[_type == "lens"] | order(order asc)`)

  // 4. Récupération Produits
  let products = [];
  try {
    products = await getAllPrintfulProducts() || [];
  } catch (e) {
    console.error("Erreur Printful", e);
  }

  return (
    <HomeClient 
        questions={questions} 
        products={products} 
        content={homeContent} // On passe le texte
        lenses={lenses}       // On passe les lentilles
    />
  )
}