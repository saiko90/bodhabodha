// src/app/about/page.tsx
import { client } from "@/lib/sanity"
import AboutContent from "@/components/AboutContent"

// Force la mise à jour dynamique pour voir les changements du Studio instantanément
export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  // On récupère le document "aboutPage" depuis Sanity
  // Si rien n'existe encore, on renvoie un objet vide {}
  const data = await client.fetch(`*[_type == "aboutPage"][0]`) || {}

  // On passe les données au composant Client
  return <AboutContent data={data} />
}