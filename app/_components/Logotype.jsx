
import { Activity } from 'lucide-react'
import React from 'react'

const Logotype = () => {
  return (
<div className='flex   gap-1 h-9 items-center justify-center px-2'>
        <Activity className='bg-[#0955E5]  rounded-3xl p-1.5'color='#FFFFFF' size={35} />
        <h1 className='text-xl font-bold text-[#0955E5]'>
          medi<span className='text-gray-800'>conecta</span>
        </h1>
        </div>
  )
}

export default Logotype
