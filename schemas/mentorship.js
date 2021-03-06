import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';


export default {
    name: 'mentorship',
    title: 'Mentorship',
    type: 'document',
    fields: [
      orderRankField({ type: 'mentorship' }),
      {
        name: 'mentorshipStart',
        title: 'MentorshipStart',
        type: 'date',
      },
      {
        name: 'mentorshipEnd',
        title: 'MentorshipEnd',
        type: 'date',
      },
      {
        name: 'menteeName',
        title: 'MenteeName',
        type: 'string',
      },
      {
        name: 'institute',
        title: 'Institute',
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
        title: 'menteeName',
      }
    }
  }
  