import { Input } from '@/components/ui/input'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   

export default function CartItem() {
  return (
    <>
    <div className="flex justify-between flex-col md:flex-row">
      <div className="flex flex-col md:flex-row">
        <div className="img-cover border p-4 me-4 mb-4 md:mb-0">
            <img src="/assets/image 6.png" alt="" className='xl:w-20 lg:w-36 lg:h-32 w-full  xl:h-20'/>
        </div>
        <div>
            <div className='text-xl font-bold'>Hand Crafted Mirror In Lay Work Jharokha</div>
            <span className='block text-gray-500 text-sm'>Size: medium, Color: blue,  Material: Plastic</span>
            <span className='block text-gray-500 text-sm'>Seller: Artel Market</span>
            <div className="flex mt-4">
            <button className='text-xs md:text-md text-blue-500 border px-2 py-1 me-4 rounded'>Save for later</button>
            <button className='text-xs md:text-md text-red-500 border px-2 py-1 me-4 rounded'>Remove</button>
            </div>
        </div>
      </div>

      <div className='md:text-end mt-4 md:mt-0'>
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
    </>
  )
}
