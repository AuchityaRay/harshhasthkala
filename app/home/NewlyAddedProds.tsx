import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function NewlyAddedProds() {
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
  ];

  return (
    <>
      <img src="/assets/line.png" alt="line" className="mx-auto w-20 sm:w-40" />

      <div className="container mx-auto flex flex-wrap justify-center mb-20 mt-4">
        {cards.map((card, index) => (
          <div key={index} className="rounded xl:mx-8 mx-6 my-4 shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5">
            <img src={card.img} alt="img" className="rounded w-full mb-2" />
            <h5 className="text-lg font-semibold px-2">{card.title}</h5>
            <div className="w-full text-end">
              <Badge className="bg-green-700 me-2 mt-2">{card.badge}</Badge>
            </div>
            <div className="mb-2 px-2">
              <span className="me-2 text-red-700">{card.price}</span>
              <span className="line-through text-gray-500 text-xs">{card.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
