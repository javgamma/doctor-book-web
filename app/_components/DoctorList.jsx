import React from 'react'
import DoctorCard from './DoctorCard'
import { translateCategory } from '../_utils/translations'

const DoctorList = ({doctorList,heading="Doctores Populares"}) => {
  
  return (
    <div className=' pb-20 flex-flex-col items-center justify-items-center  bg-blue-50'>
      <h2 className='font-bold pt-10  text-3xl  flex justify-center'>{heading}</h2>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4   lg:gap-14 lg:px-10 justify-items-center '>
        {doctorList.length>0?doctorList.slice(0,4).map((doctor,index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))
      :
<div
  className="flex flex-col bg-neutral-300 w-56 h-[400px] animate-pulse rounded-xl p-4 gap-4"
>
  <div className="bg-neutral-400/50 w-full h-64 animate-pulse rounded-md"></div>
  <div className="flex flex-col gap-2">
    <div className="bg-neutral-200/50 w-full min-h-4 animate-pulse rounded-md"></div>
    <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
    <div className="bg-neutral-300/50 w-full h-4 animate-pulse rounded-md"></div>
    <div className="bg-neutral-500/50 w-2/4 h-4 animate-pulse rounded-md"></div>
  </div>
</div>

      }
      </div>
    </div>
  )
}

export default DoctorList;

// import React, { useState, useEffect } from 'react';
// import DoctorCard from './DoctorCard';

// const DoctorList = ({ doctorList, heading }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     if (doctorList) {
//       setDoctors(doctorList);
//       setIsLoading(false);
//     }
//   }, [doctorList]);

//   if (isLoading) {
//     return <div>Cargando doctores...</div>;
//   }

//   return (
//     <div>
//       <h2 className='font-bold text-3xl my-5 flex justify-center'>{heading}</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 lg:grid-cols-4 justify-items-center '>
//         {doctors.length > 0 ? (
//           doctors.map((doctor, index) => (
//             <DoctorCard key={index} doctor={doctor} />
//           ))
//         ) : (
//           <div>No se encontraron doctores.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorList;