import { Button } from '@/components/ui/button'
import { Activity, HeartPulse } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
      <Button>Sign in </Button>
    </div>
  );

}

export default Header
