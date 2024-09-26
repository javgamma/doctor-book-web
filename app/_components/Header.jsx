"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logotype from "./Logotype";

const menu = [
  { id: 1, name: "Inicio", path: "/" },
  { id: 2, name: "Contacto", path: "/contact" },
  { id: 3, name: "Trabaja con nosotros", path: "/" },
];

const Header = () => {
  const { isAuthenticated, user } = useKindeBrowserClient();

  console.log(user);

  return (
    <div className="flex items-center justify-between p-4  bg-slate-50">
        <Logotype />
      <div className="flex items-center gap-10">
        <ul className="md:flex gap-8 lg:flex  hidden">
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
        <div className="flex items-center pr-2 gap-2 md:flex md:items-center md:gap-4 md:mr-4">
          {/* <span className='font-semibold text-terciary'>Hola, {user?.given_name || user?.email}</span> */}

          <Popover>
            <PopoverTrigger>
              {user?.picture ? (
                <Image
                  src={user.picture}
                  width={50}
                  height={50}
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
              <ul className="flex flex-col gap-2 mr">
                <Link
                  href={"/my-booking"}
                  className="hover:bg-slate-200 cursor-pointer p-1 rounded-md flex items-center justify-end"
                >
                  Mis citas
                </Link>

                <li className="hover:bg-slate-200 cursor-pointer p-1 rounded-md flex items-center justify-end">
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
  );
};

export default Header;
