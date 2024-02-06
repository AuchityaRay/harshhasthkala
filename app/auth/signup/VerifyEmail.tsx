import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function VerifyEmail() {
  return (
    <>
      <Card className='w-[400px] p-10'>
        <CardTitle className='text-center font-sans mb-4'>Verify Your Email Address</CardTitle>
        <CardDescription className='mb-5'>Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu, tristique a eu in diam.</CardDescription>
        <CardContent>
            <div className="text-center mb-2">Verification Code</div>
            <div className="flex">
            <Input className='mx-2'/>
            <Input className='mx-2'/>
            <Input className='mx-2'/>
            <Input className='mx-2'/>
            </div>
        </CardContent>
        <CardFooter className='block'>
            <Button className='w-full bg-red-700 hover:bg-red-600'>VERIFY ME &rarr;</Button>
            <Link href={'/'} className="block text-end text-red-700 text-sm mt-4">Resend Code</Link>
        </CardFooter>
      </Card>
    </>
  )
}
