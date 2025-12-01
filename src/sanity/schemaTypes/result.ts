import { defineField, defineType } from 'sanity'

export const result = defineType({
  name: 'result',
  title: 'Assessment Result',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Result Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array', 
      of: [{type: 'block'}] 
    }),
    defineField({
      name: 'color',
      title: 'Color Hex',
      type: 'string'
    })
  ],
})