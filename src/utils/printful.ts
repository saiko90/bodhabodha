// src/utils/printful.ts

const PRINTFUL_API_URL = 'https://api.printful.com';

export async function getPrintfulProduct(searchTerm: string) {
  const token = process.env.PRINTFUL_ACCESS_TOKEN;

  if (!token) return null;

  try {
    console.log("🔍 Récupération des 20 derniers produits de la boutique (SANS FILTRE)...");

    // ON RETIRE LE FILTRE "search" et on met la limite à 20
    const res = await fetch(
      `${PRINTFUL_API_URL}/store/products?limit=20`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 } // Pas de cache pour le debug
      }
    );

    if (!res.ok) throw new Error('Erreur Printful API');

    const data = await res.json();
    const products = data.result;

    if (!products || products.length === 0) {
        console.warn("⚠️ La boutique est vide ! Aucun produit trouvé.");
        return null;
    }

    // --- ZONE DE DEBUG ---
    // Cela va afficher la liste des produits trouvés dans ton terminal
    console.log("------------------------------------------------");
    console.log(`✅ ${products.length} produits trouvés dans la boutique :`);
    products.forEach((p: any, index: number) => {
        console.log(`   ${index + 1}. [${p.id}] ${p.name}`);
    });
    console.log("------------------------------------------------");
    // ---------------------

    // Pour l'instant, on retourne le TOUT PREMIER produit de la liste
    // juste pour vérifier que l'image s'affiche bien sur le site.
    const productToDisplay = products[0];

    return {
      id: productToDisplay.id,
      name: productToDisplay.name,
      image: productToDisplay.thumbnail_url,
      url: productToDisplay.external_url || '#' 
    };

  } catch (error) {
    console.error("❌ Erreur Fetch Printful:", error);
    return null;
  }
}