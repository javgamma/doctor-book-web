import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
  
  <footer className="bg-gray-50 border-t-1 rounded-lg shadow dark:bg-gray-900 ">
  <div className="w-full  flex flex-col items-center max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="  sm:flex sm:items-center sm:justify-between gap-6 lg:gap-40">
      <Link
        href="/"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
      <Image
        src="https://res.cloudinary.com/dmy83dakk/image/upload/v1727132327/jdhbtgccxfsa77eseea7.png"
        width={130}
        height={50}
        classname="h-8"
        alt="Logo"
      />
      </Link>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" />
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Acerca de
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Mediconecta™
      </a>
      . Todos los derechos reservados.
    </span>
  </div>
</footer>
  )
}

export default Footer
