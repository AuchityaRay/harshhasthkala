import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox'

export default function Signup() {
  return (
    <>
      <Card className='border-none '>
          <CardContent className="space-y-4">
            <div className="space-y-1 ">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" />
            </div>
            <div className="space-y-1 ">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" placeholder='+91 |' type="number" />
            </div>
            <div className="space-y-1 ">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder='abc@example.com' type="email" />
            </div>
            <div className="space-y-1 ">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder='8+ characters'/>
            </div>
            <div className="space-y-1 ">
              <Label htmlFor="password">Confirm Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-1 flex items-center ">
              <Checkbox id="password" className='me-2'/>
              <Label htmlFor="password">Subscribe to our newsletter</Label>
            </div>

            
          </CardContent>
          <CardFooter className='block'>
            <Button className='bg-red-700 w-full'>Sign Up &rarr;</Button>
            <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <span className="absolute px-3  font-medium text-gray-500 -translate-x-1/5 bg-white">or</span>
            </div>
            <div className="flex items-center justify-center dark:bg-gray-800 mb-4">
            <button className="px-4 py-2 border w-full flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                <p className='ms-20 text-sm'>Login with Google</p>
            </button>
            </div>
            <div className="flex items-center justify-center dark:bg-gray-800">
            <button className="px-4 py-2 border w-full flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img className="w-5 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934" loading="lazy" alt="google logo"/>
                <p className='ms-20 text-sm'>Login with Apple</p>
            </button>
            </div>
          </CardFooter>
        </Card>
    </>
  )
}
