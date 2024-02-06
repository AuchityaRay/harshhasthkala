import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
        <div className="container my-20 flex flex-col lg:flex-row">
            <div className='xl:w-9/12 lg:w-8/12 w-full'>
            <div className='font-bold text-xl'>Billing Information</div>
            <div className="lg:w-11/12">
            <div className="flex items-end mb-4 flex-col md:flex-row">
                <div className='md:w-64 w-full md:me-4 mb-4 md:mb-0'>
                    <Label>User name</Label>
                    <Input className='rounded' placeholder='First Name'/>
                </div>
                <div className='md:w-64 w-full md:me-4 mb-4 md:mb-0'>
                    {/* <Label>User name</Label> */}
                    <Input className='rounded' placeholder='Last Name'/>
                </div>
                <div className='md:w-96 w-full md:flex-grow'>
                    <Label>Company Name <span className='text-gray-400'>(Optional)</span></Label>
                    <Input className='rounded'/>
                </div>
            </div>
            <Label>Address</Label>
            <Input className='mb-4'/>

            <div className="flex flex-col md:flex-row mb-4">
                <div className='md:w-3/12 w-full me-4 mb-4 md:mb-0'>
                    <Label>Country</Label>
                    <Input className='rounded' />
                </div>
                <div className='md:w-3/12 w-full me-4 mb-4 md:mb-0'>
                    <Label>Region/State</Label>
                    <Input className='rounded'/>
                </div>
                <div className='md:w-3/12 w-full me-4 mb-4 md:mb-0'>
                    <Label>City</Label>
                    <Input className='rounded'/>
                </div>
                <div className='md:w-3/12 w-full '>
                    <Label>Zip Code</Label>
                    <Input className='rounded'/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
                <div className='md:w-6/12 w-full me-4 mb-4 md:mb-0'>
                    <Label>Email</Label>
                    <Input className='rounded' />
                </div>
                <div className='md:w-6/12 w-full mb-4 md:mb-0'>
                    <Label>Phone Number</Label>
                    <Input className='rounded'/>
                </div>
            </div>

            <div className="flex items-center mb-4">
                <Checkbox/>
                <span className='ms-1 text-gray-600'>Ship into different address</span>
            </div>

            <div className="border rounded md:w-8/12 py-4 md:px-8 px-4 mb-10 lg:mb-0">
            <div className='font-bold text-lg mb-4'>Payment Option</div>
                <Label>Name on Card</Label>
                <Input className='mb-2'/>

                <Label>Card Number</Label>
                <Input className='mb-2'/>

                <div className="flex">
                <div className='w-6/12 me-2'>
                <Label>Expiry Date</Label>
                <Input type='number' className='mb-2' placeholder='dd/yy'/>
                </div>
                <div className='w-6/12'>
                <Label>CVV</Label>
                <Input type='number'/>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className="h-full border rounded p-4 lg:w-4/12">
            <div className='font-bold text-xl mb-4'>Order Summary</div>
            <div className="flex items-center mb-4">
                <img src="/assets/image 10.png" alt="" className='w-20 me-4'/>
                <div className='text-sm'>
                    <p>Hand Crafted Mirror in Lay Work Jharokha</p>
                    <span className='text-gray-500'>1 x ₹1403</span>
                </div>
            </div>
            <div className="flex items-center">
                <img src="/assets/image 9.png" alt="" className='w-20 me-4'/>
                <div className='text-sm'>
                    <p>Hand Crafted Mirror in Lay Work Jharokha</p>
                    <span className='text-gray-500'>1 x ₹1403</span>
                </div>
            </div>

            <div className="flex mb-3 justify-between mt-6">
                <span className='text-sm text-gray-400 font-semibold'>Sub-total</span>
                <span className='font-semibold'>₹1403</span>
            </div>
            <div className="flex mb-3 justify-between">
                <span className='text-sm text-gray-400 font-semibold'>Shipping</span>
                <span className='font-semibold'>₹750</span>
            </div>
            <div className="flex mb-3 justify-between">
                <span className='text-sm text-gray-400 font-semibold'>Discount</span>
                <span className='font-semibold'>₹40</span>
            </div>
            <div className="flex mb-3 justify-between">
                <span className='text-sm text-gray-400 font-semibold'>Tax</span>
                <span className='font-semibold'>₹100</span>
            </div>
            
            <hr />
            <div className="flex mb-3 justify-between mt-2">
                <span className='text-sm  font-semibold'>Total</span>
                <span className='font-semibold'>₹2403</span>
            </div>

            <Button className='rounded my-4 bg-red-600 hover:bg-red-700 w-full'>Place Order &rarr;</Button>
        </div>
        </div>
      <Footer/>
    </>
  )
}
