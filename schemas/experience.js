import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';


export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      orderRankField({ type: 'experience' }),
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
    preview: {
      select: {
        title: 'institute',
      }
    }
  
  }
  