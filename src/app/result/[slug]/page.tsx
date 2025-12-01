import { client } from "@/lib/sanity"
import { MOCK_PRODUCTS } from "@/utils/products"
import ResultClient from "@/components/ResultClient" 

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
  
  // 1. Récupération des données (Le plus vite possible !)
  const result = await getResult(slug)
  
  // @ts-ignore
  const product = MOCK_PRODUCTS[slug] || MOCK_PRODUCTS['red']

  if (!result) {
    return <div className="min-h-screen flex items-center justify-center text-white bg-black">Result not found.</div>
  }

  // 2. On passe le relais au Client pour l'affichage et l'animation
  return <ResultClient result={result} product={product} />
}