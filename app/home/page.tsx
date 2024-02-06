import Navbar from '@/components/shared/Navbar'
import React from 'react'
import Banner from './Banner'
import InteriorsOfHeritage from './InteriorsOfHeritage'
import TrendingProducts from './TrendingProducts'
import NewlyAddedProds from './NewlyAddedProds'
import Categories from './Categories'
import { Testimonials } from './Testimonials'
import Footer from '@/components/shared/Footer'

export default function page() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <InteriorsOfHeritage/>
      <TrendingProducts/>
      <div className="text-center text-2xl">Newly Added Products</div>
      <NewlyAddedProds/>
      <Categories/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
