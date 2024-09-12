
// import Image from 'next/image'
// import React from 'react'

// const DoctorList = ({doctorList}) => {
//   return (
//     <div className='mb-10 px-10 flex-flex-col items-center'>
//       <h2 className='font-bold text-xl my-5 flex justify-center '>Doctores Populares</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 gap-7 lg:grid-cols-4 justify-items-center '>
//       {doctorList&&doctorList.map((doctor)=>(
//           <div className='border-[1px] rounded-lg p-2 w-full max-w-[250px] mt-4'
//            key={doctor.id}>
//           <Image src={doctor.attributes?.image?.data?.attributes?.url}
//           alt='doctor'
//           width={600}
//           height={600}
//           className='h-[250px] w-full object-cover rounded-lg  '
//           />
//           <div className='mt-3 items-baseline flex flex-col'>
//             <h2 className='text-[14px] bg-blue-100 p-[2px] ml-2 rounded-full px-2
//             text-primary self-start'>{doctor.attributes?.categories?.data?.[0]?.attributes?.Name || "Categoría no disponible"}</h2>
//             <div className='pl-3'>
//             <h2 className='font-bold'>{doctor.attributes?.name}</h2>
//             <h2 className='text-primary text-sm'>{doctor.attributes?.Year_of_Experience} años</h2>
//             <h2 className='text-gray-400 text-sm'>{doctor.attributes?.Address}</h2>
//           </div>

//             </div>
//         </div>
//       ))}
//     </div>
//     </div>
    
//   )
// }

// export default DoctorList

import React from 'react'
import DoctorCard from './DoctorCard'  // Asegúrate de que la ruta de importación sea correcta
import { translateCategory } from '../_utils/translations'

const DoctorList = ({doctorList,heading="Doctores Populares"}) => {
  
  return (
    <div className='mb-10  px-10 flex-flex-col items-center '>
      <h2 className='font-bold text-3xl my-5 flex justify-center'>{heading}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 gap-7 lg:grid-cols-4 justify-items-center '>
        {doctorList.length>0?doctorList.map((doctor,index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))
      :
      //Skelton Effect
      [1,2,3,4,5,6].map((item, index)=>(
      <div className='h-[350px] bg-slate-200 w-[240px] rounded-lg animate-pulse'>

      </div>

      ))
      }
      </div>
    </div>
  )
}

export default DoctorList;