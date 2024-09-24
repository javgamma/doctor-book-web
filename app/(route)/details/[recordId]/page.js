"use client"
import { useParams } from 'next/navigation'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail'
import DoctorSuggestionList from '../_components/DoctorSuggestionList'

const Details = (params) => {
 
  const { recordId } = useParams(); // Esto extrae el 'id' de la URL
  
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recordId) { // Solo intenta buscar el doctor si el ID existe
      getDoctorById(recordId);
    }
  }, [recordId]);

  const getDoctorById = async (id) => {
    console.log('Getting doctor with ID:', id);
    try {
      setLoading(true);
      const response = await GlobalApi.getDoctorById(id);
      console.log('API Response:', response);

      if (response && response.data) {
        setDoctor(response.data);
      } else {
        setError('No se encontraron datos del doctor');
      }
    } catch (err) {
      console.error('Error fetching doctor:', err);
      setError('Error al cargar los datos del doctor');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!doctor) return <div>No se encontró el doctor</div>;


  return (
    <div className=' flex  flex-col pt-3  md:items-center md:px-10  min-h-screen my-5 px-4'>
      <h2 className='flex justify-center  font-bold text-[22px] '>Información detallada</h2>

      {/* <div className='px-5 grid grid-cols-1 sm:grid-cols-4  md:grid-cols-4 lg:grid-cols-4 '> */}
        <div className='md:flex'>
        {/* Doctor Detail  */}
       <div className='md:flex'>
       {doctor&&<DoctorDetail doctor={doctor}/>}
       </div>
        {/* Doctor Suggestion  */}
        <div>
          {/* <DoctorSuggestionList/> */}
        <DoctorSuggestionList/>
       
        </div>
      </div>
    </div>
  )
}

export default Details
