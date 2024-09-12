"use client"
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import { categoryTranslations, translateCategory } from '@/app/_utils/translations';

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
    <div className='mt-5'>
      <DoctorList heading={translateCategory(params.categoryName)}
      doctorList={doctorList}/>
  
    </div>
  )
}

export default Search;
