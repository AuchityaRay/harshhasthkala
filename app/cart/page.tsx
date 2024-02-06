import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import CartItem from './CartItem'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import GiftBox from './GiftBox'

export default function page() {
  return (
    <>
      <Navbar/>
      <div className="container flex flex-col lg:flex-row my-20 justify-between">
      <div className="lg:w-9/12 space-y-7 border p-10 mb-10 lg:mb-0">
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <Button className='bg-[#DD2745]'>&larr; Back to Shop</Button>
      </div>

      <div className="coupondetail lg:ms-10">
        <div className="border rounded p-4 mb-4">
            <span className='text-gray-600'>Have a Coupon?</span>
            <div className="flex mt-4">
                <Input className='rounded-none' placeholder='Add coupon'/>
                <button className='text-red-500 border rounded-e px-4'>Apply</button>
            </div>
        </div>

        <div className="border rounded p-4">
            <span className='text-lg font-bold'>Price Details</span>
            <div className="flex justify-between my-2">
                <span className='text-gray-500 text-sm'>Price</span>
                <span>₹1403</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className='text-gray-500 text-sm'>Discount</span>
                <span className='text-green-600'>₹60</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className='text-gray-500 text-sm'>Delivery Charges</span>
                <span className='text-red-600'>₹60</span>
            </div>
            <hr />
            <div className="flex justify-between my-4">
                <span>Total</span>
                <span className='font-bold'>₹1357.97</span>
            </div>

            <Button className='bg-green-600 text-white hover:bg-green-700 w-full'>Checkout</Button>
        </div>
      </div>
      </div>
      <Footer/>

    </>
  )
}
