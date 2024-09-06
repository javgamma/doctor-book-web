import { Button } from '@/components/ui/button'
import React from 'react'

const CategorySearch = () => {
  return (
    <div className='mb-10 items-center flex flex-col gap-4 p-4'>
        <h2 className='font-bold text-4xl tracking-wide'>Buscar médicos</h2>
        <h2 className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cumque </h2>
        <div className='flex w-full max-w-sm items-center'>
        <input type="text" className='border mr-3 rounded-sm w-[250px] pl-2' placeholder="Encuentra doctores"></input>
        <Button>Buscar</Button>
        </div>
        
      
    </div>
  )
}

export default CategorySearch
