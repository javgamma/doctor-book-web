"use client";
import { useParams } from "next/navigation";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetail from "../_components/DoctorDetail";
import DoctorSuggestionList from "../_components/DoctorSuggestionList";

const Details = (params) => {
  const { recordId } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recordId) {
      getDoctorById(recordId);
    }
  }, [recordId]);

  const getDoctorById = async (id) => {
    try {
      setLoading(true);
      const response = await GlobalApi.getDoctorById(id);

      if (response && response.data) {
        setDoctor(response.data);
      } else {
        setError("No se encontraron datos del doctor");
      }
    } catch (err) {
      setError("Error al cargar los datos del doctor");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className=" flex  flex-col pt-3  md:items-center md:px-10  min-h-screen my-5 px-4">
        <h2 className="flex justify-center  font-bold text-[22px] ">
          Información detallada
        </h2>
        <div class="md:flex gap-4 mt-8 animate-pulse">
          <div>
            <div class="flex flex-col md:flex items-center lg:items-start bg-blue-50 pb-4  rounded-lg">
              <div class="flex lg:pl-8">
                <div>
                  <div class="rounded-lg flex w-[120px] h-[200px] md:h-[250px] lg:w-[180px] lg:h-[230px] mt-4 object-cover bg-gray-200"></div>
                </div>
                <div class="col-span-2 pl-4 mt-5 flex flex-col gap-2 items-baseline md:pl-10 lg:px-10 lg:ml-0">
                  <div class="h-5 bg-gray-400 rounded w-[120px]"></div>
                  <div class="h-4 bg-gray-400 rounded w-[80px]"></div>
                  <div class="h-4 bg-gray-400 rounded w-[80px]"></div>
                  <div class="h-4 bg-gray-400 rounded w-[90px]"></div>
                </div>
              </div>
            </div>

            <div class="flex my-4">
              <div class="flex flex-col w-fit md:items-start rounded-lg mt-5 md:w-[400px] lg:w-[850px]">
                <div class="p-1 flex items-center">
                  <div class="h-6 bg-gray-200 rounded w-[80px]"></div>
                </div>
                <div class="text-gray-500 tracking-wide mt-2 ml-8 h-6 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex px-4 w-full place-items-center ">
            <div class="h-6 bg-gray-200 rounded w-1/2 mb-5"></div>
            <div class="flex w-full h-40 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (!doctor) return <div>No se encontró el doctor</div>;

  return (
    <div className=" flex  flex-col pt-3  md:items-center md:px-10  min-h-screen my-5 px-4">
      <h2 className="flex justify-center  font-bold text-[22px] ">
        Información detallada
      </h2>
      <div className="md:flex">
        <div className="md:flex">
          {doctor && <DoctorDetail doctor={doctor} />}
        </div>

        <div>
          <DoctorSuggestionList />
        </div>
      </div>
    </div>
  );
};

export default Details;
