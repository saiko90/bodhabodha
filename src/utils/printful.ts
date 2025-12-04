// src/utils/printful.ts

const PRINTFUL_API_URL = 'https://api.printful.com';
const SHOPIFY_STORE_URL = 'https://bodhabodha.myshopify.com/products';

// Petit utilitaire pour transformer "Titre Du Produit" en "titre-du-produit" (slug)
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        
    .replace(/[^\w\-]+/g, '')    
    .replace(/\-\-+/g, '-')      
    .replace(/^-+/, '')          
    .replace(/-+$/, '');        
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

    return products.map((p: any) => {
        
        const generatedUrl = `${SHOPIFY_STORE_URL}/${slugify(p.name)}`;

        return {
            id: p.id,
            name: p.name,
            image: p.thumbnail_url,
            url: generatedUrl 
        };
    });

  } catch (error) {
    console.error("❌ Erreur Fetch Printful:", error);
    return null;
  }
}