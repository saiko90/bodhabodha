import { client } from "@/lib/sanity"
import { MOCK_PRODUCTS } from "@/utils/products"
import ResultClient from "@/components/ResultClient" 
import { getPrintfulProductsRandom3 } from "@/utils/printful"

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

  // 1. Récupération des produits (Tableau)
  let products = null;
  
  try {
    // On appelle la fonction qui mélange et renvoie 3 produits
    products = await getPrintfulProductsRandom3();
  } catch (error) {
    console.error("Erreur Printful:", error);
  }

  // 3. On envoie le tableau 'products' au Client
  return <ResultClient result={result} products={products} />
}