import React from 'react'
import BoxType from '../BoxType'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <>
    <Navbar/>
      <div className="container">
      <div className='text-xl my-8 font-bold'>CHOOSE BOX TYPE</div>
      <div className="flex justify-between flex-col md:flex-row">
      <BoxType/>
      <div className="border rounded h-full p-5 md:w-5/12 mb-20 md:mb-0">
        <span className='text-lg font-semibold'>Order Summary</span>
        <div className="flex flex-col md:flex-row my-4 items-center md:items-start mb-8 md:mb-4">
          <img src="/assets/image 10.png" alt="" className='w-20 h-20 me-4 mb-4 md:mb-0'/>
          <div className='w-full '>
            <p className='text-sm'>Hand Crafted Mirror In Lay Work Jharokha × 1</p>
            <p className='text-sm'>1 x ₹1403</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-4 items-center md:items-start mb-8 md:mb-4">
          <img src="/assets/image 10.png" alt="" className='w-20 h-20 me-4 mb-4 md:mb-0'/>
          <div className='w-full '>
            <p className='text-sm'>Hand Crafted Mirror In Lay Work Jharokha × 1</p>
            <p className='text-sm'>1 x ₹1403</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-4 items-center md:items-start mb-8 md:mb-4">
          <img src="/assets/image 10.png" alt="" className='w-20 h-20 me-4 mb-4 md:mb-0'/>
          <div className='w-full '>
            <p className='text-sm'>Hand Crafted Mirror In Lay Work Jharokha × 1</p>
            <p className='text-sm'>1 x ₹1403</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-4 items-center md:items-start mb-8 md:mb-4">
          <img src="/assets/image 10.png" alt="" className='w-20 h-20 me-4 mb-4 md:mb-0'/>
          <div className='w-full '>
            <p className='text-sm'>Hand Crafted Mirror In Lay Work Jharokha × 1</p>
            <p className='text-sm'>1 x ₹1403</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-4">
          <span className='font-semibold'>Total</span>
          <span className='font-semibold'>₹1403</span>
        </div>

        <Button className='bg-red-600 hover:red-red-700 rounded w-full mt-4'>NEXT &rarr;</Button>
      </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}
