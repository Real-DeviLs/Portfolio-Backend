import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';


export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'post' }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    }
  }

}
