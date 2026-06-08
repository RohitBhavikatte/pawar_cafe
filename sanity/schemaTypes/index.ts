import {type SchemaTypeDefinition} from 'sanity'
import {categoryType} from './categoryType'
import {menuItemType} from './menuItemType'
import {brandInfoType} from './brandInfoType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [categoryType, menuItemType, brandInfoType],
}
