"use client"
import { Button } from "@/components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {

  // const [doctorList, setDoctorList] = useState([]);
  // useEffect(()=>{
  //   getDoctorList()
  // },[])

  // const getDoctorList=()=>{
  //   GlobalApi.getDoctorList().then(responseDoctor=>{
  //     console.log(responseDoctor.data.data);
  //     setDoctorList(responseDoctor.data.data)
  //   })
  // }

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then(responseDoctor => {
      console.log(responseDoctor.data.data);
      setDoctorList(responseDoctor.data.data);
    });
  };


  return (
  <div>
   <Hero/>
   <CategorySearch/>
   <DoctorList doctorList={doctorList}/>
  </div>
  );
}
