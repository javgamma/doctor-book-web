"use client";
import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  translateCategory,
  categoryTranslations,
} from "@/app/_utils/translations";
import Link from "next/link";
import {
  ArrowLeftCircle,
  ArrowLeftToLine,
  LucideArrowLeftToLine,
  LucideCircleArrowLeft,
} from "lucide-react";

const Search = ({ params }) => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    GlobalApi.getDoctorsByCategory(params.categoryName).then((response) => {
      setDoctorList(response.data.data);
    });
  };
  return (
    <div className="mt-5 flex flex-col">
      <Link href={"/"} className="ml-10 flex gap-2 items-center md:hidden">
        <LucideCircleArrowLeft size={30} className="text-blue-600" />
        <span>Atrás</span>
      </Link>
      <DoctorList
        heading={translateCategory(params.categoryName)}
        doctorList={doctorList}
      />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Estos son algunos datos que nos respaldan
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Para Mediconecta tu eres importante y seguiremos trabajando para
            seguir brindandote el mejor servicio y nos confies tu salud y la de
            tu familia.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Clientes satisfechos
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              4.8k+
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Médicos Especializados
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              85+
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Premios Recibidos
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              4
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Vidas salvadas con nuestro servicio de Urgencias
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              53k+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Search;
