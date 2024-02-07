'use client'
import React, { useState } from 'react';
import { Input } from '../ui/input';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const displayNav = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="flex justify-between px-5 md:px-10 py-6 items-center">
        <div className="logo flex items-center">
          <img src="/assets/vector.png" alt="nav" className="me-8 cursor-pointer" onClick={displayNav}/>
          <img src="/assets/logo.png" alt="logo" />
        </div>
        <div className="search hidden md:block">
          <Input type="search" placeholder="Search your favorites" className="lg:w-96" />
        </div>
        <div className="links hidden md:flex">
          <span className="material-symbols-outlined mx-2">favorite</span>
          <span className="material-symbols-outlined mx-2">shopping_cart</span>
          <span className="material-symbols-outlined mx-2">person</span>
        </div>
        </div>

      {isMenuOpen && (
        <div className="flex justify-center flex-col md:flex-row  bg-red-600 text-white py-5 px-5 ">
          <Link href="/" className="lg:mx-10 mx-4 mb-5 md:mb-0 font-[Algreya]">
            Home
          </Link>
          <Link href="/" className="lg:mx-10 mx-4 mb-5 md:mb-0 font-[Algreya]">
            Art On The Wall
          </Link>
          <Link href="/" className="lg:mx-10 mx-4 mb-5 md:mb-0 font-[Algreya]">
            Brass Artifacts
          </Link>
          <Link href="/" className="lg:mx-10 mx-4 mb-5 md:mb-0 font-[Algreya]">
            Furniture & Accessories
          </Link>
          <Link href="/" className="lg:mx-10 mx-4 mb-5 md:mb-0 font-[Algreya]">
            More
          </Link>
          <Link href="/" className="lg:mx-10 mx-4 font-[Algreya]">
            Offers
          </Link>
        </div>
      )}
    </>
  );
}
