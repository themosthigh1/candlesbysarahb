
import { defineType, defineField } from "sanity";

const product = defineType ({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField
    ({
        name: 'name',
        title: 'Name',
        type: 'string',
    }),
    defineField
    ({
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}],
    }),
    defineField
    ({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 90,  
        }
    }),
    defineField
    ({
        name: 'price',
        title: 'Price',
        type: 'number',
    }),
    defineField
    ({
        name: 'details',
        title: 'Details',
        type: 'string',
    }),
  ],
});

export default product