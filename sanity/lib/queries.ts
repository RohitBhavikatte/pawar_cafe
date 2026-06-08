import { groq } from 'next-sanity'

export const menuItemsQuery = groq`*[_type == "menuItem"] | order(title asc) {
  _id,
  title,
  description,
  price,
  isHighlight
}`
