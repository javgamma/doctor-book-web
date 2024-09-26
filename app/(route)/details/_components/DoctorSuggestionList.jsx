import GlobalApi from "@/app/_utils/GlobalApi";
import { translateCategory } from "@/app/_utils/translations";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DoctorSuggestionList = ({ category }) => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, [category]);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      const filteredDoctors = resp.data.data.filter((doctor) =>
        doctor.attributes?.categories?.data?.some(
          (categoryEqual) => categoryEqual.attributes?.Name === category
        )
      );
      setDoctorList(filteredDoctors);
    });
  };

  return (
    <div>
      {doctorList.map((doctor) => (
        <Link
          href={"/details/" + doctor.id}
          key={doctor.id}
          className="mb-4 p-4 border shadow-sm w-full cursor-pointer hover:bg-slate-100 rounded-lg flex items-center gap-4"
        >
          <Image
            src={doctor.attributes?.Image?.data?.attributes?.url}
            width={100}
            height={100}
            alt="imagen doctor"
            className="w-[110px] h-[110px] rounded-full object-cover"
          />
          <div className="mt-4 flex-col flex gap-1 items-baseline">
            <h2 className=" text-xl font-semibold ">
              {doctor.attributes.Name}
            </h2>
            <h2 className="text-md bg-blue-100 p-1 rounded-full px-2 text-primary mb-6">
              {translateCategory(
                doctor.attributes.categories?.data[0]?.attributes?.Name
              )?.replace(/s$/, "") || "Categoría no disponible"}
            </h2>
            <h2 className="text-primary text-md flex gap-2">
              Experiencia: {doctor.attributes.Year_of_Experience} años
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DoctorSuggestionList;
