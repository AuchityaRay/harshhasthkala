import Link from 'next/link';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="closure mb-6 lg:mb-0 text-center lg:text-left">
          <img src="/assets/logo.png" alt="" className="mb-5" />
          <p className="mb-2 text-lg">+91 8839270153</p>
          <p>team@hasthkala.in</p>
        </div>

        <div className="quickLinks mb-6 lg:mb-0 text-center lg:text-left">
          <p className="mb-4 font-bold">Quick Links</p>
          <Link href={'/'} className='block mb-2 text-sm'>About Us</Link>
          <Link href={'/'} className='block mb-2 text-sm'>Blog</Link>
          <Link href={'/'} className='block mb-2 text-sm'>Contact Us</Link>
        </div>

        <div className="quickLinks mb-6 lg:mb-0 text-center lg:text-left">
          <p className="mb-4 font-bold">Quick Links</p>
          <Link href={'/'} className='block mb-2 text-sm'>Terms & Conditions</Link>
          <Link href={'/'} className='block mb-2 text-sm'>Privacy Policy</Link>
        </div>

        <div className="newsletter text-center lg:text-left">
          <Label>Subscribe</Label>
          <div className="flex flex-col lg:flex-row mt-2">
            <Input placeholder='Enter your email address' className='mb-2 lg:mb-0 lg:mr-4' />
            <Button className='bg-red-600'>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-10">
        <hr className="mb-5" />
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="social mb-4 lg:mb-0 text-center lg:text-left">
            <i className='text-lg mx-4 fa-brands fa-linkedin-in'></i>
            <i className='text-lg mx-4 fa-brands fa-facebook-f'></i>
            <i className='text-lg mx-4 fa-brands fa-twitter'></i>
          </div>
          <p className='text-sm text-center lg:text-left'>
            Copyright © 2023 Hasthkala | Developed by WPVibes
          </p>
        </div>
      </div>
    </>
  );
}
