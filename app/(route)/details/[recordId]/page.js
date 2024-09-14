"use client"
import { useParams } from 'next/navigation'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

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
    <div className='p-5 md:px-10'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4 '>
        {/* Doctor Detail  */}
        <div className=' col-span-3'>
        {/* {doctor&& <DoctorDetail doctor={doctor} />} */}
        <h3>doctor details comentado</h3>
         
        </div>
        {/* Doctor Suggestion  */}
        <div>
          {/* <DoctorSuggestionList/> */}
          <h2>DoctorSuggestionList comentado </h2>
        </div>
      </div>
    </div>
  )
}

export default Details
