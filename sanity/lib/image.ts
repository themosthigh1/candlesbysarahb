import { createClient } from 'next-sanity'
import { client } from './client'
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)