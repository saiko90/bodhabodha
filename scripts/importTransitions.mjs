import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '0vpdrtth',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk37pCgGdxjAApRWNIZLsfweYdlbVHO2AdC4KNHbp3iQn39l9SNdIIl1k6dG948Q2A5pNaFMWjVK4yoGbf7xrpCsRNYtp2EPyYVS9MHCtg8rHUFLYNqI3UJBFUN8OT6D3P9eSklQx9lgVhYgLCMBQl5HADCP636KyQlhSvSfJuIUjiFo0tZB',
  useCdn: false,
})

const transitions = [
  // 1. RED -> ORANGE
  {
    title: "Red Thread → Orange Juice",
    slug: { current: "red-orange" },
    color: "#fca5a5", // Mix Rouge/Orange
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are primarily looking through the Red Thread lens, but you show characteristics of Orange Juice." }] },
      { _type: 'block', children: [{ _type: 'span', text: "This suggests you are in transition—you are beginning to see possibility in someone, or the idea of someone, and idealization is beginning." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS TRANSITION MEANS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are moving from seeking to believing you might find. From 'I need something' to 'someone could have what I need.' You are beginning to see potential and perfection in people who display qualities you are drawn to." }] }
    ]
  },
  // 2. ORANGE -> YELLOW
  {
    title: "Orange Juice → Yellow Mellow",
    slug: { current: "orange-yellow" },
    color: "#fcd34d", // Mix Orange/Jaune
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are primarily looking through the Orange Juice lens, but you show characteristics of Yellow Mellow." }] },
      { _type: 'block', children: [{ _type: 'span', text: "The filter is beginning to wear off and reality is setting in. Small things start to irritate you. The qualities that attracted you are showing their flip side." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS TRANSITION MEANS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are moving from seeing perfection to seeing complexity. From seeing potential to seeing reality. This is not failure—this is the natural progression of consciousness development." }] }
    ]
  },
  // 3. YELLOW -> GREEN
  {
    title: "Yellow Mellow → Green Scene",
    slug: { current: "yellow-green" },
    color: "#bef264", // Mix Jaune/Vert
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are primarily looking through the Yellow Mellow lens, but you show characteristics of Green Scene." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are beginning to see the full picture while still processing disappointment. You are tired of the same patterns recurring." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS TRANSITION MEANS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are moving from external blame to internal examination. From 'they were not right' to 'I keep doing this.' This requires seeing your own role in dynamics." }] }
    ]
  },
  // 4. GREEN -> BLUE
  {
    title: "Green Scene → True Blue",
    slug: { current: "green-trueblue" },
    color: "#67e8f9", // Mix Vert/Bleu
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are primarily looking through the Green Scene lens, but you show characteristics of True Blue." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are moving from pattern recognition to internal development. You are starting to build rather than just observe." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS TRANSITION MEANS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are moving from seeing the pattern to changing it. From 'I see what I am doing' to 'I am doing something different.' You are becoming authentic—true to yourself." }] }
    ]
  },
  // 5. BLUE -> INDIGO
  {
    title: "True Blue → Indi Gogo",
    slug: { current: "trueblue-indigogo" },
    color: "#818cf8", // Mix Bleu/Indigo
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are primarily looking through the True Blue lens, but you show characteristics of Indi Gogo." }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are integrating what you have been building and becoming whole. Both consciousness orientations are becoming available to you." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS TRANSITION MEANS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are moving from building one side to integrating both sides. From developing what you lacked to embodying full range. Free to move without seeking." }] }
    ]
  },
  // 6. INDIGO -> WHITE
  {
    title: "Indi Gogo → White Light",
    slug: { current: "indigogo-whitelight" },
    color: "#cbd5e1", // Mix Indigo/Blanc
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "You are primarily looking through the Indi Gogo lens, but you show characteristics of White Light." }] },
      { _type: 'block', children: [{ _type: 'span', text: "Your integration is becoming naturally illuminating for others. People are beginning to recognize something in you—steadiness, wisdom, perspective." }] },
      { _type: 'block', children: [{ _type: 'span', text: "WHAT THIS TRANSITION MEANS:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "You are moving from personal integration to natural transmission. From being whole to illuminating wholeness." }] }
    ]
  },
  // 7. LOW CONFIDENCE (MULTIPLE)
  {
    title: "Multiple Perspectives",
    slug: { current: "multiple" },
    color: "#57534e", // Gris neutre
    description: [
      { _type: 'block', children: [{ _type: 'span', text: "Your answers show characteristics of multiple consciousness lenses." }] },
      { _type: 'block', children: [{ _type: 'span', text: "This can happen because you are in significant transition, or different areas of your life operate at different stages." }] },
      { _type: 'block', children: [{ _type: 'span', text: "RECOMMENDATION:", marks: ['strong'] }] },
      { _type: 'block', children: [{ _type: 'span', text: "We recommend reading about your primary indication to see which resonates most with your actual lived experience." }] }
    ]
  }
];

async function importTransitions() {
  console.log(`🚀 Import de ${transitions.length} profils de transition...`);
  const transaction = client.transaction();
  
  transitions.forEach((doc) => {
    transaction.createOrReplace({
      _id: `result-${doc.slug.current}`,
      _type: 'result',
      ...doc
    });
  });

  try {
    await transaction.commit();
    console.log('✅ Transitions importées !');
  } catch (err) {
    console.error('❌ Erreur:', err.message);
  }
}

importTransitions();