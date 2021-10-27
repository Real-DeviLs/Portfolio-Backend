import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';
  
  export default {
      name: 'events',
      title: 'Events',
      type: 'document',
      
      fields: [
        orderRankField({ type: 'events' }),
        {
          name: 'date',
          title: 'Date',
          type: 'date',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'location',
          title: 'Location',
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
          to:{type:"eventCategory"},
        }
      ],
      preview: {
        select: {
          title: 'title',
        }
      }
    
    }
    