import {defineField, defineType} from 'sanity'

export const menuItemType = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'isHighlight',
      title: 'Highlight / Popular',
      type: 'boolean',
    }),
  ],
})
