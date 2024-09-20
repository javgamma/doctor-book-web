"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { translateCategory } from '@/app/_utils/translations';
  

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    // const params=usePathname();

    useEffect(() => {
      getCategoryList();
    //   console.log(params);
    }, []);

    const getCategoryList = () => {
      GlobalApi.getCategory()
        .then((response) => {
          console.log(response.data);
          setCategoryList(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
          setIsLoading(false);
        });
    };

    const isSelected = (categoryName) => {
        return pathname.includes(`/search/${categoryName}`);
      };


  return (
    <div className=" h-screen fixed mt-5 flex flex-col px-2 ">
      <Command>
        <CommandInput placeholder="Escribe la especialidad..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Categorías">
            {categoryList.length>0?categoryList.map((category)=>(
                <CommandItem key={category.id}>
                  <Link href={"/search/"+category?.attributes?.Name}
                  className={`p-2 flex gap-2 text-[12px] items-center
                   rounded-md cursor-pointer w-full 
                  ${isSelected(category.attributes?.Name) ? 'bg-teal-100' : ''}
                  `}>
                    <Image
                      src={category.attributes?.Icon?.data?.attributes?.url}
                      width={25}
                      height={25}
                      alt={category.attributes.Name}
                    />
                    <label>{translateCategory(category.attributes.Name)}</label>
                  </Link>
                </CommandItem>
              )) : 
      [1,2,3,4,5,6,7,8,9].map((item, index) => (
        <div
          key={index}
          className="bg-slate-200 m-2 animate-pulse w-[190px] h-[30px] rounded-lg"
        />))}

          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
