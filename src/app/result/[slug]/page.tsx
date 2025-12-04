// src/app/result/[slug]/page.tsx

import { client } from "@/lib/sanity"
import ResultClient from "@/components/ResultClient" 
// Import de la nouvelle fonction
import { getAllPrintfulProducts } from "@/utils/printful"

async function getResult(slug: string) {
  const query = `*[_type == "result" && slug.current == $slug][0]{
    title,
    description,
    color,
    "imageUrl": image.asset->url
  }`
  return await client.fetch(query, { slug })
}

export default async function ResultPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await getResult(slug)

  if (!result) {
    return <div className="min-h-screen flex items-center justify-center text-white bg-black">Result not found.</div>
  }

  let products = null;
  
  try {
    // On récupère TOUS les produits
    products = await getAllPrintfulProducts();
  } catch (error) {
    console.error("Erreur Printful:", error);
  }


  return <ResultClient result={result} products={products} />
}