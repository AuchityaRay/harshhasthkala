import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import NewlyAddedProds from '../home/NewlyAddedProds'

export default function page() {

  return (
    <>
      <Navbar/>
      <div className="flex container my-20 xl:space-x-16 md:space-x-8 flex-col lg:flex-row items-center lg:items-start">
        <div className="flex xl:space-x-12 space-x-4 mb-10 lg:mb-0"  >
            <div className="secondaryImages">
                <div className='border md:p-3 w-16  mb-4 border-red-700'><img src="/assets/prod.png" alt="" className='w-16 h-16'/></div>
                <div className='border md:p-3 w-16 mb-4'><img src="/assets/prod.png" alt="" className='md:w-16 h-16'/></div>
                <div className='border md:p-3 w-16 mb-4'><img src="/assets/prod.png" alt="" className='md:w-16 h-16'/></div>
                <div className='border md:p-3 w-16 mb-4'><img src="/assets/prod.png" alt="" className='md:w-16 h-16'/></div>
            </div>
            <div className="primary">
            <img src="/assets/prod.png" alt="" className='md:w-96 w-60 md:h-96 mb-4'/>
            </div>
        </div>
        
        <div className="content lg:w-6/12 w-11/12 md:mx-0">
            <span className='text-3xl font-bold'>Hand Crafted Mirror In Lay Work Jharokha</span>
            <div className='flex my-4 items-center text-xl'>₹<span className='text-4xl font-bold me-2 ms-1'>349</span>
            <div>
                <span className='text-xs me-1 line-through font-semibold text-gray-500'>₹549</span>
                <span className='text-xs text-green-600 font-semibold'>36% off</span>
                <div className='text-xs text-gray-500'>Inclusive of all taxes</div>
            </div>
            </div>

            <ul className="list my-4 ms-4">
                <li className=' list-disc text-sm'>This product will be shipped using our courier partners</li>
                <li className=' list-disc text-sm'>Products will be shipped within 5-6 days of order placement</li>
            </ul>

            <div className="locationCheck">
                <div className="">Delivery to</div>
                <div className="flex my-4">
                <Input placeholder='Pincode' className='rounded-none md:w-72'/>
                <Button className='rounded-none bg-blue-500 hover:bg-blue-700'>Check</Button>
                </div>
                <div className="flex mt-4">
                    <Button className='border rounded-none text-black bg-white text-xl'>-</Button>
                    <Button className='border rounded-none text-black bg-white text-xl'>1</Button>
                    <Button className='border rounded-none text-black bg-white text-xl'>+</Button>
                </div>
                <div className="flex flex-col md:flex-row  my-4">
                    <Button className='md:w-72 w-full text-black border bg-white hover:bg-gray-200 md:me-2 mb-4 md:mb-0'>Add to Cart</Button>
                    <Button className='md:w-72 w-full bg-red-700 hover:bg-red-600 md:mx-2'>Buy Now</Button>
                </div>

                <div className="my-4">
                    <div className='text-sm'><span className='font-bold'>SKU:</span> IUS000113_VC00099</div>
                    <div className='text-sm'><span className='font-bold'>CATEGORIES:</span>  LAMPS AND LIGHTS, LANTERNS, TEA LIGHT HOLDERS</div>
                </div>

                <div className='text-gray-600 font-bold text-xl mb-6'>Product Details</div>
                <div className="">
                    <div className='text-sm text-gray-600 font-semibold'>Product Description:</div>
                    <p className='text-[12px] text-gray-500 mb-2'>Beautiful hand crafted mirror in lay work jharokha made of solid wood. This can be a perfect ornament for your tables as well as walls. It comes with a back hook to hang on the wall and a solid wood base to be used a table top – with holes where the legs of the jharokha fit in snuggly. It has a t light holder in front for perfect illumination at night.</p>

                    <div className='text-sm text-gray-600 font-semibold'>Dimensions:</div>
                    <p className='text-[12px] text-gray-500 mb-2'>Length: 13.5 inchesWidth: 10.5 inches (without the base) and 13 inches with the baseThickness: 1.5 inches</p>

                    <div className='text-sm text-gray-600 font-semibold'>Time required to dispatch:</div>
                    <p className='text-[12px] text-gray-500 mb-2'>6-7 working days</p>

                    <div className='text-sm text-gray-600 font-semibold'>Additional information:</div>
                    <li className='text-[12px] text-gray-500'>Weight - 1.5Kg</li>
                    <li className='text-[12px] text-gray-500 mb-4'>Art Forms - Thikri (Mirror in-lay)</li>

                    <div className='text-sm text-gray-600 font-semibold'>Country of Origin: India</div>
                </div>

            </div>
        </div>
      </div>

      <h3 className='text-center text-4xl my-8'>Recommended For You</h3>
      <NewlyAddedProds/>
      <Footer/>
    </>
  )
}
