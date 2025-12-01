import { client } from "@/lib/sanity"
import Link from "next/link"
import { PortableText } from '@portabletext/react'
import { MOCK_PRODUCTS } from "@/utils/products"
import ProductDisplay from "@/components/ProductDisplay"
import Fireflies from "@/components/Fireflies" 
import SocialShare from "@/components/SocialShare"
import Image from "next/image"

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
  await new Promise(resolve => setTimeout(resolve, 3000));
  const result = await getResult(slug)
  
  // @ts-ignore
  const product = MOCK_PRODUCTS[slug] || MOCK_PRODUCTS['red']

  if (!result) {
    return <div className="p-20 text-center text-black">Result not found for: {slug}</div>
  }

  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* --- 1. FOND DYNAMIQUE (Image floutée) --- */}
      <div 
        className="absolute inset-0 z-0 bg-black"
        style={{ backgroundColor: result.color }} 
      >
        {/* On utilise l'image du perso en fond géant flouté */}
        {result.imageUrl && (
            <Image
                src={result.imageUrl}
                alt="Atmosphere"
                fill 
                priority 
                className="object-cover opacity-50 blur-[80px] scale-125 animate-in fade-in duration-1000"
            />
        )}
        {/* Un voile noir pour la lisibilité */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* --- 2. PARTICLES --- */}
      <Fireflies />

      {/* --- 3. LA CARTE (Effet 3D Glass) --- */}
      <div className="relative z-10 max-w-4xl w-full bg-white/10 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.5)] my-10">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm font-bold opacity-70 mb-4 block">
            Your Consciousness Lens
          </span>
          
          {/* IMAGE PERSONNAGE (Plus grande et lumineuse) */}
          {result.imageUrl && (
             <div className="mb-10 flex justify-center">
                <div className="relative">
                    {/* Lueur derrière la tête */}
                    <div 
                        className="absolute inset-0 blur-3xl opacity-50 rounded-full"
                        style={{ backgroundColor: result.color || 'white' }}
                    />
                    <img 
                        src={result.imageUrl} 
                        alt={result.title}
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white/10"
                    />
                </div>
             </div>
          )}
          <div className="mb-10">
             <SocialShare title={result.title} slug={slug} />
          </div>
          {/* ---------------------------------- */}

          <h1 className="text-5xl md:text-8xl font-bold mt-4 mb-6 tracking-tighter drop-shadow-lg"></h1>

          <h1 className="text-5xl md:text-8xl font-bold mt-4 mb-6 tracking-tighter drop-shadow-lg">
            {result.title}
          </h1>
          
          {/* Petit trait élégant */}
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50" />
        </div>

        {/* Contenu Riche */}
        <div className="prose prose-lg md:prose-xl prose-invert mx-auto leading-relaxed text-center font-light text-white/90">
          <PortableText value={result.description} />
        </div>

        {/* --- SECTION SHOP --- */}
        <div className="my-16 border-t border-white/10 pt-12">
          <h2 className="text-center text-xl font-bold mb-12 uppercase tracking-[0.2em] opacity-60">
            Commemorate your Journey
          </h2>
          <ProductDisplay product={product} />
        </div>

        {/* Bouton Simple */}
        <div className="mt-12 text-center">
            <Link 
                href="/" 
                className="inline-block text-sm uppercase tracking-widest opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-white pb-1"
            >
              Retake Assessment
            </Link>
        </div>

      </div>
    </main>
  )
}