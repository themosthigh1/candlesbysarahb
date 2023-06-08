import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <main>
      <Header post={{
        description: 'The redolence of country life.',
        image: 'shutterstock_1456504667.jpg',
        imageText: 'Sweet Honey B.',
        linkText: 'Our Products',
        title: 'Candles by Sarah B.'
      }}/>
    </main>
  )
}
