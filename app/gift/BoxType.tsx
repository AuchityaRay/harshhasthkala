
import React from 'react'

export default function BoxType() {
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
      
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:mb-32 xl:w-9/12">
      {cards.map((card, index) => (
          <div key={index} className="rounded xl:mx-8 mx-6 mb-10 shadow-lg ">
            <img src={card.img} alt="img" className="rounded  mb-2" />
            <h5 className="text-lg font-semibold px-2">{card.title}</h5>
            <div className="w-full text-end">
            </div>
            <div className="mb-4 px-2">
              <span className="me-2 text-red-700">{card.price}</span>
              <span className="line-through text-gray-500 text-xs">{card.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
     
    </>
  )
}
