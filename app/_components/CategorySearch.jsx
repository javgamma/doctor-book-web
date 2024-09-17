// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import GlobalApi from "../_utils/GlobalApi";

// const CategorySearch = () => {
//   const [categoryList, setCategoryList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     getCategoryList();
//   }, []);

//   // const getCategoryList = () => {
//   //   GlobalApi.getCategory().then((response) => {
//   //     console.log(response.data.data);
//   //     setCategoryList(response.data.data);
//   //   });
//   // };

//   const getCategoryList = () => {
//     GlobalApi.getCategory().then((response) => {
//       console.log(response.data.data);
//       setCategoryList(response.data.data);
//       setIsLoading(false);
//     }).catch(error => {
//       console.error("Error fetching categories:", error);
//       setIsLoading(false);
//     });
//   };
//   if (isLoading) {
//     return <div>Cargando categorías...</div>;
//   }

//   return (
//     <div className="mb-10 items-center flex flex-col gap-4 px-5">
//       <h2 className="font-bold text-4xl tracking-wide">Buscar médicos</h2>
//       <h2 className="text-gray-500">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cumque{" "}
//       </h2>

//       <div className="flex w-full max-w-sm mt-3 items-center space-x-2">
//         <Input type="text" placeholder="Busca tu medico" />
//         <Button type="submit">Buscar</Button>
//       </div>

//         {/**Lista de Categorias */}
        
//         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
//         {categoryList.length>0?categoryList.map((category)=>
//         <div key={category.id} className='flex flex-col text-center items-center mt-6 justify-center p-5 gap-2 bg-gray-100 m-2 rounded-xl cursor-pointer
//         hover:scale-110 transition-all ease-in-out '>
//           <Image src={category.attributes?.Icon?.data.attributes?.url}
//           alt='icon'
//           width={40}
//           height={40}/>
//           <label>{category?.attributes.Name}</label>
//         </div>
//         )):

//       [1,2,3,4,5,6,7,8,9].map((item, index)=>(
//         <div key={index}}className=' bg-slate-200 m-2 animate-pulse 
//         w-[130px] h-[120px] 
//         rounded-lg'>

//         </div>

//       ))
        
//       }
//         </div>

//     </div>
//   )
// };

// export default CategorySearch;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import { translateCategory } from "../_utils/translations";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((response) => {
      if (response.data && Array.isArray(response.data.data)) {
        setCategoryList(response.data.data);
        console.log(response);
      } else {
        console.error("Unexpected response format:", response);
      }
      setIsLoading(false);
    }).catch(error => {
      console.error("Error fetching categories:", error);
      setIsLoading(false);
    });
  };


  return (
    
    <div className="mb-10 items-center flex flex-col gap-4 px-5">
    <h2 className="font-bold text-4xl tracking-wide">Categorías</h2>
    {/* <h2 className="text-gray-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cumque
    </h2>

    <div className="flex w-full max-w-sm mt-3 items-center space-x-2">
      <Input type="text" placeholder="Busca tu medico" />
      <Button type="submit">Buscar</Button>
    </div> */}

    {/** Lista de Categorías */}
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6" >
      {categoryList.length > 0 ? categoryList.map((category) => (
        <Link href={"/search/"+category.attributes?.Name} key={category.id}>
          <div
            
            className="flex flex-col text-center items-center mt-6 justify-center p-5 gap-2 bg-gray-100 m-2 rounded-xl cursor-pointer hover:scale-110 transition-all ease-in-out"
          >
            <Image
              src={category.attributes?.Icon?.data.attributes?.url}
              alt="icon"
              width={40}
              height={40}
            />
            <label>{translateCategory(category.attributes?.Name)}</label> {/* Traducción */}
          </div>
        </Link>
      )) : 
      [1,2,3,4,5,6,7,8,9].map((item, index) => (
        <div
          key={index}
          className="bg-slate-200 m-2 animate-pulse w-[130px] h-[120px] rounded-lg"
        />
      ))}
    </div>
  </div>
  );
};

export default CategorySearch;

