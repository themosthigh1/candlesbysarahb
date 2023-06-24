import Header from './components/Header'
import Content from './components/Content'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { allProductsQuery } from '@/lib/queries'

const product = groq
`*[_type == "product"]`

const banner = groq`
 *[_type == "banner"]
`

export default async function Home() {

const productQuery = await client.fetch(product)
const products = productQuery

const bannerQuery = await client.fetch(banner)
const bannerData = bannerQuery

  return (
    <main>
      <Header post={{
        description: 'The redolence of country life.',
        image: 'shutterstock_1456504667.jpg',
        imageText: 'Sweet Honey B.',
        linkText: 'Our Products',
        title: 'Candles by Sarah B.'
      }}/>
      <Content products={products}/>
    </main>
  )
}
