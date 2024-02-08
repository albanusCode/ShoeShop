import React from 'react'
import Nav from './components/Nav'
import { 
  Hero,
  PopularProduct,
  Services,
  SuperQuality,
  CustomerReviews,
  Footer,
  Subscribe,
  SpecialOffer
} from './sections'

const App = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProduct />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>
    <section className='padding bg-pale-blue'>
      <CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className='padding-x py-4 bg-black'>
      <Footer />
    </section>

  </main>
)

export default App