import React from 'react'
import Image from 'next/image'
import { translateCategory } from '../_utils/translations';
import Link from 'next/link';

const DoctorCard = ({doctor}) => {
  return (
    <div className='border-[1px] rounded-lg p-2 w-full max-w-[250px] mt-4 drop-shadow-xl hover:border-blue-300 hover:border-[3px] '>
      <Image 
        // src={doctor.attributes?.image?.data?.attributes?.url}
        src={doctor.attributes.Image?.data?.[0]?.attributes?.url}
        alt='doctor'
        width={600}
        height={600}
        className='h-[250px] w-full object-cover rounded-lg'
      />
      <div className='mt-3 items-baseline flex flex-col'key={doctor.id} >
        <h2 className='text-[14px] bg-blue-100 p-[2px] ml-2 rounded-full px-2 text-primary self-start'>
          {translateCategory(doctor.attributes?.categories?.data?.[0]?.attributes?.Name )|| "Categoría no disponible"}
        </h2>
        <div className='pl-3 mb-2'>
          <h2 className='font-bold'>{doctor.attributes?.name}</h2>
          <h2 className='text-primary text-sm'>{doctor.attributes?.Year_of_Experience} años</h2>
          <h2 className='text-gray-400 text-sm'>{doctor.attributes?.Address}</h2>
        </div>
        <Link href={'/details/'+doctor?.id} className="w-full">
        <button 
          className='mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full'
          // onClick={() => alert('Funcionalidad de agendar cita por implementar')}
        >
          Agendar Cita
        </button>
        </Link>
      </div>
    </div>
  )
}

export default DoctorCard;
