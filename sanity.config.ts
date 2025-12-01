'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig, defineType, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'

// --- TES INFOS ---
const projectId = '0vpdrtth'
const dataset = 'production'
const apiVersion = '2024-01-01'

// --- SCHÉMA QUESTION ---
const question = defineType({
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    defineField({name: 'text', title: 'Question Text', type: 'string'}),
    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Answer Text', type: 'string' },
          { 
            name: 'stage', 
            title: 'Associated Stage', 
            type: 'string',
            options: {
              list: [
                { title: 'Red Thread', value: 'red' },
                { title: 'Orange Juice', value: 'orange' },
                { title: 'Yellow Mellow', value: 'yellow' },
                { title: 'Green Scene', value: 'green' },
                { title: 'True Blue', value: 'trueblue' },
                { title: 'Indi Gogo', value: 'indigogo' },
                { title: 'White Light', value: 'whitelight' },
              ]
            }
          }
        ]
      }]
    }),
  ],
})

// --- SCHÉMA RÉSULTAT ---
const result = defineType({
  name: 'result',
  title: 'Assessment Result',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Result Title', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }}),
    defineField({name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'color', title: 'Color Hex', type: 'string'}),

    defineField({
      name: 'image',
      title: 'Character Image',
      type: 'image',
      options: { hotspot: true } 
    }),
  ],
})

// --- CONFIGURATION ---
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: [question, result] },
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})