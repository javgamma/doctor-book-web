import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto  mb-12 px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16 bg-slate-50">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="hero"
              src="/bggroup.jpg"
              width={600}
              height={600}
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
            />
          </div>

          <div className="lg:py-24 flex flex-col justify-start items-center">
            <h2 className="flex text-terciary w-full text-2xl md:text-3xl justify-center font-bold lg:text-4xl  lg:mb-3 lg:justify-start">
              Tu médico especialista, ahora
            </h2>
            <h2 className="text-primary flex w-full text-3xl justify-center font-bold lg:text-4xl lg:justify-start">
              más cerca de ti
            </h2>

            <p className="flex  mt-4 justify-start md:pr-4 text-gray-600 lg:w-full">
              Encuentra y programa citas médicas con facilidad con los mejores
              especialistas y en tan solo unos clics.
            </p>

            <LoginLink>
              <Button className="mt-5 flex  text-md justify-items-center">
                Agenda tu cita
              </Button>
            </LoginLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
