import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
      <div className="container py-10">
      <span className='ms-10 text-2xl font-bold'>My Favorites</span>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-20 mt-5">
      {Array(8).fill(
        <>
        <div  className="rounded xl:mx-8 mx-6 mb-10 shadow-lg ">
            <img src='/assets/image 10.png' alt="img" className="rounded  mb-2" />
            <h5 className="text-lg font-semibold px-2">Hand painted ram head (Large)</h5>
            <div className="w-full text-end">
              <Badge className="bg-green-700 me-2 mt-2">Same Day Delivery</Badge>
            </div>
            <div className="mb-4 px-2">
              <span className="me-2 text-red-700">₹ 2,800.00</span>
              <span className="line-through text-gray-500 text-xs">3200.00</span>
            </div>
          </div>
        </>
      )}
          </div>
          </div>
      <Footer/>
    </>
  )
}
