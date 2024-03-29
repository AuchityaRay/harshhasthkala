import Link from 'next/link'
import React from 'react'

export default function Categories() {
    let cards = [
        {
            img:'/assets/Rectangle 29.png',
            title:'Lamps & Lights'
        },
        {
            img:'/assets/Rectangle 29.png',
            title:'Lamps & Lights'
        },
    ]
  return (
    <>
      <div className="container">
        <h2 className='px-2 text-2xl mb-4'>Categories</h2>
        <div className="flex mb-10 flex-col justify-evenly md:flex-row">
            {cards.map((card)=>(
                <div className="flex p-1 rounded-lg mb-10 lg:mb-0 items-center flex-col xl:flex-row border md:mx-2 xl:w-6/12 lg:w-4/12 w-full">
                    <img src={card.img} alt="" className='xl:me-8  '/>
                    <div className='py-8  text-center lg:text-start'>
                    <h2 className='text-xl font-bold mb-8'>{card.title}</h2>
                    {Array(5).fill(
                        <Link href={'/'} className='block text-gray-500 text-sm mb-4'>Product Name
                        </Link>
                    )}
                    </div>
                </div>
            ))}
        </div>
        <div className="flex mb-10 flex-col md:flex-row">
            {Array(3).fill(
                <div className="flex flex-col xl:flex-row p-1 rounded-lg border md:mx-2 mb-10 lg:mb-0 lg:w-4/12">
                    <img src='/assets/Rectangle 29.png' alt="" className='xl:me-8 xl:w-48'/>
                    <div className='py-8 text-center lg:text-start'>
                    <h2 className='text-xl font-bold mb-4 text-center xl:text-start'>Lamps & Lights</h2>
                    {Array(5).fill(
                        <Link href={'/'} className='block text-gray-500 text-sm mb-2 text-center xl:text-start'>Product Name
                        </Link>
                    )}
                    </div>
                </div>
            )}
        </div>
      </div>
    </>
  )
}
