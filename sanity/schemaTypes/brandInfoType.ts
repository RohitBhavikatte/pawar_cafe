import {defineField, defineType} from 'sanity'

export const brandInfoType = defineType({
  name: 'brandInfo',
  title: 'Brand Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
    }),
    defineField({
      name: 'aboutText',
      type: 'text',
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      type: 'url',
    }),
  ],
})
