"use client"
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import { categoryTranslations, translateCategory } from '@/app/_utils/translations';
import Link from 'next/link';
import { ArrowLeftCircle, ArrowLeftToLine, LucideArrowLeftToLine, LucideCircleArrowLeft } from 'lucide-react';

const Search = ({params}) => {

  const [doctorList, setDoctorList]=useState([]);

  useEffect(()=>{
    // console.log(params.categoryName);
    getDoctors();
  }, [])

  const getDoctors=()=>{
    GlobalApi.getDoctorsByCategory(params.categoryName).then(response=>{
      // console.log(response);
      setDoctorList(response.data.data);
    })
  }
  return (
    <div className='mt-5 flex flex-col'>
      <Link href={"/"} className='ml-10 flex gap-2 items-center md:hidden'>
      <LucideCircleArrowLeft size={30} className='text-blue-600'/>
      <span>Atrás</span>
        </Link>
      <DoctorList heading={translateCategory(params.categoryName)}
      doctorList={doctorList}/>
      
  
    </div>
  )
}

export default Search;
