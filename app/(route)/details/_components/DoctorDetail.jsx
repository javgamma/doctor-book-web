import { translateCategory } from "@/app/_utils/translations";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import BookAppointment from "./BookAppointment";
import DoctorSuggestionList from "./DoctorSuggestionList";

const DoctorDetail = ({ doctor }) => {
  const doctorCategory =
    doctor.data.attributes?.categories?.data?.[0]?.attributes?.Name;

  return (
    <div className="md:flex gap-4 mt-8">
      <div>
        <div className="flex flex-col   md:flex items-center lg:items-start bg-blue-50 pb-4  rounded-lg">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-[300px] md:w-[600px] md:justify-items-start border p-5 mt-5 rounded-xl lg:w-[650px]"> */}
          <div className="flex lg:pl-8">
            <div>
              <Image
                src={doctor.data?.attributes?.Image?.data?.attributes?.url}
                key={doctor.data.id}
                width={400}
                height={400}
                alt="Doctor image"
                className="rounded-lg flex  w-[120px] h-[200px] md:h-[250px] lg:w-[180px] lg:h-[230px] mt-4 object-cover"
              />
            </div>
            <div className=" col-span-2  pl-4 mt-5 flex flex-col gap-2 items-baseline md:pl-10 lg:px-10 lg:ml-0">
              <h2 className="font-bold text-2xl text-terciary">
                {doctor.data.attributes?.Name}
              </h2>
              <h2 className="flex gap-2 text-gray-500 text-sm">
                <GraduationCap />
                <span>
                  {doctor.data.attributes?.Year_of_Experience} años de
                  experiencia
                </span>
              </h2>
              <h2 className="flex gap-2 text-gray-500 text-md mb-2">
                <MapPin />
                <span>{doctor.data.attributes?.Address}</span>
              </h2>
              <h2 className="text-sm bg-blue-100 p-[2px]  rounded-full px-2 text-primary self-start">
                {translateCategory(doctorCategory)?.replace(/s$/, "") ||
                  "Categoría no disponible"}
              </h2>
              <BookAppointment doctor={doctor} />
            </div>
          </div>
        </div>

        <div className="flex my-4">
          <div className="flex  flex-col w-fit md:items-start rounded-lg mt-5  md:w-[400px] lg:w-[850px]">
            <div className="p-1 flex  items-center">
              <h2 className="font-bold text-[20px]  flex ml-8 ">
                Acerca de mi:
              </h2>
            </div>
            <p className="text-gray-500 tracking-wide mt-2 ml-8">
              {doctor.data.attributes?.About}
            </p>
          </div>
        </div>
      </div>
      {/* Doctor suggestions */}
      <div className="flex flex-col md:flex px-4 w-full place-items-center ">
        <h2 className="flex justify-center w-full mb-5 font-bold text-[20px]">
          Otras personas también han visto
        </h2>
        <DoctorSuggestionList category={doctorCategory} />
      </div>
    </div>
  );
};

export default DoctorDetail;
