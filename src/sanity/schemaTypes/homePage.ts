export default {
  name: 'homePage',
  title: '🏠 Page: Home',
  type: 'document',
  fields: [
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle (The text under the video)',
      type: 'text',
      rows: 3,
      description: "The mystic text revealed by the lens."
    },
    {
      name: 'problemTitle',
      title: 'Section "Problem" - Title',
      type: 'string',
    },
    {
      name: 'problemText',
      title: 'Section "Problem" - Main Text',
      type: 'text',
      rows: 4
    },
    {
      name: 'problemHighlight',
      title: 'Section "Problem" - Highlight (Bold text)',
      type: 'string',
    },
    {
      name: 'philosophyTitle',
      title: 'Section "Philosophy" - Title',
      type: 'string',
    },
    {
      name: 'philosophyText',
      title: 'Section "Philosophy" - Description',
      type: 'text',
      rows: 4
    }
  ]
}