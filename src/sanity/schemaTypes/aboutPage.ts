export default {
  name: 'aboutPage',
  title: '👤 Page: About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      initialValue: 'About this work'
    },
    {
      name: 'practitionerName',
      title: 'Practitioner Name',
      type: 'string',
      initialValue: 'Vee John-Baptiste'
    },
    {
      name: 'bioIntro',
      title: 'Bio - Paragraph 1 (Intro)',
      type: 'text',
      rows: 3
    },
    {
      name: 'bioMain',
      title: 'Bio - Paragraph 2 (Methodology)',
      type: 'text',
      rows: 4
    },
    {
      name: 'quote',
      title: 'The Quote (Italic text)',
      type: 'text',
      rows: 3
    },
    {
      name: 'bioOutro',
      title: 'Bio - Paragraph 3 (Personal)',
      type: 'text',
      rows: 3
    },
    {
      name: 'originTitle',
      title: 'Origin Section - Title',
      type: 'string',
      initialValue: 'The Origin of BodhaBodha'
    },
    {
      name: 'originText',
      title: 'Origin Section - Text',
      type: 'text',
      rows: 4
    }
  ]
}