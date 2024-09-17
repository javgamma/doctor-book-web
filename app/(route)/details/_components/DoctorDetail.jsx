import { translateCategory } from '@/app/_utils/translations';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment';

const DoctorDetail = ({doctor}) => {

    const socialMediaList=[
        {
            id:1,
            icon:'/youtube.png',
            url:''
        },
        {
            id:2,
            icon:'/linkedin.png',
            url:''
        },
        {
            id:3,
            icon:'/twitter.png',
            url:''
        },
        {
            id:4,
            icon:'/facebook.png',
            url:''
        }
    ]

    console.log(doctor);
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-center  sm:w-[460px] md:justify-items-start border p-5 mt-5 rounded-xl lg:w-[850px]">
      {/** Doctor image */}
      <div>
        <Image
          src={doctor.data.attributes?.image?.data?.attributes?.url}
          width={400}
          height={400}
          alt="Doctor image"
          className="rounded-lg w-[200px] h-[280px] md:h-[250px] object-cover"
        />
      </div>
      {/** Doctor info */}
      <div className="col-span-2 mt-5 flex flex-col gap-2 items-baseline  md:pl-10 lg:px-10 ">
        <h2 className="font-bold text-2xl">{doctor.data.attributes?.name}</h2>
        <h2 className="flex gap-2 text-gray-500 text-md">
          <GraduationCap />
          <span>
            {doctor.data.attributes?.Year_of_Experience} años de experiencia
          </span>
        </h2>
        <h2 className="flex gap-2 text-gray-500 text-md">
          <MapPin />
          <span>{doctor.data.attributes?.Address}</span>
        </h2>
        <h2 className="text-[14px] bg-blue-100 p-[2px] ml-2 rounded-full px-2 text-primary self-start">
          {translateCategory(
            doctor.data.attributes?.categories?.data?.[0]?.attributes?.Name
          )?.replace(/s$/, "") || "Categoría no disponible"}
        </h2>
        <div className="flex gap-3 mt-4">
          {socialMediaList.map((item, index) => (
            <Image src={item.icon} key={index} width={30} height={30} />
          ))}
        </div>
        <BookAppointment doctor={doctor}/>
      </div>
      </div>
      <div className='p-3 border-[1px] rounded-lg mt-5  sm:w-[460px] lg:w-[850px]'>
         <h2 className='font-bold text-[20px]'>About Me</h2>
         <p className='text-gray-500 tracking-wide mt-2'>{doctor.data.attributes.About}</p>
       </div>
    </>
  );
}

export default DoctorDetail
