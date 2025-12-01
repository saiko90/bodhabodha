import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '0vpdrtth',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // False = on veut les données en direct (pas de cache)
})