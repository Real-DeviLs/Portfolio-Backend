import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';

  
export default {
    name:'eventCategory',
    title:'eventCategory',
    type:'document',
    fields:[
        orderRankField({ type: 'eventCategory' }),
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