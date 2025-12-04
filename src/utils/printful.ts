// src/utils/printful.ts

const PRINTFUL_API_URL = 'https://api.printful.com';

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Nouvelle fonction : On récupère TOUT le catalogue
export async function getAllPrintfulProducts() {
  const token = process.env.PRINTFUL_ACCESS_TOKEN;

  if (!token) return null;

  try {
    // On demande jusqu'à 100 produits pour être tranquille
    const res = await fetch(
      `${PRINTFUL_API_URL}/store/products?limit=100`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 } // Cache d'une minute
      }
    );

    if (!res.ok) throw new Error('Erreur Printful API');
    const data = await res.json();
    let products = data.result;

    if (!products || products.length === 0) return null;

    // On mélange tout pour le fun
    products = shuffleArray(products);

    // On retourne TOUT (pas de .slice ici)
    return products.map((p: any) => ({
      id: p.id,
      name: p.name,
      image: p.thumbnail_url,
      url: p.external_url || '#' 
    }));

  } catch (error) {
    console.error("❌ Erreur Fetch Printful:", error);
    return null;
  }
}