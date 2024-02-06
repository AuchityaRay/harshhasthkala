import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Testimonials() {
  return (
    <div className="bg-red-600 my-20 pb-20">
    <div className="text-center text-2xl mb-10 pt-8 text-white">Testimonials</div>
    <div className="container flex justify-center">
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent>
                    <div className="flex items-baseline justify-around py-8">
                       <div className="rounded p-1 border"> <img src="/assets/Rectangle 36.png" alt="" className="rounded"/></div>
                        <img src="/assets/Vector1.png" alt="" />
                    </div>
                    <p className="font-[Alegreya] text-lg mb-4">Nice Service Thanks, Hasthkala</p>
                    <div className="flex items-center" >
                        <img src="/assets/Ellipse.png" alt="" className="me-4"/>
                        <div>
                            <p style={{fontFamily:'DM Sans'}} className="text-sm text-gray-500">Denny Hilguston</p>
                            <p style={{fontFamily:'DM Sans'}} className="text-sm text-gray-500">28/09/2023</p>
                        </div>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
  )
}
