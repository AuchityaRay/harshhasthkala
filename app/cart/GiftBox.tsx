import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import CartItem from './CartItem'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   

export default function GiftBox() {
  return (
    <>
      <Navbar/>
      <div className="container flex my-20 justify-between">
      <div className="w-9/12 space-y-7 border p-10 h-96">
      <div className="flex justify-between">
      <div className="flex items-start">
        <div className="img-cover border p-4 me-4">
            <img src="/assets/image 6.png" alt="" className='w-20 h-20'/>
        </div>
        <div>
            <div className='text-xl font-bold'>GIFT BOX</div>
            <span className='block text-gray-500 text-sm'>Hand Crafted Mirror In Lay Work Jharokha </span>
            <span className='block text-gray-500 text-sm'>Hand Crafted Mirror In Lay Work Jharokha </span>
            <span className='block text-gray-500 text-sm'>Hand Crafted Mirror In Lay Work Jharokha </span>
            <span className='block text-gray-500 text-sm'>Hand Crafted Mirror In Lay Work Jharokha </span>
            <span className='block text-gray-500 text-sm'>Hand Crafted Mirror In Lay Work Jharokha </span>
            <span className='block text-gray-500 text-sm'>Hand Crafted Mirror In Lay Work Jharokha </span>
            <span className='block text-gray-500 text-sm'>Hand Crafted Mirror In Lay Work Jharokha </span>
            <div className="flex mt-4">
            <button className='text-blue-500 border px-2 py-1 me-4 rounded'>Save for later</button>
            <button className='text-red-500 border px-2 py-1 me-4 rounded'>Remove</button>
            </div>
        </div>
      </div>

      <div className='text-end'>
        <span className='block text-2xl font-bold'>₹ 349</span>
        <span className=' line-through text-gray-500 me-2'>₹ 549</span>
        <span className=' text-green-500'>(36% off)</span>
        <div className='mt-4'>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Qty: 1" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Quantity</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        </div>
      </div>
      </div>
        <Button className='bg-[#DD2745]'>&larr; Back to Shop</Button>
      </div>

      <div className="coupondetail ms-10">
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
