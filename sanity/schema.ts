import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product'
import banner from './schemas/banner'
import contacts from './schemas/contacts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,banner,contacts],
}
