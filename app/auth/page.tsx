import React from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Signinmobile from './signin/Signinmobile'
import Navbar from '@/components/shared/Navbar'
import Signup from './signup/Signup'
import Signinpassword from './signin/Signinpassword'
import VerifyMob from './signup/VerifyMob'
import VerifyEmail from './signup/VerifyEmail'

 
export default function page() {
  return (
    <>
     <Navbar/>
      <div className="container h-[800px] flex justify-center items-center lg:items-start flex-col lg:flex-row">
        <div className="flex lg:items-start justify-center md:w-6/12">
            <img src="/assets/image 1.png" alt="" className='w-96 lg:mt-40'/>
        </div>
        <div className="lg:ms-60 mt-20 md:w-6/12 ">
        <Tabs defaultValue="signin" className="border rounded-lg md:w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-white mb-4">
        <TabsTrigger className='bg-white rounded-none text-lg font-bold ' value="signin">Signin</TabsTrigger>
        <TabsTrigger className='bg-white rounded-none text-lg font-bold ' value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="signin" className='relative'>
        <Signinmobile/>
        {/* <VerifyEmail/> */}
      </TabsContent>
      <TabsContent value="signup" >
        <Signup/>
      </TabsContent>
    </Tabs>
    
        </div>

      </div>

        
    </>
  )
}
