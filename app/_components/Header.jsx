// "use client"
// import { Button } from '@/components/ui/button'
// import { LoginLink, LogoutLink, useKindeAuth, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import { Activity, HeartPulse } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import Logotype from './Logotype'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"



// const Header = () => {
//     const menu = [
//        { id:1,
//         name:'Inicio',
//         path:'/'
//         },
//        { id:2,
//         name:'Descubrir',
//         path:'/'
//         },
//        { id:3,
//         name:'Contáctanos',
//         path:'/'
//         },
//        { id:4,
//         name:'Información',
//         path:'/'
//         }
//     ] 
    
// const {isAuthenticated} = useKindeBrowserClient();
// console.log(isAuthenticated);
//     const {user,getUser} = useKindeBrowserClient();
//     const alsoUser = getUser();

//     // const [isLoading, setIsLoading]= useState(true);

// console.log(alsoUser)

// useEffect(()=>{
//   console.log(alsoUser);
// },[user])
// console.log(user);

// <div></div>


//   return (
//     <div className="flex items-center justify-between p-4 shadow-sm">
//       <div className="flex items-center gap-10">
//         {/* <Image src="/logo.svg" width={180} height={80} alt="logo" /> */}
//         {/* <div className='flex   gap-1 h-9 items-center justify-center px-2'>
//         <Activity className='bg-[#0955E5]  rounded-3xl p-1.5'color='#FFFFFF' size={35} />
//         <h1 className='text-xl font-bold text-[#0955E5]'>
//           medi<span className='text-gray-800'>conecta</span>
//         </h1>
//         </div> */}
//         <Logotype />
//         <ul className="md:flex gap-8 hidden">
//           {menu.map((item, index) => (
//             <Link href={item.path} key={index}>
//               <li 
//                 className="hover:text-primary hover:scale-105
//             transition-all ease-in-out"
//               >
//                 {item.name}
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </div>
//       {isAuthenticated ? (
//         <div className="flex items-center gap-4 mr-4">
//           <span>Bienvenido, {user?.given_name || user?.email}</span>
       
//           <Popover>
//           <PopoverTrigger>
//                <Image
//             src={user?.picture}
//             width={45}
//             height={45}
//             alt="icon"
//             className="rounded-full"
//           />
//           </PopoverTrigger>
//           <PopoverContent className="w-30 mr-1">
//           <ul className='flex flex-col gap-2 mr'>
//             <li className='hover:bg-slate-200 cursor-pointer p-1 rounded-md flex items-center justify-end'>Mis citas</li>
//             <li className='hover:bg-slate-200 cursor-pointer p-1 rounded-md flex items-center justify-end'>sinespecificar</li>
//             <li className='hover:bg-slate-200 cursor-pointer p-1 rounded-md flex items-center justify-end'><LogoutLink>Cerrar sesión</LogoutLink></li>
           
//           </ul>
//           </PopoverContent>
//           </Popover>

//           {/* <LogoutLink>
//                         <Button>Cerrar sesión</Button>
//                     </LogoutLink> */}
//         </div>
//       ) : (
//         <LoginLink>
//           <Button>Iniciar sesión</Button>
//         </LoginLink>
//       )}
//       {/* <div>
//               <Image
//               src={user?.picture}
//               width={45}
//               height={45}
//               alt="icon"
//               className='rounded-full'>

//               </Image>
//             </div> */}
//     </div>
//   );

// }

// export default Header

"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Logotype from './Logotype'

const menu = [
  { id: 1, name: 'Inicio', path: '/' },
  { id: 2, name: 'Descubrir', path: '/' },
  { id: 3, name: 'Contáctanos', path: '/' },
  { id: 4, name: 'Información', path: '/' }
]

const Header = () => {
  const { isAuthenticated, user } = useKindeBrowserClient()

  console.log(user)

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Logotype />
        <ul className="md:flex gap-8 hidden">
          {menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className="hover:text-primary hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {isAuthenticated ? (
        <div className="hidden md:flex md:items-center md:gap-4 md:mr-4">
          <span>Hola, {user?.given_name || user?.email}</span>
          <Popover>
            <PopoverTrigger>
              {user?.picture ? (
                <Image
                  src={user.picture}
                  width={40}
                  height={40}
                  alt="User icon"
                  className="rounded-full"
                />
              ) : (
                <div className="w-[45px] h-[45px] bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">?</span>
                </div>
              )}
            </PopoverTrigger>
            <PopoverContent className="w-30 mr-1">
              <ul className='flex flex-col gap-2 mr'>
                
                <Link href={'/my-booking'} className='hover:bg-slate-200 cursor-pointer p-1 rounded-md flex items-center justify-end'>Mis citas
                </Link>
               
                <li className='hover:bg-slate-200 cursor-pointer p-1 rounded-md flex items-center justify-end'>
                  <LogoutLink>Cerrar sesión</LogoutLink>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <LoginLink>
          <Button>Iniciar sesión</Button>
        </LoginLink>
      )}
    </div>
  )
}

export default Header