// import React from 'react'
// import Image from 'next/image'
// import { translateCategory } from '../_utils/translations';
// import Link from 'next/link';

// const DoctorCard = ({doctor}) => {
//   return (
//     <Link href={'/details/'+doctor?.id} className="">
//     <div className='flex flex-col justify-center border-[1px] rounded-lg p-2 w-full max-w-[250px]  bg-slate-100 shadow-xl hover:border-blue-300 hover:border-[3px] mt-8'>
//       <Image 
//         src={doctor.attributes?.Image?.data?.attributes?.url}
//         // src={doctor.attributes.Image?.data?.[0]?.attributes?.url}
//         alt='doctor'
//         width={0}
//         height={0}
//         sizes='100%'
//         className='h-[250px] w-[180px] object-cover rounded-lg'
//       />
//       <div className='mt-3 items-baseline flex flex-col'key={doctor.id} >
//         {/* <h2 className='text-[14px] bg-blue-100 p-[2px] ml-2  mt-2 rounded-full px-2 text-primary self-start'>
//           {translateCategory(doctor.attributes?.categories?.data?.[0]?.attributes?.Name )|| "Categoría no disponible"}
//         </h2> */}
//         <div className='pl-3 mb-2 mt-2'>
//           <h2 className='font-bold'>{doctor.attributes?.Name}</h2>
//           <h2 className='text-[14px] bg-blue-100 p-[2px] ml-2  mt-2 rounded-full px-2 text-primary self-start'>
//           {translateCategory(doctor.attributes?.categories?.data?.[0]?.attributes?.Name )|| "Categoría no disponible"}
//         </h2>
//           <h2 className='text-primary text-sm'>Experiencia: {doctor.attributes?.Year_of_Experience} años</h2>
//           <h2 className='text-gray-400 text-sm'>{doctor.attributes?.Address}</h2>
//         </div>
        
//         {/* <button 
//           className='mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full'
//           // onClick={() => alert('Funcionalidad de agendar cita por implementar')}
//         >
//           Agendar Cita
//         </button> */}

//       </div>
//     </div>
//         </Link>
//   )
// }

// export default DoctorCard;

import React from 'react';
import Image from 'next/image';
import { translateCategory } from '../_utils/translations';
import Link from 'next/link';

const DoctorCard = ({ doctor }) => {
  return (
    <Link href={'/details/' + doctor?.id} className="">
      <div className="flex flex-col justify-between m-4 border border-gray-300 rounded-lg p-4 w-full max-w-xs bg-slate-100 shadow-lg hover:border-blue-300 hover:border-2 transition-all duration-300 mt-8 mx-auto">
        <div className="relative w-[150px] h-60">
          <Image
            src={doctor.attributes?.Image?.data?.attributes?.url}
            alt="doctor"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 flex flex-col items-start">
          <h2 className="font-bold text-lg">{doctor.attributes?.Name}</h2>
          <h2 className="text-sm bg-blue-100 py-1 px-2 mt-2 rounded-full text-primary">
            {translateCategory(doctor.attributes?.categories?.data?.[0]?.attributes?.Name) || "Categoría no disponible"}
          </h2>
          <h2 className="text-primary text-sm mt-2">Experiencia: {doctor.attributes?.Year_of_Experience} años</h2>
          <h2 className="text-gray-400 text-sm mt-1">{doctor.attributes?.Address}</h2>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
