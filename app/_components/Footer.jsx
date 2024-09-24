import React from 'react'
import Link from 'next/link'
import { Activity } from 'lucide-react'

const Footer = () => {
  return (
  
  <footer className="bg-blue-50 border-t-1 rounded-lg shadow dark:bg-gray-900 ">
  <div className="w-full  flex flex-col items-center max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="  sm:flex sm:items-center sm:justify-between gap-6 lg:gap-52">
      <Link
        href="/"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
      {/* <Logotype/> */}
      <div className='flex   gap-1 h-9 items-center justify-center px-2'>
        <Activity className='bg-[#0955E5]  rounded-3xl p-1.5'color='#FFFFFF' size={35} />
        <h1 className='text-xl font-bold text-[#0955E5]'>
          medi<span className='text-gray-800'>conecta</span>
        </h1>
        </div>
      </Link>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" />
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        
        
          <Link href="#" className="hover:underline me-4 md:me-6">
            Contacto
          </Link>
        
        
          <Link href="#" className="hover:underline">
            Trabaja con Nosotros
          </Link>
        
      </ul>
    </div>
    <hr className="my-2 border-blue-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-500">
      © 2024{" "}
      <Link href="/" className="hover:underline">
        Mediconecta™
      </Link>
      . Todos los derechos reservados.
    </span>
  </div>
</footer>
  )
}

export default Footer
