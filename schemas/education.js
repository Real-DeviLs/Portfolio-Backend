import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';


export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
      orderRankField({ type: 'education' }),
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
        name: 'courseName',
        title: 'CourseName',
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
        title: 'courseName',
      }
    }
  
  }
  