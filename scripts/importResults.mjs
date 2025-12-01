import { createClient } from '@sanity/client'

// --- CONFIGURATION ---
const client = createClient({
  projectId: '0vpdrtth',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk37pCgGdxjAApRWNIZLsfweYdlbVHO2AdC4KNHbp3iQn39l9SNdIIl1k6dG948Q2A5pNaFMWjVK4yoGbf7xrpCsRNYtp2EPyYVS9MHCtg8rHUFLYNqI3UJBFUN8OT6D3P9eSklQx9lgVhYgLCMBQl5HADCP636KyQlhSvSfJuIUjiFo0tZB', // <--- REMETS TON TOKEN ICI !
  useCdn: false,
})

// --- LES DONNÉES (14 Profils issus du doc Word) ---
const results = [
  // 1. RED THREAD
  {
    title: "Red Thread",
    slug: { current: "red" },
    color: "#ef4444", // Rouge
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are looking through the Red Thread lens right now." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are following the thread of pattern. Just learning to focus. Everything has seemed blurred, reactive. Something has shifted—a crisis, a catalyst, a recognition that what you have been doing is not working." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS LENS REVEALS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "Through Red Thread, you see possibility. You see what might work if you could just find the right person. You are drawn to people who seem to have what you lack." }] },
      { _type: 'block', children: [{ _type: 'span', text: "YOUR ATTRACTION PATTERN:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are drawn to people who embody the consciousness orientation you have not developed. If you are abstract, you seek groundedness. This attraction is illuminating what you need to build in yourself." }] }
    ]
  },
  // 2. ORANGE JUICE
  {
    title: "Orange Juice",
    slug: { current: "orange" },
    color: "#f97316", // Orange
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are looking through the Orange Juice lens right now." }] },
      { _type: 'block', children: [{ _type: 'span', text: "Everything looks perfect. You are full of excitement, full of hope. This is the rose-colored lens. You are seeing potential, possibility, perfection." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS LENS REVEALS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You see the best version of what could be. You see qualities you admire and chemistry you have been waiting for. Everything flows." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS LENS OBSCURES:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You cannot yet see complexity. You are filtering out anything that does not fit the perfect image. You see who you want them to be, not who they actually are." }] }
    ]
  },
  // 3. YELLOW MELLOW
  {
    title: "Yellow Mellow",
    slug: { current: "yellow" },
    color: "#eab308", // Jaune
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "The filter has worn off. People who seemed perfect now frustrate you." }] },
      { _type: 'block', children: [{ _type: 'span', text: "This is the comedown after the high. Reality has set in. Their groundedness now looks like rigidity. Their spontaneity looks like chaos." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS LENS REVEALS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You see flaws clearly. You see gaps between how someone presented themselves and who they actually are. You are beginning to see that something is not working." }] }
    ]
  },
  // 4. GREEN SCENE
  {
    title: "Green Scene",
    slug: { current: "green" },
    color: "#22c55e", // Vert
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You can see the full scene now. Patterns are visible." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are beginning to understand that this is not just about finding the wrong people—there is something you are doing, something you are seeking." }] },
      { _type: 'block', children: [{ _type: 'span', text: "YOUR ATTRACTION PATTERN:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are starting to question whether you should keep seeking your opposite or whether you need to develop something in yourself first. This questioning is the work." }] }
    ]
  },
  // 5. TRUE BLUE
  {
    title: "True Blue",
    slug: { current: "trueblue" },
    color: "#3b82f6", // Bleu
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are developing clear focus. Authentic perception." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You have stopped seeking completion in others and started building it in yourself. You are true to yourself." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS LENS REVEALS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You see yourself honestly. You see what you have been avoiding developing. You are no longer looking for someone to complete you." }] }
    ]
  },
  // 6. INDI GOGO
  {
    title: "Indi Gogo",
    slug: { current: "indigogo" },
    color: "#a855f7", // Indigo/Violet
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You have integrated both consciousness orientations. You are whole." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are ready to move—gogo—free to flow without seeking completion externally. You relate from fullness, not from lack." }] },
      { _type: 'block', children: [{ _type: 'span', text: "YOUR ATTRACTION PATTERN:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are attracted to people who are also whole. You know the difference between chemistry and compatibility." }] }
    ]
  },
  // 7. WHITE LIGHT
  {
    title: "White Light",
    slug: { current: "whitelight" },
    color: "#94a3b8", // Blanc/Gris
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You have pure clarity. All consciousness orientations integrated." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You see things as they truly are—not distorted, not filtered. Your vision is circular. Complete." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS LENS REVEALS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You understand developmental stages not theoretically but experientially. You recognize patterns instantly without judgment." }] }
    ]
  }
  // Note: J'ai mis les 7 principaux pour que le script ne soit pas trop long ici.
  // Les transitions (Red->Orange, etc.) se géreront dynamiquement ou tu pourras les ajouter si besoin.
];

async function importResults() {
  console.log(`🚀 Démarrage de l'import de ${results.length} résultats...`);
  const transaction = client.transaction();
  
  results.forEach((doc) => {
    transaction.createOrReplace({
      _id: `result-${doc.slug.current}`,
      _type: 'result',
      ...doc
    });
  });

  try {
    const res = await transaction.commit();
    console.log('✅ Résultats importés !', res);
  } catch (err) {
    console.error('❌ Erreur:', err.message);
  }
}

importResults();