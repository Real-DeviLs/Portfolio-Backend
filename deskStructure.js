import S from '@sanity/desk-tool/structure-builder'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
export default () =>
  S.list()
    .title('Content')
    .items([
        orderableDocumentListDeskItem({
            type: 'post',
            title: 'posts',
        }),
        orderableDocumentListDeskItem({
            type: 'education',
            title: 'education',
        }),
        orderableDocumentListDeskItem({
            type: 'experience',
            title: 'experience',
        }),
        orderableDocumentListDeskItem({
            type: 'mentorship',
            title: 'mentorship',
        }),
        orderableDocumentListDeskItem({
            type: 'personalDetails',
            title: 'personalDetails',
        }),
        orderableDocumentListDeskItem({
            type: 'publications',
            title: 'publications',
        }),
        orderableDocumentListDeskItem({
            type: 'publicationCategory',
            title: 'publicationCategory',
        }),
        orderableDocumentListDeskItem({
            type: 'eventCategory',
            title: 'eventCategory',
        }),
        orderableDocumentListDeskItem({
            type: 'events',
            title: 'events',
        }),
    ])