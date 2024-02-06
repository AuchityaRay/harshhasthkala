import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from '@/components/shared/Navbar';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen">
        <div className="lg:w-6/12 mb-8 lg:mb-0">
          <img src="/assets/image 1.png" alt="" className='w-full lg:w-96 mt-10 lg:mt-0' />
        </div>
        <div className="w-full lg:w-6/12">
          <Card className='border-none w-full lg:w-[400px] shadow-2xl pt-10'>
            <CardContent className="space-y-2">
              <Label>Name</Label>
              <Input className='rounded-sm' type='text' />
              <Label>Mobile Number</Label>
              <Input className='rounded-sm' type='number' placeholder='+91 |' />
              <Label>Email</Label>
              <Input className='rounded-sm' type='text' />
              <Label>Your message</Label>
              <Textarea className='rounded-sm' />
            </CardContent>
            <CardFooter className='block'>
              <Button className='bg-red-700 rounded-sm w-full block mb-2 hover:bg-red-600'>Submit &rarr;</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
