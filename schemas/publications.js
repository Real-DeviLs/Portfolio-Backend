export default {
    name: 'publications',
    title: 'Publications',
    type: 'document',
    fields: [
      {
        name: 'publicationDate',
        title: 'PublicationDate',
        type: 'date',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'publisher',
        title: 'Publisher',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 120,
        },
      },
      
      {
        name: 'details',
        title: 'Details',
        type: 'blockContent',
      },
      {
        name:'category',
        title:'Category',
        type:'reference',
        to:{type:"publicationCategory"},
      }
    ],
  
  }
  