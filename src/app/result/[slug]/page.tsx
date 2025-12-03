import { client } from "@/lib/sanity"
import { MOCK_PRODUCTS } from "@/utils/products"
import ResultClient from "@/components/ResultClient" 
import { getPrintfulProduct } from "@/utils/printful"

// Fonction de récupération Sanity
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
  // 1. Récupération du slug (Next.js 15 style)
  const { slug } = await params
  
  // 2. Récupération des données Sanity (Résultat du quiz)
  const result = await getResult(slug)

  // Si pas de résultat Sanity, on arrête ici
  if (!result) {
    return <div className="min-h-screen flex items-center justify-center text-white bg-black">Result not found.</div>
  }

  // 3. Logique Produit : Printful d'abord, Mock en secours
  let product = null;
  
  try {
    // On tente de récupérer le produit Printful
    product = await getPrintfulProduct(slug);
  } catch (error) {
    console.error("Erreur lors de la récupération Printful:", error);
    // Le produit reste null, donc on passera au fallback
  }

  // Si Printful n'a rien donné (ou erreur), on utilise les Mocks
  if (!product) {
    console.log(`Fallback sur les mocks pour: ${slug}`);
    // @ts-ignore
    product = MOCK_PRODUCTS[slug] || MOCK_PRODUCTS['red'];
  }

  // 4. On passe le tout au Client Component
  return <ResultClient result={result} product={product} />
}