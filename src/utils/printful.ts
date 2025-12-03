const PRINTFUL_API_URL = 'https://api.printful.com'

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export async function getPrintfulProductsRandom3() {
  const token = process.env.PRINTFUL_ACCESS_TOKEN;

  if (!token) return null;

  try {
    // 1. On récupère un maximum de produits (ex: 50) pour avoir un bon mélange
    const res = await fetch(
      `${PRINTFUL_API_URL}/store/products?limit=50`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 } 
      }
    );

    if (!res.ok) throw new Error('Erreur Printful API');

    const data = await res.json();
    let products = data.result;

    if (!products || products.length === 0) return null;

    // 2. On mélange le tableau de résultats
    products = shuffleArray(products);

    // 3. On ne garde que les 3 premiers
    const selectedProducts = products.slice(0, 3);

    return selectedProducts.map((p: any) => ({
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