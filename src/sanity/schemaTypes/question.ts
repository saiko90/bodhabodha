import { defineField, defineType } from 'sanity'

export const question = defineType({
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Question Text',
      type: 'string',
    }),
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