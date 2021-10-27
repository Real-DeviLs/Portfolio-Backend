// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import post from './post'
import personalDetails from './personalDetails'
import publications from './publications'
import mentorship from './mentorship'
import publicationCategory from './publicationCategory'
import education from './education'
import experience from './experience'
import eventCategory from './eventCategory'
import events from './events'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    personalDetails,
    publications,
    mentorship,
    education,
    experience,
    publicationCategory,
    events,
    eventCategory,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
