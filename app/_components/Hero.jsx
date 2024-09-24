import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-slate-50">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-5">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <Image
            alt="hero"
            src="/bggroup.jpg"
            width={800}
            height={800}
            className="absolute inset-0 h-full w-full object-cover rounded-xl"
          />
        </div>
  
        <div className="lg:py-24 flex flex-col justify-center">
        <h2 className="flex w-full text-2xl md:text-3xl justify-center font-bold lg:justify-start">
            Encuentra tu especialista 
        </h2>
        <h2 className='text-primary flex w-full text-3xl justify-center font-bold lg:justify-start'>
          Agenda tu cita
        </h2>
  
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
            quidem quam repellat.
          </p>

          <Link href={"/search/Cardiologist"}>
          <Button className="mt-5">Agendar cita</Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
