
import { defineType, defineField } from "sanity";

const banner = defineType ({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField
    ({
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}],
    }),
    defineField
    ({
        name: 'largeText1',
        title: 'LargeText1',
        type: 'string',
    }),
    defineField
    ({
        name: 'largeText2',
        title: 'LargeText2',
        type: 'string',
    }),
    defineField
    ({
        name: 'discount',
        title: 'Discount',
        type: 'string',
    }),
    defineField
    ({
        name: 'saleTime',
        title: 'SaleTime',
        type: 'string',
    }),
    defineField
    ({
        name: 'buttonText',
        title: 'ButtonText',
        type: 'string',
    }),
    defineField
    ({
        name: 'product',
        title: 'Product',
        type: 'string',
    }),
    defineField
    ({
        name: 'midText',
        title: 'MidText',
        type: 'string',
    }),
    defineField
    ({
        name: 'smallText',
        title: 'SmallText',
        type: 'string',
    }),
  ],
});

export default banner