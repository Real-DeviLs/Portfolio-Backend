export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'dateStart',
        title: 'DateStart',
        type: 'date',
      },
      {
        name: 'dateEnd',
        title: 'DateEnd',
        type: 'date',
      },
      {
        name: 'institute',
        title: 'Institute',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'institute',
          maxLength: 120,
        },
      },
      
      {
        name: 'details',
        title: 'Details',
        type: 'blockContent',
      },
    ],
  
  }
  