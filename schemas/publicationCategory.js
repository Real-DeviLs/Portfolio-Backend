import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';

  
export default {
    name:'publicationCategory',
    title:'PublicationCategory',
    type:'document',
    fields:[
        orderRankField({ type: 'publicationCategory' }),
        {
            
            name:'category',
            title:'Category',
            type:'string',
        },
    ],
    preview: {
        select: {
          title: 'category',
        }
      }
};