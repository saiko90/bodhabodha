export default {
  name: 'lens',
  title: '👁️ The 7 Lenses',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Lens Name (e.g., Red Thread)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'color',
      title: 'Color Class',
      type: 'string',
      options: {
        list: [
          { title: 'Red', value: 'bg-red-500' },
          { title: 'Orange', value: 'bg-orange-500' },
          { title: 'Yellow', value: 'bg-yellow-500' },
          { title: 'Green', value: 'bg-green-500' },
          { title: 'Blue', value: 'bg-blue-500' },
          { title: 'Indigo', value: 'bg-indigo-500' },
          { title: 'White', value: 'bg-white' },
        ]
      }
    },
    {
      name: 'order',
      title: 'Order (1-7)',
      type: 'number'
    }
  ]
}