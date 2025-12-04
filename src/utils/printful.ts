// src/utils/printful.ts

const PRINTFUL_API_URL = 'https://api.printful.com';
const SHOPIFY_STORE_URL = 'https://bodhabodha.myshopify.com/products';

// Petit utilitaire pour transformer "Titre Du Produit" en "titre-du-produit" (slug)
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Remplace les espaces par des tirets
    .replace(/[^\w\-]+/g, '')    // Enlève les caractères spéciaux (sauf tirets)
    .replace(/\-\-+/g, '-')      // Évite les doubles tirets
    .replace(/^-+/, '')          // Coupe les tirets au début
    .replace(/-+$/, '');         // Coupe les tirets à la fin
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export async function getAllPrintfulProducts() {
  const token = process.env.PRINTFUL_ACCESS_TOKEN;

  if (!token) return null;

  try {
    // On récupère les produits
    const res = await fetch(
      `${PRINTFUL_API_URL}/store/products?limit=100`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 } 
      }
    );

    if (!res.ok) throw new Error('Erreur Printful API');
    const data = await res.json();
    let products = data.result;

    if (!products || products.length === 0) return null;

    products = shuffleArray(products);

    // C'EST ICI QUE LA MAGIE OPÈRE :
    return products.map((p: any) => {
        
        // On génère le lien Shopify manuellement
        // Ex: "BODHA Hoodie" devient "https://bodhabodha.myshopify.com/products/bodha-hoodie"
        const generatedUrl = `${SHOPIFY_STORE_URL}/${slugify(p.name)}`;

        return {
            id: p.id,
            name: p.name,
            image: p.thumbnail_url,
            // On force l'URL générée, car celle de Printful (p.external_url) est souvent vide ou mauvaise
            url: generatedUrl 
        };
    });

  } catch (error) {
    console.error("❌ Erreur Fetch Printful:", error);
    return null;
  }
}