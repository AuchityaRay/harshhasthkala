import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   
import React from 'react'

export default function page() {
    let cards = [
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
        {
          img: '/assets/image 10.png',
          title: 'Hand painted ram head (Large)',
          badge: 'Same Day Delivery',
          price: '₹2800.00',
          oldPrice: '₹3200.00',
        },
       
      ];
  return (
    <>
      <Navbar/>
      <div className="flex justify-between md:px-16 my-5 flex-col text-sm md:text-md md:flex-row container items-center">
        <p className='text-gray-700 mb-5 md:mb-0'>Showing 1 - 20 out of 2,356 Products</p>
        <div className='flex items-center'>
            <span className='me-2 text-gray-700'>Sort by:</span>
            <Select>
           <SelectTrigger className="w-[180px] text-gray-700">
             <SelectValue placeholder="Select" />
           </SelectTrigger>
           <SelectContent>
             <SelectGroup>
               <SelectLabel>Select</SelectLabel>
               <SelectItem value="New Arrivals">New Arrivals</SelectItem>
               <SelectItem value="New Arrivals">New Arrivals</SelectItem>
               <SelectItem value="New Arrivals">New Arrivals</SelectItem>
               <SelectItem value="New Arrivals">New Arrivals</SelectItem>
               <SelectItem value="New Arrivals">New Arrivals</SelectItem>
             </SelectGroup>
           </SelectContent>
         </Select>
        </div>
      </div>
      <div className="flex mt-2 container flex-col md:flex-row mb-5">
      <div className="filter md:w-3/12 mb-10 md:mb-0">
        <div className='w-11/12 mx-auto border rounded-lg xl:p-10 p-2'>
        <span className='text-xl font-bold'>Prices</span>
        <div className="flex justify-between flex-col lg:flex-row my-5">
        <p className='text-sm'>Range</p>
        <p className='text-sm'>Rs 2,500 - Rs 4,500</p>
        </div>
        <Slider className='mb-10' defaultValue={[33]} />
        <span className='text-xl font-bold'>Filters</span><br />
        <div className='my-2'>
        <Checkbox className='me-2' />
        <Label>Gond (4)</Label>
        </div>
        <div className='my-2'>
        <Checkbox className='me-2'/>
        <Label>Cheriyal (2)</Label>
        </div>
        <div className='my-2'>
        <Checkbox className='me-2'/>
        <Label>Pattachitra (2)</Label>
        </div>
        
      </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-32 md:w-9/12">
      {cards.map((card, index) => (
          <div key={index} className="rounded xl:mx-8 mx-6 mb-10 shadow-lg ">
            <img src={card.img} alt="img" className="rounded  mb-2" />
            <h5 className="text-lg font-semibold px-2">{card.title}</h5>
            <div className="w-full text-end">
              <Badge className="bg-green-700 me-2 mt-2">{card.badge}</Badge>
            </div>
            <div className="mb-4 px-2">
              <span className="me-2 text-red-700">{card.price}</span>
              <span className="line-through text-gray-500 text-xs">{card.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </>
  )
}
