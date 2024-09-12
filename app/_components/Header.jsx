"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, LogoutLink, useKindeAuth, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Activity, HeartPulse } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logotype from './Logotype'


const Header = () => {
    const menu = [
       { id:1,
        name:'Inicio',
        path:'/'
        },
       { id:2,
        name:'Descubrir',
        path:'/'
        },
       { id:3,
        name:'Contáctanos',
        path:'/'
        },
       { id:4,
        name:'Información',
        path:'/'
        }
    ] 
    
const {isAuthenticated} = useKindeBrowserClient();
console.log(isAuthenticated);
    const {user,getUser} = useKindeBrowserClient();
    const alsoUser = getUser();

    // const [isLoading, setIsLoading]= useState(true);

console.log(alsoUser)

useEffect(()=>{
  console.log(alsoUser);
},[user])
console.log(user);

<div></div>


  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        {/* <Image src="/logo.svg" width={180} height={80} alt="logo" /> */}
        {/* <div className='flex   gap-1 h-9 items-center justify-center px-2'>
        <Activity className='bg-[#0955E5]  rounded-3xl p-1.5'color='#FFFFFF' size={35} />
        <h1 className='text-xl font-bold text-[#0955E5]'>
          medi<span className='text-gray-800'>conecta</span>
        </h1>
        </div> */}
        <Logotype/>
        <ul className="md:flex gap-8 hidden">
          {menu.map((item, index) => (
            <Link href={item.path}>
            <li className='hover:text-primary hover:scale-105
            transition-all ease-in-out'>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      {isAuthenticated ? (
                <div className="flex items-center gap-4">
                    <span>Bienvenido, {user?.given_name || user?.email}</span>
                    <LogoutLink>
                        <Button>Cerrar sesión</Button>
                    </LogoutLink>
                </div>
            ) : (
                <LoginLink>
                    <Button>Iniciar sesión</Button>
                </LoginLink>
            )}
            <div>
              <Image
              src={user?.picture}
              width={45}
              height={45}
              alt="icon"
              className='rounded-full'>

              </Image>
            </div>

    </div>
  );

}

export default Header
